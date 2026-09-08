import React, { useState } from 'react';
import { QuizQuestion, QuizOption, WheelSector } from './types.ts';
import { soundManager } from './soundEffects.ts';
import { Volume2, CheckCircle2, ChevronRight, MessageCircle, HelpCircle } from 'lucide-react';

interface QuizModalProps {
  question: QuizQuestion;
  sector: WheelSector;
  onComplete: (selectedOption: QuizOption, earnedPoints: number) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ question, sector, onComplete }) => {
  // Step 1: Armenian translation hidden until clicked on question
  const [showArmenian, setShowArmenian] = useState<boolean>(false);
  // Step 2: Options revealed once Armenian is opened
  const [showOptions, setShowOptions] = useState<boolean>(false);
  // Selected option (every option is correct as per user prompt!)
  const [selectedOption, setSelectedOption] = useState<QuizOption | null>(null);

  const handleRevealArmenian = () => {
    if (!showArmenian) {
      setShowArmenian(true);
      // Reveal options with a slight pleasant stagger
      setTimeout(() => {
        setShowOptions(true);
      }, 250);
    }
  };

  const handleSelectOption = (opt: QuizOption) => {
    setSelectedOption(opt);
    soundManager.playSectorLand(false);
  };

  const handleConfirm = () => {
    if (selectedOption) {
      onComplete(selectedOption, sector.value);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-5 sm:p-7 shadow-2xl shadow-amber-950/40 text-slate-100 flex flex-col max-h-[92vh] overflow-y-auto">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
            <span className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wide">
              {question.category}
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-extrabold text-xs sm:text-sm border border-amber-500/40">
            <span>Խաղադրույք՝ +{sector.value} միավոր</span>
          </div>
        </div>

        {/* Spanish Kid Dialog Header */}
        <div className="mt-4 flex items-center gap-3 bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-xl shadow-md shrink-0">
            👦⚽
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400">
              Испанский друг спрашивает тебя • Իսպանացի ընկերդ հարցնում է քեզ
            </div>
            <div className="text-xs text-amber-400/90 font-medium">
              «Կտտացրու հարցին՝ հայերեն թարգմանությունն ու տարբերակները բացելու համար»
            </div>
          </div>
        </div>

        {/* The Question Card (Clickable to reveal Armenian) */}
        <div
          id="question-card"
          onClick={handleRevealArmenian}
          className={`mt-4 p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border-2 relative select-none ${
            showArmenian
              ? 'bg-slate-800/90 border-amber-500/60 shadow-lg'
              : 'bg-gradient-to-r from-amber-500/15 via-slate-800 to-slate-800/80 border-amber-400/80 hover:border-amber-400 hover:scale-[1.01] shadow-md hover:shadow-amber-500/10'
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-xs font-extrabold text-amber-400 uppercase tracking-wider mb-1">
                <span>🇪🇸 Español (Իսպաներեն)</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    soundManager.speakSpanish(question.questionEs);
                  }}
                  className="p-1 rounded-md hover:bg-slate-700 text-amber-300 transition-colors"
                  title="Լսել արտասանությունը / Escuchar"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-black text-slate-50 leading-snug">
                {question.questionEs}
              </p>
            </div>
          </div>

          {/* Armenian Translation Reveal */}
          {showArmenian ? (
            <div className="mt-3 pt-3 border-t border-slate-700/80 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-0.5">
                🇦🇲 Հայերեն թարգմանություն
              </div>
              <p className="text-base sm:text-lg font-bold text-amber-200">
                {question.questionAm}
              </p>
            </div>
          ) : (
            <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex items-center justify-between text-xs text-amber-300 font-bold animate-pulse">
              <span>👉 Սեղմիր այստեղ թարգմանությունը տեսնելու համար</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/30">
                Կտտացնել
              </span>
            </div>
          )}
        </div>

        {/* Options Section */}
        {showOptions ? (
          <div className="mt-5 flex flex-col flex-1 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">
                Ինչպե՞ս կպատասխանես • ¿Qué responderías?
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                ✓ Յուրաքանչյուր պատասխան ճիշտ է!
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {question.options.map((opt) => {
                const isSelected = selectedOption?.key === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => handleSelectOption(opt)}
                    className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-200 border-2 cursor-pointer flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 border-yellow-200 shadow-lg shadow-amber-500/30 scale-[1.01]'
                        : 'bg-slate-800/80 hover:bg-slate-800 border-slate-700 hover:border-amber-500/50 text-slate-100'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`w-7 h-7 rounded-xl font-black text-sm flex items-center justify-center shrink-0 shadow-sm ${
                          isSelected
                            ? 'bg-slate-950 text-amber-400'
                            : 'bg-slate-700 text-amber-300'
                        }`}
                      >
                        {opt.key}
                      </span>
                      <div>
                        <div className={`font-extrabold text-sm sm:text-base ${isSelected ? 'text-slate-950' : 'text-slate-100'}`}>
                          {opt.textEs}
                        </div>
                        <div className={`text-xs mt-0.5 font-medium ${isSelected ? 'text-slate-800 font-semibold' : 'text-slate-400'}`}>
                          🇦🇲 {opt.textAm}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Action Bar */}
            {selectedOption && (
              <div className="mt-5 p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-3 animate-in fade-in zoom-in-95">
                <div className="flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-bold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Հիանալի պատասխան! +{sector.value} միավոր վաստակեցիր: Այժմ բացիր տառը:</span>
                </div>
                <button
                  id="confirm-answer-btn"
                  type="button"
                  onClick={handleConfirm}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
                >
                  <span>Առաջ՝ տառ ասելու</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Hint to click question */
          <div className="mt-6 text-center py-6 border-2 border-dashed border-slate-800 rounded-2xl">
            <p className="text-sm text-slate-400">
              👆 Կտտացրու վերևի հարցին՝ պատասխանի տարբերակները տեսնելու համար
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
