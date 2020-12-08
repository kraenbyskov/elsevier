import React, { useState } from "react";
import styled from "styled-components";
import data from "./assets/generated.json";
import SortData from "./components/SortData";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";

const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  color: #353535;
  td,
  th {
    border: 2px solid white;
    text-align: left;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #f9f8f9;
  }
`;

const Input = styled.input`
  margin: 8px 0px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #353535;
  &:focus {
    outline: none !important;
    border: 1px solid #78b5e5;
  }
`;

function App() {
  const { items, requestSort, SortBy } = SortData(data);
  const [SearchResults, setSearchResults] = useState<string>("");

  const GetSearchResults = (input: any) => {
    var delayInMilliseconds = 1000;
    setTimeout(function () {
      setSearchResults(input);
    }, delayInMilliseconds);
  };

  return (
    <div className="App">
      <Input
        placeholder={"Search table..."}
        onChange={(e) => GetSearchResults(e.target.value)}
      />
      <Table>
        <TableHead requestSort={requestSort} SortBy={SortBy} />
        <TableBody data={items} SearchResults={SearchResults} />
      </Table>
    </div>
  );
}

export default App;
