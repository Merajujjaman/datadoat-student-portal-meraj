import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div className='py-5 md:py-10'>
            <h1 className='text-center font-serif font-semibold text-xl md:text-5xl'>{title}</h1>
            <hr className='border-2 border-black w-1/3 mx-auto mt-2' />
        </div>
    );
};

export default SectionTitle;