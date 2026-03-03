import connectDB from "@/db/connect.db";

connectDB();

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold">Chai-aur-Code-Project-using-Next</h1>
    </div>
  );
}
