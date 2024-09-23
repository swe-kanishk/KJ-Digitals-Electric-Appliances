import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from "react";
import bee from '../../public/pngwing.com.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

function Reviews() {
  useGSAP(() => {
    gsap.from(".review-cards", {
      y: 250,
      opacity: 0,
        scrollTrigger: {
            trigger: '.review-cards',
            scroller: 'body',
            start: 'top 120%',
            end: 'top 40%',
            scrub: true
        }
    })
    gsap.to(".review-cards", {
      y: 0,
      opacity: 1,
        scrollTrigger: {
            trigger: '.review-cards',
            scroller: 'body',
            start: 'top 160%',
            end: 'top 40%',
            scrub: true,
        }
    })
  })
  return (
    <section className="pb-4 px-3 flex flex-col gap-3 my-3">
        <Link to="/contact" className="text-2xl font-medium review-text cursor-pointer">
          Your Trust, Our Pride: See What Our Customers Are Saying
        </Link>
        <div className="testimonial-container">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
            <div className="testimonial-cards w-full review-cards">
              <div className="user-review">
                <p>
                  KJ Digitals ki service bahut hi acchi hai. Maine recently ek
                  naya AC kharida, aur ye mere expectations ko poora karta hai.
                  Unka customer service bhi bahut madadgar tha.
                </p>
              </div>
              <div className="mx-auto">
                <img
                  className="rounded-full h-12 w-12 aspect-sqaure object-cover"
                  src="https://i.pinimg.com/736x/3b/54/98/3b54987c27f6abd8c8c5802f7be8301e.jpg"
                  alt=""
                />
              </div>
              <div className="username mx-auto">
                <span>sarah johnson</span>
              </div>
              <div className="mx-auto user-profession">
                <span>10th grade english teacher</span>
              </div>
            </div>
            <div className="testimonial-cards w-full flex-1 review-cards">
              <div className="user-review">
                <p>
                  Mujhe KJ Digitals se washing machine aur speaker kharidne ka
                  anubhav bahut accha raha. Products superb hain, aur delivery
                  bhi timely thi. Main is company ko zaroor recommend karunga.
                </p>
              </div>
              <div className="mx-auto">
                <img
                  className="rounded-full h-12 w-12 aspect-sqaure object-cover"
                  src="https://i.pinimg.com/564x/e6/28/36/e628364d55edb04d80d5ef3cbb90c555.jpg"
                  alt=""
                />
              </div>
              <div className="username mx-auto">
                <span>Mark davis</span>
              </div>
              <div className="mx-auto user-profession">
                <span>parent</span>
              </div>
            </div>
            <div className="testimonial-cards w-full flex-2 review-cards">
              <div className="user-review">
                <p>
                  KJ Digitals par available home appliances ki quality behtareen
                  hai. Maine yahan se ek mixer grinder kharida, aur ye bahut
                  achha kaam kar raha hai. Unka customer support bhi excellent
                  hai.
                </p>
              </div>
              <div className="mx-auto">
                <img
                  className="rounded-full h-12 w-12 aspect-sqaure object-cover"
                  src="https://i.pinimg.com/564x/2b/98/e2/2b98e274273aada52345a02b987dac4b.jpg"
                  alt=""
                />
              </div>
              <div className="username mx-auto">
                <span>dr. james carter</span>
              </div>
              <div className="mx-auto user-profession">
                <span>school administrator</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Reviews
