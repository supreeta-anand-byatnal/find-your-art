import React, { useState } from 'react';
import './Event.css';
import event from '../../assets/sample_event_page.png';
import organizer from '../../assets/Ellipse 797.svg';
import calendar from '../../assets/CalendarBlank.svg';
import map from '../../assets/MapPin.svg';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TextInput from '../../components/TextInput/TextInput';
import CheckboxList from '../../components/CheckboxList/CheckboxList';


const TextAreaInput = ({ label, value, onChange }) => (
  <div className="form-group">
    <label htmlFor={label}>{label}:</label>
    <textarea
      id={label}
      value={value}
      onChange={onChange}
    />
  </div>
);

const PopupForm = ({ isOpen }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [message, setMessage] = useState('');

  const eventServices = [
    'Ticket request',
    'Ticket subsidization',
    'Pre- and post-event workshop',
    'Post-event discussion'
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform your form submission logic
    // Set form to empty
    console.log('Submitted:', { name, selectedServices, email, message });
  };

  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <h2>Request Form</h2>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={'Jane Doe'}
            required
          />
          <CheckboxList 
            options={eventServices}
            selectedOptions={selectedServices}
            onCheckboxChange={setSelectedServices}
          />
          <TextInput
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={'janedoe@newyorkschools.org'}
            required
          />
          <TextAreaInput
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

const Event = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  return (
    <>
      <NavBar />
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
              <button type="button" onClick={openPopup}>Request ticket(s)</button>
              <p>View subsidization request form <a href="">here</a></p>
          </div>
        </div>
      </div>
      {popupOpen && <PopupForm isOpen={popupOpen} />}
      {/* <Footer /> */}
    </>
  );
};

export default Event;
