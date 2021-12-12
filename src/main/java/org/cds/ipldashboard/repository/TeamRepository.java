package org.cds.ipldashboard.repository;

import org.cds.ipldashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long> {

    public Team findByTeamName(String teamName);

}
