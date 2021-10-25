import { Route } from "react-router-dom";
import { Landing } from "./Components/Landing/Landing";
import { Game } from "./Components/Game/Game";


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing}/>
      <Route exact path='/game' component={Game}/>
    </div>
  );
}

export default App;
