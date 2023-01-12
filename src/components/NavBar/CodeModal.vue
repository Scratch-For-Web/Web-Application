<template>
	<CNavLink class="lightwhencursor anim" @click="() => { visibleLiveDemo = true; getCode() }">View Code</CNavLink>
	<CModal fullscreen :visible="visibleLiveDemo" @close="() => { visibleLiveDemo = false }">
		<CModalHeader>
			<CModalTitle>Your HTML</CModalTitle>
		</CModalHeader>
		<CModalBody>
			<textarea disabled :value="code" id="code_TextArea_element_exporting_code" class="textarea">
            </textarea>
		</CModalBody>
		<CModalFooter style="background-color: #000;
		background: #000;
		color: #ffffff;">
			<CButton color="secondary" @click="() => { visibleLiveDemo = false }">
				Close
			</CButton>
			<CButton color="primary" @click="() => { visibleLiveDemo = false; copy() }">Copy to Clipboard</CButton>
		</CModalFooter>
	</CModal>
</template>

<script>
	import beautify from "js-beautify";
	import Blockly from "blockly/core";
	import 'prismjs/themes/prism-tomorrow.css'
	import Prism from 'prismjs'

	export default {
		name: "editmenu",
		data() {
			return {
				visibleLiveDemo: false,
				code: "this is a test"
			}
		},
		computed: {
			content: function() {
				console.log("ran")
				return beautify.html(Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace()));
			}
		},
		methods: {
			copy() {
				var url = beautify.html(Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace()));;
				navigator.clipboard.writeText(url)
			},
			getCode() {
				this.code = beautify.html(Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace()));
			}
		}
	}
</script>
<!--
<div class="modal fade show" style="display: block;"><div class="modal-dialog modal-fullscreen" role="dialog"><div class="modal-content"><span class="modal-header"><h5 class="modal-title">Your HTML</h5><button type="button" class="btn btn-close" aria-label="Close"></button></span><div class="modal-body"><textarea disabled="" id="code_TextArea_element_exporting_code" class="textarea">
            </textarea></div><div class="modal-footer"><button class="btn btn-secondary" type="button"> Close </button><button class="btn btn-primary" type="button">Copy to Clipboard</button></div></div></div></div>
-->
<style>
	.modal, .modal-dialog, modal-fullscreen, .modal-body, .modal-header, .modal-footer, .modal-content{
		background-color: #000;
		background: #000;
		color: #ffffff;
	}

	.textarea {
		color: #ffffff;
		background-color: #000;
		background: #000;
		width: 100%;
		height: 98%;
		resize: none;
		border: none;
	}

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