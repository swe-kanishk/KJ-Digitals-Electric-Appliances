import React from 'react'

function Reviews() {
  return (
    <section className="pb-4 px-3 flex flex-col gap-3 my-3">
        <h1 className="text-2xl font-medium">
          Your Trust, Our Pride: See What Our Customers Are Saying
        </h1>
        <div className="testimonial-container">
          <div className="grid-testimonial-container flex gap-12 px-0">
            <div className="testimonial-cards">
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
            <div className="testimonial-cards flex-1">
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
            <div className="testimonial-cards flex-2">
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
