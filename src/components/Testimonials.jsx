import React from "react";
import img from "../assets/quote.svg";

const testimonialsData = {
  heading: "See what others are achieving through learning",
  contents: [
    {
      labelText: "THIRD_PARTY",
      description:
        "Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.",
      contentUrl: "https://www.udemy.com/topic/web-development/",
      contentUrlText: "View Web Development courses",
      author: {
        name: "StackOverflow",
        details: "37,076 responses collected",
        image:
          "https://cms-images.udemycdn.com/96883mtakkm8/2PBcNgsQa3SvYWklkiN27r/5b8707cc79c8cae5774d5eb3b88b4001/logo_stackoverflow.svg",
      },
    },
    {
      labelText: "COURSE_REVIEW",
      description:
        "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
      contentUrl:
        "https://www.udemy.com/course/ios-13-app-development-bootcamp/",
      contentUrlText: "View this iOS & Swift course",
      author: {
        name: "Alvin Lim",
        details: "Technical Co-Founder, CTO at Dimensional",
        image:
          "https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg",
      },
    },
    {
      labelText: "CASE_STUDY",
      description:
        "With Udemy Business employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.",
      contentUrl:
        "https://business.udemy.com/case-studies/publicis-sapient/?ref=Ian_Stevens_Testimonial_LOHP",
      contentUrlText: "Read full story",
      author: {
        name: "Ian Stevens",
        details:
          "Head of Capability Development, North America at Publicis Sapient",
        image:
          "https://cms-images.udemycdn.com/96883mtakkm8/4w9dYD4F64ibQwsaAB01Z4/c4610e9b1ac65589d8b1374ad10714e2/Ian_Stevens.png",
      },
    },
    {
      labelText: "COURSE_REVIEW",
      description:
        "Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
      contentUrl:
        "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/",
      contentUrlText: "View this AWS course",
      author: {
        name: "William A. Wachlin",
        details: "Partner Account Manager at Amazon Web Services",
        image:
          "https://cms-images.udemycdn.com/96883mtakkm8/6dT7xusLHYoOUizXeVqgUk/4317f63fe25b2e07ad8c70cda641014b/William_A_Wachlin.jpeg",
      },
    },
  ],
};

const Testimonials = () => (
  <section className="testimonials">
    <h2>{testimonialsData.heading}</h2>

    <div className="testimonial-container">
      {testimonialsData.contents.map(
        ({ description, contentUrl, contentUrlText, author }, index) => (
          <div key={index} className="testimonial-card">
            <div>
            <img height={20} src={img} alt="quotes" />
            <p className="testimonial-text">{description}</p>
            </div>

            <div>
            <div className="testimonial-user">
              <img
                src={author.image}
                alt={author.name}
                className="testimonial-image"
              />
              <div>
                <h4>{author.name}</h4>
                <p>{author.details}</p>
              </div>
            </div>
            <a href={contentUrl} className="testimonial-link">
              {contentUrlText}
            </a>
            </div>
          </div>

        )
      )}
    </div>
  </section>
);

export default Testimonials;
