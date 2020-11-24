import React, { useMemo, useRef } from "react";

export default function HighLightedItem({ imageSrc, title, width, spacing }) {
  console.log(width);
  return (
    <figure
      role="figure"
      aria-label={title}
      class="d-flex flex-column align-items-center text-center overflow-hidden"
    >
      <div
        class="services-item"
        role="presentation"
        style={{
          backgroundImage: `url(${imageSrc})`,
          width,
          height: width
        }}
      />
      <figcaption>{title}</figcaption>
    </figure>
  );
}
