package com.assignment.Blackcoffer;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "dashboard_data")
public class DashboardEntity {
    @Id
    private String id;
    @Field("end_year")
    private int endYear;
    private double cityLng;
    private double cityLat;
    private String intensity;
    private String sector;
    private String topic;
    private String insight;
    private String url;
    private String region;
    @Field("start_year")
    private int startYear;
    private String added;
    private String published;
    private String relevance;
    private String pestle;
    private String source;
    private String title;
    private String likelihood;
    
    public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getEndYear() {
		return endYear;
	}
	public void setEndYear(int endYear) {
		this.endYear = endYear;
	}
	public double getCityLng() {
		return cityLng;
	}
	public void setCityLng(double cityLng) {
		this.cityLng = cityLng;
	}
	public double getCityLat() {
		return cityLat;
	}
	public void setCityLat(double cityLat) {
		this.cityLat = cityLat;
	}
	public String getIntensity() {
		return intensity;
	}
	public void setIntensity(String intensity) {
		this.intensity = intensity;
	}
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = sector;
	}
	public String getTopic() {
		return topic;
	}
	public void setTopic(String topic) {
		this.topic = topic;
	}
	public String getInsight() {
		return insight;
	}
	public void setInsight(String insight) {
		this.insight = insight;
	}
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public int getStartYear() {
		return startYear;
	}
	public void setStartYear(int startYear) {
		this.startYear = startYear;
	}
	
	public String getAdded() {
		return added;
	}
	public void setAdded(String added) {
		this.added = added;
	}
	public String getPublished() {
		return published;
	}
	public void setPublished(String published) {
		this.published = published;
	}
	public String getRelevance() {
		return relevance;
	}
	public void setRelevance(String relevance) {
		this.relevance = relevance;
	}
	public String getPestle() {
		return pestle;
	}
	public void setPestle(String pestle) {
		this.pestle = pestle;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getLikelihood() {
		return likelihood;
	}
	public void setLikelihood(String likelihood) {
		this.likelihood = likelihood;
	}
	

}
