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

const DayChar: React.FC = () => {
  const [character, setCharacter] = useState<Data[]>([]);

  useEffect(() => {
    request.randomCharacter().then((res: any) => {
      setCharacter([
        {
          about: res.about,
          animeography: res.animeography,
          image_url: res.image_url,
          mangaography: res.mangaography,
          name: res.name,
          name_kanji: res.name_kanji,
          voice_actors: res.voice_actors,
        },
      ]);
    });
  }, []);

  return (
    <div className={daychar.container}>
      <h2 className={daychar.header}>Character of the Day</h2>
      {character.map(data => {
        return (
          <div className={daychar.charContainer}>
            <img
              className={daychar.charImg}
              src={data.image_url}
              alt={`Picture of the anime character ${data.name}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DayChar;
