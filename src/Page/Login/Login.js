import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Loading/Loading';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { async } from '@firebase/util';
import useToken from '../../hooks/useToken';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || user1);
    const [email, setEmail] = useState("");
    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth);
    let location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const { register, formState: { errors }, handleSubmit } = useForm();
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    if (loading || loading1) {
        return <Loading></Loading>
    }
    let errorMessage;
    if (error || error1) {
        errorMessage = <p className="text-red-500">{error?.message} || {error1.message}</p>
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }


    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);

    }
    const handleReset = async (event) => {
        console.log(email);
        if (email) {
            sendPasswordResetEmail(email);
            alert("Email sent to your mail")
        }
        else {
            alert("Please provide valid email")
        }

    }
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input
                                type="email" onBlur={handleEmail} name="email" placeholder="Type Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Please give a valid email'
                                    }
                                })}

                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                type="password" placeholder="Type Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    pattern: {
                                        value: 6,
                                        message: 'Password must contain six charecter'
                                    }

                                })}

                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>

                        </div>




                        {errorMessage}

                        <input className="btn w-full max-w-xs" type="submit" />
                        <p><small>Forget Password? <Link className="text-secondary" onClick={handleReset} to="/login">Reset Password</Link></small></p>
                        <p><small>New to doctors portal? <Link className="text-secondary" to="/signup">Sign up</Link></small></p>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;