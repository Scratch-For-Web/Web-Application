document.getElementById('nav').innerHTML +=
`
<nav style="background-color: #303030;" class="navbar navbar-expand-sm  text-white navbar-light">
<div class="container-fluid">
  <ul style="color:white" class="navbar-nav">
    <li>
     
    </li>
    <li class="nav-item">
     <img src="https://scratch-for-web.vercel.app/img/scratch_for_web.679332ca.png" width="20px"> Scratch For Web v1.3
    </li>
    <div class="dropdown">
      <button type="button" style="background: none;border:none; margin-top:-5px; " class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown">
        Files
      </button>
      <ul class="bg-dark dropdown-menu">
        <li class="nav-item">
          <div><span id="saveButton"> Save blocks</span></div>
          </li>
          <li class="nav-item">
          <label style="cursor:pointer" for="fileButton" class="custom-file-upload">
          Upload Blocks
      </label>
      <input style="display: none;" id="fileButton" type="file"/>
          </li>
          <li class="nav-item">
            <div><span id="exportButton"> Download </span></div>
          </li>
          <li>
           
          </li>
      </ul>
    </div>
    <button style=" background: none; border:none; margin-top:-5px" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#myModal">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16"> <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/> </svg> View Code
    </button>
 
  </ul>
</div>
</nav>
<!-- The Modal -->
<div style="border:none" class=" modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="bg-dark modal-header">
        <h4 class="modal-title text-light">Exported Code</h4>
         
      </div>

      <!-- Modal body -->
      <div class="bg-dark modal-body">
        <pre style="color:white; overflow:hidden; border:none"  id="sourcecode">sum contnent</pre>
      </div>

      <!-- Modal footer -->
      <div class="bg-dark modal-footer">
        <button type="button" style="width:900px" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
</div>


`