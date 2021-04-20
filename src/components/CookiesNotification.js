import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/react"

const cookiesNotificationStyles = (theme) => css`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: ${theme.colors.dark};
  padding: 20px 40px;
  text-align: center;
  font-size: 1.4rem;
  transition: transform 0.7s, opacity 0.7s;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.active {
    opacity: 1;
  }

  &.hidden {
    transform: translateX(-300%);
    opacity: 0;
  }

  ${theme.mediaQueries.tablet} {
    width: 90%;
    max-width: 700px;
    bottom: 30px;
    font-size: 1.5rem;
  }

  h6 {
    color: ${theme.colors.blue};
    font-family: ${theme.fontFamily.JetBrainsMono};
    font-size: inherit;
    font-weight: ${theme.fontWeight.thin};
  }

  p {
    font-size: inherit;
    margin: 1em 0;
    max-width: 500px;
    line-height: 1.2em;
  }

  button {
    color: white;
    background-color: ${theme.colors.blue};
    border: none;
    padding: 5px 15px;
    font-size: inherit;
    transition: color 0.3s, background 0.3s;

    &:hover {
      color: ${theme.colors.blue};
      background-color: white;
    }
  }
`

const CookiesNotification = ({ acceptCookiesFunc, areCookiesAccepted }) => (
  <div
    css={cookiesNotificationStyles}
    className={areCookiesAccepted ? "hidden" : "active"}
  >
    <h6>COOKIES POLICY</h6>
    <p>
      This webpage uses cookies to give you better experiences. Using the
      website means that you are OK with it.
    </p>
    <button type="button" onClick={acceptCookiesFunc}>
      accept cookies
    </button>
  </div>
)

CookiesNotification.propTypes = {
  acceptCookiesFunc: PropTypes.func.isRequired,
  areCookiesAccepted: PropTypes.bool.isRequired,
}

export default CookiesNotification
