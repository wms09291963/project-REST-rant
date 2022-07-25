const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="images/404_Kitten.jpg" alt="confused kitty"/> 
                <div>
                 Photo by <a href="AUTHOR_LINK">kitten.com</a> on <a href="UNSPLASH_LINK">Unsplash</a>
              </div>
              </div>
          </main>
      </Def>
    )
  }
  module.exports = error404
  