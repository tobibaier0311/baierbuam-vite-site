import React, { useState } from "react";
import { IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      {images.map((image, index) => (
        <div
          style={{ margin: "20px", cursor: "pointer" }}
          onClick={() => triggerModal(image)}
        >
          <img width="512px" src={image} alt={image} loading="lazy" />
        </div>
      ))}
      <Modal open={open}>
        <div className="modal">
          <img src={source} alt={source} />
          <IconButton onClick={() => closeModal()}>
            <CloseIcon />
          </IconButton>
        </div>
      </Modal>
    </div>
  );
}
