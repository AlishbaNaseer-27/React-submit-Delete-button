
import React, { useState } from 'react';

export default function Contact() {
  const [inputValue, setInputValue] = useState('');
  const [dataArray, setDataArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setDataArray([...dataArray, inputValue]); 
      setInputValue(''); 
    }
  };

  const handleDelete = (index) => {
    const updatedDataArray = dataArray.filter((_, i) => i !== index);
    setDataArray(updatedDataArray);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputField" className="form-label">Enter Data:</label>
          <input
            type="text"
            className="form-control"
            id="inputField"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <h4 className="mt-4">Submitted Data:</h4>
      <ul className="list-group mb-5">
        {dataArray.map((data, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {data}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
