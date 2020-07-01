import React, { Component } from 'react'
import Cards from './Components/Cards/Cards'
import Chart from './Components/Chart/Chart'
import CountryPicker from './Components/CountryPicker/CountryPicker'
import styles from "./App.module.css"
import {fetchData} from './Api/index'

export default class App extends Component {

    state = {
        data: {},
    }
    
    async componentDidMount(){
        const fetchedData = await fetchData();
        console.log(fetchedData)

        this.setState({data: fetchedData})
    }

    render() {
        const {data} = this.state;

        return (
            <div className={styles.container}>
                <h1>This is the app Component</h1>
                <Cards data={data}/>
                <Chart />
                <CountryPicker />

            </div>
        )
    }
}

