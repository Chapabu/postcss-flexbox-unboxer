# Flexbox unboxer [![Build Status][ci-img]][ci]

[postcss][] plugin for removing `display: box` from stylesheets.

Normally, this wouldn't be used as no browser supports it any more; however, if
you're using Bourbon (~v4) then it is used as part of their `display('flex');`
mixin. When passed through to Autoprefixer, `display: box;` causes warning
messages which get annoying after a while. This plugin will just flat out
remove any `display: box` (or Webkit/Moz prefixed versions) and keep
Autoprefixer quiet.

```css
.foo {
    display: box;
    display: flex;
    color: red;
}
```

```css
.foo {
  display: flex;
  color: red;
}
```

## Usage

```js
postcss([ require('postcss-flexbox-unboxer') ])
```

See [postcss][] docs for examples for your environment.

[postcss]: https://github.com/postcss/postcss
[ci-img]: https://travis-ci.org/chapabu/postcss-flexbox-unboxer.svg
[ci]: https://travis-ci.org/chapabu/postcss-flexbox-unboxer
