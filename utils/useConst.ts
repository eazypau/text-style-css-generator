export const useConst = () => {
  // type select
  const fontTypes = [
    {
      value: "paragraph",
      label: "paragraph",
      class: "para",
    },
    {
      value: "heading-1",
      label: "Heading 1",
      class: "h1",
    },
    {
      value: "heading-2",
      label: "Heading 2",
      class: "h2",
    },
    {
      value: "heading-3",
      label: "Heading 3",
      class: "h3",
    },
    {
      value: "heading-4",
      label: "Heading 4",
      class: "h4",
    },
    {
      value: "heading-5",
      label: "Heading 5",
      class: "h5",
    },
  ];

  const fontSizes = [
    12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48,
    50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86,
    88, 90, 92, 94, 96,
  ];

  // font family
  const fontFamilies = [
    "Roboto",
    "Roboto Slab",
    "Roboto Mono",
    "Open Sans",
    "Lato",
    "Montserrat",
    "Raleway",
    "Poppins",
    "Merriweather",
    "Oswald",
    "PT Sans",
    "Playfair Display",
    "Playfair",
    "Source Code Pro",
    "Noto Sans",
    "Inter",
    "Nunito",
    "Alegreya",
    "Rubik",
    "Ubuntu",
    "Fira Sans",
    "Aleo",
    "Archivo Narrow",
    "Barlow",
    "Courier Prime",
    "Lora",
    "Slabo 13px",
    "Slabo 27px",
    "Noto Serif",
    "PT Serif",
    "Libre Baskerville",
    "Vollkorn",
    "Fira Sans Condensed",
    "Proza Libre",
    "Work Sans",
    "Bebas Neue",
    "Lobster",
    "Comfortaa",
    "Abril Fatface",
    "Alfa Slab One",
    "Cormorant",
    "Italiana",
    "Antic Didone",
    "Cinzel",
    "Dancing Script",
    "Pacifico",
    "Shadows Into Light",
    "Indie Flower",
    "Caveat",
    "Homemade Apple",
    "League Script",
    "Cedarville Cursive",
    "Berkshire Swash",
    "La Belle Aurore",
    "Inconsolata",
    "IBM Plex Mono",
    "Noto Sans Mono",
    "Anonymous Pro",
    "Azeret Mono",
    "JetBrains Mono",
  ];

  // alignment
  const textAlignments = ["left", "right", "justify", "center"];

  // bold type
  const fontWeights = [400, 500, 600, 700, 800, 900];

  // color type
  const colorTypeOption = ["single", "multiple"];

  // text transform
  const textTranformOption = ["none", "uppercase", "lowercase", "capitalize"];

  // default value
  const defaultValue = {
    textAlign: "left",
    fontWeight: 500,
    fontFamily: "Roboto",
    fontSize: 12,
    fontType: "paragraph",
    italic: false,
    underline: false,
    underlineOffset: 0,
    // underlineThickness: 0,
    wordBreak: false,
    textColorBehavior: "single",
    textColors: ["#000000"],
    textTransform: "none",
    showTextShadow: false,
    textShadowColor: "#ff0000",
    hShadow: 0,
    vShadow: 0,
    blurShadow: 0,
    wordSpacing: 0,
    letterSpacing: 0,
    lineHeight: 1.25,
  };

  const defaultStyle = `
    text-align: "left";
    font-weight: 400;
    font-family: "Roboto";
    font-size: 12px;
    font-style: normal;
    text-decoration: none;
    text-underline-offset: 0;
    text-transform: none;
    word-break: normal;
    color: #000000;
    text-shadow: none;
    word-spacing: 0em;
    letter-spacing: 0em;
    line-height: 1.25em;
  `;

  return {
    fontFamilies,
    fontSizes,
    fontTypes,
    textAlignments,
    fontWeights,
    colorTypeOption,
    textTranformOption,
    defaultValue,
    defaultStyle,
  };
};
