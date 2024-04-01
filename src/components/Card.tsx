import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-2 shadow-lg rounded-lg my-4 mx-auto w-auto border-2">
      {children}
    </div>
  );
};

export default Card;
