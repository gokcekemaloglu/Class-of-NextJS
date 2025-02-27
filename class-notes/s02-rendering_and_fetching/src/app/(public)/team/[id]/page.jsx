import DetailCard from "@/components/DetailCard";
import { getUsersDetail } from "@/helpers/apiFunctions";
import React from "react";

const UserDetail = async ({ params }) => {
  const id = params.id;
  const person = await getUsersDetail(id);
  console.log(person);
  return (
    <div className="text-center">
      <h1 className="text-2xl">Team Person</h1>
      <DetailCard {...person} />
    </div>
  );
};

export default UserDetail;
