import { createReduxModule, Provider } from "hooks-for-redux";

const initialState = {
  quizzStated: false,
  showResult: false,
  currentQuestion: 0,
  score: 0,
  questions: [
    {
      title: "Vad heter huvudstaden i Spanien?",
      alt1: "Lissabon",
      alt2: "Madrid",
      alt3: "Barcelona",
      correctAnswer: 2,
      id: 1,
    },
    {
      title: "Vad heter huvudstaden i Sverige?",
      alt1: "Malmö",
      alt2: "Göteborg",
      alt3: "Stockholm",
      correctAnswer: 3,
      id: 2,
    },
    {
      title: "Vad var namnet på den pandemi som bröt ut 2019?",
      alt1: "COVID-21",
      alt2: "SARS-COVID",
      alt3: "COVID-19",
      correctAnswer: 3,
      id: 3,
    },
    {
      title: "Vem innehar flest Formula 1 VM-titlar?",
      alt1: "Michael Schumacher",
      alt2: "Lewis Hamilton",
      alt3: "Dom har lika många.",
      correctAnswer: 3,
      id: 4,
    },
    {
      title:
        "I vilken stad föddes den svenska fotbollsspelaren Victor Nilsson Lindelöf?",
      alt1: "Västerås",
      alt2: "Stockholm",
      alt3: "Örebro",
      correctAnswer: 1,
      id: 5,
    },
  ],
};

export const [useQuizz, { answerQuestion, startQuizz }] = createReduxModule(
  "Quizz",
  initialState,
  {
    answerQuestion: (state, answer) => {
      let showResult = state.showResult;
      let score = state.score;
      let currentQuestion = state.currentQuestion;

      if (state.currentQuestion === state.questions.length - 1) {
        showResult = true;
      } else {
        currentQuestion += 1;
      }
      const questionNow = state.questions[state.currentQuestion];

      if (questionNow.correctAnswer === answer) {
        score += 1;
      }

      return { ...state, showResult, score, currentQuestion };
    },
    startQuizz: (state) => {
      return {
        ...state,
        quizzStated: true,
      };
    },
  }
);
