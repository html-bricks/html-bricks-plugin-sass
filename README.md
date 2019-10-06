# html-bricks-plugin-sass

Sass support for [html-bricks](https://github.com/html-bricks/html-bricks) using node-sass.

## Requirements

`html-bricks` >= 0.3.

## Installation

Install using npm

`npm install --save-dev html-bricks-plugin-sass`

Then include the plugin in your config

```json
{
  "plugins": [
    "plugin-sass"
  ]
}
```

## Usage

When you have sass files in your src folder (ending in `.scss` or `.sass`), these will be compiled to pure css and written to their original location but as `.css` files instead of sass files.

This means that you should include them using the `.css` extension.

### Example

`src/index.scss`

```scss
body {
  & * {
    box-sizing: border-box;
  }
}
```

`src/index.html`

```html
<head>
  <link rel="stylesheet" type="text/css" href="/index.css">
</head>
```
