import { useState } from 'react';

export default function useToggle() {
  const [isToggle, setToggle] = useState(false);
  const handleOpenToggle = () => {
    console.log('?');
    setToggle(true);
  };
  const handleCloseToggle = () => setToggle(false);
  const handleToggle = () => setToggle((prevToggle) => !prevToggle);

  return {
    isToggle,
    handleOpenToggle,
    handleCloseToggle,
    handleToggle,
  };
}
