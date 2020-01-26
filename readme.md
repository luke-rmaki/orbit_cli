# Orbit CLI

Orbit CLI is a command line interface that can perform basic orbital mechanics and rocketry math. It came about after playing many hours of Kerbal Space Program and just generally being interested in orbital mechanics.

## Installation

Requires Node JS installed.

```javascript
npm i -g @luke_rmaki/orbit_cli
```

## Usage

```javascript
orbit-cli calc
```

or

```javascript
orbit-cli c
```

## Current calculations:

- Orbital period (in minutes).
- Orbital speed (in meters per second). This equation currently assumes a close to circular orbit
- Tsiolkovsky's rocket equation (using specific impulse and standard gravity in place of exhaust velocity)
- The Vis Viva equations to calculate the Delta V of a Hohmann Transfer

## Future features

- Ascent Delta V costs
- More....

## A few notes

These equations are obvious just a rough indication of the numbers involved in building and flying a rocket, so always budget a bit more delta V

### More information

For more information about the actual math involved I highly recommend [this](https://www.youtube.com/watch?v=VS1XACh4upc&list=PLB3Ia8aQsDKgAa9pyjeSDic49oi591zqC) YouTube channel.
