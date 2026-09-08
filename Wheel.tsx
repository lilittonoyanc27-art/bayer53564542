import React, { useRef, useState, useEffect } from 'react';
import { WheelSector } from './types.ts';
import { soundManager } from './soundEffects.ts';
import { Play, Sparkles } from 'lucide-react';

export const SECTORS: WheelSector[] = [
  { id: 0, label: '500', subLabel: 'pts', type: 'points', value: 500, color: '#f59e0b', textColor: '#1e1b4b' },
  { id: 1, label: 'ПРИЗ', subLabel: 'Premio', type: 'prize', value: 1000, color: '#ec4899', textColor: '#ffffff' },
  { id: 2, label: '250', subLabel: 'pts', type: 'points', value: 250, color: '#06b6d4', textColor: '#083344' },
  { id: 3, label: '+', subLabel: 'Letra', type: 'plus', value: 300, color: '#10b981', textColor: '#ffffff' },
  { id: 4, label: '750', subLabel: 'pts', type: 'points', value: 750, color: '#8b5cf6', textColor: '#ffffff' },
  { id: 5, label: 'x2', subLabel: 'Doble', type: 'x2', value: 2, color: '#e11d48', textColor: '#ffffff' },
  { id: 6, label: '300', subLabel: 'pts', type: 'points', value: 300, color: '#3b82f6', textColor: '#ffffff' },
  { id: 7, label: '1000', subLabel: 'pts', type: 'points', value: 1000, color: '#eab308', textColor: '#713f12' },
  { id: 8, label: 'ПРИЗ', subLabel: 'Premio', type: 'prize', value: 1000, color: '#f43f5e', textColor: '#ffffff' },
  { id: 9, label: '400', subLabel: 'pts', type: 'points', value: 400, color: '#14b8a6', textColor: '#042f2e' },
  { id: 10, label: 'Шанс', subLabel: 'Bonus', type: 'chance', value: 600, color: '#6366f1', textColor: '#ffffff' },
  { id: 11, label: '200', subLabel: 'pts', type: 'points', value: 200, color: '#f97316', textColor: '#ffffff' },
];

interface WheelProps {
  onSectorSelected: (sector: WheelSector) => void;
  disabled: boolean;
}

export const Wheel: React.FC<WheelProps> = ({ onSectorSelected, disabled }) => {
  const [rotation, setRotation] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const currentAngleRef = useRef<number>(0);
  const totalSectors = SECTORS.length;
  const sectorAngle = 360 / totalSectors;

  // Track ticks during rotation
  const lastSectorIndexRef = useRef<number>(-1);

  const spinWheel = () => {
    if (isSpinning || disabled) return;

    setIsSpinning(true);

    // Random landing sector
    const targetSectorIndex = Math.floor(Math.random() * totalSectors);
    const extraSpins = 5 + Math.floor(Math.random() * 3); // 5 to 7 full rotations

    // Pointer is at TOP (270 degrees in standard circle or 90 depending on coord system)
    // In SVG with 0 deg at right (3 o'clock): Top pointer is at 270 deg (or -90 deg)
    // Sector i center is at: i * sectorAngle + sectorAngle / 2
    // When wheel rotates by R, the sector at top (270°) satisfies:
    // (sectorCenterAngle + R) % 360 = 270 => R % 360 = (270 - sectorCenterAngle + 360) % 360
    const targetSectorCenter = targetSectorIndex * sectorAngle + sectorAngle / 2;
    const offsetToTop = (270 - targetSectorCenter + 360) % 360;

    const currentBase = currentAngleRef.current - (currentAngleRef.current % 360);
    const finalAngle = currentBase + extraSpins * 360 + offsetToTop;

    const startTime = performance.now();
    const duration = 4800; // 4.8 seconds
    const startAngle = currentAngleRef.current;
    const deltaAngle = finalAngle - startAngle;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Quartic ease-out for realistic friction
      const ease = 1 - Math.pow(1 - progress, 4);
      const currentRot = startAngle + deltaAngle * ease;
      setRotation(currentRot);
      currentAngleRef.current = currentRot;

      // Tick sound as each peg passes top pointer
      const normalizedTop = (270 - (currentRot % 360) + 360) % 360;
      const currentSector = Math.floor(normalizedTop / sectorAngle);
      if (currentSector !== lastSectorIndexRef.current) {
        lastSectorIndexRef.current = currentSector;
        soundManager.playTick();
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        const winningSector = SECTORS[targetSectorIndex];
        soundManager.playSectorLand(winningSector.type === 'prize');
        onSectorSelected(winningSector);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="flex flex-col items-center justify-center relative select-none">
      {/* Outer Glow & Stage Frame */}
      <div className="relative p-2 rounded-full bg-gradient-to-b from-amber-500/20 via-slate-800 to-slate-950 shadow-2xl border-4 border-amber-500/40">
        {/* Top Pointer Needle */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none drop-shadow-2xl">
          <svg width="34" height="42" viewBox="0 0 34 42" fill="none">
            <path
              d="M17 42L3.5 6C2 3 4.2 0 7.5 0H26.5C29.8 0 32 3 30.5 6L17 42Z"
              fill="url(#pointerGrad)"
              stroke="#fbbf24"
              strokeWidth="2"
            />
            <circle cx="17" cy="11" r="5" fill="#ef4444" stroke="#fef08a" strokeWidth="2" />
            <defs>
              <linearGradient id="pointerGrad" x1="17" y1="0" x2="17" y2="42" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="60%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#991b1b" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Wheel SVG */}
        <div className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] relative rounded-full overflow-hidden shadow-inner">
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full transform transition-transform duration-75 ease-linear"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <defs>
              <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="70%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#451a03" />
              </radialGradient>
              <filter id="pegShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Outer Rim */}
            <circle cx="200" cy="200" r="198" fill="#1e293b" stroke="#f59e0b" strokeWidth="4" />

            {/* Sectors */}
            {SECTORS.map((sector, i) => {
              const startA = (i * sectorAngle * Math.PI) / 180;
              const endA = ((i + 1) * sectorAngle * Math.PI) / 180;
              const r = 194;
              const x1 = 200 + r * Math.cos(startA);
              const y1 = 200 + r * Math.sin(startA);
              const x2 = 200 + r * Math.cos(endA);
              const y2 = 200 + r * Math.sin(endA);

              const pathData = `M 200 200 L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;
              const midAngleDeg = i * sectorAngle + sectorAngle / 2;

              return (
                <g key={sector.id}>
                  <path
                    d={pathData}
                    fill={sector.color}
                    stroke="#0f172a"
                    strokeWidth="2"
                    className="hover:brightness-105 transition-all"
                  />
                  {/* Text group rotated to sector center */}
                  <g transform={`rotate(${midAngleDeg}, 200, 200)`}>
                    <text
                      x="330"
                      y="204"
                      fill={sector.textColor}
                      fontSize={sector.label.length > 3 ? '16' : '20'}
                      fontWeight="900"
                      textAnchor="middle"
                      alignmentBaseline="middle"
                      style={{ letterSpacing: '0.5px' }}
                    >
                      {sector.label}
                    </text>
                    {sector.subLabel && (
                      <text
                        x="330"
                        y="220"
                        fill={sector.textColor}
                        opacity="0.9"
                        fontSize="9"
                        fontWeight="700"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                      >
                        {sector.subLabel}
                      </text>
                    )}
                  </g>
                </g>
              );
            })}

            {/* Pegs on the perimeter */}
            {SECTORS.map((_, i) => {
              const angle = (i * sectorAngle * Math.PI) / 180;
              const pegX = 200 + 190 * Math.cos(angle);
              const pegY = 200 + 190 * Math.sin(angle);
              return (
                <circle
                  key={`peg-${i}`}
                  cx={pegX}
                  cy={pegY}
                  r="4.5"
                  fill="#ffffff"
                  stroke="#78350f"
                  strokeWidth="1.5"
                  filter="url(#pegShadow)"
                />
              );
            })}

            {/* Center Dome */}
            <circle cx="200" cy="200" r="46" fill="url(#centerGradient)" stroke="#fef08a" strokeWidth="4" />
            <circle cx="200" cy="200" r="32" fill="#0f172a" />
            <circle cx="200" cy="200" r="14" fill="#fbbf24" />
          </svg>
        </div>
      </div>

      {/* Spin Button */}
      <button
        id="spin-wheel-btn"
        onClick={spinWheel}
        disabled={isSpinning || disabled}
        className={`mt-4 px-8 py-3.5 rounded-2xl font-black text-lg sm:text-xl tracking-wide uppercase transition-all duration-200 flex items-center gap-3 shadow-xl ${
          isSpinning || disabled
            ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
            : 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 border-2 border-yellow-200 cursor-pointer'
        }`}
      >
        {isSpinning ? (
          <>
            <div className="w-5 h-5 border-3 border-slate-500 border-t-amber-400 rounded-full animate-spin" />
            <span>Барабан крутится...</span>
          </>
        ) : (
          <>
            <Play className="w-6 h-6 fill-current" />
            <span className="flex items-center gap-1.5">
              Вращать барабан <Sparkles className="w-4 h-4 text-amber-950" />
            </span>
          </>
        )}
      </button>

      <div className="mt-1 text-xs text-slate-400 font-medium tracking-wide">
        Պտտել թմբուկը • Girar la ruleta
      </div>
    </div>
  );
};
