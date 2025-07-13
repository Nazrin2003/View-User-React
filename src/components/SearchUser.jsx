import React from 'react'
import Nav from './Nav'

const SearchUser = () => {
    return (
        <div>
            <Nav />
            <div className="container px-4 py-2">
                <center><h2>Search User</h2></center>
                <div className="row g-4 px-4 py-2">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Enter User Name to search</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchUser