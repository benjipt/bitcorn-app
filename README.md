# BITCORN APP

## Table of contents

- [General info](#general-info)
- [Launch](#launch)
- [Technologies](#technologies)
- [Project status](#project-status)
- [Changelog](#changelog)

## General info

A wallet client for a fictional cryptocurrency called Bitcorn. Built with React, Redux, Typescript, Bootstrap, D3 (Recharts), & Vite. Read about the backend service: [bitcorn-chain](https://github.com/benjipt/bitcorn-chain).

## Launch

View [here](https://bitcorn.netlify.app/)

## Technologies

- React
- Redux / Redux-Toolkit
- Typescript
- Vite
- Bootstrap
- D3 (Recharts)
- date-fns
- Vitest / React Testing Library

## Project status

TODOOS:

- Investigate issue with ResizeDetector (Recharts dependency), does not always resize chart when window is resized by user.
- IF Δ of earliest and latest transaction is less than 1 day THEN x interval on chart should be hours.
- IF Δ of earliest and latest transaction is less than 1 hour THEN x interval on chart should be minutes.

## Changelog

- Added Signup flow for new users (May 13, 2023)
- Migrated shared component state to Redux / Redux-Toolkit (May 13, 2023)
- Chart Improvements: First plot starts at zero (May 2, 2023)
- Migrated from Jest to Vitest (May 1, 2023)
- Migrated from Gemini API to new backend service: [bitcorn-chain](https://github.com/benjipt/bitcorn-chain) (Apr 30, 2023)
- Converted project name from Jobcoin to Bitcorn (Apr 6, 2023)
- Migrated from JS to Typescript (Mar 27, 2023)
- Migrated app bundler from webpack (CRA) to vite (Mar 27, 2023)
