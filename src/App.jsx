import "./App.css";
import LikeButton from "./components/like-button";
import Counter from "./components/counter";
import ClickablePicture from "./components/clickable-picture";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      
      <LikeButton />
      <LikeButton />

      <Counter />

      <ClickablePicture />

    </div>
  );
}

export default App;
