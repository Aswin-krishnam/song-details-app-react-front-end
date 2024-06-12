import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddSong = () => {

        const [data,setData]=useState(
            {
                "name":"",
                "artist":"",
                "genre":"",
                "dateOfRelease":"",
                "production":"",
                "language":"",
                "details":"",
                "streamingSite":""

    
            }
        )
        const inputHandler=(event)=>{
            setData({...data,[event.target.name]:event.target.value})
        }
    
        const readValue=()=>{
            console.log(data)
            axios.post("http://localhost:8080/",data).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Song added Successfully")
                        
                    } else {
                        alert("Error")
                    }   
                }
            ).catch(
                (error)=>{
                    console.log(error.message)
                    alert(error.message)
                }
            )
        }
      return (
        <div>
            <Navbar/>
            <center>
                <h3>Add Songs</h3>
            </center>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Song Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Artist Name</label>
                                <input type="text" className="form-control" name='artist' value={data.artist} onChange={inputHandler} />
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Genre</label>
                                <select id="" className="form-control" name='genre' value={data.genre} onChange={inputHandler}>
                                    <option >-select-</option>
                                    <option value="Rock">Rock</option>
                                    <option value="Indie">Indie</option>
                                    <option value="Classical">Classical</option>
                                    <option value="Pop Music">Pop Music</option>
                                    <option value="Indian Pop">Indian Pop</option>
                                    <option value="Bollywood">Bollywood</option>
                                    <option value="Carnatic">Carnatic</option>
                                    <option value="Hindustani">Hindustani</option>
                                    <option value="Melody">Melody</option>
                                </select>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Date of Release</label>
                                <input type="date" className="form-control" name='dateOfRelease' value={data.dateOfRelease} onChange={inputHandler}/>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Production</label>
                                <input type="text" className="form-control" name='production' value={data.production} onChange={inputHandler}/>
    
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Language</label>
                                <select id="" className="form-control" name='language' value={data.language} onChange={inputHandler}>
                                    <option >-select-</option>
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Malayalam">Malayalam</option>
                                    <option value="Tamil">Tamil</option>
                                    <option value="Sanskrit">Sanskrit</option>
                                    <option value="Telugu">Telugu</option>
                 
                                </select>
    
                            </div>
                        

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    
                                <label htmlFor="" className="form-label">Details</label>
                                <textarea name="details" id="" className="form-control" value={data.details} onChange={inputHandler}></textarea>
    
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Streaming Site</label>
                                <select id="" className="form-control" name='streamingSite' value={data.streamingSite} onChange={inputHandler}>
                                    <option >-select-</option>
                                    <option value="Spotify">Spotify</option>
                                    <option value="Apple Music">Apple Music</option>
                                    <option value="Youtube Music">Youtube Music</option>
                                    <option value="Amazone Music">Amazone Music</option>
                                    <option value="Gaana">Gaana</option>
                                    <option value="JioSavan">JioSavan</option>
                     
                                </select>
    
                            </div>
                    
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
      )
    }

export default AddSong