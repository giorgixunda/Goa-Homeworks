import React from 'react'
import Header from './Component/Header'
import Button from './Component/ui/button'
import MenuDrop from './Component/ui/MenuDrop'
import DisclosureUi from './Component/ui/DiscloureUi'
import TransitionUi from './Component/ui/TransitionUi'
import Dialog from './Component/ui/Dialog'
import PopOver from './Componet/ui/PopOver'
import Tabs from './Component/ui/Tabs'
const App = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main className='container'>
          <section>
            <Button>click</Button><br />
            <MenuDrop/><br />
            <DisclosureUi/><br />
            <Dialog/><br />
            <TransitionUi/><br />
            <Tabs/><br />
            <PopOver/>
          </section>
      </main>
    </div>
  )
}

export default App
