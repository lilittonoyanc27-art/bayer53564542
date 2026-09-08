export interface QuizOption {
  key: 'A' | 'B' | 'C' | 'D';
  textEs: string;
  textAm: string;
}

export interface QuizQuestion {
  id: number;
  category: string;
  questionEs: string;
  questionAm: string;
  options: QuizOption[];
}

export interface TongueTwister {
  id: number;
  spanish: string;
  armenian: string;
  pronunciationTip?: string;
}

export type SectorType = 'points' | 'prize' | 'plus' | 'x2' | 'chance';

export interface WheelSector {
  id: number;
  label: string;
  subLabel?: string;
  type: SectorType;
  value: number; // points
  color: string;
  textColor: string;
}

export interface PrizeItem {
  id: string;
  nameEs: string;
  nameAm: string;
  nameRu: string;
  icon: string;
  bonusPoints: number;
}
