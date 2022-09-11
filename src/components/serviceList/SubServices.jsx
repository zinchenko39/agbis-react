import React from 'react'
import styles from './subServices.module.css'


function SubServices(props) {
    const [activeItem, setActiveItem] = React.useState();
    const ref = React.useRef();

    const onSelectItem = (index) => {
        setActiveItem(index);
      }

    const tooglesubItems = (e) => {
        const listNode = document.querySelectorAll('[data-list="i"]');
        listNode.forEach(elem => elem.style.display = 'none')
        ref.current.lastElementChild.style.display = 'block';
    }

    const toogleChildren = (e) => {
        const serviceNode = document.querySelectorAll('[data-service="i"]');
        serviceNode.forEach(elem => {
            elem.nextSibling.style.display = 'none'
            elem.firstElementChild.style.textDecoration = 'none'})
        ref.current.firstElementChild.style.textDecoration = 'underline';
        if(ref.current.nextSibling.style.display === 'none') ref.current.nextSibling.style.display = 'block';
        tooglesubItems(e);
        };
        

  return (
    <>
    <div ref={ref} data-service='i' className={styles.services_main} onClick={toogleChildren}>
            <p>{props.name}</p>
          <div data-list='i' className={styles.services_items__list}>
            {
                props.subItems.map((name,index) => (
                    <div onClick={() => onSelectItem(index)} key={`${name}_${index}`} className={activeItem === index ? styles.services_item_active : styles.services_item}>{name}</div>
                ))
            }
          </div>
    </div>
    <div className={styles.services_item_card__wrapper}>
        {props.children}
    </div>
          
    </>
    
  )
}

export default SubServices