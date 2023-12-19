import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc'

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then( result => {
            const logedUser = result.user;
            console.log(logedUser);
            navigate(from, { replace: true })
            
        })

    }
    return (
        <div className='p-2'>
        <div className="divider">or</div>
        <button onClick={handleGoogleSignIn} className='btn btn-outline btn-block btn-primary'><FcGoogle className='mr-2 text-xl'></FcGoogle> Login with Google</button>
    </div>
    );
};

export default SocialLogin;