import React, { useState } from "react";
import Heading from "../../components/Heading";
import EditPlacement from "./Placement/EditPlacement";
import AddPlacement from "./Placement/AddPlacement";

const Placement = () => {
  const [selected, setSelected] = useState("add");

  return (
    <div className="w-full mx-auto mt-10 flex justify-center items-start flex-col mb-10">
      <div className="flex justify-between items-center w-full">
        <Heading title="Placement Details" />
        <div className="flex justify-end items-center w-full">
          <button
            className={`${
              selected === "add" && "border-b-2 "
            }border-blue-500 px-4 py-2 text-black rounded-sm mr-6`}
            onClick={() => setSelected("add")}
          >
            Add Placement
          </button>
          <button
            className={`${
              selected === "edit" && "border-b-2 "
            }border-blue-500 px-4 py-2 text-black rounded-sm`}
            onClick={() => setSelected("edit")}
          >
            Edit Placement
          </button>
        </div>
      </div>
      {selected === "add" && <AddPlacement />}
      {selected === "edit" && <EditPlacement />}
    </div>
  );
};

export default Placement;
