import React from 'react'

const Favorites = ({favorites,setFavorites}) => {
  return (
    <div>
      <div className="cards">
          {favorites.map((e) => {
            return (
              <div className="card">
                <div>
                  <img src={e.imgUrl} alt="" />
                </div>
                <div>
                  <h1>{e.name}</h1>
                  <p>{e.description}</p>
                  <p className="price">${e.price}</p>
                  <p>
                    <i className={e.icon} onClick={()=>{handleAddToFavorites(e._id)}}></i>
                  </p>
                  <Button
                    onClick={() => {
                     
                    }}
                    type="primary"
                    danger
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}</div>
    </div>
  )
}

export default Favorites
