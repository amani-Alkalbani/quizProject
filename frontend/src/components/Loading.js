import React from "react";
import { Spinner } from "react-bootstrap";

function Loading({ size = 50 }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        
      }}
    >
      <Spinner color="success"
        style={{
          width: size,
          height: size,
        
        }}
        animation="border"
      />
        <span>
    {' '}Loading
  </span>
    </div>
  );
}

export default Loading;