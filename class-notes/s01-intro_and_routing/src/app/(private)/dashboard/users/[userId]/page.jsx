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

//* Return a list of 'params' to populate

export async function generateStaticParams() {
    const userArr = [1, 2, 3, 4]
    return userArr.map((userId) => ({
        userId: userId.toString()
    }))
}