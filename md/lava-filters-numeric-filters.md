# 
from:lava-filters-numeric-filters.html

Numeric Filters
===============

Numeric filters work with numbers to do some incredible things. For those that hate numbers you can convert them to pretty strings, for those that like them you can do all kinds of crazy math using them.

 [](#atleast)

AtLeast
=======

Show Details

Server: v9.0 Mobile: v1.0

Limits a number to a minimum value.

**Additional Details**

**Example:**

```
"Image": {
    "Width": 720,
    "Height": 480
}
```

```
<img src="..." style="width:{{ Image.Width | AtLeast:1080 }}px">
```

```
<img src="..." style="width:1080px">
```

 [](#atmost)

AtMost
======

Show Details

Server: v9.0 Mobile: v1.0

Limits a number to a maximum value.

**Additional Details**

**Example:**

```
"Image": {
    "Width": 1920,
    "Height": 1080
}
```

```
<img src="..." style="height:{{ Image.Height | AtMost:720 }}px">
```

```
<img src="..." style="height:720px">
```

 [](#ceiling)

Ceiling
=======

Show Details

Server: v4.0 Mobile: v1.0

Takes a number and returns the next largest integer.

**Additional Details**

**Example:**

```
"Values": {
    "NumberOne": 2.6,
    "NumberTwo": 7.2
}

```

```
The next largest integer of {{ Values.NumberTwo }} is {{ Values.NumberTwo | Ceiling }}.
```

```
The next largest integer of 7.2 is 8.
```

 [](#dividedby)

DividedBy
=========

Show Details

Server: v1.0 Mobile: v1.0

Divides a number by the number provided.

**Additional Details**

**Example:**

```
"Values": {
    "InventoryTotal": 10000,
    "Quantity": 100
}
```

```
Each item costs ${{ Values.InventoryTotal | DividedBy:Values.Quantity }}.
```

```
Each item costs $100.
```

**Note:**  
In Rock version v4.0 an additional parameter was added to this filter to round the result to a given precision.  
```
{{ 12.434 | DividedBy:6,2 }}
```
Would round the result to the nearest two decimal places (2.07).

 [](#floor)

Floor
=====

Show Details

Server: v4.0 Mobile: v1.0

Takes a number and returns the next smallest integer.

**Additional Details**

**Example:**

```
"Values": {
    "NumberOne": 2.6,
    "NumberTwo": 7.2
}
```

```
The next smallest value of {{ Values.NumberOne }} is {{ Values.NumberOne | Floor }}.
```

```
The next smallest value of 2.6 is 2.
```

 [](#format)

Format
======

Show Details

Server: v4.0 Mobile: v1.0

Formats the number based on a pattern you provide.

**Additional Details**

Takes a pattern or short code and formats the number accordingly. You can find a list of short codes at the [.Net documentation site](https://msdn.microsoft.com/en-us/library/dwhawy9k%28v=vs.110%29.aspx). You can also use patters like '#,##0.00' to format a number to have commas and two decimal places.

**Example:**

```
"Values": {
    "LastGift": "1200.23"
}
```

```
Ted's last gift was for 
{{ 'Global' | Attribute:'CurrencySymbol' }}{{ Values.LastGift | Format:'#,##0.00' }}.
```

```
Ted's last gift was for $1,200.23.
```

 [](#formatascurrency)

FormatAsCurrency
================

Show Details

Server: v4.0 Mobile: v1.0

Provides a simple way to display an internationalized currency amount. The filter uses the currency symbol defined in the 'OrganizationCurrencyCode' global attribute.

**Additional Details**

**Example:**

```
"Values": {
    "LastGift": "1200.23"
}
```

```
Ted's last gift was for 
{{ Values.LastGift | FormatAsCurrency }}.
```

```
Ted's last gift was for $1,200.23.
```

 [](#minus)

Minus
=====

Show Details

Server: v1.0 Mobile: v1.0

Subtracts a number from the number provided.

**Additional Details**

**Example:**

```
"Values": {
    "RsvpMen": 10,
    "RSVPWomen": 2
}
```

```
There are {{ Values.RsvpMen | Minus:Values.RsvpWomen }} more men than women.
```

```
There are 8 more men than women.
```

 [](#modulo)

Modulo
======

Show Details

Server: v1.0 Mobile: v1.0

The modulo filter returns the remainder of division of one number by another.

**Additional Details**

**Example:**

```
"Values": {
    "NumberOne": 7,
    "NumberTwo": 3
}
```

```
The remainder is {{ Values.NumberOne | Modulo:Values.NumberTwo }}.
```

```
The remainder is 1.
```

 [](#numbertoordinal)

NumberToOrdinal
===============

Show Details

Server: v1.0 Mobile: v1.0

Takes 1, 2 or 3 and returns 1st, 2nd or 3rd.

**Additional Details**

**Example:**

```
"Values": {
    "RacerName": "Ted Decker",
    "Place": "2"
}
```

```
{{ Values.RacerName }} came in {{ Values.Place | NumberToOrdinal }} place.
```

```
Ted Decker came in 2nd place.
```

 [](#numbertoordinalwords)

NumberToOrdinalWords
====================

Show Details

Server: v1.0 Mobile: v1.0

Takes 1, 2 or 3 and returns first, second or third.

**Additional Details**

**Example:**

```
"Values": {
    "RacerName": "Ted Decker",
    "Place": "2"
}
```

```
{{ Values.RacerName }} came in {{ Values.Place | NumberToOrdinalWords }} place.
```

```
Ted Decker came in second place.
```

 [](#numbertoromannumerals)

NumberToRomanNumerals
=====================

Show Details

Server: v1.0 Mobile: v1.0

For those Latin lovers, this filter takes a number and returns its Roman numeral equivalent.

**Additional Details**

**Example:**

```
"Values": {
    "Quantity": "26"
}
```

```
Hodie vaccae lac {{ Values.Quantity | NumberToRomanNumerals }}.
```

```
Hodie vaccae lac XXVI.
```

 [](#numbertowords)

NumberToWords
=============

Show Details

Server: v1.0 Mobile: v1.0

Takes 1, 2 or 3 and returns one, two or three.

**Additional Details**

**Example:**

```
"Values": {
    "Quantity": "3"
}
```

```
There are {{ Values.Quantity | NumberToWords }} units.
```

```
There are three units.
```

 [](#plus)

Plus
====

Show Details

Server: v1.0 Mobile: v1.0

Adds a number to the number provided.

**Additional Details**

**Example:**

```
"Values": {
    "RsvpMen": 10,
    "RSVPWomen": 2
}
```

```
There are {{ Values.RsvpMen | Plus:Values.RsvpWomen }} coming to the event.
```

```
There are 12 coming to the event.
```

 [](#randomnumber)

RandomNumber
============

Show Details

Server: v13.0

Generates a random number between 0 and up to (but not including) the number you pass in as input.

**Additional Details**

The random number is non-inclusive of the input value, meaning if you pass in 100 then you get a random number in the range of 0-99.

**Example:**

```
<p>The lottery number is {{ 100 | RandomNumber }}.</p>
```

```
<p>The lottery number is 83.</p>
```

 [](#times)

Times
=====

Show Details

Server: v1.0 Mobile: v1.0

Multiplies a number by the number provided.

**Additional Details**

**Example:**

```
"Values": {
    "Cost": 10,
    "Quantity": 200
}
```

```
There are ${{ Values.Cost | Times:Values.Quantity }} worth of inventory.
```

```
There are $2000 worth of inventory.
```

 [](#toquantity)

ToQuantity
==========

Show Details

Server: v1.0 Mobile: v1.0

Many times you want to call Singularize and Pluralize to prefix a word with a number; e.g. "2 requests", "3 men". ToQuantity prefixes the provided word with the number and accordingly pluralizes or singularizes the word.

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
{% assign phonecount = Person.PhoneNumbers | Size %}
Ted has {{ 'phone number' | ToQuantity:phonecount }}.
```

```
Ted has 3 phone numbers.
```

 [](#tostring)

ToString
========

Show Details

Server: v1.0 Mobile: v1.0

Converts a number to a string.

**Additional Details**

**Example:**

```
"Pagination": {
    "NextPage": 2,
    "UrlTemplate": "/page/346?Page=PageNum"
}
```

```
{% assign nextPageString = Pagination.NextPage | ToString %}
<a href="{{ Pagination.UrlTemplate | Replace:'PageNum', nextPageString }}">Next</a>
```

```
<a href="/page/346?Page=2">Next</a>
```