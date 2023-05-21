const Nav = (props) => {
    const [showFileDropdown, setShowFileDropdown] = useState(false);
    const [showLinksDropdown, setShowLinksDropdown] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  
     let userid = JSON.parse(localStorage.getItem('pocketbase_auth')).model.id
     let avatar = JSON.parse(localStorage.getItem('pocketbase_auth')).model.avatar

     let src = `https://shaggy-denmark.pockethost.io/api/files/_pb_users_auth_/${userid}/${avatar}?token=}`
    resetWorkspace = () => {
        const workspace = Blockly.getMainWorkspace();
        workspace.clear();
    }

    function loadWorkspace() {
        api.collection('projects').getOne(props.project_id, {
            owner: JSON.parse(localStorage.getItem('pocketbase_auth')).model.id
        }).then((res) => {
            let workspacecode = res.workspace
            let xml = Blockly.utils.xml.textToDom(workspacecode)
            if (!workspacecode) {
                alert('Place some blocks in the workspace to get started!')
                return;
            }
            Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());

        })
    }
    loadWorkspace();

    const saveToFile = () => {
        let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
        let xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
        var blob = new Blob([code], { type: "text/plain;charset=utf-8" });
        let a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = props.project_name + ".html"
        a.click();
    }


    function Debug() {
        popup = window.open("blank", "Scratch4Web Debugger", "width=500,height=500");
        popup.document.write("<p>Awaiting sfw changes</p>");
        workspace = Blockly.getMainWorkspace();
        let firstoad = false
        function change(event) {
            if (firstoad) {

                if (event.type == Blockly.Events.CREATE || event.type == Blockly.Events.DELETE) {
                    document.getElementById("showonchange").removeAttribute('hidden');
                    let workspaceToCode = Blockly.JavaScript.workspaceToCode(workspace);
                    popup.document.querySelector('html').innerHTML = workspaceToCode;
                    document.getElementById('codemodalcontent').value = workspaceToCode;
                }
            }
            firstoad = true;
        }
        workspace.addChangeListener(change);
    }
    showCode = () => {
        let text = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
        document.getElementById('codeModal').removeAttribute('hidden');
        document.getElementById('codemodalcontent').value = text;
    }
    let workspace = Blockly.getMainWorkspace();
    function change(e) {
        document.getElementById("showonchange").removeAttribute('hidden');
    }

    commit = () => {
        let commitmessage = document.getElementById('commitmessage').value;
        let workspacecode = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace()));

        document.getElementById("showonchange").setAttribute('hidden', 'true');



    }
    saveToXml = () => {
        let workspacecode = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace()));
        var blob = new Blob([workspacecode], { type: "text/plain;charset=utf-8" });
        let a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = props.project_name + ".s4w" 
        a.click();

    }
    loadFromXml = () => {
        let input = document.createElement('input');
        input.type = 'file';
        input.accept = '.s4w';
        input.click();
        input.onchange = (e) => {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                let xml = Blockly.utils.xml.textToDom(evt.target.result)
                if (!xml) {
                    alert('Place some blocks in the workspace to get started!')
                    return;
                }
                Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
            }
            reader.onerror = function (evt) {
                console.log('error reading file')
            }
        }
    }
    let changeTimeout; // Declare a variable to hold the timeout ID

    workspace.addChangeListener(change);

    return (
        <nav>
            <ul className="flex px-2 h-full bg-[#212529] text-white relative shadow-sm font-mono" role="navigation">
            <li className="p-4 relative dropdown">
                    <label tabIndex={0}   >
                       File <i className="fas fa-caret-down"></i>
                    </label>


                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 text-black rounded-box w-30"
                        style={{ zIndex: '2000' }}
                    > 
                       <li className="p-2 hover:cursor-pointer text-black">
                                <button onClick={resetWorkspace} >Erase</button>
                    </li>
                    <li className="p-2 hover:cursor-pointer text-black">
                                <button onClick={saveToXml} >Save</button>
                    </li>
                    <li className="p-2 hover:cursor-pointer text-black">
                                <button onClick={saveToFile} >Download</button>
                    </li>
                    <li className="p-2 hover:cursor-pointer text-black">
                                <button onClick={loadFromXml} >Load</button>
                    </li>
                    
                    </ul>



                </li>
                <li className="p-4 relative dropdown">
                    <label tabIndex={0}   >
                       Social
                    </label>


                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 text-black rounded-box w-52"
                        style={{ zIndex: '2000'}}
                    >
                        <li className="hover:bg-transparent"><a href="https://discord.gg/57HNMGDvXa">
                            <img src="./modules/assets/discord-icon.svg" alt="Discord"
                                width="26" height="26"
                            />
                            <span className="inline text-black ml-2">
                                Support
                            </span>
                        </a>

                        </li>
                        <li>

                        </li>
                    </ul>



                </li>
                <li className="p-4  relative">
                    <button className="hover:text-white" onClick={showCode}  >Code</button>

                </li>
                <li className="p-4  relative">
                    <button className="hover:text-white" onClick={Debug}  >Debug</button>

                </li>

                <li className="p-4 relative" id="showonchange" hidden >
                    <input type="text" id="commitmessage" className="bg-[#4f4f4f] focus:outline-none rounded-md px-2 mx-20" placeholder="Describe Your Changes" />
                    <button onClick={commit} className="hover:text-white inline text-white bg-[#b37efb] px-10  rounded" style={{ position: 'fixed', left: '47vw', top: '2vh' }}  >
                        <img className="inline" style={{ position: 'absolute', left: '10%', top: '4%' }} src="./modules/assets/git.png" alt="commit image"
                            width={20} height={20}
                        ></img>
                        Merge
                    </button>
                </li>
                <li className="p-4 relative dropdown" >
                    <label tabIndex={0}   >
                        <img className="inline  cursor-pointer
                            rounded-full shadow-lg hover:shadow-xl transition duration-200 ease-in-out
                         "
                         style={{ position: 'fixed', right: '2vw', top: '1vh' }} 
                        id="profilepic"
                        src={src ? src : "./modules/assets/github-icon.svg" }
                        alt="profilepic" 
                        width="40" height="40"
                        />
                    </label>


                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 text-black rounded-box w-52"
                        style={{ position: 'fixed', right: '0', top: '8vh' }}
                    >
                        <li><a href="#/settings">Settings</a></li>
                        <li><a>Item 2</a></li>
                    </ul>


                </li>
            </ul>
            <div id="codeModal" hidden class="h-screen  text-white bg-[#212529] fade" >
                <div class="modal-dialog">
                    <div class="modal-content  h-5/6">

                        <div class="modal-body">
                            <textarea id="codemodalcontent" 
                               value="Place blocks to generate code"
                                style={{ overflowY: 'none' }}
                                rows="10" cols="50" readOnly
                                class="bg-[#212529] form-control w-full h-full resize py-2 px-5"></textarea>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn  px-5 py-2 rounded bg-slate-500" id="close"
                            onClick={() => {
                                document.getElementById('codeModal').hidden = true;
                            }}
                            >Close</button>
                            <button type="button" class="btn mx-12 bg-sky-500 px-5 py-2 rounded" onClick={saveToFile}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </nav>

    )
}
