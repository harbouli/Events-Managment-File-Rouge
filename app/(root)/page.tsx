/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import image1 from "../../public/assets/images/main-stage.png";
import image2 from "../../public/assets/images/music-fanclub.png";
import image3 from "../../public/assets/images/people-dancing.png";
import image4 from "../../public/assets/images/people-taking-part.png";
import CategoryFilter from "@/components/shared/CategoryFilter";
import imageFamily from "../../public/assets/images/famille.png";
import affairesImage from "../../public/assets/images/affaires.png";
import nourritureImage from "../../public/assets/images/nourriture.png";
import santeImage from "../../public/assets/images/sante.png";
import beauteImage from "../../public/assets/images/beaute.jpg";
import toto from "../../public/assets/images/elgrandetoto.png";
import sourire from "../../public/assets/images/sourire.png";
import Card from "@/components/shared/Card";
import Search from "@/components/shared/Search";

import Image from "next/image";
import CategoryCards from "@/components/shared/CategoryCards";
export default function Home() {
  return (
    <>
      <section className="bg-yellow-100 bg-dotted-pattern bg-contain py-5 md:py-10 ">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-8">
          <div className="flex flex-col justify-center gap-8 text-blue-950">
            <h1 className="h1-bold ">
              EVENTIFY, Find your place & save your time{" "}
            </h1>
            <p className="p-regular-20 md:p-regular-24 pr-4 text-justify">
              {" "}
              Find an event that suits you and we are your all-in-one solution
              for effortless event management. Whether you&apos;re organizing a
              corporate conference, a community fundraiser or any event else.
            </p>
            <Button className="rounded-none sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <div className=" hidden  md:flex items-center justify-center ">
            <div className="mx-auto max-w-6xl px-6 lg:max-w-lg ">
              <div className="flex [&:hover>div]:w-16 [&>div:hover]:w-[30rem]">
                <div className="group relative h-96 w-[28rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200 ">
                  <img
                    className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                    src={image3.src}
                    alt=""
                  />
                </div>
                <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                  <img
                    className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                    src={image2.src}
                    alt=""
                  />
                </div>
                <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                  <img
                    className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                    src={image1.src}
                    alt=""
                  />
                </div>
                <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                  <img
                    className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                    src={image4.src}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="recommended"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12 "
      >
        <h2 className="h2-bold text-blue-950">Recommended Events</h2>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
          <a className="duration-500 hover:scale-105 relative flex flex-col justify-end overflow-hidden px-8 pb-8 pt-40 w-full h-full mb-10 mx-auto">
            <Image
              src={toto.src}
              alt="elgrandetoto tour"
              className="absolute inset-0 h-full w-full object-cover"
              width={300}
              height={300}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">
              Casablanca
            </h3>
          </a>
          {/* Second article */}
          <article className="duration-500 hover:scale-105 relative flex flex-col justify-end overflow-hidden px-8 pb-8 pt-40 w-full mx-auto mb-20 h-full">
            <Image
              src={sourire.src}
              alt="University of Southern California"
              className="absolute inset-0 h-full w-full object-cover"
              width={300}
              height={300}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">Rabat</h3>
          </article>
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold text-blue-950">
          Trust by <br /> Thousands of Events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Card />
        </div>
      </section>
      <section
        id="allCategorys"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold text-blue-950">
          All events by areas of activity
        </h2>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 xl:gap-2">
          {[
            { src: imageFamily, alt: "Family", category: "Family" },
            { src: affairesImage, alt: "Business", category: "Business" },
            { src: santeImage, alt: "Health", category: "Health" },
            { src: nourritureImage, alt: "Food", category: "Food" },
            { src: beauteImage, alt: "Beauty", category: "Beauty" },
          ].map((image, index) => (
            <CategoryCards
              key={index}
              src={image.src}
              alt={image.alt}
              category={image.category}
            />
          ))}
        </div>
      </section>
      <section
        id="CategoryByCitys"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold text-blue-950">Browse events by city</h2>

        <div className="flex">
          <div className="w-full">
            <Image src={image1.src} width={400} height={400} alt="nothing" />
          </div>
          <div className="grid gap-x-8 gap-y-4 grid-cols-2">
          <Image src={image1.src} width={300} height={300} alt="nothing" />
          <Image src={image1.src} width={300} height={300} alt="nothing" />
          <Image src={image1.src} width={300} height={300} alt="nothing" />
          <Image src={image1.src} width={300} height={300} alt="nothing" />

            

          </div>
        </div>
      </section>
    </>
  );
}
