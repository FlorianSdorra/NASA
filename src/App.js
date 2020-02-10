import React from 'react';
import './style/App.scss';
import DateInput from './components/DateInput';
import Photo from './components/Photo';
import InfoPart from './components/InfoPart';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      photo:"",
    };
    this.changeDate = this.changeDate.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  componentDidMount=()=>{
    const apiKey = 'YBS2CdMoplI1ogI0sqritMTlJ2ibap9RLzKmR8SX';
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`) 
    .then(response => response.json())
    .then(json => this.setState({ photo: json}))
  }

  formatDate = input => {
    const res = moment(input).format("").slice(0,10);
    return res
  }

  changeDate = value => {
    this.getPhoto(this.formatDate(value));
    };

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };


  render(){
    return (
      <div className="app">
        <header className="header">
          <h1>NASA's Astronomy Picture of the Day</h1>
        </header>
        <DateInput changeDate={this.changeDate} date={this.state.date}></DateInput>
        <Photo data={this.state.photo}></Photo>
        <InfoPart data={this.state.photo}></InfoPart>
      </div>
    )
  }
  ;
}

export default App;
