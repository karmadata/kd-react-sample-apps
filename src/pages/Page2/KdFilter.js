import React, { Component } from 'react';
import { KdSelectEntity} from 'react-kd.ui';

class KdFilter extends Component {

    componentDidMount() {
        console.log("mounted App2.KdFilter");
    }

    componentWillUnmount() {
        console.log("unmounted App2.KdFilter");
    }

    localOnChange = this.props.onChange;

    render()
        {
            return (
                <KdSelectEntity
                    //events={{onChange: this.props.onChange}}

                    theme={this.props.kdFilterOptions.theme}
                    selectBehavior={this.props.kdFilterOptions.selectBehavior}
                    isDisabled={this.props.kdFilterOptions.isDisabled}
                    chicklets={this.props.kdFilterOptions.chicklets}
                    events={{onChange: this.localOnChange}}
                    autoComplete={this.props.kdFilterOptions.autoComplete}
                    api={this.props.kdFilterOptions.api}
                    mainSelector={this.props.kdFilterOptions.mainSelector}
                    kdFilterModel={this.props.kdFilterItem}

                />
            );
        }

}

export default KdFilter;
