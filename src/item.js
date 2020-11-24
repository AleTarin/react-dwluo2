import React, { useMemo, useRef } from "react";

export default function HighLightedItem({ imageSrc, title, width }) {
  return (
    <figure
      role="figure"
      aria-label={title}
      style={{
          width,
        }}
      class="d-flex flex-column align-items-center text-center overflow-hidden"
    >
      <div
        style={{
          width,
          height: width
        }}
      >
        <div
          class="services-item"
          role="presentation"
          style={{
            backgroundImage: `url(${imageSrc})`
          }}
        />
      </div>
      <figcaption>{title}</figcaption>
    </figure>
  );
}
