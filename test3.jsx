import React from 'react';
import ReactDOM from 'react-dom/client';

function sadi9(props) {
  return <h1>{ props.sadi9 }</h1>;
}

function rakcha(props) {
  return (
    <>
	    <h1>ray rakcha {props.jaw} fil dar ye  <sadi9 sadi9="ala" /></h1>
      <h2>yedy rahou <said ma9oula="wisdom"/></h2>
    </>
  );
}
function said(props){
    if (props.ma9oula="wisdom"){
        return (
            <h1>mla3ab far ala zbiba samer biha il 9a3det</h1>
        )
    }
    else{
        return (
            <h1>7okka tonn</h1>
  )
    };
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<rakcha jaw="bel zebda" />);