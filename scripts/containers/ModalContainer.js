import React, {Component, PropTypes} from 'react';
import { connect } from '../noredux.js';;
import Modal from '../components/Modal';

class ModalContainer extends Component {
    render() {
        if (!this.props.modal) {
            return <div/>;
        }

        return <Modal {...this.props} />;
    }
}

function mapStateToProps(state) {
    const {modal} = state;

    return {
        modal
    };
}

export default connect(mapStateToProps)(ModalContainer);
