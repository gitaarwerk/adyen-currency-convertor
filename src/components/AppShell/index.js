import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actionCreators/actionCreators';
import App from '../components/App';

class AppShell extends React.Component {
    componentDidMount() {
        this.props.getCurrentGPSLocation();
    }

    render() {
        return <App location={this.props.location} />;
    }
}

const mergeProps = (stateProps, dispatchProps) => {
    const { location } = stateProps;
    const { getCurrentGPSLocation } = dispatchProps;

    return {
        location,
        getCurrentGPSLocation
    };
};

function mapStateToProps({ location, actions }) {
    return {
        location,
        actions
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AppShell);