import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'free', price: 0, benifits: [
                'Free  Features',
                'Fantastic deals',
                'Unlimited deals',
                'Localized deals',
                'Crazy deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benifits: [
                'Everything on Regular Revision',
                'Fantastic deals',
                'Unlimited deals',
                'Localized deals',
                'Crazy deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benifits: [
                'Lifetime support',
                'Fantastic deals',
                'Unlimited deals',
                'Localized deals',
                'Crazy deals'
            ]
        }
    ];
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best deals of the Town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus expedita quasi voluptate. Voluptates magni sed eius hic. Tempore commodi totam qui quos voluptates accusamus cum.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOption.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;