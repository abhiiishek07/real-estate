import CustomNextArrow from "@/components/Buttons/CustomNextArrow";
import CustomePrevArrow from "@/components/Buttons/CustomePrevArrow";
import bptp_logo from "@/assets/images/bptp_logo.png";
import dlf_logo from "@/assets/images/dlf_logo.png";
import emaar_logo from "@/assets/images/emaar_logo.png";
import m3m_logo from "@/assets/images/m3m-logo.png";
import paras_logo from "@/assets/images/paras-logo.jpeg";
import p_logo from "@/assets/images/plogo.png";
import signature_logo from "@/assets/images/signature-global.png";
import sobha_logo from "@/assets/images/sobha_logo.png";
import whiteland_logo from "@/assets/images/Whiteland-logo.png";
import { FiSettings, FiBook, FiUsers } from "react-icons/fi";

export const A_PLUS_DEVELOPERS = [
  bptp_logo,
  dlf_logo,
  emaar_logo,
  m3m_logo,
  paras_logo,
  p_logo,
  signature_logo,
  sobha_logo,
  whiteland_logo,
];

export const SLIDER_SETTINGS_A_PLUS_DEVS = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  arrows: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const SLIDER_SETTINGS_RECENT_PROP = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  cssEase: "linear",
  style: { marging: "5rem", gap: "3rem" },
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export const SLIDER_SETTINGS_BLOGS = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  cssEase: "linear",
  style: { marging: "5rem", gap: "3rem" },
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const SLIDER_SETTINGS_DIFF_PROP = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  cssEase: "linear",
  style: { marging: "5rem", gap: "3rem" },
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const SLIDER_SETTINGS_DIFF_PROP_INFO = {
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const SLIDER_SETTINGS_TESTIMONIAL = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000, // Change the autoplay speed as needed (in milliseconds)
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

export const SLIDER_SETTINGS_BANNER = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  adaptiveHeight: true,
};

export const REVIEWS = [
  {
    text: "I recently bought a beautiful house through this agency. The entire process was smooth and efficient. Highly recommended!",
    author: "Samantha Johnson",
  },
  {
    text: "The real estate agent provided excellent guidance and support throughout the home-buying journey. Couldn't be happier with my new home!",
    author: "Michael Smith",
  },
  {
    text: "As a first-time homebuyer, I was nervous about the process, but the realtor made it so easy and stress-free. Thank you!",
    author: "Emily Thompson",
  },
  {
    text: "I've been renting an apartment through this agency for a year now, and their service has been exceptional. Quick response to maintenance requests and friendly staff!",
    author: "Daniel Rodriguez",
  },
  {
    text: "After months of searching for the perfect investment property, I finally found it with the help of this real estate company. Great communication and expertise!",
    author: "Jessica Lee",
  },
  {
    text: "The real estate agent went above and beyond to negotiate the best deal for me. I'm thrilled with the outcome!",
    author: "Andrew Wilson",
  },
  {
    text: "I've worked with several real estate agents in the past, but none have been as professional and knowledgeable as the one from this agency. Highly impressed!",
    author: "Olivia Brown",
  },
  {
    text: "The team at this real estate firm helped me sell my house quickly and for a great price. I couldn't have asked for a better experience!",
    author: "David Martinez",
  },
  {
    text: "My family and I are so grateful for the real estate agent who helped us find our dream home. They listened to our needs and found the perfect match!",
    author: "Jennifer Taylor",
  },
  {
    text: "The rental property I found through this agency exceeded my expectations. The location is perfect, and the amenities are top-notch!",
    author: "Christopher White",
  },
];

export const baseUrl = "./Images";

export const ADMIN_PAGE_DETAILS = [
  {
    id: 0,
    title: "Properties",
    description: "Manage property Details here",
    viewAllLink: "/admin/properties",
    addNewLink: "/admin/properties/new",
    icon: FiSettings,
  },
  {
    id: 1,
    title: "Blogs",
    description: "Manage all the blogs here",
    viewAllLink: "/admin/blogs/edit",
    addNewLink: "/admin/blogs/new",
    icon: FiBook,
  },
  {
    id: 0,
    title: "Interested Users",
    description: "See all the interested users here",
    viewAllLink: "/admin/blog-details/edit",
    icon: FiUsers,
  },
];
