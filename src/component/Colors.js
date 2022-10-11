import React, { useState } from "react";

function Colors() {
    const[colors,setColors] = useState(["Kırmızı","Mavi","Yeşil"]);
    const addColor=()=>{
        setColors([...colors,"gri"]);
    };
    return( <div>
        <h2>Renkler</h2>
        {
           colors.map((color)=>(
           <div>{color}</div>
           ))} 
           <button onClick={addColor}>Renk ekle</button>
        </div>
            
    );
}

export default Colors;
