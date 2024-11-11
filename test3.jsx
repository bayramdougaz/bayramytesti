import React from 'react';      //biblio
import ReactDOM from 'react-dom/client';      //biblio

function sadi9(props) {     //function sadi9 fiha properties fil objet'sadi9'
  return <h1>{ props.sadi9 }</h1>;      //props.sadi9 traja3lek il attrribut mtaa il objet sadi9 fil class sadi9
};

function rakcha(props) {
  return (
    <>
	    <h1>ray rakcha {props.jaw} fil dar ye  <sadi9 sadi9="ala" /></h1>
      <h2>yedy rahou <said ma9oula="wisdom"/></h2>
      <jo3t/>
      <company/>
    </>     //<said ma9oula="wisdom"/> appel lel fonction said w il ilobjet ma9oula andha 'wisdom' comme attribut
  );
};
function said(props){     //function said w props property
    if (props.ma9oula="wisdom"){      //if (condition) props.ma9oula traja3 il attribut mtaa ilobjet ma9oula
        return (
            <h1>mla3ab far ala zbiba samer biha il 9a3det</h1>
        );
    };
    return (
        <h1>7okka tonn</h1>       //in case (condition=False)
  );

};
function jo3t() {     //function jo3t meghir parametre
  const solution = () => {      //solution constante w =()=>{} hiya chnouwa taamel ilconstant heka a.k.a (event)
    alert("ichri mekla");     //alert("il haja li thib taffichiha comme message d'alerte mel fou9")
  }
  return (
    <button onClick={solution}>jo3t?!</button>      //button houwa button ;) ,onClick={solution} yaani kif tensel tlanci ilevent solution
  );
};
function friend(props) {    //function friend bel parametre props
  return <li>m3aa { props.who }</li>;     //props.who khater props attribue lel objet who
}
function company() {
  const friends = ['bayram', 'ala', 'hayder'];    //liste
  return (
    <>
	    <h1>maa chkoun kharejin?</h1>
	    <ul>
        {friends.map((friend) => <friend who={friend} />)}      
      </ul>
    </>
  );//liste.map((objet)=><functionname objet={attribue fil liste}/> )
}
const root = ReactDOM.createRoot(document.getElementById('root'));      //create root
root.render(<rakcha jaw="bel zebda" />);    //render function and its the main one in our case
