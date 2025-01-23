import Head from "next/head";
import Link from "next/link";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AIndex: search AIs</title>
        <meta name="viewport" content="width-device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-bg-light dark:bg-bg-dark font-sans">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          <p className="text-center">
            tested
          </p>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}