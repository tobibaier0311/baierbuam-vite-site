import { Card, CardContent, Grid } from "@mui/material";
import "./GigsCard.css";

export type CardProps = {
  date: string;
  event: string;
};

export const GigCard = ({ date, event }: CardProps) => {
  return (
    <Card variant="outlined" className="card">
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={3}>
            <h2>{date}</h2>
          </Grid>
          <Grid item xs={12} md={9}>
            <h2 style={{ color: "#003d6f" }}>{event}</h2>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
