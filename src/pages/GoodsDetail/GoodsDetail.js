import React, { Component } from 'react'
import GoBack from "../../components/GoBack"
import { connect } from "react-redux"
import querystring from "querystring"
import "./GoodsDetail.css"
import cartOn from "../../assets/img/img/cart_on.png"
import { goodsinfo, reqGoodsInfoAction } from "../../store/index"
class GoodsDetail extends Component {
    constructor(){
        super()
        this.state={
            isShow:false,
            specs:[]
        }
    }
    componentDidMount() {
        const id = querystring.parse(this.props.location.search.slice(1)).id;
        this.props.reqDetail(id)
    }
    changeIsShow(){
        this.setState({
            isShow:true
        })
    }
    changeHide(ev){
        if(ev.target.className==="car"){
            this.setState({
                isShow:false
            })
        }
    }
    add(ev){
        if(ev.target.className==="specs"){
            ev.target.className="specs active"
        }else{
            ev.target.className="specs"
        }
        //specs用来存储 选中的规格 暂时未写
    }
    render() {
        const { detail } = this.props;
        if (!detail.length) {
            return null
        }
        // console.log(detail);
        return (
            <div className="goodsdetail">
                <div className="header">
                    <GoBack></GoBack>
                商品详情
                </div>
                <div className="main">
                    <div className="topimg">
                        <img src={detail[0].img} alt="" />
                    </div>
                    <div className="line1">
                        <h3>{detail[0].goodsname}</h3>
                        <div>
                            <img src={cartOn} alt="" /><br />
                            <span>收藏</span>
                        </div>
                    </div>
                    <div className="line2">
                        <span>￥{detail[0].price}</span>
                        {detail[0].ishot?<em>热卖</em>:null}
                        {detail[0].isnew?<em>新品</em>:null}
                    </div>
                    <p className="line3">
                        ￥{detail[0].market_price}
                    </p>
                </div>

                <div dangerouslySetInnerHTML={{ __html: detail[0].description }}></div>
                <div className="footer">
                    <div className="right" onClick={()=>this.changeIsShow()}>加入购物车</div>
                </div>
                {this.state.isShow?(<div className="car" onClick={(ev)=>this.changeHide(ev)}>
                    <div className="cartFooter">
                        
                        <div className="fline1">
                            <div className="left">
                                <img src={detail[0].img} alt=""/>
                            </div>
                            <div className="right">
                                <h3>{detail[0].goodsname}</h3>
                            </div>
                        </div>

                        <div className="fline2">
                            <h2>{detail[0].specsname}</h2>
                            { JSON.parse(detail[0].specsattr).map(item=>{
                                return <span className="specs" key={item} onClick={(ev)=>this.add(ev)}>{item}</span>
                            })}
                            {/* <span className="specs active">30L</span> */}
                        </div>
                        <div className="fline3">
                            <span className="cart">加入购物车</span>
                        </div>
                    </div>
                    </div>):null}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        detail: goodsinfo(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        reqDetail: (id) => dispatch(reqGoodsInfoAction(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GoodsDetail)
