import React, { useState } from "react";
// import { setLocalStorage } from "../../utils/localStorage";

const Header = (props) => {
  // Get stored user safely
  let storedUser = null;

  try {
    const userData = localStorage.getItem("loggedInUser");
    if (userData && userData !== "") {
      storedUser = JSON.parse(userData);
    }
  } catch (error) {
    console.error("Error parsing loggedInUser:", error);
  }

  // Determine username based on role
  const username =
    storedUser?.role === "admin"
      ? "Admin"
      : storedUser?.data?.firstname || "Employee";

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{username}👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
