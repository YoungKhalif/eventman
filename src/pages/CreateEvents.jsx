import { useState } from 'react';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Created:', formData);
    // Add API call here
  };

  return (
    <div className="page">
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Event Title" 
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          required
        />
        <input 
          type="date" 
          value={formData.date}
          onChange={(e) => setFormData({...formData, date: e.target.value})}
          required
        />
        <textarea 
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          required
        />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;