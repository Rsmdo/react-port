import React from 'react';
import Avatar from "../../Avatar";
function About() {
  return (
      <section className='mx-auto'>
          <h1 className='text-center m-2'>Hello, and Welcome to Roydens portfolio</h1>
          <Avatar/>
          <article className='mx-lg-4'>
              <p className='m-4 aboutText'>
                  Currently enrolled in full stack bootcamp in UofT 
              </p>
              <p className='m-4 aboutText'>
                  In this porfolio you will find some of the projects I have worked on.
              </p>
          </article>
      </section>
  );
}

export default About;