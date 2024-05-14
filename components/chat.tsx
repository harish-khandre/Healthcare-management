"use client";

import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SendHorizontalIcon } from "lucide-react";
import CopyToClipboard from "./ui/copy-to-clipboard";
import { toast } from "./ui/use-toast";

export default function Chat() {
  const ref = useRef<HTMLDivElement>(null);
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      initialMessages: [
        {
          id: Date.now().toString(),
          role: "system",
          content:
            "Imagine you're an AI doctor programmed to deliver precise, evidence-based responses to medical inquiries. Your goal is to offer succinct yet thorough answers to patients' questions, ensuring they receive accurate information about their health concerns. Craft a dialogue where a patient presents a medical query, and you, as the AI doctor, respond with concise, factual information. Your responses should be rooted in scientific knowledge and medical best practices, providing reassurance and guidance to the patient within the limitations of an AI consultation.",
        },
      ],
      onResponse: (response) => {
        if (!response.ok) {
          toast({ title: error?.message || "Something went wrong!" });
        }
      },
    });

  useEffect(() => {
    if (ref.current === null) return;
    ref.current.scrollTo(0, ref.current.scrollHeight);
  }, [messages]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleSubmit(e);
  }

  return (
    <section className="py-24 text-zinc-700">
      <div className="container max-w-3xl">
        <div className="mx-auto flex max-w-lg items-center justify-between px-1">
          <h1 className="font-serif text-2xl font-medium">AI Chatbot</h1>
        </div>

        <div className="mx-auto mt-3 w-full max-w-lg">
          <ScrollArea
            className="mb-2 h-[400px] rounded-md border p-4"
            ref={ref}
          >
            {messages.map((m) => (
              <div key={m.id} className="mr-6 whitespace-pre-wrap md:mr-12">
                {m.role === "user" && (
                  <div className="mb-6 flex gap-3">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback className="text-sm">U</AvatarFallback>
                    </Avatar>
                    <div className="mt-1.5">
                      <p className="font-semibold">You</p>
                      <div className="mt-1.5 text-sm text-zinc-500">
                        {m.content}
                      </div>
                    </div>
                  </div>
                )}

                {m.role === "assistant" && (
                  <div className="mb-6 flex gap-3">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-blue-700 text-white">
                        AI
                      </AvatarFallback>
                    </Avatar>
                    <div className="mt-1.5 w-full">
                      <div className="flex justify-between">
                        <p className="font-semibold">Bot</p>
                        <CopyToClipboard message={m} className="-mt-1" />
                      </div>
                      <div className="mt-2 text-sm text-zinc-500">
                        {m.content}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ScrollArea>

          <form onSubmit={onSubmit} className="relative">
            <Input
              name="message"
              value={input}
              onChange={handleInputChange}
              placeholder={"Ask me anything..."}
              className="pr-12 placeholder:italic placeholder:text-zinc-600/75 focus-visible:ring-zinc-500"
            />
            <Button
              size="icon"
              type="submit"
              variant="secondary"
              disabled={isLoading}
              className="absolute right-1 top-1 h-8 w-10"
            >
              <SendHorizontalIcon className="h-5 w-5 text-blue-700" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
