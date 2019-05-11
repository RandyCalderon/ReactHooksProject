import React, { useState, useEffect } from 'react';
import request from '../../../api/requests';
import daychar from './daychar.module.scss';

// Response Data Character Interface
interface Data {
  about: string;
  animeography: [];
  image_url: string;
  mangaography: [];
  name: string;
  name_kanji: string;
  voice_actors: [];
}

// Payload
interface PayLoad {
  data: Data[];
}

const DayChar: React.FC = () => {
  const [character, setCharacter] = useState<PayLoad>([]);

  useEffect(() => {
    request.randomCharacter().then((res: any) => {
      setCharacter(res);
    });
  }, []);

  return (
    <div>
      <h2 className={daychar.header}>Character of the Day</h2>
    </div>
  );
};

export default DayChar;
