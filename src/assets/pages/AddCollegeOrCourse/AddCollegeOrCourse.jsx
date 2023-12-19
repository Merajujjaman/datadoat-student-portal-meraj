import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddCollegeOrCourse = () => {
    const navigate = useNavigate()
    const [painding, setPainding] = useState(false)

    const resObject = {

        "events": [
            "Tech Fair",
            "Science Symposium",
            "Cultural Week"
        ],
        "sports": [
            "Cricket",
            "Volleyball",
            "Badminton",
            "Athletics"
        ],
        "eventsDetails": [
            {
                "eventName": "Tech Fair",
                "date": "March 8-10",
                "description": "An exhibition of the latest technological advancements."
            },
            {
                "eventName": "Science Symposium",
                "date": "November 15-17",
                "description": "Prominent scientists share their research findings."
            },
            {
                "eventName": "Cultural Week",
                "date": "December 20-25",
                "description": "A celebration of cultural diversity through performances and workshops."
            }
        ],
        "researchWorks": [
            {
                "title": "Nanotechnology Innovations",
                "authors": [
                    "Robert Johnson",
                    "Lisa Wang"
                ],
                "publicationDate": "June 2022",
                "abstract": "Exploring cutting-edge nanotechnology applications."
            },
            {
                "title": "Biomedical Breakthroughs",
                "authors": [
                    "Daniel Lee",
                    "Sophie Adams"
                ],
                "publicationDate": "February 2023",
                "abstract": "Revolutionary discoveries in the field of biomedicine."
            }
        ],
        "sportsCategories": [
            {
                "category": "Cricket",
                "rules": "Matches follow ICC rules.",
                "facilities": "Well-maintained cricket grounds and equipment."
            },
            {
                "category": "Volleyball",
                "rules": "Standard volleyball rules apply.",
                "facilities": "Indoor and outdoor volleyball courts available."
            },
            {
                "category": "Badminton",
                "rules": "Matches follow BWF rules.",
                "facilities": "Modern badminton courts."
            },
            {
                "category": "Athletics",
                "rules": "Various track and field events.",
                "facilities": "Full-fledged athletics stadium."
            }
        ],
        "reviews": [
            {
                "reviewerName": "John Miller",
                "comment": "Outstanding faculty and research opportunities."
            },
            {
                "reviewerName": "Sarah Anderson",
                "comment": "The campus environment is conducive to learning."
            },
            {
                "reviewerName": "David Wilson",
                "comment": "Excellent sports facilities."
            }
        ]
    }
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const collegeName = form.collegeName.value;
        const collegeImage = form.collegeImage.value;
        const admissionDates = form.admissionDates.value;
        const researchHistory = form.researchHistory.value;
        const admissionProcess = form.numberOfResearch.value;
        const collegeRating = form.collegeRating.value;
        const numberOfResearch = form.numberOfResearch.value;

        setPainding(true)

        const courseData = { collegeName, collegeImage, admissionDates, researchHistory, admissionProcess, collegeRating: parseFloat(collegeRating), numberOfResearch: parseFloat(numberOfResearch), ...resObject }
        axios.post('https://college-booking-server-eight.vercel.app/colleges', courseData)
            .then(data => {
                if (data?.data?.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'enroll successfull',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setPainding(false)
                    navigate('/')
                }
            })
            .catch(error => {
                console.log(error);
                setPainding(false)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `somethig worng`,

                })
            })

        console.log(courseData);

    }
    return (
        <div className='w-full min-h-[calc(100vh-180px)] flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='w-full md:w-2/3 mx-auto mt-12' >
                <h1 className='text-lg md:text-xl font-semibold text-center mb-5 underline'>Add New College or Course</h1>
                <div className='md:flex gap-5 mb-5'>
                    <label className='w-full'>
                        College or Course Name
                        <input
                            type="text"
                            name="collegeName"
                            placeholder='enter the college or course name'
                            required
                            className="input input-bordered input-info w-full"
                        />
                    </label>

                    <label className='w-full'>
                        Image Link
                        <input
                            type="link"
                            name="collegeImage"
                            placeholder='enter a image link related to course'
                            required
                            className="input input-bordered input-info w-full"
                        />
                    </label>
                </div>

                <div className='md:flex gap-5 mb-5'>

                    <label>
                        Enroll Dates
                        <input
                            type="text"
                            name="admissionDates"
                            placeholder='ex: October 1 - December 15'
                            required
                            className="input input-bordered input-info w-full"
                        />
                    </label>

                    <label>
                        College or Course Rating
                        <input
                            type="number"
                            name="collegeRating"
                            placeholder='reting out of 5'
                            required
                            className="input input-bordered input-info w-full"
                        />
                    </label>

                    <label>
                        Number of Research
                        <input
                            type="number"
                            name="numberOfResearch"
                            placeholder='how many research have done?'
                            required
                            className="input input-bordered input-info w-full"
                        />
                    </label>
                </div>

                <label>
                    Research History
                    <textarea
                        name="researchHistory"
                        defaultValue={'A leading research institution since its establishment in 1965.'}
                        required
                        className="input input-bordered input-info w-full mb-5"
                    />
                </label>

                <label>
                    Enroll Process
                    <textarea
                        name="admissionProcess"

                        defaultValue="Online application and a written test are part of the admission process."
                        required
                        className="input input-bordered input-info w-full mb-5"
                    />
                </label>

                <button disabled={painding} className='btn btn-block btn-info' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddCollegeOrCourse;