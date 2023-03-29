import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

type GalleryProps = {
  images: string[];
};

export default function Gallery({ images }: GalleryProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      {images.map((image, index) => (
        <div style={{ margin: "20px" }}>
          <img src={image} alt={image} />
        </div>
      ))}
    </div>
  );
}
