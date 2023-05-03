import { createGlobalStyle } from "styled-components";
import UbuntuTTFBold from "../assets/fonts/Ubuntu-Bold.ttf";
import UbuntuTTFMedium from "../assets/fonts/Ubuntu-Medium.ttf";
import UbuntuTTFRegular from "../assets/fonts/Ubuntu-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'UbuntuTTFBold';
        src: url(${UbuntuTTFBold}) format('truetype');
  }
  @font-face {
        font-family: 'UbuntuTTFMedium';
        src: url(${UbuntuTTFMedium}) format('truetype');
  }
  @font-face {
        font-family: 'UbuntuTTFRegular';
        src: url(${UbuntuTTFRegular}) format('truetype');
  }
  *{
    margin: 0;
    font-family: 'UbuntuTTFRegular';
    font-size: 16px;
  }
`;

export const MEDIA_SIZE = {
  mobile: "375px",
  desktop: "1440px",
};

export const colors = {
  MarineBlue: "hsl(213, 96%, 18%)",
  PurplishBlue: "hsl(243, 100%, 62%)",
  PastelBlue: "hsl(228, 100%, 84%)",
  LightBlue: "hsl(206, 94%, 87%)",
  StrawberryRed: "hsl(354, 84%, 57%)",
  CoolGray: "hsl(231, 11%, 63%)",
  LightGray: "hsl(229, 24%, 87%)",
  Magnolia: "hsl(217, 100%, 97%)",
  Alabaster: "hsl(231, 100%, 99%)",
  White: "hsl(0, 0%, 100%)",
};
