function ShopItemCard(props){
    return(
        <>
            <div className="w-[200px] h-[300px] m-2 border-black border-solid border">
                <div className="w-[198px] h-[198px] bg-black"> </div>
                <div className="p-2 flex flex-col ">
                    <div className="text-sm text-gray-600 " >{props.name}</div>
                    <div className=" m-2  " >
                        <div className="text-xs">{props.brand}</div>
                        <div className="text-sm ">price : IQD{props.price}</div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ShopItemCard;
