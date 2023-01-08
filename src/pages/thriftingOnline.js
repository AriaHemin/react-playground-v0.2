import { useState, useEffect } from "react";
import ShopItemCard from "../components/shopItemCard";
import {  useNavigate } from "react-router-dom";

function ThriftingOnline(){
    const navigate = useNavigate();
    const [shopItemsArray, setShopItemsArray] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/api/shopItems/')
            .then((response) => response.json())
            .then((data) => {
                setShopItemsArray(data.shopItems)
                /*console.log(typeof(shopItemsArray), shopItemsArray)
                console.log(typeof(data), data)
                console.log(typeof(data.shopItems), data.shopItems)*/
            })
    },[])
    return(
        <>
            <div className="flex flex-wrap" >{
                shopItemsArray.map((shopItem)=>{return(
                    <button onClick={()=>{navigate("/shopItemsDetail/" + shopItem.id); }}
                        key={shopItem.id}>
                        <ShopItemCard 
                            name={shopItem.name}
                            brand={shopItem.brand}
                            size={shopItem.size}
                            width={shopItem.width}
                            itemLength={shopItem.itemLength}
                            condition={shopItem.condition}
                            price={shopItem.price}

                        />
                    </button>
                )})}
            </div>
            <button onClick={()=>{navigate("/react-playground")}}>go home</button>
        </>
    );
}

export default ThriftingOnline;