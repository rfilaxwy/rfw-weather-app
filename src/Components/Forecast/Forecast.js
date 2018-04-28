import React, { Component } from 'react';
import axios from 'axios';
const apiKey ='66c68698f81488ad';
const apiURL = `http://api.wunderground.com/api/${apiKey}/`;




//http://api.wunderground.com/api/YOUR_API_KEY/forecast10day/q/${state}/${city}.json

export default class Forecast extends Component {
    
    constructor(){
        super()
            this.state = {
                city:'',
                state:'',
                fiveDay:[],
                pastSearch:[]
            }
            this.handleCity = this.handleCity.bind(this)
            this.handleState = this.handleState.bind(this)
            this.getWeather = this.getWeather.bind(this)
                } 
componentsDidMount(){
    this.setState({pastSearch:pastSearch.slice(0,3)})
}
handleCity(value){
    console.log(value)
    this.setState({city:value})
    }

handleState(value){
    console.log(value)
    this.setState({state:value})
    }

getWeather(){
    let weatherQuery = `${apiURL}forecast10day/q/${this.state.state}/${this.state.city}.json`
    let pastSearchCopy = this.state.pastSearch
    let fiveDayCopy = []
    pastSearchCopy.concat(this.state.city)
    this.setState({pastSearch:pastSearchCopy})
    axios.get(weatherQuery).then(results=>{
        fiveDayCopy = results.data.forecast.simpleforecast.forecastday.slice(0,5)
        this.setState({fiveDay:fiveDayCopy})
        console.log(this.state.fiveDay)
    } )
    this.setState({pastSearch:pastSearchCopy})
    document.getElementById('fiveDay').innerHTML = 'Five day forecast'

}

    render() {
        let weatherDisplay = 
            this.state.fiveDay.map( (element, index) => {
                return (
                <div  key={ index }>{ element.date.monthname} <br/>
                                    { element.date.day}th   <br/>
                                    { element.high.celsius} celsius <br/>
                                    { element.low.celsius} celsius 
                                    
                </div>                
                )
                })
       
        

                
        return (
            <div>
                <div>
                    
                    <input onChange={ (e) => this.handleCity(e.target.value)} placeholder='City'/>
                  
                    <div class="form-group">
                    <div class="col-sm-10">
                        <select onChange={ (e)=> this.handleState(e.target.value)} id="state" name="state">
                            <option value="">_State_</option>
                            <option value="AK">Alaska</option>
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="AZ">Arizona</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DC">District of Columbia</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="IA">Iowa</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MD">Maryland</option>
                            <option value="ME">Maine</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MO">Missouri</option>
                            <option value="MS">Mississippi</option>
                            <option value="MT">Montana</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="NE">Nebraska</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NV">Nevada</option>
                            <option value="NY">New York</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VA">Virginia</option>
                            <option value="VT">Vermont</option>
                            <option value="WA">Washington</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WV">West Virginia</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        </div>
                    </div>
                    <button onClick={this.getWeather}>
                        Search</button>
                    </div>
                    <div id="fiveDay">
                        Enter a city</div>
                    <div className='weatherDisplay'>
                        <div className='weather'>{weatherDisplay}</div>
                        
   
                    </div>




                <section>Your past three searchs are {this.pastSearch}</section>
            </div>
        )
    }
}