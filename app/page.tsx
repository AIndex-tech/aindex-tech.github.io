import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        ＡＩｎｄｅｘ by AIndex-tech
      </h1>
      <h2>
        Discover the AI future. At your fingertips: Anytime, anywhere.
      </h2>
      <Link href="/about">About</Link>
    </div>
  );
}
