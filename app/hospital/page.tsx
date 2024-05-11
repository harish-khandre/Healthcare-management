import getSession from "@/lib/get-session";
import prisma from "@/lib/prisma";

export default async function Hospital() {
  const session = await getSession();
  const id = session?.user.id;

  const appointments = await prisma.appointment.findMany({
    where: {
      hospitalId: id,
    },
  });
  return (
    <div>
      {appointments.map((appointment) => (
        <div>
          <h1>{appointment.patientName}</h1>
          <p>{appointment.patientNumber}</p>
          <p>{appointment.patientEmail}</p>
        </div>
      ))}
    </div>
  );
}

//TODO: Add list of appointments checking and archiving
