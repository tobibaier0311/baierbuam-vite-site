import { Container, ImageList, ImageListItem } from "@mui/material";
import { images } from "../../data/images";

export function Images() {
  return (
    <Container>
      <h1>Galerie</h1>
      <ImageList cols={3} rowHeight={328}>
        {images.map((item) => (
          <ImageListItem key={item}>
            <img
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
