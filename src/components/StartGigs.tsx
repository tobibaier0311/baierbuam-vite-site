import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { EventsType, events } from "../data/gigs";
import { ArrowRightAlt, Event, FmdGood } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const geg1 = {
  date: "",
  title: "",
  location: "",
  description: "",
};

export default function StartGigs() {
  const gigs = events.slice(0, 3);

  const to = useNavigate();
  const [open, setOpen] = useState(false);
  const [gig, setGig] = useState<EventsType>(geg1);

  const getDetailedGig = (id: number) => {
    const detailedGig = events.find((item) => item.id === id);
    setGig(detailedGig as EventsType);
    return detailedGig;
  };

  const handleDialogOpen = (id: number) => {
    setOpen(true);
    getDetailedGig(id);
  };

  const styles = {
    listContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      rowGap: "4rem",
    },
    table: {
      maxWidth: "900px",
    },
    tableCell: {
      padding: "2rem 0",
      fontSize: "17px",
    },
    dialogSub: {
      display: "flex",
      alignItems: "center",
      columnGap: "1rem",
      padding: "8px 0",
    },
  };
  return (
    <>
      <div style={styles.listContainer as React.CSSProperties}>
        <Table style={styles.table}>
          <TableBody>
            {gigs.map((item, i) => (
              <TableRow key={i}>
                <TableCell style={styles.tableCell}>
                  <p>{item.date}</p>
                </TableCell>
                <TableCell style={styles.tableCell}>
                  <p>{item.title}</p>
                </TableCell>
                <TableCell style={styles.tableCell}>
                  <p>{item.location}</p>
                </TableCell>
                <TableCell style={styles.tableCell} align="right">
                  <Button
                    onClick={() => handleDialogOpen(item.id as number)}
                    sx={{
                      textTransform: "none",
                      color: "#042556",
                    }}
                    size="small"
                    variant="outlined"
                    disableRipple
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          variant="text"
          endIcon={<ArrowRightAlt />}
          disableRipple
          onClick={() => to("/gigs")}
          sx={{
            color: "#042556",
            textTransform: "none",
          }}
        >
          <Typography variant="button">Alle Termine</Typography>
        </Button>
      </div>

      <Dialog fullWidth open={open}>
        <DialogTitle>
          <Typography variant="h6">{gig.title}</Typography>
          <Typography variant="subtitle2" style={styles.dialogSub}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "0.3rem",
              }}
            >
              <FmdGood fontSize="small" /> {gig.location}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "0.3rem",
              }}
            >
              <Event fontSize="small" /> {gig.date}
            </div>
          </Typography>
        </DialogTitle>
        <Divider orientation="horizontal" variant="middle" />
        <DialogContent>
          <DialogContentText>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <Divider orientation="horizontal" variant="middle" />
        <DialogActions>
          <Button>Alle Termine</Button>
          <Button onClick={() => setOpen(false)}>Schließen</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
