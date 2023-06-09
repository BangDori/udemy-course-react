import React from "react";

import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = ({ users }) => (
  <Card className={classes.users}>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  </Card>
);

export default UserList;
