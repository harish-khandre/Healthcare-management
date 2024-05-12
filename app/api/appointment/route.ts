import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get("name");
  const number = formData.get("number");
  const email = formData.get("email");
  const hospitalEmail = formData.get("hospitalEmail");

  if (!name) {
    return new Response("Please enter name", { status: 400 });
  }

  try {
    const appointment = await prisma.appointment.create({
      data: {
        patientName: name as string,
        patientNumber: number as string,
        patientEmail: email as string,
        hospitalEmail: hospitalEmail as string,
      },
    });

    return new Response(JSON.stringify(appointment), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error creating appointment", { status: 500 });
  }
}
