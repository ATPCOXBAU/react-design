import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <div className="flex flex-wrap justify-center h-80 lg:h-fit gap-4 space-x-2 mr-2 ml-2 mt-3 lg:gap-8 lg:space-x-6 md:mr-36 md:ml-36 lg:mx-56  rounded-lg md:py-6 md:px-6 ">
    <Carousel className="rounded-xl">
      <img
        src="https://drive.google.com/uc?export=view&id=1VUQFLn2uL26BG7-61x2_PxTXS7RWdBkI"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://drive.google.com/uc?export=view&id=1gLUUpDUVctWYRv39BOwu63wDVv7Wqy3Y"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://drive.google.com/uc?export=view&id=1nFe6wupS5aGjXX9SPzgWaZs24cpEHSay"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>

    </div>
  );
}