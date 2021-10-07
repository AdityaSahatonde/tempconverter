import React, { Component } from 'react'
import './TempInput.css'
export default class TempInput extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     temp:this.props.temp
        // }
         this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        // this.setState({
        //     temp:e.target.value
        // })
        this.props.handleFunc(this.props.type,e.target.value);
        // console.log(this.props.type+" "+e.target.value)
    }
    render() {
        if(this.props.type==='c'){
            var placeholder = "Enter Celcius Temperature";
        }
        else{
             placeholder = "Enter Farhanite Temperature";
        }
        return (
            <div className="container-fluid ms-2">
            <div className="row  mx-auto mt-2" style={{width:500}}>
                <div className="col-md-7 size ms-5">
                <input value={this.props.temp} placeholder={placeholder} onChange={this.handleChange}/>
                {this.props.type==='c'? <p>Celsius</p>:<p>Fahrenheit</p>}
                </div>
            </div>
            
                
            </div>
        )
    }
}
