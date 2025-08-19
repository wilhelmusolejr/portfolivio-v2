import React from "react";

export default function InterestItem({ interestName }) {
  return (
    <div className="border-light-white w-fit rounded-md border-1 bg-white/5 p-3">
      {interestName}
    </div>
  );
}
