# Migration

> With the new synced version release process, we no longer have package-based migration guides, but version-based. Therefore, we removed all old migration guides. Check [the old migration guide](https://github.com/robinweser/fela/blob/a08ea4fff080d8df1edf76909dea58ac49e9e536/MIGRATION.md) for older guidelines.

This guide should help migrating your Fela codebase to newer versions.

## 10.0.0

With Version 10, we did some major changes to all the React-like bindings.<br>
All older APIs should still work, but will now render a deprecation warning with instructions on how to migrate. We will do a code cleanup with Version 11.

> **Codemods**: We also have Codemods to automate the migration process. They should catch at least 80% of all usages.

#### Relevant Packages
* react-fela
* preact-fela
* inferno-fela

---

### FelaTheme

[Codemod](https://github.com/robinweser/fela/tree/master/packages/fela-codemods#felatheme) | [API Reference](http://fela.js.org/docs/api/bindings/FelaTheme.html)

The FelaTheme component now no longer uses the special `render` prop to pass a render function, but uses `children` instead.<br>

### FelaComponent

[Codemod](https://github.com/robinweser/fela/tree/master/packages/fela-codemods#felacomponent) | [API Reference](http://fela.js.org/docs/api/bindings/FelaComponent.html)

The same goes for FelaComponent. We now use `children` directly rather than `render`. In order to pass a primitive render type, one may now use the `as` prop.

Instead of accepting both `style` and `rule` it now only accepts `style` but allows style objects, rule functions and even an array of both.

### RendererProvider

[Codemod](https://github.com/robinweser/fela/tree/master/packages/fela-codemods#rendererprovider) | [API Reference](http://fela.js.org/docs/api/bindings/RendererProvider.html)

The old `Provider` component has been renamed to `RendererProvider` for more clarity and specificity.
