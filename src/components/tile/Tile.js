import React from "react";
export const Tile = ({name,description}) => {
  return (
    <div className="tile-container">

      <p className="tile-title">{name}</p>
      {/* conditional approach to check descrition avilable
      then maping over each item and listing values */}
      {description && 
      Object.values(description).map((value , index)=>
      <p key={index} className="title" >{value}</p>
       )}
      
    </div>
  );
};
export default Tile;
