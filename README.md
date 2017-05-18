# ReverseIndent JS Port
Javascript application to reverse the indentation of a file. Ported from PHP.

## Usage
Create a new ReverseIndent object:

`var reverseIndent = new ReverseIndent();`

Call the run method with the string to reverse indentation of as a parameter:

`var output = reverseIndent.run(input)`

If you wish to display the results on a webpage you might want to show the output within `<pre>` tags.
`<pre>` tags will preserve the newline characters, so you don't have to process the output more than necessary.

## Version History
1.0.0: GitHub release