import { css, createGlobalStyle } from "styled-components";

const fontMd = css`
   font-size: 15px;
   line-height: 24px;
   letter-spacing: 0.75px;
`;

const fontLg = css`
   font-size: 18px;
   line-height: 32px;
   letter-spacing: 0.75px;
`;

const GlobalStyle = createGlobalStyle`
:root {
   --color-neutral-1: #ffffff;
   --color-neutral-2: #94979a;
   --color-neutral-3: #393d41;
   --color-neutral-4: #2c2f33;
   --color-neutral-5: #222528;

   --color-primary-1: #f4ccc8;
   --color-primary-2: #eba59e;
   --color-primary-3: #e27d73;
   --color-primary-4: #da584b;

   --color-secondary-1: #c8e1bc;
   --color-secondary-2: #aad199;
   --color-secondary-3: #8dc275;
   --color-secondary-4: #70b252;

   --color-tertiary-1: #f9eed7;
   --color-tertiary-2: #f2daab;
   --color-tertiary-3: #ebc77f;
   --color-tertiary-4: #e5b454;
}

*,
*::before,
*::after {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

html {
   font-family: sans-serif;
}

html,
body,
#root {
   width: 100%;
   height: 100%;
   color: white;
   background-color: var(--color-neutral-5);
}

.font-lg-bold {
   ${fontLg}
   font-weight: 600;

}

.font-md-bold {
   ${fontMd}
   font-weight: 600;
}

.font-lg-regular {
   ${fontLg}
   font-weight: 400;

}

.font-md-regular {
   ${fontMd}
   font-weight: 400;
}

*::-webkit-scrollbar {
   width: 8px;
   height: 8px;
   background-color: rgba(0, 0, 0, 0.1);
   border-radius: 4px;
}

*::-webkit-scrollbar-thumb {
   border-radius: 4px;
   -webkit-border-radius: 4px;
   background-color:  var(--color-neutral-3);
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
   -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
}

*::-webkit-scrollbar-corner {
   background: #000;
}
`;

export { GlobalStyle };
