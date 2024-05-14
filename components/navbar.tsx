import UserButton from "./user-button";
import getSession from "@/lib/get-session";
import { SignInButton } from "./signin-button";
import ChatSheet from "./chat-sheet";

export default async function Navbar() {
  const session = await getSession();
  const user = session?.user;

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-blue-700 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Health Care</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-gray-900">
            About us
          </a>
          <a href="#hospital" className="mr-5 hover:text-gray-900">
            Collaborators
          </a>
          <a href="#contact" className="mr-5 hover:text-gray-900">
            Contact
          </a>
          <a className="mr-5 hover:text-gray-900">
            <ChatSheet />
          </a>
        </nav>
        {user ? <UserButton user={user} /> : <SignInButton />}
      </div>
    </header>
  );
}
{
}
