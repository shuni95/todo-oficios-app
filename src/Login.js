import { useState } from "react";

export function Login () {
    const usuario = useFormInput("");
    const password = useFormInput("");

    function useFormInput(initValue) {
        const [value, setValue] = useState(initValue);

        function handleChange(e) {
            setValue(e.target.value);
        }

        return {
            value,
            onChange: handleChange,
        }
    }

    return (
        <section className="flex flex-col w-full items-center h-full bg-amber-200 mx-auto pt-4 md:pt-32">
            <form className="flex flex-row justify-center w-full md:w-[540px] bg-white mx-12 rounded-2xl">
                <div className="flex flex-col rounded-sm w-[80%] mt-4 pt-8 px-5 pb-20">
                    <div className="flex flex-row justify-center">
                        <h1 className="text-4xl font-bold">Login</h1>
                    </div>
                    <div className="flex flex-col mt-16">
                        <input type="text" className="border-t-0 border-x-0 border-b-2" name="usuario" placeholder="Usuario" {...usuario}/>
                    </div>
                    <div className="flex flex-col mt-8">
                        <input type="password" className="border-t-0 border-x-0 border-b-2" name="password" placeholder="Password" {...password}/>
                    </div>
                    <div className="flex flex-row mt-10 justify-center">
                        <button className='w-[200px] text-lg p-2 bg-emerald-400 text-white uppercase rounded-full select-none'>Ingresar</button>
                    </div>
                </div>
            </form>
        </section>
    )
}
