import React from 'react';
import JSONTree from 'react-json-tree';
import axios from 'axios';

class AccidentDocumentPageBody extends React.Component {
    constructor(props) {
        super(props);

        this.setState({});
    }

    componentWillMount() {
        const {id} = this.props.match.params;

        axios.get(`/accidentId/${id}`).then(response => {
            this.setState(response.data);
        }).catch(err => {
            this.setState({ 'error': 'The Document not found.' });
        });
    }

    render() {
        return <div className="accident-data">
            <h4>Данные о ДТП</h4>
            <JSONTree
                data={
                    this.state ? this.state : { message: 'Данные загружаются...' }
                } 
                theme={{
                    scheme: 'google',
                    author: 'seth wright (http://sethawright.com)',
                    base00: '#1d1f21',
                    base01: '#282a2e',
                    base02: '#373b41',
                    base03: '#969896',
                    base04: '#b4b7b4',
                    base05: '#c5c8c6',
                    base06: '#e0e0e0',
                    base07: '#ffffff',
                    base08: '#CC342B',
                    base09: '#F96A38',
                    base0A: '#FBA922',
                    base0B: '#198844',
                    base0C: '#3971ED',
                    base0D: '#3971ED',
                    base0E: '#A36AC7',
                    base0F: '#3971ED'
                }}
            />
        </div>;
    }
}

export default AccidentDocumentPageBody;