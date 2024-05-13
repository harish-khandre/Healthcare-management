import { AppointmentTable } from "@/components/appointment-table";
import getSession from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Hospital() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  }

  if (user?.role !== "Hospital") {
    return (
      <main className="mx-auto my-10">
        <p className="text-center">You are not authorized to view this page</p>
      </main>
    );
  }

  const appointments = await prisma.appointment.findMany({
    where: {
      hospitalEmail: user?.email as string,
    },
  });

  return (
    <div className="flex justify-center items-start h-fit w-[80%] mx-auto my-2">
      <AppointmentTable appointments={appointments} />
    </div>
  );
}
