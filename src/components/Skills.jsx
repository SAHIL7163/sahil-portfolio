import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineCode } from "react-icons/ai";
import { LuBrainCircuit } from "react-icons/lu";
import { GiArtificialIntelligence } from "react-icons/gi";

function Skills() {
  return (
    <div className="flex flex-col items-center relative w-full">
      <div className="absolute h-[25vh] bg-[#6e07f3] w-full" />
      <div className="z-20 border border-indigo-100 flex flex-col lg:flex-row bg-white w-[90%] rounded-[15px] shadow-xl">
         <div className="flex-1 lg:border-r border-b flex flex-col items-center border-indigo-100 space-y-8 py-10">
          <AiOutlineCode className="text-7xl p-3 text-black-600 bg-[#5be9b9] rounded-full" />
          <h1 className="lg:text-2xl text-lg font-bold mx-5 text-center text-indigo-800">
            Full Stack Development
          </h1>
          <p className="text-center text-gray-600 font-semibold text-sm lg:text-lg px-5">
            Full-stack web developer with expertise in both front-end and
            back-end technologies, creating robust and responsive web
            applications.
          </p>
           <div className="flex flex-col items-center space-y-12">
  {/* Frontend */}
  <div className="flex flex-col items-center space-y-4">
    <h3 className="text-center text-indigo-800 font-semibold text-lg px-5">
      Frontend
    </h3>
    <div className="flex items-center space-x-4 pt-4">
            <img
        alt="react"
        src="data:image/png;base64,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"
        className="h-12 w-12"
      />
      <img
        alt="javascript"
        src="https://ih1.redbubble.net/image.316760221.5828/flat,800x800,075,f.jpg"
        className="h-12 w-12"
      />
      <img
        alt="typescript"
        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
        className="h-12 w-12"
      />

      {/* <img
        alt="tailwind"
        src="https://iconape.com/wp-content/files/an/351546/png/tailwind-css-logo.png"
        className="h-12 w-12"
      /> */}
      <img
        alt="html"
        src="https://world-it.ro/images/logo_html.png"
        className="h-12 w-12"
      />
      <img
        alt="css"
        src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
        className="h-12 w-12"
      />
    </div>
  </div>

    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-center text-indigo-800 font-semibold text-lg px-5">
        Backend
      </h3>
      <div className="flex flex-col space-y-4 pt-4">
        {/* First row */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <img
            alt="node"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            className="h-12 w-12"
          />
          <img
            alt="express"
            src="data:image/png;base64,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"
            className="h-12 w-12"
          />
          <img
            alt="django"
            src="https://static.djangoproject.com/img/logos/django-logo-positive.png"
            className="h-12 w-12"
          />
          <img
            alt="mongo"
            src="https://www.svgrepo.com/show/331488/mongodb.svg"
            className="h-12 w-12"
          />
          <img
            alt="mysql"
            src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
            className="h-12 w-12"
          />
        </div>
        {/* Second row */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <img
            alt="postgresql"
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
            className="h-12 w-12"
          />
          <img
            alt="docker"
            src="https://www.svgrepo.com/show/331370/docker.svg"
            className="h-12 w-12"
          />
          <img
            alt="redis"
            src="https://www.svgrepo.com/show/303460/redis-logo.svg"
            className="h-12 w-12"
          />
          <img
            alt="kafka"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAhFBMVEX///8AAADS0tIqKirAwMB6enrk5OTv7++GhobT09ONjY1dXV329vb7+/vp6emfn5/c3NzZ2dmysrJycnKTk5O6uro2NjZUVFSjo6PHx8esrKwwMDDm5uZiYmKZmZlsbGxQUFBDQ0MUFBRJSUkXFxcfHx+AgIAMDAx3d3ciIiI1NTU9PT04l3A4AAAKrklEQVR4nO1d6WKyOhAt1oq2YHHBpSpqbbX9+v7vd+vCzCSZYMAFepnzz8gSTpLJbEkeHgQCgUAgEAgEAoFAIBAIBAKBQCAQEISB34mCoOxq/CkE8dfIO2A8jMquzF9BkHx6BKtp2RX6E2i+exoWMlbPYquTtkej7FpVHQOONc+TgZqJL5416W+ZmNhY83Z+2XWrLrpW1n7nhbIrV128UJ7Gy+U/GaYOiAhJk73SEUZLQmPZ1asqnoCiEUiyPvLWKrNu1UX4mBL0GGJpDLS9lle1KgPHqCLGYJyuy6pYtdHn+ekAmyXVq+J4hulALZ+l5aK6cYAZoamWr9LyXjn1qjiANk1DE9oy0U7p6avlP6KBZAEM0oFSjBZXSfWqOBrAj+KWBDbfy6pYteGDW3dJSue7tHRbWs2qjTF0twTKghEUiquSRxMY8pYnHW0Kfc37ZO4Iu/HrcJj0WyHzZ21AI1aDSSMebkjBxLi81wYr9vupxn4l0t0MPOrhq/mLesG4vmrdwk6bLtkS85J2KXWuAIKZScYRiXph+MJdtKlrQLVlYW2gXffDX/ZTV95QTcsafkvuoj1q6zkPGfmmGakZcUFvWEqlq4DmSGVioPvZsuKCdbb3m9jjZs9mphZNExkPm3FC54d6x1NPhlaT+ctHjh47x6KIdNBaJ8SdOhCn+6Nke8FCnCSe71bHCiKDNlA+ZgFX+nOvKlYRGbRBv1JGMHrr5neqYhVhp60Hgk0tB7P+7rZp0GvEcTV8MHbawN5fquXDtFzX8lJMXo/gppnC8N9Os/5BS2olx1ckZfV4O23TlB5Ns52co+3j9L9uqF2AENrqSBs0aVluLIfepk2Zr+doS0fx09Uq6RPTuBq02fU26G2a/Qn5q7ZBeHXaQmrOlE9ba0jqs+xrXg1wkmh5qXCHTd+9Om1tj6Bs2qZjT0O7q1wA5YoP7i0tfbelilybNl+pZLm0RRuPgeI4QguUqBroqFvZHn1t2qChvO9kOj0oIGXRxri6j10IHBsBNeSBt9YHlL3Znn1t2qD50HtQEm2sq/uI0/z4ppa2DwqS/0yKrA7ea9OWvpDI2FJoC1deBvYBv6npDF8tB4owtFvyt6KNOBRKoW2dxdpvf/MzAlsAu5FzZdpgRiANVQZt1gBBHmRkPOSkLWxFUZQR0rkCbaHfi6ILMwreDArsYOM0eyQZL+BoC1oAeqnfH6R5PIP4SF16mX+6bQ4uhW0Xbmdp67aUe1O0hqkkH207amVyxN9ULcjzNk/t7eLTYzHwLUGYzAAMQ1uILyC5Ei11wdzHIbMfSFLoQVj1tileQ5qmqWqnh7XGfebuc1CH6OuxYcIGI85mvQdlmQciq6+xtK051trGc0dzpK2dkzaytAdZ65qT3xdZgtFxZi3SHgHoPKqP/zhpIi1jUp2deZtJG+o7uFSk+6g/9/ghBWmb4xWonLNtPipCGx0X6nKXgNoNu2cc928KcTMzI+kcbfhOlOo9jwcEGfPR5mMjYAe06PSL/LT5qOUbi4RCkhiizoKN9snmH22n5+cjnTYcjJinqXR6inVawVy0BWv4H6d4a3AcLnamjdTjxfiTdHQjf/d3Du913aZwjTasPfotA8scRJCLNhRh6M3KykbLSxsxNLvmv+hDvSRQoNKG8oU411XjbrTZbIwUqANt834cg8K0aMZxfHRvabTh49B1qmoMn+vNZm20lTNtKL+WzL8keyHOT1cKhTZUCzZ4BdEVvE3/2H7R67dJ2x5BWkK0HpU2XOhJ3At0D4VB40B20NC2CHClLcBbWN8sNtsFqX+UNpRhGzLCyRxDPjSgjgKswFkrASU/UYyI8PxH/KktxV9WgDZWQ8ZRako+ZxDacKTMCGuks6keYlzTmoM2tHqodwE7m/YltBe60kYGPPs/itELEtiQNh+kyT/aSqha6xKUGH6utGGV6ewfQimRDUcQuepKG4bUedqwH1yBtu3DOn2aEo7AtjPXSaMN40ZbD7+I6u6k3xoJZWTEVbK3fUGveleiwNA23+a9OCm50TYBPVQdiwPmphQQsbyBbLsgfc20mlQJBi/h7A2g2o02WzPDpMPEiZCEa82k6C64wkyaYqdJMNAXGM0RCclH20rVxMEY+sdVELqis96G6vTt9bYUugRL22bEGR1AUj7atBaA+Brrq4FRWsRKYJJvieJ0BSshxYc2UFKDgJcDxWjTOgE4CtjwGgjXO9ik817P0a1syLYV/z/X34vSpvEDtLGiCFTh23pAQvCAzHJ5QEAjV53B1+xtaCEo0w7Qxqb3wN3u/ja03/SZTPW3DYm/TUnEn1nDyilAb0NRqXifU9m25loApJKj3gZyipohZ2QbTOUFvbu0T9m8u5G2euG3gmdc8GgloM+IfhPY01wSCeiprlYCNDZNp4MF2oaNsAfYCe60abGEJCOW8LOfFtg4l3MsAZ5K1SpobK7fAguutKEGTx8HehujnuIdOWjTI1c/g/Z2YQnsXRy5CuDBhGmYyJhcc8zMcTblcXog4g06B1NT1Olz0HbfOCkauTiyseFMgY2d3t1xBOKaLFeHsW5uGkn6TR7a7huVx0ACDhf0QejfREJN7rThxmoo3pAbY74u4AE5IjNzZp8DkpGQBHDNAQFhtTI/2vtWeaPqmDttZJpD8YbdVsu8pvln+WgjcR4G+/HHZRwNimUcobRKjCt+xxXttYogzUEbuRHEG3GRLUjbqFlB+WhzyW/T5oLhwejzaeTRNb8NZSmINxr2XaQxu1jN78xDG7og0HQnn7h7PhmSraEqrPPSdtdsSviAb2Ba7czrp+3S6N65aPOBDrDY1GXtny/b7UvxyBXgjrm7mDcDZnDmAt8CtBGpCLNzxtLr4rTdM1Mc5QyYwdbY76MSlXemjUh6EG+WbdN/zZxLaNsPdTI0brkuAR1SUFGb9ggU56QNp5kfmOMtEnwE7y5G2x73WQUDEuET2oaGmBH9nB4QpA2lB8Zi2MMNdkGBjCMd+ddcnV2qxtDGaZ9dQ0h4u2ZexxGpN/Zf9Ew3zVyTjV8kUUvHDVb4pbMa1TNR5aApCWv1iw5bQ6Q/IDvJdJMT24nWG1UyFB/BUD2DZDd5KJZNqeEG60k7jSNaXGFDeVPvGUTSKOkqF2KMsGGUPPhpGZXHAbyCvjmMSYC+H1rvzofyVy/3mnHcvO1KaL8Rx/H0mjuX5F4rj5tBy1r5HDszrNNS2Zkhxz4gKChqvQ+I264zs5PsidZYVt9dZ5rosZQ9jlyh76i1lB21zuPC/duyg1f/W7jtFmh1IlyQo/qX4bo3JeuVo16GWsG37oSqGaAhG+ba1JO1PPvuvpqX1HXf3Yt2eX6p7S7PJFvLG7x1psqe4mb6dm9L9hQv7qP662B2sG/gxPrB3LHfwT5Jkv68rtsU78Gel4BhBTkvgQWezkHVDTmd4wzkLJhCkJOHCkHOuSoEOVWtEOQMv0KQEyMLAaKr6jouOZ80G3IabiGQs5eJ4obpBnL2Mg856bsQ5Fz5YlC8lOPl8h/9XePT5s4gK5LHr/IU7GFfQGQuthEgvmy0iYWQCUsEVFyUZ/AkrBVC810nbVHnSIEzgkTJo15JV3NEEH+d3B7jYX3T1YogDPxOFMjoFAgEAoFAIBAIBAKBQCAQCAQCgaB++A/yGIceK0Ai6AAAAABJRU5ErkJggg=="
            className="h-12 w-12"
          />
          <img
            alt="aws"
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
            className="h-12 w-12"
          />
        </div>
      </div>
    </div>
</div>

        </div>
        <div className="flex-1 lg:border-r border-b flex flex-col items-center border-indigo-100 space-y-8 py-10 ">
          <BsCodeSlash className="text-7xl p-3 text-black-600 bg-[#5be9b9] rounded-full" />
          <h1 className="lg:text-2xl text-lg font-bold mx-5 text-center text-indigo-800">
            Competitive Programming
          </h1>
          <p className="text-center text-gray-600 font-semibold text-sm lg:text-lg px-5">
            Skilled in competitive programming, consistently delivering
            optimized solutions in coding challenges and contests.
          </p>
          <div>
            <h3 className="text-center text-indigo-800 font-semibold lg:text-lg px-5">
              Languages I use:
            </h3>
            <div className="flex items-center space-x-4 pt-4">
              <img
                alt="c++"
                src="https://img.icons8.com/?size=100&id=40669&format=png&color=000000"
                className="h-12 w-12"
              />
                <img
                  alt="python"
                  src="https://th.bing.com/th/id/OIP.ywwpmPTIExm5SU8gUHesQwHaHa?pid=ImgDet&rs=1"
                  className="h-12 w-12"
                />
              <img
                alt="java"
                src = "data:image/png;base64,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"
                className="h-12 w-12"
              />
            </div>
          </div>
          <div>
            <h3 className="text-center text-indigo-800 font-semibold text-lg px-5">
              My Coding Profiles:
            </h3>
            <div className="flex  items-center space-x-4 pt-4">
              <a href="https://leetcode.com/u/sahil7163/" target="_blank" rel="noreferrer">
                <img
                  src="https://leetcode.com/static/images/LeetCode_logo.png"
                  alt="leetcode"
                  className="h-12 w-12 pt-[3px]"
                />
              </a>
              <a href="https://www.naukri.com/code360/profile/sahil_12" target="_blank" rel="noreferrer">
                <img
                  src="https://assets.about.me/background/users/c/o/d/codingninjascoupon_1697698649_683.jpg"
                  alt="codeforces"
                  className="h-14 w-14 mx-2"
                />
              </a>
              <a href="https://www.geeksforgeeks.org/user/sahildhameja13/" target="_blank" rel="noreferrer">
                <img
                  src="https://img.icons8.com/?size=100&id=AbQBhN9v62Ob&format=png&color=000000"
                  alt="geeksforgeeks"
                  className="h-12 w-12 mx-2"
                />
              </a>
              <a href="https://www.codechef.com/users/dhameja_sahil" target="_blank" rel="noreferrer">
                <img
                  src="https://i.pinimg.com/236x/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6--programming.jpg?nii=t"
                  alt="codechef"
                  className="h-12 w-12"
                />
              </a>
            </div>
          </div>
        </div>
       
        {/* <div className="flex-1  flex flex-col items-center space-y-8 py-10">
          <GiArtificialIntelligence className="text-7xl p-3 text-black-600 bg-[#5be9b9] rounded-full" />
          <h1 className="lg:text-2xl text-lg font-bold mx-5 text-center text-indigo-800">
            AI & ML
          </h1>
          <p className="text-center text-gray-600 font-semibold text-sm lg:text-lg px-5">
            In the realm of artificial intelligence, I am a dedicated deep
            learning enthusiast. My passion drives me to master neural networks,
            ensuring I remain at the forefront of AI innovation. Proficiency in
            designing and training advanced neural networks equips me to develop
            cutting-edge solutions for diverse applications.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-center text-indigo-800 font-semibold text-lg px-5">
              Tools I use:
            </h3>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-4 pt-4">
                <img
                  alt="python"
                  src="https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2019/11/python-logo.png"
                  className="h-12 w-12"
                />
                <img
                  alt="numpy"
                  src="https://avatars2.githubusercontent.com/u/288276?s=280&v=4"
                  className="h-18 w-16"
                />
                <img
                  alt="pandas"
                  src="https://static.javatpoint.com/tutorial/pandas/images/python-pandas.png"
                  className="h-18 w-16 object-fill content-end"
                />
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <img
                  alt="tensorflow"
                  src="https://i1.wp.com/albertfattal.com/wp-content/uploads/2018/03/Tensorflow_logo.svg.png?ssl=1"
                  className="h-12 w-12"
                />
                <img
                  alt="kaggle"
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/189_Kaggle_logo_logos-512.png"
                  className="h-12 w-12"
                />
                <img
                  alt="jupyter"
                  src="https://i0.wp.com/crowintelligence.org/wp-content/uploads/2021/04/1200px-Jupyter_logo.svg_.png?fit=800%2C928&ssl=1"
                  className="h-12 w-12"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Skills;
