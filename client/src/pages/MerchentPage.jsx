import React from "react";
import NavigationBar from "../components/NavigationBar";
import UserSidebar from "../components/UserSidebar";
import MidMaxBlock from "./MidMaxBlock";

const Pages = () => {
  // Sample data as JSON object
  const data = [
    {
      rowTitle: "Liked",
      items: [
        "Supercar Blondy",
        "CranCo Official",
        "Fashionista Life",
        "Foodie Adventures",
        "Travel Enthusiast",
        "Tech Guru",
        "Fitness Freaks",
        "Nature Lovers",
      ],
      dis: ["Micle Jason",],
      image: ["girl.png"],
      action : ["View"]
    },
    {
      rowTitle: "Invitation",
      items: [
        "Party Time",
        "Music Fest",
        "Art Exhibition",
        "Community Meetup",
        "Charity Event",
        "Movie Night",
        "Gaming Tournament",
        "Book Club",
      ],
      dis: ["Event Lover",],
      image: ["girl.png"],
      action : ["accept"]
    },
    {
      rowTitle: "Discover",
      items: [
        "Exploring Wonders",
        "Hidden Gems",
        "Local Delights",
        "Historical Sites",
        "Thrilling Adventures",
        "Culinary Journey",
        "Architectural Marvels",
        "Artistic Expressions",
      ],
      dis: ["Adventure Seeker"],
      image: ["girl.png"],
      action : ["check"]
    },
    {
      rowTitle: "Trending",
      items: [
        "Viral Videos",
        "Hot Gossips",
        "Latest Memes",
        "Inspirational Quotes",
        "Fitness Challenges",
        "DIY Projects",
        "Fashion Trends",
        "Cooking Hacks",
      ],
      dis: ["Trend Watcher"],
      image: ["girl.png"],
      action : ["check"]
    },
    
  ];
  



  return (
    <>
      <NavigationBar />
      <body>
        <div className="div-1">
          <div className="div-left">
            <UserSidebar />
          </div>
          <div className={`div-max-middle `}>
            {data.map((blockData, index) => (
              <MidMaxBlock key={index} rowTitle={blockData.rowTitle} items={blockData.items} dis={blockData.dis} image={blockData.image} action={blockData.action} />
            ))}
          </div>
        </div>
      </body>
    </>
  );
};

export default Pages;
