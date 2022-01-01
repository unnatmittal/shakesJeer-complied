import React from 'react'

function DepartMentBook(props) {
    return (<div className="card " data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000"
        style={
            { height: "55vh" }} >
                  
        <div className="imgBox" style={{backgroundImage:`url(${props.image})`,backgroundSize:"100% 100%",backgroundRepeat:"no-repeat", backgroundOrigin:""}}>
            <div style={{overflow:"hidden",borderRadius:"15px"}}>
                <p style={{ fontWeight: "600", fontSize: "28px", textAlign: "center",color:"#002C66" }}>{props.department} </p>
                <div style={{position:"relative", display:"grid", gridTemplateColumns:"50% 50%",}}>
                    <p style={{ paddingLeft: "40px", paddingRight: "40px",}}>{props.description}</p>
                    <div style={{ backgroundSize:"cover",position:"relative",}}></div>
                </div>
            </div>
            {/* <div style={{marginLeft:"82%"}} class="card__corner-triangle"></div> */}
            <div>
                <img src="unnat sir2.jpg" alt="" />
            </div>
        </div>
        <div className="details" >
            <div className="content" >
                <h2><u>{props.department}</u></h2>
                <div id="social" >
                     <hr />
                    <p> {props.teamMember} </p>
                    <hr />
                </div>
                <h3> Head: -{props.head} </h3>
            </div>
        </div>
        
    </div>
    )
}
export default DepartMentBook