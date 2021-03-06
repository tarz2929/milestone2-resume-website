import React from 'react';

function AboutMe() {
  return (
    <section id="About">
      <div className="container">
        <div className="mybio">
          <h2> Who am I? </h2>
          <p>Born in Hyderabad, India.</p>
          <p>I am a Mechanical Engineer and aspiring to start a new career
          with the tech sector and hoping to solve societal problems using technology. Some of my interests include
          Public Speaking, Human Psychology and Yoga. And, I am Constantly looking for ways to make my work as an
          expression of
            joy. </p>
          <p>Having worked in the field of Retail, Engineering and Project management I am able to bring the best of my
          skills from diverse backgrounds.
          When I am not working, you will see me either spending close time with nature or experimenting amateur
          photography on my iPhone.
          </p>
        </div>
        <div className="mybio">
          <h2> What do I do? </h2>
          {/* <span className="heading-meta">What I do?</span> */}
          {/* <h2 className="about-heading">Here are some of my expertise</h2> */}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 myabilities text-center">
              <img className="ability-image" src="https://static.thenounproject.com/png/247206-200.png" alt="" />
              <h3>Project Management</h3>
              <p>Experienced in handling mid-level construction projects and worked as a Project Coordiator and Assistant manager. </p>
            </div>
            <div className="col-md-4 col-sm-12 myabilities text-center">
              <img className="ability-image" src="https://static.thenounproject.com/png/3329486-200.png" alt="" />
              <h3>To balance Work & Life </h3>
              <p>Yoga, biking, outdoor activities, cooking and family time. </p>
            </div>
            <div className="col-md-4 col-sm-12 myabilities text-center">
              <img className="ability-image" src="https://static.thenounproject.com/png/1473691-200.png" alt="" />
              <h3> Web Development and Cloud </h3>
              <p>Previously learnt and gained online experience in DevOps and AWS tools. I am currently learning web development using JavaScript, React, Redux, HTML and CSS. </p>
            </div>

          </div>
        </div>


      </div>
    </section>

  );
}
export default AboutMe;