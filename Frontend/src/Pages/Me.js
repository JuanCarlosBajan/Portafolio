import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import JuancaBG from '../Assets/Images/Me/JuancaBG.JPEG';
import uvg from '../Assets/Images/Me/uvg.jpg';

export default function Me() {
  return (
    <div className="general_me_container_1">
      <div className="me_general_container  me_c_1">
        <div className="dashboard_container me_container">
          <Link className="return_button project_grid_container" to="/">
            <BiArrowBack size={20} color="aliceblue" />
          </Link>
          <div className="me_info_container">
            <div className="me_info_message_container">
              <div className="me_info_message">
                In which university are you studying?
              </div>
            </div>
            <div className="me_info_message_container_owner">
              <div className="me_info_message_owner">
                <img src={uvg} className="me_info_message_img" />
                <p>
                  I am currently studying at the Universidad Del Valle de
                  Guatemala. &#127891; &#127890;
                </p>
              </div>
            </div>
            <div className="me_info_message_container">
              <div className="me_info_message">What are you studying?</div>
            </div>
            <div className="me_info_message_container_owner">
              <div className="me_info_message_owner">
                <p>
                  Engineering in computer science and information technology.
                  &#128187; &#128241;
                </p>
              </div>
            </div>
            <div className="me_info_message_container">
              <div className="me_info_message">
                Why are you studying Computer Science?
              </div>
            </div>
            <div className="me_info_message_container_owner">
              <div className="me_info_message_owner">
                <p>
                  I love to code, I love technology. Since I was a kid, I had a
                  special passion for computers and building my own systems. I
                  think the future is in software and I want to learn as much as
                  I can to benefit mankind.
                </p>
              </div>
            </div>
            <div className="me_info_message_container">
              <div className="me_info_message">
                What master's degree would you like to study?
              </div>
            </div>
            <div className="me_info_message_container_owner">
              <div className="me_info_message_owner">
                <p>
                  I have three options right now: <br />
                  1. Artificial Inteligence &#129302;
                  <br />
                  2. Project Management and business administration
                  &#9878;&#65039; &#128737;&#65039; <br />
                  3. Block Chain and Non Fungible Tokens &#128452;&#65039;
                  &#9939;&#65039; <br />
                </p>
              </div>
            </div>
            <div className="me_info_message_container">
              <div className="me_info_message">
                Where do you see yourself in 5 years?
              </div>
            </div>
            <div className="me_info_message_container_owner">
              <div className="me_info_message_owner">
                <p>
                  Leading projects. Developing efficient and interesting
                  systems. Collaborating with other people to create and design.
                  Learning new technologies and preparing myself for a master
                  degree.
                </p>
              </div>
            </div>
            <div className="me_info_message_container">
              <div className="me_info_message">
                Name 5 words that describe you.
              </div>
            </div>
            <div className="me_info_message_container_owner">
              <div className="me_info_message_owner">
                <p>
                  1. Upright <br />
                  2. Leader <br />
                  3. Autodidact <br />
                  4. Proactive <br />
                  5. Responsible <br />
                </p>
              </div>
            </div>
            <div className="me_info_message_container">
              <div className="me_info_message">
                In what area do you perform best?
              </div>
            </div>
            <div className="me_info_message_container_owner">
              <div className="me_info_message_owner">
                <p>
                  There are three areas were I perform the best.
                  <br />
                  1. Leading Projects. &#128285;
                  <br />
                  2. Data Management and Analytics. &#128202; &#127922;
                  <br />
                  3. Creativity and Design. &#127912;
                </p>
              </div>
            </div>
            <div className="me_info_message_container">
              <div className="me_info_message">What are your hobbies?</div>
            </div>
            <div className="me_info_message_container_owner">
              <div className="me_info_message_owner">
                <p>
                  1. Bible &#128214; &#10013; <br />
                  2. Music &#127908; &#127929; &#127932; <br />
                  3. Finance &#128200; &#128184; &#128202; <br />
                  4. Learn/Investigate &#127760; &#128269; <br />
                </p>
              </div>
            </div>
            <div className="me_info_message_container">
              <div className="me_info_message">Excelent &#128526;</div>
            </div>
          </div>
        </div>
      </div>
      <div className="me_general_container">
        <img src={JuancaBG} className="image_juanca_bg" />
      </div>
    </div>
  );
}
