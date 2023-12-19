import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {
    return (
        <div className='flex'>
            <div className='w-1/2 border-2 '>
            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} stopOnHover={false} showThumbs={false}>
                <div>
                    <img className=' ' src="https://harcourts.com/blog/wp-content/uploads/2019/12/gown-rental-in-Toronto.jpg" />
                    
                </div>
                <div>
                    <img className='' src="https://images.shiksha.com/mediadata/images/1652342387php6V3hhZ.jpeg" />
                    
                </div>
                <div>
                    <img className='' src="https://ctcl.org/wp-content/uploads/2015/08/CTCL-Evergreen-1-810x540.jpg" />
                    
                </div>
            </Carousel>
            </div>
            <div className='grid grid-cols-2 w-1/2'>
                <div className='border-2'><img className=' w-full' src="https://admissions.web.baylor.edu/sites/g/files/ecbvkj671/files/2022-07/Visit_GettingHere.jpg" alt="image not found" /></div>
                <div className='border-2'><img className=' w-full' src="https://images.shiksha.com/mediadata/images/1652342387php6V3hhZ.jpeg" alt="image not found" /></div>
                <div className='border-2'><img className=' w-full' src="https://ctcl.org/wp-content/uploads/2015/08/CTCL-Evergreen-1-810x540.jpg" alt="image not found" /></div>
                <div className='border-2'><img className=' w-full' src="https://www.velocityokc.com/clientuploads/directory/super_blog/VeloCity_OSU.jpg" alt="image not found" /></div>
            </div>
        </div>
    );
};

export default Gallery;