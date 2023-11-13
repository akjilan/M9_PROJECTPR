import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const details = useLoaderData();
  const { id, title, body } = details;
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(-1);
  };
  return (
    <div className="text-center border-red-300 p-5 m-20 py-20 border-2">
      <h2>id: {id}</h2>
      <h3>title:{title}</h3>
      <p>{body}</p>
      <div className="flex justify-center mt-2">
        <p className="text-center p-1 bg-purple-300 border-gray-100 shadow-lg outline-1 rounded w-24 ">
          <Link className="font-bold leading-4" to="/posts">
            Go back
          </Link>
        </p>
      </div>
      <p className="text-center p-1 bg-purple-300 border-gray-100 shadow-lg outline-1 rounded w-24 ">
        <button onClick={handleButton}>turn back</button>
      </p>
    </div>
  );
};

export default PostDetails;
