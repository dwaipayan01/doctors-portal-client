import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    const takenDate = format(date, "PP");
    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot, treatment.name, treatment._id);

        const booking = {
            name: treatment.name,
            date: takenDate,
            slot,
            patient: user.displayName,
            patientEmail: user.email,
            phone: event.target.phone.value

        }
        fetch('https://young-chamber-59578.herokuapp.com/booking', {
            method: 'POST',
            body: JSON.stringify(
                booking
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Your appointment is set, ${takenDate} ${slot}`)
                }
                else {
                    toast.error(`You already have an appointment on,${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                setTreatment(null);
            })




    }
    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">You are booking: {treatment.name}</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 mt-3 justify-items-center">
                        <input type="text" disabled value={format(date, "PP")} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                treatment.slots.map((slot, index) => <option value={slot} key={index}>{slot}</option>)
                            }

                        </select>

                        <input type="text" name="name" disabled value={user?.displayName || " "} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || " "} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Type phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;