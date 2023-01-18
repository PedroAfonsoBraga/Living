import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    font-family: 'Inter', sans-serif;
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

  :root{

    /* Primary colors */
    --primary-color-1: #087F5B;
    --primary-color-2: #099268;

    /* Color-grey */
    --color-grey-0: #F8F9FA;
    --color-grey-1: #F1F3F5; 
    --color-grey-2: #E9ECEF;
    --color-grey-3: #DEE2E6;
    --color-grey-4: #808387;
    --color-grey-5: #495057;
    --color-grey-6: #212529;
    
    /* Feedback */
    --error: #E60000;
    --warning: #FFCD07;
    --success: #168821;
    --information: #155BCB;

    /* Font-size */
    --font-size-1: 2.5rem;
    --font-size-2: 1.75rem;
    --font-size-3: 1.25rem;
    --font-size-4: 1rem;

    /* Font-weight */
    --font-weight-1: 700;
    --font-weight-2: 600; 
    --font-weight-3: 500; 
    --font-weight-4: 400;

  }
`