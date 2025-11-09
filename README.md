<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!--
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![project_license][license-shield]][license-url]
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h1>corbie.dev - developers best buddy</h1>
  <a href="https://github.com/mholzer78/dev.corbie.www">
    <img src="https://corbie.dev/assets/corbie.svg" alt="Logo" width="80" height="80">
  </a>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

You might or might not know about <a href="https://corbie.dev">https://corbie.dev</a> but one thing you can do there, is to convert colors from one space to another. And here we go with that. I've taken the logic out and put it into an NPM package for you to use.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Install

```
npm i @corbie.dev/color-convert
```

### How to use?

```javascript
import cbColorConvert from '@corbie.dev/color-convert';
```

The prefix cb is short for corbie to prevent clashes with other convert libaries that you might use. But the name is up to you and cbColorConvert is only an example usage.

With the import in place you can already use the libary like this:

```javascript
cbColorConvert.rgb.cmyk(255, 216, 1); // [0,15,100,0]
cbColorConvert.hwb.hsl([51, 0, 0]); // [51,0,0]
cbColorConvert.hex.rgb('#ffd801'); // [255,216,1]
```

> **_NOTE:_** cbColorConvert is still an example but if you change its name in the import you need to use that name here aswell

### What comes in and what comes out?

| color-space | input                             | TS-type  | example                                                     | output   |
| ----------- | --------------------------------- | -------- | ----------------------------------------------------------- | -------- |
| hex         | string                            | string   | `#ffd801` or `ffd801`                                       | string   |
| name        | string                            | string   | `palegreen` or `coral`                                      | string   |
| rgb         | 3 params or Array[3] or {r,g,b}   | TDefault | `255,216,1` or `[255,216,1]` or `{r:255, g:216, b:1}`       | Array[3] |
| hwb         | 3 params or Array[3] or {h,w,b}   | TDefault | `255,216,1` or `[255,216,1]` or `{h:51, w:0, b:0}`          | Array[3] |
| hsv         | 3 params or Array[3] or {h,s,v}   | TDefault | `255,216,1` or `[255,216,1]` or `{r:51, g:100, b:100}`      | Array[3] |
| hsl         | 3 params or Array[3] or {h,s,l}   | TDefault | `255,216,1` or `[255,216,1]` or `{r:51, g:100, b:50}`       | Array[3] |
| cmyk        | 4 params or Array[4] or {c,m,y,k} | TCmyk    | `0,15,100,0` or `[0,15,100,0]` or `{c:0, m:15, y:100, k:0}` | Array[4] |

> **_NOTE:_** For the HEX input the leading # (hash) is optional, the output won't include it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Michael Holzer - [@linkedin][linkedin-url] - michael@die-holzers.at

Project Link: [https://corbie.dev](https://corbie.dev)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

[totaltypescript.com](https://www.totaltypescript.com/how-to-create-an-npm-package) - Provided some great hints and tricks

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/mholzer78/codecorbie.svg?style=for-the-badge
[contributors-url]: https://github.com/mholzer78
[forks-shield]: https://img.shields.io/github/forks/mholzer78/codecorbie.svg?style=for-the-badge
[forks-url]: https://github.com/mholzer78/codecorbie/network/members
[stars-shield]: https://img.shields.io/github/stars/mholzer78/codecorbie.svg?style=for-the-badge
[stars-url]: https://github.com/mholzer78/codecorbie/stargazers
[issues-shield]: https://img.shields.io/github/issues/mholzer78/codecorbie.svg?style=for-the-badge
[issues-url]: https://github.com/mholzer78/codecorbie/issues
[license-shield]: https://img.shields.io/github/license/mholzer78/codecorbie.svg?style=for-the-badge
[license-url]: https://github.com/mholzer78/codecorbie/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mholzer78/
[product-screenshot]: public/assets/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
