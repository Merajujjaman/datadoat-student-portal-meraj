import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const DetailsCard = ({ info }) => {
    // console.log(info?.sportsCategories);
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className=' w-full lg:w-1/2'>
                        <img src={info?.collegeImage} className=" w-full rounded-lg shadow-2xl" />
                    </div>
                    <div className=' w-full lg:w-1/2'>
                        <h1 className="text-3xl font-bold">{info?.collegeName}</h1>
                        <p className="py-6">Unlock a world of opportunities at <span className='font-semibold'>{info?.collegeName}</span>. With our unwavering dedication to academic excellence, state-of-the-art facilities, and holistic approach to education, we create an environment where students can flourish. From engaging in groundbreaking research to enjoying a vibrant campus life, you'll have the chance to grow personally and professionally. Our committed career services team will support you every step of the way, guiding you towards a successful future. Join our esteemed alumni network and take the leap into a promising tomorrow. Discover your path to success at <span className='font-semibold'>{info?.collegeName}</span>.</p>

                        <p className='font-semibold'>Admission Date: <span className='text-error'>{info?.admissionDates}</span></p>

                        <p className='font-semibold'>Number of researches: {info?.numberOfResearch}</p>

                        <div className='flex justify-between'>
                            <div>
                                <p className='font-semibold underline'>Sports</p>
                                <p>{info?.sports?.map(item => <li key={item}>{item}</li>)}</p>
                            </div>

                            <div>
                                <p className='font-semibold underline'>Events</p>
                                <p>{info?.events?.map(item => <li key={item}>{item}</li>)}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <SectionTitle title={"Sports"}></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-10' style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/01/89/51/79/360_F_189517961_1WakCg9Gtz7TOOkCF4IKXM7FLE1vz09q.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay', }} >

                {info?.sportsCategories &&
                    info?.sportsCategories.map(item =>
                        <div key={item?.category} className="card w-full bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item?.category}</h2>
                                <p className='font-semibold'>Rules: {item?.rules}</p>
                                <p className='font-semibold'>Facilities: {item?.facilities}</p>
                            </div>
                        </div>
                    )
                }
            </div>

            <SectionTitle title={"Events"}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {info?.eventsDetails &&
                    info?.eventsDetails.map(item =>
                        <div key={item?.eventName} className="card w-full bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{item?.eventName}</h2>
                                <p className='font-semibold'>Date: <span className='text-error'>{item?.date}</span></p>
                                <p>{item?.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default DetailsCard;