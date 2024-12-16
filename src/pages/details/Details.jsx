import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const Details = () => {
    const {id} = useParams()
    const { data } = useFetch(`/product/get/${id}`);
    console.log(id);
    console.log(data);
    
  return (
    <div>
        <div>
            <img src={data?.image} alt="" />
        </div>
    </div>
  )
}

export default Details