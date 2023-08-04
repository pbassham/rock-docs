# Fluid Differences
[View Original Source](https://community.rockrms.com/lava/fluid/differences)

Differences Between DotLiquid and Fluid
=======================================

There are a few things that won’t work, or will work differently, between DotLiquid and Fluid. Below is a list of items you’ll want to know about to make sure your Lava is ready for Fluid.

* * *

### [](#variablescannotstartwithnumber)Variables cannot start with a number.

DotLiquid:

```
{% assign 1st = 22 %}
{% assign 2nd = 3 %}

```

Fluid:

```
{% assign first = 22 %}
{% assign second = 3 %}

```

* * *

### [](#passingvariableswithincluderequirescommas)Passing variables with Include requires commas.

DotLiquid:

```
{% assign fruit = 'apples' %}
{% include 'template' myVariable:fruit otherVariable:'oranges' %}

```

Fluid:

```
{% assign fruit = 'apples' %}
{% include 'template', myVariable:fruit, otherVariable:'oranges' %}

```

* * *

### [](#sortascendingdescending)If you're working with an array, Sort Ascending/Descending no longer works (use OrderBy instead). Sort will continue to work with entity commands.

DotLiquid:

```
{% assign Campuses = person | Campus: 'All' %}
{% assign campusesSorted = Campuses | Sort:'Name', 'desc' %}

```

Fluid:

```
{% assign Campuses = CurrentPerson | Campus: 'All' %}
{% assign campusesSorted = Campuses | OrderBy:'Name desc' %}

```

* * *

### [](#includelavascopebehavior)Include Lava scope behavior.

In Fluid, overlapping named variables will no longer leak out of their inner scope, as shown in this example. In these examples, the included file (a.lava) contains the following:

```
{% assign a='B' %}
```
The Lava in a block has:
```
{% assign a = 'a' %}
a: {{ a }}
{% include 'a.lava' %}
  
a: {{ a }}

```
**Results:**  
In DotLiquid, the result is:
```
a: a
a: B
```
In Fluid, the result is:
```
a: a
a: a
```

* * *

### [](#doublesinglequotes)Double/Single quotes in mixed usage.

Starting Lava:

```
{% assign example = 'I can't see the issue.' %}
example: {{ example }}

```

DotLiquid Results:  
example: I can

Fluid Results:  
\[Error\]

Use Double Quotes Instead:

```
{% assign example = "I can't see the issue." %}

```

* * *

### [](#nestedcommenttags)Nested Comment tags are not supported in Fluid.

DotLiquid:

```
{% comment %}
Outer Comment
{% comment %}Inner Comment{% endcomment %}
{% endcomment %}
Start of Text

```

Fluid:

```
{% comment %}
Outer Comment
Inner Comment
{% endcomment %}
Start of Text

```

* * *

### [](#conditionaloperatordoubleampersand)The conditional operator “&&” is not supported in Fluid (use “and” instead).

DotLiquid:

```
{% if personAge > 18 && personAge < 55 %}

```

Fluid:

```
{% if personAge > 18 and personAge < 55 %}

```

* * *

### [](#unrecognizedescapesequence)If Fluid encounters an unrecognized escape sequence (i.e. any sequence that begins with a \\ but is not a documented escape sequence), it will cause an error. This mostly impacts RegEx filters.

DotLiquid:

```
{% assign isValidEmail = 'ted@test.com' | RegExMatch:'\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([- .]\w+)*' %}

```

Fluid:

```
{% capture expression %}\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*{% endcapture %}
{% assign isValidEmail = 'ted@test.com' | RegExMatch: expression %}

```

* * *

### [](#emptyoutputtag)The empty output tag is no longer supported in Fluid, but a workaround exists.

DotLiquid:

```
{{​- -​}}

```

Fluid:

```
{{​- '' -​}}

```

* * *

### [](#splitfilter)The Split filter behaves differently in Fluid, as it will return a ‘0’ when the contents of the array are empty or null. Lava:

```
{{ '' | Split:',' | Size }}
or
{{ null | Split:',' | Size }}
DotLiquid Result:
1
Fluid Result:
0

```

Also note that “bad” Lava will not render any content in Fluid. DotLiquid tended to render out what it could, whether it was good or bad Lava, but this is no longer the case.