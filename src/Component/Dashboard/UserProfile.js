import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';

const UserProfile = ({ reload }) => {
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/userInfo/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data);
                reload();
            })
    }, [user, reload]);


    return (
        <div>
            <div className="card card-compact w-100 navStyle  mx-2  mt-8">
                <div className="card-body ">
                    <div className="flex justify-between">
                        <h2 className=" text-3xl font-bold">Details</h2>
                        <label for="my-modal-3" className="btn btn-sm rounded-none">edit</label>
                    </div>
                    <hr />
                    {/* TABLE */}


                    <table class="border-collapse border border-none ...  ">

                        <tbody className=''>
                            <tr className=''>
                                <td class=" text-xl font-normal">Name : </td>
                                <td class=" text-xl font-normal">{user.displayName}</td>
                            </tr>
                            <tr>
                                <td class=" text-xl font-normal">Email : </td>
                                <td class=" text-xl font-normal">{user.email}</td>
                            </tr>
                            <tr>
                                <td class=" text-xl font-normal">Date of Birth : </td>
                                <td class=" text-xl font-normal">{userInfo.birthDate}</td>
                            </tr>
                            <tr>
                                <td class=" text-xl font-normal">Address : </td>
                                <td class=" text-xl font-normal">{userInfo.address}</td>
                            </tr>
                            <tr>
                                <td class=" text-xl font-normal">Phone Number : </td>
                                <td class=" text-xl font-normal">{userInfo.phone}</td>
                            </tr>
                            <tr>
                                <td class=" text-xl font-normal">LinkedIn : </td>
                                <td class=" text-xl font-normal">
                                    <a target="_blank" rel='noreferrer' href={userInfo.profileLink}>{userInfo.profileLink}</a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    {/* TABLE */}




                </div>
            </div>
        </div>
    );
};

export default UserProfile;