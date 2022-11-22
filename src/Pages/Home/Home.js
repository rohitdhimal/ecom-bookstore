import { Fragment } from "react";
import Header from '../../Components/Header/Header';
import ItemsList from "../../Components/ItemsList/ItemsList";

import './Home.css';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <ItemsList />
    </Fragment>
  );
}

export default Home