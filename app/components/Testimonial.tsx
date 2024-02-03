"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonial = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div className="w-full py-10">
      <h1 className="text-xl md:text-2xl lg:text-4xl text-cyan-500 text-center">
        Testimonial
      </h1>
      <p className="text-2xl md:text-4xl lg:text-6xl text-center font-bold my-8">
        What People Say's About Me
      </p>
      <div className="flex flex-col md:flex-row justify-center">
        <Link target="_blank" passHref href='https://www.linkedin.com/in/ahad-ahmadi-1a7295175/'  data-aos="zoom-in-up" data-aos-duration="500">
          <section className="md:max-w-md   m-4 md:m-10 rounded-xl shadow-xl p-6 md:p-8 hover:bg-cyan-500 hover:text-white hover:decoration-gray-100 hover:cursor-pointer md:rotate-12 mt-6">
            <p className="text-sm md:text-md ">
              Abdul Ahad Ahmadi is a prestigious member of any team as he always
              dedicates all into work and I really like how he's knows about
              bleeding-edge technologies. He always works so hard and comes with
              best-practices about front-end. I recommend him to anybody who likes
              a highly-skilled employee.
            </p>
            <div className="flex flex-row justify-between mt-2">
              <Image
                src="https://media.licdn.com/dms/image/D4D03AQHJjt2dMbzdYA/profile-displayphoto-shrink_400_400/0/1676427466178?e=1712188800&v=beta&t=U_bTsefaCeoMLjU2qk1Sq2xtWuqoVQIJ_k1ta40Tw2U"
                alt="profile"
                width={70}
                height={70}
                className="object-cover object-center rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-md md:text-lg font-bold">Ali Gulzar</span>
                <span className="text-xs md:text-md">
                  Full Stack Software Developer
                </span>
              </div>
            </div>
          </section>
        </Link>

        <Link target="_blank" passHref href='https://www.linkedin.com/in/ahad-ahmadi-1a7295175/'  data-aos="zoom-in-up" data-aos-duration="500">  
          <section className="md:max-w-md m-4 md:m-10 rounded-xl shadow-xl p-6 md:p-8 hover:bg-cyan-500 hover:text-white hover:decoration-gray-100 hover:cursor-pointer md:rotate-12 ">
            <p className="text-sm md:text-md ">
              Abdul Ahad Ahmadi is a passionate and hardworking programmer with a
              creative mind. Abdul Ahad has helped me on many projects and it was
              very helpful to have him around. He is the go-to resource for me
              whenever I have any issue on my projects. I really appreciate his
              help and being such a friendly person. As someone who has helped me
              a lot not only with my projects but about the sources and paths to
              take to improve my programming skills, I hardly recommend him.
            </p>
            <div className="flex flex-row justify-between mt-2">
              <Image
                src="https://media.licdn.com/dms/image/C5603AQFOa7qV9dMmsg/profile-displayphoto-shrink_400_400/0/1652988972290?e=1712188800&v=beta&t=fMY7qCH3v-0EZ7cILETlcTnz4AngrSaI_mWUdoKtKcY"
                alt="profile"
                width={70}
                height={70}
                className="object-cover object-center rounded-full mr-6"
              />
              <div className="flex flex-col">
                <span className="text-md md:text-lg font-bold">Khudadad Khawari</span>
                <span className="text-xs md:text-md">
                  Software Developer | ML & Data Science enthusiast
                </span>
              </div>
            </div>
          </section>
        </Link>

        <Link target="_blank" passHref href='https://www.linkedin.com/in/ahad-ahmadi-1a7295175/'  data-aos="zoom-in-up" data-aos-duration="500">  
          <section className="md:max-w-md m-4 md:m-10 rounded-xl shadow-xl p-6 md:p-8 hover:bg-cyan-500 hover:text-white hover:decoration-gray-100 hover:cursor-pointer md:rotate-12 ">
            <p className="text-sm md:text-md ">
            I had the pleasure of working with Ahad Ahmadi. He is a frontend developer with expert knowledge of React JS and Next JS. He is always eager to learn new technologies and improve his skills. He is also a friendly guy who gets along well with everyone on the team.
            Ahad is very active and attends/attended several coding competitions. He always takes on new challenges and deliver high-quality results.
            I highly recommend Ahad for any frontend development role. He is an asset to any organization and a great colleague to work with.
            </p>
            <div className="flex flex-row justify-between mt-2">
              <Image
                src="https://media.licdn.com/dms/image/D4D03AQHClAkQLKu86g/profile-displayphoto-shrink_400_400/0/1699167147576?e=1712188800&v=beta&t=o5zgnarJ-2QcK_rT9Y_OxEY9jTZ3N8swr6rqDaq05ss"
                alt="profile"
                width={70}
                height={70}
                className="object-cover object-center rounded-full mr-6"
              />
              <div className="flex flex-col">
                <span className="text-md md:text-lg font-bold">Shahryar Tayeb</span>
                <span className="text-xs md:text-md">
                Full-Stack Software Engineer | JavaScript - Python - PHP - Database Design
                </span>
              </div>
            </div>
          </section>
        </Link>

      </div>
    </div>
  );
};

export default Testimonial;
