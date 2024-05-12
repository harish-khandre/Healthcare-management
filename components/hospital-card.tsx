import prisma from "@/lib/prisma";
import Link from "next/link";

const BlogCard = ({
  id,
  image,
  name,
  department,
  description,
  number,
  email,
}: any) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Link href={`/h/${id}`}>
          <img
            src={image}
            alt={name}
            className="lg:h-48 md:h-36 w-full object-cover object-center"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {department}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {name}
            </h1>
            <p className="leading-relaxed mb-3">{description}</p>
            <p className="leading-relaxed mb-3">{email}</p>
            <p className="leading-relaxed mb-3">{number}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Hospitals = async () => {
  const blogData = await prisma.hospital.findMany();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {blogData.map((data, index) => (
            <BlogCard
              key={index}
              id={data.id}
              image={data.image}
              name={data.name}
              email={data.email}
              number={data.number}
              department={data.department}
              description={data.description}
              hospitalEmail={data.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hospitals;
