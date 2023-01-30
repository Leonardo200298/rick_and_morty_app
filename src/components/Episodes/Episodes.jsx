import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import getEpisodes from '../../helpers/getEpisodes'
import styles from './episodes.module.css';

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const getEpisodesHere = () => {
    getEpisodes().then((data) => {
      setEpisodes(data);
    })
  }
  useEffect(() => {
    getEpisodesHere();

  }, [])
  return (
    <div className={styles.containerEpisodes}>{
      episodes.map((episode) => {
        return (
          <div key={episode.id}>
            <h1>Title: {episode.name}</h1>
            <h2>Aire date: {episode.air_date}</h2>
            <h2>Number Episode: {episode.episode}</h2>
          </div>
          
        )
      })
    }</div>
  )
}
