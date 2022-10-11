import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function UmutHoca() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTime((time) => time + 1);
    },1000);
  });
  return (
    <div>
      Umut sağ olsun...
      <h1>: {time}</h1>
      <Button className="buton">
        <Link className="yonlendirmeButonu" to={"/"}>
          Ana sayfaya git
        </Link>
      </Button>
    </div>
  );
}

export default UmutHoca;
