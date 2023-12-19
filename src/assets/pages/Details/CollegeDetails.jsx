import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from '../../../components/Card/DetailsCard';

const CollegeDetails = () => {
    const [info, setInfo] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://college-booking-server-eight.vercel.app/college/${id}`)
            .then(data => setInfo(data.data))
    }, [])
    console.log(info);
    return (
        <div className='mx-2 md:mx-10'>
            <DetailsCard info={info}></DetailsCard>
        </div>
    );
};

export default CollegeDetails;