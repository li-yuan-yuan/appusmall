import React, { Component } from 'react'
import {
    reqListAction,
    shopList,
    isEditor,
    isAll,
    changeIsAllAction,
    reqDelAction,
    reqEditAction,
    changeIsEditorAction,
    getAllPrice,
    changeOneAction

} from "../../store/modules/shop"
import { connect } from "react-redux"
import storeImg from "../../assets/img/store.png"
import radn from "../../assets/img/radio_nor.png"
import radh from "../../assets/img/radio_hig.png"
import edh from "../../assets/img/editor_hig.png"
import edn from "../../assets/img/editor_nor.png"
import Kong from "./components/kong"
import "./Cart.css"
import { successAlert } from "../../util/alert"
class Cart extends Component {
    componentDidMount() {
        this.props.rereqList()
        // console.log(this.props.shopList);
    }
    sub(item) {
        if (item.num <= 1) {
            successAlert("宝贝不能再少了");
            return
        }
        this.props.reqEditAction({ id: item.id, type: 1 })
    }
    render() {
        const { shopList, reqEditAction, changeOne, isAll, changeAll, isEditor, changeIsEditor, reqDelAction, getAllPrice } = this.props
        // console.log(shopList.length);
        if (shopList.length === 0) {
            return (
                <div className="cart">
                     <h3>购物车</h3>
                     <Kong></Kong>
                </div>
            )
        }
        return (
            <div className="cart">
                <h3>购物车</h3>
                <ul>
                    {
                        shopList.map((item, index) => {
                            console.log(item);
                            return (
                                <li key={item.goodsid}>
                                    <div className={isEditor ? 'delmDel' : 'delml'}>
                                        {/* //delmDel delml*/}
                                        <div className="cline1">
                                            <img src={storeImg} alt="" />
                                杭州保税区仓
                                </div>
                                        <div className="cline2">
                                            <div className="circle">
                                                <img src={item.checked ? radh : radn} onClick={() => changeOne(index)} alt="" />
                                            </div>
                                            <div className="cimg">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="clist">
                                                <h4>{item.goodsname}</h4>
                                                <div className="btn">
                                                    <div onClick={() => this.sub(item)}>-</div>
                                                    <em>{item.num}</em>
                                                    <div onClick={() => reqEditAction({ id: item.id, type: 2 })}>+</div>
                                                </div>
                                                <p>总价：{item.price * item.num}</p>
                                            </div>
                                            <div className="sumPrice">
                                                ￥{item.price}
                                            </div>
                                            <div className="delbtn" onClick={() => reqDelAction(item.id)}>
                                                删除
                                    </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="footer">
                    <div className="xuan" onClick={() => changeAll()}>
                        <img src={isAll ? radh : radn} alt="" />
                        <p>全选</p>
                    </div>
                    <div className="xuan" onClick={() => changeIsEditor()}>
                        <img src={isEditor ? edh : edn} alt="" />
                        <p>编辑</p>
                    </div>
                    <div className="addPrice">
                        <p>合计￥{getAllPrice}</p>
                        <p>(不含运费)</p>
                    </div>
                    <div className="pay">
                        去结算
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        shopList: shopList(state),
        isAll: isAll(state),
        isEditor: isEditor(state),
        getAllPrice: getAllPrice(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        rereqList: () => dispatch(reqListAction()),
        reqEditAction: (data) => dispatch(reqEditAction(data)),
        changeOne: (index) => dispatch(changeOneAction(index)),
        changeAll: () => dispatch(changeIsAllAction()),
        changeIsEditor: () => dispatch(changeIsEditorAction()),
        reqDelAction: (id) => dispatch(reqDelAction(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
