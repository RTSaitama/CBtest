import { StrictMode } from 'react'
import { Root } from './Root.tsx';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './redux/store.ts'
import './index.scss'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </StrictMode>,
)
