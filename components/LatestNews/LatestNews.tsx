import React from "react";
import NewsCard from "../Helper/NewsCard";
import SmallNewsCard from "../Helper/SmallNewsCard";

export default function LatestNews() {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* Heading */}
      <h1 className="heading">Latest News</h1>
      <div className="w-[80%] mx-auto pt-[4rem] grid grid-cols-1 md:grid-cols-5 gap-[2rem]">
        {/* Big Card */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="col-span-3"
        >
          <NewsCard
            image="/images/n1.jpg"
            date="April 11 , 2024"
            title="What is new in the Football Team"
            height="h-[400px]"
          />
        </div>

        {/* Small Card */}
        <div className="col-span-2">
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <SmallNewsCard
              image="/images/n1.jpg"
              date="April 11 , 2024"
              title="In The Panthers"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
            className="mt-[1.4rem] mb-[1.4rem]"
          >
            <SmallNewsCard
              image="/images/n2.jpg"
              date="June 20 , 2024"
              title="In Basketball Team"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="600"
          >
            <SmallNewsCard
              image="/images/n3.jpg"
              date="July 03 , 2024"
              title="In Netball Team"
            />
          </div>
        </div>
      </div>
    </div>
  );
}