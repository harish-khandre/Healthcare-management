import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Chat from "./chat";

export default function ChatSheet() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>AI Doctor</SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>AI Doctor</SheetTitle>
            <SheetDescription>
              AI Doctor to resolve your minor confusions and queries.
            </SheetDescription>
          </SheetHeader>
          <Chat />{" "}
        </SheetContent>
      </Sheet>
    </div>
  );
}
