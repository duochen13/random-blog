import React from "react";
import duobaoOne from '../../assets/duobao_0.jpeg';
import Gallery from "react-photo-gallery";

const Home = () => {

    const photos = [
        {
            src: '../../assets/duobao_0.jpeg',
            width: 4,
            height: 3
        },
        {
            src: '../../assets/duobao_0.jpeg',
            width: 1,
            height: 1
        }
    ];
        

  return (
    <div>
        <h4>Home</h4>
        <Gallery photos={photos} />
        <img src={duobaoOne} />
            <p>My name is duo and asljdakls jdlasj dkalsjdalksjdlka sjdlaksj dlajskl</p>
    </div>
  );
};

export default Home;
