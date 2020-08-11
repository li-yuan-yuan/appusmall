import React, { Component } from 'react'
import {connect} from "react-redux"
import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Nav from "./components/Nav/Nav"
import { banners ,requestBannerAction} from '../../store/modules/banner'
import { indexgoods,reqIndexGoodsAction} from '../../store/modules/indexgoods'
class Home extends Component {
    componentDidMount(){
        this.props.reqBanners()
        this.props.reqIndexGoods()
    }
    render() {
        const {banners,indexgoods} = this.props;
        if (banners.length < 1) {
            return null
        }
        if (indexgoods.length < 1) {
            return null
        }
        // console.log(indexgoods);
        return (
            <div>
                <Header></Header>
                <Banner list={banners}></Banner>
                <Nav></Nav>
                <List indexgoodslist={indexgoods}></List>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        banners:banners(state),
        indexgoods:indexgoods(state)
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        reqBanners:()=>dispatch(requestBannerAction()),
        reqIndexGoods:()=>dispatch(reqIndexGoodsAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)

