import React from 'react';
import './App.scss';
import './resets.scss';
import { connect } from 'react-redux';

const App = (props) => {

  return (
    <div className="app-wrapper">
      <h1>Hello</h1>
    </div>
  );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
