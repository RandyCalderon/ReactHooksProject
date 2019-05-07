import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import request from '../../api/requests';
import trending from './trending.module.scss';

const { Meta } = Card;

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
    let count = 1;
    request.topAnime(count).then((res: any) => {
      setAnime(res.top);
      console.log(anime);
    });
  }, [anime]);

  return (
    <div className={trending.container}>
      <h2 className={trending.header}>Trending</h2>
      <div className={trending.cardcontainer}>
        {anime.map((anime, ind) => {
          return (
            <Card
              hoverable
              style={{ width: 150, margin: 5 }}
              cover={
                <img
                  height="170"
                  width="200"
                  alt={anime.title}
                  src={anime.image_url}
                />
              }
            >
              <Meta className={trending.meta} title={anime.title} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
