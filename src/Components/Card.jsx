import React from "react";

function Card({ user, handleRemove, id }) {
    return (
        <div className="w-48 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
            <div className="img w-12 h-12 rounded-full bg-blue-200 overflow-hidden">
                <img className="w-full h-full object-cover" src={user.Img} alt="icon" />
            </div>
            <h1 className="mt-1 font-semibold text-xl text-center">{user.Name}</h1>
            <h4 className="opacity-60 text-sm font-medium">{user.Email}</h4>
            <p className="mt-2 text-center text-xs font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                impedit.
            </p>
            <button onClick={() => handleRemove(id)} className="px-3 py-1 rounded-md bg-red-600 text-xs text-white mt-3 font-medium">
                Remove It
            </button>
        </div>
    );
}

export default Card;
