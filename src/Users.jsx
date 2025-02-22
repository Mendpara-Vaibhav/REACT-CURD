import { useState } from "react";
import { UserForm, UserList } from "./UserComponents";
import UserEditForm from "./UserEditForm";

function Users() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };
  const handleDeleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };
  const handleUpdateUser = (index, user) => {
    setEditUser(user);
    setUsers(users.filter((_, i) => i !== index));
  };
  const handleCancelUpdate = () => {
    setEditUser(null);
  };
  const handleSaveUpdate = (user) => {
    setUsers([...users, user]);
    setEditUser(null);
  };
  return (
    <div>
      <h1>Users</h1>
      {editUser ? (
        <UserEditForm
          user={editUser}
          onUpdateUser={handleSaveUpdate}
          onCancel={handleCancelUpdate}
        />
      ) : (
        <UserForm onAddUser={handleAddUser} />
      )}
      <UserList
        users={users}
        onDeleteUser={handleDeleteUser}
        onUpdateUser={handleUpdateUser}
      />
    </div>
  );
}
export default Users;
