import React,{useRef, useState} from "react";
import emailjs from "@emailjs/browser"
import { TextField, Button, Typography, Alert, CircularProgress, Box } from "@mui/material";

const ContactForm = () => {
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
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <Box
      component="form"
      ref={formRef}
      onSubmit={sendEmail}
      sx={{
        maxWidth: 500,
        mx: "auto",
        my: 5,
        p: 4,
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="h4" textAlign="center" mb={2} color="primary">
        Contact Me
      </Typography>

      <TextField
        fullWidth
        label="Your Name"
        name="from_name"     
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Your Email"
        name="from_email"    
        type="email"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Your Message"
        name="message"      
        multiline
        rows={4}
        margin="normal"
        required
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2, py: 1.2, fontWeight: "bold" }}
      >
        Send Message
      </Button>

      {status && (
        <Typography
          variant="body2"
          textAlign="center"
          mt={2}
          color={status.includes("✅") ? "green" : "error"}
        >
          {status}
        </Typography>
      )}
    </Box>
  );
};

export default ContactForm;
