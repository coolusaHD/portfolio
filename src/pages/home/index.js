import React from 'react';


export default class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    render() {
        return(
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}