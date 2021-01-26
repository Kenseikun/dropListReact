import React, { useContext } from "react";
import RootContext from "../../context";
import SubDivisionTeam from "../SubDivisionTeam/SubDivisionTeam";
import "./SubDivisions.scss";

const SubDivisions = () => {
  const context = useContext(RootContext);
  const { divisionList } = context;

  return (
    <>
      <ul>
        {divisionList[0].subdivisions.map((subdivision) => {
          return <SubDivisionTeam {...subdivision} />;
        })}
      </ul>
    </>
  );
};

export default SubDivisions;
