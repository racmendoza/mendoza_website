import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

export default function ContactPage() {
  return (
      <div className="justify-center items-center flex flex-col space-y-12">
        {/* className="container flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black" */}
         <div className="w-[600px]">
            <p className="text-left text-4xl font-extrabold tracking-wider">MY PROJECTS</p>
            <br></br>
            <p className="text-justify">I spent the majority of my early teen years in quarantine learning and practicing online game development, especially in platforms such as Roblox and Roblox Studio. I manage to meet a welcoming community of likeminded individuals who not only enjoyed the same games I enjoyed but also had the same passion for creating maps and experiences.</p>
        </div>
         <div>
            <Carousel className="w-[600px] h-[500px]">
            <CarouselContent>
                <CarouselItem>
                    <Image className="object-fill hover:scale-105 duration-300" src="/images/chaoticcanyons.jpg" alt="Chaotic Canyons" width={600} height={300}/>
                    <br></br>
                    <div className="justify-center items-center flex space-x-4">
                        <p className = "text-3xl font-extrabold tracking-wider">CHAOTIC CANYONS</p>
                        <p className = "text-justify">One of my first ever attempts at a custom map for a game called Flood Escape 2. While it was fun to blueprint, it ultimately didn't pass the creator's standards.</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <Image className="object-fill hover:scale-105 duration-300" src="/images/acidicreaction.jpg" alt="Acidic Reaction" width={600} height={300}/>
                    <br></br>
                    <div className="justify-center items-center flex space-x-4">
                        <p className = "text-3xl font-extrabold tracking-wider">ACIDIC REACTION</p>
                        <p className = "text-justify">Another attempt at trying to create something with a more distinct and unique feel to it. It was originally a collaboration but unfortunately got cancelled.</p>
                    </div>
                </CarouselItem>
                 <CarouselItem>
                    <Image className="object-fill hover:scale-105 duration-300" src="/images/escher.jpg" alt="Escher" width={600} height={300}/>
                    <br></br>
                    <div className="justify-center items-center flex space-x-4">
                        <p className = "text-3xl font-extrabold tracking-wider">ESCHER</p>
                        <p className = "text-justify">Heavily inspired by the paintings of M.C. Escher, this takes a much more surreal and abstract approach to structures and architecture.</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <Image className="object-fill hover:scale-105 duration-300" src="/images/sunkencitadel1.jpg" alt="Sunken Citadel" width={600} height={300}/>
                    <br></br>
                    <div className="justify-center items-center flex space-x-4">
                        <p className = "text-3xl font-extrabold tracking-wider">SUNKEN CITADEL</p>
                        <p className = "text-justify">After several countless attempts at trying to get something into the game, I finally managed to get one of my maps published and accepted.</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <Image className="object-fill hover:scale-105 duration-300" src="/images/sunkencitadel2.jpg" alt="Sunken Citadel 2" width={600} height={300}/>
                    <br></br>
                    <div className="justify-center items-center flex space-x-4">
                        <p className = "text-3xl font-extrabold tracking-wider">SUNKEN CITADEL</p>
                        <p className = "text-justify">Sunken Citadel was a project initially made out of spite; one of my previous maps, Sunken Temple, had to be deleted because of the amount of lag it created on my computer. Its deletion unfortunately disappointed many people, and I felt obligated to make up for it.</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <Image className="object-fill hover:scale-105 duration-300" src="/images/sunkencitadel3.png" alt="Sunken Citadel 3" width={600} height={300}/>
                    <br></br>
                    <div className="justify-center items-center flex space-x-4">
                        <p className = "text-3xl font-extrabold tracking-wider">SUNKEN CITADEL</p>
                        <p className = "text-justify">Sunken Citadel takes heavy inspiration from underwater aesthetics, mimicking the feel of a sunken ocean adventure. It took a year of development and several months of reiteration, but it was the one map that I made that gave me a sense of accomplishment and success.</p>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
         </div>
      </div>
  );
}