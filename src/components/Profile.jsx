import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Profile = () => {
  const { token, navigate } = useContext(ShopContext);

  if (!token) {
    navigate("/login");
    return null;
  }

  return (
    <div className="py-10 max-padd-container">
      <h1 className="mb-6 text-2xl font-semibold">My Profile</h1>

      <div className="p-6 bg-white rounded-lg shadow-md ring-1 ring-slate-900/5">
        <p><strong>Name:</strong> User</p>
        <p><strong>Email:</strong> user@email.com</p>
      </div>
    </div>
  );
};

export default Profile;