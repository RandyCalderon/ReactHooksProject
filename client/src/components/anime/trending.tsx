import React, { useState, useEffect } from 'react';
import request from '../../api/requests';

// Response Data Trending Interface
interface Data {
  title: string;
  rank: number;
  episodes: number;
  start_date: string;
  url: string;
  image_url: string;
  mal_id: number;
  score: number;
  end_date: string | null;
}

const Trending: React.FC = () => {
  const [anime, setAnime] = useState<Data[]>([]);
  // Look back at ways to improve fetching and not have it re-render too often
  useEffect(() => {
    request.topAnime().then((res: any) => {
      setAnime(res.top);
    });
  }, [anime]);

  return (
    <div>
      <h2>Trending</h2>
      {anime.map((anime, ind) => {
        return <li key={ind}>{anime.title}</li>;
      })}
    </div>
  );
};

export default Trending;
