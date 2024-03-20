import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'slices/';
import { getUserRequest } from 'slices/users';

export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  return (
    <>
      <h1>Login Screen Here!</h1>

      <button
        className="bg-green-400 p-2 rounded text-center text-white"
        type="button"
        onClick={() => dispatch(getUserRequest('octocat'))}
      >
        Get User
      </button>
      {user.loading ? (
        'getting data...'
      ) : (
        <>
          <p>Name</p>
          <p>{user.user.name}</p>
        </>
      )}
    </>
  );
}
