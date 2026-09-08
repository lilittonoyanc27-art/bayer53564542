import React, { useState } from 'react';
import { Sparkles, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { soundManager } from './soundEffects.ts';

interface WordGuessModalProps {
  onGuessWord: (inputWord: string) => boolean;
  onClose: () => void;
}

export const WordGuessModal: React.FC<WordGuessModalProps> = ({ onGuessWord, onClose }) => {
  const [guess, setGuess] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = guess.trim().toUpperCase();
    if (!clean) {
      setErrorMsg('Մուտքագրիր բառը / Escribe la palabra');
      return;
    }

    const isCorrect = onGuessWord(clean);
    if (!isCorrect) {
      soundManager.playLetterMiss();
      setErrorMsg('Ոչ ճիշտ բառ: Փորձիր նորից կամ բացիր տառերով:');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-slate-900 border-2 border-purple-500/50 rounded-3xl p-6 shadow-2xl text-slate-100 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center mx-auto mb-2">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-white">
            Ասել ամբողջ բառը
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Նշիր իսպաներեն 14 տառանի գլխավոր բառը (Ֆուտբոլային դիրք)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Բառը (14 տառ)
            </label>
            <input
              type="text"
              value={guess}
              onChange={(e) => {
                setGuess(e.target.value);
                setErrorMsg('');
              }}
              placeholder="Օրինակ՝ CENTROCAMPISTA"
              maxLength={20}
              autoFocus
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border-2 border-slate-700 focus:border-purple-400 focus:outline-none text-white font-black text-lg tracking-widest text-center uppercase placeholder:text-slate-600 placeholder:normal-case placeholder:font-normal placeholder:tracking-normal"
            />
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-sm transition-all cursor-pointer"
            >
              Չեղարկել
            </button>
            <button
              type="submit"
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-sm shadow-md hover:shadow-purple-500/30 transition-all cursor-pointer"
            >
              Ստուգել
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
