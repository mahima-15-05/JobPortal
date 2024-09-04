import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Java Developer",
  "Data Science",
  "Graphic Designer",
  "Testing Engineer",
  "Fullstack Developer",
];
export default function CategoryCarousel() {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Button className=" bg-blue-200 hover:bg-blue-400">{cat}</Button>
            </CarouselItem>)
          )}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
        
      </Carousel>
    </div>
  );
}
