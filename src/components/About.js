import React from 'react';
import useServices from '../Hooks/useServices';

const About = () => {
    const [services, setServices] = useServices();
    return (
        <div>
            <h2 className='text-3xl' > About page</h2>
            {
                services.map(service => <li> {service.name} </li>)
            }
        </div>
    );
};

export default About;