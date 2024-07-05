import { useLocation, useRouteError } from 'react-router-dom'

export function ErrorPage() {
  const location = useLocation()
  console.log('location', location)
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}