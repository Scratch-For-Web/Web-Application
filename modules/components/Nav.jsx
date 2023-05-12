const Nav = (props) => {
    const [showFileDropdown, setShowFileDropdown] = useState(false);
    const [showLinksDropdown, setShowLinksDropdown] = useState(false);
    
    

    useEffect(() => {
     
     
        window.addEventListener('click', (e) => {
            if(e.target.id == 'filedropdownbtn'){
                setShowFileDropdown(!showFileDropdown);
                let filedropdown = document.getElementById('filedropdown');
                let linksdropdown = document.getElementById('linksdropdown');
                let codeModal = document.getElementById('codeModal');

                if(filedropdown.getAttribute('hidden') == 'true'){
                    filedropdown.removeAttribute('hidden');
                    linksdropdown.setAttribute('hidden', 'true');
                    codeModal.setAttribute('hidden', 'true');
                }else{
                    filedropdown.setAttribute('hidden', 'true');
                }
                 
            }
            else if(e.target.id == 'linksdropdownbtn'){
                setShowLinksDropdown(true);
                let filedropdown = document.getElementById('filedropdown');
                let linksdropdown = document.getElementById('linksdropdown');
                let codeModal = document.getElementById('codeModal');
                let profiledropdown = document.getElementById('profiledropdown');
                if(linksdropdown.getAttribute('hidden') == 'true'){
                    linksdropdown.removeAttribute('hidden');
                    filedropdown.setAttribute('hidden', 'true');
                    codeModal.setAttribute('hidden', 'true');
                    profiledropdown.setAttribute('hidden', 'true');
                }else{
                    linksdropdown.setAttribute('hidden', 'true');
                }
            }else if (e.target.id == 'profiletoggle'){
                let filedropdown = document.getElementById('filedropdown');
                let linksdropdown = document.getElementById('linksdropdown');

                let codeModal = document.getElementById('codeModal');
                let profiledropdown = document.getElementById('profiledropdown');
                if(profiledropdown.getAttribute('hidden') == 'true'){
                    profiledropdown.removeAttribute('hidden');
                    filedropdown.setAttribute('hidden', 'true');
                    linksdropdown.setAttribute('hidden', 'true');
                    codeModal.setAttribute('hidden', 'true');
                }else{
                    profiledropdown.setAttribute('hidden', 'true');
                }
                                                
            }
            else if(e.target.id == 'codemodaltoggle'){
                let filedropdown = document.getElementById('filedropdown');
                let profiledropdown = document.getElementById('profiledropdown');
                let linksdropdown = document.getElementById('linksdropdown');
                let codeModal = document.getElementById('codeModal');
                let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
                let codemodalcontent = document.querySelector('#codemodalcontent');
                codemodalcontent.value = code;
                if(codeModal.getAttribute('hidden') == 'true'){
                    codeModal.removeAttribute('hidden');
                    filedropdown.setAttribute('hidden', 'true');
                    linksdropdown.setAttribute('hidden', 'true');
                    profiledropdown.setAttribute('hidden', 'true');
                }else{
                    codeModal.setAttribute('hidden', 'true');
                }

            }else if (e.target.id == 'close'){
                document.getElementById('codeModal').setAttribute('hidden', 'true');
            }
            else{
                showLinksDropdown && setShowLinksDropdown(false);
                document.getElementById('linksdropdown').setAttribute('hidden', 'true');
                document.getElementById('filedropdown').setAttribute('hidden', 'true');
            }
           

        });
    }, []);


    resetWorkspace = () => {
        const workspace = Blockly.getMainWorkspace();
        workspace.clear();
    }

    function loadWorkspace(){
        api.collection('projects').getOne(props.project_id, {
            owner: JSON.parse(localStorage.getItem('pocketbase_auth')).model.id
        }).then((res) => {
            let workspacecode = res.workspace 
            let xml = Blockly.utils.xml.textToDom(workspacecode)
            if(!workspacecode){
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
        console.log(code);
        let codemodalcontent = document.querySelector('#codemodalcontent');
        codemodalcontent.value = code;
        var blob = new Blob([code], { type: "text/plain;charset=utf-8" });
        let a  = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download =  props.project_Name + ".html";
        a.click();
    }
    
   
    function Debug(){
        popup = window.open("blank", "Scratch4Web Debugger", "width=500,height=500");
        popup.document.write("<p>Awaiting sfw changes</p>");
        workspace = Blockly.getMainWorkspace();
        function change(event) {
        
            if(event.type == Blockly.Events.CREATE || event.type == Blockly.Events.DELETE || event.type == Blockly.Events.CHANGE){
                let workspaceToCode = Blockly.JavaScript.workspaceToCode(workspace);
                popup.document.querySelector('html').innerHTML = workspaceToCode;
            }
       }
        workspace.addChangeListener(change);
    }
    let workspace = Blockly.getMainWorkspace();
    function change(e){
        if(e.type == Blockly.Events.CREATE || e.type == Blockly.Events.DELETE || e.type == Blockly.Events.CHANGE){
          // Clear any existing timeout
          clearTimeout(changeTimeout);
          
          // Set a new timeout to update the project after 1 second
          changeTimeout = setTimeout(() => {
            let workspaceXml =  Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
            console.log(workspaceXml);
            const data = {
                "owner":  JSON.parse(localStorage.getItem('pocketbase_auth')).model.id,
                "workspace": workspaceXml
            };
            console.log(props.user)
            api.collection('projects').update(props.project_id, JSON.stringify(data));
          }, 1000);
        }
      }
      
      let changeTimeout; // Declare a variable to hold the timeout ID
      
    workspace.addChangeListener(change);
    
    return (
        <nav>
            <ul className="flex px-2 h-full bg-[#212529] text-white relative shadow-sm font-mono" role="navigation">
                <li className="p-4 relative">
                    <button className="hover:text-white" id="filedropdownbtn" >File</button>
                    <div id="filedropdown" style={{ zIndex: '2000' }} hidden className="filedropdown   bg-white text-white rounded shadow-md absolute top-full mt-2 transform transition-all duration-200">
                        <ul className="px-5 w-32">
                            <li className="p-2 hover:cursor-pointer text-black">
                                <button onClick={resetWorkspace} >Erase</button>
                            </li>
                            <li className="p-2 hover:cursor-pointer text-black">Open</li>
                            <li className="p-2 hover:cursor-pointer text-black">Save</li>
                            <li className="p-2 hover:cursor-pointer text-black">
                                <button onClick={saveToFile} >Download</button>
                            </li>
                            <li className="p-2 hover:cursor-pointer text-black">Load</li>
                        </ul>
                    </div>
                </li>
                <li className="p-4 relative">
                    <button className="hover:text-white" id="linksdropdownbtn" >Links</button>
                    <div id="linksdropdown" style={{ zIndex: '2000' }} hidden className="linksdropdown   bg-white text-white rounded shadow-md absolute top-full mt-2 transform transition-all duration-200">
                        <ul className="px-2 w-32">
                            <li className="p-2 text-black">
                                <a className="inline" href="https://discord.gg/57HNMGDvXa"  >
                                    <div className="flex  ">
                                        <img className="inline" src="./modules/assets/discord-icon.svg" alt="Discord"
                                            width="26" height="26" />
                                        <span className="text-black ml-2">
                                            Support
                                        </span>
                                    </div>
                                </a>
                            </li>

                            <li className="p-2 text-black">
                                <a className="inline" href="https://github.com/Scratch-For-Web/Web-Application"  >
                                    <div className="flex  ">
                                        <img className="inline" src="./modules/assets/github-icon.svg" alt="Discord"
                                            width="26" height="26" />
                                        <span className="text-black ml-2">
                                            Source
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="p-4  relative">
                    <button className="hover:text-white"  id="codemodaltoggle">Code</button>

                </li>
                <li className="p-4  relative">
                    <button className="hover:text-white" onClick={Debug}  >Debug</button>

                </li>

                <li className="p-4 relative " >
               
                <img id="profiletoggle" className="inline py-2 px-3" style={{ position: 'fixed', right: '0', top: '0' }} src="./modules/assets/github-icon.svg" alt="profilepic"/>
                <div id="profiledropdown" style={{ position: 'fixed', right: '0', top: '10vh', zIndex:'9999' }} hidden className="profiledropdown   bg-white text-white rounded shadow-md absolute top-full mt-2 transform transition-all duration-200">
                        <ul className="px-2 w-32">
                            <li className="p-2 text-black">
                                <a className="inline" href="#/settings"  >
                                    <div className="flex  ">
                                       <p className="text-black ml-2">
                                            Settings
                                        </p>
                                    </div>
                                </a>
                            </li>

                             
                        </ul>
                    </div> 
                
                </li>
            </ul>
            <div id="codeModal" hidden class="h-screen  text-white bg-[#212529] fade" >
                <div class="modal-dialog">
                    <div class="modal-content  h-5/6">
                         
                        <div class="modal-body">
                            <textarea id="codemodalcontent" value="Place blocks to generate code" 
                            style={{overflowY: 'none'}}
                            rows="10" cols="50" readOnly 
                            class="bg-[#212529] form-control w-full h-full resize py-2 px-5"></textarea>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn  px-5 py-2 rounded bg-slate-500"   id="close">Close</button>
                            <button type="button" class="btn mx-12 bg-sky-500 px-5 py-2 rounded" onClick={saveToFile}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </nav>

    )
}
