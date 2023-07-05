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
  - 🖐️ **Touch Support:** Fully compatible with mobile devices, the react-image-color-picker allows users to enjoy a seamless color selection experience using touch gestures.

  - 🌐 **Cross-Browser Compatibility:** Rest assured, your users can access and use this package across various platforms, as it ensures compatibility with major web browsers such as **Chrome, Safari, Firefox, Edge, Opera, and Samsung Internet.**

  - 🚫 **No Browser Dependencies:** Unlike other solutions, the react-image-color-picker does not rely on browser EyeDropper API, providing consistent performance and reliability.

  - 🌈 **Color Picking Made Easy:** Enable your users to effortlessly pick colors from any image, thanks to the intuitive and interactive interface.

  - 🎨 **Real-time Color Feedback:** Instantly display the selected color, giving users immediate visual feedback and enhancing their editing experience.

  - 🔍 **Zoom Functionality:** Dive into the finer details with the zoom feature, which provides a magnified preview of a specific area of the image based on user interaction.

  - 💼 **Seamless Integration:** Integrating the react-image-color-picker into your React applications is a breeze, requiring minimal setup. You'll have it up and running in no time!

  - 🎨 **Customization Options:** Tailor the color picker to your specific needs by adjusting the zoom level, image source, and more. It offers the flexibility you desire.


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
onColorPick: (color: string) => void
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
