import { startQuizz, useQuizz } from "./quizz";

export default function Result() {
  const { score } = useQuizz();

  return (
    <div>
      <div className="flex justify-center flex-col">
        Your score is: {score}
        <button
          className="flex justify-center border border-black w-20 rounded-lg hover:bg-green-400 hover:text-white"
          onClick={() => startQuizz()}
        >
          Try again!
        </button>
      </div>
    </div>
  );
}
