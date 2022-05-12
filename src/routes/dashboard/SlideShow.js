import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const slides = [
    { title: 'First item', description: 'Lorem ipsum',
    url: 'https://www.bing.com/th?id=AMMS_6e4e8567f9a00325e103a60ca1b62ff9&w=156&h=112&c=7&o=6&dpr=1.5&pid=SANGAM'},
    { title: 'Second item', description: 'Lorem ipsum',
    url: 'https://applitools.com/wp-content/uploads/2018/07/Jira-new-logo.png'},
    { title: 'Third item', description: 'Lorem ipsum',
    url: 'https://www.bing.com/th?id=AMMS_6e4e8567f9a00325e103a60ca1b62ff9&w=156&h=112&c=7&o=6&dpr=1.5&pid=SANGAM'}
  ];

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Slider>
  {slides.map((slide, index) => <div key={index}>
    {/* <h2>{slide.title}</h2>
    <div>{slide.description}</div> */}
    <img height='79%' width='100%' src={slide.url}></img>
  </div>)}
</Slider>
    </div>
  )
}


export default SlideShow;