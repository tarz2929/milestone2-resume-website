//Import React
import React from 'react';

//Declare Function
function Timeline() {
    return (
        <section id="Timeline">
            <div className="container">
                <h2 className="centertitle">Career Highlights</h2>

                <div className="row">
                    <div className="col-md-6 col-sm-12  text-left ">
                        <div className="mytimeline mytimeline1">
                            <h3>Work Experience</h3>
                            <p>Started working as Data Analyst at Google, Hyderabad. Eventually moved to Canada and worked in Retail, Sales, Engineering
                            and Construction. Having worked across diverse industries I am able to bring varied skills to my potential employer.
            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12  text-left"></div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12  text-left"></div>
                    <div className="col-md-6 col-sm-12  text-left ">
                        <div className="mytimeline mytimeline2">
                            <h3>Undergrad</h3>
                            <p>Finished my Bachelor of Technology from Jawaharlal Nehru Institute of Technology, Hyderabad. While pursuing Engineering,
                            I was introduced to Tech and how common problems faced by Engineers can be solved by computer simulations and coding.
                            So, I have decided to learn Information Technology.
            </p>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12  text-left">
                        <div className="mytimeline mytimeline3">
                            <h3>Primary and Higher Education</h3>
                            <p>Went to St. joseph’s public school for primary and high school. My primary subjects in High school were
                            Mathematics, Physics and Chemistry. I was intrigued by Newtonian physics, Gravitational Laws, Nature, and Cosmos
                            which paved my path to my further education – Mechanical Engineering.
            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12  text-left"></div>
                </div>





            </div>
        </section>
    );
}
//Export Function
export default Timeline;