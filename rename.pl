use strict;
use warnings;

my @replacements = (
  "fela-beautifier",
  "fela-bindings",
  "fela-codemods",
  "fela-dom",
  "fela-enzyme",
  "fela-identifier",
  "fela-layout-debugger",
  "fela-logger",
  "fela-monolithic",
  "fela-native",
  "fela-perf",
  "fela-plugin-bidi",
  "fela-plugin-custom-property",
  "fela-plugin-embedded",
  "fela-plugin-expand-shorthand",
  "fela-plugin-extend",
  "fela-plugin-fallback-value",
  "fela-plugin-friendly-pseudo-class",
  "fela-plugin-important",
  "fela-plugin-isolation",
  "fela-plugin-logger",
  "fela-plugin-named-keys",
  "fela-plugin-native-media-query",
  "fela-plugin-placeholder-prefixer",
  "fela-plugin-prefixer",
  "fela-plugin-responsive-value",
  "fela-plugin-rtl",
  "fela-plugin-simulate",
  "fela-plugin-typescript",
  "fela-plugin-unit",
  "fela-plugin-validator",
  "fela-preset-dev",
  "fela-preset-web",
  "fela-sort-classnames",
  "fela-sort-media-query-mobile-first",
  "fela-statistics",
  "fela-tools",
  "fela-utils",
  "fela",
  "inferno-fela",
  "jest-fela-bindings",
  "jest-inferno-fela",
  "jest-preact-fela",
  "jest-react-fela",
  "preact-fela",
  "react-fela",
  "reason-fela"
);
my $prefix = "\@zaninime/";
my @delimiters = ("\"", "'");

while (<>) {
  for my $replacement (@replacements) {
    for my $delimiter (@delimiters) {
      s/$delimiter$replacement$delimiter/$delimiter$prefix$replacement$delimiter/g;
    }
  }

  print;
}
