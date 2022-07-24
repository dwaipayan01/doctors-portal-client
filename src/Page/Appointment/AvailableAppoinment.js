
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Loading/Loading';
import {
    useQuery,

} from 'react-query';


const AvailableAppoinment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, "PP");
    const { data: services, isLoading, refetch } = useQuery(["available", formatedDate], () => fetch(`https://young-chamber-59578.herokuapp.com/available?date=${formatedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`https://young-chamber-59578.herokuapp.com/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, []);
    return (
        <div>
            <h4 className="text-center text-secondary font-bold mt-[100px]">Available Services on {format(date, "PP")}</h4>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                {
                    services?.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;