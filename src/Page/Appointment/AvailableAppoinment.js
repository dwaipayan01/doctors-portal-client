import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("Service.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <h4 className="text-center text-secondary font-bold">Available Services on {format(date, "PP")}</h4>
            <p className="text-center">Please select a service.</p>
        </div>
    );
};

export default AvailableAppoinment;