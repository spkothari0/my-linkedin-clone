import React from 'react'
import './stylesheets/Widges.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

function Widges() {

  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widges__article">
        <div className="widges__articleLeft">
          <FiberManualRecordOutlinedIcon fontSize='15px' />
        </div>
        <div className="widges__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    )
  }


  return (
    <div className='widges'>
      <div className="widges__header">
        <h3>LinkedIn News</h3>
        <InfoIcon />
      </div>
      {newsArticle("Latest first news", "This is 1st latest news.")}
      {newsArticle("Covid Update", "End of pandamic - WHO.")}
      {newsArticle("First Clone App", "This is 1st clone React App.")}
      {newsArticle("Learn React", "Learning React for better resume.")}
    </div>
  )
}

export default Widges
