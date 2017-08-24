import React, { Component } from 'react';
import { KdSelectEntity} from 'react-kd.ui';

class KdFilter extends Component {

    componentDidMount() {
        console.log("mounted App1.KdFilter");
    }

    componentWillUnmount() {
        console.log("unmounted App1.KdFilter");
    }

    localOnChange = this.props.onChange;

    render()
        {
            return (
                <KdSelectEntity {...this.props.kdFilterOptions}

                    events={this.props.events}
                    kdFilterModel={this.props.kdFilterItem}
                />
            );
        }

}

export default KdFilter;
