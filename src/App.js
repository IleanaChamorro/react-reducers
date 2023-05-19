import Contador from "./components/Contador";
import ContadorMejorado from "./components/ContadorMejorado";
import CrudApi from "./components/CrudApi";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr/>
      <CrudApi/>
      <hr></hr>
      <Contador/>
      <hr/>
      <ContadorMejorado/>
      <hr/>
      <ShoppingCart/>
    </div>
  );
}

export default App;
