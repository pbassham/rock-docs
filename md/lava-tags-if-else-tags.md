# 
from:lava-tags-if-else-tags.html

If...Else...EndIf
=================

The `if` tag is the foundation of conditional logic in Lava. While simple in its syntax there are a couple of nuggets of wisdom you'll want to understand to maximize its effectiveness.

Basics
------

Below is the basic usage pattern for 'if' conditions.

```
{% if Person.NickName == 'Ted' %}
    Great Guy!
{% else​if Person.NickName == 'Alisha' %}
    Great Gal!
{% else %}
    Who are you?
{% endif %}
```

**Time Saving Tip:** Note that the 'elseif' in Lava does not have a space in it. If you're used to languages like C# that do you could get some frustrating results that may end in premature hair loss. There, you're welcome.

**Warning:** You may be tempted to use filters in your `if` statement. That won't work. You must first create a variable for your filtered content and then use that variable in your if statement.

The if statement takes the following operators:

<table class="table table-striped"><tbody><tr><td>==</td><td>equals</td></tr><tr><td>!=</td><td>not equal</td></tr><tr><td>&gt;</td><td>greater than</td></tr><tr><td>&lt;</td><td>less than</td></tr><tr><td>&gt;=</td><td>greater than or equal</td></tr><tr><td>&lt;=</td><td>less than or equal</td></tr><tr><td>or</td><td>condition A <strong>or</strong> condition B</td></tr><tr><td>and</td><td>condition A <strong>and</strong> condition B</td></tr><tr><td>contains</td><td>checks for the presence of a substring inside a string</td></tr></tbody></table>

Checking for Things That Don't Exist
------------------------------------

Checking for things that don't exist is a common task. In Lava that's simple... if you know a couple of test options. Let's see...

### Testing If A Property Exists

The first test is to check if a property even exists. Consider this example.

```
Input:
"Person": {
    "FullName": "Ted Decker"
}

{% if Person.CallSign %}
    {{ Person.FullName }} you have a call sign... you must be cool!
{% else %}
    Oh... hi {{ Person.FullName }}
{% endif %}
```

### Testing For An Empty Property

This next test tests if an existing property is empty. Consider...

```
Input:
"Person": {
    "FullName": "Ted Decker",
    "MiddleName": ""
}

{% if Person.MiddleName == '' %}
    {{ Person.FullName }}, what no middle name?!
{% endif %}
```

In the example above the Person has a MiddleName property but it's empty so the message will be displayed.

You can test for the existence of a property and if it contains a value in a single statement like:
```
{% if Person.NickName and Person.NickName != empty %}
```

### Testing For Empty Arrays

To check for an empty array you could test the size of an array, but it would be easier to test with the evaluation below.

```
{% if Person.PhoneNumbers != empty %}
    You have phone numbers
{% endif %}
```

Checking Non-Text Things[](#checkingnontext)
--------------------------------------------

It's nice when things are simple text strings, but sometimes you need to compare things like dates, numbers (integers or doubles), and true or false things (booleans). In these cases you can use the special [_As\*\*\*\*\*_](https://community.rockrms.com/lava/filters/other-filters#asboolean) filters to convert something to the correct "type" of data.

```
{% assign isTrained = CurrentPerson | Attribute:'IsTrained' | AsBoolean %}
{% assign age = CurrentPerson | Attribute:'AgeInYears' | AsInteger %}
{% assign date = CurrentPerson | Attribute:'BaptismDate' | AsDateTime %}
```

If you didn't convert your number-string to an actual number, your "3" would be considered greater than the number 10:

```
{% assign AgeInYears = CurrentPerson | Attribute:'AgeInYears' %}
AgeInYears: "{{ AgeInYears }}"<br>

{% if AgeInYears > 10 %} 
    {{ AgeInYears }} is greater than 10???
{% endif %}

-- renders --
AgeInYears: "3"
3 is greater than 10???


```

### True, False, or null

When checking boolean attributes, we recommend you always use the [_AsBoolean_](https://community.rockrms.com/lava/filters/other-filters#asboolean) filter before comparing to `true` or `false`. You might also be interested in knowing that a value could also be `null` if the value has not yet been set.

```
{% assign isTrained = CurrentPerson | Attribute:'IsTrained' | AsBoolean %}
isTrained is : "{{ isTrained }}"<br>

{% if isTrained == true %}
    Evaluates to true
{% else​if isTrained == false %} 
    Evaluates to false
{% else​if isTrained == null %} 
    Evaluates to null -- meaning there is no value stored
{% else %}
    Evaluates to something else?
{% endif %}

-- renders --
isTrained is : ""
Evaluates to null -- meaning there is no value stored

```

Order of Operations
-------------------

When using more than one `and` or `or` operator, operators are checked in order from _right to left_. You cannot change the order of operations using parentheses — parentheses are invalid characters and will prevent your tags from working.

```
{% if true or false and false %}
  This evaluates to true, since the 'and' condition is checked first.
{% endif %}
```