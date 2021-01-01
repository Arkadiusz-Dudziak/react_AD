
/*
import React from "react"
import {useState} from 'react'
import DataAdminObject from "../DataAdminObject.json"
function Filter()
{
    const [searchTerm, setSearchTerm] = useState("");
    return(
        <div>
            <input type="text" 
            name="administrator"
            placeholder="szukaj..."
            onChange={(event) => {
                setSearchTerm(event.target.value);
            }}
        />
        {
            DataAdminObject.filter((val)=>{
                if (searchTerm == ""){
                    return val
                } else if(val.login.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((val, key) => {
                return(
                        <p>{val.login}</p>
                )
            })
        } 
        </div>
        
    )
}
export default Filter;
*/


/*  https://github.com/HuakunShen/demo/blob/master/React/search-bar/src/App.jsx */
/*
import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DataAdminObject from "../DataAdminObject.json"

const SearchbarDropdown = (props) => {
  const { options, onInputChange } = props;
  const ulRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      ulRef.current.style.display = 'flex';
      onInputChange(event);
    });
    document.addEventListener('click', (event) => {
      ulRef.current.style.display = 'none';
    });
  }, []);
  return (
    <div className="search-bar-dropdown">
      <input
        id="search-bar"
        type="text"
        className="form-control"
        placeholder="szukaj"
        ref={inputRef}
        onChange={onInputChange}
      />
      <ul id="results" className="list-group" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={(e) => {
                inputRef.current.value = option;
              }}
              className="list-group-item list-group-item-action"
            >
              {option}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

var administrators = DataAdminObject.map(function(admin) {
    return admin.login;
  });

function App() {
  const [options, setOptions] = useState([]);
  const onInputChange = (event) => {
    setOptions(
        administrators.filter((option) => option.includes(event.target.value))
    );
  };

  return (
    <div className="App container mt-2 mb-3">
      <SearchbarDropdown options={options} onInputChange={onInputChange} />
    </div>
  );
}

export default App;

*/