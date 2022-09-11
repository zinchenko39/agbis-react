import React from 'react'

import styles from "./sortPopUp.module.css";

function SortPopUp({items}) {
  const [visiblePopUp, setVisiblePopUp] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const sortRef = React.useRef();
  const activeLabel = items[activeItem];

  const toggleVisiblePopUp = () => {
    setVisiblePopUp(!visiblePopUp)
  };
  
  const onSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopUp(false);
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  },[]);

  const handleOutsideClick = (e) => {
    if(!e.path.includes(sortRef.current)) {
      setVisiblePopUp(false);
    }
  }



  return (
    <div ref={sortRef} onClick={toggleVisiblePopUp} className={styles.header_top__language}>
        {activeLabel}
        {
          visiblePopUp && 
          <ul className={styles.header_top__language_popup}>
              {
                items && items.map((name, index) => (
                  <li 
                  className= {activeItem === index ? styles.header_top__language_popup__active : ''}
                  onClick={() => onSelectItem(index)} 
                  key={`name_${index}`}>{name}
                  </li>))
              }
          </ul>
        }
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.484629 0.312385C0.698013 0.133444 1.0108 0.139714 1.21684 0.327064L4.87341 3.65192C5.32409 4.06172 5.54944 4.26662 5.81144 4.32356C5.95139 4.35397 6.09623 4.35397 6.23618 4.32356C6.49818 4.26662 6.72353 4.06172 7.17421 3.65192L10.8334 0.324719C11.0365 0.14004 11.3461 0.13821 11.5514 0.320475C11.7907 0.532988 11.7923 0.906335 11.5548 1.12084L6.41667 5.7605C6.16667 5.98967 5.83333 6.10425 5.58333 5.87508L0.464647 1.1479C0.218172 0.920274 0.227555 0.527965 0.484629 0.312385Z"
            fill="white"
          />
        </svg>
      </div>
  )
}

export default SortPopUp;