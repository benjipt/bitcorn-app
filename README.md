# BITCORN

## Table of contents

- [General info](#general-info)
- [Launch](#launch)
- [Technologies](#technologies)
- [Project status](#project-status)
- [Changelog](#changelog)

## General info

A simple sign-on screen and wallet UI for a fake cryptocurrency called Bitcorn. Built with React, Typescript, Bootstrap, and D3 (Recharts), w/ Vite, Vitest, and RTL. Read about the backend service: [bitcorn-chain](https://github.com/benjipt/bitcorn-chain).

## Launch

View [here](https://bitcorn.netlify.app/)

## Technologies

- React
- Typescript
- Vite
- Bootstrap
- D3 (Recharts)
- date-fns
- Vitest / RTL

## Project status

TODOOS:

- Investigate issue with ResizeDetector (Recharts dependency), does not always resize chart when window is resized by user.
- IF Δ of earliest and latest transaction is less than 1 day THEN x interval on chart should be hours.
- IF Δ of earliest and latest transaction is less than 1 hour THEN x interval on chart should be minutes.

## Changelog

- Chart Improvements: First plot starts at zero (May 2, 2023)
- Migrated from Jest to Vitest (May 1, 2023)
- Migrated from Gemini API to new backend service: [bitcorn-chain](https://github.com/benjipt/bitcorn-chain) (Apr 30, 2023)
- Converted project name from Jobcoin to Bitcorn (Apr 6, 2023)
- Migrated from JS to Typescript (Mar 27, 2023)
- Migrated app bundler from webpack (CRA) to vite (Mar 27, 2023)
