import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
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


class Page1 extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        let filterItemState = FilterItem(
            'KdDiseaseMeSH', 'KdId', 'KdDiseaseMeSH', 'Eq',
             [{EntityType: "KdDiseaseMeSH", KdId: "D029424", KdLabel: "Pulmonary Disease, Chronic Obstructive"}]
        );
        /**This is an example of how to inject a style into Shadow DOM
         * Will be applied to entire "page" where this component is found
         * but NOT on any "page" where this component is not found
         *
         * See style link below wrapping div for use
         * This scenario is unlikely (pulling in a 3rd party CSS lib like bootstrap)
         * But can be useful if you have a css file local to this component that you don't want
         * infecting the other pages.
         * TODO - further research on css
         * */
        this.state = {model: filterItemState, stylePath: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'};

    }

    componentDidMount() {
        console.log("mounted App1");
    }

    componentWillUnmount() {
        console.log("unmounted App1");
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
                {
                    /**This is an example of how to inject a style into Shadow DOM
                 * Will be applied to entire "page" where this component is found
                 * but NOT on any "page" where this component is not found*/
                }
                <link rel="stylesheet" type="text/css" href={this.state.stylePath} />

                <div className="App-header">
                    <h2>Welcome to Page 1</h2>
                    <ul>
                        <li>Shows how to use KD UI library and pass state of FilterItem to different components</li>
                        <li>Useful for SPAs that have different components or pages that need to share the same Filter values and state</li>
                        <li>Also shows how to keep bootstrap CSS local to this Page1 - it does not get applied to Page2</li>
                    </ul>
                </div>

                <div className="clearfix">
                    <h1>A basscss grid</h1>

                    <div className="col col-4">
                        <KdFilter kdFilterItem={this.state.model} kdFilterOptions={selectDiseaseOptions} events={{onChange: this.handleChange}} />
                    </div>
                    <div className="col col-4">
                        <KdFilter kdFilterItem={this.state.model} kdFilterOptions={selectDiseaseOptions} events={{onChange: this.handleChange}} />
                    </div>
                    <div className="col col-4">
                        <KdFilter kdFilterItem={this.state.model} kdFilterOptions={selectDiseaseOptions} events={{onChange: this.handleChange}} />
                    </div>

                </div>
                <div>
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

            </div>

        );
    }
}

export default Page1;
