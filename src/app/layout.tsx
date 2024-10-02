import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { Toaster } from "react-hot-toast";
import "./globals.css";

//Fonts
const inter = Inter({ subsets: ["latin"] });

//Urql
import Provider from "@/Urql/provider";

//NP Provider
import NpProvider from "@/Progress/NpProvider";

//SEO
export const metadata: Metadata = {
  title: "PDF Shop | PDF Shop Dashboard Management"
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  //Cookies
  const cookie = cookies().get("NAOWSbL1sKQ30aq9");

  return (
    <html lang="en">
      <body className={inter.className}>
        <NpProvider>
          <Provider cookie={cookie?.value as string}>
            <Toaster toastOptions={{ duration: 5000 }} containerStyle={{ zIndex: 9999999 }} />
            {children}
          </Provider>
        </NpProvider>
      </body>
    </html>
  );
}

export default RootLayout;