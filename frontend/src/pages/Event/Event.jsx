import React, { useState } from 'react';
import './Event.css';
import event from '../../assets/sample_event_page.png';
import organizer from '../../assets/Ellipse 797.svg';
import calendar from '../../assets/CalendarBlank.svg';
import map from '../../assets/MapPin.svg';
import NavBar from '../../components/Navbar/Navbar';
import RequestForm from '../../components/RequestForm/RequestForm';
import Footer from '../../components/Footer/Footer';


const Event = () => {
  const [formOpen, setFormOpen] = useState(false);

  const openForm = () => {
    setFormOpen(true);
  };

  return (
    <>
      <NavBar />
      <div className='event-page'>
        <div className='event-details'>
          <img src={event} alt="event" />
          <h2>Event Title</h2>
          <div className='event-details-container'>
            <div className='event-description'>
              <div className='event-info-container'>
                <div className='event-info'>
                  <img src={calendar} alt="calendar icon"></img>
                  <p>Sat, July 22 <br />4 - 7 pm </p>
                </div>
                <div className='event-info'>
                  <img src={map} alt='map icon'></img>
                  <p>123 Main St, New York City, NY, 12345</p>
                </div>
              </div>
              <div>
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, metus in rhoncus maximus, massa ipsum venenatis dui, ac hendrerit libero dui a eros. Aenean non consectetur lorem, eu accumsan nibh. Fusce a mi sed nisl laoreet tincidunt. Maecenas vel scelerisque tortor. Aliquam mattis quis mi et aliquam. Integer in interdum augue. Curabitur convallis dictum tincidunt.</p>
              </div>
              <div>
                <h3>Tags</h3>
                <div className='event-tag-container'>
                    <p className='tag'>Tag 1</p>
                    <p className='tag'>Tag 2</p>
                    <p className='tag'>Tag 3</p>
                </div>
              </div>
              <div>
                <h3>Organizers</h3>
                <div className='event-organizer-container'>
                  <img src={organizer} alt="organizer" />
                  <a href="">Creative Capital</a>
                </div>
              </div>
            </div>
            <div className='event-price'>
                <p>$10 / person</p>
                <button type="button" onClick={openForm}>Request ticket(s)</button>
                <p>View subsidization request form <a href="">here</a></p>
            </div>
          </div>
        </div>
        {formOpen && <RequestForm isOpen={formOpen} />}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Event;
