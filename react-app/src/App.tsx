import {Component} from 'react'
import imgCron from './assets/cronometro.png'
import './styles/index.css'
import './styles/tablet.css'

class App extends Component <any, {numero:any, botao:any,timer:any}>{

  constructor(props:any){
    super(props);

    this.state ={
      numero: 0.0,
      botao: 'Iniciar',
      timer: null
    }
    this.iniciar = this.iniciar.bind(this);
    this.zerar = this.zerar.bind(this);
  }
  iniciar(){
    let timer = this.state.timer
    if(timer === null){
      this.setState({botao: 'Parar'})

      this.setState({timer: setInterval(() => {
        let state = this.state;
        let number = state.numero;
        this.setState({numero: number += 0.1})
      }, 100)})
    }else{
      this.setState({botao: 'Voltar'})
      clearInterval(timer);
      this.setState({timer: null})
    }
  }

  zerar(){
    let timer = this.state.timer
    if(timer !== null || timer === null){
      
    this.setState({botao: 'Iniciar'})
    this.setState({numero: 0.0})
    clearInterval(timer);
    this.setState({timer: null})
    }
  }

  render(){
    return (
      <div id='body'>
        <div id="header">
          <h1>Projeto Cronômetro</h1>
        </div>
        <div id="main">
          <div className="cronometro">
            <img src={imgCron} alt="Cronometro" />
            <p className="timer">{this.state.numero.toFixed(1)}</p>
          </div>
          <div className="btnArea">
            <button onClick={this.iniciar}>{this.state.botao}</button>
            <button onClick={this.zerar}>Zerar</button>
          </div>
        </div>
        <div id="footer">
          <a href="https://www.instagram.com/diogoo_h._dev/"><i className='bx bxl-instagram'></i></a>
          <a href="https://www.linkedin.com/in/diogo-henrique-22732221b/"><i className='bx bxl-linkedin-square'></i></a>
          <a href="https://github.com/DiogoHSSantos"><i className='bx bxl-github'></i></a></div>
      </div>
    )
  }
}

export default App
