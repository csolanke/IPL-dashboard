import {React} from 'react';
import {useState, useEffect} from 'react'
import { TeamTile } from '../components/TeamTile';


export const HomePage =()=>{
   
    const [teams , setTeams]=useState([]);

    useEffect(
        () => {
    
          const fetchAllTeams = async () => {
            const response = await fetch('http://localhost:8080/teams');
            const data = await response.json();
            console.log(data);
            setTeams(data);
          };
    
          fetchAllTeams();
        }, []
    
      );
    


    return(
        <div className="HomePage">
      <div className="header-section">
          <h1 className="app-name">CDS IPL Dashboard</h1>
      </div>
     <div className="team-grid">
      { teams.map(team => <TeamTile teamName={team.teamName}/>)}
     </div>

    </div>
    );

}