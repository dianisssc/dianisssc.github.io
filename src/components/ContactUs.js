import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Available to work on any website ideas
              </p>
            </div>
          </div>
      <div className="row">
      <div className="columns contact-details">
        <h4>Contact Details</h4>
          <p className="address">
              <span>{resumeData.name}</span>
                  <br></br>
                    <span>
                  {resumeData.address}
                  </span>
                  <br></br>
                  <span>{resumeData.website}</span>
                  </p>
      </div>
           </div>
                  </section>
                  );
            }
          }