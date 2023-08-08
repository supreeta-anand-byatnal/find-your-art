import React from 'react';
import './Event.css';
import event from '../../assets/sample_event_page.png';
import organizer from '../../assets/Ellipse 797.svg';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Event = () => {
  return (
    <>
      <NavBar />
      <>
        <img src={event} alt="event" />
        <h2>Event Title</h2>
        <div>
            <div className='event-details'></div>
            <div className='event-description'>
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, metus in rhoncus maximus, massa ipsum venenatis dui, ac hendrerit libero dui a eros. Aenean non consectetur lorem, eu accumsan nibh. Fusce a mi sed nisl laoreet tincidunt. Maecenas vel scelerisque tortor. Aliquam mattis quis mi et aliquam. Integer in interdum augue. Curabitur convallis dictum tincidunt.</p>
                <h3>Tags</h3>
                <div>
                    <p>Tag 1</p>
                    <p>Tag 2</p>
                    <p>Tag 3</p>
                </div>
                <h3>Organizers</h3>
                <img src={organizer} alt="organizer" />
                <a href="">Creative Capital</a>
            </div>
        </div>
        <div className='event-price'>
            <p>$10 / person</p>
            <button type="button">Request ticket(s)</button>
            <p>View subsidization request form <a href="">here</a></p>
        </div>
      </>
      {/* <Footer /> */}
    </>
  );
};

export default Event;
