import React from "react";
import styled from "styled-components";

interface TableBodyProps {
  data: any[];
  SearchResults: string;
}

const TableBodyStyle = styled.tbody`
  td {
    font-size: 14px;
  }
`;

const TableBody: React.FC<TableBodyProps> = ({ data, SearchResults }) => {
  const SearchOnName = (input: string) => {
    const search = input
      .toLocaleLowerCase()
      .includes(SearchResults.toLocaleLowerCase());

    return search;
  };
  return (
    <TableBodyStyle>
      {data &&
        data.map(({ name, gender, company, email, id }) => {
          return SearchOnName(name) ? (
            <tr key={id}>
              <td>{name}</td>
              <td>{gender}</td>
              <td>{company}</td>
              <td>{email}</td>
            </tr>
          ) : null;
        })}
    </TableBodyStyle>
  );
};

export default TableBody;
