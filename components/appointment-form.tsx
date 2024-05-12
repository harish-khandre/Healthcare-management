"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AppointmentForm({
  hospitalEmail,
}: {
  hospitalEmail: string;
}) {
  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [uploading, setUploading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", patientName);
    formData.append("number", patientNumber);
    formData.append("email", patientEmail);
    formData.append("hospitalEmail", hospitalEmail);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        alert("Error sending request");
        setUploading(false);
        return;
      }
      setUploading(false);
      alert("Appointment submitted successfully!");
      const success = response.status === 200;
      if (success) router.push("/");
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
      setUploading(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Make Appointment</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make Appointment</DialogTitle>
          <DialogDescription>
            Fill in the form below to get your appointment
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                className="col-span-3"
                onChange={(e) => setPatientName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Number
              </Label>
              <Input
                type="number"
                id="number"
                className="col-span-3"
                onChange={(e) => setPatientNumber(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Email
              </Label>
              <Input
                type="email"
                id="username"
                className="col-span-3"
                onChange={(e) => setPatientEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end items-center h-fit">
            <Button type="submit">
              {uploading ? "Uploading..." : "Submit"}
            </Button>
          </div>
        </form>
        <DialogFooter>Hospital will contact you shortly</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
