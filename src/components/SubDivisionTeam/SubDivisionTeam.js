import { Checkbox } from "@material-ui/core";
import React, { useContext } from "react";
import RootContext from "../../context";
import Teams from "../Teams/Teams";
import "./SubDivisionTeam.scss";

const SubDivisionTeam = ({
  isSubDivisionTeamVisible,
  subdivisionName,
  teams,
  id,
}) => {
  const context = useContext(RootContext);
  const { toggleIsSubDivisionTeamVisible } = context;
  return (
    <>
      {" "}
      <li key={id}>
        <div className="subDivisionNameWrapper">
          <Checkbox
            checked={isSubDivisionTeamVisible}
            onChange={() => toggleIsSubDivisionTeamVisible("niezrzeszeni", id)}
            defaultChecked
            indeterminate
            inputProps={{
              "aria-label": "indeterminate checkbox",
            }}
          />
          <h4>{subdivisionName}</h4>
        </div>

        {isSubDivisionTeamVisible ? (
          <ul>
            {teams.map((team) => {
              return <Teams {...team} subdivisionId={id} />;
            })}
          </ul>
        ) : null}
      </li>
    </>
  );
};

export default SubDivisionTeam;
