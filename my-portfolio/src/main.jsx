import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ErrorBoundary
      FallbackComponent={MainErrorFallback}
      onReset={() => window.location.replace("/app")}
    >
      <Suspense fallback={<DuckLoading />}></Suspense> */}
    <App />
    {/* </Suspense>
    </ErrorBoundary> */}
  </StrictMode>,
)
