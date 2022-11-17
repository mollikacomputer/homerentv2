import React from 'react';
import useServices from '../../Hooks/useServices';

const SingleService = () => {
    const [services] = useServices();
    console.log(services);
    return (
        <div>
            <h2> Service Details</h2>

            Service Name : {services?.name}
            Email Address : {services?.email}
            Address:{services?.address}
        </div>
    );
};

export default SingleService;