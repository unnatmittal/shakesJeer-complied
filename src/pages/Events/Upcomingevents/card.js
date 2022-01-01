import React from 'react';
import './card.css';
const card = ({menuData}) => {
    return (
        <div className="container">
            {menuData.map((curElem) => {
                return (
                    <div className="card">
                        <div className="Maintitle">
                            <table>
                                <tr>
                                <td>
                                    <div className="month">{curElem.month}</div>
                                    <div className="month-date-devider"></div>
                                    <div className="date">{curElem.date}</div>
                                </td>
                                <td className="title"><img src={curElem.imgUrl} alt="" className="thumbnail"/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="title"><h3>{curElem.title}</h3></div>
                        <div className="id">
                            <div className="location"> <img src="./icon1.png" alt=""/>{curElem.venue}<br/></div>
                            <div className="time"> <img src="https://cdn-icons.flaticon.com/png/512/4284/premium/4284108.png?token=exp=1635956376~hmac=8516fac1a0a9f54c35a0f8ee3c6566f7" alt=""/>{curElem.time}</div>
                        </div>
                        <div className="quote">{curElem.quote}</div>
                        <div className="form">
                            <a href="www.google.com">Book Your Tickets</a>
                        </div>
                        </div>
                );
            })}
        </div>
    )
}

export default card;
