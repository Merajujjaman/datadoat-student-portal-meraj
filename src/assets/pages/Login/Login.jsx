import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import SocialLogin from '../../../components/SocialLogin/SocialLogin';
import Lottie from "lottie-react";
import loginanimation from '../../image/animation_lkh0dyzp.json'

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'log in successfull',
                    showConfirmButton: false,
                    timer: 1500
                })

                navigate(from, { replace: true })

            })
            .catch(error => {
                toast.error(error.message)
                console.log(error);
            })

    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col gap-10 my-20 lg:flex-row">
                    <div className="text-center md:w-1/2">

                        <Lottie animationData={loginanimation} loop={true}></Lottie>
                    </div>
                    <div className="card w-full md:w-1/2 shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center my-5 font-bold">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center my-2'>New here? <Link className='text-info' to='/register' state={location?.state} replace>Register</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;