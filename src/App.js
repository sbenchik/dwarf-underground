import React, { Component } from 'react';
import Header from './Header/Header'
import Article from './Article/Article'
import Sidebar from './Sidebar/Sidebar'
import Clickbait from './Clickbait/Clickbait'
import Footer from './Footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <Article />
          <aside className="large-4 medium-12 columns">
            <Sidebar />
          </aside>
          <Clickbait />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
