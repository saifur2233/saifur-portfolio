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
        image: "https://www.hackerrank.com/certificates/iframe/d2e556c4f341",
  },
  {
      title: "Problem Solving (Intermediate) Certificate",
      issuer: "HackerRank",
    date: "May 2023",
      link: "https://www.hackerrank.com/certificates/24e0a2d15c11",
      image: "https://www.hackerrank.com/certificates/24e0a2d15c11",
  },
  {
      title: "SQL (Advanced) Certificate",
      issuer: "HackerRank",
    date: "MAy 2023",
      link: "https://www.hackerrank.com/certificates/24e0a2d15c11",
      image: "https://www.hackerrank.com/certificates/24e0a2d15c11",
  },
  {
      title: "Python (Basic) Certificate",
      issuer: "HackerRank",
    date: "May 2023",
      link: "https://www.hackerrank.com/certificates/24e0a2d15c11",
      image: "https://www.hackerrank.com/certificates/24e0a2d15c11",
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
