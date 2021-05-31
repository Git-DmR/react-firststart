import RegisterContainer from "../src/containers/register.js";
import CounterContainer from "../src/containers/counter.js";
import AppComponent from "../src/containers/child.js";
function App() {
  return (
    <div className="App">
      <RegisterContainer />
      <hr />
      <CounterContainer />
      <hr />
      <AppComponent />
    </div>
  );
}

export default App;
