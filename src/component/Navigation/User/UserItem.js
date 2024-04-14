// Component UserItem
import React from "react";
const UserItem = (props) => {
  const { name, age } = props.user;

  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};
export default UserItem;
