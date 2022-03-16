import React from 'react'
import PropTypes from 'prop-types'
const Button = ({children, version, type, isDiabled}) => {
  return (
   <button type={type} disabled={isDiabled} className={`btn btn-${version}`}>
       {children}
   </button>
  )
}
Button.defaultProps = {
    version: "primary",
    type: "button",
    isDiabled: false
}
Button.propTypes = {
    children:PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDiabled: PropTypes.bool
}
export default Button