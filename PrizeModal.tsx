import React, { useState, useEffect } from 'react';
import { TongueTwister, PrizeItem } from './types.ts';
import { TONGUE_TWISTERS, PRIZE_ITEMS } from './tongueTwisters.ts';
import { soundManager } from './soundEffects.ts';
import { Trophy, Gift, Volume2, CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PrizeModalProps {
  onClaimPrize: (bonusPoints: number, prize: PrizeItem) => void;
}

export const PrizeModal: React.FC<PrizeModalProps> = ({ onClaimPrize }) => {
  // Pick random tongue twister
  const [currentTwisterIndex, setCurrentTwisterIndex] = useState<number>(() =>
    Math.floor(Math.random() * TONGUE_TWISTERS.length)
  );
  // Pick random prize
  const [prize] = useState<PrizeItem>(() =>
    PRIZE_ITEMS[Math.floor(Math.random() * PRIZE_ITEMS.length)]
  );

  const [hasSaid, setHasSaid] = useState<boolean>(false);

  const twister = TONGUE_TWISTERS[currentTwisterIndex];

  useEffect(() => {
    soundManager.playSectorLand(true);
    // Fire confetti for prize sector
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  }, []);

  const handleNextTwister = () => {
    setCurrentTwisterIndex((prev) => (prev + 1) % TONGUE_TWISTERS.length);
    setHasSaid(false);
  };

  const handleListenSpeech = () => {
    soundManager.speakSpanish(twister.spanish);
  };

  const handleClaim = () => {
    onClaimPrize(prize.bonusPoints, prize);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/40 border-2 border-yellow-400 rounded-3xl p-5 sm:p-7 shadow-2xl shadow-yellow-500/20 text-slate-100 flex flex-col max-h-[92vh] overflow-y-auto">
        
        {/* Top Header */}
        <div className="text-center pb-3 border-b border-amber-500/30">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-white font-black text-sm sm:text-base uppercase tracking-widest shadow-md animate-bounce">
            <Gift className="w-5 h-5" />
            <span>СЕКТОР ПРИЗ! • ՍԵԿՏՈՐ ՄՐՑԱՆԱԿ!</span>
            <Gift className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm text-amber-200 mt-2 font-medium">
            Մրցանակը ստանալու համար ասա այս իսպանական շուտասելուկը (trabalenguas):
          </p>
        </div>

        {/* Tongue Twister Card */}
        <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-slate-800/90 border-2 border-amber-400/80 shadow-xl relative">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-black text-amber-400 uppercase tracking-wide flex items-center gap-1.5">
              <span>Շուտասելուկ #{twister.id} / 6</span>
            </span>

            <button
              type="button"
              onClick={handleNextTwister}
              className="text-xs text-slate-400 hover:text-amber-300 flex items-center gap-1 font-semibold transition-colors px-2 py-1 rounded bg-slate-700/60 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Փոխել շուտասելուկը</span>
            </button>
          </div>

          {/* Spanish text */}
          <div className="my-2">
            <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-2">
              <span>🇪🇸 Español</span>
              <button
                type="button"
                onClick={handleListenSpeech}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 text-xs font-bold transition-all cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Լսել արտասանությունը</span>
              </button>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-black text-white leading-relaxed tracking-wide">
              «{twister.spanish}»
            </p>
          </div>

          {/* Armenian translation */}
          <div className="mt-3 pt-3 border-t border-slate-700/80">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-0.5">
              🇦🇲 Հայերեն
            </div>
            <p className="text-sm sm:text-base font-bold text-amber-100">
              «{twister.armenian}»
            </p>
            {twister.pronunciationTip && (
              <p className="text-xs text-slate-400 mt-1 italic">
                💡 Հուշում. {twister.pronunciationTip}
              </p>
            )}
          </div>
        </div>

        {/* Practice Voice & Actions */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Audio Listen */}
          <button
            type="button"
            onClick={handleListenSpeech}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
            <span>Լսել արտասանությունը</span>
          </button>

          {/* "I said it!" direct confirm */}
          <button
            type="button"
            onClick={() => {
              setHasSaid(true);
              soundManager.playVictory();
              confetti({ particleCount: 60, spread: 80 });
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Ասացի! • ¡Lo he dicho!</span>
          </button>
        </div>

        {/* Prize Reveal Box when said */}
        {hasSaid ? (
          <div className="mt-5 p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 via-yellow-500/15 to-purple-500/20 border-2 border-yellow-400 animate-in zoom-in-95 duration-300 text-center">
            <div className="text-4xl mb-1">{prize.icon}</div>
            <div className="text-xs font-bold text-yellow-300 uppercase tracking-wider">
              Դու շահեցիր գլխավոր ֆուտբոլային մրցանակը!
            </div>
            <div className="text-xl sm:text-2xl font-black text-white mt-1">
              🇪🇸 {prize.nameEs}
            </div>
            <div className="text-sm font-bold text-amber-200 mt-0.5">
              🇦🇲 {prize.nameAm}
            </div>
            <div className="inline-block mt-2 px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow">
              +{prize.bonusPoints} ՄԻԱՎՈՐ + ԱՆՎՃԱՐ ՏԱՌ ՏԱԽՏԱԿԻՆ!
            </div>

            <button
              id="claim-prize-btn"
              type="button"
              onClick={handleClaim}
              className="mt-4 w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 font-black text-base shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 fill-current" />
              <span>Վերցնել մրցանակը և շարունակել</span>
            </button>
          </div>
        ) : (
          <div className="mt-4 p-3 rounded-xl bg-slate-800/40 border border-slate-800 text-center text-xs text-slate-400">
            🎁 Կարդա շուտասելուկը և սեղմիր «Ասացի!», որպեսզի բացվի մրցանակային սնդուկը:
          </div>
        )}
      </div>
    </div>
  );
};
