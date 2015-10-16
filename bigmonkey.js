// I stole all this stuff from here: https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js

walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	var child, next;

	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;

	v = v.replace(/\bBig Money\b/g, "Big Monkey");
	v = v.replace(/\bBig money\b/g, "Big monkey");
	v = v.replace(/\bbig Monkey\b/g, "big Monkey");
	v = v.replace(/\bbig money\b/g, "big monkey");

	textNode.nodeValue = v;
}
