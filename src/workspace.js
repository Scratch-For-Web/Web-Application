document.getElementById('body').innerHTML +=
`

<xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none">
      <block type="html">
        <statement name="content">
          <block type="head">
            <statement name="content">
              <block type="title" >
                <statement name="content">
                  <block type="plaintext" >
                    <field name="content">Scratch For Web</field>
                  </block>
                </statement>
              </block>
            </statement>
            <next>
              <block type="body_attributes" >
                <value name="NAME">
                  <block type="style">
                    <statement name="NAME">
                      <block type="genericstyle" >
                        <field name="property">font-family</field>
                        <field name="value">sans-serif</field>
                      </block>
                    </statement>
                  </block>
                </value>
                <statement name="content">
                  <block type="headline" >
                    <field name="NAME">h1</field>
                    <statement name="content">
                      <block type="plaintext" >
                        <field name="content">Create web pages with Scratch For Web</field>
                      </block>
                    </statement>
                    <next>
                      <block type="paragraph" >
                        <statement name="content">
                          <block type="plaintext" >
                            <field name="content">Just combine the building blocks on the left side</field>
                            <next>
                              <block type="plaintext" >
                                <field name="content">and watch this page change accordingly.</field>
                              </block>
                            </next>
                          </block>
                        </statement>
                        <next>
                          <block type="paragraph" >
                            <statement name="content">
                              <block type="plaintext">
                                <field name="content">On the bottom, you can also see the HTML</field>
                                <next>
                                  <block type="plaintext" >
                                    <field name="content">source code of the page you are creating.</field>
                                  </block>
                                </next>
                              </block>
                            </statement>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </xml>


`