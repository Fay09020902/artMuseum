import { apiKey } from "./util";
function Header() {
  return(
    <header>
      <h1>Hello from App</h1>
      <h1>JavaScript Refresher</h1>
    </header>
  )
}
function App() {
  const hobbies = ["Sports", "Cooking"];
  hobbies.map((item) => item + "!")

  return (
    <div>
      <Header></Header>
    <ul>
      <li>Base Syntax & Rules</li>
      <li>Variables, Values & Operators</li>
      <li>Functions</li>
      <li>Objects</li>
      <li>Arrays</li>
      <li>Control Structures</li>
      <li>Browser APIs & The DOM</li>
    </ul>
    <p>
        Build a component and insert it below this
        text.
      </p>
    </div>
  );
}

export default App;
