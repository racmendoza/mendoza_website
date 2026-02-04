import Image from "next/image";
export default function Dashboard() {
  return (
      <div className="flex space-x-16 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Image className="object-fill hover:scale-105 duration-300" src="/images/ryan.jpg" alt="Ryan" width={600} height={300}/>
        <div className="w-[600px]">
            <p className = "text-3xl font-extrabold tracking-wider">My name is RYAN ANTHONY C. MENDOZA.</p>
            <p className = "text-justify">I am a Roblox Developer and LUA Programmer with more than 3 years of experience. As currently, I am a Student still in the process of learning Java, CSS, HTML, and many other programming languages at Ateneo de Davao University. I have been studying in the college center for nearly three semesters, and I have been studying at Ateneo for my entire life.
</p>
        </div>
      </div>
  );
}