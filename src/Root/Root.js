import React, { useState } from "react";
import "./Root.scss";
import jsonData from "../data/jsonData.json";
import RootContext from "../context";
import TreeHeader from "../components/TreeHeader/TreeHeader";

const Root = () => {
  const [divisionList, setDivisionList] = useState([...jsonData]);
  const [dropListCheck, setDropListChecked] = useState(true);

  const handleDropList = (event) => {
    setDropListChecked(event.target.checked);
  };

  const toggleIsSubDivisionTeamVisible = (divisionName, subdivisionId) => {
    const mappedDivisionList = divisionList.map((division) => {
      if (division.listName === divisionName) {
        division.subdivisions = division.subdivisions.map((subDivision) => {
          if (subDivision.id === subdivisionId) {
            subDivision.isSubDivisionTeamVisible = !subDivision.isSubDivisionTeamVisible;
          }
          return subDivision;
        });
      }
      return division;
    });

    setDivisionList([...mappedDivisionList]);
  };

  const toggleIsSubDivisionSubTeamVisible = (
    divisionName,
    subdivisionId,
    teamNumber
  ) => {
    const newArray = divisionList.map((division) => {
      if (division.listName === divisionName) {
        division.subdivisions = division.subdivisions.map((subDivision) => {
          if (subDivision.id === subdivisionId) {
            subDivision.teams = subDivision.teams.map((team) => {
              if (team.teamNumber === teamNumber) {
                team.isSubTeamVisible = !team.isSubTeamVisible;
              }
              return team;
            });
          }
          return subDivision;
        });
      }
      return division;
    });

    setDivisionList([...newArray]);
  };

  return (
    <>
      <RootContext.Provider
        value={{
          dropListCheck,
          handleDropList,
          toggleIsSubDivisionTeamVisible,
          toggleIsSubDivisionSubTeamVisible,
          divisionList,
        }}
      >
        <TreeHeader />
      </RootContext.Provider>
    </>
  );
};

export default Root;
