import type { AppProps } from "next/app";

import "../app/globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { Navbar } from "@/app/components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <main className="container mx-auto p-4">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </AuthProvider>
  );
}

export default MyApp;
