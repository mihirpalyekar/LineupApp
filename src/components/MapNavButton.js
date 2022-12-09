import React, { Component } from 'react'

class MapNavButton extends Component {

    render() {

        return (
            <button
                flat
                style={{
                    width:"150px",
                    textAlign: "left",
                    textTransform: "capitalize",
                    padding: "10px",
                    backgroundColor: "#2b5582",
                    border: "1px solid #fff",
                    color: "#fff",
                    marginBottom: "10px",
                    cursor: "pointer",
                    marginRight: "10px"
                }}
                onClick={() => this.props.showDialog(this.props.buttonName)}
            >
                {this.props.buttonName}
            </button>
        )
    }

}

export default MapNavButton
