import React from "react";
import styled from "styled-components";

const TableHeadStyle = styled.thead`
  background: #ececec;
  th {
    padding: 12px 8px;
    &:hover {
      cursor: pointer;
      background: #e6e6e6;
    }
    i {
      float: right;
      font-size: 12px;
      color: #a7a7a7;
    }
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0px;
  font-size: 14px;
  &::first-letter {
    text-transform: uppercase;
  }
`;

interface TableHeadProps {
  requestSort: (key: any) => void;
  SortBy: null | any;
}

const TableHead: React.FC<TableHeadProps> = ({ requestSort, SortBy }) => {
  const categories = ["name", "gender", "company", "email"];

  return (
    <TableHeadStyle>
      <tr>
        {categories.map((data) => (
          <th onClick={() => requestSort(data)}>
            <Content>
              <Title>{data}</Title>
              <i
                className={`fas ${
                  SortBy && SortBy.key === data
                    ? SortBy.direction === "ascending"
                      ? "fa-caret-down"
                      : "fa-sort-up"
                    : "fa-sort"
                }`}
              ></i>
            </Content>
          </th>
        ))}
      </tr>
    </TableHeadStyle>
  );
};

export default TableHead;
