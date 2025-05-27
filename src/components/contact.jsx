import React from "react";

function Contact({ style }) {
  return (
    <footer className='bg-dark text-light py-4 mt-5'>
      <div className='container text-center'>
        <h5 className='mb-3' style={style}>
          Get in Touch
        </h5>
        <p className='mb-1'>
          📧{" "}
          <a href='mailto:tiwari2sachin@gmail.com' className='text-info'>
            tiwari2sachin@gmail.com
          </a>
        </p>
        <p className='mb-1'>
          📞{" "}
          <a href='tel:4376018341' className='text-info'>
            437-601-8341
          </a>
        </p>
        <p className='mb-0'>
          🔗{" "}
          <a
            href='https://www.linkedin.com/in/YOUR-LINK'
            target='_blank'
            rel='noopener noreferrer'
            className='text-info'
          >
            LinkedIn Profile
          </a>
        </p>
        <hr className='my-3 border-secondary' />
        <p className='small mb-0'>
          © {new Date().getFullYear()} Sachin Tiwari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Contact;
