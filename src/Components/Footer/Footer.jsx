import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";
import { Box, Typography } from "@mui/material";
import logoImg from "../../Assests/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={logoImg} alt="Logo" className="h-20 mb-4" />
          <Typography variant="body2" className="text-gray-400">
            Elevating your shopping experience with quality products &
            unbeatable service.
          </Typography>
        </div>

        <div>
          <Typography variant="h6" className="mb-3">
            Contact Us
          </Typography>
          <div className="flex items-center gap-3 mb-2 text-gray-400">
            <FaMapMarkerAlt /> <span>abc Street, karachi, Pakistan</span>
          </div>
          <div className="flex items-center gap-3 mb-2 text-gray-400">
            <FaPhoneAlt /> <span>+92 123 456 7870</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <FaEnvelope /> <span>muhammadaslamkhan5467@gmail.com</span>
          </div>
        </div>

        <div>
          <Typography variant="h6" className="mb-3">
            Quick Links
          </Typography>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <Typography variant="h6" className="mb-3">
            Follow Us
          </Typography>
          <div className="flex space-x-4 text-gray-400">
            <a
              href="https://www.linkedin.com/in/muhammad-owais-902976322/"
              className="hover:text-white"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a href="https://x.com/M_Owaisi18" className="hover:text-white">
              <FaTwitter size={22} />
            </a>
            <a href="https://github.com/Owaisi123" className="hover:text-white">
              <FaGithub size={22} />
            </a>
          </div>
        </div>
      </div>

      <Box
        sx={{ mt: 6, backgroundColor: "#111827", py: 3, textAlign: "center" }}
      >
        <Typography variant="body2" className="text-gray-500">
          © 2025 ElectroNest . All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
