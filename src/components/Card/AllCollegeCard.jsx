import React from 'react';
import { Link } from 'react-router-dom';

const AllCollegeCard = ({ college }) => {
    console.log(college);
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl group">
                <figure><img src={college?.collegeImage} className='group-hover:scale-110 transition-all' alt="photo not found" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {college?.collegeName}
                        <div className="badge badge-secondary">Rating: {college?.collegeRating}</div>
                    </h2>
                    <p className='font-semibold'>Admission Date: <span className='text-error'>{college?.admissionDates}</span></p>
                    <p className='font-semibold'>Number of researches: {college?.numberOfResearch}</p>
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

                    <div className="card-actions justify-end">
                        <Link to={`/collegeDelails/${college?._id}`}>
                            <button className="btn btn-sm border-b-2 ">Details</button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AllCollegeCard;