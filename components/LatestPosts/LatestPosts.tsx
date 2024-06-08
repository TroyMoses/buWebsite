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
            image="/images/fooball4.jpeg"
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
            title="THE JAGUARS INVITE UCU FOR A FRIENDLY TO PREPARE FOR THE SECOND ROUND."
            image="/images/volleyballgals.jpg"
            date="22 March 2024"
          />
        </div>

        {/* Post card3 */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <PostCard
            title="THE NETBALL TEAM IS READY FOR THE NATIONAL LEAGUE YET TO BEGIN SOON."
            image="/images/netballteam.jpg"
            date="24 March 2024"
          />
        </div>

        {/* Post card4 */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <PostCard
            title="THE BASKETBALL TEAM EMERGE WINNER OF THE UNIVERSITY CHAMPIONSHIPS."
            image="/images/basketball.webp"
            date="23 March 2024"
          />
        </div>

      </div>
    </div>
  );
}