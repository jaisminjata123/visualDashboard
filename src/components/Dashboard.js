

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import Chart from './ChartComponent';
import axios from 'axios';
import '../style.css';
import PropTypes from 'prop-types';

const Dashboard = () => {
    const [endYearData, setEndYearData] = useState([]);
    const [regionData,setRegionData]=useState([]);
    const [sectorData,setSectorData]=useState([]);
    const [pestleData,setPestleData] = useState([]);
    const [topicData,setTopicData] = useState([]);
    const [sourceData,setSourceData]=useState([]);
    const [endYearOptions, setEndYearOptions] = useState([]);
    const [selectedEndYear, setSelectedEndYear] = useState('');
    const [topicOptions, setTopicOptions] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState('');
    const [sectorOptions,setSectorOptions] = useState([]);
    const [selectedSector,setSelectedSector ]= useState('');
    const [regionOptions,setRegionOptions] = useState([]);
    const [selectedRegion,setSelectedRegion] = useState('');
    const [pestleOptions,setPestleOptions] = useState([]);
    const [selectedPestle,setSelectedPestle] = useState('');
    const [sourceOptions,setSourceOptions] = useState([]);
    const [selectedSource,setSelectedSource] = useState('');



    useEffect(() => {
        fetchData();
        fetchEndYearOptions();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/dashboard/data');
            const topicsArray = response.data.map(item => item.topic);
            const sectorArray = response.data.map(item=>item.sector);
            const regionArray = response.data.map(item=>item.region);
            const pestleArray = response.data.map(item=>item.pestle);
            const sourceArray = response.data.map(item=>item.source);

            setTopicOptions([...new Set(topicsArray)]); 
            setSectorOptions([...new Set(sectorArray)])
            setRegionOptions([...new Set(regionArray)]);
            setPestleOptions([...new Set(pestleArray)]);
            setSourceOptions([...new Set(sourceArray)]);
          
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const fetchEndYearOptions = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/dashboard/endYearOptions');
            setEndYearOptions(response.data);
        } catch (error) {
            console.error('Error fetching endYear options:', error);
        }
    };


    const handleEndYearChange = async (value) => {
        setSelectedEndYear(value);
        fetchDataByEndYear(value);
    };

    const handleTopicChange = async (value) => {
        setSelectedTopic(value);
        fetchDataByTopic(value);
    };

    const handleSectorChange = async (value) => {
        setSelectedSector(value);
        fetchDataBySector(value);
    };
    const handlePestleChange = async (value) => {
        setSelectedPestle(value);
        fetchDataByPestle(value);
    };
    const handleSourceChange = async (value) => {
        setSelectedSource(value);
        fetchDataBySource(value);
    };
    const handleRegionChange = async (value) => {
        setSelectedRegion(value);
        fetchDataByRegion(value);
    };


    const fetchDataByEndYear = async (endYear) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/dashboard/endYear/${endYear}`);
            setEndYearData(response.data);
        } catch (error) {
            console.error('Error fetching data by endYear:', error);
        }
    };

    const fetchDataByTopic = async (topic) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/dashboard/topic/${topic}`);
            setTopicData(response.data);
        } catch (error) {
            console.error('Error fetching data by topic:', error);
        }
    };

    const fetchDataBySector = async (sector) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/dashboard/sector/${sector}`);
            setSectorData(response.data);
        } catch (error) {
            console.error('Error fetching data by topic:', error);
        }
    };
    const fetchDataByRegion = async (region) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/dashboard/region/${region}`);
            setRegionData(response.data);
        } catch (error) {
            console.error('Error fetching data by topic:', error);
        }
    };
    const fetchDataByPestle = async (pestle) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/dashboard/pestle/${pestle}`);
            setPestleData(response.data);
        } catch (error) {
            console.error('Error fetching data by topic:', error);
        }
    };
    const fetchDataBySource = async (source) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/dashboard/source/${source}`);
            setSourceData(response.data);
        } catch (error) {
            console.error('Error fetching data by topic:', error);
        }
    };
    return (
        <div className='dashboard'>
        
       
            <div className="chart-container">
                <Filter options={endYearOptions} onChange={handleEndYearChange} label='End Year' />
                <Chart data={endYearData} chartType="bar" />
            </div>
        
            <div className="chart-container">
                <Filter options={regionOptions} onChange={handleRegionChange} label='Region' />
                <Chart data={regionData} chartType="pie" />
            </div>

            <div className="chart-container">
                <Filter options={sectorOptions} onChange={handleSectorChange} label='Sector' />
                <Chart data={sectorData} chartType="line"/>
            </div>

            <div className="chart-container">
                <Filter options={sourceOptions} onChange={handleSourceChange} label='Source' />
                <Chart data={sourceData} chartType="doughnut"/>
            </div>

            <div className="chart-container">
                <Filter options={pestleOptions} onChange={handlePestleChange} label='Pestle' />
                <Chart data={pestleData} chartType="bar"/>
            </div>

            <div className="chart-container">
                <Filter options={topicOptions} onChange={handleTopicChange} label='Topic' />
                <Chart data={topicData} chartType="pie"/>
            </div>

            {/* Add other filters and charts */}
        </div>
    );
};

export default Dashboard;
