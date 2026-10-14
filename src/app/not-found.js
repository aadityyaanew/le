import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found | Le",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-32 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono block">
          Error 404
        </span>

        <h1 className="text-6xl sm:text-7xl font-extralight tracking-tight font-serif italic">
          Lost in space
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed text-pretty">
          The page or route you are looking for might have been moved, renamed, or no longer exists.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-6">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="rounded-full px-6">
            <Link href="/work">
              Explore Our Work
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
