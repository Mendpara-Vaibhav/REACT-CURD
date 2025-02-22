import { useState } from "react";

function UserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddUser({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
}
function UserList({ users, onDeleteUser, onUpdateUser }) {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {" "}
          {user.name} ({user.email})
          <button onClick={() => onDeleteUser(index)}>Delete</button>
          <button onClick={() => onUpdateUser(index, user)}>Edit</button>
        </li>
      ))}{" "}
    </ul>
  );
}
export { UserForm, UserList };
