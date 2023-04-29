export default (favorites) => {
    return `<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
      <category name="Html Blocks" expanded="true">
        <category name="Base Blocks" colour="#a55b5b">
          <label text="Base Blocks To Get Started"></label>
          <block type="html">
            <statement name="content">
              <block type="head">
                <statement name="content">
                  <block type="title">
                    <statement name="content">
                      <block type="plaintext">
                        <field name="content"></field>
                      </block>
                    </statement>
                  </block>
                </statement>
                <next>
                  <block type="body"></block>
                </next>
              </block>
            </statement>
          </block>
          <block type="html"></block>
          <block type="body"></block>
          <block type="division"></block>
          <block type="body_attributes"></block>
          <block type="head"></block>
          <block type="title">
            <statement name="content">
              <block type="plaintext">
                <field name="content"></field>
              </block>
            </statement>
          </block>
          <block type="span">
          <block type="generictag">
            <field name="NAME">Custom Tag</field>
          </block>
        </block></category>
        <category name="Text Formatting" colour="#5ba55b">
          <label text="Format Text"></label>
          <block type="plaintext">
          <field name="content">Insert Text&amp;#10;</field>
          </block>
          <block type="horizontalbreak"></block>
          <block type="linebreak"></block>
          <block type="paragraph"></block>
          <block type="headline">
            <field name="NAME">h1</field>
          </block>
          <block type="generictag">
            <field name="NAME">tag</field>
          </block>
        </category>
        <category name="Meta Tags" colour="#59B9F2">
          <block type="meta_org">
          </block>
          <block type="meta_url">
          <field name="content">Set meta url</field>
          </block>
          <block type="meta_title">
          <field name="content"></field>
          </block>
          <block type="meta_desc">
          <field name="content"></field>
          </block>
          <block type="meta_img">
          <field name="content"></field>
          </block>
        </category>
        <category name="Text Styling" colour="#5ba55b">
          <label text="Style Text"></label>
          <block type="emphasise"></block>
          <block type="inserted"></block>
          <block type="strong"></block>
          <block type="deleted"></block>
          <block type="super"></block>
          <block type="sub"></block>
          <block type="code"></block>
          <block type="quote"></block>
          <block type="blockquote"></block>
          <block type="sample"></block>
          <block type="keyboard"></block>
          <block type="variable"></block>
          <block type="division"></block>
        </category>
        <category name="Link Attributes" colour="#5ba55b">
          <label text="Link Attributes"></label>
          <block type="link">
            <field name="NAME">target</field>
          </block>
          <block type="image">
            <field name="IMAGE">URL</field>
            <field name="ALT">alternative text</field>
          </block>
        </category>
        <category name="CSS Styling" colour="#5b6da5">
          <label text="Styling"></label>
          <label text="Add custom fonts"></label>
          <block type="importfont"></block>
          <block type="addfont"></block>
          <label text="Use the class block to style content -"></label>
          <label text=" this goes inside of Style content! Set class to div class"></label>
          <block type="classer"></block>
          <block type="style"></block>
          <label text=" this goes inside of header block! "></label>
          <label text="then add the Set class to block into it"></label>
          <block type="styler"></block>
          <label text="This goes inside the Divider Block "></label>
          <label text="Set the class"></label>
          <label text="Then in the block set class to - "></label>
          <label text="set the class to your class"></label>
          <block type="divclass"></block>
          <block type="color">
            <field name="NAME">#ff0000</field>
          </block>
          <block type="bgcolour">
            <field name="NAME">#ff0000</field>
          </block>
          <block type="genericstyle">
            <field name="property">line1&amp;#10;line2</field>
          </block>
        </category>
        <category name=" Lists" colour="#a55ba5">
          <label text="Lists"></label>
          <block type="unorderedlist"></block>
          <block type="orderedlist"></block>
          <block type="listelement"></block>
        </category>
        <category name="Tables" colour="#5ba5a5">
          <label text="Tables"></label>
          <block type="table">
            <statement name="content">
              <block type="tablerow">
                <statement name="content">
                  <block type="tablecell">
                    <next>
                      <block type="tablecell"></block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="tablerow">
                    <statement name="content">
                      <block type="tablecell">
                        <next>
                          <block type="tablecell"></block>
                        </next>
                      </block>
                    </statement>
                  </block>
                </next>
              </block>
            </statement>
          </block>
          <block type="table"></block>
          <block type="tablerow"></block>
          <block type="tablecell"></block>
        </category>
        <category name="Forms" colour="#80a55b">
          <block type="form"></block>
          <block type="input_text">
            <field name="default"></field>
          </block>
          <block type="button"></block>
          <block type="input">
            <field name="type">text</field>
            <field name="value"></field>
          </block>
        </category>
      </category>
      <sep></sep>
      <category name="Javascript" colour="#f1c232">
        <block type="js"></block>
        <block type="controls_if"></block>
      </category>
      <category name="Frameworks">
        <category name="React Js" colour="	#EE4B2B">
          <block type="react_js"></block>
        </category>
      </category>
    </xml>`
}
