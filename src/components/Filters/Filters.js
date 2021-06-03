import React from "react";
import FilterCategory from "./FilterCategory";
import styled from "styled-components";

const FiltersStyles = styled.div`
  background: white;
  border-radius: 8px;
  padding: 10px 10px 40px 10px;
  align-self: start;

  h2 {
    font-size: 30px;
  }

  @media screen and (min-width: 701px) {
    padding: 10px 0px 40px 0px;
    font-size: 8px;

    h2 {
      padding: 0 10px;
      font-size: 22px;
    }
  }
`;

const Filters = (props) => {
  const filterCategories = props.filterData.map((category) => (
    <FilterCategory
      filterValues={category.data}
      filerType={category.type}
      key={category.type}
      filterDisplayName={category.displayName}
      activeItem={category.activeItem}
      onFilterApply={props.onFilterApply}
    />
  ));

  return (
    <FiltersStyles>
      <h2>Filters</h2>
      {filterCategories}
    </FiltersStyles>
  );
};

export default Filters;
