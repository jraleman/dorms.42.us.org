# Nostromo Dorms - 42 Silicon Valley

## About

...

## Setup

Clone the repository:

```
git clone https://github.com/jraleman/nostromo-dorms nostromo-dorms
cd nostromo-dorms
```

Install all the dependencies needed:

```
npm install
```

Start the development server:

```
npm start
```

## Project Structure

The idea of having a good project structure is to have a cross platform project,
to maximize code reuse, keep the configurations out of the code, and minimize
the component state.

This is the main idea:

```
srcs
├── config/
├── components/
│   ├── Button/
│   │   ├── Button.js
│   │   ├── index.js
│   │   └── styles.js
|  ...
│   └── Header/
│       ├── Header.js
│       ├── index.js
│       └── styles.js
├── assets/
│   ├── fonts/
│   └── images/
│       ├── logo-landscape.png
│       └── background.png
└── screens
    ├── Login
    │   ├── Login.js
    │   ├── index.js
    │   └── styles.js
   ...
    └── Settings
        ├── Settings.js
        ├── index.js
        └── styles.js
```

## Design Style Guide

### Colors

![#01babc](http://via.placeholder.com/150/01babc/000000?text=action)
![#80dcdd](http://via.placeholder.com/150/80dcdd/000000?text=highlight)
![#222222](http://via.placeholder.com/150/222222/ffffff?text=darkish)
![#eeeeee](http://via.placeholder.com/150/eeeeee/000000?text=lightish)

## TODO

...

### Bugs

...

### Ideas

...


## Easter Eggs

...

## Dependencies

...

## Contributors

* [Jose Ramon Aleman](https://github.com/jraleman/)

## Acknowledgment

...

## Resources

...

## License

This project is under the MIT License.
