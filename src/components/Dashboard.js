import React from 'react'

const Dashboard = ({covidData}) => {

    let worldCount = {
        infected: 0,
        recovered: 0,
        deceased: 0
    }

    let newList = covidData.map(country => {
        worldCount.infected += country.infected
        worldCount.recovered = country.recovered !== 'NA' ? worldCount.recovered + country.recovered : worldCount.recovered
        worldCount.deceased += country.deceased

        return (
            <div className="countryDetails" key={country.country}>
                <p>{country.country}</p>
                <p>{country.infected}</p>
                <p>{country.recovered}</p>
                <p>{country.deceased}</p>
            </div>
        )
    })

    return(
        <div id="dashboard">
            <div id="navigation">
                <h2>Covid19</h2>
                <h3>World</h3>
                <div id="tabs">
                    <p className="active">Home</p>
                    <p>Blog</p>
                    <p>About</p>
                </div>
            </div>
            <div id="overview">
                <h3>Worldwide Overview:</h3>
                <div id="stats">
                    <div id="infected" className="card">
                        <p>Infected</p>
                        <h4>{worldCount.infected}</h4>
                    </div>
                    <div id="recovered" className="card">
                        <p>Recovered</p>
                        <h4>{worldCount.recovered}</h4>
                    </div>
                    <div id="deceased" className="card">
                        <p>Deceased</p>
                        <h4>{worldCount.deceased}</h4>
                    </div>
                </div>
                <div id="table">
                    <div id="heading">
                        <p>Country</p>
                        <p>Infected</p>
                        <p>Recovered</p>
                        <p>Deceased</p>
                    </div>
                    {newList}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;