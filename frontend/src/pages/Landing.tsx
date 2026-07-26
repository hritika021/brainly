import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export function Landing(){
  return (
      <div className="min-h-screen bg-[#fef7f9] relative overflow-x-hidden">
        <Navbar/>
        <Hero/>
    </div>
  )
}