import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benifits/Benefit';

const PricingOption = (props) => {
    const { name, price, benifits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h1 className='bg-indigo-300 py-4  text-xl rounded-lg'>{name}</h1>
            <p>
                <span className='text-bold text-6xl'> {price}</span>
                <span className='text-xl text-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left my-2'>Benifits:</h3>
                {
                    benifits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <button className='bg-green-500 text-bold flex justify-center w-full py-2 rounded mt-6 hover:bg-indigo-300 '>
                Buy Now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
            </button>

        </div>
    );
};

export default PricingOption;