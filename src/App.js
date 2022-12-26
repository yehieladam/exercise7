import React, { useState, useEffect } from 'react';

function UserTable() {
// Initialize the state variables for the user data and loading state
const [users, setUsers] = useState([]);
const [isLoading, setIsLoading] = useState(false);

// Initialize the state variable for the form inputs
const [formState, setFormState] = useState({ name: '', email: '' });

// Function to handle form input changes
function handleInputChange(event) {
const { name, value } = event.target;
setFormState({ ...formState, [name]: value });
}

// Function to add a new user to the users array
function addUser() {
setUsers([...users, formState]);
// Reset the form inputs
setFormState({ name: '', email: '' });
}

// Use the useEffect hook to fetch the user data when the component mounts
useEffect(() => {
  // Set the loading state to true
  setIsLoading(true);
  // Fetch the user data from the endpoint
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      // Update the users state variable with the user data
      setUsers(data);
      // Set the loading state to false
      setIsLoading(false);
    });
}, []);


return (
<div>
<form>
<label htmlFor="name">Name:</label>
<input
       type="text"
       id="name"
       name="name"
       value={formState.name}
       onChange={handleInputChange}
     />
<label htmlFor="email">Email:</label>
<input
       type="text"
       id="email"
       name="email"
       value={formState.email}
       onChange={handleInputChange}
     />
<button onClick={addUser}>Add User</button>
</form>
{isLoading ? (
    <p>Loading...</p>
  ) : (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>
);
}export default UserTable;
