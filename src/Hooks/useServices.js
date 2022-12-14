import { useEffect, useState } from "react"

const useServices = () =>{
 
    const [services, setServices] = useState([]);

    useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/users')
        fetch('ServiceData.JSON')
        .then((res)=>res.json())
        .then( data => setServices(data))
    },[]);
    return [services, setServices];
};
export default useServices;