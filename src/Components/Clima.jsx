import React,{useState,useEffect} from 'react'
import {Row,Col,Card,CardBody,CardTitle,CardText} from 'reactstrap'
import axios from 'axios';

const Clima = () => {
  const kelvin = 273.15;
  let ciudad = 'Valera';
  let pais = 'VE';
  let keyAPI = `eaed9e10df601aab920b0f2f1e13df89`;
  let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${keyAPI}`;
  const [datos,setDatos] = useState([]);
  const [clima,setClima] = useState(1);
  const [humedad,setHumedad] = useState('');
  useEffect(()=>{
    obtenerClima();
  },[]);
  const obtenerClima = async() =>{
    axios.defaults.baseURL = null
    axios.defaults.headers.common['Accept'] = null
    axios.defaults.headers.common['Content-Type'] = null
    axios.defaults.headers.common['X-Requested-With'] = null
    await axios.get(urlAPI).then((response) =>{
      setDatos(response.data)
      setHumedad(response.data.main.humidity)
      setClima(parseInt(response.data.main.temp - kelvin,10))
    });
  }
  return (
    <CardText className='mt-3'>
    Ten en cuenta el clima: <b>{clima}  &#x2103;</b> y humedad: <b>{humedad} %</b> pronosticado para hoy    
    </CardText>
  )
}

export default Clima