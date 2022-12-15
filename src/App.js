import React, { useState, useEffect } from 'react';

function UserTable() {
  // Initialize the state variables for the user data and loading state
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
}

export default UserTable;
