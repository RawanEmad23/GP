import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://youssifallam.pythonanywhere.com/api/userinfo/update/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Username: {userData.username}</p>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Phone Number: {userData.phone_number}</p>
      <img src={userData.profile_picture} alt="Profile Picture" />
    </div>
  );
};

export default ProfilePage;