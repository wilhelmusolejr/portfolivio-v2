import React from "react";

export default function InterestItem({ interestName }) {
  return (
    <div className="bg-dark-gray border-light-white w-fit rounded-md border-1 p-3">
      {interestName}
    </div>
  );
}
