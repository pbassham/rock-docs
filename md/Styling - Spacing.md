# Spacing
[View Original Source](https://community.rockrms.com/styling/utilities/spacing)

Spacing Utilities
-----------------

Add, remove, or change the amount of spacing on the inside/outside of any element.

Position (Top/Right/Bottom/Left/Horizontal/Vertical/All), Amount (0,1,2,3,4,5,auto), Breakpoint (xs,sm,md,lg,xl)

### Margin and padding

Assign responsive-friendly `margin` or `padding` values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes range from `.25rem (4px)` to `3rem (48px)`.

#### Notation

Spacing utilities that apply to all breakpoints, from `xs` to `lg`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format `{property}{sides}-{size}` for `xs` and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, and `lg`.

Where _property_ is one of:

*   `m` - for classes that set `margin`
*   `p` - for classes that set `padding`

Where _sides_ is one of:

*   `t` - (Top) for classes that set `margin-top` or `padding-top`
*   `b` - (Bottom) for classes that set `margin-bottom` or `padding-bottom`
*   `l` - (Left) for classes that set `margin-left` or `padding-left`
*   `r` - (Right) for classes that set `margin-right` or `padding-right`
*   `x` - (X-Axis) for classes that set both `*-left` and `*-right`
*   `y` - (Y-Axis) for classes that set both `*-top` and `*-bottom`
*   blank - for classes that set a `margin` or `padding` on all 4 sides of the element

Where _size_ is one of:

*   `0` - for classes that eliminate the `margin` or `padding` by setting it to `0`
*   `1` - for classes that set the `margin` or `padding` to `.25rem (4px)`
*   `2` - for classes that set the `margin` or `padding` to `.5rem (8px)`
*   `3` - for classes that set the `margin` or `padding` to `1rem (16px)`
*   `4` - for classes that set the `margin` or `padding` to `1.5rem (24px)`
*   `5` - for classes that set the `margin` or `padding` to `3rem (48px)`
*   `auto` - for classes that set the `margin` to auto