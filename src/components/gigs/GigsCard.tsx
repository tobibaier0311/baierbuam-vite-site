import { Card, CardContent, Typography } from "@mui/material";

export type CardProps = {
  date: string;
  event: string;
};

export const GigCard = ({ date, event }: CardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography> Wann? : {date}</Typography>
        <Typography>Was? : {event}</Typography>
      </CardContent>
    </Card>
  );
};
