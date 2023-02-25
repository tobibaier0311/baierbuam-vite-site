import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "../../assets/image3.jpeg";

export function Home() {
  return (
    <div className="Home">
      <Card>
        <CardMedia sx={{ height: 140 }} image={Image} title="green iguana" />
        <CardContent>
          <Typography>MoinMeister</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
