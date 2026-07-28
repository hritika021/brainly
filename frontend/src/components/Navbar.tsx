import { Link } from "react-router-dom";

import { Brain } from "lucide-react";
import { Button } from "./Button";

export function Navbar() {
    return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 ">
         <div className="mx-auto max-w-7xl">
           <nav className=" rounded-full  z-50  border-pink-100 shadow-md bg-white/20 backdrop-blur-xl">
            <div className="mx-auto flex h-[70px] max-w-[1280px] items-center justify-between px-6 lg:px-10">
                <Link to="/" className="flex items-center gap-1">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50">
                        <Brain
                            className="h-6 w-6 text-[#dd5781]"
                            strokeWidth={2.4}
                        />
                    </div>

                    <span className="text-2xl font-[Inter] font-bold tracking-tight text-gray-900">
                        Brainly
                    </span>
                </Link>

                <div className="hidden items-center md:gap-8 lg:gap-12 text-[15px] font-medium font-[Inter] text-gray-700 md:flex">
                    <a href="#features" className="transition hover:text-[#dd5781]">
                        Features
                    </a>

                    <a href="#how-it-works" className="transition hover:text-[#dd5781]">
                        How it Works
                    </a>

                    <a href="#pricing" className="transition hover:text-[#dd5781]">
                        Pricing
                    </a>

                    <a href="#about" className="transition hover:text-[#dd5781]">
                        About
                    </a>
                </div>

                <div className="flex items-center gap-3">

                    <Link to="/signin">
                        <Button onClick={()=>{}}
                            variant="secondary"
                            text="Sign In"
                            className="hidden md:flex"
                        />
                    </Link>

                    <Link to="/signup">
                        <Button onClick={()=>{}}
                            variant="primary"
                            text="Get Started"
                        />
                    </Link>

                </div>

            </div>
        </nav>
     </div>
    </header>
    );
}