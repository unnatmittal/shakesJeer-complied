import React from 'react'
import './teacher.css'
import pic from './himanshi.jpg';

const Teacher = () => {
    return (
        <>
            <div className="tcontainer">
                <div className="tbox1">
                    <img className="teacher-pic" src={pic} alt="" />
                    <div className="tbox1-content">
                         <div className="tbox1-content-cont">
                             <ul className="tsocial">
                                 <li><a href="www.google.com"><i className="fa fa-linkedin"></i></a></li>
                                 <li><a href="www.google.com"><i className="fa fa-facebook"></i></a></li>
                                 {/* <li><a href="www.google.com"><i className="fa fa-instagram"></i></a></li> */}
                                 <li><a href="www.google.com"><i className="fa fa-envelope"></i></a></li>
                             </ul>
                             <h3 className="ttitle">Himanshi</h3>
                             <span className="tpost">Director</span>
                         </div>
                    </div>
                </div>
                <div className="tbox2">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, labore adipisci, nesciunt in nobis pariatur quaerat nam ullam magnam reiciendis, repellat assumenda? Officia?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, rerum nostrum quam asperiores quis esse sint tempora alias amet facilis, natus culpa et saepe quibusdam reiciendis. Fugiat dignissimos, autem voluptatem laborum veniam ipsam nisi.
                        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, earum quis beatae ratione deserunt a maiores corporis consequatur amet optio expedita minima exercitationem voluptas molestias hic quia, consectetur fugit nihil alias eveniet aliquid? At. */}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Teacher;
