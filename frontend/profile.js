import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get(`/users/${id}`).then(res => setUser(res.data));
  }, [id]);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{user.username}'s Profile</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
