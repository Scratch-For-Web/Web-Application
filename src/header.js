document.getElementById('header').innerHTML += `
<title>Scratch For Web</title>
<!-- Primary Meta Tags -->
<title>Scratch For Web v1.3</title>
<meta name="title" content="Scratch For Web v1.3">
<meta name="description" content="Scratch For Web - Create Dynamic Responsive Webpages fast using blocks!">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://scratch4web.ml">
<meta property="og:title" content="Scratch For Web v1.3">
<meta property="og:description" content="Scratch For Web - Create Dynamic Responsive Webpages fast using blocks!">
<meta property="og:image" content="https://i.imgur.com/k9PYU79.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://scratch4web.ml">
<meta property="twitter:title" content="Scratch For Web v1.3">
<meta property="twitter:description" content="Scratch For Web - Create Dynamic Responsive Webpages fast using blocks!">
<meta property="twitter:image" content="https://i.imgur.com/k9PYU79.png">
     <link rel="shortcut icon" href="https://scratch-for-web.vercel.app/img/scratch_for_web.679332ca.png" type="image/x-icon">
    


    <meta content="">
    <meta charset="utf-8">
    <meta name="description" >
    <style>
      .blocklyTreeLabel, .blocklyText, .blocklyHtmlInput {
    font-family:'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace !important;   
}
      .blocklyMenuItemContent  {
        color:black
      }
      html, body {
        padding: 0;
        margin: 0;
      }
      .blocklyTreeLabel {
  color: black;
}
 
/* Adds padding around the group of categories and separators. */
.blocklyToolboxContents {
  padding: .2em;
  color:white
}
.blocklyToolboxDiv{
  background-color: #212121;
} 
.blocklyWorkspace{
  background-color: #212121;
}

.bg-dark{
  background-color: #212121;
}
.blocklyTreeIcon{
 display:none
}
.blocklyTreeIconClosed{
  display:none
}

 
/* Adds space between the categories, rounds the corners and adds space around the label. */
.blocklyTreeRow {
  padding: 3px;
  margin-bottom: .5em;
  border-radius: 4px;
  color:white;
  font-family: 'Montserrat', sans-serif;
}
.blocklyTreeLabel{
  color:white;
  font-family: 'Montserrat', sans-serif;
}
.nav-link{
  color:white;
  font-family:'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace !important;   
}
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:ital,wght@0,400;1,200&family=Raleway:ital,wght@1,100&family=Roboto+Condensed:wght@700&family=Signika+Negative:wght@400;700&family=Varela+Round&display=swap');

      #container {
        width:100vw;
        height:100vh;
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: 50% 50%;
        -ms-grid-rows: 50px 30px 45% 45%;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50px 30px auto 45%;
        grid-template-areas:
          "blockly     menubar"
          "blockly     title"
          "blockly     website"
          "blockly     code";
        font-family:'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace !important;   
      }

      #blocklyArea  {grid-area: blockly; -ms-grid-row:1;-ms-grid-column:1; -ms-grid-row-span:4;}
      #menubar      {  grid-area: menubar; font-family: sans-serif; font-size: 18px; padding: 5px 10px; display: -ms-grid; display: grid; grid-template-columns: auto 36% auto; -ms-grid-row:1;-ms-grid-column:2; -ms-grid-columns: 32% 36% 32%; }
      #title        {grid-area: title; width: 100%; background-color: #444; color:white; text-align:center; font-size: 20px; font-family: sans-serif; padding-top: 5px; -ms-grid-row:2;-ms-grid-column:2;}
      #websiteFrame {grid-area: website; border: 5px solid #444;  -ms-grid-row:3;-ms-grid-column:2;
        font-family: 'Montserrat', sans-serif;}
      #sourcecode   {grid-area: code; border: 5px solid lightgray;overflow: scroll; margin:0px;  -ms-grid-row:4;-ms-grid-column:2;}

      #website {width: calc(100% - 5px);height: calc(100% - 5px);}


      /* Edge hack, God I hate this browser */
      _:-ms-lang(x),
      #container {
        width:98vw;
      }
      *{
        font-family: 'Montserrat', sans-serif;
        color:white
      }
      #saveButton{
        cursor: pointer;
      }
      #loadButton{
        cursor: pointer;
      }
      #exportButton{
        cursor: pointer;
      }
      @import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:ital,wght@0,400;1,200&family=Roboto+Condensed:wght@700&family=Signika+Negative:wght@400;700&family=Varela+Round&display=swap');
    </style>
    <script src="./blockly/blockly_compressed.js"></script>
    <script src="./blockly/msg/js/en.js"></script>

    <script src="en.js"></script>
    <script src="./src/html_generators.js"></script>
    <script src="./src/html_blocks.js"></script>

    <!-- For JS-Blocks only -->
    <script src="./blockly/blocks_compressed.js"></script>
    <script src="./blockly/javascript_compressed.js"></script>


`