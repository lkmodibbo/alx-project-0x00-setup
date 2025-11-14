import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8 rounded-lg">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      <div className="flex gap-4 mb-4">
        <Button title="Small Rounded" styles="text-sm rounded-sm" />
        <Button title="Medium Rounded" styles="text-base rounded-md" />
        <Button title="Large Rounded" styles="text-lg rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
