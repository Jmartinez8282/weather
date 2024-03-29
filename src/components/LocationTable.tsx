import React, { FC } from "react";

interface LocationTableProps {
  locations: string[];
}

export const LocationTable: FC<LocationTableProps> = ({ locations }) => {
  return (
    <div>
      <h2>Location</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <tr key={index}>
              <td>{location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
