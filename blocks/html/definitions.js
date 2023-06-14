var htmlBlocks =
    [
        // HTML query->html
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
                    "check": "html"

                }
            ],
            "colour": 0,
            "tooltip": "",
            "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
        },
        {
            "type": "div",
            "message0": "Divider class=%1 %2 %3",
            "args0": [
                {

                    "type": "field_input",
                    "name": "class",
                    "text": "class"
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
            "colour": 230,
            "tooltip": "Seperate content from the rest of the code",
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
            "previousStatement": "html",
            "nextStatement": null,
            "colour": 0,
            "tooltip": "Body of the html",
            "helpUrl": "http://www.w3schools.com/tags/tag_body.asp"
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
                    "name": "content"
                }
            ],
            "previousStatement": "html",
            "nextStatement": null,
            "colour": 0,
            "tooltip": "Header of the webpage",
            "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
        },
        {
            "type": "title",
            "message0": "Web Page Title %1%2%3",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "html"
                },
                {
                    "type": "input_dummy"
                },
            ],
            "previousStatement": "header",
            "nextStatement": "header",
            "colour": 0,
            "tooltip": "Set the title of your webpage",
            "helpUrl": "http://www.w3schools.com/tags/tag_head.asp"
        },
        {
            "type": "paragraph",
            "message0": "paragraph  class=%1 %2  %3",
            "args0": [
                {
                    "type": "field_input",
                    "name": "class",
                    "text": "class"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content"
                },

            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 90,
            "tooltip": "Add a paragraph to your webpage",
            "helpUrl": "https://www.w3schools.com/tags/tag_p.asp"
        },
        {
            "type": "span",
            "message0": "span class= %1 %2 %3",
            "args0": [
                {
                    "type": "field_input",
                    "name": "class",
                    "text": "class"

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
            "colour": 330,
            "tooltip": "Add text to your webpage",
            "helpUrl": "http://www.w3schools.com/tags/tag_span.asp"
        },
        {
            "type": "text_field",
            "message0": "text %1  ",
            "args0": [
                {
                    "type": "field_input",
                    "name": "text",
                    "text": "text"
                },
            ],
            "colour": 330,
            "previousStatement": null,
            "nextStatement": null,
            "tooltip": "Add text to your webpage",
            "helpUrl": "http://www.w3schools.com/tags/tag_span.asp"
        },



        {
            "type": "meta_title",
            "message0": "Title %1",
            "args0": [
                {
                    "type": "field_multilinetext",
                    "name": "content",
                    "text": "Some Website Metadata title",
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
            "message0": "Description%1",
            "args0": [
                {
                    "type": "field_multilinetext",
                    "name": "content",
                    "text": "Set website description",
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
            "message0": "Image %1",
            "args0": [
                {
                    "type": "field_multilinetext",
                    "name": "content",
                    "text": "Path or Image",
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
            "message0": "Url %1",
            "args0": [
                {
                    "type": "field_multilinetext",
                    "name": "content",
                    "text": "Link Url",
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#59B9F2",
            "tooltip": "",
            "helpUrl": "https://www.w3schools.com/tags/tag_meta.asp"
        },
        {
            "type": "meta_org",
            "message0": "Meta Tags%1 %2",
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
            "previousStatement": "head",
            "nextStatement": null,
            "colour": "#59B9F2",
            "tooltip": "",
            "helpUrl": "http://www.w3schools.com/tags/tag_html.asp"
        },
        {
            "type": "anchor",
            "message0": "href %1 class %2%3 %4",
            "args0": [
                {
                    "type": "field_input",
                    "name": "NAME",
                    "text": "target"
                },
                {
                    "type": "field_input",
                    "name": "class",
                    "text": "class"
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
            "helpUrl": "http://www.w3schools.com/tags/tag_a.asp"
        },

        {
            "type": "image",
            "message0": "image %1 alt %2 w %3 h %4 class %5 ",
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
                },
                {
                    "type": "field_input",
                    "name": "WIDTH",
                },
                {
                    "type": "field_input",
                    "name": "HEIGHT",
                },
                {
                    "type": "field_input",
                    "name": "CLASS",
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": 90,
            "tooltip": "",
            "helpUrl": "http://www.w3schools.com/tags/tag_img.asp"
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
            "helpUrl": "http://www.w3schools.com/tags/tag_i.asp"
        },
        {
            "type": "strong",
            "message0": "important %1%2",
            "args0": [
                {
                    "type": "input_dummy",
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
            "helpUrl": "http://www.w3schools.com/tags/tag_strong.asp"
        },
        {
            "type": "headline",
            "message0": "headline %1 class=%2 %3 %4",
            "args0": [

                {
                    "type": "field_dropdown",
                    "name": "headingsize",
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
                    "type": "field_input",
                    "name": "class",
                    "text": "class"
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
            "helpUrl": "https://www.w3schools.com/tags/tag_hn.asp"
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
            "helpUrl": "http://www.w3schools.com/tags/tag_br.asp"
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
            "helpUrl": "http://www.w3schools.com/tags/tag_ul.asp"
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
            "helpUrl": "http://www.w3schools.com/tags/tag_ol.asp"
        },
        {
            "type": "listitem",
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
            "helpUrl": "http://www.w3schools.com/tags/tag_li.asp"
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
            "helpUrl": "http://www.w3schools.com/tags/tag_code.asp"
        },
        {
            "type": "small",
            "message0": "small %1 %2",
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
            "helpUrl": "http://www.w3schools.com/tags/tag_small.asp"
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
            "type": "form",
            "message0": "form action%1 method%2 %3 %4",
            "args0": [
                {
                    "type": "field_input",
                    "name": "action",
                    "text": "http://www.example.com/form.php"
                },
                {
                    "type": "field_dropdown",
                    "name": "method",
                    "options": [
                         [
                            "get",
                            "get"
                         ],
                            [
                            "post",
                            "post"
                            ],
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
            "helpUrl": "http://www.w3schools.com/tags/tag_form.asp"
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
            "helpUrl": "http://www.w3schools.com/tags/tag_table.asp"
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
            "helpUrl": "http://www.w3schools.com/tags/tag_tr.asp"
        },
        {
            "type": "button",
            "message0": "button class%1 %2 %3",
            "args0": [
                {
                    "type": "field_input",
                    "name": "class",
                    "text": "class"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "option",
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 90,
            "tooltip": "button element",
            "helpUrl": "http://www.w3schools.com/tags/tag_button.asp"
        },
        {
            "type":"title",
            "message0":"title %1",
            "args0":[
                {
                    "type":"field_input",
                    "name":"title",
                    "text":"S4W",
                },
            ],
            "previousStatement":null,
            "nextStatement":null,
            "colour":90,
            "tooltip":"title element",
            "helpUrl":"http://www.w3schools.com/tags/tag_title.asp"
        },

 
        {
            "type": "input",
            "message0": "input type %1  class %2  value %3 ",
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
                    "text": "class"
                },
                {
                    "type": "field_input",
                    "name": "value",
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 90,
            "tooltip": "Add user input fields to your website.",
            "helpUrl": "http://www.w3schools.com/tags/tag_input.asp"
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
        //  style
        {
            "type": "style",
            "message0": "css %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {

                    "type": "field_multilinetext",
                    "name": "css",
                    "text": `class{\n\n} \n#id{\n\n} \n\n\n\n body{\n\n}                       ` 

                }
            ],
            "previousStatement": "head",
            "nextStatement": "body",
            "colour": "#ffc000",
            "tooltip": "css style block",
            "helpUrl": "https://www.w3schools.com/css/DEFAULT.asp"
        },

        // javascript blocks

        // query->js
        {
            "type": "js",
            "message0": "script%1 %2",
            "args0": [
                {
                    "type": "input_dummy",
                },
                {
                    "type": "input_statement",
                    "name": "blocks"
                }
            ],
            "previousStatement": null,
            "nextStatement": "body",
            "colour": "#ffc000",
            "tooltip": "javascript script block",
            "helpUrl": "https://www.w3schools.com/js/DEFAULT.asp"
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
    ];


for (var iBlock in htmlBlocks) {
    function makeBlock(json) {
        Blockly.Blocks[json.type] = {
            init: function () {
                this.jsonInit(json);
            }
        }
    }
    makeBlock(htmlBlocks[iBlock]);
}