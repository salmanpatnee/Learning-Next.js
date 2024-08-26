import React from "react";
import { sort } from "fast-sort";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

  // To disable cache

  /*
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    cache: "no-cache",
  });
  */

  // Fetch fresh data after 10 seconds
  // Otherwise from the cache
  /*
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    next: {revalidate: 10},
  });
  */

  const users: User[] = await response.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
