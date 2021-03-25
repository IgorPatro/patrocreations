import React from "react"
import PropTypes from "prop-types"
import "./globalStyles.css"


const HomeTemplate = ({ children }) => (
  <>
    <div>
      <div>navigation</div>
      <div>{children}</div>
      <div>contact</div>
    </div>
  </>
)

HomeTemplate.propTypes = { children: PropTypes.node.isRequired }

export default HomeTemplate
