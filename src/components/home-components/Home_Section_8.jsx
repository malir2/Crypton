import React from "react";
import mobile from "../../media/mobile.png";
import { motion } from "framer-motion";

function Home_Section_8() {
  const divVariant = {
    initial: {
      x: "40vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const contentVariant = {
    initial: {
      x: "40vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="h-auto pt-[50px] bg-third overflow-hidden">
      <div className="flex lg:flex-col-reverse w-[90%] mx-auto justify-around items-center gap-[120px]">
        <motion.img
          initial={{ y: "60vh", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          src={mobile}
          alt=""
          className="w-[50%] ml-[30px]"
        />
        <motion.div
          variants={divVariant}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          className="ml-[20px]"
        >
          <h1 className=" text-primary font-secondary sm:text-sm">ICO APPS</h1>
          <h1 className=" sm:text-4xl text-gray-950 text-5xl font-secondary mt-[10px] font-extrabold">
            ICO Mobile App
          </h1>
          <p className=" mt-[20px] text-gray-500 text-sm sm:text-[8px] w-[90%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <div className="w-[100%] md:w-[90%] flex flex-col justify-center">
            <ul className="mt-[30px]">
              <motion.li
                variants={contentVariant}
                className="flex text-sm text-gray-500 items-center gap-[10px] mb-[5px]"
              >
                <span>
                  <svg
                    className="w-[30px] h-[30px] fill-primary"
                    fill="#000000"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path>
                    </g>
                  </svg>
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </motion.li>
              <motion.li
                variants={contentVariant}
                className="flex text-sm text-gray-500 items-center gap-[10px] mb-[5px]"
              >
                <span>
                  <svg
                    className="w-[30px] h-[30px] fill-primary"
                    fill="#000000"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path>
                    </g>
                  </svg>
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </motion.li>
              <motion.li
                variants={contentVariant}
                className="flex text-sm text-gray-500 items-center gap-[10px] mb-[5px]"
              >
                <span>
                  <svg
                    className="w-[30px] h-[30px] fill-primary"
                    fill="#000000"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path>
                    </g>
                  </svg>
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </motion.li>
            </ul>
            <button className="text-white bg-primary font-secondary font-semibold h-[50px] w-[200px] sm:text-sm sm:w-[150px] sm:mx-auto rounded-lg hover:translate-y-[-5px] transition-all hover:shadow-[0px_20px_29px_-17px_#16d5ffFF] p-2 mt-[20px]">
              GET THE APP NOW
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home_Section_8;
