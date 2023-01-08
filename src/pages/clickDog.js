import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

function ClickDog(){
    const navigate = useNavigate();
    const [img , setImg] = useState()
    const [click, setClick] = useState(false)
    const [color, setColor] = useState()
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((data) => {
                setImg(data.message)
            });
            const colors = ["red", "green" , "blue" , "purple" , "yellow" , "orange"]
            let randomNum = Math.ceil(Math.random() * 6 - 1);
            setColor(colors[randomNum])
        return ()=>{
            setClick(false)
        }

    }, [click])
    return(
        <>
        <div className=" flex justify-items-center item-center flex-col " style={{width: "100vw", height: "100vh", backgroundColor : color}} onClick={()=>{setClick(true)}} >
            <img style={{width:"100%", height:"100%", objectFit: "contain"}} src={img} alt="dog"/>
        </div>
        <button onClick={()=>{navigate("/react-playground")}}>go home</button>
        </>

    )

}

export default ClickDog;
