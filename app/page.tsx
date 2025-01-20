import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex min-h-screen flex-col p-6">
        <div className="mt-4 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="absolute top-0 left-0 right-0 flex justify-start gap-6 rounded-lg px-32 py-8 w-full border-b border-b-white bg-gray-900 bg-gradient-to-r from-[#000000] via-blue-500/30 to-[#000000]">
            <h1 className="text-lg leading-tight font-bold">
              Ａ<span className="shadow-3d">Ｉ</span> ｎｄｅｘ
              {/*Discover the AI future. At your fingerti: Anytime, anywhere.*/}
            </h1>
            {/*<Link href="/about">About</Link>*/}
            {/* Navigation */}
            <nav>
              <ul className="flex gap-4">
                <li>
                  <Link href="/about">About </Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

    /* Scrollbarer Bereich */
      <div
        style={{
          height: 'calc(100vh - 80px)', // Höhe des Scrollbereichs
          overflowY: 'scroll',
          border: '1px solid #ddd',
          padding: '10px',
        }}>
        <h2>Scrollbarer Inhalt</h2>
        <p>
          Dies ist ein Beispieltext. Du kannst hier beliebig viel Inhalt hinzufügen, um die
          Scroll-Funktionalität zu testen.
        </p>
        {[...Array(50)].map((_, i) => (
          <p key={i}>Zeile {i + 1}</p>
        ))}
      </div>
    </main>

  );
}
//by AIndex-tech

/*"absolute top-0 left-0 right-0 flex flex-col justify-center gap-6 rounded-lg bg-[#000000] px-6 py-2 w-full border-b border-b-white"*/