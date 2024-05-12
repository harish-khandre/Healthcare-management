import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function AppointmentTable({ appointments }: { appointments: any[] }) {
  return (
    <Table>
      <TableCaption>A list of your recent appointments.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Number</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointments.map((appointment) => (
          <TableRow key={appointment.id}>
            <TableCell className="font-medium">
              {appointment.patientName}
            </TableCell>
            <TableCell>{appointment.patientNumber}</TableCell>
            <TableCell>{appointment.patientEmail}</TableCell>
            <TableCell className="text-right">
              <input type="checkbox" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}></TableCell>
          <TableCell className="text-right"></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

/*
  TODO: Archive feature
  const Done = ({ id }: { id: string }) => {
  return <Button variant="default">Done</Button>;
}; 
*/
