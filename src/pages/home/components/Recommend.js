import React, { Component } from 'react';
import recom from '../../../statics/recommend';
import { RecommendWrapper } from '../style';
// 右上广告
class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
            	<li><img src={recom.recommend01} alt=""/></li>
            	<li><img src={recom.recommend02} alt=""/></li>
            	<li><img src={recom.recommend03} alt=""/></li>
            	<li><img src={recom.recommend04} alt=""/></li>
            	<li><img src={recom.recommend05} alt=""/></li>
            </RecommendWrapper>
        )
    }
}
export default Recommend;