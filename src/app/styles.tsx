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

const fontXl = css`
   font-size: 20px;
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

/* CSS Reset */
*,
*::before,
*::after {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

button {
   border: none;
   cursor:pointer;
   background-color: transparent;
}

input,
button {
   border: none;
   font-family: inherit;
   background-color: transparent;
}

a {
   text-decoration: none;
}

/* Global */

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

.font-md-regular {
   ${fontMd}
   font-weight: 400;
}

.font-lg-regular {
   ${fontLg}
   font-weight: 400;

}

.font-xl-regular {
   ${fontXl}
   font-weight: 400;

}

.font-md-bold {
   ${fontMd}
   font-weight: 600;
}

.font-lg-bold {
   ${fontLg}
   font-weight: 600;

}

.font-xl-bold {
   ${fontXl}
   font-weight: 600;

}

/* Datepicker */

.react-datepicker {
   transform: translateX(-25%);
   border-color: var(--color-neutral-2);
}

.react-datepicker__triangle {
   display: none;
}

.react-datepicker__month-container {
   border-radius: 4px;
   background-color: var(--color-neutral-5);
}

.react-datepicker__header {
   background-color: var(--color-neutral-5);
   border-bottom-color: var(--color-neutral-2);
}

.react-datepicker__current-month {
   color: var(--color-neutral-1);
}

.react-datepicker__day-names {
   color: var(--color-neutral-1);
}

.react-datepicker__day-name {
   color: var(--color-neutral-1);
}

.react-datepicker__day {
   border-radius: 2px;
   color: var(--color-neutral-1);
   border: 1px solid transparent;
   
   &:hover {
      border-radius: 2px;
      background-color: transparent;
      border: 1px solid var(--color-primary-4);
   }

}

.react-datepicker__day--today {
   background: rgba(255,255,255,0.05);
}

.react-datepicker__day--selected {
   background-color: var(--color-primary-4);
}


.react-datepicker__day--outside-month {
   color: var(--color-neutral-2);
}

.react-datepicker__day--keyboard-selected {
   background-color: transparent;
}

/* Scrollbar */

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
