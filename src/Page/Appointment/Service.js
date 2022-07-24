import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ? slots[0] : <span className="text-red-500">No slots available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 0 ? "Spaces" : "Space"} available</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="Booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-secondary"
                    >Book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;