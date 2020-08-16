import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         
         <div className="row">
         <Fade left>
            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col" id="white">

               <h2>About Me<hr/></h2>
               
               <p>
               {
                 resumeData.aboutme
               }
               </p>
               <h2>Contact Details<hr/></h2>
               <div className="row">

                  <div className="columns contact-details">

                
                
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>khiz_k@hotmail.com</span>
       				</p>
                  </div>
               </div>
            </div>
            </Fade>
         </div>
      
      </section>
    );
  }
}