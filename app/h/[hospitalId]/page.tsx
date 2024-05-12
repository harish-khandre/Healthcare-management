import MAF from "@/components/main-appointment-form";
import prisma from "@/lib/prisma";

interface HospitalData {
  id: string;
  image: string;
  name: string;
  department: string;
  description: string;
  email: string;
  number: string;
}

export default async function HospitalName({ params }: { params: any }) {
  const hospitalData = await prisma.hospital.findUnique({
    where: {
      id: params.hospitalId,
    },
  });

  if (!hospitalData || hospitalData === null) {
    return <div>Not found</div>;
  }
  const data: HospitalData = {
    id: hospitalData.id,
    image: hospitalData.image || "",
    name: hospitalData.name || "",
    department: hospitalData.department || "",
    description: hospitalData.description || "",
    email: hospitalData.email || "",
    number: hospitalData.number || "",
  };

  return (
    <>
      <div
        key={data.id}
        className="flex border-2 h-full w-full py-4 px-8 gap-4"
      >
        <div className="data-section bg-gray-50 w-full lg:w-[70%] h-full border-2 border-gray-200  rounded-2xl ">
          <div className="lg:h-[27rem]">
            <img
              className="aspect-video rounded-2xl w-full h-full"
              src={data.image}
              alt=""
            />
          </div>
          <div className="h-full lg:p-8 bg-gray-50">
            <h1 className="text-2xl sm:text-4xl font-bold p-3 ">{data.name}</h1>
            <p className="text-sm sm:text-sm text-gray-500 p-3">
              {data.department}
            </p>
            <hr />
            <section className="text-lg sm:text-2xl p-3">
              <p>{data.description}</p>
            </section>
            <p className="py-2">{data.number}</p>
            <p className="py-2">{data.email}</p>
          </div>
        </div>
        <div className="lg:w-[30%]">
          <MAF hospitalEmail={data.email} />
        </div>
      </div>
    </>
  );
}
