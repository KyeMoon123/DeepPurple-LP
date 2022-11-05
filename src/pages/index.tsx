import React from "react"

import HeroComponent from "../images/hero3.png"
import Img1 from "../images/img1.png"
import hero2 from "../images/hero2.png"
import Report from "../images/desktop.png"
import Logo from "../images/logomark.png"

import SEO from "../components/seo"
import Nav from "./HomePageComponents/Nav"

const IndexPage = () => (
  <>
    <html data-theme="cupcake"></html>
    <SEO title="Home" />
    <Nav />
    <div className="hero bg-base-100 pt-28">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="py-4 text-8xl font-bold">AI Customer Insights</h1>

          <h1 className=" text-6xl font-bold text-secondary py-6">
            Detailed, actionable customer insights and metrics at your
            fingertips
          </h1>

          <p className=" py-6  text-2xl">
            Find insights in customer feedback, survey responses, reviews,
            transcripts and social media conversations with an intutitive AI
            driven text analysis platform your analysts will love.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="btn btn-secondary btn-wide rounded-lg">
              Get Started
            </button>
            <button className="btn btn-outline btn-secondary btn-wide rounded-lg">
              See how it works
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="flex  ">
      <div className=" w-screen">
        <img src={HeroComponent} alt="pic" />
      </div>
    </div>
    <div className="flex flex-col items-center ">
      <h4 className=" text-2xl font-semibold text-secondary">Features</h4>
      <h1 className="text-7xl  font-bold flex justify-center px-60 py-6 text-center ">
        Instant, accurate, data-backed insights for every team.
      </h1>
    </div>
    <div className="space-y-20 py-12">
      <div className="hero ">
        <div className="hero-content space-x-5 flex-col lg:flex-row">
          <img src={Img1} className="max-w-xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-end text-6xl text-secondary font-semibold">
              Don't settle for keywords. Get the full context.
            </h1>
            <p className="py-6 text-end text-xl font-semibold">
              True analysis runs deeper than word bubbles. Go beyond sentiment
              analysis with visualisations of the most important compliments,
              complaints, questions, and requests sorted by volume and urgency.
              Each theme tracks changes over time and contains a summary,
              urgency score, product sub-themes, user profiles, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={hero2} className="max-w-xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-start text-6xl text-secondary font-semibold">
              Instant Data Visualizations & Detailed Insights
            </h1>
            <p className="py-6 text-start text-xl font-semibold">
              Uncovering insights in your data just got easy. Communications are
              grouped by semantic proximity using AI; explore the trends in
              topics and sentiment in your data overtime. With the ability for
              complex filtering
            </p>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={Report} className="max-w-xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-end text-6xl text-secondary font-semibold">
              Make decisions faster with AI driven analysis
            </h1>
            <p className="py-6 text-end text-xl font-semibold">
              You shouldn’t be slowed down by SQL queries to get answers from
              your data; skip the pivot tables and make data-driven decisions
              faster. Just sync your data and let our AI take care of the hard
              part — we promise the human-level analysis will wow you.
            </p>
          </div>
        </div>
      </div>
    </div>

    <footer className="footer footer-center bg-secondary p-10  text-secondary-content">
      <div>
        <img src={Logo} />
        <h1 className="font-semibold">Deep Purple </h1>
        <p className="font-bold"></p>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-primary"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </>
)

export default IndexPage
