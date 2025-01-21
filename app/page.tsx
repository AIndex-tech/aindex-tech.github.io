import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="flex rounded-lg px-32 py-8 w-full border-b border-b-white bg-gray-900 bg-gradient-to-r from-[#000000] via-blue-500/30 to-[#000000]">
        <div className="container justify-between items-center">
          <div className="flex justify-start">
            <div className="flex gap-6 bg-yellow-100">
              <h1 className="text-lg leading-tight font-bold">
                ＡＩｎｄｅｘ
                {/*Discover the AI future. At your fingerti: Anytime, anywhere.*/}
              </h1>
              {/*<Link href="/about">About</Link>*/}
              {/* Navigation */}
              <nav>
                <ul className="flex gap-6">
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
          <div className="flex justify-center">
            <div className="flex-grow p-2 bg-yellow-100">
              <div className="w-full max-w-lg flex items-center p-1 rounded-lg shadow-md">
                <input
                  type="text"
                  placeholder="Suche..."
                  className="flex-grow p-2 bg-gray-900/50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex gap-6 bg-yellow-50">Hallo</div>
          </div>
        </div>
      </header>
    </main>


  );
}

// !!!!!!!!!!! ZUM DEBUGGEN CONTAINER FARBE NUTZEN bg-yellow-100 !!!!!!!!!!





//by AIndex-tech

/*"absolute top-0 left-0 right-0 flex flex-col justify-center gap-6 rounded-lg bg-[#000000] px-6 py-2 w-full border-b border-b-white"*/

// {/* Scrollbarer Bereich */}
// <div
//   style={{
//     height: 'calc(100vh - 80px)', // Höhe des Scrollbereichs
//     overflowY: 'scroll',
//     border: '1px solid #ddd',
//     padding: '10px',
//   }}>
//   <h2>Scrollbarer Inhalt</h2>
//   <p>
//     Dies ist ein Beispieltext. Du kannst hier beliebig viel Inhalt hinzufügen, um die
//     Scroll-Funktionalität zu testen.
//   </p>
//   {[...Array(50)].map((_, i) => (
//     <p key={i}>Zeile {i + 1}</p>
//   ))}
// </div>