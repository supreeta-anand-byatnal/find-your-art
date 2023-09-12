import React, { useState } from 'react';
import './RequestForm.css';
import TextInput from '../../components/TextInput/TextInput';
import CheckboxList from '../../components/CheckboxList/CheckboxList';
import TextAreaInput from '../../components/TextAreaInput/TextAreaInput';

const RequestForm = ({ isOpen }) => {
  const [name, setName] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [selectedEduServices, setSelectedEduServices] = useState([]);
  const [selectedEventServices, setSelectedEventServices] = useState([]);
  const [message, setMessage] = useState('');

  const eventServices = [
    'Ticket request',
    'Ticket subsidization',
    'Pre- and post-event workshop',
    'Post-event discussion'
  ]

  const eduServices = [
    'Integrated arts workshop(s)',
    'Skill-based art workshop(s)',
    'Professional Development',
    'Creative Curriculum Support'
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform your form submission logic
    // Set form to empty
    console.log('Submitted:', { name, selectedEventServices, email, message });
  };

  return (
    <div className={`form ${isOpen ? 'open' : ''}`}>
      <h2>Request Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-content">
            <TextInput
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={'Jane Doe'}
              required
            />
            <TextInput
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={'janedoe@newyorkschools.org'}
              required
            />
            <TextInput
              label="School / Group name"
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              placeholder={'Jane Doe'}
              required
            />
            <CheckboxList 
              label="Event services"
              options={eventServices}
              selectedOptions={selectedEventServices}
              onCheckboxChange={setSelectedEventServices}
            />
            <CheckboxList 
              label="Educational services"
              options={eduServices}
              selectedOptions={selectedEduServices}
              onCheckboxChange={setSelectedEduServices}
            />
          </div>
          <TextAreaInput
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default RequestForm;