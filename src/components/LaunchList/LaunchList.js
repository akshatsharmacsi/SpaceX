import React from "react";
import LaunchItem from "./LaunchItem";

import styled from "styled-components";
const LaunchListStyles = styled.div`
  display: grid;
  grid-gap: 25px;

  @media screen and (min-width: 1024px) {
    grid-gap: 10px;
    grid-template-columns: repeat(4, calc(25% - 7.5px));
  }

  @media screen and (min-width: 701px) and (max-width: 1023px) {
    grid-gap: 10px;
    grid-template-columns: repeat(2, calc(50% - 5px));
  }
`;

function LauchList(props) {
  let launchItems;
  if (props.launchData && props.launchData.length) {
    launchItems = props.launchData.map((data, i) => {
      return (
        <LaunchItem
          flight_number={data.flight_number}
          key={data.flight_number}
          landing_success={data.landing_success}
          launch_success={data.launch_success}
          launch_year={data.launch_year}
          mission_id={data.mission_id}
          mission_name={data.mission_name}
          mission_patch_small={data.mission_patch_small}
        />
      );
    });
  } else {
    launchItems = (
      <div className="no-data">
        <h2>No data found</h2>
      </div>
    );
  }

  return <LaunchListStyles>{launchItems}</LaunchListStyles>;
}

export default LauchList;
