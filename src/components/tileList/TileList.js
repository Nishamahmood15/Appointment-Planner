import React from "react";
import Tile from "../tile/Tile"
export const TileList = ({data}) => {
  return (
    <div>
      {/* mapping over the tile components objects */}
     { data.map((item, index) =>(
        <Tile key={index} name={item.name} description={item.description} />
      ))}
      {/* assuming that each item in the array has name and description */}
    </div>
  );
};
