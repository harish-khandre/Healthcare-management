import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  return (
    <section id="about" className="text-gray-600 body-font px-12">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-4xl mb-4 font-semibold text-blue-700">
            Welcome to Your Health <br className="hidden lg:inline-block" />
            Center
          </h1>
          <p className="mb-8 leading-relaxed text-xl font-medium break-words w-[90%]">
            Our mission is clear: to bridge the gap between patients and
            healthcare providers, ensuring that individuals receive the care and
            guidance they need promptly and conveniently. We aim to empower
            users with the ability to access medical advice, schedule
            appointments, and make informed healthcare decisions right at their
            fingertips
          </p>
          <div className="flex items-center justify-center h-full gap-2">
            <Avatar>
              <AvatarImage src="/hos3.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-2xl font-bold">Doctor</p>
          </div>
          <p className="pl-12 text-lg font-medium">Admin</p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/appointment-image.jpg"
          />
        </div>
      </div>
    </section>
  );
}
