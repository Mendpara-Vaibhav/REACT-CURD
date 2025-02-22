import { useState } from "react";
import "./App.css";

function App() {
  const [arrList, setArrList] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex === null) {
      setArrList([...arrList, { firstName, lastName }]);
    } else {
      const updatedList = [...arrList];
      updatedList[editIndex] = { firstName, lastName };
      setArrList(updatedList);
      setEditIndex(null);
    }

    setLastName("");
    setFirstName("");
  };

  const handleDelete = (index) => {
    if (confirm("Are you sure you want to delete")) {
      setArrList(arrList.filter((v, i) => i !== index));
    }
  };

  const handleEdit = (index) => {
    setFirstName(arrList[index].firstName);
    setLastName(arrList[index].lastName);
    setEditIndex(index);
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
        </label>
        <br />
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Btn</th>
          </tr>
        </thead>
        <tbody id="tableBody">
          {arrList.map((element, index) => (
            <tr key={index}>
              <td>{element.firstName}</td>
              <td>{element.lastName}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
