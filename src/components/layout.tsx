import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

let __PATH_PREFIX__ = "/"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/reviews`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/reviews">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} &middot; cinderithink &middot; <a href="https://github.com/halfcyan">My GitHub</a> &middot; Built with Gatsby 
      </footer>
    </div>
  )
}

export default Layout
