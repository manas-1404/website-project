import React, { useState, useEffect } from 'react';

function Dropdown() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderDropdown = () => {
    if (windowWidth <= 500) {
      return (
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      );
    } else {
      return (
        <input type="text" placeholder="" />
      );
    }
  };

  return (
    <div>
      {renderDropdown()}
    </div>
  );
}

export default Dropdown;
