import React from 'react';
import { Link } from 'react-router-dom';

const HomeCollegeCard = ({ college }) => {
    // console.log(college);
    return (
        <>
            <div className="card card-compact w-full bg-base-100 shadow-xl group">
                <figure><img className='w-full group-hover:scale-110 transition-all' src={college?.collegeImage} alt="photo not found" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-serif font-semibold">{college?.collegeName}</h2>
                    <p className='font-semibold'>Admission Date: <span className='text-error'>{college?.admissionDates}</span></p>
                    <p className='font-semibold underline'>Research History</p>
                    <p className='text-gray-500 -mt-2'>{college?.researchHistory}</p>
                    <div className='flex justify-between'>
                        <div>
                            <p className='font-semibold underline'>Sports</p>
                            <p>{college?.sports?.map(item => <li key={item}>{item}</li>)}</p>
                        </div>

                        <div>
                            <p className='font-semibold underline'>Events</p>
                            <p>{college?.events?.map(item => <li key={item}>{item}</li>)}</p>
                        </div>
                    </div>
                    {/* buttons */}
                    <div className="card-actions justify-end">
                        <Link to='/admission'>
                            <button className="btn btn-primary btn-sm border-b-2 ">Apply</button>
                        </Link>
                        <Link to={`/collegeDelails/${college?._id}`}>
                            <button className="btn btn-error btn-sm border-b-2 ">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeCollegeCard;