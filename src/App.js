import { apiKey } from "./util";
function Header() {
  return (
    <header>
      <h1>Hello from App</h1>
    </header>
  )
}
function App() {
  return (
    <div>
      <Header></Header>
      <ul>
        <li>Base Syntax & Rules</li>
        <li>Variables, Values & Operators</li>
        <li>Functions</li>
        <li>Control Structures</li>
        <li>Browser APIs & The DOM</li>
        <li>Yo</li>
      </ul>
      <p>
        Build a component and insert it below this text.
      </p>
      <p>
        you know hahahahah
      </p>
    </div>
  );
}

export default App;
