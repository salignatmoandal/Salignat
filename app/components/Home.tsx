import { BadgeNew } from "./ui/BadgeNew";
import HoverBubble from "./ui/HoverBubble";



export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6">
      <div className="max-w-2xl w-full flex flex-col gap-6">
        
        {/* Intro */}
       
        <div className="flex flex-col gap-2">
            <HoverBubble triggerElement={<h1 className="text-2xl text-left text-[#2CE609]">Mawen Salignat-Moandal</h1>} bubbleContent={<p className="text-gray-400 text-sm leading-relaxed">
              
              I'm <span className=" italic text-[#2CE609]">software engineer</span> and <span className="underline text-[#2CE609]">designer</span> based in Paris, France.
            </p>} />
          <p className="text-gray-400 text-sm leading-relaxed">
          Design Engineering meets LLMs. I build stuff that thinks, feels right, and actually works.
          </p>
          <h2 className="text-sm text-gray-500 font-semibold uppercase">Why </h2>
          <p className="text-gray-400 text-sm leading-relaxed"> Because I believe great products are born where thoughtful design meets intelligent systems — and combining Design Engineering with LLMs lets me build tools that feel both natural and powerful.
          </p>
          
          
        </div>

        {/* Journal */}
        <div className="flex flex-col gap-1">
          <h2 className="text-sm text-gray-500 font-semibold uppercase">Journal</h2>
          <div>
            <p className="text-gray-400 text-sm leading-relaxed flex items-center gap-2">
                <BadgeNew />
              Currently, I'm building <span className="underline">Noodl</span>  AI-powered mind mapping .
            </p>
           
         
           
          </div>
        </div>

        {/* Interactions */}
        <div className="flex flex-col gap-1">
          {/* Ligne Badge + Titre */}
          <div className="flex items-center gap-1">
            
            <h2 className="text-sm text-gray-500 font-semibold uppercase">Before </h2>
          </div>

          {/* Contenu */}
          <div>
            <h3 className="text-lg font-medium text-[#2CE609]">Anyshift</h3>
            <p className="text-gray-400 text-sm leading-relaxed ">
            Helped shape an AI-powered platform to make cloud infrastructure changes safer and smarter — with a strong focus on product vision, real impact, and fast iteration .
        
            </p>
            
            <h3 className="text-lg font-medium text-[#2CE609]">TheCollectible</h3>
            <p className="text-gray-400 text-sm leading-relaxed ">
            Built a marketplace for the artworld. Learned a ton, but it didn't take off. Ended up dying.

            </p>
            
          </div>
        </div>

        {/* Discuss */}
      
        <div className="flex flex-col gap-1">
          <h2 className="text-sm text-gray-500 font-semibold uppercase">Discuss</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Get in touch with me at <span className="underline">mwnslg@gmail.com</span> .
          </p>
        </div>
        
        
      </div>
    </main>
  );
}
