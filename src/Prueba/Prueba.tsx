import { useState } from "react";

interface Ejemplo{
    title:string,
    disabled:boolean
}



const Btn = () => {

    const  [click, setClick] = useState(false);
    const  [datos, setDatos] = useState("Pulsame");


    const handleClick= ()=>{
        click ? console.log("Click desactivado"):setClick(!click)

        setDatos("Has pulsado el boton");
        setTimeout(()=>{
            setClick(!!click)
            setDatos("Pulsame");

        },1000)

    }

    
    return(
        <button disabled={click}  onClick={handleClick} >{datos}</button>
    )

}




export const Prueba = () => {
  return (
    <Btn title="Datos de ejemplo" disabled={false}  />
        )
}
