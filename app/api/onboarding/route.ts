import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get("name");
  const number = formData.get("number");
  const description = formData.get("description");
  const role = formData.get("role");
  const department = formData.get("department");
  const image = formData.get("image");
  const email = formData.get("email");

  if (!name) {
    return new Response("Please enter name", { status: 400 });
  }

  try {
    const hospital = await prisma.hospital.create({
      data: {
        name: name as string,
        number: number as string,
        description: description as string,
        role: role as string,
        department: department as string,
        image: image as string,
        email: email as string,
      },
    });

    return new Response(JSON.stringify(hospital), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error creating hospital", { status: 500 });
  }
}
