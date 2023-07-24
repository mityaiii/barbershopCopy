import React from 'react'
import { CustomList1 } from './customLists/CustomList1'
import { CustomList2 } from './customLists/CustomList2'
import InnerColumn from './InnerColumn'
import { ShortText } from './customLists/ShortText'
import { Breadcrumbs } from '../UI/Breadcrumbs'
import styles from '../../styles/priceListContent/PriceListContent.css'

function PriceListContent() {
  return (
    <main className='container'>
      <div className='inner-page-container'>
        <h1 className='page-title'>Прайс-лист</h1>
        <Breadcrumbs/>
      </div>

      <section className='inner-content'>
        <h2 className="big-heading">Истинно мужская классика</h2>
        <InnerColumn>
          <CustomList1 type='inner-column-left'/>
          <CustomList2 type='inner-column-right'/>
        </InnerColumn>

        <InnerColumn>
          <h2>Несколько слов о нас:</h2>
          <ShortText type='inner-column-left'>
            Наша парикмахерская занимается исключительно мужскими стрижками. Стрижка каждого клиента для нас - это уникальная и продуманная до мелочей работа. Мы не работаем на количество, мы делаем качество.
          </ShortText>
          <ShortText type='inner-column-right'>
            Наша мастерская расположена в центре города, поэтому сделать стильную стрижку можно в любое время, даже в обеденный перерыв. Здесь вы можете погрузиться в удобную для вас атмосферу, чувствовать себя комфортно и свободно!
          </ShortText>
        </InnerColumn>
      </section>
    </main>
  )
}

export default PriceListContent;