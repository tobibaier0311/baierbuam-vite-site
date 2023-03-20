import {
  Button,
  Container,
  Grid,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { send } from "emailjs-com";

import "./Contact.css";
import { env } from "process";

export function Contact() {
  const [toSend, setToSend] = useState({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
    phone: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    send("service_3dx1rzk", "template_0cmj5m5", toSend, "ah7IwFpD82EJ_SCzx")
      .then((response) => {
        return alert("Anfrage wurde erfolgreich gesendet, Danke!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <h1>Kontakt</h1>

      <Stack
        direction={{ md: "column", lg: "row" }}
        justifyContent="space-between"
      >
        <div>
          <h2>📞 0160 7790533</h2>
          <h2>✉️ baierbuamandfriends@web.de</h2>
        </div>
        <form onSubmit={onSubmit} className="form">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Vorname"
                size="small"
                variant="filled"
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
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
                variant="filled"
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
              <Button variant="outlined" type="submit">
                Senden
              </Button>
            </Grid>
          </Grid>
        </form>
      </Stack>
    </Container>
  );
}
