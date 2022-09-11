import React from "react";
import styles from "./servicesList.module.css";
import SubServices from "./SubServices";
import ItemCard from '../itemCard/ItemCard';
function ServicesList() {
  
  const [activeCards, setActiveCards] = React.useState();

  const dryCleaning = [
    "Аксессуары",
    "Верхняя одежда",
    "Деловой костюм",
    "Джинсы",
    "Куртка и пуховик",
    "Пальто и плащ",
  ];
  const aqua = [
    "Деловой костюм",
    "Верхняя одежда",
    "Аксессуары",
    "Джинсы",
    "Куртка и пуховик",
    "Пальто и плащ",
  ]
  
  const onSelectCard = (index) => {
    setActiveCards();
  }
  

  return (
    <section className={styles.services_wrapper}>
      <div className={styles.services_main}>
          <SubServices name={'Химчистка'} subItems={dryCleaning}>
                    <ItemCard name = {"Пальто, полупальто с подстёжкой из натурального меха"} price={'400р'}/>
                    <ItemCard name = {"Ветровка"} price={'520р'}/>
                    <ItemCard name = {"Ветровка (натуральный шёлк)"} price={'3000р'}/>
                    <ItemCard name = {"Ветровка (натуральный шёлк)"} price={'1100р'}/>
          </SubServices>
          <SubServices name ={'Аквачистка'} subItems={aqua}>
                  <ItemCard name = {"Пиджак"} price={'1 400р'}/>
                  <ItemCard name = {"Пиджак натуральный шёлк"} price={'520р'}/>
                  <ItemCard name = {"Пиджак с коротким рукавом без подклада"} price={'2200р'}/>
                  <ItemCard name = {"Пиджак натуральный шёлк с коротким рукавом"} price={'3000р'}/>
          </SubServices>
          <SubServices name={'Химчистка'} subItems={dryCleaning}>
                    <ItemCard name = {"Пальто, полупальто с подстёжкой из натурального меха"} price={'400р'}/>
                    <ItemCard name = {"Ветровка"} price={'520р'}/>
                    <ItemCard name = {"Ветровка (натуральный шёлк)"} price={'3000р'}/>
                    <ItemCard name = {"Ветровка (натуральный шёлк)"} price={'1100р'}/>
          </SubServices>
          <SubServices name ={'Аквачистка'} subItems={aqua}>
                  <ItemCard name = {"Пиджак"} price={'1 400р'}/>
                  <ItemCard name = {"Пиджак натуральный шёлк"} price={'520р'}/>
                  <ItemCard name = {"Пиджак с коротким рукавом без подклада"} price={'2200р'}/>
                  <ItemCard name = {"Пиджак натуральный шёлк с коротким рукавом"} price={'3000р'}/>
          </SubServices>
        </div>
    </section>
  );
}

export default ServicesList;
