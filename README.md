# React Image Color Picker 

[![NPM](https://img.shields.io/npm/v/react-image-color-picker.svg)](https://www.npmjs.com/package/react-image-color-picker) 
 [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

The _`react-image-color-picker`_ is a powerful and versatile **eye-dropper React component** that enables users to easily select colors from an image. It provides an intuitive and interactive interface for color picking, zooming, and previewing, making it ideal for various use cases such as image editing, color analysis, and design applications.

|![Art Illustrated by Kelly Keiko](https://technog.com.br/color-picker/0f1c65bc-13a5-11ee-be56-0242ac120003.gif)|
|:--:| 
|  Art by [**_`Kelly Keiko`_**](https://www.artstation.com/imkeiko)  |

## Table of Contents
  - [Features](#key-features)
  - [Demo!](#demo)
  - [Install react-image-color-picker](#install)
  - [How to Use](#usage)
  - [Props](#props)
  - [Licence](#license)
  
## Key Features
  - **Touch Support:** fully compatible with mobile devices through touch gestures.
  - **Cross-Browser Compatibility:** Ensures compatibility with major web browsers, including Chrome, Firefox, Safari, Edge, Opera and Samsung Internet allowing users to access and use the application across different platforms seamlessly.
    - **It DOES NOT relies on browser EyeDropper API!** 
  - **Color picking:** Enable users to select colors from an image effortlessly.
  - **Real-time Color Feedback:** Display the selected color in real-time for immediate visual feedback.
  - **Zoom:** Provides a zoomed-in preview of a specific area of the image based on user interaction.
  - **Easy Integration:** Seamlessly integrate the component into React applications with minimal setup.
  - **Customization:** Supports customization of zoom level, image source, and more.


## Demo!
<a 
  href="https://technog.com.br/projects/react-image-color-picker/#try-it-out"
  target="_blank"
  rel="noopener noreferrer"
  style="display: inline-block; padding: 10px 20px; border-radius: 5px; background-color: #362035; box-shadow: 1px 1px 4px #000; color: white; text-decoration: none;">
  Try it out!
</a>


## Install

React Image color Picker requires **React 16.0.0 or later.**

**NPM**
```bash
npm install react-image-color-picker
```

**Yarn**
```bash
yarn add react-image-color-picker
```

## Usage

Import the necessary components:

```tsx
import React from 'react';
import { ImageColorPicker } from 'react-image-color-picker';
import image from '/path/to/image.jpg'

// Other imports...

const App = () => {
  const handleColorPick = (color: string) => {
    console.log('Selected color:', color); // Selected color: rgb(101, 42, 65)
  };

  return (
    <div>
      <h1>Image Color Picker Demo</h1>
      <ImageColorPicker
        onColorPick={handleColorPick}
        imgSrc={image}
        zoom={1}
      />
    </div>
  );
};

export default App;
```

**Result**

![Art Illustrated by Kelly Keiko https://www.artstation.com/imkeiko](/static/react-color-picker-full.png)


## Props

```ts
/**
  * Callback triggered when a color is selected.
  * @param color Color selected
  */
onColorPick: (color: string): void
/**
  * Image that will be rendered inside the component
  */
imgSrc: string
/**
  * Zoom level for the image preview
  * @default 0.5
  */
zoom?: number
```

## ✨ Give a Star
You can give a star at: https://github.com/gusttaswe/react-image-color-picker
## License

[MIT](https://github.com/gusttaswe/react-image-color-picker/blob/main/LICENSE) © [gusttaswe](https://github.com/gusttaswe)
