import React, { useState } from 'react'
import DefaultLayoutHoc from '../layout/Default.layout'
import Filter from '../components/Filter/Filter.component'
import Card from '../components/Card/Card.component'

const PlaysPage = () => {

  const [card, setCard] = useState([
    {
      id: 1,
      img: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-the-magic-of-thinking-rich-season-6-0-2023-5-19-t-13-40-5.jpg",
      title: "The Magic Of Thinking Rich - Season 6",
      subTitle: "Education | English, Hindi | 12yrs + | 1hr 30mins"
    },
    {
      id: 2,
      img: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-good-good-piggy-storytelling-session-0-2023-4-19-t-6-49-36.jpg",
      title: "Good Good Piggy Storytelling Session",
      subTitle: "Education, Hobby Classes | English | 3yrs + | 1hr"
    }, {
      id: 3,
      img: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-best-practices-for-running-a-successful-enterprise-0-2023-5-19-t-7-35-16.jpg",
      title: "Best Practices For Running A Successful Enterprise",
      subTitle: "Business | English | 18yrs + | 1hr 30mins"
    }, {
      id: 4,
      img: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-art-and-craft-online-workshop-2020-5-20-t-13-39-12.jpg",
      title: "Art and Craft Online Workshop",
      subTitle: "Arts and Crafts | English, Hindi | 5yrs + | 1hr 30mins"
    }, {
      id: 5,
      img: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-smartphone-photography-unleash-the-pro-mode-0-2021-6-11-t-19-20-49.jpg",
      title: "Smartphone Photography - Unleash the Pro Mode",
      subTitle: "Photography | English, Hindi, Telugu | 12yrs + | 1hr 30mins"
    }, {
      id: 6,
      img: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kids-sudoku-championship-by-malsar-0-2023-4-13-t-10-29-33.jpg",
      title: "Kids Sudoku Championship by MALSAR",
      subTitle: "Education | 3yrs + | 3hrs"
    },  {
      id: 7,
      img: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-online-prasad-from-hanuman-garhi-ayodhya-0-2021-12-1-t-13-38-51.jpg",
      title: "Online Prasad From Hanuman Garhi, Ayodhya",
      subTitle: "Spirituality"
    }, {
      id: 8,
      img: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-abstract-portrait-painting-0-2021-2-22-t-17-31-49.jpg",
      title: "Abstract Portrait Painting",
      subTitle: "Arts and Crafts | English, Hindi | 5yrs + | 1hr 30mins"
    }, {
      id: 9,
      img: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-monali-thakur-teaches-singing-0-2023-3-22-t-13-4-12.jpg",
      title: "Monali Thakur Teaches Singing",
      subTitle: " English | All age groups | 2hrs 30mins"
    }, {
      id: 10,
      img: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-masterclass-on-consistent-compounding-0-2021-11-22-t-5-25-56.jpg",
      title: "Masterclass on Consistent Compounding",
      subTitle: "Online Streaming Events, Workshops | English | 1hr"
    }, {
      id: 11,
      img: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-focusing-the-first-primary-goal-0-2023-4-14-t-6-51-51.jpg",
      title: "Focusing - The First Primary Goal",
      subTitle: "Photography | English, Hindi, Telugu | 16yrs + | 1hr 30mins"
    }, {
      id: 12,
      img: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-art-summer-camp-paint-the-spiderman-0-2023-5-8-t-4-5-44.jpg",
      title: "Art Summer Camp - Paint the SpiderMan",
      subTitle: "Arts and Crafts | English, Hindi, Bengali | All age groups | 1hr 30mins"
    }, 
  ]);
  return (
    <>
      <div className='w-full flex flex-row  gap-10 py-4 px-8 iphone:py-0'>
        <Filter />
        <div>
          <h1 style={{ fontSize: "clamp(1rem , 2.5vw , 1.5rem)" }}>Plays</h1>
          <div className='flex flex-row flex-wrap'>

            {
              card.map((each , index)=>(
                <Card key={index} {...each} />
                ))
              }
          </div>
        </div>
      </div>
    </>
  )
}

export default DefaultLayoutHoc(PlaysPage)