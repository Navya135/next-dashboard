import React from "react";
import { useState,useEffect } from "react";
import Image from 'next/image';

export default function Home(showNav, setShowNav) {
  
   const Stories = [
    {
      id:1,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      path:"/image4.jpg"
    },
    {
        id:2,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        path:"/image2.jpg"
    },
    {
        id:3,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        path:"/image3.jpg"
    },
    {
        id:4,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        path:"/image4.jpg"
    },
    {
        id:5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        path:"/image4.jpg"
    },
    {
        id:6,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        path:"/image2.jpg"
    },
    {
        id:7,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        path:"/image3.jpg"
    },
    {
        id:8,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        path:"/image4.jpg"
    },
  ];

  
  return (
    <>
  <div className="px-5 responsive-div row-container" >
  <div className="forum-section column" style={{ marginBottom: "16px" }}>
    <h1 className="title my-3" style={{ color: "red", fontWeight: "bold" }}>DISCUSSION FORUM</h1>
    <h1 className="my-3" style={{ fontWeight: "bold" }}>Filters</h1>
    <div className="rounded bg-white shadow-sm mb-3 ml-4" style={{ borderRadius: "10px" }}>
      <div className="grid grid-cols-1 lg:grid-cols-4" style={{ padding: "3%" }}>
        <div className="content rounded h-8 shadow-sm pt-1 mb-2 lg:mb-0 lg:ml-2" style={{ backgroundColor: "red", borderRadius: "20px", color: "white", textAlign: "center" }}>Sector 1</div>
        <div className="contentrounded h-8 shadow-sm pt-1 mb-2 lg:mb-0 lg:ml-2" style={{ backgroundColor: "blue", borderRadius: "20px", color: "white", textAlign: "center" }}>Sector 2</div>
        <div className="contentrounded h-8 shadow-sm pt-1 mb-2 lg:mb-0 lg:ml-2" style={{ backgroundColor: "yellow", borderRadius: "20px", color: "white", textAlign: "center" }}>Sector 3</div>
        <div className="content rounded h-8 shadow-sm pt-1 mb-2 lg:mb-0 lg:ml-2" style={{ backgroundColor: "grey", borderRadius: "20px", color: "white", textAlign: "center" }}>Search</div>
      </div>
    </div>

    <div className="rounded bg-white h-80 shadow-sm mb-3 ml-4" style={{ borderRadius: "10px", textAlign: "center" }}>
      <div className="image">
      <Image src="/preview.jpg" alt="" width="250" height="250" className="image" style={{ borderRadius: "20px", textAlign: "center", marginLeft: "30%" }} />
      </div>
      <div className="rounded h-8 shadow-sm pt-1" style={{ width: "100px", backgroundColor: "red", marginLeft: "40%", borderRadius: "20px", color: "white", textAlign: "center" }}>Sector 1</div>
      <h3 className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
    </div>

    <div className="rounded bg-white h-40 shadow-sm mb-3 ml-4" style={{ borderRadius: "10px", padding: "40px" }}>
      <div className="content rounded h-8 shadow-sm pt-1" style={{ width: "100px", backgroundColor: "blue", marginLeft: "40%", borderRadius: "20px", color: "white", textAlign: "center" }}>Sector 2</div>
      <h3 className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
      <h3 className="content">Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
    </div>

    <div className="rounded bg-white h-40 shadow-sm mb-3 ml-4" style={{ borderRadius: "10px", padding: "40px" }}>
      <div className="content rounded h-8 shadow-sm pt-1" style={{ width: "100px", backgroundColor: "yellow", marginLeft: "40%", borderRadius: "20px", color: "white", textAlign: "center" }}>Sector 3</div>
      <h3 className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
      <h3 className="content">Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
    </div>
  </div>

  <div className="stories-section column" style={{ marginBottom: "16px" }}>
    <h1 className="my-3 title" style={{ color: "red", fontWeight: "bold",marginLeft:"100px" }}>MARKET STORIES</h1>
    <h1 className="my-3 title" style={{ color: "transparent", fontWeight: "bold" }}>Filters</h1>
    {showNav.showNav ? (
      <div className="story-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center",marginLeft:"35px"}}>
        {Stories && Stories.length && Stories.map((story) => {
          return (
            <div className="image-container" style={{ width: "250px", borderRadius: "20px", marginBottom: "20px", marginRight: "16px" }}>
              <Image src={story.path} alt="" width="250" height="250" style={{ borderRadius: "20px", margin: "0 auto" }} />
              <div className="text-overlay content" style={{ borderRadius: "20px" }}>{story.description}</div>
            </div>
          )
        })}
      </div>
    ) : (
      <div className="story-container" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "16px" }}>
        {Stories && Stories.length && Stories.map((story) => {
          return (
            <div className="image-container" style={{ width: "250px", borderRadius: "20px", marginBottom: "20px",marginLeft:"20px" }}>
              <Image src={story.path} alt="" width="250" height="250" style={{ borderRadius: "20px", margin: "0 auto" }} />
              <div className="text-overlay content" style={{ borderRadius: "20px" }}>{story.description}</div>
            </div>
          )
        })}
      </div>
    )}
  </div>
</div>



    </>
  );
}
