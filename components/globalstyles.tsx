import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: "audi-wide", "audi-zh-regular", "audi-wide-bold", "audi-zh-bold", Verdana, Geneva, sans-serif;
  }

  @font-face {
    font-family: "AudiRings";
    src: url("/fonts/AudiRings.woff2") format("woff2"), url("/fonts/AudiRings.woff") format("woff"), url("/fonts/AudiRings.ttf") format("truetype");
    font-style: normal;
  }
  @font-face {
    font-family: "audi-extended-bold";
    src: url("/fonts/AudiTypeGB-ExtendedBold.otf"), url("/fonts/AudiTypeGB-ExtendedBold.ttf"), url("/fonts/OT-AudiTypeGB-ExtendedBold.woff"), url("/fonts/OT-AudiTypeGB-ExtendedBold.woff2"), url("/fonts/TT-AudiTypeGB-ExtendedBold.woff"), url("/fonts/TT-AudiTypeGB-ExtendedBold.woff2");
  }
  @font-face {
    font-family: "audi-extended";
    src: url("/fonts/AudiTypeExtended-Normal.woff") format("woff"), url("/fonts/AudiTypeExtended-Normal.eot") format("eot"), url("/fonts/AudiTypeExtended-Normal.ttf") format("truetype");
    unicode-range: U+30-39;
  }
  @font-face {
    font-family: "audi-wide";
    src: url("/fonts/AudiType-WideNormal_4.03.woff") format("woff"), url("/fonts/AudiType-WideNormal_4.03.woff2") format("woff2"), url("/fonts/AudiType-WideNormal_4.03.ttf") format("truetype");
  }
  @font-face {
    font-family: "audi-wide-bold";
    src: url("/fonts/AudiTypeGB-WideBold.otf"), url("/fonts/AudiTypeGB-WideBold.ttf"), url("/fonts/OT-AudiTypeGB-WideBold.woff"), url("/fonts/OT-AudiTypeGB-WideBold.woff2"), url("/fonts/TT-AudiTypeGB-WideBold.woff"), url("/fonts/TT-AudiTypeGB-WideBold.woff2");
  }
  @font-face {
    font-family: "audi-zh-regular";
    src: url("/fonts/DFPKingGothicGB-Regular.woff2") format("woff2"), url("/fonts/DFPKingGothicGB-Regular.woff") format("woff"), url("/fonts/DFPKingGothicGB-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: "audi-zh-bold";
    src: url("/fonts/DFPKingGothicGB-Semibold.woff2") format("woff2"), url("/fonts/DFPKingGothicGB-Semibold.woff") format("woff"), url("/fonts/DFPKingGothicGB-Semibold.ttf") format("truetype");
  }
  @font-face {
    font-family: "audi-zh-medium";
    src: url("/fonts/DFPKingGothicGB-Medium.woff2") format("woff2"), url("/fonts/DFPKingGothicGB-Medium.woff") format("woff"), url("/fonts/DFPKingGothicGB-Medium.ttf") format("truetype");
  }
  @font-face {
    font-family: "audi-zh-light";
    src: url("/fonts/DFPKingGothicGB-Light.woff2") format("woff2"), url("/fonts/DFPKingGothicGB-Light.woff") format("woff"), url("/fonts/DFPKingGothicGB-Light.ttf") format("truetype");
  }
  @font-face {
    font-family: "audi-type-gb-extended-bold";
    src: url("/fonts/AudiTypeGB-ExtendedBold.otf"), url("/fonts/AudiTypeGB-ExtendedBold.ttf"), url("/fonts/OT-AudiTypeGB-ExtendedBold.woff"), url("/fonts/OT-AudiTypeGB-ExtendedBold.woff2"), url("/fonts/TT-AudiTypeGB-ExtendedBold.woff"), url("/fonts/TT-AudiTypeGB-ExtendedBold.woff2");
  }
  @font-face {
    font-family: "audi-type-gb-normal";
    src: url("/fonts/AudiTypeGB-Normal.otf"), url("/fonts/AudiTypeGB-Normal.ttf"), url("/fonts/OT-AudiTypeGB-Normal.woff"), url("/fonts/OT-AudiTypeGB-Normal.woff2"), url("/fonts/TT-AudiTypeGB-Normal.woff"), url("/fonts/TT-AudiTypeGB-Normal.woff2");
  }
  @font-face {
    font-family: "audi-type-gb-wide-bold";
    src: url("/fonts/AudiTypeGB-WideBold.otf"), url("/fonts/AudiTypeGB-WideBold.ttf"), url("/fonts/OT-AudiTypeGB-WideBold.woff"), url("/fonts/OT-AudiTypeGB-WideBold.woff2"), url("/fonts/TT-AudiTypeGB-WideBold.woff"), url("/fonts/TT-AudiTypeGB-WideBold.woff2");
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
