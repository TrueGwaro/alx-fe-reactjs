import React from "react";

// Functional component that receives props
const UserProfile = (props) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", width: "250px", borderRadius: "8px", margin: "10px" }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;