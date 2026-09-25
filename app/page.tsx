import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7faf6] text-slate-900">

      <Header/>
      <Hero/>
     <Introduction/>
     <UpcomingEvents/>
     
    </main>
  );
}