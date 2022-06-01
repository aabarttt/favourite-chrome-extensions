const generateSTYLES = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
      background: #363738;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      max-height: 700px;
      overflow: hidden;
    }
    .c {
      text-align: center;
      display: block;
      position: relative;
      width: 80%;
      margin: 100px auto;
    }
    ._404 {
      margin-top: auto;
      font-size: 220px;
      position: relative;
      display: inline-block;
      z-index: 2;
      height: 250px;
      letter-spacing: 15px;
    }
    ._1 {
      text-align: center;
      display: block;
      position: relative;
      font-size: 4em;
      line-height: 80%;
      margin-top: 20px;
      font-size: 20px;
    }
    ._2 {
      text-align: center;
      display: block;
      position: relative;
      font-size: 30px;
      margin-bottom: 30px;
    }
    .text {
      font-size: 70px;
      text-align: center;
      position: relative;
      display: inline-block;
      margin: 19px 0px 0px 0px;
      /* top: 256.301px; */
      z-index: 3;
      width: 100%;
      line-height: 1.2em;
      display: inline-block;
    }
    
   
    .right {
      float: right;
      width: 60%;
    }
    
    @-webkit-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-moz-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-o-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
     </style>`;
  };
  
  const generateHTML = (pageName) => {
    return `
     
    <div class='c'>
        <div class='_404'>404</div>
        <div class='_2'>NOT FOUND</div>
        <div class='_1'>The resouce requested could not be found on this server!</div>
    </div>
     `;
  };
  

document.head.innerHTML = generateSTYLES();
document.body.innerHTML = generateHTML("GET BACK TO WORK");
