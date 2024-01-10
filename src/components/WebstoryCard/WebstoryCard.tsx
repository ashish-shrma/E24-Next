// Webstories.tsx

"use client";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/Logo.webp";
import { useRef } from "react";
import { WebStoriesResponse } from "@/app/web-stories/page";

export const WebstoryCardsItems = ({
  id,
  title,
  image_path,
  created_at,
  link,
  author_name,
}: {
  id: number;
  title: string;
  image_path: string;
  created_at: string;
  link: string;
  author_name?: string;
}) => {
  return (
    <div className="webstories-item relative">
      <Link href={link} className="block text-white rounded overflow-hidden">
        <div className="iconofwebstoires absolute left-4 top-3">
          <span className="webstories-icon"></span>
        </div>
        <Image
          src={image_path}
          alt={title}
          width={640}
          height={700}
          className="lazyloaded w-full block"
          data-ll-status="loaded"
        />
        <div className="gradient flex flex-wrap items-center justify-between p-3 absolute left-0 bottom-0 bg-gradient-to-b from-transparent via-black to-black border-t border-dashed border-white w-full min-h-[118px] box-border">
          <h3 className="text-white text-base font-bold text-sm lg:text-lg font-lato mb-2 w-full min-h-[40px] text-left">
            {title}
          </h3>
          <div className="time text-gray-200 text-base text-xs lg:text-sm font-light leading-4 font-lato text-left flex items-end">
            {created_at && format(new Date(created_at), "yyyy-MM-dd HH:mm")}{" "}
            {author_name && `| ${author_name}`}
          </div>
          <Image
            width={40}
            height={40}
            className="logo-img absolute bottom-4 right-2 max-w-[30px]"
            src={Logo}
            alt="News24"
            title="News24"
          />
        </div>
      </Link>
    </div>
  );
};

const WebstoryCards = ({ data }: { data: WebStoriesResponse }) => {
  const sliderRef = useRef<HTMLUListElement>(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  return (
    <>
      <div
        className="n24Header flex justify-between items-center"
        data-vars-widget-name="WEB STORIES"
        data-vars-placement-number="15"
      >
        <div className="n24story flex items-center">
          <a href="/web-stories/">
            <span className="flex-shrink-0 font-bold pl-2 lg:pl-0">
              WEB STORIES
            </span>
          </a>
          <a
            href="/web-stories/"
            className="text-primary mx-4 text-red-600 font-bold text-base"
          >
            VIEW ALL
          </a>
        </div>
        <div className="n24Arrows">
          <span
            className="mr-4 text-red-600 inline-block text-4xl cursor-pointer"
            onClick={handlePrev}
          >
            &#8249;
          </span>
          <span
            style={{ fontSize: "36px" }}
            className="text-red-600 inline-block cursor-pointer pr-2 lg:pr-0"
            onClick={handleNext}
          >
            &#8250;
          </span>
        </div>
      </div>
      <div className="overflow-x-scroll object-fill pl-1 lg:pl-0">
        <div className="main-webstories web-stories lg:mx-1 text-center flex flex-col">
          <ul
            className="flex overflow-x-scroll hide-scroll-bar overscroll-x-contain gallery scroll-smooth"
            data-slider-target="scrollContainer"
            ref={sliderRef}
          >
            {data.map(({ id, title, image_path, created_at, link }) => (
              <div className="h-full px-1 flex-shrink-0 gallery-item webstory-w">
                <li className="mb-2">
                  <WebstoryCardsItems
                    key={title}
                    id={id}
                    image_path={image_path}
                    title={title}
                    created_at={created_at}
                    link={link}
                  />
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default WebstoryCards;
