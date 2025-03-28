/**
 * Attention!
 * This file is generated automatically from the extension `ui.bbcode.encoder`.
 * Any manual changes to this file are not allowed.
 *
 * If you need to make some changes, then make edits to the `ui.bbcode.encoder`
 * and run the build using 'bitrix build'.
 * During the build, the code will be automatically ported to `bbcode/encoder'.
 */

/** @module bbcode/encoder */
jn.define('bbcode/encoder', (require, exports, module) => {

	class BBCodeEncoder {
	  encodeText(source) {
	    return String(source).replaceAll('[', '&#91;').replaceAll(']', '&#93;');

	    // return String(source)
	    // 	.replaceAll('&', '&amp;')
	    // 	.replaceAll('[', '&#91;')
	    // 	.replaceAll(']', '&#93;')
	    // 	.replaceAll('\'', '&#39;')
	    // 	.replaceAll('"', '&quot;')
	    // 	.replaceAll('<', '&lt;')
	    // 	.replaceAll('>', '&gt;');
	  }

	  decodeText(source) {
	    return String(source).replaceAll('&#91;', '[').replaceAll('&#93;', ']');

	    // return String(source)
	    // 	.replaceAll('&#91;', '[')
	    // 	.replaceAll('&#93;', ']')
	    // 	.replaceAll('&#39;', '\'')
	    // 	.replaceAll('&quot;', '"')
	    // 	.replaceAll('&lt;', '<')
	    // 	.replaceAll('&gt;', '>')
	    // 	.replaceAll('&amp;', '&');
	  }

	  encodeAttribute(source) {
	    return this.encodeText(source);
	  }
	  decodeAttribute(source) {
	    return this.decodeText(source);
	  }
	}

	exports.BBCodeEncoder = BBCodeEncoder;

});