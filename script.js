// Get html
var original_html = $('body').html();

// Search and replace
new_html = original_html.replace(/\?forcedownload=1/g, "");

// Inject new html
$('body').html(new_html);
