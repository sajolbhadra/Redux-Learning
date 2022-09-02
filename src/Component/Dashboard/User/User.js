import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase/firebase.init";

const User = ({ u, index, setDeletingUser }) => {
  const [user] = useAuthState(auth);

  const email = {
    email: user?.email,
  };

  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${u.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(email),
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast("Admin Selected!!");
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{u.email}</td>
      <td>
        {u.role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <label
          onClick={() => setDeletingUser(user)}
          htmlFor="delete-confirm-modal"
          className="btn btn-xs modal-button"
        >
          Remove User
        </label>
      </td>
    </tr>
  );
};

export default User;
