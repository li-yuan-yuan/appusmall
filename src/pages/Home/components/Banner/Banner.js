import React from 'react'
import "./Banner.css"
import { Carousel} from 'antd-mobile';
export default function Banner(props) {
    const { list } = props;
    return (
        <div className="banner">
           <Carousel
                    autoplay={false}
                >
                    {list.map(val => (
                        <img
                            alt="banner"
                            src={val.img}
                            key={val.id}
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                            }}
                        />
                    ))}
                </Carousel>
        </div>
    )
}
