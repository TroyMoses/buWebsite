import React from "react";
import PostCard from "./PostCard";

export default function LatestPosts() {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* Heading */}
      <h1 className="heading">Latest Posts</h1>

      <div className="mx-auto w-[80%] mt-[3rem]">
        {/* Post card1 */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <PostCard
            title="THE PLAYOFFS, WHAT TO EXPECT FROM BUGEMA PANTHERS VOLLEYBALL CLUB"
            image="/images/n1.jpg"
            date="21 March 2024"
          />
        </div>

        {/* Post card2 */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <PostCard
            title="THE PLAYOFFS, WHAT TO EXPECT FROM BUGEMA PANTHERS VOLLEYBALL CLUB"
            image="/images/n2.jpg"
            date="22 March 2024"
          />
        </div>

        {/* Post card3 */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <PostCard
            title="THE PLAYOFFS, WHAT TO EXPECT FROM BUGEMA PANTHERS VOLLEYBALL CLUB"
            image="/images/n3.jpg"
            date="23 March 2024"
          />
        </div>

        {/* Post card4 */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <PostCard
            title="THE PLAYOFFS, WHAT TO EXPECT FROM BUGEMA PANTHERS VOLLEYBALL CLUB"
            image="/images/n4.jpg"
            date="24 March 2024"
          />
        </div>
      </div>
    </div>
  );
}