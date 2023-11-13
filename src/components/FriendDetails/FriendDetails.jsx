import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const data = useLoaderData();
  const { name, email, phone, website } = data;
  return (
    <div className=" text-center border-2 border-sky-400 p-5 shadow-md font-bold">
      <h1 className="text-center">person details</h1>
      <h3>name: {name}</h3>
      <h3>email: {email}</h3>
      <h3>phone: {phone}</h3>
      <h4>website:{website}</h4>
     <div className="flex justify-center mt-2">
     <p className="text-center p-1 bg-purple-300 border-gray-100 shadow-lg outline-1 rounded w-24 ">
        <Link className="font-bold leading-4" to="/friends">
          Go back
        </Link>
      </p>
     </div>
    
    </div>
  );
};

export default FriendDetails;
