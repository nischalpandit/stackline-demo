import React, { Component } from 'react'

export default class Sales extends Component {
    // Initialize the state
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getList();
    }

    // Retrieves the list of items from the Express app
    getList = () => {
        fetch('/api/products')
            .then(res => res.json())
            .then(list => this.setState({ list }))
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                {list.length ? list[0].id : 'Loading...'}
            </div>
        )
    }
}
