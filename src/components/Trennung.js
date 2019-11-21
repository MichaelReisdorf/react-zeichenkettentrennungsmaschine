import React from 'react';
import './Trennung.css'



class Trennung extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            value2: '',
            click: true,
            vorteil: '',
            nachteil: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSlice = this.handleSlice.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(this.state.value)
    }
    handleSlice = (event) => {
        this.setState({ value2: event.target.value });
        console.log(this.state.value2)
    }
    trennen = (event) => {

        event.preventDefault();
        let stringPos = this.state.value.search(this.state.value2)
        let inputLenght = this.state.value2.length
        if (this.state.click) {
            let vorteil = this.state.value.slice(0, stringPos)
            let nachteil = this.state.value.slice(stringPos)
            this.setState({ vorteil })
            this.setState({ nachteil })
        } else {
            let vorteil = this.state.value.slice(0, stringPos + inputLenght)
            let nachteil = this.state.value.slice(stringPos + inputLenght)
            this.setState({ vorteil })
            this.setState({ nachteil })
        }
    }
    davor = () => {
        this.setState({ click: true })
        console.log(this.state.click)
    }
    danach = () => {
        this.setState({ click: false })
        console.log(this.state.click)
    }

    render() {
        return (
            <main>
                <section>
                    <h4>Zu trennende Zeichenkette:</h4>
                    <form onSubmit={this.trennen}>
                        <input className="feld" type="text" value={this.state.value} onChange={this.handleChange} />
                        <h4>Zeichenkette für die Trennungsposition:</h4>
                        <input className="feld" type="text" value={this.state.value2} onChange={this.handleSlice} />
                        <label htmlFor="radio"> <br />
                            <input type="radio" name="trennung" onClick={this.davor} />davor trennen <br />
                            <input type="radio" name="trennung" onClick={this.danach} />danach trennen
               </label> <br />
                        <input className="button" type="submit" value="Trennen" />
                    </form>
                </section>
                <h2>Ausgabe</h2>
                <div>
                    <div><h3>Vorderer Teil</h3>
                        <p>{this.state.vorteil}</p>
                    </div>
                    <div><h3>Hinterer Teil</h3>
                        <p>{this.state.nachteil}</p>
                    </div>
                </div>
            </main>);
    }
}

export default Trennung;