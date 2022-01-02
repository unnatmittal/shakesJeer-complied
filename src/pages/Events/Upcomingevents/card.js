import React from 'react';
import './card.css';
const card = ({menuData}) => {
    return (
        <div className="event-container">
            {menuData.map((curElem) => {
                return (
                    <div className="event-card1" style={{backgroundColor: "#fdc912;"}}>
                        <div className="event-Maintitle">
                            <table>
                                <tr>
                                <td>
                                    <div className="month">{curElem.month}</div>
                                    <div className="month-date-devider"></div>
                                    <div className="date">{curElem.date}</div>
                                </td>
                                <td className="event-title"><img src={curElem.imgUrl} alt="" className="event-thumbnail"/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="event-title"><h3>{curElem.title}</h3></div>
                        <div className="event-id">
                            <div className="event-location"> <img src="./icon1.png" alt=""/>{curElem.venue}<br/></div>
                            <div className="event-time"> <img src="https://cdn-icons.flaticon.com/png/512/4284/premium/4284108.png?token=exp=1635956376~hmac=8516fac1a0a9f54c35a0f8ee3c6566f7" alt=""/>{curElem.time}</div>
                        </div>
                        <div className="event-quote">{curElem.quote}</div>
                        <div className="event-form">
                            <a href="www.google.com" className="event-formlink">Book Your Tickets</a>
                        </div>
                        </div>
                );
            })}
        </div>
    )
}

export default card;
