package com.assignment.Blackcoffer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.Fields;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:3000")
public class DashboardController {
	 @Autowired
	 private MongoTemplate mongoTemplate;


    @Autowired
    private DashboardRepository dashboardRepository;

    @RequestMapping("/login")
    public String welcome() {
        return "WELCOMME";
    }
    @GetMapping("/data")
    public List<DashboardEntity> getAllData() {
        return dashboardRepository.findAll();
    }
   
    @GetMapping("/endYear/{endYear}")
    public List<DashboardEntity> getDataByEndYear(@PathVariable int endYear) {
        return dashboardRepository.findByEndYear(endYear);
    }
    @GetMapping("/endYearOptions")
    public List<Integer> getEndYearOptions() {
        // Retrieve all data from the MongoDB collection
        List<DashboardEntity> allData = dashboardRepository.findAll();

        // Extract distinct endYear values from the results
        List<Integer> endYearOptions = allData.stream()
                .map(DashboardEntity::getEndYear)
                .distinct()
                .collect(Collectors.toList());

        return endYearOptions;
    }
    
    @GetMapping("/topic/{topic}")
    public List<DashboardEntity> getDataByTopic(@PathVariable String topic) {
    	
        return dashboardRepository.findByTopic(topic);
    }

    @GetMapping("/sector/{sector}")
    public List<DashboardEntity> getDataBySector(@PathVariable String sector) {
        return dashboardRepository.findBySector(sector);
    }

    @GetMapping("/region/{region}")
    public List<DashboardEntity> getDataByRegion(@PathVariable String region) {
        return dashboardRepository.findByRegion(region);
    }

    @GetMapping("/pestle/{pestle}")
    public List<DashboardEntity> getDataByPestle(@PathVariable String pestle) {
        return dashboardRepository.findByPestle(pestle);
    }

    @GetMapping("/source/{source}")
    public List<DashboardEntity> getDataBySource(@PathVariable String source) {
        return dashboardRepository.findBySource(source);
    }


}
