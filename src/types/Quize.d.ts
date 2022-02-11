interface Quize {
  en_q: string;
  de_q: string;
  options: Array<string>;
  answer: string;
}

type Quizes = Array<Quize>;
