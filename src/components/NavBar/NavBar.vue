<template>
	<div class="topnav">
		<CNavbar expand="lg" color-scheme="dark" class="bg-dark">
			<CContainer fluid>
				<CNavbarBrand><img src="/logo.png" alt="" width="22" height="24" class="d-inline-block align-top" /> Scratch for Web</CNavbarBrand>
				<CNavbarToggler @click="visible = !visible;" />
				<CCollapse class="navbar-collapse" :visible="visible">
					<CNavbarNav>
							<CDropdown variant="nav-item" :popper="false">
							<CDropdownToggle color="dark" class="anim">Files</CDropdownToggle>
						<FileMenu></FileMenu>
							</CDropdown>
						<CDropdown variant="nav-item" :popper="false">
							<CDropdownToggle color="dark" class="anim">Links</CDropdownToggle>
							<LinksMenu></LinksMenu>
						</CDropdown>
						<!--<CNavLink class="lightwhencursor anim" @click="sayCode()">View Code</CNavLink>-->
						<CodeModal></CodeModal>
						<CNavLink class="lightwhencursor anim" @click="displaySite()">Run Site</CNavLink>
					</CNavbarNav>
				</CCollapse>
			</CContainer>
		</CNavbar>
	</div>

</template>
<script>
	import FileMenu from "./FileMenu.vue";
	import LinksMenu from "./LinksMenu.vue";
	import CodeModal from "./CodeModal.vue";
	export default {
		name: "navbar",
		components: {
    FileMenu,
		LinksMenu,
		CodeModal
		},
		data: function() {
			return {
				visible: false
			}
		},
		methods: {
			workspac() {
				console.log(this.$store.state.workspace)
			}
		}
	}
</script>
<script setup>
	import beautifier from 'js-beautify';
	import Blockly from "blockly/core";
	import Swal from "sweetalert2";

	function sayCode() {
		const code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace())

		function htmlEntities(str) {
			return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
		}
		Swal.fire({
			title: 'Exported Code',
			html: `<pre>
        ${htmlEntities(/*beautifier.html(*/code/*, { indent_size: 2, space_in_empty_paren: true })*/)}</pre>`,
			width: `70%`,
			background: '#121212',
			color: '#fff',
			padding: `0%`,
			confirmButtonText: `Close`
		})
	}

	function displaySite() {
		const code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace())
		const blob = new Blob([code], {
			type: "text/html"
		})
		let newWindow = window.open('/s4w')
		const url = window.URL.createObjectURL(blob);
		newWindow.location = url;
	}
</script>
<style scoped>
	.topnav {
		font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		position: absolute;
		width: 100%;
		/*height: 6%;*/
		z-index: 99 !important;
	}

	.lightwhencursor {
		cursor: pointer;
	}

	/* anim */
.anim {
    position: relative;
}
.anim::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #41b883;
    bottom: 0;
    left: 0;
    transform-origin: center;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
}
.anim:hover::before {
    transform-origin: center;
    transform: scaleX(1);
}
</style>