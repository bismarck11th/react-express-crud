import React from 'react'
import AddForm from './AddForm'
import CharacterList from './CharacterList'

const App = (props) => {
  return (
    <div>
      <AddForm store={props.store} />
      <CharacterList store={props.store} />
    </div>
  )
}

export default App