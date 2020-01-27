type plugin;
type style;
type renderer = {. "renderStatic": (style, string) => unit};
type enhancer = renderer => renderer;

external style: Js.t('a) => style = "%identity";
external fromInlineStyle: ReactDOMRe.style => style = "%identity";

let raw = (className: string) => style({"_className": className});

module RendererConfig = {
  type t = {
    .
    "plugins": option(array(plugin)),
    "enhancers": option(array(enhancer)),
    "keyframePrefixes": option(array(string)),
    "mediaQueryOrder": option(array(string)),
    "sortMediaQuery": option((string, string) => int),
    "filterClassName": option(string => bool),
    "selectorPrefix": option(string),
    "devMode": option(bool),
  };

  let make =
      (
        ~selectorPrefix=?,
        ~keyframePrefixes=?,
        ~mediaQueryOrder=?,
        ~sortMediaQuery=?,
        ~filterClassName=?,
        ~plugins=?,
        ~enhancers=?,
        ~devMode=?,
        (),
      ) => {
    "plugins": plugins,
    "enhancers": enhancers,
    "selectorPrefix": selectorPrefix,
    "devMode": devMode,
    "keyframePrefixes": keyframePrefixes,
    "mediaQueryOrder": mediaQueryOrder,
    "sortMediaQuery": sortMediaQuery,
    "filterClassName": filterClassName,
  };
};

module Renderer = {
  [@bs.module "@zaninime/fela"]
  external make: RendererConfig.t => Js.t('a) = "createRenderer";
};

[@bs.module "@zaninime/fela"] [@bs.variadic]
external combineRules_: array(style) => style = "combineRules";
let combineRules = (rules: list(style)) =>
  combineRules_(Array.of_list(rules));

module Dom = {
  type sheet = {
    type_: string,
    css: string,
    media: string,
    support: bool,
    rehydration: int,
  };

  [@bs.module "@zaninime/fela-dom"]
  external renderToMarkup: renderer => string = "renderToMarkup";

  [@bs.module "@zaninime/fela-dom"] external render: renderer => unit = "render";

  [@bs.module "@zaninime/fela-dom"] external rehydrate: renderer => unit = "rehydrate";

  [@bs.module "@zaninime/fela-dom"]
  external renderToSheetList: renderer => array(sheet) = "renderToSheetList";
};

module Plugins = {
  // TODO: more type-safe input (rtl and ltr)
  [@bs.module "@zaninime/fela-plugin-bidi"] external bidi: string => plugin = "default";

  [@bs.module "@zaninime/fela-plugin-custom-property"]
  external customProperty: Js.t('a) => plugin = "default";

  [@bs.module "@zaninime/fela-plugin-embedded"]
  external embedded: unit => plugin = "default";

  [@bs.module "@zaninime/fela-plugin-expand-shorthand"]
  external expandShorthand: bool => plugin = "default";

  [@bs.module "@zaninime/fela-plugin-extend"]
  external extend: unit => plugin = "default";

  [@bs.module "@zaninime/fela-plugin-fallback-value"]
  external fallbackValue: unit => plugin = "default";

  [@bs.module "@zaninime/fela-plugin-named-keys"]
  external namedKeys: Js.t('a) => plugin = "default";

  [@bs.module "@zaninime/fela-plugin-named-keys"]
  external namedKeysWithProps: (Js.t('a) => Js.t('a)) => plugin = "default";

  [@bs.module "@zaninime/fela-plugin-responsive-value"]
  external responsiveValue:
    ((array(string), Js.t('a)) => array(string), Js.t('a)) => plugin =
    "default";

  [@bs.module "@zaninime/fela-plugin-placeholder-prefixer"]
  external placeholderPrefixer: unit => plugin = "default";

  [@bs.module "@zaninime/fela-plugin-prefixer"]
  external prefixer: unit => plugin = "default";

  // TODO: more type-safe input (rtl and ltr)
  [@bs.module "@zaninime/fela-plugin-rtl"]
  external rtl: option(string) => plugin = "default";
  // TODO: how to improve that?
  [@bs.module "@zaninime/fela-plugin-unit"]
  external unit:
    (
      ~unit: string=?,
      ~unitPerProperty: Js.t('a)=?,
      ~isUnitlessProperty: string => bool=?
    ) =>
    plugin =
    "default";

  [@bs.module "@zaninime/fela-plugin-validator"]
  external validator:
    (~logInvalid: bool=?, ~deleteInvalid: bool=?, ~useCSSLint: bool=?) =>
    plugin =
    "default";
};

module Enhancers = {
  [@bs.module "@zaninime/fela-beautifier"]
  external beautifier: unit => enhancer = "default";

  // TODO: improve input
  [@bs.module "@zaninime/fela-layout-debugger"]
  external layoutDebugger: Js.t('a) => enhancer = "default";

  // TODO: improve input
  [@bs.module "@zaninime/fela-logger"]
  external logger: Js.t('a) => enhancer = "default";

  [@bs.module "@zaninime/fela-monolithic"]
  external monolithic: unit => enhancer = "default";

  [@bs.module "@zaninime/fela-sort-media-query-mobile-first"]
  external sortMediaQueryMobileFirst: unit => enhancer = "default";

  [@bs.module "@zaninime/fela-perf"] external perf: unit => enhancer = "default";

  [@bs.module "@zaninime/fela-sort-classnames"]
  external sortClassnames: unit => enhancer = "default";

  [@bs.module "@zaninime/fela-statistics"]
  external statistics: unit => enhancer = "default";
};

module Presets = {
  [@bs.module "@zaninime/fela-preset-web"] external web: array(plugin) = "default";
  [@bs.module "@zaninime/fela-preset-dev"] external dev: array(plugin) = "default";
};