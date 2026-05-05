import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { EventsType, events } from "../data/gigs";
import { ArrowRightAlt, Event, FmdGood } from "@mui/icons-material";
import { useEffect } from "react";

import "./StartGigs.css";
import PrimaryButton from "./utility/PrimaryButton";

const geg1 = {
  date: "",
  title: "",
  location: "",
  description: "",
};

export default function StartGigs() {
  useEffect(() => {
    const listener = (event: MessageEvent) => {
      const frame = document.getElementById(
        "km-list-frame",
      ) as HTMLIFrameElement | null;
      if (
        event?.data &&
        typeof event.data.kmAppointmentListHeight === "number" &&
        frame
      ) {
        const borderWidth = isNaN(
          parseInt(frame.style.borderWidth.replace("px", ""), 10),
        )
          ? 0
          : parseInt(frame.style.borderWidth.replace("px", ""), 10);
        frame.style.height = `${event.data.kmAppointmentListHeight + 2 * borderWidth}px`;
      }
    };

    window.addEventListener("message", listener);
    return () => window.removeEventListener("message", listener);
  }, []);

  return (
    <div>
      <iframe
        id="km-list-frame"
        style={{
          display: "block",
          boxSizing: "border-box",
          width: "100%",
          maxWidth: "640px",
          margin: "0 auto",
          border: "solid 1px #bbb",
        }}
        src="https://rest.konzertmeister.app/api/v3/org/OALS_a630180a-acb8-4d8e-9f75-57c692db296b/upcomingappointments?types=2&showDescription=false&onlyPublicsite=false&limit=3&display=light&lang=de&hash=9d19175dac065c6e6eacd1e5234ecd7817c45ac59b027ba8592667acca47cfb2"
      ></iframe>
    </div>
  );
}

{
  /* 
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
    },
    table: {
      maxWidth: "900px",
      borderBottom: "1px solid #042556",
      padding: "2rem 0",
      fontSize: "18px",
    },
    dialogSub: {
      display: "flex",
      alignItems: "center",
      columnGap: "1rem",
      padding: "8px 0",
    },
    allButton: {
      marginTop: "2rem",
    },
  };
  return (
    <>
      <div style={styles.listContainer as React.CSSProperties}>
        {gigs.map((item, i) => (
          <Grid style={styles.table} key={i} container alignItems="center">
            <Grid item md={3} xs={12}>
              <p className="grid-left">{item.date}</p>
            </Grid>
            <Grid className="grid-left" item md={3} xs={12}>
              <p>{item.title}</p>
            </Grid>
            <Grid textAlign="center" item md={4} xs={12}>
              <p>{item.location}</p>
            </Grid>
            <Grid className="grid-detail" item md={2} xs={12}>
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
            </Grid>
          </Grid>
        ))}
        <div style={styles.allButton}>
          <PrimaryButton link="/gigs" label="Alle Termine" />
        </div>
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
              {gig.description}
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

  */
}
