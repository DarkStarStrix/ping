"use client";

import { ChevronLeftIcon, RotateCcwIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const message = error.message.slice(0, 200);

  return (
    <div className="max-w-screen-xl px-4 py-16">
      <div className="max-w-screen-sm text-center">
        <h2 className="text-2xl font-bold">Σ(O_O) Something went wrong</h2>

        {message && <p className="text-base mx-auto text-muted-foreground p-4 w-[50%]">{message}</p>}
        <div className="flex flex-row gap-4 items-center justify-center mt-10">
          <Link href={"/home"}>
            <Button size="sm" type="button" variant="secondary">
              <ChevronLeftIcon className="sm:mr-2" size={20} />
              Go home
            </Button>
          </Link>
          {reset && (
            <Button size="sm" type="reset" variant="accent" onClick={reset}>
              <RotateCcwIcon className="sm:mr-2" size={15} />
              Try again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
