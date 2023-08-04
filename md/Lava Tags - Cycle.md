# Cycle
[View Original Source](https://community.rockrms.com/lava/tags/cycle-tags)

Cycle
=====

Often a need will arise to alternate between different values (CSS classes, colors, etc.) While you can do this manually yourself, the cycle tag simplifies this task immensely.

Cycle tags are especially useful when used inside of iterating tags like the for tag.

Basic Usage
-----------

The cycle tag takes a list of strings and alternates which is displayed in order.

```
{% cycle 'red', 'green', 'blue' %}
{% cycle 'red', 'green', 'blue' %}
{% cycle 'red', 'green', 'blue' %}

-- output --
red
green
blue
```

Cycle Groups
------------

What's better than a single motorcycle rider...? Yep, a biker gang! Lava cycle tags similarly (or maybe not so similarly) can be grouped together. This allows you to have several separate cycle tags going at once.

```
{% cycle 'colors': 'red', 'green', 'blue' %}
{% cycle 'colors': 'red', 'green', 'blue' %}
{% cycle 'colors': 'red', 'green', 'blue' %}

{% cycle 'numbers': 'one', 'two', 'three' %}
{% cycle 'numbers': 'one', 'two', 'three' %}
{% cycle 'numbers': 'one', 'two', 'three' %}

-- output --
red
green
blue

one
two
three
```