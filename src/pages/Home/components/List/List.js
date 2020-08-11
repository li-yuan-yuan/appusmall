import React from 'react'
import "./List.css"
import {Link} from "react-router-dom"
export default function List(props) {
    const { indexgoodslist }=props;
    // console.log(indexgoodslist);
    return (
        <div className="list">
            <ul>
           { indexgoodslist[0].content.map(item=>{
               return (
                <li key={item.id}>
                    <div className="left">
                        <img src={item.img} alt=""/>
                    </div>
                    <div className="right">
                        <h3>{item.goodsname}</h3>
                        <p className="price">￥{item.price}</p>
                        <Link  className="btn" to={"/goodsDetail?id="+item.id}>立即抢购</Link>
                    </div>
                </li>
               )
            })}
            </ul>
        </div>
    )
}
