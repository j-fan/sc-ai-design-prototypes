/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  theme: {
    typography: {
      "display-large": {
        css: {
          fontSize: "var(--text-display-large)",
          fontWeight: "var(--font-weight-display)",
          lineHeight: "var(--leading-display-large)",
          letterSpacing: "-2px",
        },
      },
      "display-medium": {
        css: {
          fontSize: "var(--text-display-medium)",
          fontWeight: "var(--font-weight-display)",
          lineHeight: "var(--leading-display-medium)",
          letterSpacing: "-1.25px",
        },
      },
      "display-small": {
        css: {
          fontSize: "var(--text-display-small)",
          fontWeight: "var(--font-weight-display)",
          lineHeight: "var(--leading-display-small)",
          letterSpacing: "-1.25px",
        },
      },
      "headline-large": {
        css: {
          fontSize: "var(--text-headline-large)",
          fontWeight: "var(--font-weight-headline)",
          lineHeight: "var(--leading-headline-large)",
          letterSpacing: "-1px",
        },
      },
      "headline-medium": {
        css: {
          fontSize: "var(--text-headline-medium)",
          fontWeight: "var(--font-weight-headline)",
          lineHeight: "var(--leading-headline-medium)",
          letterSpacing: "-0.75px",
        },
      },
      "headline-small": {
        css: {
          fontSize: "var(--text-headline-small)",
          fontWeight: "var(--font-weight-headline)",
          lineHeight: "var(--leading-headline-small)",
          letterSpacing: "-0.5px",
        },
      },
      "title-large": {
        css: {
          fontSize: "var(--text-title-large)",
          fontWeight: "var(--font-weight-title)",
          lineHeight: "var(--leading-title-large)",
          letterSpacing: "-0.25px",
        },
      },
      "title-medium": {
        css: {
          fontSize: "var(--text-title-medium)",
          fontWeight: "var(--font-weight-title)",
          lineHeight: "var(--leading-title-medium)",
          letterSpacing: "-0.1px",
        },
      },
      "title-small": {
        css: {
          fontSize: "var(--text-title-small)",
          fontWeight: "var(--font-weight-title)",
          lineHeight: "var(--leading-title-small)",
        },
      },
      "label-large": {
        css: {
          fontSize: "var(--text-label-large)",
          fontWeight: "var(--font-weight-label)",
          lineHeight: "var(--leading-label-large)",
        },
      },
      "label-medium": {
        css: {
          fontSize: "var(--text-label-medium)",
          fontWeight: "var(--font-weight-label)",
          lineHeight: "var(--leading-label-medium)",
        },
      },
      "label-small": {
        css: {
          fontSize: "var(--text-label-small)",
          fontWeight: "var(--font-weight-label)",
          lineHeight: "var(--leading-label-small)",
        },
      },
      "body-medium": {
        css: {
          fontSize: "var(--text-body-medium)",
          fontWeight: "var(--font-weight-body)",
          lineHeight: "var(--leading-body-medium)",
        },
      },
      "body-medium-strong": {
        css: {
          fontSize: "var(--text-body-medium)",
          fontWeight: "var(--font-weight-bodyStrong)",
          lineHeight: "var(--leading-body-medium)",
        },
      },
      "body-small": {
        css: {
          fontSize: "var(--text-body-small)",
          fontWeight: "var(--font-weight-body)",
          lineHeight: "var(--leading-body-small)",
        },
      },
      "body-small-strong": {
        css: {
          fontSize: "var(--text-body-small)",
          fontWeight: "var(--font-weight-bodyStrong)",
          lineHeight: "var(--leading-body-small)",
        },
      },
      "body-extra-small": {
        css: {
          fontSize: "var(--text-body-xsmall)",
          fontWeight: "var(--font-weight-body)",
          lineHeight: "var(--leading-body-xsmall)",
        },
      },
      "body-extra-small-strong": {
        css: {
          fontSize: "var(--text-body-xsmall)",
          fontWeight: "var(--font-weight-bodyStrong)",
          lineHeight: "var(--leading-body-xsmall)",
        },
      },
      "caption-medium": {
        css: {
          fontSize: "var(--text-caption-medium)",
          fontWeight: "var(--font-weight-caption)",
          lineHeight: "var(--leading-caption-medium)",
        },
      },
      "caption-small": {
        css: {
          fontSize: "var(--text-caption-small)",
          fontWeight: "var(--font-weight-caption)",
          lineHeight: "var(--leading-caption-small)",
        },
      },
      "overline-medium": {
        css: {
          fontSize: "var(--text-overline-medium)",
          fontWeight: "var(--font-weight-overline)",
          lineHeight: "var(--leading-overline-medium)",
          textTransform: "uppercase",
          letterSpacing: "1px",
        },
      },
      "overline-small": {
        css: {
          fontSize: "var(--text-overline-small)",
          fontWeight: "var(--font-weight-overline)",
          lineHeight: "var(--leading-overline-small)",
          textTransform: "uppercase",
          letterSpacing: "1px",
        },
      },
    },
  },
};
export default tailwindConfig;
