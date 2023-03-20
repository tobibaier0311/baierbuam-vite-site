import { Container, ImageList, ImageListItem } from "@mui/material";
import Bild1 from "../../assets/1.jpg";
import Bild2 from "../../assets/2.jpg";
import Bild3 from "../../assets/3.jpg";
import Bild4 from "../../assets/4.jpg";
import Bild5 from "../../assets/5.jpg";
import Bild6 from "../../assets/6.jpg";
import Bild7 from "../../assets/7.jpg";
import Bild8 from "../../assets/8.jpg";
import Bild9 from "../../assets/9.jpg";
import Bild10 from "../../assets/10.jpg";
import Bild11 from "../../assets/11.jpg";
import Bild12 from "../../assets/12.jpg";

const itemData = [
  Bild1,
  Bild2,
  Bild3,
  Bild4,
  Bild5,
  Bild6,
  Bild7,
  Bild8,
  Bild9,
  Bild10,
  Bild11,
  Bild12,
];

export function Images() {
  return (
    <Container>
      <h1>Galerie 📷</h1>
      <ImageList cols={3} rowHeight={328}>
        {itemData.map((item) => (
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
