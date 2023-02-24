import React from "react";
import { Container, ImageList, ImageListItem } from "@mui/material";

const itemData = [
  {
    img: "src/assets/IMG_0436.JPG",
  },
  {
    img: "src/assets/IMG_0439.JPG",
  },
  {
    img: "src/assets/IMG_0440.JPG",
  },
  {
    img: "src/assets/IMG_0441.JPG",
  },
  {
    img: "src/assets/IMG_0458.JPG",
  },
  {
    img: "src/assets/IMG_0459.JPG",
  },
  {
    img: "src/assets/IMG_0460.JPG",
  },
  {
    img: "src/assets/IMG_0463.JPG",
  },
  {
    img: "src/assets/IMG_0464.JPG",
  },
  {
    img: "src/assets/IMG_0465.JPG",
  },
  {
    img: "src/assets/IMG_0466.JPG",
  },
  {
    img: "src/assets/IMG_0467.JPG",
  },
  {
    img: "src/assets/IMG-20230217-WA0004.jpg",
  },
  {
    img: "src/assets/IMG-20230217-WA0007.jpg",
  },
  {
    img: "src/assets/IMG-20230217-WA0013.jpg",
  }
]

export function Images() {
  return (<Container sx={{width: "65vw"}}>
    <ImageList cols={3} rowHeight={328}>
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList></Container>
  )
}
