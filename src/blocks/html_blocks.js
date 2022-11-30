import Blockly from "blockly";
var htmlBlocks =
[ {
  "type": "baseframe",
  "message0": "Html Page %1 header %2 %3 Body %4 %5",
  "args0": [
  {
    "type": "input_dummy"
  },
   {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "head",
    "check": "header"
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "body",
    "check": "Html Page"
  }
  ],
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
 {
  "type": "divclass",
  "message0": "Class = %1",
  "args0": [
    {
      "type": "field_input",
      "name": "text",
      "text": "default"
    }
  ],
  "colour": 230,
  "tooltip": "Place inside of divider - this allows you to style it",
  "helpUrl": "https://www.w3schools.com/css",
  "output": "String",
},
{
  "type": "class",
  "message0": "Custom CSS%1 ",
  "args0": [
    {
      "type": "field_label_serializable",
      "name": "NAME",
      "text": "class name"
    },
  ],
 
  "colour": 230,
  "tooltip": "this allows you to style webpages",
  "helpUrl": "https://www.w3schools.com/html/html_classes.asp"
},
  {
  "type": "importfont",
  "message0": "Import font %1",
  "args0": [
    {
      "type": "field_multilinetext",
      "name": "text",
      "text": "default"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Allows you to import custom fonts",
  "helpUrl": "https://www.w3schools.com/css"
},
  {
  "type": "addfont",
  "message0": "set font family to %1",
  "args0": [
    {
      "type": "field_input",
      "name": "text",
      "text": "default"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Allows you to import custom fonts",
  "helpUrl": "https://www.w3schools.com/css"
},
 {
  "type": "classer",
  "message0": "Set Class To  %1 with content%2%3",
  "args0": [
    {
      "type": "field_input",
      "name": "text",
      "text": "default"
    },
    
     
    {
      "type":"input_dummy",
    },

    {
      "type": "input_statement",
      "name": "head",
      "check": "style, title"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Allows you to set items to  a specific class inside the body",
  "helpUrl": "https://www.w3schools.com/css"
},
{
  "type": "html",
  "message0": "Html Page %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
 
  }
  ],
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
 {
  "type": "styler",
  "message0": "Style Content %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "head",
      "check": ""
    },

  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Allows you to style classes inside of heading tag",
  "helpUrl": "https://www.w3schools.com/css"
},
 {
  "type": "div",
  "message0": "Seperate Content %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "content"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Place content to separate from the rest of the code",
  "helpUrl": "https://www.w3schools.com/tags/tag_div.asp"
},
{
  "type": "body",
  "message0": "Body %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "previousStatement": "document",
  "nextStatement": "document",
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "head",
  "message0": "Header %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "header"
  }
  ],
  "previousStatement": "document",
  "nextStatement": "document",
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "title",
  "message0": "Web Page Title %1%2%3",
  "args0": [
    {
      "type":"input_dummy"
    },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  },
       {
      "type":"input_dummy"
    },
  ],
  "previousStatement": "header",
  "nextStatement": "header",
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "paragraph",
  "message0": "paragraph %1 %2 ",
  "args0": [
    {
      "type":"input_dummy"
    },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  },
 
  ],
  "previousStatement": "html",
  "nextStatement": "html",
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "plaintext",
  "message0": "text %1",
  "args0": [
  {
    "type": "field_multilinetext",
    "name": "content",
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "plaintext",
  "message0": "text %1",
  "args0": [
  {
    "type": "field_multilinetext",
    "name": "content",
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "meta_title",
  "message0": "Set Meta Tag Tittle To%1",
  "args0": [
  {
    "type": "field_multilinetext",
    "name": "content",
    "text":"Set website title",
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#59B9F2",
  "tooltip": "",
  "helpUrl": "https://www.w3schools.com/tags/tag_meta.asp"
},
{
  "type": "meta_desc",
  "message0": "Set Meta Tag Description To%1",
  "args0": [
  {
    "type": "field_multilinetext",
    "name": "content",
    "text":"Set website description",
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#59B9F2",
  "tooltip": "",
  "helpUrl": "https://www.w3schools.com/tags/tag_meta.asp"
},
{
  "type": "meta_img",
  "message0": "Set Meta Image To%1",
  "args0": [
  {
    "type": "field_multilinetext",
    "name": "content",
    "text":"Path or Image",
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#59B9F2",
  "tooltip": "",
  "helpUrl": "https://www.w3schools.com/tags/tag_meta.asp"
},
{
  "type": "meta_url",
  "message0": "Set Meta Url To%1",
  "args0": [
  {
    "type": "field_multilinetext",
    "name": "content",
    "text":"Link Url",
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#59B9F2",
  "tooltip": "",
  "helpUrl": "https://www.w3schools.com/tags/tag_meta.asp"
},
{
  "type": "division",
  "message0": " Divider Class = %1 %2 %3 ",
  "args0": [
    {
      "type": "field_input",
      "name": "class",
      "text": "Default"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    },
   
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Allows you to style classes inside of heading tag",
  "helpUrl": "https://www.w3schools.com/css"
},
{
  "type": "style",
  "message0": "style =  %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "NAME",
    "check": "css"
  }
  ],
  "inputsInline": true,
  "output": "attribute",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "color",
  "message0": "Font colour :  %1",
  "args0": [
  {
    "type": "field_colour",
    "name": "NAME",
    "colour": "#ff0000"
  }
  ],
  "previousStatement":null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "bgcolour",
  "message0": "background colour :  %1",
  "args0": [
  {
    "type": "field_colour",
    "name": "NAME",
    "colour": "#ff0000"
  }
  ],
  "previousStatement": "css",
  "nextStatement": "css",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "genericstyle",
  "message0": "[Custom CSS]  %1 ",
  "args0": [
  {
    "type": "field_multilinetext",
    "name": "PROPERTY",
    "text": "property",
		"spellcheck": false
  },
 
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "generictag",
  "message0": "< %1 > %2 %3",
  "args0": [
  {
    "type": "field_input",
    "name": "NAME",
    "text": "tag"
  },
  {
    "type": "input_value",
    "name": "NAME",
    "check": "attribute"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "more_attributes",
  "message0": "%1 %2 %3",
  "args0": [
  {
    "type": "input_value",
    "name": "NAME1",
    "check": "attribute"
  },
  {
    "type": "input_value",
    "name": "NAME2",
    "check": "attribute"
  },
  {
    "type": "input_value",
    "name": "NAME3",
    "check": "attribute"
  }
  ],
  "output": "attribute",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "js",
  "message0": "Inject%1",
  "args0": [
  {
    "type": "field_multilinetext",
    "name": "value",
    "text": "value"
  }
  ],
  "previousStatement": null,
  "nextStatement": "body",
  "colour": "#ffc000",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "genericattribute",
  "message0": "%1  =  %2",
  "args0": [
  {
    "type": "field_input",
    "name": "attribute",
    "text": "attribute"
  },
  {
    "type": "field_input",
    "name": "value",
    "text": "value"
  }
  ],
  "inputsInline": true,
  "output": "attribute",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "meta_org",
  "message0": " Meta Tags%1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "meta",
    "check": ""
  }
  ],
  "previousStatement": "header",
  "nextStatement": null,
  "colour": "#59B9F2",
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "link",
  "message0": "link to %1 %2 %3",
  "args0": [
  {
    "type": "field_input",
    "name": "NAME",
    "text": "target"
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "previousStatement": "html",
  "nextStatement": "html",
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "span",
  "message0": "span %1 %2",
  "args0": [
  {
    "type": "input_value",
    "name": "NAME",
    "check": "attribute"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "previousStatement": "html",
  "nextStatement": "html",
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "image",
  "message0": "image %1 or %2",
  "args0": [
  {
    "type": "field_input",
    "name": "IMAGE",
    "text": "URL"
  },
  {
    "type": "field_input",
    "name": "ALT",
    "text": "alternative text"
  }
  ],
  "previousStatement": "html",
  "nextStatement": "html",
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "emphasise",
  "message0": "emphasise %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "strong",
  "message0": "important %1%2",
  "args0": [
    {
      "type":"input_dummy",
    },
 
  {
    "type": "input_statement",
    "name": "content"
  },
  
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "headline",
  "message0": "headline %1 %2 %3",
  "args0": [
  {
    "type": "field_dropdown",
    "name": "NAME",
    "options": [
    [
    "level 1",
    "h1"
    ],
    [
    "level 2",
    "h2"
    ],
    [
    "level 3",
    "h2"
    ],
    [
    "level 4",
    "h4"
    ],
    [
    "level 5",
    "h5"
    ],
    [
    "level 6",
    "h6"
    ]
    ]
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "linebreak",
  "message0": "line break",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "horizontalbreak",
  "message0": "topic break",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "unorderedlist",
  "message0": "unordered list %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "NAME"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "orderedlist",
  "message0": "ordered list %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "NAME"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "listelement",
  "message0": "list item %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "inserted",
  "message0": "inserted %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "deleted",
  "message0": "deleted %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "super",
  "message0": "superscript %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "sub",
  "message0": "subscript %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "code",
  "message0": "code %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "quote",
  "message0": "quote %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "blockquote",
  "message0": "blockquote %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "sample",
  "message0": "sample output %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "keyboard",
  "message0": "keyboard input %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "variable",
  "message0": "variable %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "form",
  "message0": "form %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "table",
  "message0": "table %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "table"
  }
  ],
  "previousStatement": "html",
  "nextStatement": "html",
  "colour": 180,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "tablerow",
  "message0": "row %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "tablerow"
  }
  ],
  "previousStatement": "table",
  "nextStatement": "table",
  "colour": 180,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "tablecell",
  "message0": "entry %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "previousStatement": "tablerow",
  "nextStatement": "tablerow",
  "colour": 180,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "input_text",
  "message0": "text input %1",
  "args0": [
  {
    "type": "field_input",
    "name": "default",
    "text": ""
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "button",
  "message0": "button %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "NAME"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "input",
  "message0": "%1 input %2 %3",
  "args0": [
  {
    "type": "field_dropdown",
    "name": "type",
    "options": [
    [
    "text",
    "text"
    ],
    [
    "email",
    "email"
    ],
    [
    "number",
    "number"
    ],
    [
    "password",
    "password"
    ],
    [
    "checkbox",
    "checkbox"
    ],
    [
    "radiobutton",
    "radio"
    ],
    [
    "button",
    "button"
    ],
    [
    "colour",
    "color"
    ],
    [
    "date",
    "date"
    ],
    [
    "local time",
    "datetime-local"
    ],
    [
    "file",
    "file"
    ],
    [
    "hidden",
    "hidden"
    ],
    [
    "image",
    "image"
    ],
    [
    "month",
    "month"
    ],
    [
    "range",
    "range"
    ],
    [
    "reset",
    "reset"
    ],
    [
    "search",
    "search"
    ],
    [
    "submit",
    "submit"
    ],
    [
    "telephone number",
    "tel"
    ],
    [
    "time",
    "time"
    ],
    [
    "url",
    "url"
    ],
    [
    "week",
    "week"
    ]
    ]
  },
  {
    "type": "field_input",
    "name": "value",
    "text": ""
  },
  {
    "type": "input_value",
    "name": "text"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "script",
  "message0": "script %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "code"
  }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
},
{
  "type": "onclick",
  "message0": "on click =  %1 %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "NAME",
    "check": "code"
  }
  ],
  "inputsInline": true,
  "output": "attribute",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "body_attributes",
  "message0": "content %1 %2",
  "args0": [
  {
    "type": "input_value",
    "name": "NAME",
    "check": "attribute"
  },
  {
    "type": "input_statement",
    "name": "content",
    "check": "html"
  }
  ],
  "previousStatement": "document",
  "nextStatement": "document",
  "colour": 0,
  "tooltip": "",
  "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
}];

/*if (Msg && Msg.blocks) {
  // Update jsons with translations
  for (var iBlock in htmlBlocks) {
    var json = htmlBlocks[iBlock];
    var trs = Msg.blocks[json.type];
    for (var iTr in trs) {
      if (typeof(trs[iTr]) == "string") {
        json[iTr] = trs[iTr];
      } else if (typeof(trs[iTr]) == "object") {
        // Mainly for args0 property
        // Follow two levels, then just replace
        for (var iTrObj in trs[iTr]) {
          if (typeof(trs[iTr][iTrObj]) == "object") {
            for (var index in trs[iTr][iTrObj]) {
              json[iTr][iTrObj][index] = trs[iTr][iTrObj][index];
            }
          }
          else {
            console.error("Don't know how to translate that: Msg.blocks." + iTr + "." + iTrObj)
          }
        }
      } else {
        console.error("Don't know how to translate that: Msg.blocks." + iTr)
      }
    }
  }
}*/

for (var iBlock in htmlBlocks) {
  function makeBlock(json) {
    Blockly.Blocks[json.type] = {
      init: function() {
        this.jsonInit(json);
      }
    }
  }
  makeBlock(htmlBlocks[iBlock]);
}