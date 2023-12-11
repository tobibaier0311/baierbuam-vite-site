import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
} from "@mui/material";
import "./GigsCard.css";
import { ExpandLess, ExpandMore, MoreVert } from "@mui/icons-material";
import { useState } from "react";

type GigCardProps = {
  date: string;
  title: string;
  location: string;
  description?: string;
  id?: number;
};

export const GigCard = ({
  date,
  title,
  location,
  description,
  id,
}: GigCardProps) => {
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore(!more);
  };

  return (
    <Card variant="outlined" className="card">
      <CardHeader
        sx={description ? { cursor: "pointer" } : null}
        onClick={description && (() => handleMore())}
        action={
          description && (
            <IconButton onClick={() => handleMore()}>
              {more ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          )
        }
        title={title}
        subheader={`${date}, ${location}`}
      />

      {description && (
        <>
          <Collapse in={more}>
            <Divider />
            <CardContent>{description}</CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
};
