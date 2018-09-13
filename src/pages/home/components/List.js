import React, { Component } from 'react';
import { ListItem, ListInfo, ListMeta, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
// 列表
class List extends Component {
    render() {
        const { list, handleMoreList, page } = this.props;
        return (
            <div>
            {
	            list.map((item,index) => (
	                <ListItem key={index}>
							<img className="list-pic" src={item.get('imgUrl')} alt=""/>
							<ListInfo>
								<h3 className="title">{item.get('title')}</h3>
								<p className="desc">{item.get('desc')}</p>
							</ListInfo>
							<ListMeta>
								<span>静定如常</span>
								<span className="iconfont"><i className="iconfont">&#xe610;</i> 35</span>
								<span className="iconfont"><i className="iconfont">&#xe601;</i> 51</span>
								<span className="iconfont"><i className="iconfont">&#xe600;</i> 3</span>
							</ListMeta>
					</ListItem>
	            ))
            }
            <LoadMore onClick={() => handleMoreList(page)}>阅读更多</LoadMore>
			</div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'acticleList']),
    page: state.getIn(['home','acticlePage'])
});
const mapDisptch = (dispatch) => {
	return {
		handleMoreList(page) {
			dispatch(actionCreators.getMoreList(page))
		}
	}
}
export default connect(mapStateToProps, mapDisptch)(List);