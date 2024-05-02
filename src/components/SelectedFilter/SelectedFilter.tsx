import cn from "classnames";
import { observer } from "mobx-react-lite";
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import arrow from "assets/arrowDropDown.svg"
import useOutsideClick from 'configs/useOutsideClick';
import CategoryStore from "store/CategoryStore";
import rootStore from "store/RootStore/instance";
import { Meta } from "utils/meta";
import { useLocalStore } from 'utils/useLocalStore';
import styles from "./SelectedFilter.module.scss";

function SelectedFilter() {

  const optionsStore = useLocalStore(() => new CategoryStore())

  const [searchParams, setSearchParams] = useSearchParams("")
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState("")

  useEffect(() => {
    optionsStore.getList()
  }, [optionsStore])

  const {list, meta} = optionsStore;
  const listWithAll = [{id: 0, name: "All"}, ...list]

  const isActiveKey = (id: number) => {
    const currentKey = searchParams.get("categoryId")
    if (currentKey === null) {
      return false
    }
    return +currentKey === id
  } 

  const wrapperRef = useRef(null)
  useOutsideClick(wrapperRef, setIsOpen);
  
  

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  
 
  const onClick = (id: number, name: string) => {

    searchParams.set("categoryId", id.toString())
    searchParams.set("categoryName", name)
    searchParams.delete("page")

    if (searchParams.get("categoryName") !== name || name === "All") {
      searchParams.delete("categoryId")
      searchParams.delete("categoryName")
    }

    rootStore.query.setSearch(searchParams.toString())
    setIsOpen(false)
    setValue("")
    setSearchParams(searchParams)
  }

  const placeholder = searchParams.get("categoryName")
  
  return (
    <div className={styles.dropdown_menu} ref={wrapperRef}>
      <form  className={styles.dropdown_menu__form}>
        <input
          placeholder={placeholder === null ? "Filter" : placeholder}
          onFocus={() => setIsOpen(true)}
          value={value}
          onChange={onChange}
          className={styles.dropdown_menu__inputText}
        />
        <img src={arrow} alt="" 
          className={cn(styles.dropdown_menu__arrow, {
            [styles.dropdown_menu__arrow_open]: isOpen,
          })}
        />
      </form>
        {isOpen && meta === Meta.success && <ul className={styles.dropdown_menu__list}>
          {listWithAll
            .filter(({name}) => name.toLowerCase().includes(value.toLowerCase()))
            .map(({id, name}) => {
            return (
              <li 
                className={cn(styles.dropdown_menu__listItem, {
                  [styles.dropdown_menu__listItem_active]: isActiveKey(id)
                })}
                onClick={() => onClick(id, name)} 
                key={id}
              >
                {name}
              </li>
            )
          })}
       </ul>}
    </div>
)}

export default observer(SelectedFilter)
