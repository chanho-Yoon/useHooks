import { useState } from 'react';

export const useInput = (initValue = null) => {
  const [value, setValue] = useState(initValue);
  const handler = (e) => {
    setValue(e.target.value);
  };
  return [value, handler];
};
