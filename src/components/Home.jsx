import React from "react";
import { ThreeDCardDemo } from "../test";
import Hoveringimage from "./Hoveringimage";
import Hoveringaiaudit from "./Hoveringaiaudit";
import Hoveringaiproduct from "./Hoveringaiproduct";
// import NumberTicker from "./src/number-ticker";
import NumberTicker from "./ui/number-ticker";
import Marqueee from "./Marqueee";
import Ytdiv from "./Ytdiv";
import Theyaboutus from "./Theyaboutus";

const Home = () => {
  return (
    <>
      <div className="flex justify-end bg-gradient-to-r from-[#101115] to-[#061241] h-[600px]">
        <div className="flex-wrap mr-14 mt-24">
          <div className="w-[150px] border-t-4 border-white mt-16"></div>
          <h1 className="text-white font-extrabold text-3xl pt-10 mt-0">
            Leveraging Advanced AI
            <br />
            Technologies to Unleash Business
            <br />
            Potential
          </h1>
          <p className="text-white ml-0 mt-3">
            {" "}
            {/* Set margin-left to 0 */}
            We are an AI automation agency focused on simplifying the
            integration
            <br />
            of AI into your business operations.
          </p>
          <button className="bg-white h-14 w-96 mt-10 rounded-lg hover:text-white hover:shadow-[inset_25rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]">
            Tell us about your project➜
          </button>
        </div>

        <div className="mr-24 mt-24">
          {" "}
          {/* Added mt-[1px] for 1px gap */}
          <ThreeDCardDemo />
        </div>
      </div>
      <div className="flex">
        <div className="bg-[#F4F4FF] h-[500px] w-[450px] pt-32">
          <div className="flex items-center ml-20">
            {" "}
            {/* Flex layout to align the line and text */}
            <div className="w-[150px] h-[3px] bg-[#101115]"></div> {/* Line */}
            <span className="text-[#101115] text-sm font-bold ml-4">
              AI AUTOMATION AGENCY
            </span>{" "}
            {/* Text next to the line */}
          </div>
          <h1 className="font-[#101115] text-6xl font-semibold pt-[50px] pl-20">
            Who we are
          </h1>
          <button className="bg-[#101115] w-32 h-10 text-white rounded-lg mt-10 ml-20 border border-transparent hover:border-[#101115] hover:text-[#101115] hover:shadow-[inset_25rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow,border-color]">
            About Us➜
          </button>
        </div>
        <div className="mt-44 ml-44">
          As an AI Automation Agency, Prompt Advisers focuses on leveraging
          artificial
          <br />
          intelligence to automate and enhance various business processes.
          <br />
          <br />
          From crafting custom AI solutions tailored to niche industries to
          securing your
          <br />
          digital landscape through our unique LLM Security Program, we are
          dedicated to
          <br />
          harnessing the power of AI to propel your business forward.
          <br />
          <br />
          With over a decade of experience and a commitment to making AI
          accessible for
          <br />
          businesses of all sizes, Prompt Advisers is your trusted partner in
          navigating the
          <br />
          rapidly evolving world of artificial intelligence.
        </div>
      </div>
      <Hoveringimage />
      <Hoveringaiaudit />
      <Hoveringaiproduct />
      <div className="bg-[#FFFFFF] h-[1600px]">
        <div>
          <div className="flex">
            <div className="w-[150px] border-t-2 border-[#101115] mt-28 ml-24"></div>
            <span className="text mt-[100px] ml-7 font-bold">PRICING</span>
          </div>
          <div className="text-6xl font-bold ml-24 mt-16">
            Three Ways to implement
            <br />
            AI into your business
          </div>
          <div className="text-base ml-24 mt-16">
            While our services can be offered individually to address specific
            requirements, we highly recommend exploring below packages for a
            more holistic
            <br />
            experience. Before committing to a package, we will conduct a
            discovery call to understand your business goals and assess how we
            can help you with
            <br />
            your projects.
          </div>
          <div className="flex-wrap w-[1100px] h-[940px] border-[#5E6274] border-[13px] rounded-lg ml-20 mt-20">
            <div className="flex w-[1070px]">
              <div className="w-[450px] h-[300px]">
                <h1 className="text-3xl font-bold ml-14 mt-16">Starter</h1>
                <p className="ml-14 mt-2 text-xs">
                  Best for medium-sized businesses that are taking their first
                  steps in the AI automation
                </p>
                <p className="ml-14 mt-8 font-medium">Starting at</p>
                <div className="flex">
                  <h1 className="text-5xl font-bold ml-14">$1500</h1>
                  <p className="mt-5">/month</p>
                </div>
              </div>
              <div className="w-[500px] h-[300px]">
                <h1 className="text-3xl font-bold ml-14 mt-16">Professional</h1>
                <p className="ml-14 mt-2 text-xs">
                  Designed for businesses seeking features for an advanced AI
                  integration
                </p>
                <p className="ml-14 mt-8 font-medium">Starting at</p>
                <div className="flex">
                  <h1 className="text-5xl font-bold ml-14">$2500</h1>
                  <p className="mt-5">/month</p>
                </div>
              </div>
              <div className="w-[500px] mr-3 h-[300px]">
                <h1 className="text-3xl font-bold ml-14 mt-16">
                  Enterprise Plus
                </h1>
                <p className="ml-14 mt-2 text-xs">
                  Ideal for enterprises with substantial AI demands, including
                  LLM security and KPI tracking programs
                </p>
                <p className="ml-14 mt-8 font-medium">Starting at</p>
                <div className="flex">
                  <h1 className="text-5xl font-bold ml-14">$6500</h1>
                  <p className="mt-5">/month</p>
                </div>
              </div>
            </div>
            <div className="w-[1000px] h-[70px] bg-[#ececfc] rounded-lg ml-8">
              <div className=" text-black ml-[450px] font-semibold text-xl pt-5">
                What's included
              </div>
            </div>
            <div className="flex">
              <div className="bg-[#ececfc] h-[400px] w-[310px] mt-7 ml-9 rounded-lg">
                <h1 className="text-xl font-medium ml-4 mt-6">Features:</h1>
                <p className="font-normal text-sm pl-4 pt-3">
                  {" "}
                  ✔Basic report on potential AI enhancements.
                </p>
                <p className="font-normal text-sm pl-4 pt-3">
                  {" "}
                  ✔3 hours of expert AI consulting per month.
                </p>
                <p className="font-normal text-sm pl-4 pt-3">
                  {" "}
                  ✔Access to standard AI tools.
                </p>
                <p className="font-normal text-sm pl-4 pt-3">
                  {" "}
                  ✔1-hour AI tool review session per quarter
                </p>
                <p className="font-normal text-sm pl-4 pt-3">
                  {" "}
                  ✔Basic report on potential AI enhancements.
                </p>
              </div>
              <div className="bg-[#ececfc] h-[400px] w-[310px] mt-7 ml-9 rounded-lg">
                <h1 className="text-xl font-medium ml-4 mt-6">Features:</h1>
                <p className="font-normal text-sm pl-4 pt-3">
                  {" "}
                  ✔Comprehensive analysis of AI integration.
                </p>
                <p className="font-normal text-sm pl-4 pt-3">
                  {" "}
                  ✔5 hours of expert AI consulting per month.
                </p>
                <p className="font-normal text-sm pl-4 pt-3">
                  {" "}
                  ✔1 custom AI tool development per quarter.
                </p>
                <p className="font-normal text-sm pl-4 pt-3">
                  {" "}
                  ✔2 advanced AI workshops per year for staff.
                </p>
                <p className="font-normal text-sm pl-4 pt-3">
                  {" "}
                  ✔2-hour AI tool review session per quarter
                </p>
              </div>
              <div className="bg-[#ececfc] h-[400px] w-[305px] mt-7 ml-9 rounded-lg">
                <h1 className="text-xl font-medium ml-4 mt-6">Features:</h1>
                <p className="font-normal text-sm pl-4 pt-3">
                  {" "}
                  ✔In-depth AI optimization analysis and audit
                </p>
                <p className="font-normal text-sm pl-4 pt-3">
                  {" "}
                  ✔Up to 3 custom tools developed per
                </p>
                <p className="font-normal text-sm ml-9"> quarter.</p>
                <p className="font-normal text-sm pl-4 pt-3">
                  ✔4 advanced AI workshops, including LLM-
                </p>
                <p className="font-normal text-sm ml-9">specific</p>
                <p className="font-normal text-sm pl-4 pt-3">
                  {" "}
                  ✔3-hour strategy optimization session per
                </p>
                <p className="font-normal text-sm ml-9">month</p>
                <p className="font-normal text-sm pl-4 pt-3">
                  {" "}
                  ✔Real-time, custom AI Dashboard for KPI
                </p>
                <p className="font-normal text-sm ml-9">tracking</p>
                <p className="font-normal text-sm pl-4 pt-3">
                  {" "}
                  ✔In-depth security audit for LLM to ensure
                </p>
                <p className="font-normal text-sm ml-9">
                  data privacy and compliance with industry
                </p>
                <p className="font-normal text-sm ml-9">standards.</p>
              </div>
            </div>
            <div className="flex">
              <button className="bg-[#101115] w-32 h-10 text-white rounded-lg mt-10 ml-28 border border-transparent hover:border-[#101115] hover:text-[#101115] hover:shadow-[inset_25rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow,border-color]">
                Book a call➜
              </button>
              <button className="bg-[#101115] w-32 h-10 text-white rounded-lg mt-10 ml-56 border border-transparent hover:border-[#101115] hover:text-[#101115] hover:shadow-[inset_25rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow,border-color]">
                Book a call➜
              </button>
              <button className="bg-[#101115] w-32 h-10 text-white rounded-lg mt-10 ml-56 border border-transparent hover:border-[#101115] hover:text-[#101115] hover:shadow-[inset_25rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow,border-color]">
                Book a call➜
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#101115] h-[1470px]">
        <div className="pt-20 pl-32 flex items-center gap-4">
          <div className="w-[150px] h-[3px] bg-white"></div>
          <span className="text-white font-bold pt-0">
            PROMPT ADVISERS BY THE NUMBERS
          </span>
        </div>
        <div className="flex">
          <div>
            <h1 className="text-7xl font-bold text-white pt-20 pl-32">
              Countless
              <br />
              Opportunities
            </h1>
            <h2 className="text-white mt-14 pl-32 font-bold">
              For Growth with AI
            </h2>
          </div>
          <div className="pt-[100px]">
            <div className="w-[200px] h-[1px] bg-white ml-20"></div>
            <p className="whitespace-pre-wrap text-4xl font-bold tracking-tighter text-white dark:text-white pt-5 pl-20 flex">
              <NumberTicker value={200} />
              <h1>+</h1>
            </p>
            <h1 className="text-white text-lg font-light pt-8 pl-20">
              Bespoke AI Products Delivered
            </h1>
          </div>
          <div className="pt-24">
            <div className="w-[200px] h-[1px] bg-white ml-20"></div>
            <p className="whitespace-pre-wrap text-4xl font-bold tracking-tighter text-white dark:text-white pt-5 pl-20 flex">
              <NumberTicker value={30} />
            </p>
            <h1 className="text-white text-lg font-light pt-8 pl-20">
              Distinct AI Models Developed
            </h1>
          </div>
        </div>
        <div className="flex">
          <div className="pt-[70px] pl-12 w-72">
            <div className="w-[200px] h-[1px] bg-white ml-20"></div>
            <p className="whitespace-pre-wrap text-4xl font-bold tracking-tighter text-white dark:text-white pt-5 pl-20 flex">
              <NumberTicker value={20} />
              <h1>+</h1>
            </p>
            <h1 className="text-white text-lg font-light pt-8 pl-20">
              Years of AI Industry Leadership
            </h1>
          </div>
          <div className="pt-[70px] pl-12 w-72">
            <div className="w-[200px] h-[1px] bg-white ml-20"></div>
            <p className="whitespace-pre-wrap text-4xl font-bold tracking-tighter text-white dark:text-white pt-5 pl-20 flex">
              <NumberTicker value={10} />
            </p>
            <h1 className="text-white text-lg font-light pt-8 pl-20">
              Countries We Operate In
            </h1>
          </div>
          <div className="pt-[70px] pl-12 w-72">
            <div className="w-[200px] h-[1px] bg-white ml-20"></div>
            <p className="whitespace-pre-wrap text-4xl font-bold tracking-tighter text-white dark:text-white pt-5 pl-20 flex">
              <NumberTicker value={15} />
            </p>
            <h1 className="text-white text-lg font-light pt-8 pl-20">
              Industries Transformed
            </h1>
          </div>
          <div className="pt-[70px] pl-12 w-72">
            <div className="w-[200px] h-[1px] bg-white ml-20"></div>
            <p className="whitespace-pre-wrap text-4xl font-bold tracking-tighter text-white dark:text-white pt-5 pl-20 flex">
              <NumberTicker value={5} />
            </p>
            <h1 className="text-white text-lg font-light pt-8 pl-20">
              Dedicated AI Specialists
            </h1>
          </div>
        </div>
        <div className="pt-44 pl-32 flex items-center gap-4">
          <div className="w-[150px] h-[3px] bg-white"></div>
          <span className="text-white font-bold pt-0">
            SEE WHAT OUR CLIENTS SAY ABOUT US
          </span>
        </div>
        <div className="flex">
          <h1 className="text-6xl text-white font-bold pl-32 pt-20">
            Testimonials
          </h1>
          <button className="bg-white h-14 w-64 mt-20 ml-96 rounded-lg hover:text-white hover:shadow-[inset_25rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]">
            Tell us about your project➜
          </button>
        </div>
        <Marqueee />
      </div>
      <div className="h-[900px]">
        <div className="pt-44 pl-32 flex items-center gap-4">
          <div className="w-[150px] h-[3px] bg-[#101115]"></div>
          <span className="text-[#101115] font-bold pt-0">
            SEE WHAT OUR CLIENTS SAY ABOUT US
          </span>
        </div>
        <div className="flex">
          <h1 className="text-6xl text-[#101115] font-bold pl-32 pt-20">
            Testimonials
          </h1>
          <button className="bg-[#101115] w-64 h-10 text-white rounded-lg mt-24 ml-96 border border-transparent hover:border-[#101115] hover:text-[#101115] hover:shadow-[inset_25rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow,border-color]">
            See Media Centre➜
          </button>
        </div>
        <div className="flex mt-20 gap-10 pl-8">
          <Ytdiv
            imgSrc="https://cdn.prod.website-files.com/65d244ea4c0a038c1f7e8a52/66f5a8d1dfc0be58e85ed645_hqdefault.jpeg" // Replace with your image URL
            title="How to Test Any Prompt (no one talks about this)"
          />
          <Ytdiv
            imgSrc="https://cdn.prod.website-files.com/65d244ea4c0a038c1f7e8a52/66ec595ec264f2e1bcdf3768_hqdefault.jpeg" // Replace with your image URL
            title="How to Prompt OpenAI's o1 Models Like A Pro"
          />
          <Ytdiv
            imgSrc="https://cdn.prod.website-files.com/65d244ea4c0a038c1f7e8a52/66e46257183ae37d678c94f2_hqdefault.jpeg" // Replace with your image URL
            title="It Finally Thinks! OpenAI's New o1 Models"
          />
          <Ytdiv
            imgSrc="https://cdn.prod.website-files.com/65d244ea4c0a038c1f7e8a52/66e1c25582436ff295e96b85_hqdefault.jpeg" // Replace with your image URL
            title="Replit Agent Help Anyone Build Anything In Minutes"
          />
        </div>
      </div>
      <div className="h-[850px] bg-[#101115] pt-32">
        <div className=" pl-32 flex items-center gap-4">
          <div className="w-[150px] h-[3px] bg-white"></div>
          <span className="text-white font-bold pt-0">
            SEE WHAT OUR CLIENTS SAY ABOUT US
          </span>
        </div>
        <div className="flex">
          <h1 className="text-6xl text-white font-bold pl-32 pt-20">
            They talked about us
          </h1>
        </div>
        <div className="flex items-center justify-center h-screen">
          <Theyaboutus />
        </div>
      </div>
      <div className="h-[700px] bg-[url('https://c4.wallpaperflare.com/wallpaper/834/602/559/computer-keyboards-wallpaper-preview.jpg')] bg-cover bg-center">
        <h1 className="text-6xl text-white font-bold pl-40 pt-56">
          Ready to implement AI into your
        </h1>
        <h1 className="text-6xl text-white font-bold pt-5 pl-[500px]">
          business?
        </h1>
        <button className="bg-white h-14 w-64 mt-20 ml-[500px] rounded-lg text-lg hover:text-white hover:shadow-[inset_25rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]">
          Let's talk➜
        </button>
      </div>
      <div className="h-[450px] bg-[#1D2339]">
        <div>
          <h1 className="text-white text-2xl pl-44 pt-16 font-semibold">Interested?</h1>
          <p className="text-white pl-44 pt-2">Sign up to get the latest news on our products</p>
          <div className="flex items-center pl-44 pt-8">
      <input
        type="email"
        placeholder="Enter your email"
        className="h-10 w-60 border border-gray-300 rounded px-2" // 20px height and 100px width
      />
      <button
        type="submit"
        className="ml-2 h-10 w-28 bg-white border border-gray-300 rounded hover:bg-blue-500 hover:text-white transition-colors"
      >
        Submit
      </button>
    </div>
        </div>
        <p className="text-white pl-44 pt-14">© 2024 Prompt Advisers. All rights reserved.</p>
        <div className="pl-44 pt-10">
        <div className="w-[1000px] h-[2px] bg-white"></div>
        <div className="pt-8 pl-2 flex">
        <img 
    src="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/66ddbdec3555ab75c6796de4_logo%20jasne.svg" // Replace with your image URL 
    alt="Description" 
    className="rounded shadow-lg w-20 h-14" // Add your desired classes
  />
  <div className="text-white flex-wrap">
    <div className="flex">
    <h1 className="text-white pl-96">2164 Montreal RD, Ottawa</h1>
    <h1 className="text-white pl-10">800-961-9528</h1>
    <h1 className="text-white pl-10">Terms and Conditions</h1>
    </div>
    <div className="flex pt-5">
    <h1 className="text-white pl-96">Canada</h1>
    <h1 className="text-white pl-28">mark@promptadvisers.com</h1>
    <h1 className="text-white pl-16">Privacy Policy</h1>
    </div>
  </div>
        </div>
        </div>



        </div>
    </>
  );
};

export default Home


