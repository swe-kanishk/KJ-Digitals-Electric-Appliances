// TrustedCompanies.js
import React, { useEffect, useRef, useState } from "react";
import "./trustedCompanies.css"; // Import your CSS file

const TrustedCompanies = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const trustedComapies = [
    {
      companyLogo:
        "https://i.pinimg.com/564x/ba/b7/1c/bab71c39111229a2fe71d3581b59676c.jpg",
      companyName: "vivo",
    },
    {
      companyLogo:
        "https://i.pinimg.com/564x/34/e7/ef/34e7efb8bf3b843ebacf2b14f90360fd.jpg",
      companyName: "samsung",
    },
    {
      companyLogo:
        "https://i.pinimg.com/564x/14/49/1d/14491d94474b02327509817a06e020d6.jpg",
      companyName: "lg",
    },
    {
      companyLogo:
        "https://i.pinimg.com/564x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg",
      companyName: "whirlpool",
    },
    {
        companyLogo:
          "https://i.pinimg.com/564x/d9/b0/b0/d9b0b0cb12a1ace2c59807339cbb0473.jpg",
        companyName: "panasonic",
      },
    {
      companyLogo:
        "https://i.pinimg.com/736x/bc/8b/db/bc8bdbdb6fc22612b541af3e75d7a5c3.jpg",
      companyName: "sony",
    },
    {
      companyLogo:
        "https://i.pinimg.com/564x/55/91/6b/55916b71df8acb4b97e6eef80a195e20.jpg",
      companyName: "realme",
    },
    
  ];
  return (
    <div
      ref={containerRef}
      className={`animated-scroll-lines ${isVisible ? "visible" : ""} flex justify-between items-center`}
    >
      {trustedComapies.map((company) => {
        return (
          <div key={company.companyName} className="scroll-content">
            <img src={company.companyLogo} className="h-20" alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default TrustedCompanies;
