import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Banner from '../../../components/Banner/Banner';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import AdmissionRow from './AdmissionRow';

const Admission = () => {
    const [colleges, setColleges] = useState([])
    useEffect(() => {
        axios.get('https://college-booking-server-eight.vercel.app/colleges')
            .then(data => setColleges(data.data))
    }, [])
    // console.log(colleges);
    return (
        <div className='mx-2 md:mx-10'>
            <Banner></Banner>
            <SectionTitle title={"Select One"}></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            colleges?.map(college => <AdmissionRow
                            key={college._id}
                            college={college}
                            ></AdmissionRow>)
                        }
                    
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admission;