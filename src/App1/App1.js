import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'basscss/css/basscss.css';

import KdFilter from './KdFilter.js';
import { FilterItem } from 'karmadata';
import { themes} from 'react-kd.ui';

let selectDiseaseOptions =  {
    theme: themes.kd,
    selectBehavior: 'AddChicklet',
    isDisabled: false,
    chicklets: {
        sortable: false,
        visible: true,
        fullwidth: false,
        buttons: {
            ascDesc: {visible: false},
            info: {visible: false},
        },
        events: {},
        clearAll: {visible: false},
    },
    events: {},
    autoComplete: {
        // onSelect,
        // beforeSend: (jqXHR) => {
        //     jqXHR.setRequestHeader('Authorization', this.props.bearerToken);
        // },
        placeholderText: 'Ex. COPD',
    },
    api: {
        url: 'https://api.karmadata.com',
        key: '215ADBA6692B40F38E39F95E6FCAA4DF',
    },
    mainSelector: {
        visible: false,
        selected: '',
        optionValues: {
            anyOption: {
                visible: false
            },
            userSpecifiedOption: {
                visible: false
            },
        },
    }
};


class App1 extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        let filterItemState = FilterItem('KdDiseaseMeSH', 'KdId', 'KdDiseaseMeSH', 'Eq',
            []
            // [{EntityType: "KdDiseaseMeSH", KdId: "D029424", KdLabel: "Pulmonary Disease, Chronic Obstructive"}]
        );
        this.state = {model: filterItemState};
    }

    handleChange(e) {
        console.log("handleChangeApp", e);
        if (e.data!=="reset"){
            let f1 = FilterItem(e.data.EntityType, e.data.PropertyName, e.data.DataType, e.data.Operator, e.data.Values);
            // this.setState({model: e.data.model});
            this.setState({model: f1});
        }


    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div className="clearfix">
                    <h1>A basscss grid</h1>

                    <div className="col col-4">
                        <KdFilter kdFilterItem={this.state.model} kdFilterOptions={selectDiseaseOptions} onChange={this.handleChange} />
                    </div>
                    <div className="col col-4">
                        <KdFilter kdFilterItem={this.state.model} kdFilterOptions={selectDiseaseOptions} onChange={this.handleChange} />
                    </div>
                    <div className="col col-4">
                        <KdFilter kdFilterItem={this.state.model} kdFilterOptions={selectDiseaseOptions} onChange={this.handleChange} />
                    </div>

                </div>

                <div className="container">
                    <h1>A bootstrap grid</h1>
                    <div className="row">

                        <div className="col-md-4">
                            <KdFilter kdFilterItem={this.state.model} kdFilterOptions={selectDiseaseOptions} onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <KdFilter kdFilterItem={this.state.model} kdFilterOptions={selectDiseaseOptions} onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-4">
                            <KdFilter kdFilterItem={this.state.model} kdFilterOptions={selectDiseaseOptions} onChange={this.handleChange}/>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default App1;
