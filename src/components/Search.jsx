import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const [data, setData] = useState(
        {
            "name": ""
        }
    )

    const [result, setResult] = useState([])
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const deleteBook = (id) => {
        const input = { "_id": id }
        axios.post("http://localhost:8080/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully Deleted")
                } else {
                    alert("Error in deletion")
                }
            }

        )
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    return (
        <div>
            <Navbar />
            <center>
                <h3>Search Song</h3>
            </center>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Song Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-primary" onClick={readValue}>Search</button>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table className="table table-dark table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">SL No</th>
                                    <th scope="col">Song name</th>
                                    <th scope="col">Artist </th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Date of Release</th>
                                    <th scope="col">Language</th>
                                    <th scope="col">Streaming Site</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    result.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{value.name}</td>
                                                <td>{value.artist}</td>
                                                <td>{value.genre}</td>
                                                <td>{value.dateOfRelease}</td>
                                                <td>{value.language}</td>
                                                <td>{value.streamingSite}</td>
                                                <td><button className="btn btn-danger" onClick={()=>{deleteBook(value._id)}}>Delete</button></td>

                                            </tr>
                                        }
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Search