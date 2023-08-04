# Lava
[View Original Source](https://community.rockrms.com/lava/tags/lava-tags)

Lava

v13.7 Fluid


===================

Ever feel like you type {% %} too much? Perhaps, text on those keys on your keyboard are worn off? The `lava` tag may be able to help. Syntax inside of the `lava` tag is basically reversed. Instead of 'tagging' keywords, and everything else is text to be displayed, you need to 'tag' text to display (using the `echo` command) and everythinge else is assumed to be code.

Confused...? Don't worry an example will help!

**Note** This tag is only available with the Fluid Lava engine.

Traditional Lava
----------------

The example below shows how we'd normally format our Lava. This Lava takes the number of groups an individual is in and determines if that number is a recommended number. It also prints a friendly message based on the number.

```
{% case numberOfGroups %}
    {% when 0 %}
        {% assign recommendedNumber = false %}
        It's time to get into a group
    {% when 1 %}
        {% assign recommendedNumber = true %}
        It's great that you're in a group!
    {% when 2 %}
        {% assign recommendedNumber = true %}
        Wow, two groups, that's great!
    {% when 3 %}
        {% assign recommendedNumber = false %}
        Hey there over-achiever, it may be time to slow down!
    {% else %}
        {% assign recommendedNumber = false %}
        Please see a pastor, you're in way too many groups
{% endcase %}
Recommended Number: {{ recommendedNumber }}
```

Using the Lava Tag
------------------

The same code is now shown using the `lava` command. Note that there is no closing "endlava" tag.

```
{% lava 
    case numberOfGroups
        when 0
            assign recommendedNumber = false
            echo "It's time to get into a group"
        when 1
            assign recommendedNumber = true
            echo "It's great that you're in a group!"
        when 2
            assign recommendedNumber = true
            echo "Wow, two groups, that's great!"
        when 3
            assign recommendedNumber = false
            echo "Hey there over-achiever, it may be time to slow down!"
        else
            assign recommendedNumber = false
            echo "Please see a pastor, you're in way too many groups"
    endcase %}
Recommended Number: {{ recommendedNumber }}
```

When To Use
-----------

You should consider using this command in areas of your code that focus on logic vs formatting output. In these use cases your code will be easier to read.

Tips
----

Below are a couple of tips to remember:

1.  At first you'll find it hard to write code in the `lava` tag. For the most part just remember that every tag is still needed. Often you'll find that you forget to use the end tag. Don't worry the Lava compiler will remind you 😉.
2.  You can `echo` the contents of variables like so:  
    ```
    echo numberOfGroups
    ```
      
    Note that you can't echo the contents of a variable and literal text in one echo tag. In these cases you'll need two echo tags on separate lines.