import React from 'react'
import { Link } from 'react-router-dom'
import './categories.scss'
const Categories = () => {
  const data = [
    'https://img.freepik.com/free-photo/magnificent-young-woman-green-dress-looking-away-studio-shot-dreamy-girl-isolated-yellow-background_197531-27352.jpg?w=2000',
    'https://img.freepik.com/premium-photo/side-view-portrait-curious-blonde-woman-holding-hand-eyes-peering-into-distance-looking-far-away-expecting-searching-someone-indoor-studio-shot-isolated-red-background_416530-21697.jpg?w=2000',
    'https://img.freepik.com/premium-photo/portrait-cunning-beautiful-businesswoman-purple-dress-clasping-hands-planning-evil-tricky-prank-scheming-cheating-with-sly-smile-indoor-studio-shot-isolated-yellow-background_416530-24297.jpg?w=2000',
    'https://images.hdqwalls.com/wallpapers/bella-hadid-model-2020-4k-76.jpg',
    'https://img5.goodfon.com/wallpaper/nbig/f/55/karen-gillan-model-shatenka-aktrisa-stoit-v-sinem-plate-poza.jpg',
    'https://thumbnails.production.thenounproject.com/N6ASU151jMJKQ_-Ve8L_IhMHLu0=/fit-in/1000x1000/photos.production.thenounproject.com/photos/1D4C84AF-74FA-43DB-BFBB-42297C684EB8.jpg',
  ]
  return (
    <div className='categories_container'>
      <div className="row">
        <div className="column pc-6 tablet-12 mobile-12">
          <div className="row">
            <div className="column pc-6 tablet-6 mobile-12">
              <div className="categories_content1">
                <div className="categories_item">
                  <img src={data[0]} alt=""  className='img'/>
                  <Link className='link'>Sale</Link>
                </div>
                <div className="categories_item margin">
                  <img src={data[1]} alt=""  className='img'/>
                  <Link className='link'>Women</Link>
                </div>
              </div>
            </div>
            <div className="column pc-6 tablet-6 mobile-12">
              <div className="categories_content2">
                <img src={data[2]} alt="" className='img' />
                <Link className='link'>New season</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="column pc-6 tablet-12 mobile-12">
          <div className="categories_content3">
            <div className="row">
              <div className="column pc-6 table-6 mobile-12">
                <div className='categories_item'>
                  <img src={data[3]} alt="" className='img' />  
                  <Link className='link'>Men</Link>
                </div>
              </div>
              <div className="column pc-6 table-6 mobile-12">
                <div className='categories_item'>
                  <img src={data[4]} alt="" className='img' />
                  <Link className='link'>Accessories</Link>
                </div>  
              </div>
            </div>
          </div>
          <div className="categories_content4 margin">
            <img src={data[5]} alt="" className='img' />
            <Link className='link'>Shose</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories