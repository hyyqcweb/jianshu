import React, { Component } from 'react';
import recom from '../../../statics/recommend';
import qrcode from '../../../statics/qrcode.png';
import { RecommendWrapper, QrcodeWrapper } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

// 右上广告
class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {handleQrcodeMouseEnter, handleQrcodeMouseLeave, mouseIn} = this.props;
        return (
            <div>
        		 <RecommendWrapper>
	            	<li><img src={recom.recommend01} alt=""/></li>
	            	<li><img src={recom.recommend02} alt=""/></li>
	            	<li><img src={recom.recommend03} alt=""/></li>
	            	<li><img src={recom.recommend04} alt=""/></li>
	            	<li><img src={recom.recommend05} alt=""/></li>
	            </RecommendWrapper>
	            <QrcodeWrapper onMouseEnter={handleQrcodeMouseEnter} onMouseLeave={handleQrcodeMouseLeave}>
	            	<img className="qrcode" src={qrcode} alt=""/>
	            	<div className="info">
	            		<div className="title">下载简书手机App ></div>
						<div className="description">随时随地发现和创作内容</div>
	            	</div>
	            	{
		            	mouseIn ? <div className={mouseIn ? "modal-qrcode arrow-down" : ""}>
		            			<img src={qrcode} alt=""/>
		            	</div> : ''
		            }
	            </QrcodeWrapper>
	            
        	</div>

        )
    }
}
const mapStateToProps = (state) => ({
    mouseIn: state.getIn(['home', 'mouseIn']),
});
const mapDispatchToProps = (dispatch) => {
    return {
        handleQrcodeMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleQrcodeMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);