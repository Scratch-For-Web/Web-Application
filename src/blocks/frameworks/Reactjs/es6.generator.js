import Blockly from "blockly";
Blockly.JavaScript['react_js'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = `
<!DOCTYPE html>
<html>
  <head>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
  </head>
  <body>

    <s4w id="root"></s4w>
    <script src="react.js">
  </body>
</html>
    
    
    `;
    return code;
  };