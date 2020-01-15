import {
	base
} from '/js/decoder-encoder/unicode.js';

function binaryfix(value) {
	fix = fix.split(" ").join(" 0");
	return fix.replace(/^/, "0");
}
export function encode(value, text) {
	if (value === "decimalenc") {
		document.getElementById('textencode').value = base(text, 10);
		// hexadecimal encode
		return true;
	} else if (value === "hexadecimalenc") {
		document.getElementById('textencode').value = base(text, 16);
		return true;
	} else if (value === "binaryenc") {
		// binary encode
		var fix = base(text, 2);
		document.getElementById('textencode').value = binaryfix(fix);
		return true;
	}
	else if (value === "octalenc") {
		// octal encode
		document.getElementById('textencode').value = base(text, 8);
		return true;
	}
	else if (value === "ASCII") {
		// ASCII encode
		document.getElementById('textencode').value = text;
		return true;
	}
	else if (value === "base64Encode") {
		// base64 encode
		document.getElementById('textencode').value = btoa(text);
		return true;
	}
	else if (value === "encodeURIComponent") {
		try {
			// encodeURIComponent Decode
			document.getElementById('textencode').value = encodeURIComponent(text);
		} catch {
			document.getElementById('textencode').value = "Error";
		}
		return true;
	}
	else if (value === "encodeURI") {
		// encodeURI Decode
		try {
			document.getElementById('textencode').value = encodeURI(text);
		} catch {
			document.getElementById('textencode').value = "Error";
		}
		return true;
	}
	else if (value === "escape") {
		// escape Decode
		try {
			document.getElementById('textencode').value = escape(text);
		} catch {
			document.getElementById('textencode').value = "Error";
		}
		return true;
	} else {
		return false;
	}
}