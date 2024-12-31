import GoBack from "@/components/GoBack";
import React from "react";

const UserDetail = ({ params }) => {
  const { userId } = params;
  return (
    <div>
      <h1>User Detail</h1>
      <p>User ID: {userId}</p>
      <GoBack />
    </div>
  );
};

export default UserDetail;
