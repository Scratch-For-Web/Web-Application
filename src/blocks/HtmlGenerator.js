import Blockly from "blockly";
var HtmlGenerator = new Blockly.Generator('HTML');

HtmlGenerator.ORDER_ATOMIC = 0;
HtmlGenerator.ORDER_NONE = 0;

HtmlGenerator.init = function(workspace) {};
HtmlGenerator.finish = function(code) {
    return code;
};

HtmlGenerator.scrub_ = function(block, code) {
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = HtmlGenerator.blockToCode(nextBlock);
    return code + nextCode;
};

export default HtmlGenerator;