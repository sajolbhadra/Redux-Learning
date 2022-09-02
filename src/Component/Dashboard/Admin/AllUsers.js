import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../../../Features/Users/usersSlice';
import User from '../User/User';
import DeleteConfirmationModal from '../DeleteConfirmationModal';

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);
    const {users} = useSelector((state) => state.users);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className='my-10'>
            <h2 className="text-2xl text-center my-4">All Users: {users?.length}</h2>
            <div className="mx-2 lg:mx-10 overflow-auto">
                <table className="table w-full">
                    <thead className="text-black bg-gray-400">
                        <tr>
                            <th></th>
                            <th >Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody className='text-black'>
                        {
                            users?.map((user, index) =>
                                <User
                                    key={user._id}
                                    u={user}
                                    index={index}
                                    setDeletingUser={setDeletingUser}
                                ></User>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingUser && <DeleteConfirmationModal
                deletingUser={deletingUser}
                setDeletingUser={setDeletingUser}
                ></DeleteConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;