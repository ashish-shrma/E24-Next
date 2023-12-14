import BannerSection from "@/components/BannerSection/BannerSection";
import ListView from "@/components/Cards/Card";
import { fetchData } from "@/helpers/graphql";
import { gql } from "@apollo/client";
import React from "react";
import { getPost } from "@/queries/getPost";
import Image from "next/image";
import Link from "next/link";
import parse, { domToReact } from "html-react-parser";
import ShareIcon from "@/components/SocialShare/ShareIcon";
import { format } from "date-fns";
import Schema from "@/components/Seo/Schema";

const Article = async ({ params }: { params: { id: string } }) => {
  const data = await fetchData(getPost, params.id);
  const {
    title,
    slug,
    uri,
    databaseId,
    date,
    content,
    featuredImage,
    categories,
    modified,
    author,
    excerpt,
    tags,
    seo,
  } = data.post;

  let contentParse = parse(content);


  const formattedModifiedDate = modified && format(new Date(modified), 'yyyy-MM-dd HH:mm');

  const { sourceUrl, caption, description } =  featuredImage.node;

  // console.log('jhfehwfbejwhfjbs',author);
  
  

  return (

    <>
    <Schema data={{
        name: author,
        uri: uri,
        headline: title,
        description: excerpt,
        datePublished: date,
        dateModified: modified,
        author: author,
        categories: categories,
        imgSourceUrl: sourceUrl,
        imgCaption: caption,
        imgDescription: description,
        authorUrl : author,
      }}/>

    <div className="w-full md:w-1/2 lg:w-6/12 p-4 bg-white">
      <div className="mx-4 md:mx-0 md:w-full mt-4 md:mt-4 w-auto overflow-hidden">
        <div className="flex mb-2 w-full overflow-x-scroll whitespace-nowrap">
          <span className="px-2">
            <a
              href="https://hindi.news24online.com/"
              style={{ color: "#18479e" }}
            >
              होम
            </a>
          </span>
          <span className="px-1"> / </span>
          <span className="px-1">
            <Link href="/">{categories.nodes[0].name}</Link>
          </span>
          <span className="px-1"> / </span>
          <span>{title}</span>
        </div>
        <div>
          <h1 className="text-2xl font-semibold border-b pb-2 leading-9">
            {title}
          </h1>
          <div className="py-4 md:w-full">
            <div className="flex justify-between border-b  items-center my-0 mx-0 pb-3 px-0">
              <div className="flex">
                <div className="px-2">
                  <span>
                    <span className="block whitespace-nowrap leading-5 text-md font-medium">
                      <Link href={`/authors/${author.node.slug}`}>{author.node.name}</Link>
                    </span>
                    <span className="block whitespace-nowrap leading-4 text-xs mt-2">
                      {formattedModifiedDate}
                    </span>
                  </span>
                </div>
              </div>
              <ShareIcon id={"databaseId"} slug={"slug"} title={"title"} />
            </div>
          </div>
          <div className="md:flex-shrink-0 imgFill relative h-48 md:h-80">
            <Image
              layout="fill"
              className="h-full w-full rounded-md object-contain md:h-full md:w-full"
              src={
                featuredImage?.node?.sourceUrl
                  ? featuredImage?.node?.sourceUrl
                  : "/education/logo.png"
              }
              alt={featuredImage?.node?.title}
            />
          </div>
          <div className="py-4 md:w-full" id="contentPost">
            <p className="pt-2 text-md md:text-xl md:leading-8 leading-8">
              {contentParse}
            </p>
          </div>

          <div className="storyTags" id="widgetTags">
            {tags.nodes.length &&
              tags.nodes.map((tag: any) => (
                <Link key={tag.databaseId} href={`/topic/${tag.slug}`}>
                  <span className="inline-block p-2 mr-2 mb-2 bg-gray-100 rounded-md">
                    {tag.name}
                  </span>
                </Link>
              ))}
          </div>

          <hr
            className="my-4"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)" }}
          />

          <hr
            className="my-4"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)" }}
          />
          <p className="leading-6">
            <i>
              देश और दुनिया की ताज़ा खबरें सबसे पहले न्यूज़ 24 पर फॉलो करें न्यूज़
              24 को और डाउनलोड करे -
              <a href="https://play.google.com/store/apps/details?id=com.ngbm.news24&hl=en">
                <b> न्यूज़ 24 की एंड्राइड एप्लिकेशन</b>
              </a>
              . फॉलो करें न्यूज़ 24 को
              <a href="https://www.facebook.com/news24channel/" target="_blank">
                <b style={{ color: "#17469e !important" }}> फेसबुक </b>
              </a>
              ,
              <a href="https://t.me/news24hindi" target="_blank">
                <b style={{ color: "deepskyblue" }}> टेलीग्राम </b>
              </a>
              ,
              <a href="https://news.google.com/publications/CAAqBwgKMOSwkwswkeOoAw">
                <b style={{ color: "#db4a39" }}> गूगल न्यूज़ </b>
              </a>
              .
            </i>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};


export default Article;
