# 
from:lava-style.html

Lava Style Guide
================

Consistent style and formatting are key to create maintainable projects. By keeping our code style consistent, we not only help ourselves, but we also lighten the load on those that will have to maintain our code.

General Formatting Rules
------------------------

### Indentation

Always indent by 4 spaces at a time.

Don’t use tabs or mix tabs and spaces for indentation.

```
{% if Person.NickName %}
    Hello {{ Person.NickName }}!
{% else %}
    Hi! Consider logging in for a more personal experience.
{% endif %}

```

### Linebreaks

Always separate lava tags `{% %}` by new lines. Insert a line break where appropriate for lava objects. `{{ }}`

```
{% for campus in Campuses %}{% assign campusPastor = campus | Attribute:'Pastor','Object' %}
    <h2>{{ campus.Name }}</h2>
    <p>{{ campus.Description }}</p>
    <span>{{ campusPastor.FirstName }}{{ campusPastor.LastName }}</span>
{% endfor %}

```

### Trailing Whitespace

Remove trailing white spaces. Trailing white spaces are unnecessary and can complicate diffs.

General Meta Rules
------------------

### Comments

Explain code as needed, where possible using the lava comment block.

Comments should always be on their own line.

```
{% comment %}This is a single line comment{% endcomment %}{% comment %}
This is a good example of a multi-line comment, that spans multiple lines
when needed.
{% endcomment %}

```

Lava Formatting Rules
---------------------

### Tags

Tags should have one space before and after the tag.

```
{% for item in collection %}{{ item.Title }}{% endfor %}

```

### Filters

Filters should be separated by a single space between the bar and filter name, and no space between the filter name and the filter parameter.

When quoting attribute values inside a lava tag, use single quotation marks.

**Good:**

```
 {{ 'Now' | Date:'M/d/yyyy' }}

```

**Bad:**

```
 {{ 'Now' |  Date: 'M/d/yyyy' }}

```

### Variable Naming & Capitalization

When assigning a variable use camel case, with a lowercase first letter to differentiate from variables provided directly by Rock.

```
{% assign campus = Campuses | First %}{% assign firstCampus = Campuses | First %}

```

### Whitespace Control

You can use whitespace control to output minimal, clean and readable HTML code.

In Lava, you can include a hyphen in your tag syntax `{{-`, `-}}`, `{%`, and `%}` to strip whitespace from the left or right side of a rendered tag.

```
{%- for item in collection -%}{{ item.Title }}{%- endfor -%}

```

HTML Formatting Rules
---------------------

### HTML Quotation Marks

When quoting attributes values, use double quotation marks.

Use double (`""`) rather than single quotation marks (`''`) around attribute values. Except where absolutely necessary. Single quotation marks (`''`) are used for lava filters and can complicate readability.

```
<a class="btn" href="#">Sign in</a>

```