// Component UserList
import React from "react";
import UserItem from "./UserItem";
const UserList = () => {
  const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Mike", age: 28 },
  ];

  return (
    <div>
      <h1>User List</h1>
      {users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
      
    </div>
  );
};

export default UserList;
