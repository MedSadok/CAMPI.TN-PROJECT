import React,{Component} from 'react';
import "./Header.css";
class Slider extends Component{
    render(){
        return(
            <div id="my-pics" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">

                <li data-target="#my-pics" data-slide-to="0" className="active"></li>
                <li data-target="#my-pics" data-slide-to="1"></li>
                <li data-target="#my-pics" data-slide-to="2"></li>
                <li data-target="#my-pics" data-slide-to="3"></li>
                <li data-target="#my-pics" data-slide-to="4"></li>
                <li data-target="#my-pics" data-slide-to="5"></li>
            
            </ol>

            <div className="carousel-inner" role="listbox">

                <div className="item  active">
                     <img src="https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="..." className="slider-img"/>
                </div>
                <div className="item">
                    <img src="https://images.pexels.com/photos/1645634/pexels-photo-1645634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="..." className="slider-img"/>
                </div>
                <div className="item">
                    <img src="https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="..." className="slider-img"/>
                </div>

                <div className="item">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/fc/a6/62/camping-la-playa-ibiza.jpg" alt="..." className="slider-img"/>
                </div>
                <div className="item">
                    <img src="https://femmesdetunisie.com/wp-content/uploads/2015/12/feu-de-camp.jpg" alt="..." className="slider-img"/>
                </div>
                <div className="item">
                    <img src="https://c1.staticflickr.com/2/1477/25804967812_55fb3bc5c0_b.jpg" alt="..." className="slider-img"/>
                </div>
             
                <a className="left carousel-control" href="#my-pics" role="button" data-slide="prev">
                <span className="icon-prev" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>

                <a className="right carousel-control" href="#my-pics" role="button" data-slide="next">
                <span className="icon-next" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>

            </div>
        </div>
        );
    }
}

export default Slider;