import { TongueTwister, PrizeItem } from './types.ts';

export const TONGUE_TWISTERS: TongueTwister[] = [
  {
    id: 1,
    spanish: 'Pablito clavó un clavito. ¿Qué clavito clavó Pablito?',
    armenian: 'Պաբլիտոն մի փոքր մեխ խփեց։ Ի՞նչ մեխ խփեց Պաբլիտոն։',
    pronunciationTip: 'Կենտրոնացիր «cla-vi-to» հստակ արտասանության վրա'
  },
  {
    id: 2,
    spanish: 'Erre con erre cigarro, erre con erre barril.',
    armenian: '«Ռ»-ով սիգար, «ռ»-ով տակառ։',
    pronunciationTip: 'Իսպանական թրթռացող «rr» հնչյունը'
  },
  {
    id: 3,
    spanish: 'Compadre, cómprame un coco. Compadre, coco no compro.',
    armenian: 'Ընկեր, ինձ համար կոկոս գնիր։ Ընկեր, կոկոս չեմ գնում։',
    pronunciationTip: '«co-co» և «com-pro» հստակ շեշտադրում'
  },
  {
    id: 4,
    spanish: 'Si Pancha plancha con cuatro planchas, ¿con cuántas planchas plancha Pancha?',
    armenian: 'Եթե Պանչան արդուկում է չորս արդուկով, քանի՞ արդուկով է արդուկում Պանչան։',
    pronunciationTip: '«plan-cha» և «Pancha» արագ արտասանություն'
  },
  {
    id: 5,
    spanish: 'Cómo quieres que te quiera si el que quiero que me quiera no me quiere como quiero que me quiera.',
    armenian: 'Ինչպե՞ս ես ուզում, որ քեզ սիրեմ, եթե նա, ում ուզում եմ՝ ինձ սիրի, ինձ չի սիրում այնպես, ինչպես ես եմ ուզում։',
    pronunciationTip: '«quiero / quiera / quiere» սահուն կապակցում'
  },
  {
    id: 6,
    spanish: 'El cielo está enladrillado, ¿quién lo desenladrillará?',
    armenian: 'Երկինքը աղյուսապատ է, ո՞վ է այն ապաղյուսապատելու։',
    pronunciationTip: 'Դասական իսպանական դժվար շուտասելուկ'
  }
];

export const PRIZE_ITEMS: PrizeItem[] = [
  {
    id: 'golden_ball',
    nameEs: 'El Balón de Oro',
    nameAm: 'Ոսկե գնդակ',
    nameRu: 'Золотой мяч',
    icon: '⚽🏆',
    bonusPoints: 1500
  },
  {
    id: 'la_liga_shirt',
    nameEs: 'Camiseta Oficial de La Liga',
    nameAm: 'Լա Լիգայի պաշտոնական մարզաշապիկ',
    nameRu: 'Официальная футболка Ла Лиги',
    icon: '👕⭐',
    bonusPoints: 1200
  },
  {
    id: 'stadium_vip',
    nameEs: 'Entradas VIP al Bernabéu y Camp Nou',
    nameAm: 'VIP տոմսեր Սանտյագո Բեռնաբեու և Կամպ Նոու',
    nameRu: 'VIP билеты на главный стадион',
    icon: '🎟️🏟️',
    bonusPoints: 2000
  },
  {
    id: 'captain_armband',
    nameEs: 'Brazalete de Capitán del Equipo',
    nameAm: 'Թիմի ավագի թևկապ',
    nameRu: 'Капитанская повязка',
    icon: '🎖️💪',
    bonusPoints: 1000
  },
  {
    id: 'champions_boots',
    nameEs: 'Botas de Fútbol Profesionales',
    nameAm: 'Պրոֆեսիոնալ ֆուտբոլային խաղակոշիկներ (բուցիներ)',
    nameRu: 'Профессиональные бутсы чемпиона',
    icon: '👟⚡',
    bonusPoints: 1800
  }
];
