import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { send } from "emailjs-com";

export function Contact() {
  const [toSend, setToSend] = useState({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
    phone: "",
  });

  const [spinner, setSpinner] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setSpinner(true);
    send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      toSend,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then(() => {
        setSpinner(false);
        setSuccess(true);
        return <Alert severity="success">Erfolg!</Alert>;
      })
      .catch((err) => {
        setSpinner(false);
        setError(true);
      });
  };

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Container className="container">
      <h1>Kontakt</h1>
      <Grid className="grid" container spacing={12}>
        <Grid item lg={6} xs={12}>
          <h2>Kontaktformular</h2>
          <form onSubmit={onSubmit} className="form">
            {spinner && (
              <Backdrop open>
                <CircularProgress color="inherit" />
              </Backdrop>
            )}
            {success && (
              <Backdrop open>
                <Alert
                  onClose={() => setSuccess(!success)}
                  className="alert"
                  severity="success"
                >
                  Anfrage wurde erfolreich versendet, vielen Dank!
                </Alert>
              </Backdrop>
            )}
            {error && (
              <Backdrop open>
                <Alert
                  onClose={() => setError(!error)}
                  className="alert"
                  severity="error"
                >
                  Leider ist ein Problem aufgetreten. Rufen Sie uns bitte an
                  oder schreiben Sie uns direkt eine Email, Danke!
                </Alert>
              </Backdrop>
            )}
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Vorname"
                  size="small"
                  variant="outlined"
                  required
                  fullWidth
                  type="text"
                  name="firstName"
                  value={toSend.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Nachname"
                  size="small"
                  variant="outlined"
                  required
                  fullWidth
                  type="text"
                  name="lastName"
                  value={toSend.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Ihre Email"
                  size="small"
                  variant="outlined"
                  required
                  fullWidth
                  type="text"
                  name="email"
                  value={toSend.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Tel. Nummer (optional)"
                  size="small"
                  variant="outlined"
                  fullWidth
                  type="text"
                  name="phone"
                  value={toSend.phone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Ihr Anliegen"
                  size="small"
                  variant="outlined"
                  required
                  fullWidth
                  type="text"
                  name="message"
                  value={toSend.message}
                  onChange={handleChange}
                  multiline
                  rows={6}
                />
              </Grid>
              <Grid item xs={12} md={6} alignSelf="self-end">
                <Button variant="contained" type="submit">
                  Senden
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item lg={6} xs={12}>
          <h2>Telefon/Email</h2>
          <div>
            <h3>📞 0160 7790533</h3>
            <h3>✉️ baierbuamandfriends@web.de</h3>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
