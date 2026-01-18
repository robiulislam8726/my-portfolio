import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Typography, Box } from "@mui/material";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact">
      <Box
        component="form"
        ref={formRef}
        onSubmit={sendEmail}
        sx={{
          maxWidth: 500,
          mx: "auto",
          my: 6,
          p: 4,
          borderRadius: 4,
          backdropFilter: "blur(12px)",
          background: "rgba(24, 12, 46, 0.9)",
          border: "1px solid rgba(168, 85, 247, 0.2)",
          boxShadow: "0 0 40px rgba(168, 85, 247, 0.2)",
        }}
      >
      <Typography
        variant="h4"
        textAlign="center"
        mb={3}
        sx={{
          fontWeight: "bold",
          background: "linear-gradient(to right, #c084fc, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Contact Me
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        label="Your Name"
        name="from_name"
        margin="normal"
        required
        InputLabelProps={{
          shrink: true,
          style: { color: "#c4b5fd" },
        }}
        InputProps={{
          style: { color: "white" },
        }}
      />

      <TextField
        fullWidth
        variant="outlined"
        label="Your Email"
        name="from_email"
        type="email"
        margin="normal"
        required
        InputLabelProps={{
          shrink: true,
          style: { color: "#c4b5fd" },
        }}
        InputProps={{
          style: { color: "white" },
        }}
      />

      <TextField
        fullWidth
        variant="outlined"
        label="Your Message"
        name="message"
        multiline
        rows={4}
        margin="normal"
        required
        InputLabelProps={{
          shrink: true,
          style: { color: "#c4b5fd" },
        }}
        InputProps={{
          style: { color: "white" },
        }}
      />

      <Button
        type="submit"
        fullWidth
        sx={{
          mt: 3,
          py: 1.3,
          fontWeight: "bold",
          color: "white",
          background: "linear-gradient(to right, #a855f7, #9333ea)",
          boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
          "&:hover": {
            background: "linear-gradient(to right, #9333ea, #7e22ce)",
          },
        }}
      >
        Send Message
      </Button>

      {status && (
        <Typography
          variant="body2"
          textAlign="center"
          mt={2}
          sx={{ color: status.includes("✅") ? "#86efac" : "#fca5a5" }}
        >
          {status}
        </Typography>
      )}
    </Box>
  </section>
  );
};

export default Contact;
