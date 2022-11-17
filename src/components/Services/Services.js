import React from 'react';
import useServices from '../../Hooks/useServices';


const Services = () => {
    const [services] = useServices();
    return (
        <div>
            <h2 className='text-3xl'>Total Services</h2>
            {services?.length}
            {
                services.map(service => <li> {service.name} </li> )
            }
        </div>
    );
};

export default Services;