import { QuizQuestion } from './types.ts';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // 1–10. Знакомство + футбол
  {
    id: 1,
    category: 'Знакомство + футбол / Ծանոթություն և ֆուտբոլ',
    questionEs: '¿Tú también juegas al fútbol?',
    questionAm: 'Դու նո՞ւյնպես ֆուտբոլ ես խաղում։',
    options: [
      { key: 'A', textEs: 'Sí, juego desde hace varios años.', textAm: 'Այո, արդեն մի քանի տարի է՝ խաղում եմ։' },
      { key: 'B', textEs: 'Sí, me encanta jugar al fútbol.', textAm: 'Այո, շատ եմ սիրում ֆուտբոլ խաղալ։' },
      { key: 'C', textEs: 'Sí, entreno varias veces a la semana.', textAm: 'Այո, շաբաթական մի քանի անգամ մարզվում եմ։' },
      { key: 'D', textEs: 'Sí, es mi deporte favorito.', textAm: 'Այո, դա իմ սիրելի սպորտաձևն է։' }
    ]
  },
  {
    id: 2,
    category: 'Знакомство + футбол / Ծանոթություն և ֆուտբոլ',
    questionEs: '¿En qué posición juegas normalmente?',
    questionAm: 'Սովորաբար ո՞ր դիրքում ես խաղում։',
    options: [
      { key: 'A', textEs: 'Juego de delantero.', textAm: 'Հարձակվող եմ խաղում։' },
      { key: 'B', textEs: 'Juego de centrocampista.', textAm: 'Կիսապաշտպան եմ խաղում։' },
      { key: 'C', textEs: 'Juego de defensa.', textAm: 'Պաշտպան եմ խաղում։' },
      { key: 'D', textEs: 'Puedo jugar en varias posiciones.', textAm: 'Կարող եմ մի քանի դիրքում խաղալ։' }
    ]
  },
  {
    id: 3,
    category: 'Знакомство + футбол / Ծանոթություն և ֆուտբոլ',
    questionEs: '¿Eres bueno jugando al fútbol?',
    questionAm: 'Լա՞վ ես ֆուտբոլ խաղում։',
    options: [
      { key: 'A', textEs: 'Creo que sí, pero todavía tengo que mejorar.', textAm: 'Կարծում եմ՝ այո, բայց դեռ պետք է ավելի լավանամ։' },
      { key: 'B', textEs: 'Se me da bastante bien.', textAm: 'Բավական լավ է ստացվում։' },
      { key: 'C', textEs: 'Entreno mucho para jugar mejor.', textAm: 'Շատ եմ մարզվում, որ ավելի լավ խաղամ։' },
      { key: 'D', textEs: 'No está mal, pero quiero mejorar más.', textAm: 'Վատ չէ, բայց ուզում եմ ավելի լավ խաղալ։' }
    ]
  },
  {
    id: 4,
    category: 'Знакомство + футбол / Ծանոթություն և ֆուտբոլ',
    questionEs: '¿Entrenas con algún equipo?',
    questionAm: 'Որևէ թիմի հե՞տ ես մարզվում։',
    options: [
      { key: 'A', textEs: 'Sí, entreno con un equipo.', textAm: 'Այո, թիմի հետ եմ մարզվում։' },
      { key: 'B', textEs: 'Sí, entreno varias veces a la semana.', textAm: 'Այո, շաբաթական մի քանի անգամ եմ մարզվում։' },
      { key: 'C', textEs: 'Ahora estoy buscando un equipo.', textAm: 'Հիմա թիմ եմ փնտրում։' },
      { key: 'D', textEs: 'De momento juego con mis amigos.', textAm: 'Առայժմ ընկերներիս հետ եմ խաղում։' }
    ]
  },
  {
    id: 5,
    category: 'Знакомство + футбол / Ծանոթություն և ֆուտբոլ',
    questionEs: '¿Cuántos días a la semana entrenas?',
    questionAm: 'Շաբաթական քանի՞ օր ես մարզվում։',
    options: [
      { key: 'A', textEs: 'Entreno dos días a la semana.', textAm: 'Շաբաթական երկու օր եմ մարզվում։' },
      { key: 'B', textEs: 'Normalmente entreno tres veces.', textAm: 'Սովորաբար երեք անգամ եմ մարզվում։' },
      { key: 'C', textEs: 'Depende de la semana.', textAm: 'Կախված է շաբաթից։' },
      { key: 'D', textEs: 'Entreno casi todos los días.', textAm: 'Գրեթե ամեն օր եմ մարզվում։' }
    ]
  },
  {
    id: 6,
    category: 'Знакомство + футбол / Ծանոթություն և ֆուտբոլ',
    questionEs: '¿Qué se te da mejor: atacar o defender?',
    questionAm: 'Ի՞նչն է քեզ մոտ ավելի լավ ստացվում՝ հարձակվե՞լը, թե՞ պաշտպանվելը։',
    options: [
      { key: 'A', textEs: 'Se me da mejor atacar.', textAm: 'Հարձակվելն ավելի լավ է ստացվում։' },
      { key: 'B', textEs: 'Prefiero defender.', textAm: 'Նախընտրում եմ պաշտպանվել։' },
      { key: 'C', textEs: 'Creo que las dos cosas se me dan bien.', textAm: 'Կարծում եմ՝ երկուսն էլ լավ են ստացվում։' },
      { key: 'D', textEs: 'Depende de la posición en la que juegue.', textAm: 'Կախված է նրանից, թե որ դիրքում եմ խաղում։' }
    ]
  },
  {
    id: 7,
    category: 'Знакомство + футбол / Ծանոթություն և ֆուտբոլ',
    questionEs: '¿Cuál es tu equipo favorito?',
    questionAm: 'Ո՞րն է քո սիրելի թիմը։',
    options: [
      { key: 'A', textEs: 'Mi equipo favorito es el Real Madrid.', textAm: 'Իմ սիրելի թիմը «Ռեալ Մադրիդն» է։' },
      { key: 'B', textEs: 'Mi equipo favorito es el Barça.', textAm: 'Իմ սիրելի թիմը «Բարսան» է։' },
      { key: 'C', textEs: 'Me gustan varios equipos.', textAm: 'Մի քանի թիմ եմ սիրում։' },
      { key: 'D', textEs: 'No tengo un equipo favorito.', textAm: 'Սիրելի թիմ չունեմ։' }
    ]
  },
  {
    id: 8,
    category: 'Знакомство + футбол / Ծանոթություն և ֆուտբոլ',
    questionEs: '¿Quién es tu futbolista favorito?',
    questionAm: 'Ո՞վ է քո սիրելի ֆուտբոլիստը։',
    options: [
      { key: 'A', textEs: 'Mi jugador favorito es…', textAm: 'Իմ սիրելի ֆուտբոլիստը ... է։' },
      { key: 'B', textEs: 'Tengo varios jugadores favoritos.', textAm: 'Մի քանի սիրելի ֆուտբոլիստ ունեմ։' },
      { key: 'C', textEs: 'Me gustan sobre todo los delanteros.', textAm: 'Ամենաշատը հարձակվողներին եմ սիրում։' },
      { key: 'D', textEs: 'No tengo uno en concreto.', textAm: 'Կոնկրետ մեկին չեմ առանձնացնում։' }
    ]
  },
  {
    id: 9,
    category: 'Знакомство + футбол / Ծանոթություն և ֆուտբոլ',
    questionEs: '¿Te gusta algún otro deporte aparte del fútbol?',
    questionAm: 'Ֆուտբոլից բացի ուրիշ սպորտ սիրո՞ւմ ես։',
    options: [
      { key: 'A', textEs: 'Sí, también me gusta el pádel.', textAm: 'Այո, նաև պադել եմ սիրում։' },
      { key: 'B', textEs: 'Sí, me gustan casi todos los deportes.', textAm: 'Այո, գրեթե բոլոր սպորտաձևերն եմ սիրում։' },
      { key: 'C', textEs: 'Sí, también me gusta correr.', textAm: 'Այո, նաև վազել եմ սիրում։' },
      { key: 'D', textEs: 'El fútbol es el que más me gusta.', textAm: 'Ամենաշատը ֆուտբոլն եմ սիրում։' }
    ]
  },
  {
    id: 10,
    category: 'Знакомство + футбол / Ծանոթություն և ֆուտբոլ',
    questionEs: '¿Quieres jugar con nosotros luego?',
    questionAm: 'Հետո ուզո՞ւմ ես մեզ հետ խաղալ։',
    options: [
      { key: 'A', textEs: 'Sí, claro. ¿A qué hora?', textAm: 'Այո, իհարկե։ Ժամը քանիսի՞ն։' },
      { key: 'B', textEs: 'Vale, me apunto.', textAm: 'Լավ, ես էլ կմիանամ։' },
      { key: 'C', textEs: 'Sí, ¿dónde vais a jugar?', textAm: 'Այո, որտե՞ղ եք խաղալու։' },
      { key: 'D', textEs: 'Hoy no puedo, pero otro día sí.', textAm: 'Այսօր չեմ կարող, բայց ուրիշ օր՝ այո։' }
    ]
  },

  // 11–20. Прошедшее время
  {
    id: 11,
    category: 'Прошедшее время / Անցյալ ժամանակ',
    questionEs: '¿Cuándo empezaste a jugar al fútbol?',
    questionAm: 'Ե՞րբ սկսեցիր ֆուտբոլ խաղալ։',
    options: [
      { key: 'A', textEs: 'Empecé cuando era pequeño.', textAm: 'Սկսեցի, երբ փոքր էի։' },
      { key: 'B', textEs: 'Empecé hace unos años.', textAm: 'Մի քանի տարի առաջ սկսեցի։' },
      { key: 'C', textEs: 'Empecé cuando tenía siete años.', textAm: 'Սկսեցի, երբ յոթ տարեկան էի։' },
      { key: 'D', textEs: 'No recuerdo exactamente cuándo empecé.', textAm: 'Հստակ չեմ հիշում՝ երբ սկսեցի։' }
    ]
  },
  {
    id: 12,
    category: 'Прошедшее время / Անցյալ ժամանակ',
    questionEs: '¿Jugabas mucho al fútbol en Armenia?',
    questionAm: 'Հայաստանում շա՞տ էիր ֆուտբոլ խաղում։',
    options: [
      { key: 'A', textEs: 'Sí, jugaba casi todos los días.', textAm: 'Այո, գրեթե ամեն օր խաղում էի։' },
      { key: 'B', textEs: 'Sí, entrenaba varias veces por semana.', textAm: 'Այո, շաբաթական մի քանի անգամ մարզվում էի։' },
      { key: 'C', textEs: 'Jugaba sobre todo con mis amigos.', textAm: 'Հիմնականում ընկերներիս հետ էի խաղում։' },
      { key: 'D', textEs: 'Jugaba cuando tenía tiempo.', textAm: 'Խաղում էի, երբ ժամանակ ունեի։' }
    ]
  },
  {
    id: 13,
    category: 'Прошедшее время / Անցյալ ժամանակ',
    questionEs: '¿Has jugado algún partido esta semana?',
    questionAm: 'Այս շաբաթ որևէ խաղ խաղացե՞լ ես։',
    options: [
      { key: 'A', textEs: 'Sí, he jugado uno.', textAm: 'Այո, մեկ խաղ եմ խաղացել։' },
      { key: 'B', textEs: 'Sí, he jugado dos partidos.', textAm: 'Այո, երկու խաղ եմ խաղացել։' },
      { key: 'C', textEs: 'No, esta semana solo he entrenado.', textAm: 'Ոչ, այս շաբաթ միայն մարզվել եմ։' },
      { key: 'D', textEs: 'Todavía no, pero voy a jugar pronto.', textAm: 'Դեռ ոչ, բայց շուտով խաղալու եմ։' }
    ]
  },
  {
    id: 14,
    category: 'Прошедшее время / Անցյալ ժամանակ',
    questionEs: '¿Marcaste algún gol en tu último partido?',
    questionAm: 'Վերջին խաղում գոլ խփեցի՞ր։',
    options: [
      { key: 'A', textEs: 'Sí, marqué un gol.', textAm: 'Այո, մեկ գոլ խփեցի։' },
      { key: 'B', textEs: 'Sí, marqué dos.', textAm: 'Այո, երկու գոլ խփեցի։' },
      { key: 'C', textEs: 'No, pero di una asistencia.', textAm: 'Ոչ, բայց գոլային փոխանցում տվեցի։' },
      { key: 'D', textEs: 'No, pero jugué bastante bien.', textAm: 'Ոչ, բայց բավական լավ խաղացի։' }
    ]
  },
  {
    id: 15,
    category: 'Прошедшее время / Անցյալ ժամանակ',
    questionEs: '¿Cuál ha sido el mejor partido que has jugado?',
    questionAm: 'Քո խաղացած ամենալավ խաղը ո՞րն է եղել։',
    options: [
      { key: 'A', textEs: 'Uno en el que marqué varios goles.', textAm: 'Այն խաղերից մեկը, երբ մի քանի գոլ խփեցի։' },
      { key: 'B', textEs: 'Un partido que ganamos por poco.', textAm: 'Մի խաղ, որը քիչ տարբերությամբ հաղթեցինք։' },
      { key: 'C', textEs: 'Un partido muy difícil que jugamos bien.', textAm: 'Շատ դժվար խաղ, որը լավ խաղացինք։' },
      { key: 'D', textEs: 'He jugado varios partidos muy buenos.', textAm: 'Մի քանի շատ լավ խաղ եմ խաղացել։' }
    ]
  },
  {
    id: 16,
    category: 'Прошедшее время / Անցյալ ժամանակ',
    questionEs: '¿Alguna vez te has lesionado jugando?',
    questionAm: 'Երբևէ խաղալիս վնասվածք ստացե՞լ ես։',
    options: [
      { key: 'A', textEs: 'No, por suerte nunca.', textAm: 'Ոչ, բարեբախտաբար՝ երբեք։' },
      { key: 'B', textEs: 'Sí, pero no fue nada grave.', textAm: 'Այո, բայց լուրջ բան չէր։' },
      { key: 'C', textEs: 'Una vez me hice daño en la pierna.', textAm: 'Մի անգամ ոտքս վնասեցի։' },
      { key: 'D', textEs: 'He tenido alguna lesión pequeña.', textAm: 'Մի քանի փոքր վնասվածք եմ ունեցել։' }
    ]
  },
  {
    id: 17,
    category: 'Прошедшее время / Անցյալ ժամանակ',
    questionEs: '¿Ganasteis vuestro último partido?',
    questionAm: 'Ձեր վերջին խաղը հաղթեցի՞ք։',
    options: [
      { key: 'A', textEs: 'Sí, ganamos.', textAm: 'Այո, հաղթեցինք։' },
      { key: 'B', textEs: 'No, perdimos por un gol.', textAm: 'Ոչ, մեկ գոլի տարբերությամբ պարտվեցինք։' },
      { key: 'C', textEs: 'Empatamos.', textAm: 'Ոչ-ոքի խաղացինք։' },
      { key: 'D', textEs: 'Perdimos, pero jugamos bien.', textAm: 'Պարտվեցինք, բայց լավ խաղացինք։' }
    ]
  },
  {
    id: 18,
    category: 'Прошедшее время / Անցյալ ժամանակ',
    questionEs: '¿Qué hiciste después del último entrenamiento?',
    questionAm: 'Վերջին մարզումից հետո ի՞նչ արեցիր։',
    options: [
      { key: 'A', textEs: 'Volví a casa y descansé.', textAm: 'Տուն վերադարձա ու հանգստացա։' },
      { key: 'B', textEs: 'Fui a comer con mi familia.', textAm: 'Ընտանիքիս հետ գնացի ուտելու։' },
      { key: 'C', textEs: 'Me quedé un rato con mis compañeros.', textAm: 'Մի քիչ մնացի թիմակիցներիս հետ։' },
      { key: 'D', textEs: 'Llegué a casa y vi un partido.', textAm: 'Տուն եկա և խաղ դիտեցի։' }
    ]
  },
  {
    id: 19,
    category: 'Прошедшее время / Անցյալ ժամանակ',
    questionEs: '¿Has ido alguna vez a ver un partido en un estadio?',
    questionAm: 'Երբևէ մարզադաշտում խաղ դիտելու գնացե՞լ ես։',
    options: [
      { key: 'A', textEs: 'Sí, he ido varias veces.', textAm: 'Այո, մի քանի անգամ։' },
      { key: 'B', textEs: 'Sí, fui una vez.', textAm: 'Այո, մեկ անգամ գնացել եմ։' },
      { key: 'C', textEs: 'Todavía no, pero me gustaría.', textAm: 'Դեռ ոչ, բայց կուզեի։' },
      { key: 'D', textEs: 'No, normalmente los veo por la televisión.', textAm: 'Ոչ, սովորաբար հեռուստացույցով եմ դիտում։' }
    ]
  },
  {
    id: 20,
    category: 'Прошедшее время / Անցյալ ժամանակ',
    questionEs: '¿Cómo jugabas cuando eras más pequeño?',
    questionAm: 'Ինչպե՞ս էիր խաղում, երբ ավելի փոքր էիր։',
    options: [
      { key: 'A', textEs: 'Corría mucho detrás del balón.', textAm: 'Շատ էի վազում գնդակի հետևից։' },
      { key: 'B', textEs: 'Siempre quería marcar goles.', textAm: 'Միշտ ուզում էի գոլ խփել։' },
      { key: 'C', textEs: 'Jugaba con mis amigos todo el tiempo.', textAm: 'Անընդհատ ընկերներիս հետ էի խաղում։' },
      { key: 'D', textEs: 'Antes jugaba peor que ahora.', textAm: 'Առաջ հիմա համեմատ ավելի վատ էի խաղում։' }
    ]
  },

  // 21–30. Планы и будущее
  {
    id: 21,
    category: 'Планы и будущее / Ծրագրեր և ապագա',
    questionEs: '¿Vas a seguir jugando al fútbol aquí?',
    questionAm: 'Այստեղ շարունակելո՞ւ ես ֆուտբոլ խաղալ։',
    options: [
      { key: 'A', textEs: 'Sí, claro. Quiero seguir entrenando.', textAm: 'Այո, իհարկե։ Ուզում եմ շարունակել մարզվել։' },
      { key: 'B', textEs: 'Sí, estoy buscando un equipo.', textAm: 'Այո, թիմ եմ փնտրում։' },
      { key: 'C', textEs: 'Sí, quiero jugar todo lo que pueda.', textAm: 'Այո, ուզում եմ հնարավորինս շատ խաղալ։' },
      { key: 'D', textEs: 'Seguro que sí.', textAm: 'Հաստատ։' }
    ]
  },
  {
    id: 22,
    category: 'Планы и будущее / Ծրագրեր և ապագա',
    questionEs: '¿Qué vas a hacer este fin de semana?',
    questionAm: 'Այս հանգստյան օրերին ի՞նչ ես անելու։',
    options: [
      { key: 'A', textEs: 'Voy a entrenar.', textAm: 'Մարզվելու եմ։' },
      { key: 'B', textEs: 'Voy a jugar con mis amigos.', textAm: 'Ընկերներիս հետ խաղալու եմ։' },
      { key: 'C', textEs: 'Voy a descansar un poco.', textAm: 'Մի քիչ հանգստանալու եմ։' },
      { key: 'D', textEs: 'Todavía no tengo planes.', textAm: 'Դեռ պլաններ չունեմ։' }
    ]
  },
  {
    id: 23,
    category: 'Планы и будущее / Ծրագրեր և ապագա',
    questionEs: '¿Jugarás con nosotros si hacemos un partido?',
    questionAm: 'Եթե խաղ կազմակերպենք, մեզ հետ կխաղա՞ս։',
    options: [
      { key: 'A', textEs: 'Sí, claro que jugaré.', textAm: 'Այո, իհարկե կխաղամ։' },
      { key: 'B', textEs: 'Sí, si puedo, iré.', textAm: 'Այո, եթե կարողանամ, կգամ։' },
      { key: 'C', textEs: 'Claro, decidme cuándo.', textAm: 'Իհարկե, ասեք՝ երբ։' },
      { key: 'D', textEs: 'Depende de si tengo entrenamiento.', textAm: 'Կախված է՝ մարզում կունենամ, թե ոչ։' }
    ]
  },
  {
    id: 24,
    category: 'Планы и будущее / Ծրագրեր և ապագա',
    questionEs: '¿Qué quieres mejorar este año?',
    questionAm: 'Այս տարի ի՞նչ ես ուզում բարելավել։',
    options: [
      { key: 'A', textEs: 'Quiero chutar mejor.', textAm: 'Ուզում եմ ավելի լավ հարվածել։' },
      { key: 'B', textEs: 'Quiero correr más rápido.', textAm: 'Ուզում եմ ավելի արագ վազել։' },
      { key: 'C', textEs: 'Quiero mejorar mis pases.', textAm: 'Ուզում եմ լավացնել փոխանցումներս։' },
      { key: 'D', textEs: 'Quiero mejorar un poco de todo.', textAm: 'Ուզում եմ ամեն ինչից մի քիչ լավացնել։' }
    ]
  },
  {
    id: 25,
    category: 'Планы и будущее / Ծրագրեր և ապագա',
    questionEs: '¿Te gustaría jugar algún día en un equipo grande?',
    questionAm: 'Կուզեի՞ր մի օր մեծ թիմում խաղալ։',
    options: [
      { key: 'A', textEs: 'Sí, sería increíble.', textAm: 'Այո, հիանալի կլիներ։' },
      { key: 'B', textEs: 'Claro, es uno de mis sueños.', textAm: 'Իհարկե, դա իմ երազանքներից մեկն է։' },
      { key: 'C', textEs: 'Sí, pero sé que hay que entrenar mucho.', textAm: 'Այո, բայց գիտեմ, որ պետք է շատ մարզվել։' },
      { key: 'D', textEs: 'No lo sé, de momento solo quiero disfrutar.', textAm: 'Չգիտեմ, առայժմ պարզապես ուզում եմ հաճույքով խաղալ։' }
    ]
  },
  {
    id: 26,
    category: 'Планы и будущее / Ծրագրեր և ապագա',
    questionEs: '¿Qué harás después de las clases cuando empiece el cole?',
    questionAm: 'Երբ դպրոցը սկսվի, դասերից հետո ի՞նչ ես անելու։',
    options: [
      { key: 'A', textEs: 'Iré a entrenar.', textAm: 'Կգնամ մարզման։' },
      { key: 'B', textEs: 'Primero haré los deberes.', textAm: 'Սկզբում տնային աշխատանքը կանեմ։' },
      { key: 'C', textEs: 'Jugaré con mis amigos.', textAm: 'Ընկերներիս հետ կխաղամ։' },
      { key: 'D', textEs: 'Dependerá del día.', textAm: 'Կախված կլինի օրվանից։' }
    ]
  },
  {
    id: 27,
    category: 'Планы и будущее / Ծրագրեր և ապագա',
    questionEs: '¿Crees que harás amigos rápido?',
    questionAm: 'Կարծո՞ւմ ես՝ արագ ընկերներ ձեռք կբերես։',
    options: [
      { key: 'A', textEs: 'Sí, creo que sí.', textAm: 'Այո, կարծում եմ՝ այո։' },
      { key: 'B', textEs: 'Espero que sí.', textAm: 'Հուսով եմ՝ այո։' },
      { key: 'C', textEs: 'Quizás gracias al fútbol.', textAm: 'Հնարավոր է՝ ֆուտբոլի շնորհիվ։' },
      { key: 'D', textEs: 'Al principio me dará un poco de vergüenza.', textAm: 'Սկզբում մի քիչ կամաչեմ։' }
    ]
  },
  {
    id: 28,
    category: 'Планы и будущее / Ծրագրեր և ապագա',
    questionEs: '¿Vas a apuntarte a algún deporte en el cole?',
    questionAm: 'Դպրոցում որևէ սպորտաձևի գրանցվելո՞ւ ես։',
    options: [
      { key: 'A', textEs: 'Sí, si hay fútbol, me apuntaré.', textAm: 'Այո, եթե ֆուտբոլ լինի, կգրանցվեմ։' },
      { key: 'B', textEs: 'Quizás pruebe otro deporte también.', textAm: 'Հնարավոր է՝ ուրիշ սպորտ էլ փորձեմ։' },
      { key: 'C', textEs: 'Primero quiero ver qué actividades hay.', textAm: 'Սկզբում ուզում եմ տեսնել՝ ինչ խմբակներ կան։' },
      { key: 'D', textEs: 'Seguro que haré algún deporte.', textAm: 'Հաստատ որևէ սպորտով կզբաղվեմ։' }
    ]
  },
  {
    id: 29,
    category: 'Планы и будущее / Ծրագրեր և ապագա',
    questionEs: '¿Qué vas a hacer si no entiendes algo en clase?',
    questionAm: 'Ի՞նչ ես անելու, եթե դասին ինչ-որ բան չհասկանաս։',
    options: [
      { key: 'A', textEs: 'Voy a preguntarle al profesor.', textAm: 'Ուսուցչին եմ հարցնելու։' },
      { key: 'B', textEs: 'Pediré que lo repita.', textAm: 'Կխնդրեմ, որ կրկնի։' },
      { key: 'C', textEs: 'Preguntaré a un compañero.', textAm: 'Դասընկերոջս կհարցնեմ։' },
      { key: 'D', textEs: 'Intentaré entenderlo y luego preguntaré.', textAm: 'Կփորձեմ հասկանալ, հետո կհարցնեմ։' }
    ]
  },
  {
    id: 30,
    category: 'Планы и будущее / Ծրագրեր և ապագա',
    questionEs: '¿Qué harás si los chicos te invitan a jugar al fútbol?',
    questionAm: 'Ի՞նչ կանես, եթե երեխաները քեզ ֆուտբոլ խաղալու հրավիրեն։',
    options: [
      { key: 'A', textEs: 'Iré con ellos.', textAm: 'Կգնամ նրանց հետ։' },
      { key: 'B', textEs: 'Les diré que sí enseguida.', textAm: 'Անմիջապես կասեմ՝ այո։' },
      { key: 'C', textEs: 'Preguntaré dónde van a jugar.', textAm: 'Կհարցնեմ՝ որտեղ են խաղալու։' },
      { key: 'D', textEs: 'Si puedo, jugaré con ellos.', textAm: 'Եթե կարողանամ, նրանց հետ կխաղամ։' }
    ]
  },

  // 31–40. Что могут сказать дети в школе
  {
    id: 31,
    category: 'Что могут сказать дети в школе / Ինչ կարող են ասել երեխաները դպրոցում',
    questionEs: 'Oye, ¿quieres sentarte con nosotros?',
    questionAm: 'Լսի՛ր, ուզո՞ւմ ես մեզ հետ նստել։',
    options: [
      { key: 'A', textEs: 'Sí, gracias.', textAm: 'Այո, շնորհակալություն։' },
      { key: 'B', textEs: 'Vale, claro.', textAm: 'Լավ, իհարկե։' },
      { key: 'C', textEs: 'Sí, ¿hay sitio?', textAm: 'Այո, տեղ կա՞։' },
      { key: 'D', textEs: 'Claro, voy con vosotros.', textAm: 'Իհարկե, գալիս եմ ձեզ հետ։' }
    ]
  },
  {
    id: 32,
    category: 'Что могут сказать дети в школе / Ինչ կարող են ասել երեխաները դպրոցում',
    questionEs: '¿Te vienes con nosotros al recreo?',
    questionAm: 'Մեզ հետ կգա՞ս ընդմիջմանը։',
    options: [
      { key: 'A', textEs: 'Sí, voy con vosotros.', textAm: 'Այո, գալիս եմ ձեզ հետ։' },
      { key: 'B', textEs: 'Vale, ¿adónde vais?', textAm: 'Լավ, ո՞ւր եք գնում։' },
      { key: 'C', textEs: 'Claro, esperadme.', textAm: 'Իհարկե, սպասեք ինձ։' },
      { key: 'D', textEs: 'Sí, ahora voy.', textAm: 'Այո, հիմա գալիս եմ։' }
    ]
  },
  {
    id: 33,
    category: 'Что могут сказать дети в школе / Ինչ կարող են ասել երեխաները դպրոցում',
    questionEs: '¿Quieres que te enseñemos el colegio?',
    questionAm: 'Ուզո՞ւմ ես՝ քեզ դպրոցը ցույց տանք։',
    options: [
      { key: 'A', textEs: 'Sí, gracias, todavía no lo conozco bien.', textAm: 'Այո, շնորհակալություն, դեռ լավ չեմ ճանաչում։' },
      { key: 'B', textEs: 'Claro, me vendría bien.', textAm: 'Իհարկե, դա ինձ օգտակար կլինի։' },
      { key: 'C', textEs: 'Sí, así sé dónde está todo.', textAm: 'Այո, այդպես կիմանամ՝ ինչն որտեղ է։' },
      { key: 'D', textEs: 'Vale, vamos.', textAm: 'Լավ, գնանք։' }
    ]
  },
  {
    id: 34,
    category: 'Что могут сказать дети в школе / Ինչ կարող են ասել երեխաները դպրոցում',
    questionEs: '¿Por qué te has venido a España?',
    questionAm: 'Ինչո՞ւ ես եկել Իսպանիա։',
    options: [
      { key: 'A', textEs: 'Porque mi familia vive ahora aquí.', textAm: 'Որովհետև ընտանիքս հիմա այստեղ է ապրում։' },
      { key: 'B', textEs: 'Me vine con mi familia.', textAm: 'Ընտանիքիս հետ եմ եկել։' },
      { key: 'C', textEs: 'Nos mudamos hace un tiempo.', textAm: 'Որոշ ժամանակ առաջ տեղափոխվեցինք։' },
      { key: 'D', textEs: 'Ahora vivimos aquí y estoy aprendiendo español.', textAm: 'Հիմա այստեղ ենք ապրում, և ես իսպաներեն եմ սովորում։' }
    ]
  },
  {
    id: 35,
    category: 'Что могут сказать дети в школе / Ինչ կարող են ասել երեխաները դպրոցում',
    questionEs: '¿Te cuesta hablar en español?',
    questionAm: 'Դժվա՞ր է քեզ համար իսպաներեն խոսելը։',
    options: [
      { key: 'A', textEs: 'A veces, pero intento hablar.', textAm: 'Երբեմն, բայց փորձում եմ խոսել։' },
      { key: 'B', textEs: 'Entiendo más de lo que hablo.', textAm: 'Ավելի շատ հասկանում եմ, քան խոսում։' },
      { key: 'C', textEs: 'Cada vez me cuesta menos.', textAm: 'Ամեն անգամ ավելի հեշտ է դառնում։' },
      { key: 'D', textEs: 'Si habláis despacio, me resulta más fácil.', textAm: 'Եթե դանդաղ խոսեք, ինձ համար ավելի հեշտ է։' }
    ]
  },
  {
    id: 36,
    category: 'Что могут сказать дети в школе / Ինչ կարող են ասել երեխաները դպրոցում',
    questionEs: '¿Has entendido lo que ha dicho el profesor?',
    questionAm: 'Հասկացա՞ր՝ ինչ ասաց ուսուցիչը։',
    options: [
      { key: 'A', textEs: 'Sí, más o menos.', textAm: 'Այո, մոտավորապես։' },
      { key: 'B', textEs: 'No todo. ¿Me lo explicas?', textAm: 'Ոչ ամբողջությամբ։ Կբացատրե՞ս ինձ։' },
      { key: 'C', textEs: 'Sí, esta vez lo he entendido.', textAm: 'Այո, այս անգամ հասկացա։' },
      { key: 'D', textEs: 'No, ha hablado demasiado rápido.', textAm: 'Ոչ, շատ արագ խոսեց։' }
    ]
  },
  {
    id: 37,
    category: 'Что могут сказать дети в школе / Ինչ կարող են ասել երեխաները դպրոցում',
    questionEs: '¿Quieres que te ayude con esto?',
    questionAm: 'Ուզո՞ւմ ես՝ սրանով քեզ օգնեմ։',
    options: [
      { key: 'A', textEs: 'Sí, gracias.', textAm: 'Այո, շնորհակալություն։' },
      { key: 'B', textEs: 'Sí, esta parte no la entiendo.', textAm: 'Այո, այս մասը չեմ հասկանում։' },
      { key: 'C', textEs: 'Creo que puedo hacerlo, pero gracias.', textAm: 'Կարծում եմ՝ կարող եմ անել, բայց շնորհակալություն։' },
      { key: 'D', textEs: 'Vale, explícame cómo se hace.', textAm: 'Լավ, բացատրի՛ր՝ ինչպես է արվում։' }
    ]
  },
  {
    id: 38,
    category: 'Что могут сказать дети в школе / Ինչ կարող են ասել երեխաները դպրոցում',
    questionEs: '¿Qué tal se te dan las matemáticas?',
    questionAm: 'Մաթեմատիկան ինչպե՞ս է քեզ մոտ ստացվում։',
    options: [
      { key: 'A', textEs: 'Se me dan bastante bien.', textAm: 'Բավական լավ է ստացվում։' },
      { key: 'B', textEs: 'Algunas cosas son fáciles y otras no.', textAm: 'Որոշ բաներ հեշտ են, որոշները՝ ոչ։' },
      { key: 'C', textEs: 'Me gustan bastante.', textAm: 'Բավական սիրում եմ։' },
      { key: 'D', textEs: 'Prefiero otras asignaturas.', textAm: 'Ուրիշ առարկաներ եմ նախընտրում։' }
    ]
  },
  {
    id: 39,
    category: 'Что могут сказать дети в школе / Ինչ կարող են ասել երեխաները դպրոցում',
    questionEs: '¿Qué asignatura crees que te costará más?',
    questionAm: 'Քո կարծիքով ո՞ր առարկան քեզ համար ավելի դժվար կլինի։',
    options: [
      { key: 'A', textEs: 'Quizás Lengua.', textAm: 'Հնարավոր է՝ լեզուն։' },
      { key: 'B', textEs: 'No lo sé todavía.', textAm: 'Դեռ չգիտեմ։' },
      { key: 'C', textEs: 'Puede que Historia, por el idioma.', textAm: 'Գուցե պատմությունը՝ լեզվի պատճառով։' },
      { key: 'D', textEs: 'Espero que ninguna sea demasiado difícil.', textAm: 'Հուսով եմ՝ ոչ մեկը շատ դժվար չի լինի։' }
    ]
  },
  {
    id: 40,
    category: 'Что могут сказать дети в школе / Ինչ կարող են ասել երեխաները դպրոցում',
    questionEs: '¿Te da vergüenza hablar cuando no conoces a nadie?',
    questionAm: 'Ամաչո՞ւմ ես խոսել, երբ ոչ մեկին չես ճանաչում։',
    options: [
      { key: 'A', textEs: 'Un poco al principio.', textAm: 'Սկզբում՝ մի քիչ։' },
      { key: 'B', textEs: 'Sí, pero luego se me pasa.', textAm: 'Այո, բայց հետո անցնում է։' },
      { key: 'C', textEs: 'A veces, pero intento hablar igualmente.', textAm: 'Երբեմն, բայց միևնույն է փորձում եմ խոսել։' },
      { key: 'D', textEs: 'Si la gente es simpática, no tanto.', textAm: 'Եթե մարդիկ բարեհամբույր են, ոչ այնքան։' }
    ]
  },

  // 41–50. Быстрые реакции — футбол и друзья
  {
    id: 41,
    category: 'Быстрые реакции — футбол и друзья / Արագ արձագանքներ՝ ֆուտբոլ և ընկերներ',
    questionEs: '¡Pásamela!',
    questionAm: 'Փոխանցի՛ր ինձ։ (Ի՞նչ կպատասխանես)',
    options: [
      { key: 'A', textEs: '¡Toma!', textAm: 'Ահա՛։' },
      { key: 'B', textEs: '¡Voy!', textAm: 'Հիմա՛։' },
      { key: 'C', textEs: '¡Espera!', textAm: 'Սպասիր։' },
      { key: 'D', textEs: '¡Ahí va!', textAm: 'Ահա գալիս է։' }
    ]
  },
  {
    id: 42,
    category: 'Быстрые реакции — футбол и друзья / Արագ արձագանքներ՝ ֆուտբոլ և ընկերներ',
    questionEs: '¡Chuta, chuta!',
    questionAm: 'Հարվածի՛ր, հարվածի՛ր։ (Ի՞նչ կպատասխանես)',
    options: [
      { key: 'A', textEs: '¡Voy!', textAm: 'Հիմա։' },
      { key: 'B', textEs: '¡Vale!', textAm: 'Լավ։' },
      { key: 'C', textEs: '¡Ya!', textAm: 'Հիմա՛։' },
      { key: 'D', textEs: '¡Déjamela!', textAm: 'Թող գնդակն ինձ։' }
    ]
  },
  {
    id: 43,
    category: 'Быстрые реакции — футбол и друзья / Արագ արձագանքներ՝ ֆուտբոլ և ընկերներ',
    questionEs: '¿Quién se pone de portero?',
    questionAm: 'Ո՞վ է կանգնելու դարպասապահ։',
    options: [
      { key: 'A', textEs: 'Me pongo yo.', textAm: 'Ես կկանգնեմ։' },
      { key: 'B', textEs: 'Yo no, prefiero jugar fuera.', textAm: 'Ես՝ ոչ, նախընտրում եմ դաշտում խաղալ։' },
      { key: 'C', textEs: 'Podemos turnarnos.', textAm: 'Կարող ենք հերթով կանգնել։' },
      { key: 'D', textEs: 'Que se ponga él primero.', textAm: 'Թող սկզբում նա կանգնի։' }
    ]
  },
  {
    id: 44,
    category: 'Быстрые реакции — футбол и друзья / Արագ արձագանքներ՝ ֆուտբոլ և ընկերներ',
    questionEs: '¿Hacemos equipos?',
    questionAm: 'Թիմե՞ր կազմենք։',
    options: [
      { key: 'A', textEs: 'Sí, vamos.', textAm: 'Այո, գնանք։' },
      { key: 'B', textEs: 'Vale, ¿cómo los hacemos?', textAm: 'Լավ, ինչպե՞ս ենք բաժանվում։' },
      { key: 'C', textEs: 'Yo voy con vosotros.', textAm: 'Ես ձեզ հետ եմ։' },
      { key: 'D', textEs: 'Venga, empezamos.', textAm: 'Դե, սկսենք։' }
    ]
  },
  {
    id: 45,
    category: 'Быстрые реакции — футбол и друзья / Արագ արձագանքներ՝ ֆուտբոլ և ընկերներ',
    questionEs: '¿Cuánto llevas jugando al fútbol?',
    questionAm: 'Որքա՞ն ժամանակ է՝ ֆուտբոլ ես խաղում։',
    options: [
      { key: 'A', textEs: 'Llevo varios años jugando.', textAm: 'Մի քանի տարի է՝ խաղում եմ։' },
      { key: 'B', textEs: 'Juego desde que era pequeño.', textAm: 'Փոքր տարիքից եմ խաղում։' },
      { key: 'C', textEs: 'Empecé hace unos años.', textAm: 'Մի քանի տարի առաջ եմ սկսել։' },
      { key: 'D', textEs: 'Llevo bastante tiempo.', textAm: 'Բավական երկար ժամանակ է։' }
    ]
  },
  {
    id: 46,
    category: 'Быстрые реакции — футбол и друзья / Արագ արձագանքներ՝ ֆուտբոլ և ընկերներ',
    questionEs: '¿Te apuntas al partido del sábado?',
    questionAm: 'Շաբաթ օրվա խաղին միանո՞ւմ ես։',
    options: [
      { key: 'A', textEs: 'Sí, me apunto.', textAm: 'Այո, միանում եմ։' },
      { key: 'B', textEs: 'Claro, ¿a qué hora es?', textAm: 'Իհարկե, ժամը քանիսի՞ն է։' },
      { key: 'C', textEs: 'Creo que sí, pero tengo que preguntar.', textAm: 'Կարծում եմ՝ այո, բայց պետք է հարցնեմ։' },
      { key: 'D', textEs: 'Si no tengo entrenamiento, voy.', textAm: 'Եթե մարզում չունենամ, կգամ։' }
    ]
  },
  {
    id: 47,
    category: 'Быстрые реакции — футбол и друзья / Արագ արձագանքներ՝ ֆուտբոլ և ընկերներ',
    questionEs: '¿Qué haces si tu equipo va perdiendo?',
    questionAm: 'Ի՞նչ ես անում, եթե թիմդ պարտվում է։',
    options: [
      { key: 'A', textEs: 'Sigo jugando hasta el final.', textAm: 'Շարունակում եմ խաղալ մինչև վերջ։' },
      { key: 'B', textEs: 'Intento animar al equipo.', textAm: 'Փորձում եմ ոգևորել թիմին։' },
      { key: 'C', textEs: 'Corro más y no me rindo.', textAm: 'Ավելի շատ եմ վազում ու չեմ հանձնվում։' },
      { key: 'D', textEs: 'Intento cambiar el partido.', textAm: 'Փորձում եմ փոխել խաղի ընթացքը։' }
    ]
  },
  {
    id: 48,
    category: 'Быстрые реакции — футбол и друзья / Արագ արձագանքներ՝ ֆուտբոլ և ընկերներ',
    questionEs: '¿Te enfadas когда pierdes?',
    questionAm: 'Բարկանո՞ւմ ես, երբ պարտվում ես։',
    options: [
      { key: 'A', textEs: 'A veces, pero se me pasa rápido.', textAm: 'Երբեմն, բայց արագ անցնում է։' },
      { key: 'B', textEs: 'No, intento aprender de los errores.', textAm: 'Ոչ, փորձում եմ սխալներից սովորել։' },
      { key: 'C', textEs: 'Un poco, porque me gusta ganar.', textAm: 'Մի քիչ, որովհետև սիրում եմ հաղթել։' },
      { key: 'D', textEs: 'Depende de cómo haya jugado.', textAm: 'Կախված է՝ ինչպես եմ խաղացել։' }
    ]
  },
  {
    id: 49,
    category: 'Быстрые реакции — футбол и друзья / Արագ արձագանքներ՝ ֆուտբոլ և ընկերներ',
    questionEs: 'Si pudieras jugar con cualquier futbolista, ¿a quién elegirías?',
    questionAm: 'Եթե կարողանայիր ցանկացած ֆուտբոլիստի հետ խաղալ, ո՞ւմ կընտրեիր։',
    options: [
      { key: 'A', textEs: 'Elegiría a mi jugador favorito.', textAm: 'Կընտրեի իմ սիրելի ֆուտբոլիստին։' },
      { key: 'B', textEs: 'Jugaría con un delantero famoso.', textAm: 'Հայտնի հարձակվողի հետ կխաղայի։' },
      { key: 'C', textEs: 'Elegiría a alguien de mi equipo favorito.', textAm: 'Իմ սիրելի թիմից որևէ մեկին կընտրեի։' },
      { key: 'D', textEs: 'Hay tantos que no sabría elegir.', textAm: 'Այնքան շատ են, որ չէի իմանա՝ ում ընտրել։' }
    ]
  },
  {
    id: 50,
    category: 'Быстрые реакции — футбол и друзья / Արագ արձագանքներ՝ ֆուտբոլ և ընկերներ',
    questionEs: 'Oye, juegas bastante bien. ¿Quieres venir mañana otra vez?',
    questionAm: 'Լսի՛ր, բավական լավ ես խաղում։ Վաղը նորից ուզո՞ւմ ես գալ։',
    options: [
      { key: 'A', textEs: '¡Sí, claro! ¿A qué hora quedamos?', textAm: 'Այո՛, իհարկե։ Ժամը քանիսի՞ն ենք հանդիպում։' },
      { key: 'B', textEs: 'Vale, me encantaría.', textAm: 'Լավ, մեծ հաճույքով։' },
      { key: 'C', textEs: 'Sí, si puedo, vendré.', textAm: 'Այո, եթե կարողանամ, կգամ։' },
      { key: 'D', textEs: 'Claro. Escríbeme y me dices dónde.', textAm: 'Իհարկե։ Գրիր ինձ ու ասա՝ որտեղ։' }
    ]
  }
];
