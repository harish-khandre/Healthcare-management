"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [despcription, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setUploading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("number", number);
    formData.append("despcription", despcription);
    formData.append("role", role);
    formData.append("department", department);
    formData.append("image", image);
    formData.append("email", email);

    if (!name) {
      alert("Please enter name ");
      return;
    }

    try {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        alert("Error sending request");
        setUploading(false);
        return;
      }
      setUploading(false);
      alert("Form submitted successfully!");
      const success = response.status === 200;
      if (success) router.push("/admin");
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-2 w-full gap-6 border-b-4 border-r-4 border-black border-2 p-6 rounded-2xl "
      >
        <div className="flex flex-col space-y-1.5">
          <label className="text-sm font-medium leading-none ">
            Hospital's Name{" "}
          </label>
          <input
            type="text"
            onChange={(e: any) => {
              setName(e.target.value);
            }}
            required
            className="flex text-[#333333] mb-5 leading-normal  h-9 w-full rounded-md border-b-4 border-r-4 border  border-[#333333]  border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 ring-[#333333] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <label className="text-sm font-medium leading-none ">
            Hospital's description
          </label>
          <input
            type="text"
            onChange={(e: any) => {
              setDescription(e.target.value);
            }}
            required
            className="flex text-[#333333] mb-5 leading-normal  h-9 w-full rounded-md border-b-4 border-r-4 border  border-[#333333]  border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 ring-[#333333] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <label className="text-sm font-medium leading-none ">
            Hospital's Department
          </label>
          <input
            type="text"
            onChange={(e: any) => {
              setDepartment(e.target.value);
            }}
            required
            className="flex text-[#333333] mb-5 leading-normal  h-9 w-full rounded-md border-b-4 border-r-4 border  border-[#333333]  border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 ring-[#333333] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <label className="text-sm font-medium leading-none ">Role</label>
          <input
            type="text"
            onChange={(e: any) => {
              setRole(e.target.value);
            }}
            required
            className="flex text-[#333333] mb-5 leading-normal  h-9 w-full rounded-md border-b-4 border-r-4 border  border-[#333333]  border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 ring-[#333333] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <label className="text-sm font-medium leading-none ">
            Hospital's Image
          </label>
          <input
            type="text"
            onChange={(e: any) => {
              setImage(e.target.value);
            }}
            required
            className="flex text-[#333333] mb-5 leading-normal  h-9 w-full rounded-md border-b-4 border-r-4 border  border-[#333333]  border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 ring-[#333333] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <label className="text-sm font-medium leading-none ">
            Hospital's Contact Number
          </label>
          <input
            type="text"
            onChange={(e: any) => {
              setNumber(e.target.value);
            }}
            required
            className="flex text-[#333333] mb-5 leading-normal  h-9 w-full rounded-md border-b-4 border-r-4 border  border-[#333333]  border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 ring-[#333333] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <label className="text-sm font-medium leading-none ">
            Hospital's Email
          </label>
          <input
            type="text"
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
            required
            className="flex text-[#333333] mb-5 leading-normal  h-9 w-full rounded-md border-b-4 border-r-4 border  border-[#333333]  border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 ring-[#333333] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
          />
        </div>
        <div className="space-y-4 py-4">
          <button
            type="submit"
            disabled={!name || !role}
            onClick={onSubmit}
            className="w-full h-9 rounded-md bg-[#3f3f46] text-zinc-50 font-medium text-sm transition-colors shadow-sm hover:bg-[#09090b] hover:text-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#3f3f46] disabled:text-[#09090b] disabled:shadow-sm"
          >
            {uploading ? "Uploading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
