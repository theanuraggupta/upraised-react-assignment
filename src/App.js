import React from 'react';
import './style.css';
import { getData } from './utils';

export default function App() {
  getData("https://0c2ffa76-c790-4b4a-bdc4-1f9c5ce63287.mock.pstmn.io/getquestions", "GET").then(res => {
    console.log("getData", res);
  });
  return (
    <div>
      App.js
    </div>
  );
}
