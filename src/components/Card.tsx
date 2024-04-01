import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 shadow-lg rounded-lg my-4 mx-auto w-[700px] border-2">
      {children}
    </div>
  );
};

export default Card;
