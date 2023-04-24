import React, { useState } from "react";
import { Container, Divider, Modal } from "@mui/material";
import "./Gallery.css";

type GalleryProps = {
  images: string[];
};

export default function Gallery({ images }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("");

  const triggerModal = (src: string) => {
    setSource(src);
    setOpen(!open);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Container>
      <h1>Galerie</h1>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {images.map((image) => (
          <div
            style={{ margin: "20px", cursor: "pointer" }}
            onClick={() => triggerModal(image)}
          >
            <img width="512px" src={image} alt={image} />
          </div>
        ))}
        <Modal open={open} onClose={() => closeModal()}>
          <img className="modal" src={source} alt={source} width="65%" />
        </Modal>
      </div>
    </Container>
  );
}
