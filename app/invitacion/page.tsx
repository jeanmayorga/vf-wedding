"use client";

import { PlayMusic } from "../components/PlayMusic";
import { InvitationContent } from "../components/InvitationContent";

export default function InvitationPage() {
  return (
    <main className="min-h-screen bg-[#f3f2ef] selection:bg-neutral-900 selection:text-white">
      <PlayMusic />
      <InvitationContent />
    </main>
  );
}
