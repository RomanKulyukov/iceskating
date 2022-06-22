import "./App.css";
import ContentOuter from "./hoc/ContentOuter/ContentOuter";
import Content from "./Content/Content";
function App() {
  return (
    <div className="App">
      <ContentOuter>
        <Content />
      </ContentOuter>
    </div>
  );
}

export default App;
