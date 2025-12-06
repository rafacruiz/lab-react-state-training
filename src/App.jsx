import "./App.css";
import LikeButton from "./components/like-button";
import Counter from "./components/counter";
import ClickablePicture from "./components/clickable-picture";
import Dice from "./components/dice";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      
      <LikeButton />
      <LikeButton />

      <Counter />

      <ClickablePicture />

      <Dice />

    </div>
  );
}

export default App;
