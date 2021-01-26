import { Checkbox } from "@material-ui/core";
import React, { useContext } from "react";
import RootContext from "../../context";
import SubDivisionOne from "../SubDivisions/SubDivisions";

import "./TreeHeader.scss";

const TreeHeader = () => {
  const context = useContext(RootContext);
  const { dropListCheck, handleDropList } = context;

  return (
    <>
      <div className="header__wrapper">
        <Checkbox
          checked={dropListCheck}
          onChange={handleDropList}
          defaultChecked
          indeterminate
          inputProps={{ "aria-label": "indeterminate checkbox" }}
        ></Checkbox>
        <h1>Nagłówek drzewa wielowierszowego</h1>
      </div>

      <div className="line__wrapper">
        <div className="header__line"></div>
        <div className="line__elements--wrapper">
          {dropListCheck ? <SubDivisionOne /> : null}

          <h2>Niezrzeszeni</h2>
        </div>
      </div>
    </>
  );
};

export default TreeHeader;
