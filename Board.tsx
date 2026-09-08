import React from 'react';
import { Sparkles, Shield, HelpCircle } from 'lucide-react';

interface BoardProps {
  word: string;
  revealedLetters: Set<string>;
  onGuessLetter: (letter: string) => void;
  onOpenWordModal: () => void;
  isWordComplete: boolean;
  canGuessLetter: boolean;
}

const SPANISH_ALPHABET = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

export const Board: React.FC<BoardProps> = ({
  word,
  revealedLetters,
  onGuessLetter,
  onOpenWordModal,
  isWordComplete,
  canGuessLetter,
}) => {
  const letters = word.split('');
  const uniqueWordLetters = new Set(letters);
  const remainingUniqueLetters = [...uniqueWordLetters].filter(l => !revealedLetters.has(l)).length;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Category / Topic Header */}
      <div className="mb-3 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
          <Shield className="w-4 h-4 text-amber-400" />
          <span>Тема: Футбольная позиция • Ֆուտբոլային դիրք</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 mt-1.5 font-medium">
          «Игрок центра поля, который связывает оборону и нападение» • «Դաշտի կենտրոնի խաղացող»
        </p>
      </div>

      {/* The Famous Pole Chudes Board Display */}
      <div className="w-full max-w-4xl p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-2 border-amber-500/40 shadow-2xl shadow-amber-950/20">
        <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2.5 py-2">
          {letters.map((letter, idx) => {
            const isRevealed = revealedLetters.has(letter) || isWordComplete;
            return (
              <div
                key={`tile-${idx}`}
                className="flex flex-col items-center"
              >
                {/* Number index above tile */}
                <span className="text-[10px] text-slate-400 font-bold mb-1">
                  {idx + 1}
                </span>

                {/* 3D Tile */}
                <div
                  className={`w-9 h-12 sm:w-12 sm:h-16 md:w-14 md:h-18 rounded-lg flex items-center justify-center font-black text-xl sm:text-3xl md:text-4xl transition-all duration-500 transform shadow-lg ${
                    isRevealed
                      ? 'bg-gradient-to-b from-amber-200 via-amber-400 to-amber-500 text-slate-950 border-2 border-yellow-100 shadow-amber-500/30 rotate-0 scale-100'
                      : 'bg-gradient-to-b from-slate-800 to-slate-900 text-transparent border-2 border-slate-700 shadow-inner'
                  }`}
                  style={{
                    perspective: '1000px',
                  }}
                >
                  {isRevealed ? (
                    <span className="animate-in fade-in zoom-in duration-300 drop-shadow-sm font-sans">
                      {letter}
                    </span>
                  ) : (
                    <span className="text-slate-600 text-base sm:text-lg font-mono opacity-40">
                      ★
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Translation reveal when solved */}
        {isWordComplete && (
          <div className="mt-4 pt-3 border-t border-amber-500/30 text-center animate-in fade-in slide-in-from-bottom-2">
            <span className="inline-block px-4 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold text-sm sm:text-base border border-emerald-500/40">
              🇪🇸 Centrocampista = 🇦🇲 Կիսապաշտպան (Midfielder) ⚽
            </span>
          </div>
        )}
      </div>

      {/* Actions and Status Bar */}
      <div className="w-full max-w-4xl mt-3 flex flex-wrap items-center justify-between gap-3 px-2">
        <div className="text-xs sm:text-sm text-slate-300 flex items-center gap-2 font-medium">
          <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 font-bold text-amber-300">
            {14 - remainingUniqueLetters} / {uniqueWordLetters.size}
          </span>
          <span>յուրահատուկ տառեր բացված են ({remainingUniqueLetters} մնացել է)</span>
        </div>

        <button
          id="guess-whole-word-btn"
          onClick={onOpenWordModal}
          disabled={isWordComplete}
          className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md hover:shadow-purple-500/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span>Ասել ամբողջ բառը • Назвать слово</span>
        </button>
      </div>

      {/* Letter Keyboard Selection (when letter guess is enabled) */}
      <div className="w-full max-w-4xl mt-4 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <span>Իսպաներեն այբուբեն • Teclado Español</span>
            {canGuessLetter && (
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold animate-pulse">
                Ընտրիր տառ / Elige una letra
              </span>
            )}
          </span>
          <span className="text-[11px] text-slate-400">
            {canGuessLetter ? 'Քո հերթն է տառ ասելու' : 'Նախ պտտիր թմբուկը'}
          </span>
        </div>

        <div className="grid grid-cols-7 sm:grid-cols-9 md:grid-cols-14 gap-1 sm:gap-1.5">
          {SPANISH_ALPHABET.map(char => {
            const isGuessed = revealedLetters.has(char);
            const inWord = word.includes(char);
            const isClickable = canGuessLetter && !isGuessed && !isWordComplete;

            let btnStyle = 'bg-slate-800/80 text-slate-300 border-slate-700/60 hover:bg-slate-700';

            if (isGuessed) {
              if (inWord) {
                btnStyle = 'bg-amber-500/20 text-amber-400 border-amber-500/50 cursor-not-allowed opacity-60';
              } else {
                btnStyle = 'bg-slate-950 text-slate-600 border-slate-800 cursor-not-allowed line-through opacity-40';
              }
            } else if (canGuessLetter) {
              btnStyle = 'bg-slate-800 text-yellow-100 hover:bg-amber-500 hover:text-slate-950 border-amber-500/40 cursor-pointer shadow-sm hover:scale-105 active:scale-95 font-bold';
            } else {
              btnStyle = 'bg-slate-800/40 text-slate-500 border-slate-800 cursor-not-allowed';
            }

            return (
              <button
                key={`key-${char}`}
                onClick={() => isClickable && onGuessLetter(char)}
                disabled={!isClickable}
                className={`h-9 sm:h-10 rounded-lg text-sm sm:text-base font-black border transition-all duration-150 flex items-center justify-center select-none ${btnStyle}`}
              >
                {char}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
