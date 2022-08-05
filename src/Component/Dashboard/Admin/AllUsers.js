import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import DeleteConfirmationModal from '../DeleteConfirmationModal';
import User from '../User';

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);
    const [users, setUsers] = useState([]);

    // const { data: users, isLoading, refetch } = useQuery('users', () =>
    //     fetch('http://localhost:5000/users', {
    //         method: 'GET',
    //         headers: {
    //             "content-type": "application/json",
    //             // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    // );

    useEffect(() => {
        const url = 'http://localhost:5000/users';
        fetch(url)
        .then(res=> res.json())
        .then(data => setUsers(data));
    },[]);
   


    return (
        <div>
            <h2 className="text-2xl text-center my-4">All Users: {users?.length}</h2>
            <div className="mx-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
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
            {/* {
                deletingUser && <DeleteConfirmationModal
                deletingUser={deletingUser}
                refetch={refetch}
                setDeletingUser={setDeletingUser}
                ></DeleteConfirmationModal>
            } */}
        </div>
    );
};

export default AllUsers;