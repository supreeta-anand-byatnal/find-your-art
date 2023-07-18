import React from "react";
import "../Footer/footer.css";
import image11 from '../../assets/image 11.png';
import { BiSolidPhoneCall, BiLogoInstagramAlt} from 'react-icons/bi';
import {IoLocationSharp} from 'react-icons/io5';
import {AiFillInstagram} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';


const Footer = () => {
  return (
    <div className="box">
      <div className="footer-wrapper">
        <footer className="footer">
          <div className="group">
            <div className="div">
              <div className="text-wrapper font-semibold">Reach us at</div>
              <div className="group-2 flex items-center">

                <BiSolidPhoneCall className="img" />
                <div className="text-wrapper-2 ml-2">000-000-0000</div>
              </div>
              <div className="group-3 flex items-center">

              <a className='link' href="mailto:info@changearts.org">
                <MdEmail className="img"/>
                </a>
                <div className="text-wrapper-2 ml-2">
                <a className='link' href="mailto:info@changearts.org">info@changearts.org</a>
                </div>
              </div>
              <div className="group-4 flex items-center">
                <IoLocationSharp className="img" />
                <div className="text-wrapper-3 ml-2">CHANGE Arts Address</div>
              </div>
              <div className="group-5 flex items-center">
                <div className="vector-wrapper">
                <a className= 'link' href="https://www.instagram.com/changeartsnyc/">
                  <AiFillInstagram className="img"/></a>
                </div>
                <div className="text-wrapper-2 ml-3">
                <a className='link' href="https://www.instagram.com/changeartsnyc/ ">
                   CHANGE Arts Instagram</a>
                    </div>
              </div>
            </div>
            <div className="group-6 flex">
              <div className="group-7">
                <div className="text-wrapper font-semibold">Company</div>
                <div className="text-wrapper-4">
                  <a className='link' href = "https://www.changearts.org/about">About Us</a></div>
                <div className="text-wrapper-5">
                  <a className='link' href='https://www.changearts.org/who-we-are'>Our Team </a></div>
                <div className="text-wrapper-6">
                  <a  className='link' href="https://www.changearts.org/contactandfaq">Contact</a></div>
                <div className="text-wrapper-7">
                <a  className='link' href="https://www.changearts.org/contactandfaq">FAQ</a></div>
              </div>
              <div className="group-8">
                <div className="text-wrapper font-semibold">Other</div>
                <div className="text-wrapper-4">The Arts Challenge</div>
                <div className="text-wrapper-5">
                  <a className='link' href = "https://donorbox.org/change-arts-donation">Donate</a></div>
              </div>
              <div className="group-9">
                <div className="text-wrapper-8">Partners</div>
                <div className="text-wrapper-9">
                  <a className="link" href="https://www.changearts.org/classroomsandcommunities">Classroom and Community Partners </a></div>
                <div className="text-wrapper-10">
                <a className='link' href="https://www.changearts.org/exhibitandproductionpartners">Exhibit and Production Partners </a></div>
              </div>
            </div>
            <div className="overlap-group">
              <div className="text-wrapper-11 font-semibold">CHANGE Arts</div>
              <p className="is-a-c">
                is a 501(c)(3) nonprofit, tax-exempt charitable organization.
              </p>
              <img className="image" alt="Image" src={image11} />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
