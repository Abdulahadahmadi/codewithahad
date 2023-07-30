"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Testimonial = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="w-full bg-gray-200 py-10">
      <h1 className="text-xl md:text-2xl lg:text-4xl text-cyan-500 text-center">
        Testimonial
      </h1>
      <p className="text-2xl md:text-4xl lg:text-6xl text-center font-bold my-8">
        What People Say's About Me
      </p>
      <div className="flex flex-col md:flex-row justify-center">
        <section className="w-64 h-64 md:w-96 md:h-80 bg-white md:m-10 rounded-xl shadow-xl   md:p-8 hover:bg-cyan-500 hover:decoration-gray-100 hover:cursor-pointer rotate-12 animate-pulse">
          <p>
            Abdul Ahad Ahmadi is a prestigious member of any team as he always
            dedicates all into work and I really like how he's knows about
            bleeding-edge technologies. He always works so hard and comes with
            best-practices about front-end. I recommend him to anybody who likes
            a highly-skilled employee.
          </p>
          <div className="flex flex-row justify-between mt-2">
            <Image
              src="https://media.licdn.com/dms/image/D4D03AQHJjt2dMbzdYA/profile-displayphoto-shrink_200_200/0/1676427445015?e=1695859200&v=beta&t=-OHzEUNx-8dmdwB5sgHzP0kBeKdF2YqWa0D16gpKPBE"
              alt="profile"
              width={50}
              height={50}
              className="object-cover object-center rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold">Ali Gulzar</span>
              <span className="text-gray-600">
                Full Stack Software Developer
              </span>
            </div>
          </div>
        </section>

        <section className="w-80 h-64 md:w-96 md:h-96 bg-white m-10 rounded-xl  shadow-xl p-8 hover:bg-cyan-500 hover:decoration-gray-100 hover:cursor-pointer rotate-12 animate-pulse">
          <p>
            Abdul Ahad Ahmadi is a passionate and hardworking programmer with a
            creative mind. Abdul Ahad has helped me on many projects and it was
            very helpful to have him around. He is the go-to resource for me
            whenever I have any issue on my projects. I really appreciate his
            help and being such a friendly person. As someone who has helped me
            a lot not only with my projects but about the sources and paths to
            take to improve my programming skills, I hardly recommend him.
          </p>
          <div className="flex flex-row justify-around mt-2">
            <Image
              src="https://media.licdn.com/dms/image/C5603AQFOa7qV9dMmsg/profile-displayphoto-shrink_200_200/0/1652988970949?e=1695859200&v=beta&t=yPhoVfWZNME_opJtedZy8jOPP4uaOsYxpjjyU3HQq0I"
              alt="profile"
              width={50}
              height={30}
              className="object-cover object-center rounded-full mr-6"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold">Khudadad Khawari</span>
              <span className="text-gray-600">
                Software Developer | ML & Data Science enthusiast
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Testimonial;
