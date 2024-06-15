import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
         <div className={styles.box}>
          <img className={styles.img} src="https://th.bing.com/th/id/OIP.RWEdWqD4c7PiEBi7si12eQHaEK?w=335&h=187&c=7&r=0&o=5&pid=1.7" alt="" />
          
          <div className={styles.but}><button className="btn btn-sm btn-success"><Link className={styles.link} to="/login">Login</Link></button>
          <button className="btn btn-sm btn-success"><Link className={styles.link} to="/signup">Signup</Link></button></div>
           
         </div>
    </div>
  )
}

export default Home