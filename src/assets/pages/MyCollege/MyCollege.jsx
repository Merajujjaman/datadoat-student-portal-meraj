import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import DetailsCard from '../../../components/Card/DetailsCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import personImg from '../../image/placeholder-image-person-jpg.jpg'
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const MyCollege = () => {
    const [info, setInfo] = useState([])
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://college-booking-server-eight.vercel.app/addmission/${user?.email}`)
            .then(data => setInfo(data?.data))
    }, [])

    // console.log(info[0]);
    const handleFeedback = event => {
        event.preventDefault()
        const form = event.target;
        const feedback = form.feedback.value;

        const feedbackData = {
            name: user.displayName,
            email: user.email,
            review: feedback
        }
        fetch('https://college-booking-server-eight.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedbackData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your review have sent',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    navigate('/')
                }
            })
            .catch(error => {
                console.log(error);
            })

        // console.log(feedbackData);
    }
    return (
        <>
            {
                info.length === 0 ?
                    <div className='min-h-screen flex justify-center items-center'>
                        <h1 className='text-5xl font-semibold'>You did not admit any college yet !</h1>
                    </div>
                    :
                    <div className='py-10 mx-2 md:mx-10'>

                        <SectionTitle title={"My Admited College"}></SectionTitle>
                        <div className='md:flex gap-20 justify-center items-center my-10'>
                            <div>
                                {
                                    user?.photoURL ? <img src={user?.photoURL} alt="image not found" className='w-40 rounded-full' />
                                        :
                                        <img src={personImg} alt="image not found" className='w-40 rounded-full' />
                                }

                            </div>
                            <div>
                                <h1 className='text-xl font-semibold mb-2'>Name: {info.studentName}</h1>
                                <h3 className='mb-2 font-semibold'>Email: {info?.studentEmail}</h3>
                                <h3 className='mb-2 font-semibold'>Address: {info?.address}</h3>
                                <h3 className='mb-2 font-semibold'>Phone: {info?.phone}</h3>
                            </div>
                        </div>
                        <DetailsCard info={info}></DetailsCard>
                        <form onSubmit={handleFeedback} className='w-full md:w-2/3 mx-auto my-10'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Review</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-32" name='feedback' placeholder="Write your review" required></textarea>
                            </div>
                            <button type='submit' className='btn btn-info btn-sm mt-5'>Send</button>
                        </form>
                    </div>
            }
        </>
    );
};

export default MyCollege;