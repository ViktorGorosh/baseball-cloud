import React from "react";
import {useDispatch} from "react-redux";
import {getCurrentProfile} from "state/ducks/profile";

const Profile = () => {
  const dispatch = useDispatch()
  dispatch(getCurrentProfile())

  return (
    <h2>Profile</h2>
  )
}

export default Profile
