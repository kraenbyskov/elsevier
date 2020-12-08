import React, { useState } from "react";

interface SortDataProps {
  key: string;
  direction: string;
}

const SortData = (items: any) => {
  const [SortBy, setSortBy] = useState<SortDataProps>({
    key: "",
    direction: "",
  });

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (SortBy !== null) {
      sortableItems.sort((a, b) => {
        if (a[SortBy.key] < b[SortBy.key]) {
          return SortBy.direction === "ascending" ? -1 : 1;
        }
        if (a[SortBy.key] > b[SortBy.key]) {
          return SortBy.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, SortBy]);

  const requestSort = (key: string) => {
    let direction = "ascending";
    if (SortBy && SortBy.key === key && SortBy.direction === "ascending") {
      direction = "descending";
    }
    setSortBy({ key, direction });
  };

  return { items: sortedItems, requestSort, SortBy };
};

export default SortData;
