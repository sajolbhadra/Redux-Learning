import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../../../Features/Users/usersSlice';
// import DeleteConfirmationModal from '../DeleteConfirmationModal';
import User from '../User/User';
import DeleteConfirmationModal from '../DeleteConfirmationModal';

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);
    const { isLoading, users, error } = useSelector((state) => state.users);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h2 className="text-2xl text-center my-4">All Users: {users?.length}</h2>
            <div className="mx-10">
                <table className="table w-full ">
                    <thead className="text-black bg-gray-400">
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody className='text-black'>
                        {
                            users?.map((user, index) =>
                                <User
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    // refetch={refetch}
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