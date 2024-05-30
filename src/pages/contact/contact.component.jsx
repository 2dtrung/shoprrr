import React from 'react';
import BannerItem from '../../components/banner-item/banner-item.component';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

class Contact extends React.Component {
  render() {
    return (
      <ContactContainer>
        <BannerItem
          className="mx-0 mx-md-5"
          background="https://i.ibb.co/LCFPn7t/Contact-pageheading.jpg"
          bannerheight="500px"
          bannertype="center"
        >
          <div className="flex_arrange">
            <h1>Contact Us</h1>
          </div>
        </BannerItem>
        <Container>
          <h4 className="text-center">
          Frontend Developer, I excel in crafting engaging web experiences that blend aesthetics and functionality. With expertise in HTML5, CSS3, JavaScript, Typescript and ReactJS, I have a strong foundation in modern web development. I'm also skilled in using frameworks like Next.js, Redux, TailwindCSS, SASS, Node.js and Bootstrap to create dynamic and responsive applications.
          </h4>
          <hr />
          <div className="col-md-7 m-auto">
            <div className="card">
              <p>
                Feel free to reach out at: <b>sductrung@gmail.com</b>
              </p>
              <p>
                Website:{' '}
                <b>
                  <a href="https://www.2dtrung.com">www.2dtrung.com</a>
                </b>
              </p>
              <p>
                Twitter:{' '}
                <b>
                  <a href="https://twitter.com/2dtrung">Twitter Profile</a>
                </b>
              </p>
              <p>
                LinkedIn:{' '}
                <b>
                  <a href="https://linkedin.com/in/2dtrung">
                    Linked Profile
                  </a>
                </b>
              </p>
            </div>
          </div>
        </Container>
        <iframe
          src="https://www.google.com/maps/embed"
          width="600"
          height="450"
          title="Contact Map"
          frameborder="0"
          style={{ border: 0, width: '100%' }}
          allowfullscreen=""
        ></iframe>
      </ContactContainer>
    );
  }
}

const ContactContainer = styled.div`
  h4 {
    font-size: 20px;
    line-height: 40px;
    font-weight: 400;
    color: #949494;
    margin-top: 3rem;
  }
  .card {
    background: #f5f5f5;
    border: none;
    margin: 3rem auto;
    padding: 40px;
  }
  p {
    font-size: 18px;
    a {
      font-size: 18px;
    }
    b {
      font-size: 18px;
    }
  }
`;

export default Contact;
