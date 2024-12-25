import React from "react";

const RoleList = ({ roles }) => (
  <div className="hidden md:w-1/3 md:flex flex-col items-end md:pr-20 mt-4 md:pt-60">
    <p className="font-overpass md:text-sm lg:text-lg flex flex-col gap-1">
      {roles.map((role, index) => (
        <span key={index} className="bg-navy text-offwhite p-1 rounded-sm">
          {role}
        </span>
      ))}
    </p>
  </div>
);

export default RoleList;
