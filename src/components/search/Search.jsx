import React from 'react'
import styles from './search.module.css'

function Search() {
  return (
    <section className={styles.search_wrapper}>
        <h1>Услуги</h1>
        <input className={styles.search_input} placeholder='Поиск'></input>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11.5" cy="8" r="7" stroke="#1D252E" stroke-width="2"/>
        <path d="M6.98853 14L7.65895 14.4791L4.40994 19.0255C4.27764 19.2106 4.0203 19.2534 3.83517 19.1211V19.1211C3.65004 18.9888 3.60721 18.7315 3.73951 18.5464L6.98853 14Z" stroke="#1D252E"/>
        </svg>
    </section>
  )
}

export default Search