import React, { Component } from 'react'
import TempInput from './TempInput'
import './App.css'
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      LastInput:'',
      LastType:''
    }
    // this.tempCel = this.tempCel.bind(this);
    this.tempFah = this.tempFah.bind(this);
  }
  tempFah(type,temp){

    this.setState({
      LastInput:temp,
      LastType:type

    });
    // console.log(type+" "+temp);
    
  // }
  // tempCel(type,temp){

  //   this.setState({
  //     LastInput:temp,
  //     LastType:type

  //   })
    // console.log(this.LastInput+" "+this.LastType);
  }
   cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  // var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    // console.log(message);
    return cToFahr;
}

 fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  // var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    // console.log(message);
    return fToCel;
} 
  render() {
    var celcius = this.state.LastType==='c' ? this.state.LastInput:this.fToC(this.state.LastInput);
    var farha = this.state.LastType==='f' ? this.state.LastInput:this.cToF(this.state.LastInput);
    return (
      <div className="App col-md-10 me-5 " style={{alignItems:'center'}}>
        <p> Temperature Converter</p>
        <TempInput type='c' temp={celcius} handleFunc={this.tempFah}  />
      
      <TempInput type='f' temp={farha} handleFunc={this.tempFah}  />
      </div>
    )
  }
}
