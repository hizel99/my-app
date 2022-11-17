import React from "react";


const UserTable = ({users}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
        users.length>0?
        users?.map((user) => (
          <tr key={users.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        )):(
            <td colSpan={3}>No users</td>
        )
    }
      </tbody>
    </table>
  );
};

export default UserTable;
