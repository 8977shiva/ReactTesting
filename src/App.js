import "./App.css";
import {createStore} from "redux";
import {Provider} from "react-redux";
import counterReducer from "./redux/counterReducer";
import Counter from "./redux/Counter";

const store=createStore(counterReducer)
function App() {
  return (
    <div className="App">
       <Provider store={store}><Counter/></Provider>
    </div>
  );
}

export default App;
