import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from './Service';

const SingleService = () => {
    const [services] = useServices();
    console.log(services);
    return (
        <div>
            <h2 className='text-3xl' > Service Details</h2>
            {services?.length}
            <br/>
            Service Name : {services?.name}<b/><br/>
            Email Address : {services?.email}
            Address:{services?.address};
            {
                services.map( service => <li> {service.email} </li>)
            }
  
        </div>
    );
};

export default SingleService;