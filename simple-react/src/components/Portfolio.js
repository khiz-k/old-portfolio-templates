import React, { Component } from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
        <Fade bottom cascade><h1>Check Out My Work!</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                           <a href={`${item.link}`} target="_blank">
                  <div className="item-wrap">
         
                      <img src={`${item.image}`} className="item-img"/>
                  
                        <div className="overlay">
                   
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          
                        </div>
                     
                      </div>
                      
                  </div>
                  </a>
                </div>
              )
            })
          }
          </div>
          </Fade>
        </div>
      </div>
  </section>
 
        );
  }
}

// {`${item.imgurl}`}