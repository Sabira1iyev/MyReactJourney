import { useState } from "react";
import { useForm } from 'react-hook-form'

function SignUpForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
        alert(`submitted with email: ${data.email} and password: ${data.password}`);


    }
    return (
        <div style={{ maxWidth: 400, margin: "2rem auto" }} className="flex flex-col">
            <h1 className="text-3xl text-center">Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmit)} className=" 
            border border-green-400 mt-8 flex flex-col items-center px-8 py-4">
                <div style={{ marginBottom: "1rem" }}>
                    <label className="flex gap-2">
                        Email:
                        <input type="email" className="text-center border-2 border-green-300 rounded-lg"
                            placeholder="you@example.com"
                            {...register("email", {
                                required: "Email is required",
                                minLength: {
                                    value: 4,
                                    message: "Password must be at least 4 chars",
                                },
                                maxLength: {
                                    value: 12,
                                    message: "Password must be at least most 12 chars"
                                }
                            })} />
                    </label>


                    {errors.email && <p className="text-center" style={{ color: "crimson" }}>{errors.email.message}</p>
                    }
                </div>

                <div style={{ marginBottom: "1rem" }}>
                    <label className="flex justify-center items-center text-center gap-2">
                        Password:
                        <input type="password" className="text-center border-2 border-green-300 rounded-lg"
                            placeholder="Enter Password"
                            {...register("password", { required: "Password is required" })} />
                    </label>
                    {errors.password && <p className="text-center" style={{ color: "crimson" }}>{errors.password.message}</p>
                    }
                </div>
                <button className="cursor-pointer px-10 py-2 rounded-lg bg-green-500" type="submit">Create Account</button>
            </form>

        </div>
    )

}
export default SignUpForm