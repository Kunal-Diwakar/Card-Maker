import React from "react";
import Card from "./Card";

function Cards({ users, handleRemove }) {
    return (
        <div className="w-full max-h-96 p-4 flex items-center justify-center gap-4 flex-wrap overflow-auto">
            {users.map((item, index) => (
                <Card handleRemove={handleRemove} id={index} key={index} user={item} />
            ))}
        </div>
    );
}

export default Cards;
