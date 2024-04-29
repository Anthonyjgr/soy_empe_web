import React from 'react'
import s from "./BulletPoint.module.css"
import bullet_point from "/public/bullet_point.svg"

const BulletPoint = ({title}) => {
  return (
    <div className={s.main_c}>
      <img src={bullet_point} alt="bullet point"  className={s.img}/>
      <h2 className={s.h2}>{title}</h2>
    </div>
  )
}

export default BulletPoint