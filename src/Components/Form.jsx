import React from "react";
import { useForm } from "react-hook-form";

function Form({handleFormSubmitData}) {
    const {register, handleSubmit, reset} =  useForm()
    
    const handleFormSubmit = (data) => {
        handleFormSubmitData(data);
        reset();
    }

    return (
        <div className="mt-10 flex justify-center items-center">
            <form className="flex gap-10" onSubmit={handleSubmit(handleFormSubmit)}>
                <input {...register("Name")} className="px-3 py-1 text-basEImage URLmaile font-semibold rounded-lg outline-none" type="text" placeholder="Name" />
                <input {...register("Email")} className="px-3 py-1 text-baseImage URL font-semibold rounded-lg outline-none" type="email" placeholder="Email" />
                <input {...register("Img")} className="px-3 py-1 text-base font-semibold rounded-lg outline-none" type="text" placeholder="Image URL" />
                <input className="rounded-md px-5 py-1 text-sm font-medium bg-blue-600 text-white" type="submit" />
            </form>
        </div>
    )
}

export default Form;