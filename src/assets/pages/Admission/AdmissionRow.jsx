import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionRow = ({ college }) => {
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-40 h-12">
                            <img src={college?.collegeImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td className='md:text-xl font-serif font-semibold'>
                {college?.collegeName}
            </td>
            <td>
                {college?.collegeRating}
            </td>
            <th>
                <Link to={`/admissionform/${college?._id}`}><button className="btn btn-error btn-xs">Enroll</button></Link>
            </th>
        </tr>
    );
};

export default AdmissionRow;