# 
from:styling-utilities-flexbox.html

Flexbox Utilities
-----------------

Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities.

### Enable flex behaviors

Apply `display` utilities to create a flexbox container and transform **direct children elements** into flex items. Flex containers and items are able to be modified further with the utility classes below.

##### Example: Enable Flex Behaviors

I'm a flexbox container!

```
<div class="d-flex p-2">I'm a flexbox container!</div>
```

**Display Flex Classes**

*   `.d-flex` - Display Flex.
*   `.d-inline-flex` - Display inline flex

* * *

### Flex Direction

Set the direction of flex items in a flex container with direction utilities.

*   `.flex-row` (Default) - left to right
*   `.flex-row-reverse` - right to left
*   `.flex-column` - top to bottom
*   `.flex-column-reverse` - bottom to top

**Responsive Classes**

*   `.flex-[sm, md & lg]-[value]` for breakpoint and up

##### Example: Flex Direction

Flex item 1

Flex item 2

Flex item 3

Flex item 1

Flex item 2

Flex item 3

Flex item 1

Flex item 2

Flex item 3

Flex item 1

Flex item 2

Flex item 3

```
<div class="d-flex flex-row mb-3">
  <div class="p-2">Flex item 1</div>
  <div class="p-2">Flex item 2</div>
  <div class="p-2">Flex item 3</div>
</div>

<div class="d-flex flex-row-reverse mb-3">
  <div class="p-2">Flex item 1</div>
  <div class="p-2">Flex item 2</div>
  <div class="p-2">Flex item 3</div>
</div>

<div class="d-flex flex-column mb-3">
  <div class="p-2">Flex item 1</div>
  <div class="p-2">Flex item 2</div>
  <div class="p-2">Flex item 3</div>
</div>

<div class="d-flex flex-column-reverse">
  <div class="p-2">Flex item 1</div>
  <div class="p-2">Flex item 2</div>
  <div class="p-2">Flex item 3</div>
</div>
```

* * *

### Justify Content

Use justify-content utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if `flex-direction: column`). Choose from start (browser default), end, center, between, or around.

*   `.justify-content-start` (default) items anchored to the start
*   `.justify-content-end` - items anchored to the end
*   `.justify-content-center` - items centered
*   `.justify-content-between` - items evenly distributed in the line. First item in on the start and last item is at the end
*   `.justify-content-around` - start and end items are not to the edge but have 1 unit of space on each side

**Responsive Classes**

*   `.justify-content-[sm, md & lg]-[value]` for breakpoint and up

##### Example: Justify Content

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

```
<div class="d-flex justify-content-start mb-3">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex justify-content-end mb-3">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex justify-content-center mb-3">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex justify-content-between mb-3">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex justify-content-around mb-3">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex justify-content-evenly">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
```

* * *

### Align Items

Use `align-items` utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if `flex-direction: column`). Choose from `start`, `end`, `center`, `baseline`, or `stretch` (browser default).

*   `.align-items-start` - cross axis align items to start
*   `.align-items-end` - cross axis align items to end
*   `.align-items-center` - cross axis align items center
*   `.align-items-baseline` - align baselines
*   `.align-items-stretch` (default) - stretch to fill the container

**Responsive Classes**

*   `.align-items-[sm, md & lg]-[value]` for breakpoint and up

##### Example: Align Items

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

```
<div class="d-flex align-items-start mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-items-end mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-items-center mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-items-baseline mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex align-items-stretch" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
  </div>
```

* * *

### Align Self

Use `align-self` utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if `flex-direction: column`). Choose from the same options as align-items: `start`, `end`, `center`, `baseline`, or `stretch` (browser default).

*   `.align-self-start` - cross axis align items to start
*   `.align-self-end` - cross axis align items to end
*   `.align-self-center` - cross axis align items center
*   `.align-self-baseline` - align baselines
*   `.align-self-stretch` (default) - stretch to fill the container

**Responsive Classes**

*   `.align-self-[sm, md & lg]-[value]` for breakpoint and up

##### Example: Align Self

Flex item

Aligned flex item

Flex item

Flex item

Aligned flex item

Flex item

Flex item

Aligned flex item

Flex item

Flex item

Aligned flex item

Flex item

Flex item

Aligned flex item

Flex item

```
<div class="d-flex mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="align-self-start p-2">Aligned flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="align-self-end p-2">Aligned flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="align-self-center p-2">Aligned flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex mb-3" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="align-self-baseline p-2">Aligned flex item</div>
    <div class="p-2">Flex item</div>
  </div>
  <div class="d-flex" style="height: 100px">
    <div class="p-2">Flex item</div>
    <div class="align-self-stretch p-2">Aligned flex item</div>
    <div class="p-2">Flex item</div>
  </div>
```

* * *

### Flex Wrap

Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with .flex-nowrap, wrapping with .flex-wrap, or reverse wrapping with .flex-wrap-reverse.

*   `.flex-nowrap` (default) - Items are not allowed to wrap and will overflow if too wide.
*   `.flex-wrap` wraps content
*   `.flex-wrap-reverse` - Wraps in the opposite direction, i.e. first row is placed on bottom

**Responsive Classes**

*   `.flex-[sm, md & lg]-[value]` for breakpoint and up

##### Example: Flex Wrap

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

Flex item

```
<div class="d-flex flex-nowrap mb-3" style="width: 8rem;">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
</div>

<div class="d-flex flex-wrap mb-3">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
</div>

<div class="d-flex flex-wrap-reverse">
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
    <div class="p-2">Flex item</div>
</div>
```

* * *

### Order

Change the visual order of specific flex items with a handful of order utilities. We only provide options for making an item first or last, as well as a reset to use the DOM order.

*   `.order-{1-12}`
    

**Responsive Classes**

*   `.order-[sm, md & lg]-[value]` for breakpoint and up

##### Example: Order

First flex item

Second flex item

Third flex item

```
<div class="d-flex flex-nowrap">
  <div class="order-3 p-2">First flex item</div>
  <div class="order-2 p-2">Second flex item</div>
  <div class="order-1 p-2">Third flex item</div>
</div>
```

* * *

### Fill

Use the `flex-fill` class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space.

Flex item with a lot of content

Flex item

Flex item

```
<div class="d-flex flex-nowrap">
  <div class="flex-fill p-2">Flex item with a lot of content</div>
  <div class="flex-fill p-2">Flex item</div>
  <div class="flex-fill p-2">Flex item</div>
</div>
```

* * *

### Equal

Use the `flex-eq` class to allow a flex item to grow as needed, ignoring its initial size.

**Responsive Classes**

*   `.flex-[sm, md & lg]-eq` for breakpoint and up

Flex item with a lot of content

Flex item

```
<div class="d-flex flex-nowrap">
  <div class="flex-eq p-2">Flex item with a lot of content</div>
  <div class="flex-eq p-2">Flex item</div>
  <div class="flex-eq p-2"> </div>
</div>
```

* * *

### Grow and shrink

Use `.flex-grow-*` utilities to toggle a flex item’s ability to grow to fill available space. In the example below, the `.flex-grow-1` elements uses all available space it can, while allowing the remaining two flex items their necessary space.

Flex item

Flex item

Flex item

```
<div class="d-flex flex-nowrap">
  <div class="flex-grow-1 p-2">Flex item</div>
  <div class="p-2">Flex item</div>
  <div class="p-2">Flex item</div>
</div>
```

Use `.flex-shrink-*` utilities to toggle a flex item’s ability to shrink if necessary. In the example below, the second flex item with `.flex-shrink-1` is forced to wrap its contents to a new line, “shrinking” to allow more space for the previous flex item with `.w-100`.

Flex item

Flex item

```
<div class="d-flex flex-nowrap">
  <div class="w-100 p-2">Flex item</div>
  <div class="flex-shrink-1 p-2">Flex item</div>
</div>
```