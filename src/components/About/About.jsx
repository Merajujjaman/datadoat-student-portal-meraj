import React from 'react';
import Lottie from "lottie-react";
import aboutanimation from '../../assets/image/animation_lkh1a4i7.json'


const About = () => {
    return (
        <div className='md:flex justify-between items-center gap-10'>
            <div className='w-full md:w-1/2'>
                <Lottie animationData={aboutanimation} loop={true}></Lottie>
            </div>
            <div className='w-full md:w-1/2'>
                <h1 className='text-info text-xl font-serif font-semibold'>Hi there,</h1>
                <p className=' font-serif text-gray-600 text-justify'>
                    Welcome to our College Booking Website! At College Hut, we are passionate about empowering students like you to embark on a transformative educational journey. Our platform is designed to simplify the college selection process, providing you with comprehensive information on a wide range of colleges and universities.

                    In our About section, we take pride in introducing our mission and commitment to helping you make informed decisions about your future. Our team is dedicated to curating up-to-date data, insightful reviews, and valuable resources, ensuring that you have all the tools you need to find the perfect fit for your aspirations and goals.

                    Whether you're seeking top-notch research facilities, a vibrant campus life, stellar sports programs, or a supportive academic community, we've got you covered. Join thousands of students who have already found their dream colleges through our user-friendly platform.

                    At College Hut, we believe that every student deserves access to quality education and endless possibilities. Let us be your trusted guide in the exciting journey of choosing the college that aligns with your passions and ambitions. Your future starts here – explore, compare, and book your way to a brighter tomorrow with us!
                </p>
            </div>

        </div>
    );
};

export default About;