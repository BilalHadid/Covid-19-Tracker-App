import React,{Component} from 'react'
import axios from 'axios'
import {Card} from '../component/card/card'
import {Chart} from '../component/chart'

class Api extends Component{
    state ={
        countries: [],
        currentDate: null,
        global: [],
        loading : true
    }
    async componentDidMount(){
        const res = await axios.get("https://api.covid19api.com/summary")
        console.log(res)
        this.setState({Countries: res.data.countries})
        this.setState({currentDate: res.data.Date})
        this.setState({global: res.data.Global})
        this.setState({loading: false})
    }
    render(){
        if(this.state.loading){
            return <h1>Loadding....</h1>
        }
        
        return(
            <div>
                <Card finalize = {this.state.global} currentDate = {this.state.currentDate}/>
                <Chart finalize = {this.state.global}/>
            </div>
        )
    }
}
export default Api