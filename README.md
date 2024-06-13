
# Style-Forge.Themes

![npm](https://img.shields.io/npm/v/style-forge.themes)
![npm](https://img.shields.io/npm/dm/style-forge.themes)
![license](https://img.shields.io/npm/l/style-forge.themes)
![build](https://github.com/Sarmaged/style-forge.themes/actions/workflows/publish.yml/badge.svg)

## Description

Style Forge Base is a base CSS package for Style Forge, providing foundational styles and variables for web development. It includes default font settings, sizes for various heading levels, and color definitions using HSL.

## Installation

You can install the package via npm or yarn:

```bash
npm install style-forge.themes
```

```bash
yarn add style-forge.themes
```

## Usage

After installation, you can import the CSS file into your project:

```css
@import "style-forge.base";
```

Or, if you are using Webpack or another module bundler:

```js
import 'style-forge.base';
```

⚠️ Skip this if you don't need to specify a color scheme. The default will always be a light theme.

There are three standard modes `dark / light / auto (system)`

`auto` - this is the system color theme selection

```html
  <html ... data-theme="auto">
  or
  <html ... data-theme="dark">
  or
  <html ... data-theme="light">
```

## Contributing

We welcome contributions from the community! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/branch-name`.
3. Make your changes and commit them: `git commit -am 'Add some feature'`.
4. Push your changes to the forked repository: `git push origin feature/branch-name`.
5. Create a pull request in the original repository.

For more detailed information, please refer to [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Links

- [style-forge](https://github.com/Sarmaged/style-forge)
- [style-forge.base](https://github.com/Sarmaged/style-forge.base)
- [style-forge.colors](https://github.com/Sarmaged/style-forge.colors)
- [style-forge.form](https://github.com/Sarmaged/style-forge.form)
- [style-forge.helpers](https://github.com/Sarmaged/style-forge.helpers)
- [style-forge.patterns](https://github.com/Sarmaged/style-forge.patterns)
- [style-forge.themes](https://github.com/Sarmaged/style-forge.themes)

## Authors

- **Dmitrii Sagalov** - *Expert in interface development* - [Sarmaged](https://github.com/Sarmaged)

## Contact

If you have any questions or suggestions, please open an issue in [Issues](https://github.com/Sarmaged/style-forge.themes/issues).
