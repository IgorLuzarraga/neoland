import "./App.css";
import { useState } from "react";
import Movie from "./components/Movie/Movie";
import Review from "./components/Review/Review";
import Score from "./components/Score/Score";

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="app-container">
      <Movie
        title="Guardians of Galaxy"
        poster="https://m.media-amazon.com/images/I/61-ndDQWTdL._AC_.jpg"
      />
      <hr />

      <Score score={score} setScore={setScore} />

      <Review
        title="I enjoyed it a lot! 
        It's always really cool to see the Guardians in action!"
        score={score}
      />
    </div>
  );
}

export default App