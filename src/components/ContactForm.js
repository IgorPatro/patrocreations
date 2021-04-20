/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"
import { css } from "@emotion/react"
import axios from "axios"

const formStyles = (theme) => css`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 100%;
  font-size: 1.7rem;
  max-width: 800px;

  ${theme.mediaQueries.tablet} {
    font-size: 2.1rem;
    grid-gap: 25px;
  }

  ${theme.mediaQueries.bigTablet} {
    font-size: 2.4rem;
  }

  ${theme.mediaQueries.desktop} {
    margin: 50px 0;
    font-size: 2rem;
  }

  .emails-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    font-size: inherit;

    ${theme.mediaQueries.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  textarea,
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${theme.colors.blue};
    width: 280px;
    min-width: 280px;
    max-width: 280px;
    outline: none;
    color: white;
    font-weight: ${theme.fontWeight.normal};
    transition: border 0.3s;
    font-size: inherit;
    display: inline-flex;

    ${theme.mediaQueries.phone} {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    }

    &:focus {
      border-bottom: 1px solid ${theme.colors.gold};
    }

    &.error {
      border-bottom: 1px solid red;
    }
  }

  .recaptcha-and-send-button {
    font-size: inherit;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    ${theme.mediaQueries.tablet} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    button {
      background-color: ${theme.colors.blue};
      color: white;
      border: none;
      border-radius: 100px;
      font-family: ${theme.fontFamily.JetBrainsMono};
      width: 200px;
      height: 40px;
      font-size: 0.8em;
      transition: color 0.3s, background 0.3s;

      &:hover {
        color: ${theme.colors.blue};
        background-color: white;
      }
    }
  }

  p {
    font-size: 0.9em;
  }
`

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [formMessage, setFormMessage] = React.useState("")
  const [recaptchaConfirmation, setRecaptchaConfirmation] = React.useState(
    false
  )
  const recaptchaRef = React.useRef()

  const onFormSendingError = () => {
    setFormMessage("Ooops, there are some mistakes in the form 😕")
  }
  const onFormSubmit = (data, e) => {
    if (recaptchaConfirmation) {
      axios
        .post("https://formspree.io/f/mdoykgpy", data)
        .then(() => {
          setFormMessage("Form has been sent, thank you! 😄")
          e.target.reset()
          recaptchaRef.current.reset()
          setRecaptchaConfirmation(false)
        })
        .catch(() =>
          setFormMessage(
            "Unfortunately there was a problem with sending, try later"
          )
        )
    } else {
      setFormMessage("You forgot about ReCaptcha! 😠")
    }
  }

  return (
    <form
      css={formStyles}
      onSubmit={handleSubmit(onFormSubmit, onFormSendingError)}
    >
      <div className="emails-wrapper">
        <input
          type="text"
          placeholder="Your name"
          {...register("name", { required: true, minLength: 3 })}
          className={errors.name && "error"}
        />
        <input
          type="text"
          placeholder="Your email"
          {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
          className={errors.email && "error"}
        />
      </div>
      <textarea
        rows="8"
        placeholder="Hey Igor, I'm writing..."
        {...register("message", { required: true, minLength: 5 })}
        className={errors.message && "error"}
      />
      <div className="recaptcha-and-send-button">
        <ReCAPTCHA
          sitekey="6Lezoa0aAAAAAJ49o7rrIu4FHWMlZEHF3U3WnuJb"
          theme="dark"
          onChange={(value) => {
            setRecaptchaConfirmation(value)
          }}
          ref={recaptchaRef}
        />
        <button type="submit">send away</button>
      </div>
      <p>{formMessage}</p>
    </form>
  )
}

export default ContactForm
