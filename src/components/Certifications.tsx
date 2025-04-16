import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
        title: "Problem Solving (Basic) Certificate",
        issuer: "HackerRank",
    date: "May 2023",
        link: "https://www.hackerrank.com/certificates/iframe/d2e556c4f341",
        image: "/assets/problem_solving_basic certificate_page.jpg",
  },
  {
      title: "Problem Solving (Intermediate) Certificate",
      issuer: "HackerRank",
    date: "May 2023",
      link: "https://www.hackerrank.com/certificates/24e0a2d15c11",
      image: "/assets/problem_solving_intermediate certificate_page.jpg",
  },
  {
      title: "SQL (Advanced) Certificate",
      issuer: "HackerRank",
    date: "MAy 2023",
      link: "https://www.hackerrank.com/certificates/24e0a2d15c11",
      image: "/assets/sql_advanced certificate_page.jpg",
  },
  {
      title: "Python (Basic) Certificate",
      issuer: "HackerRank",
    date: "May 2023",
      link: "https://www.hackerrank.com/certificates/24e0a2d15c11",
      image: "/assets/python_basic certificate_page.jpg",
    },
    {
        title: "Java (Basic) Certificate",
        issuer: "HackerRank",
        date: "May 2023",
        link: "https://www.hackerrank.com/certificates/24e0a2d15c11",
        image: "/assets/java_basic certificate_page.jpg",
    },
    {
        title: "React (Basic) Certificate",
        issuer: "HackerRank",
        date: "May 2023",
        link: "https://www.hackerrank.com/certificates/24e0a2d15c11",
        image: "/assets/react_basic certificate_page.jpg",
    },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
