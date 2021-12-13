import {React, useEffect,useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage =()=> {

   const [team,setTeam] =[{}];

    useEffect(
      () => {

         const fetchMatches = async ()=> {
            const response  = await fetch('http://localhost:8080/teams/Delhi Capitals');
            const data = await response.json();

             console.log(data);
         };

         fetchMatches();
      }

    );


  return (
    <div className="TeamPage">
          <h1>Rajstan Royals</h1>
          <MatchDetailCard/>
          <MatchSmallCard/>
          <MatchSmallCard/>
          <MatchSmallCard/>

    </div>
  );
}


