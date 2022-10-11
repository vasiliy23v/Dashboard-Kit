import React from "react";
interface Description {
  h2: string;
  h3: string;
}
const Description = ({ h2, h3 }: Description)  => {
  return (
    <div className="descr">
      <h2>{h2}</h2>
      <h3>{h3}</h3>
    </div>
  );
};

export default Description;
