import React, { useEffect, useState } from 'react';
import Banner from '../../../components/Banner/Banner';
import axios from 'axios';
import HomeCollegeCard from '../../../components/Card/HomeCollegeCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Gallery from '../../../components/Gallery/Gallery';
import Reviews from '../../../components/Reviews/Reviews';
import About from '../../../components/About/About';

const Home = () => {
    const [colleges, setColleges] = useState([])
    useEffect(() => {
        axios.get('https://college-booking-server-eight.vercel.app/colleges')
            .then(data => setColleges(data.data))
    }, [])
    // console.log(colleges);
    return (
        <div className='mx-2 md:mx-10'>
            <Banner></Banner>
            <div className='my-10 md:my-20'>
                <About></About>
            </div>
            <SectionTitle title={"Courses & Colleges"}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mb-5 md:mb-10'>
                {
                    colleges?.map(college => <HomeCollegeCard
                        key={college?._id}
                        college={college}
                    ></HomeCollegeCard>)
                }
            </div>
            <div className='mb-10'>
                <SectionTitle title={"Gallery"}></SectionTitle>
                <Gallery></Gallery>
            </div>
            <div className='mb-10 md:mb-20'>
                <SectionTitle title={"Reviews"}></SectionTitle>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;