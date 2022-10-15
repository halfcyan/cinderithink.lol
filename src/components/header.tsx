import * as React from "react"
import PropTypes from "prop-types"

const Header = (_Header: any) => (
  <header>
    <a
      className="text-3xl left-0 p-3 flex float-left absolute text-white hover:text-purple-400 transition-colors no-underline font-['Oxygen']"
      href="/"
    >
      cinderithink
    </a>
    <a
      className="text-2xl right-0 p-3 flex float-right absolute text-white hover:text-purple-400 transition-colors no-underline font-['Oxygen']"
      href="/reviews"
    >
      Reviews
    </a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
