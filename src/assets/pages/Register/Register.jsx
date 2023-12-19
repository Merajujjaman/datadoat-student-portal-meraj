import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../../components/SocialLogin/SocialLogin';
import Lottie from "lottie-react";
import registeranimation from '../../image/animation_lkh0dyzp.json'


const Register = () => {
    const { createUser,updateUser, } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user
                updateUser(name)
                    .then(() => {
                        const saveUser = { name, email }
                        fetch('https://college-booking-server-eight.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'user created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    form.reset()
                                    navigate(from, { replace: true })
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))

        // console.log(name, email, password);
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col gap-10 my-20 lg:flex-row">
                    <div className="text-center md:w-1/2">

                        <Lottie animationData={registeranimation} loop={true}></Lottie>
                        
                    </div>
                    <div className="card w-full md:w-1/2 shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center my-5 font-bold">Create Account</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-primary">Create</button>
                            </div>
                        </form>
                        <p className='text-center my-2'>Already have an accounr <Link className='text-info' to='/login'>login</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;