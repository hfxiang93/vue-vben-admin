import{bj as e,a0 as n,G as t}from"./vendor.f02ce484.js";function r(r,s=150,i){let o=()=>{r()};const a=t(o,s);o=a;const d=()=>{i&&i.immediate&&o(),window.addEventListener("resize",o)},m=()=>{window.removeEventListener("resize",o)};return e((()=>{d()})),n((()=>{m()})),[d,m]}export{r as u};
