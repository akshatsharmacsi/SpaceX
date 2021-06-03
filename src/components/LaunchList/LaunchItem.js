import React from "react";
import Figure from "../commons/Figure";
import ProgramInfo from "./ProgramInfo";
import styled from "styled-components";

const LaunchItemStyles = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  font-weight: 500;

  .launch-name {
    color: #474f98;
    margin: 15px 0;
    font-size: 22px;
  }

  @media screen and (min-width: 701px) {
    padding: 20px;

    .launch-name {
      font-size: 18px;
    }
  }
`;

const LaunchItem = React.forwardRef((props, ref) => {
  return (
    <LaunchItemStyles>
      <Figure source={props.mission_patch_small} name={props.mission_name} />
      <p ref={ref} className="launch-name">
        {props.mission_name} #{props.flight_number}
      </p>
      <ProgramInfo value={props.mission_id} label="Mission Ids" />
      <ProgramInfo value={props.launch_year} label="Launch Year" />
      <ProgramInfo value={props.launch_success} label="Successful Launch" />
      <ProgramInfo value={props.landing_success} label="Successful Landing" />
    </LaunchItemStyles>
  );
});

export default LaunchItem;
