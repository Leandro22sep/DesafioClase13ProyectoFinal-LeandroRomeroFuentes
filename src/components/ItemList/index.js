import React, { useEffect, useState } from 'react'
import Item from '../Item'
import { db } from "../../assets/firebase"
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemList = () => {
  const [productos, setProductos] = useState([])

  const { id } = useParams()
  useEffect(() => {
    const productosCollection = collection(db, "productos")
    if (!id) {
      const consulta = getDocs(productosCollection)
      consulta
        .then(snapshot => {
          const productosFiltrados = snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              id: doc.id
            }
          })
          setProductos(productosFiltrados)
        })
    } else {

      const filtro = query(productosCollection, where("categoria", "==", id))
      const consulta = getDocs(filtro)

      consulta
        .then(snapshot => {
          const productosFiltrados = snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              id: doc.id
            }
          })
          setProductos(productosFiltrados)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }, [id])

  return (
    <section className='items'>
      {productos.map(producto => <Item key={producto.id} producto={producto} detail={false} />)}
    </section>
  )

}



export default ItemList