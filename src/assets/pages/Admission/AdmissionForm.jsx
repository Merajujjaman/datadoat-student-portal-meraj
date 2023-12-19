import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';

const AdmissionForm = () => {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [college, setCollege] = useState([]);

    useEffect(() => {
        axios.get(`https://college-booking-server-eight.vercel.app/college/${id}`)
            .then(data => setCollege(data.data))

    }, [])

    console.log(college);

    const handleAdmission = event => {
        event.preventDefault()
        const form = event.target;
        const studentName = form.name.value;
        const studentEmail = user?.email;
        const address = form.address.value;
        const phone = form.phone.value;

        const { _id, ...restOfCollege } = college
        const admitedCollege = { studentName, studentEmail, address, phone, ...restOfCollege }
        console.log(admitedCollege);

        fetch('https://college-booking-server-eight.vercel.app/addmission', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admitedCollege)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'enroll successfull',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    navigate('/')
                }
                if (data.message === 'admited') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `You already enrolled`,

                    })
                    navigate('/')
                }
            })
            .catch(error => {
                console.log(error);
            })

        // console.log(admitedCollege);
    }

    return (
        <div className='mx-2 md:mx-10 min-h-[calc(100vh-180px)] pt-10'>
            <SectionTitle title={"Admission Form"}></SectionTitle>
            <form onSubmit={handleAdmission} className='w-full md:w-2/3 mx-auto py-10' >

                <div className='md:flex gap-5 mb-5'>
                    <input type="text" name='name' placeholder="Type your name" className="input input-bordered input-info w-full" required />
                    <input type="email" name='email' placeholder="Type your emai" className="input input-bordered input-info w-full" defaultValue={user?.email} readOnly />
                </div>

                <div className='md:flex gap-5 mb-5'>
                    <input type="text" name='address' placeholder="Type your address" className="input input-bordered input-info w-full" required />

                    <input type="number" name='phone' placeholder="Type your phone number" className="input input-bordered input-info w-full" required />
                </div>
                <button type='submit' className='btn btn-block btn-info'>Submit</button>
            </form>
        </div>
    );
};

export default AdmissionForm;