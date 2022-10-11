import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./layout/index"
import Home from "./pages/Home";
import UmutHoca from "./pages/UmutHoca";
import Axios from "./pages/Axios";
import RenkSayfa from "./pages/RenkSayfa"
function App() {

  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="hoca" element={<UmutHoca/>}/>
      <Route path="axios" element={<Axios/>}/>
      <Route path="renk" element={<RenkSayfa/>}/>
    </Route>
  </Routes>
  </BrowserRouter>;
}

export default App;
