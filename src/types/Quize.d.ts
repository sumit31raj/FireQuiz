interface Quiz {
  en_q: string;
  de_q: string;
  options: Array<string>;
  answer: {
    en: string;
    de: string;
  };
}

type Quizes = Array<Quiz>;
