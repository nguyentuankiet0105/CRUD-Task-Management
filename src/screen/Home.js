import * as React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Content from '../layout/Content';
// import { makeAutoObservable } from 'mobx';
// import { observer } from 'mobx-react';
// import TimerStore from '../Store/index';

import '../Style/Home.css'; 

const Home = () => {

  return (
    <div className="container">
      <Header />
      <Content/>
      <Footer />
    </div>
  );
};
// export default observer(Home);
export default Home;
