import React from 'react'
import { useGlobalContext } from '../../Context/Context'
import '../Search/Search.css'
import ToggleTheme from '../ToggleTheme/ToggleTheme'
const Search = () => {
  const {query,setQuery,isError} =useGlobalContext();
  return (
    <> 
      <section className="search-section">
        <div className="search-container">
          <div className="theme-toggler">
            <ToggleTheme/>
          </div>
          <div className="search-heading">
            <h2>Search Your Favourite Movie !!</h2>
          </div>
          <div className="search-box">
            <form action="#" onSubmit={(e)=>e.preventDefault()}>
              <div className="input-box">
                <input type="text" placeholder="..........search here........." vlaue={query} onChange={(e)=>setQuery(e.target.value)} />
              </div>
            </form>
            <div className="card-error">
              <p>{isError.show && isError.msg}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search