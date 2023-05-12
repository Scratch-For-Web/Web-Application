function editor(props) {

    let [Nav, setNav] = useState(false);
    let project_id = props.project_id;
    let user_id = JSON.parse(localStorage.getItem('pocketbase_auth')).model.id;
    let workspaceCode  = props.workspaceCode;
     
    if(!localStorage.getItem('pocketbase_auth')){
        window.location.hash  = '#/login';
    }
    useEffect(() => {
        const blocklyDiv = document.getElementById('blocklyDiv');
        Blockly.inject(blocklyDiv, {
            toolbox: toolbox,
            collapse: true,
            //        comments : false,
            //        disable : false,
            maxBlocks: Infinity,
            trashcan: true,
            renderer: "zelos",
            //        horizontalLayout : false,
            //        toolboxPosition : 'start',
            tooltips: true,
            css: true,
            rtl: false,
            theme: 'dark',
            scrollbars: true,
            sounds: true,
            oneBasedIndex: true,
            icons: true,
            zoom: {
                controls: true,
                wheel: true,
                startScale: .8,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2,
                pinch: true
            },
            grid: {
                spacing: 20,
                length: 3,
                colour: '#ccc',
                snap: true
            },
            move: {
                scrollbars: {
                    horizontal: true,
                    vertical: true
                },
                drag: true,
                wheel: false
            }
        });
        
        

        dispose('./modules/components/Nav.jsx', (Nav) => {
            setNav(Nav);
        }, {
            project_id: project_id,
            project_name: props.project_name,
            user: user_id,
        });

    }, []);

  
    return (

        <>
          {Nav}
   
            
             
            <div id="blocklyDiv"  className="w-screen h-screen" style={{ position: 'absolute', width: '100%', height: 'calc(100% - 56px)', left: '0', }}></div>
        </>
    )
}
