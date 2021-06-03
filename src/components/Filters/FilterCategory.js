import React from "react";

import styled from "styled-components";
import Button from "../commons/Button";
const FilterCategoryStyles = styled.div`
  .filters {
    text-align: center;
    margin: 5px 0 35px 0;
  }

  .filter-type {
    display: inline-block;
    border-bottom: 2px solid #c4bdbb;
    width: 75%;
    margin: 0 0 15px 0;
    padding-bottom: 4px;
    font-size: 25px;
    font-weight: 500;
  }

  .filter-values {
    display: grid;
    grid-template-columns: minmax(25%, auto) minmax(25%, auto);
    justify-content: space-between;
    padding: 0 25px;
    grid-gap: 25px;
  }

  @media screen and (min-width: 701px) {
    .filters {
      margin: 5px 0 25px 0;
    }
    .filter-type {
      font-size: 18px;
    }
    .filter-values {
      padding: 0 20px;
      grid-gap: 15px;
    }
  }
`;

const FilterCategory = (props) => {
  const onFilterChange = (value) => {
    props.onFilterApply(props.filerType, value);
  };

  const filterItems = props.filterValues.map((filter) => (
    <Button
      value={filter}
      key={filter}
      isActive={filter === props.activeItem}
      onClick={onFilterChange}
    />
  ));

  return (
    <FilterCategoryStyles>
      <h3 className="filter-type">{props.filterDisplayName}</h3>
      <div className="filter-values">{filterItems}</div>
    </FilterCategoryStyles>
  );
};

export default FilterCategory;
