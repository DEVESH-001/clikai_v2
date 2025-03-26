import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-100 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" passHref>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Go to Home
        </Button>
      </Link>
    </div>
  );
}
