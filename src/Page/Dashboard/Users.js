import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';



const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://young-chamber-59578.herokuapp.com/user", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    return (
        <div>
            <h1 className="text-4xl text-center">All user :{users?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow user={user}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;