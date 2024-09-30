import { HoverEffect } from "@/components/ui/CardHover";

 function CardHover() {
  return (
    (<><div className="max-w-5xl mx-auto px-8 mt-[200px]">
     
      <HoverEffect items={projects} />
      
    </div></>
    )
  );
}
export const projects = [
  {
    title: "Feature 1",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Feature 2",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Feature 1",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
 
];
export default CardHover;