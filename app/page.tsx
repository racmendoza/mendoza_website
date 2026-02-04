import Image from "next/image";
import Header from "./dashboard/header";

export default function Home({children}:{children:React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow pt-16 pb-16">
          {children}
        </main>
    </div>
  );
}
