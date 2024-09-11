import React from "react";

function Card(props)
{
    return (
        <div className="rounded-lg flex flex-col bg-white shadow-xl h-full hover:scale-110 transition-all cursor-pointer">
            <img src={props.Poster} className=" rounded-t-lg h-80 w-80" />
            <div className="w-full h-full p-4 flex flex-col gap-2 ">
                <p className="font-bold">{props.Title}</p>                
            </div>
        </div>
    )
}

export default Card;