import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GlossaryCard } from './GlossaryCard'
import { fetchAllGlossaries } from '../store/glossary'
import './glossary.css'

export function Glossary () {
  const glossary = useSelector(store => {
    // console.log("Redux Store", store)
    return store.glossary ? store.glossary : []
  })

  const dispatch = useDispatch()

  const sideEffects = () => {
    dispatch(fetchAllGlossaries())
  }
  React.useEffect(sideEffects, [])
  console.log(glossary)
  return (
    <>
      <div id="glossary">
        <div className="container text-center">
          <div className="row mx-md-3">
            <div className="col p-2 mx-auto">
              <h1>GLOSSARY</h1>
            </div>
          </div>
        </div>
        <div className='container-lg'>
          <div className="row-cols-lg-1">
            <div className="card gloss">
              {glossary.map(glossaries => <GlossaryCard glossaries={glossaries} key={glossaries.glossaryId}/>)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}