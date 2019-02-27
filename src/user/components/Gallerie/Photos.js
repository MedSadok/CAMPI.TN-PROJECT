import React,{Component} from "react";
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import "./Gallerie.css";

const photos = [
    { src: 'http://champsmarine.fr/wp-content/uploads/2017/11/camp.jpg', width: 4, height: 3 },
    { src: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/fc/a6/62/camping-la-playa-ibiza.jpg', width: 3, height: 2 },
    { src: 'https://guidetoiceland.is/image/318007/x/0/camping-in-iceland-all-you-need-to-know-1', width: 3, height: 4 },
    { src: 'https://femmesdetunisie.com/wp-content/uploads/2015/12/feu-de-camp.jpg', width: 3, height: 4 },
    { src: 'https://tunisie.co/uploads/images/content/camping-en-vogue-tunisie-310818-02.jpg', width: 3, height: 4 },
    { src: 'http://www.kharjet.tn/sites/default/files/2017-08/4.jpg', width: 4, height: 3 },
    { src: 'https://c1.staticflickr.com/2/1477/25804967812_55fb3bc5c0_b.jpg', width: 3, height: 4 },
    { src: 'https://tunisie.co/uploads/images/content/camping-en-vogue-tunisie-310818-01.jpg', width: 4, height: 3 },
    { src: 'http://www.voyagermoinscher.com/blog-voyage/wp-content/uploads/2016/03/camping.jpeg', width: 4, height: 3 }
  ];
  
  class Photos extends Component {
    constructor() {
      super();
      this.state = { currentImage: 0 };
      this.closeLightbox = this.closeLightbox.bind(this);
      this.openLightbox = this.openLightbox.bind(this);
      this.gotoNext = this.gotoNext.bind(this);
      this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
      this.setState({
        currentImage: obj.index,
        lightboxIsOpen: true,
      });
    }
    closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false,
      });
    }
    gotoPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1,
      });
    }
    gotoNext() {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    }
    render() {
      return (
        <div>
          <Gallery photos={photos} onClick={this.openLightbox} className="Gallery"/>
          <Lightbox images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </div>
      )
    }
  }
  
  export default Photos;
  