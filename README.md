# BITCORN

## Table of contents

- [General info](#general-info)
- [Launch](#launch)
- [Technologies](#technologies)
- [Project status](#project-status)
- [Changelog](#changelog)

## General info

A simple sign-on screen and user interface for a cryptocurrency called Bitcorn. Built with React, Typescript, Bootstrap, and D3 (Recharts). Initially assigned as a take home project for Frontend Engineer interview at Gemini, however I've made some upgrades since initially completed.

## Launch

View [here](https://jobcoin-1c304e.netlify.app/)

## Technologies

- React
- Typescript
- Vite
- Bootstrap
- D3 (Recharts)
- date-fns

## Project status

Complete w/ improvement opportunities:

- Investigate issue with ResizeDetector (Recharts dependency), does not always resize chart when window is resized by user.
- Refactor getData function in App component so that transactions state is removed from App (redundant data).

## Changelog

- Converted from JS to Typescript (March 27, 2023)
- Converted app bundler from webpack to vite (March 27, 2023)
