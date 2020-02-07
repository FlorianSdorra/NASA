import React from 'react';
import './style/App.scss';
import DateInput from './components/DateInput';
import Photo from './components/Photo';
import InfoPart from './components/InfoPart';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date:"",
      photo:"",
    };
    this.changeDate = this.changeDate.bind(this)
  }

  componentDidMount=()=>{
    const apiKey = 'YBS2CdMoplI1ogI0sqritMTlJ2ibap9RLzKmR8SX';
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`) 
    .then(response => response.json())
    .then(json => this.setState({ photo: json, info: json }))
    console.log(this.state)
  }

 

  changeDate = e => {
    e.preventDefault();
    var dateFromInput = e.target[0].value
    this.setState(
      {
        date: dateFromInput
      }
    )
  };
  render(){
    return (
      <div className="app">
        <header className="header">
          <h1>NASA's Astronomy Picture of the Day</h1>
        </header>
        <DateInput changeDate={this.changeDate}></DateInput>
        <Photo data={this.state.photo}></Photo>
        <InfoPart data={this.state.photo}></InfoPart>
      </div>
    )
  }
  ;
}

export default App;
