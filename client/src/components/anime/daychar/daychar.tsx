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

  // Look into refetch issue and handling issues with randomCharacter request or find other api to query from to prevent issues
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await request.randomCharacter();
        if (result.animeography.length === 0 || result.length === 0) {
          result();
        } else {
          setCharacter([
            {
              about: result.about,
              animeography: result.animeography,
              image_url: result.image_url,
              mangaography: result.mangaography,
              name: result.name,
              name_kanji: result.name_kanji,
              voice_actors: result.voice_actors,
            },
          ]);
        }
      } catch {}
    };
    fetchData();
  }, []);

  console.log(character);
  return (
    <div className={daychar.container}>
      <h2 className={daychar.header}>Character of the Day</h2>
      {character.map(data => {
        return (
          <React.Fragment>
            <img
              height="220"
              width="180"
              className={daychar.charImg}
              src={data.image_url}
              alt={`Picture of the anime character ${data.name}`}
            />
            <span className={daychar.charspan}>{data.name}</span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default DayChar;
