import React, { Suspense } from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

const usersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Users</h1>

      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default usersPage;
