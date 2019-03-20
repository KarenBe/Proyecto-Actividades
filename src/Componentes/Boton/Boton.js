import React, { Component } from 'react'


class BotonGeneral extends Component {


    render() {
        const { nombre} = this.props
        return (
            <button className="">
            {nombre}
            </button>
        )
        }
}

export default BotonGeneral