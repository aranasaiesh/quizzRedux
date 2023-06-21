import { useQuizz, answerQuestion, startQuizz } from "./quizz";

export default function QuizzPage() {
  const { questions, currentQuestion, score } = useQuizz();
  const questionNow = questions[currentQuestion];

  return (
    <div className="flex justify-center flex-col items-center p-8 gap-8">
      <h1 className="font-bold">{questionNow.title}</h1>
      <button
        className="border border-black hover:bg-green-400 w-40 rounded-lg"
        onClick={() => answerQuestion(1)}
      >
        {questionNow.alt1}
      </button>
      <button
        className="border border-black hover:bg-green-400 w-40 rounded-lg"
        onClick={() => answerQuestion(2)}
      >
        {questionNow.alt2}
      </button>
      <button
        className="border border-black hover:bg-green-400 w-40 rounded-lg"
        onClick={() => answerQuestion(3)}
      >
        {questionNow.alt3}
      </button>
      <p className="border border-black bg-black text-white rounded-lg w-5 flex justify-center">
        {score}
      </p>
    </div>
  );
}
