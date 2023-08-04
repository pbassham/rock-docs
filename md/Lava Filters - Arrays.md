# Arrays
[View Original Source](https://community.rockrms.com/lava/filters/array-filters)

Working With Arrays
===================

These filters help you in working with arrays.

 [](#addtoarray)

AddToArray
==========

Show Details

Server: v13.0

Add a new item to an existing array.

**Additional Details**

It will create a new array if null or '' is used as the source array. While the examples use simple strings, you can add anything to an array - even entity objects such as a Group or Person.

**Example:**

```
"Items": \[
    "one"
\]
```

```
{% assign array = Items | AddToArray:'two' | AddToArray:'three' %}
<ul>
{% for item in array %}
    <li>{{ item }}</li>
{% endfor %}
</ul>
```

```
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
```

 [](#addtodictionary)

AddToDictionary
===============

Show Details

Server: v13.0

Takes an existing (or empty) dictionary and returns a new dictionary with the added key and value.

**Additional Details**

You can pass null or '' to initialize a new dictionary.

**Example:**

```
{% assign colors = '' | AddToDictionary:'success','green' | AddToDictionary:'warning','orange' | AddToDictionary:'error','red' %}
<div style='color:{{ colors\[""success""\]}}'>
    This request is approved.
</div>
<div style='color:{{ colors\[""warning""\]}}'>
    This request is incomplete.
</div>
<div style='color:{{ colors\[""error""\]}}'>
    This request is denied.
</div>

```

```
<div style='color:green'>
    This request is approved.
</div>
<div style='color:orange'>
    This request is incomplete.
</div>
<div style='color:red'>
    This request is denied.
</div>
```

 [](#allkeysfromdictionary)

AllKeysFromDictionary
=====================

Show Details

Server: v13.0

Retrieves all keys that exist in the dictionary object and returns them in an array.

**Additional Details**

**Example:**

```
"Object": {
    "Id": 23,
    "FirstName": "Ted",
    "LastName": "Decker"
}
```

```
{% assign keys = Object | AllKeysFromDictionary %}
<ul>
    {% for key in keys %}
    <li>{{ key }}</li>
    {% endfor %}
</ul>

```

```
<ul>
    <li>Id</li>
    <li>FirstName</li>
    <li>LastName</li>
</ul>

```

 [](#contains)

Contains
========

Show Details

Server: v8.0 Mobile: v1.0

The contains filter returns true if the specified value is in the array

**Additional Details**

**Example:**

```
"Fruits": \[
    "Banana",
    "Orange",
    "Banana",
    "Apple"
\]
```

```
{{ Fruits | Contains:'Banana' }}
```

```
true
```

**Note:**  
This filter only works with string arrays.

 [](#distinct)

Distinct
========

Show Details

Server: v13.0

Takes an array as input and returns the distinct (unique) elements of the array.

**Additional Details**

This works much like the Uniq filter, but it can be used on more complex objects. An optional parameter can be specified that will be used as the property name of the object when determining the uniqueness.

**Example:**

```
"Items": \[
    {
        "Person": {
            "Id": 1,
            "FirstName": "Ted",
            "LastName": "Decker"
        },
        "GroupId": 3
    },
    {
        "Person": {
            "Id": 2,
            "FirstName": "Cindy",
            "LastName": "Decker"
        },
        "GroupId": 4
    },
    {
        "Person": {
            "Id": 1,
            "FirstName": "Ted",
            "LastName": "Decker"
        },
        "GroupId": 4
    },
\]
```

```
{% assign array = Items | Distinct:'Person.Id' %}
<ul>
{% for item in array %}
    <li>{{ item.Person.FirstName }}</li>
{% endfor %}
</ul>

```

```
<ul>
    <li>Ted</li>
    <li>Cindy</li>
</ul>

```

 [](#first)

First
=====

Show Details

Server: v1.0 Mobile: v1.0

Returns the first item from an array/collection.

**Additional Details**

**Example:**

```
"CurrentPerson": {
    "PhoneNumbers": \[
        {
            "NumberFormatted": "(555) 555-5551"
        },
        {
            "NumberFormatted": "(555) 555-5552"
        },
        {
            "NumberFormatted": "(555) 555-5553"
        }
    \]
}
```

```
{% assign firstPhone = CurrentPerson.PhoneNumbers | First %}
The first phone number is {{ firstPhone.NumberFormatted }}.
```

```
The first phone number is (555) 555-5551.
```

 [](#groupby)

GroupBy
=======

Show Details

Server: v13.0

Takes a collection of items and groups them by the specified property tree value.

**Additional Details**

The returned data is a dictionary. Each distinct property tree value is represented as a key in the dictionary with all associated original objects as values of that key. As such, when iterating through the result you need to use the PropertyToKeyValue filter to get the key and the array of values.

**Example:**

```
"Members": \[
    {
        "GroupRole": {
            "Name": "Member"
        },
        "Person": {
            "FirstName": "Alex"
        }
    },
    {
        "GroupRole": {
            "Name": "Leader"
        },
        "Person": {
            "FirstName": "Ted"
        }
    },
    {
        "GroupRole": {
            "Name": "Member"
        },
        "Person": {
            "FirstName": "Cindy"
        }
    }
\]

```

```
{% assign groupedMembers = Members | GroupBy:'GroupRole.Name' %}
<ul>
{% for group in groupedMembers %}
    {% assign parts = group | PropertyToKeyValue %}
    <li>{{ parts.Key }}</li>
    <ul>
        {% for member in parts.Value %}
            <li>{{ member.Person.FirstName }}</li>
        {% endfor %}
    </ul>
{% endfor %}
</ul>

```

```
<ul>
    <li>Leader</li>
    <ul>
        <li>Ted</li>
    </ul>
    <li>Member</li>
    <ul>
        <li>Alex</li>
        <li>Cindy</li>
    </ul>
</ul>

```

 [](#index)

Index
=====

Show Details

Server: v7.0 Mobile: v1.0

Provides an easy way to retrieve an item from an array using its index when chaining filters.

**Additional Details**

**Example:**

```
"CurrentPerson": {
    "PhoneNumbers": \[
        {
            "NumberFormatted": "(555) 555-5551"
        },
        {
            "NumberFormatted": "(555) 555-5552"
        },
        {
            "NumberFormatted": "(555) 555-5553"
        }
    \]
}
```

```
{% assign secondPhone = CurrentPerson.PhoneNumbers | Index:1 %}
	
{{ secondPhone.NumberFormatted }}
```

```
(555) 555-5552
```

**Note:**  
Note that indexes are zero based (the first item is 0, the second is 1, etc.)

 [](#indexer)

Indexer
=======

Show Details

Server: v7.0

Returns the item at the specified index location in an array. Note that array numbering starts from zero, so the first item in an array is referenced with \[0\].

**Additional Details**

**Example:**

```
{% assign fruits = "orange apple banana orange" | Split:' ' %}
{{ fruits\[2\] }}
```

```
banana
```

**Note:**  
Note that indexes are zero based (the first item is 0, the second is 1, etc.)

 [](#join)

Join
====

Show Details

Server: v1.0 Mobile: v1.0

Combines the properties of an array with the character passed as the parameter.

**Additional Details**

**Example:**

```
"FavoriteColors" : \["Red", "Green", "Orange"\]
```

```
{{ FavoriteColors | Join:', ' }}
```

```
Red, Green, Orange
```

 [](#last)

Last
====

Show Details

Server: v1.0 Mobile: v1.0

Returns the last item from an array/collection.

**Additional Details**

**Example:**

```
"CurrentPerson": {
    "PhoneNumbers": \[
        {
            "NumberFormatted": "(555) 555-5551"
        },
        {
            "NumberFormatted": "(555) 555-5552"
        },
        {
            "NumberFormatted": "(555) 555-5553"
        }
    \]
}
```

```
{% assign firstPhone = CurrentPerson.PhoneNumbers | Last %}
The last phone number is {{ firstPhone.NumberFormatted }}.
```

```
The last phone number is (555) 555-5553.
```

 [](#map)

Map
===

Show Details

Server: v1.0 Mobile: v1.0

Takes a property of the array as a parameter and creates a string out of each array property value.

**Additional Details**

**Example:**

```
Campuses {
    {
        Name - Avalon Campus
        ShortCode - AVL
        Id - 1
    },
    {
        Name - Tacoma Campus
        ShortCode - TAC
        Id - 2
    },
    {
        Name - Corolla Campus
        ShortCode - COR
        Id - 3
    }
}
```

```
{{ Campuses | Map:'Name'  }}
```

```
Avalon CampusTacoma CampusCorolla Campus
```

 [](#orderby)

OrderBy
=======

Show Details

Server: v10.0 Mobile: v1.0

Orders a collection of elements by the specified property tree and returns a new collection in that order.

**Additional Details**

You can sort by multiple keys, for example you can sort by LastName and then by FirstName at once. Each key to sort by is separated by a comma (`,`) character. Each sorted property can change the default order from ascending (default) to descending by appending a space and `desc` to the property name.

For example, if you specify the order by property of `FirstName desc` then the collection will be sorted by `FirstName` and the results will be returned in descending order.

**Example:**

```
"Members": \[
    {
        "GroupRole": {
            "Name": "Member",
            "IsLeader": false
        },
        "Person": {
            "FirstName": "Alex"
        }
    },
    {
        "GroupRole": {
            "Name": "Leader",
            "IsLeader": true
        },
        "Person": {
            "FirstName": "Ted"
        }
    },
    {
        "GroupRole": {
            "Name": "Member",
            "IsLeader": false
        },
        "Person": {
            "FirstName": "Cindy"
        }
    }
\]
```

```
{% assign members = Members | OrderBy:'GroupRole.IsLeader desc,Person.FirstName' %}
<ul>
{% for member in members %}
    <li>{{ member.Person.FirstName }} - {{ member.GroupRole.Name }}</li>
{% endfor %}
</ul>
```

```
<ul>
    <li>Ted - Leader</li>
    <li>Alex - Member</li>
    <li>Cindy - Member</li>
</ul>
```

 [](#removefromarray)

RemoveFromArray
===============

Show Details

Server: v13.0

Take a collection of objects and return a new collection which does not contain the specified value.

**Additional Details**

**Example:**

```
"Items": \[
    "one",
    "two",
    "three"
\]

```

```
{% assign array = Items | RemoveFromArray:'two' %}
<ul>
{% for item in array %}
    <li>{{ item }}</li>
{% endfor %}
</ul>

```

```
<ul>
    <li>one</li>
    <li>three</li>
</ul>

```

**Note:**  
This filter only works with string arrays.

 [](#removefromdictionary)

RemoveFromDictionary
====================

Show Details

Server: v13.0

Removes the specified key from a dictionary of keys and values.

**Additional Details**

**Example:**

```
"Object": {
    "Id": 23,
    "FirstName": "Ted",
    "LastName": "Decker"
}
```

```
{% assign data = Object | RemoveFromDictionary:'FirstName' %}
{{ data | ToJSON }}

```

```
{
    "Id": 23,
    "LastName": "Decker"
}

```

 [](#reverse)

Reverse
=======

Show Details

Server: v14.0

Reverses the order of the items in an array.

**Additional Details**

**Example:**

```
{% assign my\_array = "apples, oranges, peaches, plums" | Split:", " %}

{{ my\_array | Reverse | Join:", " }}
```

```
plums, peaches, oranges, apples
```

 [](#select)

Select
======

Show Details

Server: v4.0 Mobile: v1.0

Returns a single property from an object.

**Additional Details**

**Example:**

```
"CurrentPerson": {
    "FullName": "Ted Decker"
    "PhoneNumbers":  \[
        {
            Number - 6235555551
            NumberFormatted - (623) 555-5551
            NumberTypeValueId - 12
        },
        {
            Number - 6235555552
            NumberFormatted - (623) 555-5552
            NumberTypeValueId - 13
        },
        {
            Number - 6235555553
            NumberFormatted - (623) 555-5553
            NumberTypeValueId - 136
        }
    \]
}
```

```
{{ CurrentPerson.NickName }}'s work phone is: {{ CurrentPerson.PhoneNumbers | Where:'NumberTypeValueId', 136 | Select:'NumberFormatted' }}.
```

```
Ted's work phone is: (623) 555-5553.
```

 [](#shuffle)

Shuffle
=======

Show Details

Server: v4.0 Mobile: v1.0

Randomizes the order of an array. Useful for ads on a homepage where you'd like a different ad to be first for each visit.

**Additional Details**

**Example:**

```
{
    \[0\] {
        "Id": 1,
        "Image": "<img src="/GetImage.ashx?Id=1>"
    },
    \[1\] {
        "Id": 2,
        "Image": "<img src="/GetImage.ashx?Id=2>"
    },
    \[2\] {
        "Id": 3,
        "Image": "<img src="/GetImage.ashx?Id=3>"
    }
}
```

```
{% assign randomOrderedAds = Items | Shuffle %}
    
{% for ad in randomOrderedAds %}
  <div class="item">
    <a href="{{ LinkedPages.DetailPage }}?Item={{ ad.Id }}">{{ ad.Image }}</a>
  </div>
{% endfor %}
```

```
<div class="item">
    <a href="AdDetail?Item=2"><img src="/GetImage.ashx?Id=2></a>
</div>

<div class="item">
    <a href="AdDetail?Item=3"><img src="/GetImage.ashx?Id=3></a>
</div>

<div class="item">
    <a href="AdDetail?Item=1"><img src="/GetImage.ashx?Id=1></a>
</div>
```

 [](#size)

Size
====

Show Details

Server: v1.0 Mobile: v1.0

Provides the number of items in the array.

**Additional Details**

**Example:**

```
"Person": {
    "PhoneNumbers": \[
        {
            "NumberFormatted": "(555) 555-5551"
        },
        {
            "NumberFormatted": "(555) 555-5552"
        },
        {
            "NumberFormatted": "(555) 555-5553"
        }
    \]
}
```

```
Ted has {{ Person.PhoneNumbers | Size }} phone numbers.

```

```
Ted has 3 phone numbers.
```

 [](#slice-arrays-)

Slice (arrays)
==============

Show Details

Server: v13.1

The slice filter (when used on an array) returns a subset of the given array, starting at the specified index. An optional second parameter can be passed to specify the length of the subset. If no second parameter is given, a subset of one item will be returned.

**Additional Details**

**Example:**

```
"List": \[
    1,
    2,
    3,
    4,
    5
\]
```

```
{% assign sublist = List | Slice:2,3 %}

<ul>
{% for i in sublist %}
    <li>{{ i }}</li>
{% endfor %}
</ul>
```

```
<ul>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>
```

**Note:**  
This only works using the Fluid engine and does not work using the older DotLiquid engine.

 [](#sort)

Sort
====

Show Details

Server: v1.0 Mobile: v1.0

Sorts a primitive array. To sort by the properties of an array, use OrderBy.

**Additional Details**

**Example:**

```
"Fruits": \[
    "Banana",
    "Orange",
    "Apple"
\]
```

```
{% assign fruitsSorted = Fruits | Sort %}

<ul>
{% for fruit in fruitsSorted %}
    <li>{{ fruit }}</li>
{% endfor %}
</ul>
```

```
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
</ul>
```

**Note:**  
The default sort order is always ascending. To create a decending sorted list use the Reverse filter.  
`{% assign fruitsSorted = Fruits | Sort | Reverse %}`

 [](#sortbyattribute)

SortByAttribute
===============

Show Details

Server: v5.0

Sorts an array of items based on an attribute value.

**Additional Details**

**Example:**

```
Campuses {
    {
        Id: 1
        Name: Avalon Campus
        (with Attribute 'SeatingCapacity': 250)
    },
    {
        Id: 2
        Name: Tacoma Campus
        (with Attribute 'SeatingCapacity': 150)
    },
    {
        Id: 3
        Name: Corolla Campus
        (with Attribute 'SeatingCapacity': 550)
    }
}
```

```
{% assign sortedItems = Items | SortByAttribute:'SeatingCapacity' %}

<ul>
{% for item in sortedItems %}
    <li>{{ item.Name }}: {{ item | Attribute:'SeatingCapacity' }}</li>
{% endfor %}
</ul>

```

```
<ul>
    <li>Tacoma Campus: 150</li>
    <li>Avalon Campus: 250</li>
    <li>Corolla Campus: 550</li>
</ul>

```

**Note:**  
As of Rock v7 you can pass an optional sort order with the values of 'asc' or 'desc' (default is asc if not specified).

 [](#sum)

Sum
===

Show Details

Server: v13.0

Performs a mathematical summation of all numeric values in an array and outputs the result.

**Additional Details**

**Example:**

```
"Items": \[
    { "Name": "Shirt", "Price": 15.25 },
    { "Name": "Sweater", "Price": 25.00 },
    { "Name": "Jacket", "Price": 45.50 }
\]

```

```
Total: ${{ Items | Select:'Price' | Sum }}

```

```
Total: $85.75

```

 [](#uniq)

Uniq
====

Show Details

Server: v8.0 Mobile: v1.0

Takes a collection of values and returns only the unique set of those values.

**Additional Details**

**Example:**

```
"Fruits": \[
    "Banana",
    "Orange",
    "Banana",
    "Apple"
\]
```

```
{{ Fruits | Uniq | Join:',' }}
```

```
Banana,Orange,Apple
```

 [](#where)

Where
=====

Show Details

Server: v4.0 Mobile: v1.0

This filter allows you to filter a collection of items by a key and value.

**Additional Details**

**Example:**

```
"CurrentPerson": {
    "FullName": "Ted Decker"
    "PhoneNumbers":  \[
        {
            Number - 6235555551
            NumberFormatted - (623) 555-5551
            NumberTypeValueId - 12
        },
        {
            Number - 6235555552
            NumberFormatted - (623) 555-5552
            NumberTypeValueId - 13
        },
        {
            Number - 6235555553
            NumberFormatted - (623) 555-5553
            NumberTypeValueId - 136
        }
    \]
}
```

```
Example 1:
{{ CurrentPerson.NickName }}'s work phone is: {{ CurrentPerson.PhoneNumbers | Where:'NumberTypeValueId', 136 | Select:'NumberFormatted' }}.

Example 2 (v12.3 and above):
{{ CurrentPerson.NickName }}'s other contact numbers are: {{ CurrentPerson.PhoneNumbers | Where:'NumberTypeValueId', 136, 'notequal' | Select:'NumberFormatted' | Join:', ' }}.


```

```
Ted's work phone is: (623) 555-5553.
Ted's other contact numbers are: (623) 555-5551, (623) 555-5552.
```

**Note:**  
As of Rock v12.3 you can pass an optional equality parameter with the values of 'equal' or 'notequal' as shown in Example 2. The default is 'equal' if the parameter is not specified.

Array Filters In Action
-----------------------

Reading through the filters above you might question the value of many of them. For instance what good is the 'Map' filter when it just returns a string of array values all smashed together (Avalon CampusTacoma CampusCorolla Campus). The power comes when you chain these filters together. Consider the kitchen sink example below.

```
{% assign sortedCampuses = Campuses | Sort:'Name' %}
{{ sortedCampuses | Map:'Name' | Join:', ' | ReplaceLast:',',' and' }}

Output:
Avalon Campus, Corolla Campus and Tacoma Campus

```