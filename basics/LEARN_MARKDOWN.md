# Learn Markdown

[Markedown Editor](https://stackedit.io/)

## Fonts or Emphasis

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

_italic_ **bold**
_italic_ **bold**

## Headers

# H1

## H2

### H3

#### H4

##### H5

###### H6

Alternatively, for H1 and H2, an underline-ish style:

# Alt-H1

## Alt-H2

## Lists

1. First ordered list item
2. Another item

- Unordered sub-list.

1. Actual numbers don't matter, just that it's a number
1. Ordered sub-list
1. And another item.

   Some text that should be aligned with the above item.

- Unordered list can use asterisks

* Or minuses

- Or pluses

## Links and Images

[I'm an inline-style link](https://www.google.com)

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

---

An [example](http://url.com/ "Title")

An [example][id]. Then, anywhere
else in the doc, define the link:

[id]: http://example.com/ "Title"

![alt text](/path/img.jpg "Title")

![alt text][id]

[id]: /url/to/img.jpg "Title"

[![Big-O notation](../basics/data_structure/big-O-notation.png)]

## Horizontales Lines

Three or more...

---

Hyphens

---

Asterisks

---

Underscores

## Code

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

## Tables

Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

## Blockquotes

> Email-style angle brackets
> are used for blockquotes.

> > And, they can be nested.

> #### Headers in blockquotes
>
> - You can quote a list.
> - Etc.

## Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

## References

[markdown specs](https://daringfireball.net/projects/markdown/)

[Markdown Guide basix syntax](https://www.markdownguide.org/basic-syntax/)

[DevHint Markdown](https://devhints.io/markdown)
[Markdown Here](https://markdown-here.com/index.html)
