# 
from:lava-tags-variable-tags.html

Assign and Capture Tags
=======================

As you become more familiar with Lava you'll find it necessary to start creating your own variables for use in your templates. This guide will walk you through several options you have in creating and using variables within Lava.

Starting Simple
---------------

The simplest way to create a variable is with the `assign` tag. Its usage is pretty straight forward.

```
{% assign name = 'Ted Decker' %}
Oh it's you {{ name }}...
```

Just keep in mind that variables must not contain spaces. You can have a variable called `fullname` but `full name` won't work.

Note: If you have a single quote character (') in your raw string you must encode it as ASCII code `&#39` or use double quotes for the string in the assign.

Going Deeper
------------

A more realistic sample of using variables might be one that uses them with filters and conditional logic.

```
{% assign hour = 'Now' | Date:' H' %}

{% if hour <= 12 %}
    Good Morning!
{% elseif hour < 6 %}
    Good Afternoon!
{% else %}    
    Good Evening!
{% endif %}
```

Complex Assignments
-------------------

If you would like to combine several strings into a single variable you can use the `capture` tag. This tag 'captures' whatever is rendered inside it and stores it into a variable instead of displaying it on the screen.

```
{% capture message %}{{ Person.NickName }} is a {{ Person.ConnectionStatusValue.Value }}{% endcapture %}
{{ message }}
```