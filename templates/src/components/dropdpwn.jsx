import React, { useState, useRef, useEffect } from 'react';

const DropdownMenu = () => { // Props removed from here
  // Hardcoded options
  const options = [
    { label: 'Select seasonal insight', value: 'dashboard' },
    { label: 'Settings', value: 'settings' },
    { label: 'Profile', value: 'profile' },
    { label: 'Logout', value: 'logout' },
  ];
const initialSelected = options[0];
  const onSelect = (option) => {
    console.log('Selected (hardcoded):', option.label);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(initialSelected);
  const dropdownRef = useRef(null);

  // Effect to handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    onSelect(option); // Call the internal onSelect handler
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="dropdown-wrapper">
      {/* Dropdown Card Container */}
      <div
        className="dropdown-header"
        onClick={handleToggle}
      >
        <span className="dropdown-selected-label">
          {selected.label}
        </span>
        <svg
          className={`dropdown-arrow ${isOpen ? 'rotate' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

      {/* Dropdown Options List */}
      {isOpen && (
        <div className="dropdown-options-list">
          <ul>
            {options.map((option) => (
              <li
                key={option.value}
                className={`dropdown-option-item ${selected.value === option.value ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
