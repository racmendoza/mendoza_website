import Link from 'next/link';
import { Home, User } from 'lucide-react';

export default function Header(){
    return(
      <>
        <div className = "sticky top-0 text-black text-center p-4">
                <nav className = "space-x-10">
                    <a 
                      href="/dashboard"
                      className = "hover:text-xl duration-300">
                        Home
                    </a>
                    <a 
                      href="/dashboard/gallery" 
                      className = "hover:text-xl duration-300">
                        Gallery
                    </a>
                    <a
                      href="/dashboard/contact"
                      className = "hover:text-xl duration-300">
                        Contact
                    </a>
                </nav>
        </div>
      </>  
    );
}