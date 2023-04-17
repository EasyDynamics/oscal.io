/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 *
 * Adapted to work with CSS-based icons instead of SVG.
 */

(() => {
  'use strict'

  const storedTheme = localStorage.getItem('theme')

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = function (theme) {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const activeThemeIconMap = {
    'light': 'bi-sun-fill',
    'dark': 'bi-moon-stars-fill',
    'auto': 'bi-circle-half',
  }
  const checkIcon = "bi-check2"

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')
    if (!themeSwitcher) return
    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeHolder = document.querySelector('.theme-icon-active')
    activeThemeHolder.classList.remove(...Object.values(activeThemeIconMap))
    activeThemeHolder.classList.add(activeThemeIconMap[theme])
    const activeThemeButton = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const allThemeButtons = document.querySelectorAll('[data-bs-theme-value]')
    allThemeButtons.forEach((element) => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
      element.querySelector(`.${checkIcon}`).classList.add('d-none')
    })
    activeThemeButton.classList.add('active')
    activeThemeButton.setAttribute('aria-pressed', 'true')
    activeThemeButton.querySelector(`.${checkIcon}`).classList.remove('d-none')
    themeSwitcher.setAttribute('aria-label', `${themeSwitcherText.textContent.trim()} (${activeThemeButton.dataset.bsThemeValue.trim()})`)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          // TODO: Re-enable this after we have fixed the display issues with the
          // theme toggle dropdown
          // const theme = toggle.getAttribute('data-bs-theme-value')
          const theme = 'light';
          localStorage.setItem('theme', theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()
