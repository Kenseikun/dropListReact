import { Checkbox } from "@material-ui/core";
import React, { useContext } from "react";
import RootContext from "../../context";
import "./Teams.scss";

const Teams = ({
  teamNumber,
  teamName,
  teamType,
  isSubTeamVisible,
  subTeams,
  subdivisionId,
}) => {
  const context = useContext(RootContext);
  const { toggleIsSubDivisionSubTeamVisible } = context;
  return (
    <li key={teamNumber}>
      <div className="subteam__wrapper">
        <div className="team__checkbox">
          {subTeams.length !== 0 ? (
            <Checkbox
              checked={isSubTeamVisible}
              onChange={() =>
                toggleIsSubDivisionSubTeamVisible(
                  "niezrzeszeni",
                  subdivisionId,
                  teamNumber
                )
              }
              defaultChecked
              indeterminate
              inputProps={{
                "aria-label": "indeterminate checkbox",
              }}
            />
          ) : null}
          <div className="teaminfo__wrapper">
            <h3>{teamName}</h3>
            <h4>{teamType}</h4>
          </div>
        </div>
      </div>

      {isSubTeamVisible ? (
        <ul>
          {subTeams.map((subTeam) => {
            const { subTeamNumber, subTeamType } = subTeam;
            return (
              <li key={subTeamNumber}>
                <div className="subteams__wrapper">
                  <p>Podzespół {subTeamNumber}</p>
                  <p>{subTeamType}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </li>
  );
};

export default Teams;
