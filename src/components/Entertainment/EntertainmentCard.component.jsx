import React, { useState } from 'react';
 
import Slider from 'react-slick';



const EntertainmentCard = () => {
    const [card, setCard] = useState([
        {
            alt: "ipl 2023",
            src: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/ipl-collection-202302270454.png"
        },
        {
            alt: "workshop & more",
            src: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MzUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png"
        },
        {
            alt: "kids zone ",
            src: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png"
        },
        ,
        {
            alt: "comidy show",
            src: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MzArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png"
        }, ,
        {
            alt: "esports",
            src: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png"
        }, ,
        {
            alt: "art and craft",
            src: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/arts-crafts-collection-202211140440.png"
        },
        {
            alt: "dance class",
            src: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/dance-classes-collection-202211140440.png"
        },

    ]);

    const setting = {
        infinite: false,
        
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2
              }
            }
          ]


    }

    return (
        <>
            <Slider {...setting}>
                {
                    card.map((card , index) => (
                        <div key={index} className="w-full h-full px-2 mx-1  " >

                            <img src={card.src} alt={card.alt} className='h-full w-full rounded-lg' />

                        </div>
                    ))
                }
            </Slider>
        </>

    )
}



export default EntertainmentCard
