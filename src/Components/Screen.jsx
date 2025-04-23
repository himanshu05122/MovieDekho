import React, { useState } from 'react';
import { MonitorSmartphone, Smartphone, TabletSmartphone, Globe } from 'lucide-react';

const options = ['TV', 'Mobile', 'Tablet', 'Web'];

const data = {
  TV: {
    cards: [
      { brand: 'Samsung', image: 'https://blog.logomaster.ai/hs-fs/hubfs/samsung-logo-1993.jpg?width=672&height=454&name=samsung-logo-1993.jpg' },
      { brand: 'LG', image: 'https://kreafolk.com/cdn/shop/articles/lg-logo-design-history-and-evolution-kreafolk_03aeb70a-1702-4330-a3d7-91c344688e97.jpg?crop=center&height=1200&v=1717725016&width=1200' },
      { brand: 'Sony', image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd5e33ba4-6fd4-4a51-aa85-a7f8aa5732d1_800x800.jpeg' },
    ],
    image: 'https://media.istockphoto.com/id/1376203813/photo/binge-watching-the-favorite-tv-show.jpg?s=612x612&w=0&k=20&c=w39J0eKbsvuG8JKra9dq1iVzwVh-O28QV_f4RoW0Co0=',
  },
  Mobile: {
    cards: [
      { brand: 'Android', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png' },
      { brand: 'iOS', image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg' },
    ],
    image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1702052450/catalog/1733158652770091008/c3ksiafppj6shdta6olh.jpg',
  },
  Tablet: {
    cards: [
      { brand: 'Android', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png' },
      { brand: 'iOS', image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg' },
      { brand: 'Kindle', image: 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/9521997/kindle_app_logo.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100' },
    ],
    image: 'https://assets.products-live.ao.com/Images/0f09d389-bc75-4915-b851-df3a8acc5aed/1280x1280/29375493d319c2fafe09591731f81af9_11.jpg',
  },
  Web: {
    cards: [],
    image: 'https://www.contus.com/blog/wp-content/uploads/2018/07/how-to-make-movie-website-1024x535.png',
  },
};

const iconMap = {
  TV: <MonitorSmartphone className="h-5 w-5" />,
  Mobile: <Smartphone className="h-5 w-5" />,
  Tablet: <TabletSmartphone className="h-5 w-5" />,
  Web: <Globe className="h-5 w-5" />,
};

const Screen = () => {
  const [selected, setSelected] = useState('TV');
  const currentData = data[selected];

  const getImageBoxStyle = () => {
    switch (selected) {
      case 'TV':
        return 'max-w-[800px] max-h-[450px]';
      case 'Mobile':
        return 'max-w-[300px] max-h-[600px]';
      case 'Tablet':
        return 'max-w-[600px] max-h-[400px]';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:grid lg:grid-cols-2 gap-8 p-4 lg:p-8">
      {/* Left Section */}
      <div className="flex flex-col justify-start mt-6 lg:mt-12">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Watch on your {selected}</h1>
        <h2 className="text-lg lg:text-xl text-gray-600 mb-6 mt-4">Choose your preferred brand or platform</h2>

        {selected === 'Web' ? (
          <div className="mt-6">
            <p className="text-base lg:text-lg text-white mb-4">
              Enjoy seamless streaming on any browser, anywhere, anytime.
            </p>
            <button className="btn btn-error text-white px-4 py-2 rounded-full flex items-center">
              {iconMap[selected]} <span className="ml-2">Watch More</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {currentData.cards.slice(0, 16).map((brand, index) => (
              <div key={index} className="bg-gray-800 text-white p-4 rounded shadow text-center">
                <img src={brand.image} alt={brand.brand} className="h-12 w-12 mx-auto mb-2 object-contain" />
                {brand.brand}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center mt-6 lg:mt-12">
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={`btn px-4 py-2 rounded-full flex items-center gap-1 ${
                selected === option ? 'btn-primary text-white' : 'btn-outline'
              }`}
            >
              {iconMap[option]} {option}
            </button>
          ))}
        </div>

        {/* Image Box */}
        <div
          className={`w-full h-auto ${getImageBoxStyle()} border-4 border-blue-500 rounded-lg shadow-lg flex items-center justify-center overflow-hidden`}
        >
          <img src={currentData.image} alt={selected} className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Screen;
