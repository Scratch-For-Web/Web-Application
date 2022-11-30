<template>
							<CDropdownMenu>
								<CDropdownItem class="lightwhencursor" @click="save" >Save Blocks</CDropdownItem>
								<CDropdownItem class="lightwhencursor" @click="askForFile">Upload Blocks</CDropdownItem>
								<input
      hidden
      @change="load"
      id="load-code"
      type="file"
      accept=".s4w,.zip,.xml"
    />
								<CDropdownItem class="lightwhencursor">Download</CDropdownItem>
							</CDropdownMenu>
	
  <!--
	Original stuff delete later
	
	<b-nav-item-dropdown :text="$t('file.title')" right>
    <b-dropdown-item @click="askForFile">{{ $t("file.open") }}</b-dropdown-item>
    <input
      hidden
      @change="load"
      id="load-code"
      type="file"
      accept=".s4d,.zip,.xml"
    />
    <b-dropdown-item v-b-modal.code-modal>{{ $t("file.javascript") }}</b-dropdown-item>
    <b-dropdown-item @click="copy">{{ $t("file.copy") }}</b-dropdown-item>
    <b-dropdown-item @click="save">{{ $t("file.save") }}</b-dropdown-item>
    <b-dropdown-item @click="saveas">Replace</b-dropdown-item>
  </b-nav-item-dropdown>-->
</template>

<script>
import Blockly from "blockly";
import JSZip from "jszip";
import beautify from "js-beautify";
import localforage from "localforage";
import Swal from "sweetalert2";

// let changesAreUnsaved = false
// let workspaceContent = `<xml xmlns="https://developers.google.com/blockly/xml"></xml>`

export default {
  name: "filemenu",
  mounted() {
    localforage.getItem("utilitiesShortcuts").then((item) => {
      if (item == false) return;
      window.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key == "s") {
          e.preventDefault();
          /*if (e.altKey) {
            this.saveas();
          } else {*/
            this.save();
          return false;
        }
      });
    });
  },
  methods: {
    copy() {
      var url = beautify.js(this.getWorkspaceCode(), {
        indent_size: 4,
        space_in_empty_paren: true,
      });
      navigator.clipboard.writeText(url);
    },
    viewCode() {
      alert(this.getWorkspaceCode());
    },
    askForFile() {
      document.querySelector("#load-code").click();
    },
    async load() {
      Swal.fire({
        title: "Delete current blocks?",
        text: "Would you like to remove the current blocks before importing the file?",
				showDenyButton: true,
  			showCancelButton: true,
				confirmButtonText: 'Yes',
  			denyButtonText: `No`,
				confirmButtonColor: '#3085d6',
        /*buttons: {
          cancel: "Cancel",
          no: {
            text: "No",
            value: false,
            className: "red-button",
          },
          yes: {
            text: "Yes",
            value: true,
          },
        },*/
        //closeOnClickOutside: false,
      }).then(async (result) => {
        if (!result.isDenied && !result.isConfirmed) {
          return;
        } else if (result.isConfirmed) {
          this.$store.state.workspace.clear();
        }
				const file = document.getElementById("load-code").files[0];
            const documentName = file.name.split(".").slice(0, file.name.split(".").length-1);
            //document.querySelector("#docName").textContent = documentName;
            const reader = new FileReader();
            reader.onload = (e) => {
                JSZip.loadAsync(e.target.result)
                    .then((data) => {
                    if (data.file("blocks.xml")) {
                        return data.file("blocks.xml").async("string")
                    }
                })
                .then((text) => {
                    const xml = Blockly.Xml.textToDom(text);
                    Blockly.Xml.domToWorkspace(xml, Blockly.Workspace.getById(this.$store.state.workspace.id));
                }).catch(() => {
                    this.$toast.open({
                        message: this.$t('load.error'),
                        type: "error",
                        dismissible: true,
                        duration: 10000
                    });
                });
            };
        if (file) {
          reader.readAsArrayBuffer(file);
          document.getElementById("load-code").setAttribute("value", "");
        }
      });
    },
    save() {
      const zip = new JSZip();
      const xmlContent = Blockly.Xml.domToPrettyText(
        Blockly.Xml.workspaceToDom(
          this.$store.state.workspace
        )
      );
      const fileName = `${encodeURIComponent("Untitled Website").replace(/%20/g, " ")}.s4w`;
      zip.file("blocks.xml", xmlContent);
			
      zip
        .generateAsync({
          type: "blob",
        })
        .then((blob) => {
          const a = document.createElement("a");
          a.style = "display: none";
          document.body.appendChild(a);
          const url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = fileName;
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
          // changesAreUnsaved = false
          // workspaceContent = xmlContent
        });
    },
    saveas() {
      const zip = new JSZip();
      const xmlContent = Blockly.Xml.domToPrettyText(
        Blockly.Xml.workspaceToDom(
          this.$store.state.workspace
        )
      );
      zip.file("blocks.xml", xmlContent);
      zip
        .generateAsync({
          type: "blob",
        })
        .then(async (blob) => {
          const fileHandle = await window.showSaveFilePicker({
            types: [
              {
                description: "S4W Site File",
                accept: { "application/zip": [".s4d"] },
              },
            ],
          });
          const fileStream = await fileHandle.createWritable();
          await fileStream.write(blob);
          await fileStream.close();
          // changesAreUnsaved = false
          // workspaceContent = xmlContent
        });
    },
  },
};
</script>

<style scoped>
	.lightwhencursor {
		cursor: pointer;
	}
</style>