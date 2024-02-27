import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onMouseEnter={toggleDropdown}>
        Dropdown
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {selectedItem && <p>You selected: {selectedItem}</p>}
    </div>
  );
};

export default Dropdown;
