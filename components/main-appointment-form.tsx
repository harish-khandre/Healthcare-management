"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MAF({ hospitalEmail }: { hospitalEmail: string }) {
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
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Appointment Form</CardTitle>
        </CardHeader>
        <CardContent>

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
        </CardContent>
        <CardFooter>Hospital will contact you shortly</CardFooter>
      </Card>
    </div>
  );
}
