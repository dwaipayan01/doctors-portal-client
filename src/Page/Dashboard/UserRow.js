import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {
    const { email, role } = user;
    const handleAdmin = () => {
        fetch(`https://young-chamber-59578.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin");
                }
                return res.json()
            })
            .then(data => {

                if (data.modifiedCount > 0) {
                    toast.success("Successfully make a admin")
                }
            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== "admin" && <button onClick={handleAdmin} class="btn btn-xs">Add admin</button>}</td>
            <td><button class="btn btn-xs">Remove user</button></td>
        </tr>
    );
};

export default UserRow;