import * as Blockly from "blockly/core";

Blockly.JavaScript['divclass'] = function(block) {
  var text_text = block.getFieldValue('text');
  // TODO: Assemble JavaScript into code variable.
  var code = `class="${text_text}"`;
  return code;
};
Blockly.JavaScript['meta_org'] = function(block) {
  var content = Blockly.JavaScript.statementToCode(block, 'meta');
  var code = `
  
  <meta charset="utf-8">
  <meta property="og:type" content="website">
   ${content}\n
  </meta>

  `;
  return code;
};
Blockly.JavaScript['js'] = function(block) {
  var text_text = block.getFieldValue('value');
  var code = `
  
  <script>
   ${text_text}
  </script>

  `;
  return code;
};

Blockly.JavaScript['importfont'] = function(block) {
  var text_text = block.getFieldValue('text');
  // TODO: Assemble JavaScript into code variable.
  var code = `<link rel="stylesheet" \n href="${text_text}">\n`;
  return code;
};
Blockly.JavaScript['addfont'] = function(block) {
  var text_text = block.getFieldValue('text');
  // TODO: Assemble JavaScript into code variable.
  var code = `font-family:${text_text};\n`;
  return code;
};

Blockly.JavaScript['baseframe'] = function(block) {
  var statements_head = Blockly.JavaScript.statementToCode(block, 'head');
  var statements_body = Blockly.JavaScript.statementToCode(block, 'body');

  var code = `<!Doctype html>
    <html>
    <head>
    ${statements_head}\n
    </head>
    <body>
    ${statements_body}\n
    </body>
    </html>`;

  return code;
};

Blockly.JavaScript['styler'] = function(block) {
  var statements_head = Blockly.JavaScript.statementToCode(block, 'head');
  // TODO: Assemble JavaScript into code variable.
  var code = `<style> 
   ${statements_head}
  </style>`;
  return code;
};

Blockly.JavaScript['classer'] = function(block) {
  var text_text = block.getFieldValue('text');
  var statements_head = Blockly.JavaScript.statementToCode(block, 'head');
  // TODO: Assemble JavaScript into code variable.
  var code = `.${text_text}{
   ${statements_head}
   }`;
  return code;
};

Blockly.JavaScript['html'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = `<!DOCTYPE HTML>
	<html>
	${statements_content}
 </html>`;
  return code;
};
Blockly.JavaScript['div'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = `<div>
	${statements_content}
 </div>`;
  return code;
};


Blockly.JavaScript['margin'] = function(block) {
  var value_class = Blockly.JavaScript.valueToCode(block, 'class', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Blockly.JavaScript into code variable.
  var code = '...;\n';
  return code;
};
Blockly.JavaScript['controls_if'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var statements_content2 = Blockly.JavaScript.statementToCode(block, 'content2');
  // TODO: Assemble Blockly.JavaScript into code variable.
  var code = `if(${statements_content}){
               ${statements_content}
               }\n`;
  return code;
};

Blockly.JavaScript['body'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = `<body>\n${statements_content} \n` + '</body>\n';
  return code;
};

Blockly.JavaScript['head'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = `<head>
	${statements_content}</head>
 `;
  return code;
};

Blockly.JavaScript['title'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');


  var code = '<title>' + statements_content.trim() + '</title>\n';
  return code;
};

Blockly.JavaScript['paragraph'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = `<p>
	${statements_content}</p>`;
  return code;
};

Blockly.JavaScript['plaintext'] = function(block) {
  var text_content = block.getFieldValue('content');
  var code = text_content + '\n';
  return code;
};
Blockly.JavaScript['meta_title'] = function(block) {
  var text_content = block.getFieldValue('content');
  var code = `<meta property="og:title" content="${text_content}" />` + '\n';
  return code;
};
Blockly.JavaScript['meta_desc'] = function(block) {
  var text_content = block.getFieldValue('content');
  var code = `<meta property="og:description" content="${text_content}" />` + '\n';
  return code;
};
Blockly.JavaScript['meta_img'] = function(block) {
  var text_content = block.getFieldValue('content');
  var code = `<meta property="og:image" content="${text_content}">` + '\n';
  return code;
};

Blockly.JavaScript['division'] = function(block) {
  var text_class = block.getFieldValue('class');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = `
  <div class="${text_class}">
   ${statements_name}
  </div>
  
  \n`;
  return code;
};

Blockly.JavaScript['style'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = 'style="' + statements_name.trim() + '"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color'] = function(block) {
  var colour_name = block.getFieldValue('NAME');
  var code = 'color: ' + colour_name + ';';
  return code;
};

Blockly.JavaScript['bgcolour'] = function(block) {
  var colour_name = block.getFieldValue('NAME');
  var code = 'background-color: ' + colour_name + ';';
  return code;
};

Blockly.JavaScript['genericstyle'] = function(block) {
  var text_property = block.getFieldValue('PROPERTY');
  var code = `
  ${text_property}
  `;
  return code;
};

Blockly.JavaScript['generictag'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<' + text_name + value_name + '>\n' + statements_content + '</' + text_name + '>\n';
  return code;
};

Blockly.JavaScript['more_attributes'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'NAME1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'NAME2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name3 = Blockly.JavaScript.valueToCode(block, 'NAME3', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_name1 + value_name2 + value_name3;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['genericattribute'] = function(block) {
  var text_attribute = block.getFieldValue('attribute');
  var text_value = block.getFieldValue('value');
  var code = ' ' + text_attribute + '="' + text_value + '"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['link'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<a href="' + text_name + '">' + statements_content.trim() + '</a>\n';
  return code;
};

Blockly.JavaScript['span'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<span' + value_name + '>' + statements_content.trim() + '</span>\n';
  return code;
};

Blockly.JavaScript['image'] = function(block) {
  var text_image = block.getFieldValue('IMAGE');
  var text_alt = block.getFieldValue('ALT');
  var code = '<img src="' + text_image + '" alt="' + text_alt + '">\n';
  return code;
};

Blockly.JavaScript['emphasise'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<em>' + statements_content.trim() + '</em>\n';
  return code;
};

Blockly.JavaScript['strong'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<strong>' + statements_content.trim() + '</strong>\n';
  return code;
};

Blockly.JavaScript['headline'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<' + dropdown_name + '>' + statements_content.trim() + '</' + dropdown_name + '>\n';
  return code;
};


Blockly.JavaScript['linebreak'] = function(block) {
  var code = '<br>\n';
  return code;
};

Blockly.JavaScript['horizontalbreak'] = function(block) {
  var code = '<hr>\n';
  return code;
};

Blockly.JavaScript['unorderedlist'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = '<ul>\n' + statements_name + '</ul>\n';
  return code;
};

Blockly.JavaScript['orderedlist'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = '<ol>\n' + statements_name + '</ol>\n';
  return code;
};

Blockly.JavaScript['listelement'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<li>' + statements_content + '</li>\n';
  return code;
};

Blockly.JavaScript['inserted'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<ins>' + statements_content.trim() + '</ins>\n';
  return code;
};

Blockly.JavaScript['deleted'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<del>' + statements_content.trim() + '</del>\n';
  return code;
};

Blockly.JavaScript['super'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<sup>' + statements_content.trim() + '</sup>\n';
  return code;
};

Blockly.JavaScript['sub'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<sub>' + statements_content.trim() + '</sub>\n';
  return code;
};

Blockly.JavaScript['code'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<code>\n' + statements_content + '</code>\n';
  return code;
};

Blockly.JavaScript['quote'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<q>' + statements_content.trim() + '</q>\n';
  return code;
};

Blockly.JavaScript['blockquote'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<blockquote>\n' + statements_content + '</blockquote>\n';
  return code;
};

Blockly.JavaScript['sample'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<samp>\n' + statements_content + '</samp>\n';
  return code;
};

Blockly.JavaScript['keyboard'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<kbd>\n' + statements_content + '</kbd>\n';
  return code;
};

Blockly.JavaScript['variable'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<var>' + statements_content.trim() + '</var>\n';
  return code;
};

Blockly.JavaScript['form'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<form>\n' + statements_content + '</form>\n';
  return code;
};

Blockly.JavaScript['table'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<table>\n' + statements_content + '</table>\n';
  return code;
};

Blockly.JavaScript['tablerow'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<tr>\n' + statements_content + '</tr>\n';
  return code;
};

Blockly.JavaScript['tablecell'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<td>' + statements_content.trim() + '</td>\n';
  return code;
};

Blockly.JavaScript['input_text'] = function(block) {
  var text_default = block.getFieldValue('default');
  var code = '<input value="' + text_default + '">\n';
  return code;
};

Blockly.JavaScript['button'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = '<button>' + statements_name.trim() + '</button>\n';
  return code;
};

Blockly.JavaScript['input'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var text_value = block.getFieldValue('value');
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '<input type="' + dropdown_type + '" value="' + text_value + '"' + value_text + ' />\n';
  return code;
};

Blockly.JavaScript['script'] = function(block) {
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<script>\n' + statements_content + '</script>\n';
  return code;
};

Blockly.JavaScript['onclick'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = ' onclick="' + statements_name.trim() + '"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['body_attributes'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = `<body` + value_name + '>\n' + statements_content + '</body>\n';
  return code;
};


//blockly

/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating Blockly.JavaScript for colour blocks.
 */
'use strict';




Blockly.JavaScript['colour_picker'] = function(block) {
  // Colour picker.
  const code = (block.getFieldValue('COLOUR'));
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['colour_random'] = function(block) {
  // Generate a random colour.
  const code = `
 function ran() {
   var num = Math.floor(Math.random() * Math.pow(2, 24));
   return '#' + ('00000' + num.toString(16)).substr(-6);
 }
 `

  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['math_number'] = function(block) {
  // Numeric value.
  const code = Number(block.getFieldValue('NUM'));
  const order = code >= 0 ? Blockly.JavaScript.ORDER_ATOMIC :
    Blockly.JavaScript.ORDER_UNARY_NEGATION;
  return [code, order];
};

Blockly.JavaScript['colour_rgb'] = function(block) {
  // Compose a colour from RGB components expressed as percentages.
  const red = Blockly.JavaScript.valueToCode(block, 'RED', Blockly.JavaScript.ORDER_NONE) || 0;
  const green =
    Blockly.JavaScript.valueToCode(block, 'GREEN', Blockly.JavaScript.ORDER_NONE) || 0;
  const blue =
    Blockly.JavaScript.valueToCode(block, 'BLUE', Blockly.JavaScript.ORDER_NONE) || 0;
  const functionName = ('colourRgb', `
 function color (r, g, b) {
   r = Math.max(Math.min(Number(r), 100), 0) * 2.55;
   g = Math.max(Math.min(Number(g), 100), 0) * 2.55;
   b = Math.max(Math.min(Number(b), 100), 0) * 2.55;
   r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
   g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
   b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
   return '#' + r + g + b;
 }
 `);
  const code = functionName + '(' + red + ', ' + green + ', ' + blue + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['colour_blend'] = function(block) {
  // Blend two colours together.
  const c1 = Blockly.JavaScript.valueToCode(block, 'COLOUR1', Blockly.JavaScript.ORDER_NONE) ||
    "'#000000'";
  const c2 = Blockly.JavaScript.valueToCode(block, 'COLOUR2', Blockly.JavaScript.ORDER_NONE) ||
    "'#000000'";
  const ratio =
    Blockly.JavaScript.valueToCode(block, 'RATIO', Blockly.JavaScript.ORDER_NONE) || 0.5;
  const functionName = ('colourBlend', `
 function (c1, c2, ratio) {
   ratio = Math.max(Math.min(Number(ratio), 1), 0);
   var r1 = parseInt(c1.substring(1, 3), 16);
   var g1 = parseInt(c1.substring(3, 5), 16);
   var b1 = parseInt(c1.substring(5, 7), 16);
   var r2 = parseInt(c2.substring(1, 3), 16);
   var g2 = parseInt(c2.substring(3, 5), 16);
   var b2 = parseInt(c2.substring(5, 7), 16);
   var r = Math.round(r1 * (1 - ratio) + r2 * ratio);
   var g = Math.round(g1 * (1 - ratio) + g2 * ratio);
   var b = Math.round(b1 * (1 - ratio) + b2 * ratio);
   r = ('0' + (r || 0).toString(16)).slice(-2);
   g = ('0' + (g || 0).toString(16)).slice(-2);
   b = ('0' + (b || 0).toString(16)).slice(-2);
   return '#' + r + g + b;
 }
 `);
  const code = functionName + '(' + c1 + ', ' + c2 + ', ' + ratio + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['controls_if'] = function(block) {
  // If/elseif/else condition.
  let n = 0;
  let code = '';
  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    // Automatic prefix insertion is switched off for this block.  Add manually.
    code += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_PREFIX, block);
  }
  do {
    const conditionCode =
      Blockly.JavaScript.valueToCode(block, 'IF' + n, Blockly.JavaScript.ORDER_NONE) ||
      'false';
    let branchCode = Blockly.JavaScript.statementToCode(block, 'DO' + n);
    if (Blockly.JavaScript.STATEMENT_SUFFIX) {
      branchCode = Blockly.JavaScript.prefixLines(
        Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, block),
        Blockly.JavaScript.INDENT) +
        branchCode;
    }
    code += (n > 0 ? ' else ' : '') + 'if (' + conditionCode + ') {\n' +
      branchCode + '}';
    n++;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE') || Blockly.JavaScript.STATEMENT_SUFFIX) {
    let branchCode = Blockly.JavaScript.statementToCode(block, 'ELSE');
    if (Blockly.JavaScript.STATEMENT_SUFFIX) {
      branchCode = Blockly.JavaScript.prefixLines(
        Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX, block),
        Blockly.JavaScript.INDENT) +
        branchCode;
    }
    code += ' else {\n' + branchCode + '}';
  }
  return code + '\n';
};

Blockly.JavaScript['controls_ifelse'] = Blockly.JavaScript['controls_if'];

Blockly.JavaScript['logic_compare'] = function(block) {
  // Comparison operator.
  const OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '<',
    'LTE': '<=',
    'GT': '>',
    'GTE': '>='
  };
  const operator = OPERATORS[block.getFieldValue('OP')];
  const order = (operator === '==' || operator === '!=') ?
    Blockly.JavaScript.ORDER_EQUALITY :
    Blockly.JavaScript.ORDER_RELATIONAL;
  const argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
  const argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
  const code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.JavaScript['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  const operator = (block.getFieldValue('OP') === 'AND') ? '&&' : '||';
  const order = (operator === '&&') ? Blockly.JavaScript.ORDER_ATOMIC :
    Blockly.JavaScript.ORDER_ATOMIC;
  let argument0 = Blockly.JavaScript.valueToCode(block, 'A', order);
  let argument1 = Blockly.JavaScript.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'false';
    argument1 = 'false';
  } else {
    // Single missing arguments have no effect on the return value.
    const defaultArgument = (operator === '&&') ? 'true' : 'false';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  const code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.JavaScript['logic_negate'] = function(block) {
  // Negation.
  const order = Blockly.JavaScript.ORDER_ATOMIC;
  const argument0 = Blockly.JavaScript.valueToCode(block, 'BOOL', order) || 'true';
  const code = '!' + argument0;
  return [code, order];
};

Blockly.JavaScript['logic_boolean'] = function(block) {
  // Boolean values true and false.
  const code = (block.getFieldValue('BOOL') === 'TRUE') ? 'true' : 'false';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['logic_null'] = function(block) {
  // Null data type.
  return ['null', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['logic_ternary'] = function(block) {
  // Ternary operator.
  const value_if =
    Blockly.JavaScript.valueToCode(block, 'IF', Blockly.JavaScript.ORDER_NONE) ||
    'false';
  const value_then =
    Blockly.JavaScript.valueToCode(block, 'THEN', Blockly.JavaScript.ORDER_NONE) ||
    'null';
  const value_else =
    Blockly.JavaScript.valueToCode(block, 'ELSE', Blockly.JavaScript.ORDER_NONE) ||
    'null';
  const code = value_if + ' ? ' + value_then + ' : ' + value_else;
  return [code];
};

Blockly.JavaScript['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  const until = block.getFieldValue('MODE') === 'UNTIL';
  let argument0 =
    Blockly.JavaScript.valueToCode(
      block, 'BOOL',
      until ? Blockly.JavaScript.ORDER_LOGICAL_NOT : Blockly.JavaScript.ORDER_NONE) ||
    'false';
  let branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block);
  if (until) {
    argument0 = '!' + argument0;
  }
  return 'while (' + argument0 + ') {\n' + branch + '}\n';
};

Blockly.JavaScript['controls_repeat_ext'] = function(block) {
  // Repeat n times.
  let repeats;
  if (block.getField('TIMES')) {
    // Internal number.
    repeats = String(Number(block.getFieldValue('TIMES')));
  } else {
    // External number.
    repeats =
      Blockly.JavaScript.valueToCode(block, 'TIMES', Blockly.JavaScript.ORDER_NONE) ||
      '0';
  }
  let branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block);
  let code = `
  for (let i = ${repeats}; i < s4w; ${repeats}) {
    ${branch};
  }
  
  
  `;
  return code;
};
Blockly.JavaScript['variables_get'] = function(block) {
  // Variable getter.
  const code = (block.getFieldValue('VAR'));
  return [code];
};
Blockly.JavaScript['variables_set'] = function(block) {
  // Variable getter.
  const argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || '0';
  const varName = (block.getFieldValue('VAR'));
  return varName + ' = ' + argument0 + ';\n';

};



Blockly.JavaScript['controls_for'] = function(block) {
  const variable0 =
    (block.getFieldValue('VAR'));
  const argument0 =
    Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_NONE) || '0';
  const argument1 =
    Blockly.JavaScript.valueToCode(block, 'TO', Blockly.JavaScript.ORDER_NONE) || '0';
  const increment =
    Blockly.JavaScript.valueToCode(block, 'BY', Blockly.JavaScript.ORDER_NONE) || '1';
  let branch = Blockly.JavaScript.statementToCode(block, 'DO');

  const code = `
for (let ${variable0} = ${argument0}; ${variable0} < ${argument1}; ${variable0}++) {
  ${branch};
}
`
  return code;
}