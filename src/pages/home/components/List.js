import React, { Component } from 'react';
import { ListItem, ListInfo, ListMeta } from '../style';
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
							<ListMeta>
								<span>静定如常</span>
								<span className="iconfont"><i className="iconfont">&#xe610;</i> 35</span>
								<span className="iconfont"><i className="iconfont">&#xe601;</i> 51</span>
								<span className="iconfont"><i className="iconfont">&#xe600;</i> 3</span>
							</ListMeta>
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