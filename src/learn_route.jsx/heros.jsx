import React from "react";
import batman from './batman2Unplash.jpg'
import  deadpool from './deadpool_comic.jpg'
import  captain from './captain_america_comic.jpg'
import  antman from './antman_comic.jpg'



function Hero(){
    return (
        <div style={{marginTop:"130px"}}>
            <div className="row">
                <div className="col-sm-4">
                    <img className="card-img-top" src={batman} alt="Card image" style={{width:"100%",height:"200px"}} />
                    <div className="card-body">
                           <h4 className="card-title" style={{textAlign:"center"}}>Batman</h4>
                          
                          <div className="text-center">
                            <button href="#" class="btn btn-primary" style={{borderRadius:"30px"}}>Go Inside</button>
                          </div>
                    </div>
                </div>
                <div className="col-sm-4">
                     <img className="card-img-top" src={antman} alt="Card image" style={{width:"100%",height:"200px"}} />
                     <div className="card-body">
                           <h4 className="card-title" style={{textAlign:"center"}}>Antman</h4>
                          
                          <div className="text-center">
                            <button href="#" class="btn btn-primary" style={{borderRadius:"30px"}}>Go Inside</button>
                          </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <img className="card-img-top" src={captain} alt="Card image" style={{width:"100%",height:"200px"}} />
                        <div className="card-body">
                           <h4 className="card-title" style={{textAlign:"center"}}>Captain America</h4>
                          
                          <div className="text-center">
                            <button href="#" class="btn btn-primary" style={{borderRadius:"30px"}}>Go Inside</button>
                          </div>
                       </div>
                </div>
             </div>
             <div className="row">
             
                <div className="col-sm-4">
                    <img className="card-img-top" src={deadpool} alt="Card image" style={{width:"100%",height:"200px"}} />
                    <div className="card-body">
                           <h4 className="card-title" style={{textAlign:"center"}}>Deadpool</h4>
                          
                          <div className="text-center">
                            <button href="#" class="btn btn-primary" style={{borderRadius:"30px"}}>Go Inside</button>
                          </div>
                    </div>
                </div>
                <div className="col-sm-4">
                     <img className="card-img-top" src={captain} alt="Card image" style={{width:"100%",height:"200px"}} />
                     <div className="card-body">
                           <h4 className="card-title" style={{textAlign:"center"}}>Man on Mission</h4>
                          
                          <div className="text-center">
                            <button href="#" class="btn btn-primary" style={{borderRadius:"30px"}}>Go Inside</button>
                          </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <img className="card-img-top" src={antman} alt="Card image" style={{width:"100%",height:"200px"}} />
                        <div className="card-body">
                           <h4 className="card-title" style={{textAlign:"center"}}>Groom Big</h4>
                          
                          <div className="text-center">
                            <button href="#" class="btn btn-primary" style={{borderRadius:"30px"}}>Go Inside</button>
                          </div>
                       </div>
                </div>
             </div>

             <div className="row">
                 <div className="col-sm-4">

                 </div>
                <div className="col-sm-4">
                    <img className="card-img-top" src={deadpool} alt="Card image" style={{width:"100%",height:"200px"}} />
                    <div className="card-body">
                           <h4 className="card-title" style={{textAlign:"center"}}>Ready to Hunt</h4>
                          
                          <div className="text-center">
                            <button href="#" class="btn btn-primary" style={{borderRadius:"30px"}}>Go Inside</button>
                          </div>
                    </div>
                </div> 
                <div className="col-sm-4">

                </div>

         </div>
        </div>
    )
} 

export default Hero;