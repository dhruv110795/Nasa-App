import React , {useState, useEffect} from 'react';
import Axios from "axios";
import {Container,Row,Col,Card,Alert,CardImg} from "reactstrap";
import SearchIcon from './search_icon';
import {API_KEY} from "../Config/config";

const APOD_URL = "https://api.nasa.gov/planetary/apod?api_key=" + API_KEY

const Home = () => {
    const [apod,setApod] = useState([]);

    const fetchAPOD = async() => {
        const data = await Axios.get(APOD_URL,{});
        console.log(">>>APOD Result",data.data);
        const apodData = data.data;
        const apodInfo = {}
        apodInfo["title"] = apodData.title;
        apodInfo["image"] = apodData.url;
        apodInfo["explanation"] = apodData.explanation;
        apodInfo["date"] = apodData.date;
        setApod(apodInfo);
    };

    useEffect( () => {
        fetchAPOD()
    },[]);
    
    const handleSearch = () => {

    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    }

    return (
        <Container fluid>
            <h1 style={{color:"#004085"}} className="text-center">NASA Media Search</h1>
            <Row>
                <Col md={6}><h3 style={{color:"#004085"}}>{apod.title}</h3></Col>
                <Col md={6}>
                    <SearchIcon onSubmit={handleSearchSubmit}></SearchIcon>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="mt-2 mb-1">
                        <CardImg 
                        top
                        height={500}
                        src={apod.image}>
                        </CardImg>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="mt-2">
                    <Alert color="primary" className="text-center">{apod.explanation}</Alert>
                    <Alert color="primary" className="text-center">{apod.date}</Alert>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;