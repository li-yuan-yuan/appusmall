import React, { Component } from 'react'
import "./Cate.css"
import { connect } from "react-redux"
import { catetree, reqCatetreeAction } from "../../store"
class Cate extends Component {
    constructor() {
        super()
        this.state = {
            //动态样式
            i: 0
        }
    }
    componentDidMount() {
        this.props.reqCatetree()
    }
    licate(index) {
        this.setState({
            i: index
        })
    }
    //去商品列表
    goList(fid,name){
        this.props.history.push("/goodsList?fid="+fid+"&name="+name)
    }
    render() {
        const { catetree } = this.props
        const { i } = this.state
        if (catetree.length === 0) {
            return null
        }
        // console.log(catetree);
        return (
            <div className="cate">
                <h3>分类</h3>
                <div className="main">
                    <ul className="left">
                        {catetree.map((item, index) => {
                            return (<li className={index === i ? "action" : null} onClick={() => this.licate(index)} key={item.id}>{item.catename}</li>)
                        })}
                    </ul>
                    <ul className="right">
                        {catetree[i].children.map((item) => {
                            return (
                                <li key={item.id} onClick={()=>this.goList(item.pid,item.catename)}>
                                    <img src={item.img} alt="" />
                                    <div className="name">{item.catename}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        catetree: catetree(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        reqCatetree: () => dispatch(reqCatetreeAction())
    }
}
// reqCatetreeAction
export default connect(mapStateToProps, mapDispatchToProps)(Cate)