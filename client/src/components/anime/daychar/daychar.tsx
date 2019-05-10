import React, { useState, useEffect } from 'react';
import request from '../../../api/requests';

// Response Data Character Interface
interface Data {}

const DayChar: React.FC = () => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    request.randomCharacter().then((res: any) => {
      console.log(res);
    });
  });
  return <div>Amazing</div>;
};

export default DayChar;
