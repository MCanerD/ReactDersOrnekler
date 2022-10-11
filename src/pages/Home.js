//rfce iskelet oluşturuyor.
import React,{useState,useEffect} from "react";
import Merhaba from "../component/Merhaba";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "../component/Form";
import World from "../component/World";

const defaultBackground = localStorage.getItem("background") || "light";
function Home() {
  const [background,setBackground] = useState(defaultBackground);

  useEffect(()=>{
    localStorage.setItem("background",background);
  },[background]);
  return (
    <div className={`${background}`}>
      <Merhaba />
      <Button className="buton" ><Link className="yonlendirmeButonu" to={"/hoca"}>Kralın eğitiminden nameler</Link></Button>
      <Button className="buton" ><Link className="yonlendirmeButonu" to={"/renk"}>Renk Sayfası</Link></Button>
      <Form/>
      <World aktarma={"Aktarma"}/>
      <button onClick={()=>setBackground(background === "light" ? "dark"  : "light")}>Tema Değiştir</button>
    </div>
  );
}

export default Home;
