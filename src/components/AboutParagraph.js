import React from "react"
import PropTypes from "prop-types"
import { css, keyframes } from "@emotion/react"
import styled from "@emotion/styled"

const loadAboutParagraphFromRight = keyframes`
  from {
    transform: translateX(10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const loadAboutParagraphFromLeft = keyframes`
  from {
    transform: translateX(-10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const injectAnimation = ({ index }) => ({
  animation: `${
    index % 2 === 0 ? loadAboutParagraphFromLeft : loadAboutParagraphFromRight
  } 1s ease-in-out ${1 + index * 0.5}s forwards`,
})

const StyledAboutParagraph = styled.article`
  ${injectAnimation}

  &::before {
    content: ${({ index }) => `"0${index + 1}"`};
  }
`

const wrapperStyles = (theme) => css`
  position: relative;
  font-size: 2.3rem;
  margin: 70px 0;
  transform: translateX(10%);
  opacity: 0;

  ${theme.mediaQueries.tablet} {
    font-size: 3rem;
    width: 75%;
    max-width: 600px;
    margin: 100px 0;
  }

  ${theme.mediaQueries.bigTablet} {
    font-size: 3.5rem;
    margin: 130px 0;
  }

  ${theme.mediaQueries.desktop} {
    font-size: 2.9rem;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    color: ${theme.colors.dark};
    font-family: ${theme.fontFamily.JetBrainsMono};
    font-size: 4em;
    transform: translate(-20px, -30px);
    z-index: -10;
    font-weight: ${theme.fontWeight.bold};

    ${theme.mediaQueries.tablet} {
      transform: translate(-50px, -50px);
    }
  }

  .subtitle-wrapper {
    display: flex;

    h4 {
      position: relative;
      font-size: 0.6em;
      transform: translateX(60px);
      font-weight: ${theme.fontWeight.normal};
      font-family: ${theme.fontFamily.JetBrainsMono};

      &::before {
        content: "";
        width: 50px;
        height: 3px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-60px, -50%);
        background-color: ${theme.colors.blue};
      }

      strong {
        color: ${theme.colors.blue};
        font-weight: ${theme.fontWeight.bold};
        font-size: inherit;
      }
    }
  }

  h2 {
    line-height: 1.8em;
    font-size: inherit;
  }

  p {
    font-size: 0.6em;
    line-height: 1.2em;

    strong {
      color: ${theme.colors.blue};
      font-size: inherit;
      font-weight: ${theme.fontWeight.bold};
    }
  }

  &.right {
    text-align: right;
    margin: 0 0 0 auto;
    transform: translateX(-10%);
    opacity: 0;

    &::before {
      right: 0;
      transform: translate(20px, -30px);

      ${theme.mediaQueries.tablet} {
        transform: translate(50px, -50px);
      }
    }

    .subtitle-wrapper {
      justify-content: flex-end;

      h4 {
        transform: translateX(0);

        &::before {
          transform: translate(calc(-100% - 10px), -50%);
        }
      }
    }
  }
`
const AboutParagraph = ({ content }) => (
  <StyledAboutParagraph
    css={wrapperStyles}
    className={content.index % 2 === 0 ? "left" : "right"}
    index={content.index}
  >
    <div
      className="subtitle-wrapper"
      dangerouslySetInnerHTML={{
        __html: content.subtitleNode.childMarkdownRemark.html,
      }}
    />
    <h2>{content.title}</h2>
    <div
      dangerouslySetInnerHTML={{
        __html: content.contentNode.childMarkdownRemark.html,
      }}
    />
  </StyledAboutParagraph>
)

AboutParagraph.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
}

export default AboutParagraph
