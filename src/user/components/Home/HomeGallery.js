import React,{Component} from "react";


const photo = [
    { img: 'http://s3.amazonaws.com/digitaltrends-uploads-prod/2017/06/camping-tent-1500x1000.png' },
    { img:"https://c1.staticflickr.com/2/1466/25398519183_b93412c959_b.jpg" },
    { img: "http://farm2.static.flickr.com/1463/25839595401_f56599a769.jpg"},
    { img:"https://data.whicdn.com/images/163910418/large.jpg" },
    { img: "https://c1.staticflickr.com/2/1520/25819786392_81b96e0773_b.jpg"},
    { img:"http://kharjet.tn/sites/default/files/2017-11/Randonn%C3%A9e%20%C3%A0%20Bni%20Mtir%20%20Ain%20Drahem.jpg"}
  ];

  const PhotoCard = props => {
    const photos = props.photo;
  
    return (
        
          <img src={photos.img} alt="" className="photo-card"/>
  
    );
  };


  class HomeGallery extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Photo: photo
      };
    }
    render() {
      return (
            <div className="photoContainer">
              {this.state.Photo
                .map(card => (
                  <PhotoCard photo={card} />
                ))}
            </div>
      );
    }
  }

  export default HomeGallery;