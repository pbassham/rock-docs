# 
from:styling-content-typography.html

Styling Type
------------

Documentation and examples for typography, headings, body text, lists, and more.

### Text Alignment

Left aligned text on all viewport sizes.

Center aligned text on all viewport sizes.

Right aligned text on all viewport sizes.

```
<p class="text-left">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-right">Right aligned text on all viewport sizes.</p>
```

### Inline text elements

Styling for common inline HTML5 elements.

You can use the mark tag to highlight text.

This line of text is meant to be treated as deleted text.

This line of text is meant to be treated as no longer accurate.

This line of text is meant to be treated as an addition to the document.

This line of text will render as underlined.

This line of text is meant to be treated as fine print.

**This line rendered as bold text.**

_This line rendered as italicized text._

```
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
```

### Text Color

Rock provides two primary colors for text used throughout the Rock UI. `text-color`, which sets the color to the default body color, and `text-muted` which de-emphasizes the text. Additional colors are available via [Color Utilities](https://community.rockrms.com/styling/utilities/colors)

Default text color.

Muted text color.

```
<p class="text-color">Default text color.</p>
<p class="text-muted">Muted text color.</p>
```

### Case

Utilities for controlling the transformation of text.

This is lowercase text (.text-lowercase).

This is uppercase text (.text-uppercase).

This text is capitalized (.text-capitalize).

Class

Properties

`text-lowercase`

`text-transform: lowercase;`

`text-uppercase`

`text-transform: uppercase;`

`text-capitalize`

`text-transform: capitalize;`

### Font Weight

Utilities for controlling the font weight of an element.

This is text-light.

This is text-normal.

This is text-semibold.

This is text-bold.

Class

Properties

`text-light`

`font-weight: 300;`

`text-normal`

`font-weight: 400;`

`text-semibold`

`font-weight: 700;`

`text-bold`

`font-weight: 900;`

### Underline & Strikethrough

Class

Properties

`text-decoration-none`

`text-decoration: none;`

`text-linethrough`

`text-decoration: line-through;`

### Line Height

Utilities for controlling the leading (line height) of an element.

.leading-tight

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.

.leading-snug

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.

.leading-normal

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.

.leading-relaxed

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.

.leading-loose

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.

Class

Properties

`leading-tight`

`line-height: 1.25;`

`leading-snug`

`line-height: 1.375;`

`leading-normal`

`line-height: 1.5;`

`leading-relaxed`

`line-height: 1.625;`

`leading-loose`

`line-height: 2;`