document.getElementById('nav').innerHTML +=
`
<nav style="background-color:#212121;" class="navbar navbar-expand-sm  text-white navbar-light">
  <div class="container-fluid">
    <ul style="color:white" class="navbar-nav">
      <li></li>
      <li class="nav-item">
        <img src="https://scratch-for-web.vercel.app/img/scratch_for_web.679332ca.png" width="20px"> Scratch For Web v1.3
      </li>
      <div class="dropdown">
        <button type="button" style="background: none;border:none; margin-top:-5px; " class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown"> Files </button>
        <ul style="color:white" class="bg-dark dropdown-menu">
          <li style=" " class="nav-item">
            <span id="saveButton"> Save Blocks </strong>
            </span>
          </li>
          <li class="nav-item">
            <label style="cursor:pointer;" for="fileButton" class="custom-file-upload"> Upload Blocks </strong>
            </label>
            <input style="display: none;" id="fileButton" type="file" />
          </li>
          <li class="nav-item">
            <div>
              <span id="exportButton"> Download </strong>
              </span>
            </div>
          </li>
          <li class="nav-item">
            <div>
              <span id="screenshot" onclick="screenshot()"> Screenshot </strong>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <button type="button" style="background: none;border:none; margin-top:-5px; " class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown"> Links </button>
        <ul class="bg-dark dropdown-menu">
          <li>
            <a style="text-decoration:none; color:white" href="https://discord.gg/57HNMGDvXa">
              <img width="27px" src="./assets/discord-icon.svg">Support </a>
          </li>
          <li>
            <a style="text-decoration:none; color:white; ; top:20px" href="https://docs.scratch4web.ml/">
              <img width="27px" src="./assets/docs-icon.png">Docs </a>
          </li>
          <li>
            <a style="text-decoration:none; color:white;  ; top:20px" href="https://github.com/Scratch-For-Web/Web-Application">
              <img width="27px" src="./assets/github-icon.svg">Source Code </a>
          </li>
        </ul>
      </div>
      <button style=" background: none; border:none; margin-top:-5px" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#myModal"> View Code </button>
      <li style="margin-top:1px;left:2px;bottom:0; positon:relative;">
        <span id="run" style="margin-top:-200px;bottom:0; positon:relative;" onclick="displaySite()">Run Site</span>
      </li>
    </ul>
  </div>
</nav>
<!-- The Modal -->
<div style="border-radius:5px;border:none" class=" modal modal-lg" id="myModal">
  <div style="border-radius:5px;border:none" class="bg-dark modal-dialog">
    <div class="bg-dark modal-content">
      <!-- Modal Header -->
      <div class="bg-dark modal-header">
        <h4 class="modal-title text-light">Exported Code</h4>
      </div>
      <!-- Modal body -->
      <div class="bg-dark modal-body">
        <pre style="color:white; overflow:hidden; border:none" id="sourcecode">sum contnent</pre>
      </div>
      <!-- Modal footer -->
      <div class="bg-dark modal-footer">
        <button type="button" style="width:900px" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>


`