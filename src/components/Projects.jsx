import React from "react";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import Chatapp from "../assets/chatapp.png";
import Extension from "../assets/chrome-extension.png"
import BlogWeb from "../assets/Blogweb.png";

const Cards = ({ image, name, tech, link, github, description }) => {
  return (
    <div className=" bg-white flex flex-1 flex-col items-center mx-2 my-3 p-4 rounded-[20px] border shadow-md">
      <img
        className=" object-shrink rounded-2xl border-2 border-gray-200"
        src={image}
        alt=""
      />
      <div className="flex w-full flex-col mt-5 p-2">
        <div className="flex flex-1 justify-between">
          <h1 className="text-3xl font-bold ">{name}</h1>
          <div className="flex space-x-2">
            <a href={github} target="_blank">
              <AiFillGithub className="text-3xl text-[#6e07f3] hover:text-indigo-700 cursor-pointer" />
            </a>
            {link && <a href={link} target="_blank">
              <AiOutlineLink className="text-3xl text-[#6e07f3] hover:text-indigo-700 cursor-pointer" />
            </a>
            }
          </div>
        </div>
        <span className="text-[#6e07f3] text-xl">{tech}</span>
      </div>
      <p className="text-lg text-gray-500 p-2 mt-3">{description}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-[#6e07f3] h-[45vh] flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white pt-[6rem] pb-[1rem] lg:pt-[10rem]">
          Projects
        </h1>
        <p className="text-white lg:text-xl font-medium px-2 py-2 lg:px-[2.4rem] lg:py-[2.4rem] w-full lg:w-[60rem] xl:w-[70rem] text-center">
        Here is a showcase of my projects, demonstrating my skills and innovations across various challenges and contributions.
        </p>
      </div>
      <div className="relative flex flex-col items-center z-0">
        <div className="h-[20vh] w-full absolute bg-[#6e07f3] -z-10" />
        <div className="w-[90%] flex flex-col lg:flex-row justify-center">
          <Cards
            image={Chatapp}
            name="Talksy Social video Platform"
            tech="React | Socket.io | Nodejs | MongoDB | Redis | Kafka | AI-Chatbot | JWT-Auth | Cloudinary"
            link="https://talksy-frontend.vercel.app/"
            github="https://github.com/SAHIL7163/Talksy-Video-Chat"
            description="Talksy is a scalable real-time social video platform that enables seamless messaging, video calling, file sharing, status updates, and threaded discussions, paired with 32 customizable UI themes for a personalized experience. Built on a Dockerized microservices architecture with an NGINX reverse proxy, the platform ensures efficient routing and load balancing. Real-time communication is powered by Apache Kafka, reducing message latency from 120ms to 30ms, while Redis Pub/Sub keeps multiple backend servers perfectly synchronized. Talksy also provides secure user authentication and media handling through AWS S3 presigned URLs for protected uploads. The platform features a RAG-based AI assistant integrated with OpenAI, Kafka, and a vector database, enabling intelligent, context-aware responses to enhance user interaction."
          />
          <Cards
            image={BlogWeb}
            name="Daily Blog WebApp"
            tech="React | Nodejs | Express | MongoDB | JWT-Auth | Cloudinary | Bootstrap | Payment Gateway"
            github="https://github.com/SAHIL7163/MERN-BLOG-SITE"
            link="https://blogsite-3gsy.onrender.com/"
            description="Developed a full-stack, responsive blog platform featuring JWT-based authentication and Google Sign-In for seamless login, with role-based access control enabling users to create, edit, or delete blogs according to their role. Enhanced engagement through likes, dislikes, comments, and file uploads, while integrating Stripe payments for subscription-based premium content. Implemented PersistLogin to maintain user sessions and improve user experience. The platform is built using HTML, CSS, Bootstrap, React, Node.js, Express, and MongoDB,.
"
          />
          <Cards
            image={Extension}
            name="Smart Shop Extension"
            tech="HTML | CSS | JavaScript | Chrome Extension | AI-API"
            // link="https://sadakapp.streamlit.app/"
            github="https://github.com/SAHIL7163/smart-shop-extension"
            description="Developed a Chrome Extension that helps users make smarter shopping decisions by analyzing their Amazon cart items and providing AI-powered recommendations for cost-effective or higher-quality alternatives. The extension displays relevant product images, prices, and URLs, allowing users to quickly compare options and optimize their purchases. Built with a focus on usability and seamless integration into the Amazon interface, it enhances the shopping experience by combining automation and AI insights"
          />
        </div>
      </div>
      <div className="flex item-center justify-center my-20">
        <a href="https://github.com/SAHIL7163" target="_blank">
          <button className="flex text-[11px] lg:text-[22px] border-2 border-indigo-400 text-indigo-400 px-3 lg:px-5 py-2 lg:py-3 rounded-full hover:text-white hover:bg-indigo-400">
            <AiFillGithub className="text-lg lg:text-3xl mr-2" />
            Check out more Projects Here
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
