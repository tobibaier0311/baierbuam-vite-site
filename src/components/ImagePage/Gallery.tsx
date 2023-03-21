import React from "react";
import { Box } from "@mui/material";

interface GalleryProps {
  images: string[];
}

function Gallery({ images }: GalleryProps) {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      sx={{ gap: "10px" }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            boxShadow: "2px 2px 5px #888888",
            borderRadius: "5px",
          }}
        />
      ))}
    </Box>
  );
}

export default Gallery;
