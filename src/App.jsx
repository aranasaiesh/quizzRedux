import { startQuizz, useQuizz } from "./quizz";
import Quizz from "./QuizzPage";
import Result from "./Result";

function App() {
  const { showResult, quizzStated } = useQuizz();

  function renderPart() {
    console.log("show result", showResult);
    if (showResult) {
      return <Result />;
    } else if (quizzStated) {
      return <Quizz />;
    } else {
      return <button onClick={() => startQuizz()}>Starta Quizz</button>;
    }
  }

  return <div>{renderPart()}</div>;
}

export default App;
