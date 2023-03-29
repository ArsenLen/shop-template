import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Filter from '../../components/Filter/Filter';
import Info from '../../components/Info/Info';
import Product from '../../components/Product/Product';
import styles from './catalogpage.module.css'

const CatalogPage = () => {
  return (
    <div>
      <Breadcrumbs  />
      <Filter />
      <div className={styles["products-wrapper"]}>
        <Product/>
      </div>
      <Info />
    </div>
  );
};

export default CatalogPage;