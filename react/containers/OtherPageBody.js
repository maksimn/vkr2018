import React from 'react';

class OtherPageBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        const valueTrimmed = this.state.value.trim();
        
        if (valueTrimmed) {
            this.props.history.push(`/accident/${valueTrimmed}`);
        }
    }

    render() {
        return (
            <div className="accident-data">
                <h5>Введите номер ДТП:</h5>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control"
                        value={this.state.value}
                        onChange={ this.handleChange } />
                </form>
            </div>
        );    
    }
}

export default OtherPageBody;
