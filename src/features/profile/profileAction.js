import { createAction } from "@reduxjs/toolkit";

export const updateEmailAction = createAction("UPDATE_EMAIL");

export const fetchName = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await res.json();
    dispatch({
      type: "UPDATE_NAME",
      payload: result[Math.floor(Math.random() * 10)].name,
    });
  };
};
