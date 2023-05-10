import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateEmailAction, fetchName } from "./profileAction";

export default function Profile() {
  const { name, email, mobile } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const updateMobile = () => {
    dispatch({ type: "UPDATE_MOBILE", payload: 9887620007 });
  };

  const updateEmail = () => {
    dispatch(updateEmailAction("tayloramitverma@gmail.com"));
  };

  const updateName = () => {
    dispatch(fetchName());
  };

  return (
    <div>
      Hello Profile
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <button onClick={() => updateMobile()}>Update Mobile</button>
        <button onClick={() => updateEmail()}>Update Email</button>
        <button onClick={() => updateName()}>Update Name</button>
      </div>
    </div>
  );
}
