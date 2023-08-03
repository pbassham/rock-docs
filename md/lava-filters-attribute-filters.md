# 
from:lava-filters-attribute-filters.html

Attribute Filters
=================

If you've worked with Rock for any length of time, you know Attributes are a key feature of its extensibility. Lava allows you to work with them in several powerful ways.

Finding Attributes
------------------

Most places that support Lava allow you to enable a "Debug" mode that lists all of the merge fields available. Fields that have "Attributes" show you those that are available; like so:

![](/Content/RockExternal/Lava/Images/enable-debug-attributes.png)

Using Attributes In Lava
------------------------

Now that you know what's available to you, let's look at several ways we can access and use these attributes.

To get the attribute from a lava object, use the syntax below.

```
{{ CurrentPerson | Attribute:'BaptismDate' }}
```

This will return a string representation of the attribute. Sometimes you may want more from attributes though; especially if the attribute is a type like "Person," which has several more properties. To gain access to these properties you can add an optional filter qualifier, where the qualifier value maps to the property you want to display.

```
Mentor: {{ CurrentPerson | Attribute:'Mentor','LastName' }}
```

### Attribute Inception

Hopefully, you're starting to see the power Lava with attributes. But what if you're wanting the attributes of an attribute? Take for instance the "School" attribute on a person. This attribute is actually a defined value that can have its own properties and attributes. You can access these additional attributes like this:

```
{% assign school = CurrentPerson | Attribute:'School','Object' %}
{{ school.Value }} // displays a property
{{ school | Attribute:'Grades' }} // displays an attribute
```

Note that the optional parameter "Object" tells the filter to return the full object and not just a string.

### Looping Over Attributes

With the help of the enable debug window you often know exactly what attributes are available for you to use. Sometimes though the attributes available will change based on the item that's merged. For instance groups will often have different attributes available depending on the specific group that is provided. If you would like to list out all of the attributes available for the specific merge field you can use the Lava below.

```
{% for attribute in CurrentPerson.AttributeValues %}
    {{ attribute.AttributeName }}: {{ attribute.ValueFormatted }}
{% endfor %}
```

**Note:** This `.AttributeValues` Lava property skips the security check so you can examine the value and decide what action you want to take. With great power comes great responsibility.

Global Attributes
-----------------

Global attributes are a little different. You can access them using the notation below:

```
{{ 'Global' | Attribute:'OrganizationName' }}
```

System Settings Rock v10.3+
---------------------------

System Settings are similar to 'Global' Global Attributes but are generally not visible from the Rock administrative UI as they are typically used internally by the system. In the obscure situation where you have a custom block and need access to a system setting value from your Lava, you can access using a similar notation below:

```
{{ 'SystemSetting' | Attribute:'SomeSpecialKey' }}
```

**Note:** This filter argument skips the security check and does not retrieve the _Attribute_ from the database. It simply returns the _raw value_ (with any merge fields evaluated). This is intentional.

What's Under the Hood?
----------------------

When you get an attribute's value you're often getting its nicely formatted value. Sometimes you may wish to get it's underlying stored value. This is often helpful when you need to use it as a link or perhaps use it in a query. Using the 'raw' syntax below will give you the underlying value.

```
{{ 'Global' | Attribute:'OrganizationName','RawValue'  }}
```

Other Return Values Rock v15.0+
-------------------------------

There are a couple of other return types that you can choose to return. These are listed below.

```
{{ CurrentPerson | Attribute:'OrganizationName','TextValue'  }}
{{ CurrentPerson | Attribute:'OrganizationName','HtmlValue'  }}
{{ CurrentPerson | Attribute:'OrganizationName','CondensedTextValue'  }}
{{ CurrentPerson | Attribute:'OrganizationName','CondensedHtmlValue'  }}

```

Yeah But I Really Wanted a Link...
----------------------------------

If it's a link you want it's a link you'll get. Well... most of the time. If the attribute inherits from 'ILinkableFieldType' (currently only 'Person' in core) or is an image or file you get exactly what you're looking for. For instance the 'Image' attribute would return a link ('http://rock.rocksolidchurchdemo.com/GetImage.ashx?guid=AF17CB8E-BA9C-4D2E-AB49-1FBE8A94A49D') to the image.

```
{{ 'Global' | Attribute:'OrganizationName','Url'  }}
```

OK... How Do I Read An Attribute That's A Key/Value Pair?
---------------------------------------------------------

Key/value pair attributes are crazy powerful, but can be a little tricky in Lava. Never fear though... the code sample below makes them easy to work with.

```
{% assign favoriteLinks = CurrentPerson | Attribute:'FavoriteLinks' %}

{% for link in favoriteLinks %}
  <p>
    {% assign linkkv = link | PropertyToKeyValue %}
    Website: {{ linkkv.Key }}<br />
    Url: {{ linkkv.Value }}
  </p>
{% endfor %}
```