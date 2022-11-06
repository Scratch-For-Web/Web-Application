document.getElementById('menubar').innerHTML +=
`
<script>
if (typeof(Msg) == "object" && Msg.buttons) {
  document.getElementById("saveText").textContent   = Msg.buttons.save.desc;
  document.getElementById("saveButton").textContent = Msg.buttons.save.button;
  document.getElementById("loadText").textContent   = Msg.buttons.load.desc;
  document.getElementById("exportText").value       = Msg.buttons.export.desc;
  document.getElementById("exportButton").value     = Msg.buttons.export.button;
}
</script>
`
