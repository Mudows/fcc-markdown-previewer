$(document).ready(function() {
  // get references to the editor and preview elements
  var editor = $('#editor');
  var preview = $('#preview');

  // set default markdown in the editor
  var defaultMarkdown = `# Heading 1
## Heading 2
[Link](https://www.example.com)
\`inline code\`
\`\`\`
// Code block
function helloWorld() {
  console.log('Hello, world!');
}
\`\`\`
- List item 1
- List item 2

> Blockquote

![alt text](https://via.placeholder.com/150 "Logo Title Text 1")

**Bold text**`;

  editor.val(defaultMarkdown);

  // update preview on input change
  editor.on('input', function() {
    var markdown = editor.val();
    var html = marked(markdown);
    preview.html(html);
  });

  // render default markdown on load
  var html = marked(defaultMarkdown);
  preview.html(html);
});
