import classes from './Verj.module.scss'
import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";


export default function Verj() {
  return (
    <div className={classes["verj"]}>
        <div className={classes["verji-one"]}>
            <div className={classes["one"]}><label>Jeyvers</label></div>
            <div className={classes["two"]}><label>API consumed : Fake Store API</label> </div>
            <div className={classes["three"]}><label>Jeyi's portfolio : Jeyi Adole</label></div>
        </div>
        <div className={classes["verji-two"]}></div>
        <div className={classes["verji-three"]}></div>
        <div className={classes["jurrr"]}> 
        <AiOutlineLinkedin className={classes["icon-1"]}/>
        <FaTwitter className={classes["icon-1"]}/>
        <AiFillGithub className={classes["icon-1"]  } /></div>
        <div className={classes["jur"]}>UI designed and developed by Jeyvers. Web Application built with React solely for pratice and showcase purposes</div>
    </div>
  )
}
