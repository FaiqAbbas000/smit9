import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
const login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)

    };
    return (
        <>
            <Navbar />
            <h1 className="text-3xl text-center font-bold mt-20 mb-10" >Student login</h1>
            <form
                className="lg:col-span-2 mt-5 mx-20"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="md:col-span-3">
                    <label>Email</label>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        // name="city"
                        // id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        // value=""
                        placeholder="Valid email"
                    />
                    {errors.email && (
                        <p className="text-red-500">Valid email is required.</p>
                    )}
                </div>
                <div className="md:col-span-3">
                    <label>Password</label>
                    <input
                        type="password"
                        {...register("password", { required: true, minLength: 6 })}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter Password"
                    />
                    {errors.password && (
                        <p className="text-red-500">
                            Password is atleast 6 characters.
                        </p>
                    )}
                </div>

                <div className="">
                    <div className="">
                        <button
                            // disabled={!pImage}
                            className={
                                // !pImage
                                //   ? "bg-gray-200 text-slate-400 font-bold py-2 px-6 rounded"
                                `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-2`
                            }
                        >
                            SIGNUP
                        </button>
                    </div>
                </div>
        
        </form >

    </>
  )
}


export default login