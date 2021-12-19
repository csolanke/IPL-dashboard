package org.cds.ipldashboard.controller;

import java.time.LocalDate;
import java.util.List;

import org.cds.ipldashboard.model.Match;
import org.cds.ipldashboard.model.Team;
import org.cds.ipldashboard.repository.MatchRepository;
import org.cds.ipldashboard.repository.TeamRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    

    @GetMapping("/teams/{teamName}")
    public Team getTeam(@PathVariable String teamName) {

        Team team = teamRepository.findByTeamName(teamName);
        team.setMatches(matchRepository.findLatestMatchesbyTeam(teamName, 4));

        return team;
    }

    @GetMapping("/teams")
    public Iterable<Team> getAllTeams()
    { 
        return teamRepository.findAll();

    }

    @GetMapping("/teams/{teamName}/matches")
    public List<Match> getMatchesForTem(@PathVariable String teamName, @RequestParam int year)
    {
        LocalDate dateStart = LocalDate.of(year, 1, 1);
        LocalDate  dateEnd = LocalDate.of(year +1 , 1, 1);

        return matchRepository.getMatchesByTeamBetweenDates(teamName, dateStart, dateEnd);
    }

}
