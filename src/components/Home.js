import React from 'react';

const Home = () => {
    return (
        <div className='grid grid-cols-2 mt-0 gap-5 m-16 items-center'>
            <div>
                <h1 className='text-7xl font-extrabold'>Your Best Laptop</h1>
                <p className='text-2xl p-4 pl-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab quisquam ut atque, nobis expedita enim veniam. Recusandae assumenda iure, aliquam sed illo vel nulla. Labore magnam id recusandae officia.
                </p>
            </div>
            <img src='https://www.bhphotovideo.com/images/images2500x2500/Lenovo_08763DU_IdeaPad_U260_12_5_Notebook_754802.jpg' alt="bannar" />
        </div>
    );
};

export default Home;