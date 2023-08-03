# 
from:lava-filters-other-filters.html

Other Filters
=============

These filters provide various utility roles in creating your Lava.

 [](#addcsslink)

AddCssLink
==========

Show Details

Server: v7.0

Adds a CSS link to the page. If the link has already been previously registered (by a block or other Lava) it will not be duplicated.

**Additional Details**

**Example:**

```
{{ 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' | AddCssLink }}
```

```
<link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
```

**Note:**  
Couple of usage notes:

*   You can use ~/ to have Rock append the application path or ~~/ to append your theme root to your relative links.
*   You can pass in an option parameter to add fingerprinting to your file. This only works on local links and serves to cache the file on the user's browser. {{ '/Styles/myfile.css' | AddCssLink:true }}

 [](#addlinktagtohead)

AddLinkTagToHead
================

Show Details

Server: v4.0

Adds a link to the HTML head of the current page.

**Additional Details**

**Example:**

```
"CurrentPerson": {
   "PhotoUrl": "/GetImage.ashx?id=55"
}
```

```
{{ CurrentPerson.PhotoUrl | AddLinkTagToHead:'rel','image\_src' }}
```

```
The tag below will be added to the head of the page.
<link rel="image\_src" href="/GetImage.ashx?id=55">

```

**Note:**  
This filter will only work on blocks that are on a page. This may not be the case with some workflow actions and email templates.

 [](#addmetatagtohead)

AddMetaTagToHead
================

Show Details

Server: v4.0

Creates a meta tag that will be inserted into the HTML head. This is useful for adding [social media links](http://moz.com/blog/meta-data-templates-123).

**Additional Details**

**Example:**

```
"CurrentPerson": {
   "PhotoUrl": "/GetImage.ashx?id=55"
}
```

```
{{ CurrentPerson.PhotoUrl | AddMetaTagToHead:'property','og:image' }}
```

```
The tag below will be added to the head of the page.
<meta property="og-image" content="/GetImage.ashx?id=55">
```

**Note:**  
This filter will only work on blocks that are on a page. This may not be the case with some workflow actions and email templates.

 [](#addresponseheader)

AddResponseHeader
=================

Show Details

Server: v12.0

Adds a header to the HTTP response. This allows you to set custom headers. Note that any headers already being set in Rock will overwrite the values you provide. These should only be used to add custom headers.

**Additional Details**

**Example:**

```
{{ 'public, max-age=120' | AddResponseHeader:'cache-control' }}
```

```
There is no output displayed, but the HTTP response object will have a new header added.
```

 [](#addscriptlink)

AddScriptLink
=============

Show Details

Server: v7.0

Adds a script link to the page. If the link has already been previously registered (by a block or other Lava) it will not be duplicated.

**Additional Details**

**Example:**

```
{{ 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' | AddScriptLink }}
```

```
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" type="text/javascript"></script>
```

**Note:**  
Couple of usage notes:

*   You can use ~/ to have Rock append the application path or ~~/ to append your theme root to your relative links.
*   You can pass in an option parameter to add fingerprinting to your file. This only works on local links and serves to cache the file on the user's browser. {{ '/Styles/myfile.js' | AddScriptLink:true }}

 [](#appendfollowing)

AppendFollowing
===============

Show Details

Server: v10.0

Returns the following status for the currently logged in user to the results of an entity command or Persisted Dataset.

**Additional Details**

The append following filter is exclusively used by entity commands and adds the property `IsFollowing` to the returned data object. Details on how to create a Persisted Dataset are available in the [Designing & Building Websites Using Rock](https://www.rockrms.com/documentation/bookcontent/14#persisteddatasets) guide.  
  
An optional purpose key can be provided as a parameter in v13.4+.

**Example:**

```
<p>Entity Command Example</p>
{%- person where:'Id != 1' limit:'3' iterator:'People' -%}
  {%- assign followedItems = People | AppendFollowing -%}
<ul>
  {%- for item in followedItems -%}
    <li>{{ item.FullName }} - {{ item.IsFollowing }} </li>
  {%- endfor -%}
</ul>
{%- endperson -%}


<p>Persisted Dataset Example</p>
{%- assign data = 'mydataset' | PersistedDataset | AppendFollowing -%}
<ul>
{%- for item in data -%}
  <li>{{ item.Title }} - {{ item.IsFollowing }}</li>
{%- endfor -%}
</ul>
```

```
<p>Entity Command Example</p>
<ul>
    <li>Ted Decker - true</li>
    <li>Cindy Decker - false</li>
    <li>Noah Decker - false</li>
</ul>

<p>Persisted Dataset Example</p>
<ul>
    <li>Friday 3/25 - true</li>
    <li>Saturday 3/26 - false</li>
    <li>Sunday 3/27 - false</li>
</ul>
```

 [](#asboolean)

AsBoolean
=========

Show Details

Server: v7.0 Mobile: v1.0

Converts the input to a Boolean (true/false) value.

**Additional Details**

**Example:**

```
"Workflow": {
    "Option": "f"
}
```

```
{% assign isEnabled = Workflow | Attribute:'Option' | AsBoolean %}

{% if isEnabled == true %}
    It is enabled.
{% else %}
    Nope, it's disabled.
{% endif %}
```

```
Nope, it's disabled.
```

 [](#asdatetime)

AsDateTime
==========

Show Details

Server: v7.0 Mobile: v1.0

Converts the input to a DateTime value.

**Additional Details**

**Example:**

```
{{ '1/1/2017' | AsDateTime |  DateAdd:3,'d' }}

```

```
1/4/2017 12:00:00 AM 
```

 [](#asdecimal)

AsDecimal
=========

Show Details

Server: v7.0 Mobile: v1.0

Converts the input to a decimal value.

**Additional Details**

**Example:**

```
"Workflow": {
    "Miles": "5.0001"
}
```

```
{% assign miles = Workflow | Attribute:'Miles' | AsDecimal %}

{% if miles > 5.0 %}
    {{ miles }} is more than 5.
{% else %}
    Less than 5 miles.
{% endif %}
```

```
5.0001 is more than 5.
```

 [](#asdouble)

AsDouble
========

Show Details

Server: v7.0 Mobile: v1.0

Converts the input to a double value (which has less precision than a decimal).

**Additional Details**

**Example:**

```
"Workflow": {
    "Precision": "5.00000000000000009"
}
```

```
{% assign miles = Workflow | Attribute:'Precision'| AsDouble %}

{% if miles > 5.0 %}
    {{ miles }} is more than 5.
{% else %}
    Well, it looks like {{ miles }} ({{ miles | ToJSON }}) is less than 5 miles.
{% endif %}
```

```
Well, it looks like 5 (5.0) is less than 5 miles.
```

**Note:**  
Use AsDecimal if you need the highest amount of precision.

 [](#asinteger)

AsInteger
=========

Show Details

Server: v7.0 Mobile: v1.0

Converts the input to an integer value.

**Additional Details**

**Example:**

```
"Workflow": {
    "Quantity": "3"
}
```

```
{% assign quantity = Workflow | Attribute:'Quantity' | AsInteger %}

{% if quantity > 0 %}
    There are more than none.
{% else %}
    There are none.
{% endif %}
```

```
There are more than none.
```

 [](#asstring)

AsString
========

Show Details

Server: v7.0 Mobile: v1.0

Converts the input to a string value.

**Additional Details**

**Example:**

```
{{ CurrentPerson | AsString }}
```

```
Alisha Marble
```

 [](#base64encode)

Base64Encode
============

Show Details

Server: v7.0

Converts a binary file to a base-64 encoded string.

**Additional Details**

This filter has an optional input parameter:

*   Image Resize Parameters: If the binary file is an image, this optional parameter can be used to resize and/or format the image using a collection of key/values. See notes below for details.

**Example:**

```
"CurrentPerson": {
    "FullName": "Ted Decker",
    "AnniversaryDate": '',
}
```

```
Base64Format: {{ CurrentPerson.PhotoId | Base64Encode }}<br/>
Base64Format: {{ CurrentPerson.PhotoId | Base64Encode:'h=92&w=92&mode=max&format=jpg' }}
```

```
Base64Format: /2wBDAQQEBAUFBQoGBgoWDwwPFhYW...
Base64Format: /9j/4AAQSkZJRgABAQEAY....

```

**Note:**  

If using the optional Image Resize parameter, the filter will use the [ImageResizer](http://imageresizing.net/docs/v4/docs/basics) component to resize and/or format the image. Any of that component's supported parameters can be used (click the link for details).

 [](#client)

Client
======

Show Details

Server: v7.0

Returns information about the client browser.

**Additional Details**

**Example:**

```
IP Address: {{ 'Global' | Client:'ip' }} <br />
Login: {{ 'Global' | Client:'login' }} <br />
Browser: {{ 'Global' | Client:'browser' }} <br />
```

```
IP Address: 12.34.55.15 (note this is not guaranteed to be the user's IP address, it could be
the users firewall / proxy server)
Login: tdecker
Browser: Windows 10 Other Chrome 57.0.2987
```

**Note:**  

The 'browser' parameter actually returns a structured object with lots of additional information. Below is a JSON representation of the details.

```
{
  "String": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
  "OS": {
    "Family": "Windows 10",
    "Major": null,
    "Minor": null,
    "Patch": null,
    "PatchMinor": null
  },
  "Device": {
    "IsSpider": false,
    "Brand": "",
    "Family": "Other",
    "Model": ""
  },
  "UserAgent": {
    "Family": "Chrome",
    "Major": "57",
    "Minor": "0",
    "Patch": "2987"
  },
  "UA": {
    "Family": "Chrome",
    "Major": "57",
    "Minor": "0",
    "Patch": "2987"
  }
}
```

ASP.Net also provides several additional server variables. The number and nature of these can change based on server and client. You can pass in any server variable key and the filter will return the value. To get a full list of keys use:

```
{{ 'Global' | Client:'parmlist' }}
```

 [](#createshortlink)

CreateShortLink
===============

Show Details

Server: v8.0

Creates a [URL short link](https://community.rockrms.com/documentation/BookContent/14#shortlinks) for the provided URL.

**Additional Details**

There are several overrides you can pass:  

```
{{ 'url' | CreateShortLink:token,siteId,overwrite,randomLength }}
```

**Definitions**

*   token (string): If you'd like to provide the token to use in the short code you can provide it here. Leave this blank ('') to use a random code.
*   siteId (int): The id of the site to use for the shorting. By default the first site found with the 'Enabled for Shortening' set to true will be used. Pass in 0 if you'd like to force the default site.
*   overwrite (bool): This determines what to do if the token you provided already exists. By default it will not overwrite an existing shortcode. If you provided a token, it exists and overwrite is set to false, a new random token will be returned. When set to true then the existing token will be used.
*   randomLength (int): If using a random code, this determines how long it should be.

**Example:**

```
"ConnectionOpportunity": {
    "Url": "http://www.rocksolidchurchdemo.com/greeters"
}
```

```
Your personalized link is:
{{ ConnectionOpportunity | Attribute:'Url' | CreateShortLink }}
```

```
Your personalized link is:
http://www.rocksolidchurchdemo.com/HSGFTSF
```

**Note:**  
This filter attempts to return a valid shortlink at all cost. This means that if the configuration passed to it is invalid it will try to correct it with reasonable defaults. For instance if you pass in an invalid siteId, the first active site will be used. If you pass in an empty URL, or if no shortened site is enabled in Rock you will get an empty string.

 [](#debug)

Debug
=====

Show Details

Server: v7.0

The debug filter provides you with a ton of information on the variables you have access to in your Lava.

**Additional Details**

**Example:**

```
"CurrentPerson": {
    "FullName": "Ted Decker"
}
```

```
{{ 'Lava' | Debug }}
```

**Note:**  

There are a couple of options on how you use this filter. The default shown in the example above will output the debug information for all the variables provided in the merge fields. The information will be shown to ALL logged in users.

If you'd like to limit who can see the debug information you can provide a username to limit on. In the example below only Ted Decker would be able to see the debug information.

```
{{ 'Lava' | Debug:'tdecker' }}

```

Up till this point we've gotten all of the variables back from the merge fields. You can optionally just report on a single field by piping it to the filter instead of the global 'Lava' keyword like so:

```
{{ CurrentPerson | Debug:'tdecker' }}

```

 [](#entityfromcachedobject)

EntityFromCachedObject
======================

Show Details

Server: v11.0

Returns a full entity object loaded from the database from its cached counterpart.

**Additional Details**

When you request the object for an attribute, you will get back a cached version of that entity if one is available. One example of this is a Campus attribute. This provides significant speed boosts to Rock and your Lava as it doesn't have to hit the database to load it. Occasionally, though, you might need an actual entity object rather than the cached object. This filter will let you take that cached object and get back a real database entity.

**Example:**

```
{% assign cached = Workflow | Attribute:'TargetCampus','Object' %}
{% assign campus = cached | EntityFromCachedObject %}
{{ campus.Location.FormattedAddress }}
```

```
3120 W Cholla St Phoenix, AZ 85029-4113
```

**Note:**  
If you pass in anything other than a cached object, the original value will be returned by the filter.

 [](#filterfollowed)

FilterFollowed
==============

Show Details

Server: v10.0

Returns a subset of followed entities for the current user from either a Persisted Dataset or an entity command.

**Additional Details**

The filter is used in conjunction with either a Persisted Dataset or an entity command. Details on how to create a Persisted Dataset are available in the [Designing & Building Websites Using Rock](https://www.rockrms.com/documentation/bookcontent/14#persisteddatasets) guide.

**Example:**

```
<p>Entity Command Example</p>
{%- person where:'Id != 1' limit:'3' iterator:'People' -%}
  {%- assign followedItems = People | AppendFollowing | FilterFollowed -%}
<ul>
  {%- for item in followedItems -%}
    <li>{{ item.FullName }} - {{ item.IsFollowing }} </li>
  {%- endfor -%}
</ul>
{%- endperson -%}

<p>Persisted Dataset Example</p>
{%- assign data = 'mydataset' | PersistedDataset | AppendFollowing | FilterFollowed -%}
<ul>
{%- for item in data -%}
  <li>{{ item.Title }} - {{ item.IsFollowing }}</li>
{%- endfor -%}
</ul>
```

```
<p>Entity Command Example</p>
<ul>
    <li>Ted Decker - true</li>
</ul>

<p>Persisted Dataset Example</p>
<ul>
    <li>Friday 3/25 - true</li>
</ul>
```

 [](#filterunfollowed)

FilterUnfollowed
================

Show Details

Server: v10.0

Returns a subset of entities that have not been followed by the current user from either a Persisted Dataset or an entity command.

**Additional Details**

The filter is used in conjunction with either a Persisted Dataset or an entity command. Details on how to create a Persisted Dataset are available in the [Designing & Building Websites Using Rock](https://www.rockrms.com/documentation/bookcontent/14#persisteddatasets) guide.

**Example:**

```
<p>Entity Command Example</p>
{%- person where:'Id != 1' limit:'3' iterator:'People' -%}
  {%- assign followedItems = People | AppendFollowing | FilterUnfollowed -%}
<ul>
  {%- for item in followedItems -%}
    <li>{{ item.FullName }} - {{ item.IsFollowing }} </li>
  {%- endfor -%}
</ul>
{%- endperson -%}

<p>Persisted Dataset Example</p>
{%- assign data = 'mydataset' | PersistedDataset | AppendFollowing | FilterUnfollowed-%}
<ul>
{%- for item in data -%}
  <li>{{ item.Title }} - {{ item.IsFollowing }}</li>
{%- endfor -%}
</ul>
```

```
<ul>
    <li>Cindy Decker - false</li>
    <li>Noah Decker - false</li>
</ul>

<p>Persisted Dataset Example</p>
<ul>
    <li>Saturday 3/26 - false</li>
    <li>Sunday 3/27 - false</li>
</ul>
```

 [](#frombase64)

FromBase64
==========

Show Details

Server: v13.0

Decodes the base 64 encoded string and returns the resulting data.

**Additional Details**

If the true parameter is provided, then the data is returned as a human readable string. Otherwise a byte array of the raw data is returned. Why might I need this filter? Base 64 encoding is sometimes returned from API calls and usually must be decoded before it can be used.

**Example:**

```
"Object": {
    "Id": 23,
    "Data": "VGVkIERlY2tlcg=="
}

```

```
{{ Object.Data | FromBase64:true }}

```

```
Ted Decker

```

 [](#fromcache)

FromCache
=========

Show Details

Server: v7.0

Reads objects from the Rock cache which will reduce the number of database reads your Lava produces.

**Additional Details**

This filter works by passing in either an integer or Guid of the cached item you'd like - or 'All' to retrieve all cached items of a given type v12.0 - along with the cache object type. Supported types are:

*   DefinedValue
*   DefinedType
*   Campus
*   Category
*   GroupType
*   Page
*   Block
*   BlockType
*   EventCalendar
*   Attribute
*   NoteType
*   ContentChannel

**Example:**

```
"CurrentPerson": {
    "CampusId": "2"
}
```

```
<h4>Current Person's Campus</h4>

{% assign campus = CurrentPerson.PrimaryCampusId | FromCache:'Campus' %}

Current Person's Campus Is: {{ campus.Name }}

{% assign allCampuses = 'All' | FromCache:'Campus' %}

<h4>All Campuses</h4>

<ul>
{% for c in allCampuses %}
    <li>{{ c.Name }} </li>
{% endfor %}
</ul>
```

```
<h4>Current Person's Campus</h4>

Current Person's Campus Is: West-side Campus

<h4>All Campuses</h4>

<ul>
    <li>Main Campus</li>
    <li>West-side Campus</li>
</ul>
```

 [](#fromjson)

FromJSON
========

Show Details

Server: v5.0 Mobile: v1.0

Takes a JSON string and makes a Lava object from it.

**Additional Details**

**Example:**

```
NA 
```

```
{% capture jsonString %}
{
    "Name": "Ted Decker",
    "ServingTimes": \[
      {
        "Date": "Friday 3/25",
        "Times": \[
          "5:30 pm",
          "7:00 pm"
        \]
      },
      {
        "Date": "Saturday 3/26",
        "Times": \[
          "4:30 pm",
          "6:00 pm"
        \]
      },
      {
        "Date": "Sunday 3/27",
        "Times": \[
          "6:30 am sunrise",
          "9:00 am",
          "10:30 am",
          "12:00 pm"
        \]
      }
    \]
}
{% endcapture %}


{% assign jsonObject = jsonString | FromJSON %}
{{ jsonObject.Name }}
<ul>
{% for servingTime in jsonObject.ServingTimes %}
  <li>{{ servingTime.Date }}</li>
{% endfor %}
</ul>
```

```
Ted Decker
<ul>
    <li>Friday 3/25</li>
    <li>Saturday 3/26</li>
    <li>Sunday 3/27</li>
</ul>
```

 [](#groupbyguid)

GroupByGuid
===========

Show Details

Server: v7.0

Returns a full Group object from the Guid of the group.

**Additional Details**

**Example:**

```
"GroupMember" {
    "Group": {
        Guid: "8fedc6ee-8630-41ed-9fc5-c7157fd1eaa4"
    }
    ...
}
```

```
{% assign group = GroupMember.Group.Guid | GroupByGuid %}

Group Name: {{ group.Name }}!
```

```
Group Name: Ushers
```

 [](#groupbyid)

GroupById
=========

Show Details

Server: v7.0

Provides a full Group object by providing an Id of the group.

**Additional Details**

**Example:**

```
"GroupMember" {
    "GroupId": 234
    ...
}
```

```
{% assign group = GroupMember.GroupId | GroupById %}

Group Name: {{ group.Name }}!
```

```
Group Name: Ushers
```

 [](#hasrightsto)

HasRightsTo
===========

Show Details

Server: v6.0

This filter helps you check the security of the model you pass it.

**Additional Details**

**Example:**

```
\[person model\]
```

```
{{ person | HasRightsTo:'View' }}
```

```
true
```

**Note:**  

In the typical use case you'll be passing full models to the filter. It can also take just the Id of the model as long as you also provide the entity type. The example below would check for edit rights for the group with the id of 12.

{{ 12 | HasRightsTo:'Edit','Rock.Model.Group' }}

 [](#hmacsha1)

HmacSha1
========

Show Details

Server: v10.0 Mobile: v1.0

Converts a string into a SHA-1 hash using a hash message authentication code (HMAC).

**Additional Details**

Pass the secret key for the message as a parameter to the filter.

**Example:**

```
{% assign my\_secret\_string = 'RockIsAwesome!' | HmacSha1:'secret\_key' %}
My encoded string is: {{ my\_secret\_string }}
```

```
My encoded string is: 17dbf467d8f49e9f541c7af8adf26c8422bdb342
```

 [](#hmacsha256)

HmacSha256
==========

Show Details

Server: v10.0 Mobile: v1.0

Converts a string into a SHA-256 hash using a hash message authentication code (HMAC).

**Additional Details**

Pass the secret key for the message as a parameter to the filter.

**Example:**

```
{% assign my\_secret\_string = 'RockIsAwesome!' | HmacSha256:'secret\_key' %}
My encoded string is: {{ my\_secret\_string }}
```

```
My encoded string is: 3518d7aa4ad81041e14033f2bbfa317e8f2f5aa26d6f48f719783aeaebe481ae
```

 [](#imageurl)

ImageUrl
========

Show Details

Server: v12.0

Simplifies making an image URL with a fallback.

**Additional Details**

This filter works by passing in either an integer or Guid of the image for which you want to create a URL. There are two input parameters:

*   Fallback URL (optional): The URL to be returned if the integer ID or Guid input is not defined.
*   Root URL (optional): This parameter is multipurpose:
    *   If the parameter is not passed (is null), or a value of false is passed, the image URL will be returned without prepending Rock's root application URL.
    *   If a value of true or 'rootUrl' is passed, the returned image URL will include Rock's root application URL, meaning it will be the complete URL to the image.

**Example:**

```
None
```

```
{% contentchannelitem id:'1' %}
    <img src="{{ contentchannelitem | Attribute:'Image','RawValue' | ImageUrl }}" />
    
    <img src="{{ contentchannelitem | Attribute:'Image','RawValue' | ImageUrl:'https://via.placeholder.com/150', true }}" />
{% endcontentchannelitem %}

<img src="{{ item | Attribute:'Image','RawValue' | ImageUrl:'https://via.placeholder.com/150' }}" />
```

```
<img src="/GetImage.ashx?Guid=0241ED2F-B527-424C-917C-1142A398711F">

<img src="http://www.rocksolidchurchdemo.com/GetImage.ashx?Guid=0241ED2F-B527-424C-917C-1142A398711F">

<img src="https://via.placeholder.com/150">
```

 [](#isfollowed)

IsFollowed
==========

Show Details

Server: v10.0

Takes an entity object as input and tests if it is being followed by the current person. Returns a boolean value of either true or false.

**Additional Details**

Has optional parameters to provide a purpose key (v13.4) and specify a different the person to test against instead of the current person.

**Example:**

```
{% assign group = 56 | GroupById %}
{% assign followed = group | IsFollowed %}
{% if followed == true %}
  <p>You are following the group {{ group.Name }}.</p>
{% else %}
  <p>You are not currently following the group {{ group.Name }}.</p>
{% endif %}
```

```
<p>You are following the group Serving Teams.</p>
```

 [](#isindataview)

IsInDataView
============

Show Details

Server: v14.1

Takes the given Entity or Entity Id and returns a boolean that indicates whether the entity is in the data view or not.

**Additional Details**

This filter operates on the given entity object or entity Id and has a single parameter:

*   Data View Id: The Id of the specific data view you want to check.

**Example:**

```
"CurrentPerson": {
    ...
}

"Group" {
    "Id": 111,
    "Name" : "Decker Group"
    ...
}
```

```
{% assign inDataView = CurrentPerson.Id | IsInDataView:'1337' %}
{% if inDataView %}
   That person is in the 1337 data view.
{% endif %}

{% assign inDataView = Group | IsInDataView:'230' %}
{% if inDataView %}
   The '{{Group.Name}}' is in the 230 data view.
{% endif %}


```

```
That person is in the 1337 data view.

The 'Decker Group' is in the 230 data view.
```

**Note:**  
The Data View's 'Applies To' entity type is the assumed entity type for the given entity/entityId.

 [](#md5)

Md5
===

Show Details

Server: v10.0 Mobile: v1.0

Converts a string into an MD5 hash.

**Additional Details**

An example use case for this filter is showing the Gravatar image associated with the poster of a comment:

**Example:**

```
"Person": {
    "Email": "hi@example.com"
}
```

```
<img src="https://www.gravatar.com/avatar/{{ Person.Email | Trim | Downcase | Md5 }}" />
```

```
<img src="https://www.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60">
```

 [](#notes)

Notes
=====

Show Details

Server: v7.0

Retrieves notes for the provided entity.

**Additional Details**

This filter has plenty of options to help make retrieving notes simple. First you can pass the filter either a full entity (any type) or an integer that represents the entity id.

You must pass in either an integer that represents a note type id or a comma delimited string of note type ids.

Optional parameters include:

*   Sort Order: string ('asc' or 'desc'). If no option is provided 'desc' is assumed.
*   Count: an integer of how many items you'd like returned.

Security is checked on the notes based on the currently logged in user.

**Example:**

```
"CurrentPerson": {
    ...
}
```

```
{% assign notes = CurrentPerson | Notes:'4,5','asc',2 %}

Notes
{% for note in notes %}
    <p>{{ note.Text }} </p>
{% endfor %}
```

```
Notes
<p>Note one.</p>
<p>Note two.</p> 
```

 [](#page)

Page
====

Show Details

Server: v4.0

Returns information about the current page.

**Additional Details**

**Example:**

```
None
```

```
Title: {{ 'Global' | Page:'Title' }} <br />
BrowserTitle: {{ 'Global' | Page:'BrowserTitle' }} (v9) <br />
Description: {{ 'Global' | Page:'Description' }} (v7 +)<br /> 
URL: {{ 'Global' | Page:'Url' }} <br />
Page Id: {{ 'Global' | Page:'Id' }} <br />
Host: {{ 'Global' | Page:'Host' }} <br />
Path: {{ 'Global' | Page:'Path' }} <br />
Site Name: {{ 'Global' | Page:'SiteName' }} <br />
Site Id: {{ 'Global' | Page:'SiteId' }} <br />
Theme: {{ 'Global' | Page:'Theme' }} <br />
Layout: {{ 'Global' | Page:'Layout' }} <br />
Scheme: {{ 'Global' | Page:'Scheme' }} <br />
Cookies: {{ 'Global' | Page:'Cookies' }} (v8.4)<br />

{% assign queryParms = 'Global' | Page:'QueryString'  %}
Query Parms <br />
{% for item in queryParms %}
    {% assign kvItem = item | PropertyToKeyValue %}
    {{ kvItem.Key }}: {{ kvItem.Value }} <br />
{% endfor %}
```

```
Title: Home 
BrowserTitle: Home of the Browser's Title
Description: This is the page description 
URL: http://localhost:6229/page/1 
Page Id: 1 
Host: localhost 
Path: /page/1 
Site Name: External Website 
Site Id: 3 
Theme: Stark 
Layout: Homepage 
Scheme: http 

Query Parms 
Id: 12
SomeOtherId: 23
```

**Note:**  

In most cases the properties are returned as strings. The 'QueryString' property will return an array of query parameters. The Lava sample below shows how to use them.

```
{% assign queryParms = 'Global' | Page:'QueryString'  %}
{% for item in queryParms %}
    {% assign kvItem = item | PropertyToKeyValue %}
    {{ kvItem.Key }}: {{ kvItem.Value }} 
{% endfor %}
```

The Cookies property will return an array of Cookie objects.

```
{% assign cookies = 'Global' | Page:'Cookies'  %}
{% for cookie in cookies %}
    {{ cookie.Name }}: {{ cookie.Value }} 
{% endfor %}
```

 [](#pageparameter)

PageParameter
=============

Show Details

Server: v7.0

Returns the value of a specified page parameter.

**Additional Details**

**Example:**

```
Example URL: http://rock.rocksolidchurchdemo.com/Group/12
```

```
The Group Id passed in from the URL is: {{ 'Global' | PageParameter:'GroupId' }}
```

```
The Group Id passed in from the URL is: 12
```

**Note:**  
If the value is an integer it will be returned as an integer otherwise it will be a string.

 [](#pageredirect)

PageRedirect
============

Show Details

Server: v4.0

Will redirect the page to the provided URL.

**Additional Details**

Be very careful on how you configure this filter. You always want to provide a way to get back to this page, without it redirecting, so that you can edit your lava. Below are two strategies for doing this.

If your lava is inside of an HTML block you can use that block's 'CurrentPersonCanEdit' merge field to stop the redirect if the current user has edit access to the block. An example of this usage is below.

```
{% if CurrentPersonCanEdit %}
    <p class="alert alert-warning">If you could not edit you would be redirected to: <a href="http://www.rockrms.com">http://www.rockrms.com</a>.</p>
{% else %}
    {{ 'http://www.rockrms.com' | PageRedirect }}
{% endif %}
```

Another strategy to allow the editing of the lava content is to add ?Redirect=false to the query string. If the lava filter sees this in the page's address it will not perform the redirect. Instead it will display the link that it would have redirected to.

**Example:**

```
"Event": {
    "ExternalUrl": "http://www.rockrms.com",
}
```

```
{{ Event.ExternalUrl | PageRedirect }}
```

```
The current page request will be redirected to the address provided. 
```

 [](#pageroute)

PageRoute
=========

Show Details

Server: v13.0

Converts a page identifier into a URL string.

**Additional Details**

The identifier can either be the a Page Id, a Page Guid or a full page route (as shown in the example) which contains <PageGuid>,<RouteGuid>. You can optionally pass in a string of parameters to use when generating the URL. The parameters should be separated by `^`. Each parameter should consist of a key and value separated by an `=`. You may also pass in a dictionary object that contains the parameters.

**Example:**

```
{{ 'Global' | Attribute:'WorkflowEntryPage','RawValue' | PageRoute:'WorkflowTypeId=10^WorkflowId=324' }}

```

```
/WorkflowEntry/10/324
```

 [](#persisteddataset)

PersistedDataset
================

Show Details

Server: v10.0

Returns data contained in a Persisted Dataset as a Lava object.

**Additional Details**

Details on how to create a Persisted Dataset are available in the [Designing & Building Websites Using Rock](https://www.rockrms.com/documentation/bookcontent/14#persisteddatasets) guide.

**Example:**

```
{% assign data = 'mydataset' | PersistedDataset %}
<ul>
{% for item in data %}
  <li>{{ item.Title }}</li>
{% endfor %}
</ul>
```

```
<ul>
    <li>Friday 3/25</li>
    <li>Saturday 3/26</li>
    <li>Sunday 3/27</li>
</ul>
```

 [](#postback)

Postback
========

Show Details

Server: v3.0

This is a very specialized Lava filter that helps to wire-up ASP.Net postbacks. This is only available on specific blocks that provide 'Postback Commands'. The 'Group Details Lava' is an example of a block that provides these hooks.

**Additional Details**

**Example:**

```
"Group": {
    "Id": 1
}
```

```
<a class="btn btn-default btn-sm pull-right" href="#" onclick="{{ Group.Id | Postback:'EditGroup' }}">Edit</a>
```

```
<a class="btn btn-default btn-sm pull-right" href="#" onclick="javascript:\_\_doPostBack('ctl00\_main\_ctl33\_ctl01\_ctl06\_upnlContent','EditGroup^1'); return false;">Edit</a>
```

 [](#property)

Property
========

Show Details

Server: v5.0 Mobile: v1.0

Returns the property of a provided object. This often saves you from having to assign an object to a variable to get just one of its properties.

**Additional Details**

**Example:**

```
"CurrentPerson": {
    "FullName": "Ted Decker",
    "AnniversaryDate": '',
}
```

```
{{ CurrenPerson.NickName}}, your campus is: {{ CurrentPerson | Campus | Property:'Name'  }}
```

```
Ted, your campus is: Main Campus
```

**Note:**  
The 'Property' filter does allow you to use dot notation so you can do things like:  
`{% assign campusLeader = CurrentPerson | Campus | Property:'LeaderPersonAlias.Person' %}    {{ campusLeader.FullName }}`

 [](#propertytokeyvalue)

PropertyToKeyValue
==================

Show Details

Server: v4.0

Takes a property and returns it as a key/value pair. This is helpful for iterating over a list of properties.

**Additional Details**

**Example:**

```
"CurrentPerson": {
    "Attributes": \[
        {
            "FavoriteMovie": "Star Wars"
        },
        {
            "FavoriteStarWarsEpisode": "Episode VI"
        },
        {
            "FavoriteStarWarsCharacter": "Boba Fett"
        }
    \]
}
```

```
<ul>
{% for attribute in Attributes %}
    {% assign attributeParts = attribute | PropertyToKeyValue %}

    <li>{{ attributeParts.Key | Humanize | Capitalize }}: {{ attributeParts.Value }} </li>
{% endfor %}
</ul>
```

```
<ul>
    <li>Favorite Movie: Star Wars</li>
    <li>Favorite Star Wars Episode: Episode VI</li>
    <li>Favorite Star Wars Character: Boba Fett</li>
</ul>
```

 [](#readcookie)

ReadCookie
==========

Show Details

Server: v12.1

Gets the value of a HTTP cookie for the current user session.

**Additional Details**

This filter has the following format:  

```
{{ 'cookieName' | ReadCookie }}
```

**Definitions**

*   cookieName (string): A name that uniquely identifies the cookie. This should be the same as the name that used to set the cookie with the WriteCookie filter.

**Example:**

```
You recently told us that your favorite cookie is {{ 'FavoriteCookie' | ReadCookie }}
and your favorite color is {{ 'FavoriteColor' | ReadCookie }}.
```

```
You recently told us that your favorite cookie is choc-chip
and your favorite color is green.
```

**Note:**  
If a cookie with the specified name does not exist or has expired, the filter will return an empty string.

 [](#renderstructuredcontentashtml)

RenderStructuredContentAsHtml
=============================

Show Details

Server: v15.0

Takes the given [structured content](https://community.rockrms.com/documentation/bookcontent/14#contentchannels) and renders it as HTML.

**Additional Details**

This filter operates on the given structured content and renders it as HTML:

*   Content: String saved using the StructuredContentEditor control. The string is saved with metadata which this filter uses to render it as HTML.

**Example:**

```
"StructuredContent": {
    ""time"":1676039688279,
    ""blocks"":\[
       {
          ""id"":""a2FYCrj8NG"",
          ""type"":""header"",
          ""data"":{
             ""text"":""Things I love."",
             ""level"":2
          }
       },
       {
          ""id"":""egdM-bpIfg"",
          ""type"":""list"",
          ""data"":{
             ""style"":""ordered"",
             ""items"":\[
                {
                   ""content"":""Reading a good book."",
                   ""items"":\[
                      
                   \]
                },
                {
                   ""content"":""Helping others."",
                   ""items"":\[
                      
                   \]
                },
                {
                   ""content"":""Seeing other people laugh."",
                   ""items"":\[
                      
                   \]
                }
             \]
          }
       }
    \],
    ""version"":""2.22.1""
 }
```

```
{{ StructuredContent | RenderStructuredContentAsHtml }}
```

```
<h2>Things I love.</h2>
<ol>
    <li>Reading a good book.</li>
    <li>Helping others.</li>
    <li>Seeing other people laugh.</li>
</ol>
```

**Note:**  
The filter will return an empty string if the 'StructuredContent' is not in the right format or cannot be parsed as HTML.

 [](#resolverockurl)

ResolveRockUrl
==============

Show Details

Server: v7.0

This filter helps to resolve the application path in Rock using ~/ for the application home and ~~/ for the theme home. This is helpful when writing Lava that may be used by several organizations.

**Additional Details**

**Example:**

```
"Person": {
    "Id": 12623
}
```

```
{% assign personProfilePage = '~/Person/' %}

The link for this person is: '{{ personProfilePage | ResolveRockUrl }}{{ CurrentPerson.Id }}'
```

```
The link for this person is: '/Rock/Person/12623'
( assumes Rock was stored in a virtual directory called 'Rock')
```

 [](#rockinstanceconfig)

RockInstanceConfig
==================

Show Details

Server: v12.0

Shows configuration values for the current Rock instance.

**Additional Details**

The five supported settings are shown in the example.

**Example:**

```
Application Directory: {{ 'ApplicationDirectory' | RockInstanceConfig }}
Physical Directory: {{ 'PhysicalDirectory' | RockInstanceConfig }}
Machine Name: {{ 'MachineName' | RockInstanceConfig }}
Is Clustered: {{ 'IsClustered' | RockInstanceConfig }}
System Date/Time: {{ 'SystemDateTime' | RockInstanceConfig | Date:'yyyy-MM-dd HH:mm:ss' }}
```

```
Application Directory: D:\\inetpub\\wwwroot\\Rock\\bin
Physical Directory: D:\\inetpub\\wwwroot\\Rock\\bin
Machine Name: MYROCKSERVER
Is Clustered: false
System Date/Time: 2020-11-17 10:30:01
```

 [](#runlava)

RunLava
=======

Show Details

Server: v13.0

Executes Lava that is inside a string.

**Additional Details**

This can be useful when taking Lava from an Attribute Value that needs to be processed before displaying to an individual. The Lava executes in the same security context as the existing Lava. So if you have Entity Commands enabled in your parent Lava, then the child Lava you execute will also be able to run Entity Commands.

**Example:**

```
{
    "Value": "{% assign test = 'Hello World' %}{{ test }}"
}

```

```
<p>
    {{ Value }}
</p>
<p>
    {{ Value | RunLava }}
</p>

```

```
<p>
    {% assign test = 'Hello World' %}{{ test }}
</p>
<p>
    Hello World
</p>

```

 [](#setpagetitle)

SetPageTitle
============

Show Details

Server: v4.0

Takes a string as input and sets the page's title.

**Additional Details**

**Example:**

```
"CurrentPerson": {
    "FullName": "Ted Decker",
    ...
}
```

```
{% capture pageTitle %}Current Person - {{ CurrentPerson.FullName }}{% endcapture %}
{{ pageTitle | SetPageTitle }}
```

```
The page title would be: 'Current User - Ted Decker'.
```

**Note:**  
The example show will change the page title on the page and in browser window. As of v9.0, if you'd like to update just one you can add an additional parameter to your filter.

*   {{ 'New Title' | SetPageTitle:'BrowserTitle' }}
*   {{ 'New Title' | SetPageTitle:'PageTitle' }}

 [](#seturlparameter)

SetUrlParameter
===============

Show Details

Server: v14.0

Sets a parameter in the input URL string and returns the updated URL.

**Additional Details**

To modify the URL of the current page, specify "Current" as the input string.

Available parameters:

1.  the URL parameter name. If the parameter exists in the page route, the route will be modified - if not, the parameter will be added to the query string.
2.  the parameter value. To remove an existing parameter, specify an empty string.
3.  the format of the output URL (optional):
    *   absolute = A complete URL, including scheme and host name.
    *   relative = A URL that is expressed relative to the current Rock host server.

If the input string is not recognized as a URL, it will be returned unmodified.

**Example:**

```
Example 1:
{{ 'https://rocksolidchurchdemo.com/reporting/reports/12' | SetUrlParameter:'ReportId','155' }}

Example 2:
{{ 'https://rocksolidchurchdemo.com/reporting/reports' | SetUrlParameter:'CategoryId','101' }}
```

```
Example 1:<br>
https://rocksolidchurchdemo.com/reporting/reports/155
<hr>
Example 2:<br>
https://rocksolidchurchdemo.com/reporting/reports?CategoryId=101

```

**Note:**  

If the input URL specifies a Rock page on the current site, modifying the "PageId" parameter changes the target page of the URL. Parameters from the input URL are reapplied to the new target page URL, with route parameters being assigned first and the remaining parameters added to the query string.

 [](#sha1)

Sha1
====

Show Details

Server: v10.0 Mobile: v1.0

Converts a string into a SHA-1 hash.

**Additional Details**

**Example:**

```
{% assign my\_secret\_string = 'RockIsAwesome!' | Sha1 %}
My encoded string is: {{ my\_secret\_string }}
```

```
My encoded string is: 845b0f246f221697761d085847fbc056652d03d0
```

 [](#sha256)

Sha256
======

Show Details

Server: v10.0 Mobile: v1.0

Converts a string into a SHA-256 hash.

**Additional Details**

**Example:**

```
{% assign my\_secret\_string = 'RockIsAwesome!' | Sha256 %}
My encoded string is: {{ my\_secret\_string }}
```

```
My encoded string is: 06530e8aabeb6becaabcd0c357134f3cd0a340d87500002b0a14929d92e0ac78
```

 [](#tojson)

ToJSON
======

Show Details

Server: v4.0 Mobile: v1.0

Returns a JSON representation of the object. This is useful if you are wanting to return the object for use in JavaScript.

**Additional Details**

**Example:**

```
"CurrentPerson": {
    "NickName": "Ted",
    "LastName": "Decker"
}
```

```
{{ CurrentPerson | ToJSON }}
```

```
{
    "NickName": "Ted",
    "LastName": "Decker"
}
```

 [](#uniqueidentifier)

UniqueIdentifier
================

Show Details

Server: v7.0

Generates a new GUID (UUID) string. These are generally considered to be globally unique. This makes them ideal to use inside a shortcode where you need to identifier an HTML element by id but know the shortcode may be used twice on the same page.

**Additional Details**

*   The input value is ignored.
*   The generated string takes the format of "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", where each "x" can be 0-9 or A-F.

**Example:**

```
{{ '' | UniqueIdentifier }}
```

```
E9206998-3Fb5-4ED1-A372-C593A79C7DD1
```

 [](#url)

Url
===

Show Details

Server: v7.0 Mobile: v1.0

The Url filter allows you to easily get access to parts of a URL without a ton of string manipulation.

**Additional Details**

**Example:**

```
{% assign url = 'https://www.rockrms.com/WorkflowEntry/35?PersonId=2' %}
Testing URL {{ url }}
host - {{ url | Url:'host' }}
port - {{ url | Url:'port' }}
segments - {{ url | Url:'segments' | ToJSON }}
scheme - {{ url | Url:'scheme' }}
protocol - {{ url | Url:'protocol' }}
localpath - {{ url | Url:'localpath' }}
pathandquery - {{ url | Url:'pathandquery' }}
queryparameter no key - {{ url | Url:'queryparameter' }}
queryparameter with key - {{ url | Url:'queryparameter','PersonId' }}
url - {{ url | Url:'url' }}
invalid\_part - {{ url | Url:'invalid\_part' }}
```

```
Testing URL https://www.rockrms.com/WorkflowEntry/35?PersonId=2
host - www.rockrms.com
port - 443
segments - \[ "/", "WorkflowEntry/", "35" \]
scheme - https
protocol - https
localpath - /WorkflowEntry/35
pathandquery - /WorkflowEntry/35?PersonId=2
queryparameter no key -
queryparameter with key - 2
url - https://www.rockrms.com/WorkflowEntry/35?PersonId=2
invalid\_part -
```

 [](#writecookie)

WriteCookie
===========

Show Details

Server: v12.1

Sets a HTTP cookie for the current user session. Cookies provide a means of storing information about the current user's session that can be accessed in subsequent requests.

**Additional Details**

This filter has the following format:  

```
{{ 'cookieName' | WriteCookie:'value','expiryInMinutes' }}
```

**Definitions**

*   cookieName (string): A name that uniquely identifies the cookie. The name is required and is used to retrieve the cookie in subsequent requests.
*   value (string): The value to be stored in the cookie.
*   expiryInMinutes (int, optional): Setting an expiry value cause the cookie to be deleted after the specified number of minutes has elapsed. If you do not specify an expiry time, the cookie will be available until it is overwritten, deleted by the user, or the session expires.

**Example:**

```
{{ 'FavouriteCookie' | WriteCookie:'choc-chip','5' }}
{{ 'FavouriteColor' | WriteCookie:'green' }}
```

```
(none)
<p>
This filter modifies the response sent back to the user by including the specified cookie with an expiration time of 5 minutes.
It does not produce any output.
</p>
```

 [](#xamlwrap)

XamlWrap
========

Show Details

Server: v10.0 Mobile: v1.0

Wraps XAML in CDATA tags to make it XML compliant.

**Additional Details**

**Example:**

```
"Item": {
    "Id": 12,
    "Content": '# Heading
    The quick brown folx jumped over the lazy dog.
    ',
}
```

```
<Rock:Markdown>{{ Item.Content | XamlWrap }}</Rock:Markdown>

```

```
<Rock:Markdown><!\[CDATA\[The quick brown folx jumped over the lazy dog.\]\]</Rock:Markdown>
```