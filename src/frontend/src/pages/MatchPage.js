import {React ,useEffect,useState} from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { useParams} from 'react-router-dom';
import './MatchPage.scss';
import {YearSelector} from '../components/YearSelector';


export const MatchPage =()=> {

  const [matches,setMatches] = useState([]);
  const {teamName, year} = useParams();

  useEffect(
    ()=>{
       const fetchMatches = async ()=>{
  const teamName = "Delhi Capitals"
        const response = await fetch(`http://localhost:8080/teams/${teamName}/matches?year=${year}`);
        const data = await response.json();
        setMatches(data);

     
    };
    fetchMatches();

  },[teamName,year]
  );
   
  return (
    <div className="MatchPage">

       <div className="year-selector">
       <h3>select year</h3>
       <YearSelector teamName ={teamName}/>
       </div>
        
      <div>
      <h1 className="page-heading">{teamName} matches for {year} </h1>
      {
        matches.map(match=> <MatchDetailCard key={match.id}teamName={teamName} match={match}/>)
      }</div>
    </div>
  );
}


