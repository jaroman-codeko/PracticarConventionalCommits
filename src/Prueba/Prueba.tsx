import { useEffect, useState } from "react";
import { api } from "../services/api.js";

interface Ejemplo {
  title: string;
  disabled: boolean;
}

const Btn = () => {
  const [click, setClick] = useState(false);
  const [datos, setDatos] = useState("Pulsame");
  const [img, setImg] = useState("");


  useEffect(() => {
  }, [click])
  


  const handleSacarPokemon = async () => {
    const poke = await sacarPokemon();
    return poke;
  };

  const creaNumeroAleatorio = () => Math.floor(Math.random() * 900);

  const sacarPokemon = async () => {
    const {
      data: {
        name,
        sprites: {
          other: {
            showdown: { front_default },
          },
        },
      },
    } = await api.get(`/pokemon/${creaNumeroAleatorio()}`);

    return {
      name,
      front_default,
    };
  };



  const handleClick = () => {
    click ? console.log("Click desactivado") : setClick(!click);


    setDatos("Loading...");
    
    handleSacarPokemon().then( el=>{
        setImg(el.front_default)
        setDatos("")
    }).catch(()=>console.log("error"))

    setTimeout(() => {
      setClick(!!click);
      setDatos("Pulsame");
      setImg("")
    }, 3000);
  };

  return (
    <button disabled={click} onClick={handleClick}>
        {
            img && <img src={img} alt="imagen de un pokemon " width={"75px"} />
        }
      {datos}
    </button>
  );
};

export const Prueba = () => {
  return <Btn  />;
};
