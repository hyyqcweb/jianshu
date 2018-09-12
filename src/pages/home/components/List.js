import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';
// 列表
class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <div>
            {
	            list.map((item) => (
	                <ListItem key={item.get('id')}>
							<img className="list-pic" src={item.get('imgUrl')} alt=""/>
							<ListInfo>
								<h3 className="title">{item.get('title')}</h3>
								<p className="desc">{item.get('desc')}</p>
							</ListInfo>
					</ListItem>
	            ))
            }
			</div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'acticleList'])
});

export default connect(mapStateToProps, null)(List);