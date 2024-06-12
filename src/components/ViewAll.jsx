import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:8080/viewall").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }

    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Navbar />
            <center>
                <h3>View All Songs</h3>
            </center>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

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
                                </tr>
                            </thead>
                            <tbody>
                            {

                                data.map(
                                (value, index) => {
                                    return <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{value.name}</td>
                                    <td>{value.artist}</td>
                                    <td>{value.genre}</td>
                                    <td>{value.dateOfRelease}</td>
                                    <td>{value.language}</td>
                                    <td>{value.streamingSite}</td>
                                    
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

export default ViewAll