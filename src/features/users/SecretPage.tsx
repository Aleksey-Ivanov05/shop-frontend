import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectUser } from './usersSlice';
import { Navigate } from 'react-router-dom';
import { secret } from './usersThunks';

const SecretPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(secret);
  });

  if (!user) {
    return <Navigate to="/login"/>
  }
  return (
    <div>
      Secret page
    </div>
  );
};

export default SecretPage;