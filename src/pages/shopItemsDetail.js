import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function ShopItemsDetail(){
    const navigate = useNavigate();
    const { id } = useParams();
    const [shopItemDetails , setShopItemDetails] = useState('');
    useEffect(()=>{
        fetch('http://localhost:8000/api/shopItems/' + id)
            .then((response) => response.json())
            .then((data) => {
                setShopItemDetails(data.shopItem)
                
                
            })
    },[id])
    return(
        <div className="flex flex-row" >
            <div className="w-[400px] h-[400px] bg-black"> </div>
            <div className="w-[600px] h-[600px] px-10 py-2  " >
                <div >{shopItemDetails.name}</div>
                <div >id: {shopItemDetails.id}</div>
                <div >brand: {shopItemDetails.brand}</div>
                <div >size: {shopItemDetails.size}</div>
                <div >width: {shopItemDetails.width}</div>
                <div >length: {shopItemDetails.itemLength}</div>
                <div >condition: {shopItemDetails.condition}</div>
                <div >price: {shopItemDetails.price}</div>
            </div>
            <button onClick={()=>{navigate("/thriftingOnline")}}>go back</button>
        </div>
    )


}

export default ShopItemsDetail;
