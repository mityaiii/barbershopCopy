import React, { useState } from 'react'
import Button from '../UI/Button'
import styles from '../../styles/marketContent/Filters.css'

function FilterOption({ forInfo, value, selected, ...inputInfo }) {
  return (
    <li className={selected ? "filter-option selected": "filter-option"}>
      <input {...inputInfo}/>
      <label htmlFor={forInfo}>{ value }</label>
    </li>
  )
}

function Filters() {
  const [selectedTags, setSelectedTags] = useState([]);

  function handleSelectTag(tag) {
    console.log(tag)
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(selectedTag => selectedTag != tag))
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    console.log(selectedTags)
  }

  return (
    <section className='filters'>
      <h2 className='visually-hidden'>Фильтр товаров</h2>
      <form className='filter' method='get' action='https://echo.htmlacademy.ru'>

        <fieldset>
          <legend>Производители:</legend>
          <ul>
            <FilterOption
              forInfo='filter-baxter-of-california'
              id='filter-baxter-of-california'
              key='filter-baxter-of-california'
              value='Baxter of California'
              className="visually-hidden filter-input filter-input-checkbox" type="checkbox"
              onClick={() => handleSelectTag('Baxter of California')}
              selected={selectedTags.includes('Baxter of California')}
            />

            <FilterOption
              forInfo='filter-baxter-of-california-1'
              id='filter-baxter-of-california-1'
              key='filter-baxter-of-california-1'
              value='Baxter of California 1'
              className="visually-hidden filter-input filter-input-checkbox" type="checkbox"
              onClick={() => handleSelectTag('Baxter of California 1')}
              selected={selectedTags.includes('Baxter of California 1')}
            />

            <FilterOption
              forInfo='filter-baxter-of-california-2'
              id='filter-baxter-of-california-2'
              key='filter-baxter-of-california-2'
              value='Baxter of California 2'
              className="visually-hidden filter-input filter-input-checkbox" type="checkbox"
              onClick={() => handleSelectTag('Baxter of California 2')}
              selected={selectedTags.includes('Baxter of California 2')}
            />

          </ul>
        </fieldset>
      </form>
    </section>
  )
}

export default Filters