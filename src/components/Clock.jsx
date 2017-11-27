import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        let { date } = this.state 

        let dia = [
            'Domingo',
            'Lunes',
            'Martes',
            'Miércoles',
            'Jueves',
            'Viernes',
            'Sábado'
        ]

        let mes = [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Setiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
        ]

        return (
            <div>
                <div className="hora">
                    <span className="large">
                        {(date.getHours() < 10) ? "0" + date.getHours() : date.getHours()}
                        :
                        {(date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes()}
                    </span>
                    <span className="small">
                        {(date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds()}
                    </span>
                </div>
                <div className="fecha">
                    { dia[date.getDay()] } { date.getDate() } de { mes[date.getMonth()] }
                </div>
            </div>
        );
    }
}

export default Clock