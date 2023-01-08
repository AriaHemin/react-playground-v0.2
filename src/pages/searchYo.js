import { useState } from "react";
import {  useNavigate } from "react-router-dom";
function SearchYo(){
    const navigate = useNavigate();
    const [page, setPage] = useState()
    return(
        <>
            <div>
                <input onChange={(e)=>{setPage(e.target.value)}} />
                <button onClick={()=>{
                    navigate("/" + page)
                }} >search</button>
            </div>
            <button onClick={()=>{navigate("/react-playground")}}>go home</button>
        </>
    )

}

export default SearchYo;

