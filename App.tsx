import React, { useState, useEffect } from 'react';
import { Wheel } from './Wheel.tsx';
import { Board } from './Board.tsx';
import { QuizModal } from './QuizModal.tsx';
import { PrizeModal } from './PrizeModal.tsx';
import { WordGuessModal } from './WordGuessModal.tsx';
import { QUIZ_QUESTIONS } from './questions.ts';
import { WheelSector, QuizQuestion, QuizOption, PrizeItem } from './types.ts';
import { soundManager } from './soundEffects.ts';
import {
  Trophy,
  Volume2,
  VolumeX,
  RotateCcw,
  Sparkles,
  BookOpen,
  HelpCircle,
  Award,
  ChevronRight,
  ShieldAlert,
  Flame,
  CheckCircle,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

const TARGET_WORD = 'CENTROCAMPISTA';

export default function App() {
  const [score, setScore] = useState<number>(0);
  const [revealedLetters, setRevealedLetters] = useState<Set<string>>(new Set());
  const [currentSector, setCurrentSector] = useState<WheelSector | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<QuizQuestion | null>(null);
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<number>>(new Set());
  const [prizesWon, setPrizesWon] = useState<PrizeItem[]>([]);
  const [questionsAnsweredCount, setQuestionsAnsweredCount] = useState<number>(0);

  // Modals state
  const [showQuizModal, setShowQuizModal] = useState<boolean>(false);
  const [showPrizeModal, setShowPrizeModal] = useState<boolean>(false);
  const [showWordGuessModal, setShowWordGuessModal] = useState<boolean>(false);
  const [showAllQuestionsModal, setShowAllQuestionsModal] = useState<boolean>(false);
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);

  // Turn status
  const [canGuessLetter, setCanGuessLetter] = useState<boolean>(false);
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const [lastNotification, setLastNotification] = useState<string>('Սկսելու համար պտտիր թմբուկը! • ¡Gira la ruleta para empezar!');
  const [multiplier, setMultiplier] = useState<number>(1);

  // Check victory
  const targetLettersSet = new Set(TARGET_WORD.split(''));
  const isWordComplete = [...targetLettersSet].every((char) => revealedLetters.has(char));

  useEffect(() => {
    if (isWordComplete) {
      soundManager.playVictory();
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.5 }
      });
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.4 }
        });
      }, 500);
      setLastNotification('🎉 ՀԱՂԹԱՆԱԿ! Բառը ամբողջությամբ գուշակված է՝ CENTROCAMPISTA! ⚽🏆');
    }
  }, [isWordComplete]);

  const toggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    soundManager.soundEnabled = nextState;
  };

  // Select next conversational question from 50 pool
  const getNextQuestion = (): QuizQuestion => {
    const available = QUIZ_QUESTIONS.filter((q) => !usedQuestionIds.has(q.id));
    const pool = available.length > 0 ? available : QUIZ_QUESTIONS;
    const randomIndex = Math.floor(Math.random() * pool.length);
    const chosen = pool[randomIndex];
    setUsedQuestionIds((prev) => new Set(prev).add(chosen.id));
    return chosen;
  };

  // Handle wheel landing
  const handleSectorSelected = (sector: WheelSector) => {
    setCurrentSector(sector);

    if (sector.type === 'prize') {
      // Sector PRIZE -> user requested tongue twisters!
      setShowPrizeModal(true);
      setLastNotification('🎁 ՍԵԿՏՈՐ ՄՐՑԱՆԱԿ! Ասա իսպանական շուտասելուկը!');
    } else if (sector.type === 'plus') {
      // Sector + -> Directly allows opening any letter on board
      setCanGuessLetter(true);
      setLastNotification('✨ ՍԵԿՏՈՐ «+»! Ընտրիր ցանկացած տառ տախտակի վրա!');
    } else if (sector.type === 'x2') {
      setMultiplier((prev) => prev * 2);
      const q = getNextQuestion();
      setActiveQuestion(q);
      setShowQuizModal(true);
      setLastNotification('🔥 ՍԵԿՏՈՐ x2! Միավորները կրկնապատկվում են: Պատասխանիր հարցին!');
    } else {
      // Points sector or Chance
      const q = getNextQuestion();
      setActiveQuestion(q);
      setShowQuizModal(true);
      setLastNotification(`🎯 Թմբուկը կանգնեց ${sector.label} վրա: Պատասխանիր իսպանացի ընկերոջդ հարցին!`);
    }
  };

  // Complete question dialog
  const handleQuizComplete = (selectedOption: QuizOption, points: number) => {
    setShowQuizModal(false);
    const earned = points * multiplier;
    setScore((prev) => prev + earned);
    setMultiplier(1);
    setQuestionsAnsweredCount((prev) => prev + 1);
    setCanGuessLetter(true);
    setLastNotification(`👏 Գերազանց է! Վաստակեցիր +${earned} միավոր: Այժմ ընտրիր տառ:`);
  };

  // Handle Sector Prize claim
  const handlePrizeClaim = (bonusPoints: number, prize: PrizeItem) => {
    setShowPrizeModal(false);
    setScore((prev) => prev + bonusPoints);
    setPrizesWon((prev) => [...prev, prize]);

    // Automatically open one unrevealed letter on the board as a prize bonus!
    const unrevealed = [...targetLettersSet].filter((l) => !revealedLetters.has(l));
    if (unrevealed.length > 0) {
      const freeLetter = unrevealed[Math.floor(Math.random() * unrevealed.length)];
      setRevealedLetters((prev) => new Set(prev).add(freeLetter));
      soundManager.playLetterOpen();
      setLastNotification(`🎁 Մրցանակը ստացված է! Բացվեց անվճար տառ՝ «${freeLetter}»!`);
    } else {
      setLastNotification('🎁 Մրցանակը ստացված է!');
    }
  };

  // Guess individual letter
  const handleGuessLetter = (letter: string) => {
    if (!canGuessLetter || isWordComplete) return;

    if (revealedLetters.has(letter)) {
      setLastNotification(`Տառ «${letter}» արդեն ընտրված է:`);
      return;
    }

    setRevealedLetters((prev) => new Set(prev).add(letter));
    setCanGuessLetter(false);

    if (TARGET_WORD.includes(letter)) {
      const occurrences = TARGET_WORD.split('').filter((c) => c === letter).length;
      soundManager.playLetterOpen();
      setScore((prev) => prev + occurrences * 150);
      setLastNotification(`🎉 Ճիշտ է! Տառ «${letter}» կա բառի մեջ (${occurrences} հատ)! Պտտիր թմբուկը հաջորդ քայլի համար:`);
    } else {
      soundManager.playLetterMiss();
      setLastNotification(`Տառ «${letter}» չկա բառի մեջ: Պտտիր թմբուկը նորից!`);
    }
  };

  // Guess the full word
  const handleGuessWholeWord = (inputWord: string): boolean => {
    if (inputWord === TARGET_WORD) {
      // Reveal all letters
      setRevealedLetters(new Set(TARGET_WORD.split('')));
      setScore((prev) => prev + 3000);
      setShowWordGuessModal(false);
      return true;
    }
    return false;
  };

  // Reset / Play again
  const handleResetGame = () => {
    setScore(0);
    setRevealedLetters(new Set());
    setCurrentSector(null);
    setActiveQuestion(null);
    setCanGuessLetter(false);
    setPrizesWon([]);
    setQuestionsAnsweredCount(0);
    setMultiplier(1);
    setLastNotification('Խաղը վերագործարկվեց: Պտտիր թմբուկը! • ¡Gira la ruleta!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md px-4 py-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Logo & Show Title */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-xl shadow-lg shadow-amber-500/20">
              ⚽
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-base sm:text-lg tracking-tight text-white">
                  ПОЛЕ ЧУДЕС
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-amber-500 text-slate-950 uppercase">
                  ES • AM
                </span>
              </div>
              <div className="text-[11px] text-amber-400/90 font-medium">
                Հրաշքների դաշտ • Իսպաներեն ֆուտբոլային վիկտորինա
              </div>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Score Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-amber-500/40 shadow-inner">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-slate-400 font-bold uppercase hidden sm:inline">Միավոր՝</span>
              <span className="text-sm sm:text-base font-black text-amber-300">
                {score}
              </span>
            </div>

            {/* Questions Bank modal button */}
            <button
              onClick={() => setShowAllQuestionsModal(true)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 cursor-pointer"
              title="Բոլոր 50 հարցերը (Բառարան)"
            >
              <BookOpen className="w-4 h-4" />
            </button>

            {/* Help / Game Rules */}
            <button
              onClick={() => setShowHelpModal(true)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 cursor-pointer"
              title="Ինչպես խաղալ"
            >
              <HelpCircle className="w-4 h-4" />
            </button>

            {/* Sound toggle */}
            <button
              onClick={toggleSound}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                soundOn
                  ? 'bg-slate-800 text-amber-400 border-amber-500/40'
                  : 'bg-slate-800 text-slate-500 border-slate-700'
              }`}
              title={soundOn ? 'Անջատել ձայնը' : 'Միացնել ձայնը'}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Reset */}
            <button
              onClick={handleResetGame}
              className="p-2 rounded-xl bg-slate-800 hover:bg-red-950 text-slate-400 hover:text-red-300 transition-colors border border-slate-700 cursor-pointer"
              title="Վերսկսել խաղը"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 flex flex-col items-center">
        
        {/* Stadium Broadcast Notification Banner */}
        <div className="w-full max-w-4xl mb-4 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-300">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping shrink-0" />
            <span>{lastNotification}</span>
          </div>
          {prizesWon.length > 0 && (
            <div className="flex items-center gap-1.5 text-xs text-yellow-200 shrink-0 font-bold">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>{prizesWon.length} մրցանակ</span>
            </div>
          )}
        </div>

        {/* 1. Letter Board Section */}
        <section className="w-full max-w-4xl mb-6">
          <Board
            word={TARGET_WORD}
            revealedLetters={revealedLetters}
            onGuessLetter={handleGuessLetter}
            onOpenWordModal={() => setShowWordGuessModal(true)}
            isWordComplete={isWordComplete}
            canGuessLetter={canGuessLetter}
          />
        </section>

        {/* 2. Wheel & Game Arena */}
        <section className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Info Column: Football Kid Story & Progress */}
          <div className="lg:col-span-4 flex flex-col gap-3 order-2 lg:order-1">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-2xl">🇪🇸⚽🇦🇲</span>
                <div>
                  <h4 className="text-xs font-black text-amber-400 uppercase tracking-wide">
                    Պատմություն • Historia
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium">
                    Հայաստանից տեղափոխված ֆուտբոլիստ տղա
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Նա նոր է Իսպանիայի դպրոցում և ֆուտբոլային թիմում: Իսպանացի երեխաները հարցեր են տալիս իրեն, և յուրաքանչյուր պատասխան օգնում է վաստակել միավորներ ու բացել գաղտնի բառը:
              </p>
            </div>

            {/* Quick Stats Box */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md flex items-center justify-around text-center">
              <div>
                <div className="text-xl font-black text-amber-400">{questionsAnsweredCount}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Հարցեր</div>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div>
                <div className="text-xl font-black text-emerald-400">{prizesWon.length}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Մրցանակներ</div>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div>
                <div className="text-xl font-black text-purple-400">{revealedLetters.size}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Տառեր</div>
              </div>
            </div>

            {/* Collected Prizes Badges */}
            {prizesWon.length > 0 && (
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-amber-500/30">
                <div className="text-xs font-black text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Շահած մրցանակները</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {prizesWon.map((p, i) => (
                    <span
                      key={`badge-${i}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200"
                      title={p.nameAm}
                    >
                      <span>{p.icon}</span>
                      <span className="truncate max-w-[120px]">{p.nameEs}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Center Column: The Pole Chudes Wheel (No Bankrupt!) */}
          <div className="lg:col-span-8 flex flex-col items-center justify-center order-1 lg:order-2 py-2">
            <Wheel
              onSectorSelected={handleSectorSelected}
              disabled={canGuessLetter || isWordComplete}
            />
          </div>
        </section>

        {/* Victory Celebration Card (Shown when word is completed) */}
        {isWordComplete && (
          <div className="w-full max-w-2xl mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-amber-500/20 via-slate-900 to-slate-950 border-2 border-yellow-400 shadow-2xl text-center animate-in zoom-in-95">
            <div className="text-5xl mb-2">🏆⚽🎉</div>
            <h2 className="text-2xl sm:text-3xl font-black text-yellow-300">
              ՇՆՈՐՀԱՎՈՐՈՒՄ ԵՆՔ! ¡ENHORABUENA!
            </h2>
            <p className="text-base sm:text-lg text-white font-extrabold mt-1">
              Գլխավոր բառը՝ <span className="text-amber-400 tracking-widest font-mono">CENTROCAMPISTA</span>
            </p>
            <p className="text-sm text-amber-200/90 mt-1 font-medium">
              Հայերեն թարգմանությունը՝ <span className="font-bold">ԿԻՍԱՊԱՇՏՊԱՆ</span>
            </p>
            <div className="mt-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              Ընդհանուր վաստակած միավորներ՝ <span className="text-amber-400 font-black text-base">{score}</span> • Պատասխանած հարցեր՝ <span className="text-white font-bold">{questionsAnsweredCount}</span>
            </div>
            <button
              onClick={handleResetGame}
              className="mt-5 px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-black text-base shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Խաղալ նորից • Jugar de nuevo</span>
            </button>
          </div>
        )}
      </main>

      {/* Quiz Modal */}
      {showQuizModal && activeQuestion && currentSector && (
        <QuizModal
          question={activeQuestion}
          sector={currentSector}
          onComplete={handleQuizComplete}
        />
      )}

      {/* Prize Modal (Sector Prize with the 6 tongue twisters) */}
      {showPrizeModal && (
        <PrizeModal onClaimPrize={handlePrizeClaim} />
      )}

      {/* Guess Whole Word Modal */}
      {showWordGuessModal && (
        <WordGuessModal
          onGuessWord={handleGuessWholeWord}
          onClose={() => setShowWordGuessModal(false)}
        />
      )}

      {/* 50 Questions All Explorer Modal */}
      {showAllQuestionsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="w-full max-w-3xl bg-slate-900 border-2 border-slate-700 rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-black text-amber-400">
                  50 Խոսակցական վիկտորինա (Իսպաներեն + Հայերեն)
                </h3>
                <p className="text-xs text-slate-400">
                  Ֆուտբոլ, դպրոց, անցյալ ժամանակ, ապագա և արագ արձագանքներ
                </p>
              </div>
              <button
                onClick={() => setShowAllQuestionsModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 mt-4 space-y-3 pr-1">
              {QUIZ_QUESTIONS.map((q) => (
                <div key={q.id} className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/60">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-400 mb-1">
                    <span>#{q.id} • {q.category}</span>
                    <button
                      onClick={() => soundManager.speakSpanish(q.questionEs)}
                      className="p-1 rounded hover:bg-slate-700 text-slate-300 hover:text-amber-300"
                      title="Լսել"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="font-extrabold text-sm text-slate-100">
                    🇪🇸 {q.questionEs}
                  </div>
                  <div className="text-xs text-emerald-300 mt-0.5">
                    🇦🇲 {q.questionAm}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Rules / Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="w-full max-w-lg bg-slate-900 border-2 border-slate-700 rounded-3xl p-5 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-lg font-black text-amber-400 flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                <span>Ինչպե՞ս խաղալ «Հրաշքների դաշտ»</span>
              </h3>
              <button
                onClick={() => setShowHelpModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">1</span>
                <div>
                  <strong className="text-white">Պտտիր թմբուկը:</strong> Այստեղ չկա «Սնանկ» (Банкрот) սեկտոր: Կան միավորներ, «+» և «Մրցանակ»:
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">2</span>
                <div>
                  <strong className="text-white">Կտտացրու հարցին:</strong> Սկզբում հարցը կտեսնես իսպաներեն: Կտտացրու դրան՝ հայերեն թարգմանությունն ու պատասխանի 4 տարբերակները բացելու համար:
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">3</span>
                <div>
                  <strong className="text-white">Յուրաքանչյուր պատասխան ճիշտ է:</strong> Ընտրիր քեզ դուր եկած պատասխանը, լսիր արտասանությունը և վաստակիր միավորներ:
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">4</span>
                <div>
                  <strong className="text-white">Սեկտոր «Մրցանակ»:</strong> Երբ ընկնի «ПРИЗ», ասա իսպանական 6 շուտասելուկներից մեկը և շահիր ֆուտբոլային նվերներ:
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">5</span>
                <div>
                  <strong className="text-white">Գլխավոր բառը:</strong> Գուշակիր տախտակի վրայի բոլոր տառերը կամ ասա ամբողջ բառը՝ «CENTROCAMPISTA» (Կիսապաշտպան):
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowHelpModal(false)}
              className="mt-6 w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all"
            >
              Հասկացա, սկսենք!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
