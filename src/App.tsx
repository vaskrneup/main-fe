import { Home } from "./pages/Home";
import ReactGa from "react-ga";
ReactGa.initialize('UA-216138233-1')

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
