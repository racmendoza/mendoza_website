import Image from "next/image";
import { Gamepad2,Clapperboard, LucideUsers, PawPrint } from "lucide-react";
export default function AboutPage() {
  return (
      <div className="flex flex-col space-y-8 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <p className = "text-5xl font-extrabold tracking-wider">Come get to know me!</p>
        <div className = "grid grid-cols-2 gap-4">
            <a 
                href="https://letterboxd.com/tobiiwahni/"
                className="flex flex-row space-x-4 hover:scale-110 duration-300 cursor-pointer">
                <Clapperboard />
                <p className = "text-2xl">My Letterboxd</p>
            </a>
            <a 
                href="https://www.facebook.com/ryan.mendoza.16940599"
                className="flex flex-row space-x-4 hover:scale-110 duration-300 cursor-pointer">
                <LucideUsers />
                <p className = "text-2xl">My Facebook</p>
            </a>
            <a 
                href="https://github.com/racmendoza"
                className="flex flex-row space-x-4 hover:scale-110 duration-300 cursor-pointer">
                <PawPrint />
                <p className = "text-2xl">My Github</p>
            </a>
            <a 
                href="https://www.roblox.com/users/426247681/profile?friendshipSourceType=PlayerSearch&nl=true#!#about"
                className="flex flex-row space-x-4 hover:scale-110 duration-300 cursor-pointer">
                <Gamepad2/>
                <p className = "text-2xl">My Roblox</p>
            </a>
        </div>
      </div>
  );
}