import React, { useState } from "react";
import {
    Form,
    Button,
    Col,
    Input,
    NavLink
} from "reactstrap";

import {FaSearch} from "react-icons/fa"
import Axios from "axios";
import { Redirect, Link } from "react-router-dom";

const SEARCH_URL = "https://images-api.nasa.gov/search?q="


const SearchIcon = () => {
    const [keyword,setKeyword] = useState("");
    const [searchResult, setSearchResult] = useState({});

    const handleSub = (e) =>{
        e.preventDefault();
        handleSearchResult(keyword);
    }

    
    const handleSearchResult = async(keyword) =>{
        const data = await Axios.get(SEARCH_URL + keyword);
        console.log("Search Result", data.data);
        setSearchResult({result : data.data});
        console.log(searchResult);

    }

    if(searchResult){
        <Redirect to="/search"></Redirect>
    }

    return (
    <Col md={12}>
        <Form>
            <div row style={{display:"inline-flex"}}>
                <Input
                type="text"
                placeholder="Search "
                onChange={e => {
                    e.preventDefault();
                    setKeyword(e.target.value)
                    }}
                ></Input>
                <Button><FaSearch onClick={() => handleSub}></FaSearch></Button>
            </div>
        </Form>
    </Col>
  );
}

export default SearchIcon;