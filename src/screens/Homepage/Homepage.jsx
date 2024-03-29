import React, { useEffect, useRef, useState } from "react";
import Buildings from "@/assets/Lottie/Buildings.json";
import Lottie from "lottie-react";
import Slider from "react-slick";
import {
  A_PLUS_DEVELOPERS,
  REVIEWS,
  SLIDER_SETTINGS_A_PLUS_DEVS,
  SLIDER_SETTINGS_BANNER,
  SLIDER_SETTINGS_DIFF_PROP,
  SLIDER_SETTINGS_RECENT_PROP,
  SLIDER_SETTINGS_TESTIMONIAL,
} from "@/constants/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLocationOutline, IoPersonCircleSharp } from "react-icons/io5";
import RecentProperty from "@/components/Card/RecentProperty";
import PropertyCard from "@/components/Card/PropertyCard";
import {
  FaBlog,
  FaChartArea,
  FaGlobe,
  FaPen,
  FaRegFaceSmileBeam,
} from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { TbMessage2Bolt } from "react-icons/tb";
import Testimonial from "@/components/Card/Testimonial";
import { LuTrophy } from "react-icons/lu";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import Banner from "@/components/Card/Banner";
import Header from "@/components/Header/Header";
import AnnouncementBar from "@/components/AnnouncementBar/AnnouncementBar";

const BANNERS = [
  "https://w0.peakpx.com/wallpaper/1016/821/HD-wallpaper-abstract-city-building-light-lights-night.jpg",
  "https://www.hdwallpapers.in/download/night_city_buildings_lights_4k_hd-HD.jpg",
  "https://www.goldmansachs.com/intelligence/pages/articles/real-estate-may-still-offer-a-hedge-for-investors/800x450.jpg",
  "https://e0.pxfuel.com/wallpapers/422/590/desktop-wallpaper-hong-kong-abstract-city-neon-art.jpg",
];

const Homepage = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedTab, setSelectedTab] = useState("residential");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setCollapsed(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden  lg:px-0">
      {/* Banner */}

      <div className="top-0 left-0 right-0 z-10 fixed">
        <AnnouncementBar />
        <Header isHomepage={true} />
      </div>
      <div className="relative w-full">
        <Slider {...SLIDER_SETTINGS_BANNER}>
          {BANNERS.map((image, index) => {
            return <Banner image={image} key={index} />;
          })}
        </Slider>
        <div className="absolute inset-0 flex flex-col justify-center items-center w-full px-4 text-center ">
          <p className=" text-white text-3xl font-bold max-w-3xl ">
            Explore our curated listings today.
          </p>
          <p className=" text-white text-3xl font-bold max-w-3xl mt-2">
            Where Every Door Opens to Possibilities.
          </p>

          <div className="relative gap-0 mt-3 " ref={inputRef}>
            <label className=" input input-bordered flex items-center gap-2">
              <IoLocationOutline />
              <input
                type="text"
                placeholder="Search project..."
                className="w-56 md:w-96"
                onFocus={toggleCollapsed}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>

            <div
              className={`absolute w-full top-full left-0 mt-1 bg-white border-l border-r border-b border-gray-300 rounded-md shadow-md z-10 ${
                collapsed ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }  duration-300 transition-transform ease-in-out flex p-2 gap-2 flex-col`}
            >
              <select className="select select-bordered w-full ">
                <option disabled selected>
                  Location
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>{" "}
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Type
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>{" "}
              <select className="select select-bordered w-full ">
                <option disabled selected>
                  Price
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Partners */}

      <div className="w-full  my-12 flex flex-col gap-3 items-center justify-center border max-w-6xl p-4 rounded-lg">
        <p className="font-bold text-3xl">Trusted Partners</p>
        <p className="text-lg">
          We partner with the finest to ensure your home buying experience is
          second to none. See who stands behind us.
        </p>
        <div className="w-full mt-2 py-4 relative ">
          <Slider {...SLIDER_SETTINGS_A_PLUS_DEVS}>
            {A_PLUS_DEVELOPERS.map((developer, index) => (
              <div className="relative" key={index}>
                <p className="font-bold">{developer}</p>
              </div>
            ))}
          </Slider>
          <div className="absolute top-0 left-0 w-10 md:w-32 h-full bg-gradient-to-r from-gray-50 rounded-lg"></div>
          <div className="absolute top-0 right-0 w-10 md:w-32 h-full bg-gradient-to-l from-gray-50 rounded-lg"></div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-6xl items-center mb-10 ">
        <div className="flex items-center gap-4 text-3xl font-extrabold text-gray-900 sm:text-4xl justify-center">
          <h2>Our Latest Launches</h2>
          <HiMiniRocketLaunch />
        </div>
        <div className="w-full mt-2">
          <Slider className="" {...SLIDER_SETTINGS_RECENT_PROP}>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </Slider>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-6xl items-center justify-center mt-10 ">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          What are you looking for ?
        </h2>
        <p className="text-lg text-gray-500 my-3 px-3 text-center">
          Stay Up-to-Date on New Property Options, Best Investment
          Opportunities, and What&apos;s Coming Next.
        </p>
        <div role="tablist" className="tabs tabs-boxed tabs-md p-2">
          <a
            role="tab"
            className={`tab ${selectedTab === "residential" && "bg-green-500"}`}
            onClick={() => setSelectedTab("residential")}
          >
            RESIDENTIAL
          </a>
          <a
            role="tab"
            className={`tab ${selectedTab === "commercial" && "bg-green-500"}`}
            onClick={() => setSelectedTab("commercial")}
          >
            COMMERCIAL
          </a>
          <a
            role="tab"
            className={`tab ${selectedTab === "sco" && "bg-green-500"}`}
            onClick={() => setSelectedTab("sco")}
          >
            SCO
          </a>
          <a
            role="tab"
            className={`tab ${selectedTab === "plots" && "bg-green-500"}`}
            onClick={() => setSelectedTab("plots")}
          >
            Plots
          </a>
        </div>
      </div>
      <div className="w-full max-w-6xl mt-1 mb-10">
        <Slider {...SLIDER_SETTINGS_DIFF_PROP}>
          <RecentProperty />
          <RecentProperty />
          <RecentProperty />
          <RecentProperty />
          <RecentProperty />
          <RecentProperty />
        </Slider>
      </div>

      {/* STATS */}

      <div className="stats  stats-vertical md:stats-horizontal shadow my-12 w-full max-w-6xl border">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaRegFaceSmileBeam size={28} />
          </div>

          <div className="stat-value">25000+</div>
          <div className="stat-title">Happy Customers</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaChartArea size={28} />
          </div>

          <div className="stat-value">45 Million</div>
          <div className="stat-title"> Sq.Ft Area Sold</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <RiTeamFill size={28} />
          </div>
          <div className="stat-value">500+</div>
          <div className="stat-title"> Skilled Professionals</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaGlobe size={28} />
          </div>
          <div className="stat-value">750+</div>
          <div className="stat-title"> Channel Associates</div>
        </div>
      </div>

      {/* AWARDS SECTION */}

      <section className="bg-gray-100 py-16 max-w-6xl rounded-md my-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center gap-4 text-3xl font-extrabold text-gray-900 sm:text-4xl justify-center">
              <h2 className="">Awards & Recognition</h2>
              <LuTrophy />
            </div>

            <p className="mt-4 text-lg text-gray-600">
              We take pride in our accomplishments and the recognition
              we&apos;ve received.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Best Real Estate Agency 2023
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Awarded for our exceptional service and client satisfaction.
                </p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Top Seller of the Year
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Recognized for our outstanding performance in property sales.
                </p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Excellence in Customer Service
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Awarded for our commitment to providing top-notch customer
                  service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}

      <div className="w-full max-w-6xl flex flex-col items-center gap-4 my-8">
        <div className="flex items-center gap-4 text-3xl font-extrabold text-gray-900 sm:text-4xl justify-center">
          <h2>What Our Clients Say</h2>
          <TbMessage2Bolt size={40} className="pt-2" />
        </div>
        <div className="w-full">
          <Slider {...SLIDER_SETTINGS_TESTIMONIAL}>
            {REVIEWS.map((review, index) => (
              <Testimonial review={review} key={index} />
            ))}
          </Slider>
        </div>
      </div>

      {/* BLOGS */}
      <section className="bg-gray-50 py-8 w-full max-w-6xl rounded-md mt-6 px-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center gap-3 text-3xl font-extrabold text-gray-900 sm:text-4xl justify-center">
              <h2>Explore Our Latest Blogs</h2>
              <FaPen size={35} className="pt-2" />
            </div>
            <p className="text-lg text-gray-600">
              Stay updated with our insights and tips.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://blog.tkelevator.com/wp/wp-content/uploads/2018/06/shutterstock_464879318-scaled.jpg"
                alt="Blog 1"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  5 Tips for First-Time Homebuyers
                </h3>
                <p className="text-gray-600">
                  Learn valuable advice for navigating the home buying process
                  for the first time.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w="
                alt="Blog 2"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  The Benefits of Investing in Rental Properties
                </h3>
                <p className="text-gray-600">
                  Discover why investing in rental properties can be a lucrative
                  opportunity.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg"
                alt="Blog 3"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  How to Stage Your Home for a Quick Sale
                </h3>
                <p className="text-gray-600">
                  Learn expert tips for staging your home to attract potential
                  buyers.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-ghost text-lg">Read more blogs</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="flex flex-col w-full max-w-6xl gap-3 my-12">
        <p className="font-bold text-3xl">FAQs</p>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
