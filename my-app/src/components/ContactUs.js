import React, { Component } from 'react';
export default class contact extends Component {
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
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                {/* <h4>Linked in :
                  {resumeData.linkedinId}
                </h4> */}
              </div>
            </aside>
          </div>
        </section>
        );
  }
}