import { Card, Grid } from "@mui/material";
import "./GigsCard.css";

export type CardProps = {
  date: string;
  event: string;
};

export const GigCard = ({ date, event }: CardProps) => {
  return (
    <Card variant="outlined" className="card">
      <Grid container direction="row">
        <Grid item xs={12} md={3}>
          <div>
            <h2>{date}</h2>
          </div>
        </Grid>
        <Grid item xs={12} md={9}>
          <div>
            <h2 style={{ color: "#003d6f" }}>{event}</h2>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};
