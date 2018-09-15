import React from 'react';

const Card = ({ name, email }) => 
   // const { name, email } = props;
      <div className=" ma2 mw5 bg-light-green pa3 tc blue pointer grow shadow-3 br2">
         <img src={`https://robohash.org/${name}?200x200`} className="w-100" alt="robot"/>
         <h2 className="f5 b">{name}</h2>
         <p className="black-70 i">{email}</p>
      </div>

export default Card;