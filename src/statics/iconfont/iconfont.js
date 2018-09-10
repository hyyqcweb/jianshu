import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1536562468923'); /* IE9*/
    src: url('./iconfont.eot?t=1536562468923#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAWgAAsAAAAACCAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8lkiCY21hcAAAAYAAAABeAAABnLQaHLdnbHlmAAAB4AAAAb8AAAHguI6k7mhlYWQAAAOgAAAALgAAADYSl6/6aGhlYQAAA9AAAAAcAAAAJAfeA4VobXR4AAAD7AAAAA4AAAAQEAAAAGxvY2EAAAP8AAAACgAAAAoBWACmbWF4cAAABAgAAAAeAAAAIAESAE5uYW1lAAAEKAAAAUUAAAJtPlT+fXBvc3QAAAVwAAAAMAAAAEGzlguWeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeiTybwNzwv4EhhrmBoQcozAiSAwDp5QyTeJztkLENgDAMBM9JQBGiZAxKlIGoMk6mzBrBsSkYgrfOsl+WiwcWICqnkkAqwtStrpgf2cxPFN2zVoB+9NLbGN/JJHaRdQr+QVZ+7davd4szNceyLI75zUEemNYUkgAAeJw1j81u01AQhWd87/VFTrBT7DhKGkc4dq5xf5zgJHZUhbiuqFSpIMGmaoVapCKQCJUAkSUbFtmwJU/AE2TFupXSF+iqD8ALdMMKuTggNqM53xzpzAEJ4HZCNqSfsA0pAEYJRjGXuYpc1rCSL8QTXhzFfw9Lrkkyj+IRLrUY8dhUJQ2lz4ZurxQKjN4xlULx1fOSXvI3B1XL8ouq56bNhlhzjwLzmd1EmZllm0qUamL45Oj4eB3v6tXCGboyUxhdv6eYQi2pDU3ViqsVpFTZMao76WTY3xgEX566X6OtldXKbntPIawevhi/Pd1/SKyTs/ebQwBY9rkg5ySFMtgADEfYD9DL6zSwEkYxmmHUy2GcyxwGSH5kN8Ini9lsQelilnwMUFNqxu/vdD6dzglZTo5a8CH5Z/h2SdZEdqMYNfw1ndP/rjwaaJ59m2cDcNDAhTaA7Xg2d7CrE+E5Mics6oYWOn1Hdpqi30uw5zR5/kjZMLth9Ail8zd72fXua9ROH79jssT4GK87o08DtNMgHp9sb7VfPrDu11qdqysCmY9JSTh6dsHqk8t21PEP1OJ+65DVq+V62GoA/AEVP1uWAHicY2BkYGAA4hxjreR4fpuvDNwsDCBwfY+ZCoL+X8LCwOwI5HIwMIFEAfLMCHwAAHicY2BkYGBu+N/AEMPCAAJAkpEBFbAAAEcKAm14nGNhYGBgQcIAALAAEQAAAAAAAABoAKYA8AAAeJxjYGRgYGBhcAJiEGACYi4gZGD4D+YzAAAPhAFhAAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICFkYmRmZGFkZWBNTcxPymTKy0xLz0lMSszL53JMZGBAQBZZQbn') format('woff'),
    url('./iconfont.ttf?t=1536562468923') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1536562468923#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
