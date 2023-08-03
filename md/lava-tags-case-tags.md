# 
from:lava-tags-case-tags.html

Case
====

The case statement is helpful when you have more than a couple of conditions.

Overview
--------

The syntax of the `case` statement is simple to comprehend.

```
{% case Person.NickName %}
{% when 'Ted' %}
    Hi Ted!
{% when 'Alisha' or 'Bill' %}
    Hello Marbles!
{% else %}
    Have we met?
{% endcase %}
```
_Case works with strings. If you need to do anything with numbers, etc. then use the if/else tag._