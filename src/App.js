import React, { useMemo, useRef } from "react";
import "./style.scss";
import items from "./items";
import HighLightedItem from "./item";
import { chunkArray, useWidth } from "./utilities";

import { Container, Row } from "react-bootstrap";

const GRID = {
  MOBILE: [[3], [2, 2], [3, 2], [3, 3], [2, 3, 2], [3, 3, 2], [3, 3, 3]],
  DESKTOP: [[3], [4], [5], [3, 3], [4, 3], [4, 4], [5, 4]]
};

const MAX_ITEMS_ROW = {
  MOBILE: 3,
  DESKTOP: 5
};
const ITEMS_SPACING = {
  MOBILE: 16,
  DESKTOP: 32
};

const displayedItems = 9;
const deviceType = "DESKTOP";

export default function App() {
  const containerRef = useRef(null);
  const [width] = useWidth(containerRef);
  const itemsWidth =
    width / MAX_ITEMS_ROW[deviceType] - ITEMS_SPACING[deviceType];

  const imageGrid = useMemo(() => {
    return chunkArray(
      items.slice(0, displayedItems),
      GRID[deviceType][displayedItems - 3]
    );
  }, []);
  return (
    <div ref={containerRef}>
      {imageGrid.map((serviceRow, indexRow) => {
        return (
          <Row
            key={indexRow}
            className={[
              `service-row-${indexRow}`,
              "d-flex",
              "align-content-center",
              "justify-content-center"
            ].join(" ")}
          >
            {serviceRow.map((serviceItem, indexItem) => (
              <HighLightedItem
                width={itemsWidth}
                key={`${indexRow}-${indexItem}`}
                {...serviceItem}
              />
            ))}
          </Row>
        );
      })}
    </div>
  );
}
