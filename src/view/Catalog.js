import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Catalog() {
 
  let {id} =useParams()
  return (
    <div>
      {id}
    </div>
  )
}

export default Catalog