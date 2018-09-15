import React from 'react';

const Searchbox = ({searchChange}) => {
   return (
      <div className="mb3 mt1 tc">
         <input onChange={searchChange} className="bg-lightest-blue ba b--blue pa2 " type="search"/>
      </div>
   )
}

export default Searchbox;