Blockly.JavaScript['html'] = function(block) {
    var content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = `
    
    <!DOCTYPE html>
    <html lang="en" >
    ${content}
    </html>
  
    `;
    return code;
};

Blockly.JavaScript['head'] = function(block) {
    var content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = `
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${content}
    </head>
    `;
    return code;
}
Blockly.JavaScript['body'] = function(block) {
    var content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = `
    <body>
    ${content}
    </body>
    `;
    return code;
}

Blockly.JavaScript['meta_url'] = function(block) {
    var content = block.getFieldValue('content');
    var code = `
    <meta property="og:url" content="${content}" />
    `;
    return code;
}

Blockly.JavaScript['meta_title'] = function(block) {
    var content = block.getFieldValue('content');
    var code = `
    <meta property="og:title" content="${content}" />
    `;
    return code;
}
Blockly.JavaScript['meta_desc'] = function(block) {
    var content = block.getFieldValue('content');
    var code = `
    <meta property="og:description" content="${content}" />
    `;
    return code;
}

Blockly.JavaScript['meta_img'] = function(block) {
    var content = block.getFieldValue('content');
    var code = `
    <meta property="og:image" content="${content}" />
    `;
    return code;
}

Blockly.JavaScript['linebreak'] = function(block) {
    var code = `
    <br>
    `;
    return code;
}
Blockly.JavaScript['horizontalbreak'] = function(block) {
    var code = `
    <hr>
    `;
    return code;
}

Blockly.JavaScript['paragraph'] = function(block) {
    var content = Blockly.JavaScript.statementToCode(block, 'content').trim();
    let _class = block.getFieldValue('class');
    var code = '<p class="' + _class + '">' + content + '</p>\n';
    return code;
  }
  
Blockly.JavaScript['headline'] = function(block) {
    var dropdown_name = block.getFieldValue('headingsize');
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    let _class =  block.getFieldValue('class');
    var code = `
    <${dropdown_name} class="${_class}">
    ${statements_content}
    </${dropdown_name}>
    `;
    return code;
}
Blockly.JavaScript['span'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    let _class =  block.getFieldValue('class');
    var code = `<span class="${_class}>"` + statements_content.trim() + '</span>\n';
    return code;
}
Blockly.JavaScript['emphasise'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = '<em>' + statements_content.trim() + '</em>\n';
    return code;
}
Blockly.JavaScript['inserted'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = '<ins>' + statements_content.trim() + '</ins>\n';
    return code;
}
Blockly.JavaScript['deleted'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = '<del>' + statements_content.trim() + '</del>\n';
    return code;
}
Blockly.JavaScript['strong'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = '<strong>' + statements_content.trim() + '</strong>\n';
    return code;
}
Blockly.JavaScript['super'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = '<sup>' + statements_content.trim() + '</sup>\n';
    return code;
}
Blockly.JavaScript['sub'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = '<sub>' + statements_content.trim() + '</sub>\n';
    return code;
}
Blockly.JavaScript['small'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = '<small>' + statements_content.trim() + '</small>\n';
    return code;
}
Blockly.JavaScript['quote'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = '<q>' + statements_content.trim() + '</q>\n';
    return code;
}
Blockly.JavaScript['code'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = '<code>' + statements_content.trim() + '</code>\n';
    return code;
}
Blockly.JavaScript['pre'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = '<pre>' + statements_content.trim() + '</pre>\n';
    return code;
}
Blockly.JavaScript['blockquote'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = '<blockquote>' + statements_content.trim() + '</blockquote>\n';
    return code;
}
Blockly.JavaScript['div'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    let _class = block.getFieldValue('class');
    var code = `<div class="${_class}">` + statements_content.trim() + '</div>\n';
    return code;
}
Blockly.JavaScript['unorderedlist'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    let _class = block.getFieldValue('class');
    var code = `<ul class="${_class}">` + statements_content.trim() + '</ul>\n';
    return code;
}
Blockly.JavaScript['orderedlist'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    let _class = block.getFieldValue('class');
    var code = `<ol class="${_class}">` + statements_content.trim() + '</ol>\n';
    return code;
}
Blockly.JavaScript['listitem'] = function(block) {
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = '<li>' + statements_content.trim() + '</li>\n';
    return code;
}

 

Blockly.JavaScript['anchor'] = function(block) {
    var text_name = block.getFieldValue('NAME');
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  let _class = block.getFieldValue('class');
  var code =   `<a href="${text_name}" class="${_class}">` + statements_content.trim() + '</a>\n';
  return code;
}
Blockly.JavaScript['image'] = function(block) {
    var text_name = block.getFieldValue('IMAGE');
    var alt = block.getFieldValue('ALT');
    let width = block.getFieldValue('WIDTH');
    let height = block.getFieldValue('HEIGHT');
    let class_name = block.getFieldValue('CLASS');
    var code = '<img src="' + text_name + '" alt="' + alt + '" width="' + width + '" height="' + height + '" class="' + class_name + '">\n';
    return code;
}
Blockly.JavaScript['style'] = function(block) {
    let css = block.getFieldValue('css');
    
    var code = `<style>
    ${css}
    </style>\n`;
    return code;
}
Blockly.JavaScript['text_field'] = function(block) {
    var text_name = block.getFieldValue('text');
    return text_name
}
Blockly.JavaScript['form'] = function(block) {
    let dropdowncode = block.getFieldValue('method');
    let action = block.getFieldValue('action');
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = `<form action="${action}" method="${dropdowncode}">` + statements_content.trim() + '</form>\n';
    return code;
}

Blockly.JavaScript['button'] = function(block) {
    var text_name = Blockly.JavaScript.statementToCode(block, 'content').trim();
    let _class = block.getFieldValue('class');
    var code = `<button class="${_class}">${text_name}</button>\n`;
    return code;
}
Blockly.JavaScript['js'] = function(block) {
    var text_name = Blockly.JavaScript.statementToCode(block, 'content').trim();
    var code = `<script>${text_name}</script>\n`;
    return code;
}
Blockly.JavaScript['title'] = function(block) {
    var text_name = Blockly.JavaScript.statementToCode(block, 'content').trim();
    var code = `<title>${text_name}</title>\n`;
    return code;
}