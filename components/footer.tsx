import { Mail, PhoneCall, PhoneIcon } from "lucide-react";
import React from "react";
import Foot from "./foot";

const ContactSection = () => {
  return (
    <>
      <div className="h-72 w-full flex items-start justify-center p-24 flex-col gap-2">
        <h1 className="text-4xl font-bold pb-4">Contact Info</h1>
        <p>MIT ADT University, Pune</p>
        <p>Loni Kalbhor</p>
        <div className="flex gap-2 py-2">
          <PhoneIcon size={24} />
          <p>777-888-999</p>
        </div>
        <div className="flex gap-2 py-2">
          <Mail size={24} />
          <p>medico@info.com</p>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default ContactSection;
