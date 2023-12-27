import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

class start extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Start       
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {};
};


export default compose(
	withRouter(
		connect(
			mapStateToProps,
			mapDispatchToProps
		)(start)
	)
);
