package com.assignment.Blackcoffer;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface DashboardRepository extends MongoRepository<DashboardEntity, String> {

	
	    List<DashboardEntity> findByEndYear(int endYear);
	    List<DashboardEntity> findByTopic(String topic);
	    List<DashboardEntity> findBySector(String sector);
	    List<DashboardEntity> findByRegion(String region);
	    List<DashboardEntity> findByPestle(String pestle);
	    List<DashboardEntity> findBySource(String source);
	   
	   
	}



