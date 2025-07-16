'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to My App
        </h1>
        <p className="text-gray-600 mb-8">
          Sign in to unlock personalized features and sync your data across devices.
        </p>
        <button
          onClick={() => router.push("/api/auth/signin")}
          className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg transition hover:bg-blue-700"
        >
          Sign In with Google / Facebook / Apple
        </button>
      </div>
    </main>
  );
}
