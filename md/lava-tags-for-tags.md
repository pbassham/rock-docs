# 
from:lava-tags-for-tags.html

For
===

The for tag is the main iteration (loop) mechanism in Lava. While it's fairly simple to use it does have some powerful tools to allow you to do some creative things.

Basic Usages
------------

The `for` tag is simple to implement over arrays of objects.

```
{% for campus in Campuses %}
    {{ campus.Name }}
{% endfor %}
```

Helper Variables
----------------

During every for loop the following helper variables are available to assist in building magic.

forloop.length

total number of times the loop will iterate

forloop.index

index of the current iteration

forloop.index0

zero based index of the current iteration

forloop.rindex

number of iterations left

forloop.rindex0

zero based number of iterations left

forloop.first

boolean set to true if this is the first iteration

forloop.last

boolean set to true if this is the last iteration

Influencing Iterations
----------------------

You can control the number, starting position and direction of your iterations. Don't believe us? Try these attributes...

limit:int

limit to the number of iterations

offset:int

starts the iteration at the nth item

reversed

let the last be first and the first last ([Matt 20:16](https://www.biblegateway.com/passage/?search=Matthew%2020:16))

Let's see that in action... all at once now...

```
{% for campus in Campuses limit:2 offset:1 reversed %}
    {{ campus.Name }}
{% endfor %}
```

An Alternate For Loop
---------------------

There's a slightly different way to iterate through arrays. Consider the example below.

```
{% assign campusCount = Campuses | Size | Minus:1 %}

{% for i in (0..campusCount) %}
    {{ i | Plus:1 }}. {{ Campuses\[i\].Name }}
{% endfor %}
```

This is helpful as a replacement for a while loop. Consider this example where we'd like to list years starting from 2 years ago and ending with the current year.

```
{% assign currentYear = 'Now' | Date:'yyyy' %}
{% assign startYear = currentYear | Minus: 2 %}

{% for year in (startYear..currentYear) %}
    {{ year }}
{% endfor %}
```

Break and Continue Tags

v6.0


-------------------------------

These two tags give you a little more control _for_ those times when you just don't want to process through a whole list.

### Break Usage

The `break` tag interrupts processing inside a for loop and jumps out of the loop.

```
{% assign list = "1,2,3,4,5,6,7,8,9,10" | Split: "," %}
{% for i in list %}{{ i }}  
{% if i > 3 %}{% break %}{% endif %}{% endfor %}

-- output --
1
2
3
4
```

### Continue Usage

The `continue` tag interrupts processing inside a for loop and skips to the next item in the loop.

```
{% assign list = "1,2,3,4,5,6,7,8,9,10" | Split: "," %}
{% for i in list %}{% if i == '3' %}{% continue %}{% endif %}{{ i }}  
{% endfor %}

-- output --
1
2
4
5
6
7
8
9
10
```
More complex example skipping the 'Mobile' type number for Ted Decker
```
{% for phone in Person.PhoneNumbers %}
    {% if phone.NumberTypeValue.Value == 'Mobile' %}{% continue %}{% endif %}
    {{ phone.NumberTypeValue.Value }}: {{ phone.NumberFormatted }}  
{% endfor %}

-- output --
Home: (623) 555-3322
Work: (623) 555-2444


```

**Note:** Both break and continue tags, if used outside of a `for` loop, will abort the entire rendering, without any errors. This is not a supported mechanism for flow control.

### Else Usage

Fluid Only

The `else` tag allows you to provide content when the collection you are iterating over does not have any items.

```
{% for group in groups %}
  {{ group.Name }}
{% else %}
  There are no groups available.
{% endfor %}
```