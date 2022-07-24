import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Appointment from '../Appointment/Appointment';

const MyAppointment = () => {
    const [appoitment, setAppointment] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://young-chamber-59578.herokuapp.com/booking?patientEmail=${user.email}`, {
                method: "GET",
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        navigate("/login");

                    }
                    return res.json()
                })
                .then(data => {

                    setAppointment(data)
                });
        }
    }, [user])
    return (
        <div>
            <h1>This is all items :{appoitment.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Tretment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoitment.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.patient}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.name}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;