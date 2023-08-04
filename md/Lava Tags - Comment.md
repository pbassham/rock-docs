# Comment
[View Original Source](https://community.rockrms.com/lava/tags/comment-tags)

Comment
=======

Some people like to document what their code does for future use (others think their code is self documenting but that's another topic). The comment tag is for that first group.

Usage
-----

In a sense the `comment` tag swallows up any content that's inside it so it will never be seen again...

```
{% comment %}
   It's nice being able to write here knowing no one will ever be able to read it...
{% endcomment %}
```

**Note:** If you include incorrect Lava inside the `comment` tag it will produce an error. However, you can use the `raw` and `endraw` tags and wrap that with the comment tag to prevent that from happening.

**Warning:** Nesting the `comment` tag is not supported and it will produce an error.

Single Line and Multiline Lava Comments

v12.0


------------------------------------------------

These are two additional light weight ways to create comments in your Lava. `//-` is for commenting a single line and `/-` with `-/` is for multiline comments.

The comments will be stripped out before anything is sent to the browser.

### Examples

```
//- This is my favorite Lava for creating an array:
{% assign list = '1,2,3,4,5,6,7,8,9,10' | Split: ',' %}

```
```
/- 
    This Lava may seem complex, but let me explain it to you...
    ...
    See, that was not so bad, right?
-/
{% assign sortedCampuses = Campuses | Sort:'Name' %}
{{ sortedCampuses | Map:'Name' | Join:', ' | ReplaceLast:',',' and' }}

```