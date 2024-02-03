import React from "react";

import "../App.css";
function AboutMe() {
  return (
    <div className="aboutMe max-md:w-screen lg:h-screen lg:flex-col  pt-10 lg:pt-0 lg:border">
       <div className="title text-5xl lg:text-7xl mb-5 text-center text-blue-950 ">
          Naive Feelings
        </div>
        <div className="lg:flex-row flex flex-col">

        
      <section className="flex  flex-col justify-center w-full lg:w-1/2 items-center  ">
       
        <div className="h-1/2  border-2 mb-4 border-stone-50 rounded-lg shadow-lg shadow-black w-2/3
        lg:h-full lg:py:2 lg:w-2/3 lg:object-fill lg:px-7 lg:border-none lg:shadow-none
        ">
          <img className="rounded-md h-full w-full
          lg:shadow-2xl lg:shadow-black "
            src="https://i.pinimg.com/736x/73/83/a7/7383a7068a4e29c931a445bbefede3bb.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="aboutText  p-4 lg:w-1/2 text-white font-bold text-2xl lg:text-3xl lg:pl-9 lg:pr-9 lg:flex flex-col space-y-5 justify-center lg:text-violet-950"  >
        <p className="text-center">
        Greetings, fellow poetry lovers! I'm Bhaskar Mishra, a soul with an affinity for weaving emotions into verses.
        </p>
        <p className="text-center">Welcome to Naive Feelings — a vibrant community where poetry comes to life! Here, you have the opportunity to immerse yourself in the world of verse, whether you're an avid reader or a budding poet.</p>
        <p className="text-center">Dive into a diverse collection of poems contributed by talented poets from around the globe. Explore various themes, styles, and emotions as you discover the richness of poetic expression.
       </p>
        
      </section>
      </div>
    </div>
  );
}

export default AboutMe;
