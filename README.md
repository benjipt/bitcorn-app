# BITCORN

## Table of contents

- [General info](#general-info)
- [Launch](#launch)
- [Technologies](#technologies)
- [Project status](#project-status)
- [Changelog](#changelog)

## General info

A simple sign-on screen and user interface for a fake cryptocurrency called Bitcorn. Built with React, Typescript, Bootstrap, and D3 (Recharts), w/ Vite. Take home project for Gemini Front-end Engineer interview.

## Launch

View [here](https://bitcorn.netlify.app/)

## Technologies

- React
- Typescript
- Vite
- Bootstrap
- D3 (Recharts)
- date-fns

## Project status

TODOOS:

- Investigate issue with ResizeDetector (Recharts dependency), does not always resize chart when window is resized by user.
- IF Δ of earliest and latest transaction is less than 1 day THEN x interval on chart should be hours.
- IF Δ of earliest and latest transaction is less than 1 hour THEN x interval on chart should be minutes.

## Changelog

- Converted project name from Jobcoin to Bitcorn (Apr 6, 2023)
- Converted from JS to Typescript (Mar 27, 2023)
- Converted app bundler from webpack to vite (Mar 27, 2023)
