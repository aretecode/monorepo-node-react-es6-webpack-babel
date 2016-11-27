import {AppContainer} from 'react-hot-loader'
import React from 'react'
import {render} from 'react-dom'
import AppRoot from '../app/App'

// 'plugins/app/AppRoot'

export const bootstrap = (ext) => {
  ext.point('core.attach.hot').extend({
    id: 'main',
    exec: () => {
      const rootEl = document.querySelector('#app')
      render(
        <AppContainer>
          <AppRoot />
        </AppContainer>,
        rootEl
      )

      if (module.hot) {
        module.hot.accept('../app/App', () => {
          render(
            <AppContainer>
               <AppRoot />
            </AppContainer>,
            rootEl
          )
        })
      }

    }
  })
}
