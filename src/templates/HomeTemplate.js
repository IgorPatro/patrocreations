import React from "react"
import PropTypes from "prop-types"
import "./globalStyles.scss"

import styles from "./homeTemplate.module.scss"

const HomeTemplate = ({ children }) => (
  <>
    <div className={styles.homeWrapper}>
      <div className={styles.navigation}>navigation</div>
      <div>{children}</div>
      <div className={styles.contact}>contact</div>
    </div>
  </>
)

HomeTemplate.propTypes = { children: PropTypes.node.isRequired }

export default HomeTemplate
