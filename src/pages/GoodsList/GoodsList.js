import React, { Component } from 'react'
import "./GoodsList.css"
import GoBack from '../../components/GoBack'
import { connect } from "react-redux"
import { reqGoodsAction, goods } from "../../store/modules/goods"
import querystring from "querystring"
import { Link } from "react-router-dom"
class GoodsList extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }
    componentDidMount() {
        const fid = querystring.parse(this.props.location.search.slice(1)).fid
        this.setState({
            name: querystring.parse(this.props.location.search.slice(1)).name
        })
        this.props.reqgoods(fid);
    }
    render() {
        const { goods } = this.props
        const { name } = this.state
        // if (goods.length === 0) {
        //     return null
        // }
        // console.log(goods);
        return (
            <div className="goodslist">
                <h3 className="line1">
                    {name}
                    <GoBack></GoBack>
                </h3>
                <ul>
                    {goods?(goods.map(item => {
                        return (
                            <li key={item.id}>
                                <div className="left">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="right">
                                    <h4>{item.goodsname}</h4>
                                    <p className="price">￥{item.price}</p>
                                    <Link className="btn" to={"/goodsDetail?id=" + item.id}>立即抢购</Link>
                                </div>
                            </li>
                        )
                    })):[]}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        goods: goods(state)
    }
}
const mapDispatchProps = (dispatch) => {
    return {
        reqgoods: (fid) => dispatch(reqGoodsAction(fid))
    }
}
export default connect(mapStateToProps, mapDispatchProps)(GoodsList)
