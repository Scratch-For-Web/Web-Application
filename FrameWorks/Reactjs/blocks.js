
"use strict";
 

Blockly.Blocks['react_js'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Render Content");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendDummyInput();
    this.setPreviousStatement( null);
    this.setNextStatement(null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};