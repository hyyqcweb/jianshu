import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Detail extends Component {
	componentDidMount() {
		this.props.getDetail(this.props.match.params.id);
	}
    render() {
    	const { title, content } = this.props;
        return (
            <div>
				<DetailWrapper>
					<Header>{title}</Header>
					<Content dangerouslySetInnerHTML={{__html:content}} />
				</DetailWrapper>
			</div>
        )
    }
}

const mapState = (state) => ({
	title: state.getIn(['detail','title']),
	content: state.getIn(['detail','content'])
});
const mapDisptach = (disptach) => {
	return {
		getDetail(id) {
			disptach(actionCreators.getDetail(id))
		}
	}
}

export default connect(mapState,mapDisptach)(withRouter(Detail));