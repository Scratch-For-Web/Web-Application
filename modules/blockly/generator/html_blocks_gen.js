(Blockly.JavaScript.html = function (t) {
    return `\n    \n    <!DOCTYPE html>\n    <html lang="en" >\n    ${Blockly.JavaScript.statementToCode(t, "content")}\n    </html>\n  \n    `;
}),
    (Blockly.JavaScript.head = function (t) {
        return `\n    <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    ${Blockly.JavaScript.statementToCode(t, "content")}\n    </head>\n    `;
    }),
    (Blockly.JavaScript.body = function (t) {
        return `\n    <body>\n    ${Blockly.JavaScript.statementToCode(t, "content")}\n    </body>\n    `;
    }),
    (Blockly.JavaScript.meta_url = function (t) {
        return `\n    <meta property="og:url" content="${t.getFieldValue("content")}" />\n    `;
    }),
    (Blockly.JavaScript.meta_title = function (t) {
        return `\n    <meta property="og:title" content="${t.getFieldValue("content")}" />\n    `;
    }),
    (Blockly.JavaScript.meta_desc = function (t) {
        return `\n    <meta property="og:description" content="${t.getFieldValue("content")}" />\n    `;
    }),
    (Blockly.JavaScript.meta_img = function (t) {
        return `\n    <meta property="og:image" content="${t.getFieldValue("content")}" />\n    `;
    }),
    (Blockly.JavaScript.linebreak = function (t) {
        return "\n    <br>\n    ";
    }),
    (Blockly.JavaScript.horizontalbreak = function (t) {
        return "\n    <hr>\n    ";
    }),
    (Blockly.JavaScript.paragraph = function (t) {
        var e = Blockly.JavaScript.statementToCode(t, "content").trim();
        return '<p class="' + t.getFieldValue("class") + '">' + e + "</p>\n";
    }),
    (Blockly.JavaScript.headline = function (t) {
        var e = t.getFieldValue("headingsize"),
            n = Blockly.JavaScript.statementToCode(t, "content");
        return `\n    <${e} class="${t.getFieldValue("class")}">\n    ${n}\n    </${e}>\n    `;
    }),
    (Blockly.JavaScript.span = function (t) {
        var e = Blockly.JavaScript.statementToCode(t, "content");
        return `<span class="${t.getFieldValue("class")}>"` + e.trim() + "</span>\n";
    }),
    (Blockly.JavaScript.emphasise = function (t) {
        return "<em>" + Blockly.JavaScript.statementToCode(t, "content").trim() + "</em>\n";
    }),
    (Blockly.JavaScript.inserted = function (t) {
        return "<ins>" + Blockly.JavaScript.statementToCode(t, "content").trim() + "</ins>\n";
    }),
    (Blockly.JavaScript.deleted = function (t) {
        return "<del>" + Blockly.JavaScript.statementToCode(t, "content").trim() + "</del>\n";
    }),
    (Blockly.JavaScript.strong = function (t) {
        return "<strong>" + Blockly.JavaScript.statementToCode(t, "content").trim() + "</strong>\n";
    }),
    (Blockly.JavaScript.super = function (t) {
        return "<sup>" + Blockly.JavaScript.statementToCode(t, "content").trim() + "</sup>\n";
    }),
    (Blockly.JavaScript.sub = function (t) {
        return "<sub>" + Blockly.JavaScript.statementToCode(t, "content").trim() + "</sub>\n";
    }),
    (Blockly.JavaScript.small = function (t) {
        return "<small>" + Blockly.JavaScript.statementToCode(t, "content").trim() + "</small>\n";
    }),
    (Blockly.JavaScript.quote = function (t) {
        return "<q>" + Blockly.JavaScript.statementToCode(t, "content").trim() + "</q>\n";
    }),
    (Blockly.JavaScript.code = function (t) {
        return "<code>" + Blockly.JavaScript.statementToCode(t, "content").trim() + "</code>\n";
    }),
    (Blockly.JavaScript.pre = function (t) {
        return "<pre>" + Blockly.JavaScript.statementToCode(t, "content").trim() + "</pre>\n";
    }),
    (Blockly.JavaScript.blockquote = function (t) {
        return "<blockquote>" + Blockly.JavaScript.statementToCode(t, "content").trim() + "</blockquote>\n";
    }),
    (Blockly.JavaScript.div = function (t) {
        var e = Blockly.JavaScript.statementToCode(t, "content");
        return `<div class="${t.getFieldValue("class")}">` + e.trim() + "</div>\n";
    }),
    (Blockly.JavaScript.unorderedlist = function (t) {
        var e = Blockly.JavaScript.statementToCode(t, "content");
        return `<ul class="${t.getFieldValue("class")}">` + e.trim() + "</ul>\n";
    }),
    (Blockly.JavaScript.orderedlist = function (t) {
        var e = Blockly.JavaScript.statementToCode(t, "content");
        return `<ol class="${t.getFieldValue("class")}">` + e.trim() + "</ol>\n";
    }),
    (Blockly.JavaScript.listitem = function (t) {
        return "<li>" + Blockly.JavaScript.statementToCode(t, "content").trim() + "</li>\n";
    }),
    (Blockly.JavaScript.anchor = function (t) {
        var e = t.getFieldValue("NAME"),
            n = Blockly.JavaScript.statementToCode(t, "content");
        return `<a href="${e}" class="${t.getFieldValue("class")}">` + n.trim() + "</a>\n";
    }),
    (Blockly.JavaScript.image = function (t) {
        return '<img src="' + t.getFieldValue("IMAGE") + '" alt="' + t.getFieldValue("ALT") + '" width="' + t.getFieldValue("WIDTH") + '" height="' + t.getFieldValue("HEIGHT") + '" class="' + t.getFieldValue("CLASS") + '">\n';
    }),
    (Blockly.JavaScript.style = function (t) {
        return `<style>\n    ${t.getFieldValue("css")}\n    </style>\n`;
    }),
    (Blockly.JavaScript.text_field = function (t) {
        return t.getFieldValue("text");
    }),
    (Blockly.JavaScript.form = function (t) {
        let e = t.getFieldValue("method");
        return `<form action="${t.getFieldValue("action")}" method="${e}">` + Blockly.JavaScript.statementToCode(t, "content").trim() + "</form>\n";
    }),
    (Blockly.JavaScript.button = function (t) {
        var e = Blockly.JavaScript.statementToCode(t, "content").trim();
        return `<button class="${t.getFieldValue("class")}">${e}</button>\n`;
    }),
    (Blockly.JavaScript.js = function (t) {
        return `<script>${Blockly.JavaScript.statementToCode(t, "content").trim()}<\/script>\n`;
    }),
    (Blockly.JavaScript.title = function (t) {
        return `<title>${Blockly.JavaScript.statementToCode(t, "content").trim()}</title>\n`;
    });
