import React from 'react'

function Card({img,h1,p,button}) {
    return (
        <div className="mt-8 ml-20 w-64 h-80 bg-white grid-flow-r gap-2">
            <img src={img}/>

            <h1 className="ml-2 text-xl font-medium mt-9 mb-3">{h1}</h1>
            <p className="text-base ml-2">{p}</p>
            <button className="ml-8 mt-6 text-blue-700">{
                button
            }</button>

            
        </div>
    )
}

export default Card
