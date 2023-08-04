# JavaScript
[View Original Source](https://community.rockrms.com/lava/commands/javascript-commands)

JavaScript Command
==================

The javascript command allows you to place a script into the page header. While you technically can have inline scripts in the body of your HTML it's a best practice to put this into the page header (well where could be argued, but putting it in the page header allows your script to be available before the content on the page loads).

```
{% javascript %}
    alert("Hello world!");
{% endjavascript %}

```

Simple right? The javascript command takes your script and places it in a script tag for you. It also wraps your code into a self-executing anonymous function. Who... what??? This function protects your code from other code on the page (and honestly, it protects the other code from yours too). This ensures that all of the variables you define don't conflict with others on the page. For the most part you don't need to worry or think about it. But, we highly recommend that you tell those around you not to worry, your code is running in a 'self-executing anonymous function'. You just earned that raise... you're welcome.

Note: This command requires a full page reload in order for your changes to be displayed.

Remember this is Lava so anything is possible. This includes writing your JavaScript with Lava. Oh... yes we did!

```
{% javascript %}
    alert("Hello {{ CurrentPerson.NickName }}!");
{% endjavascript %}    

```

Parameters
==========

Below is a complete list of the parameters that are available to the javascript command.

**Quick Links:**

*   [id](#id)
*   [references](#references)
*   [disableanonymousfunction](#disableanonymousfunction)
*   [url](#url)

Id
--

If you provide an id parameter for your script Lava will be sure to only add the script once per id value.

References
----------

This property allows you to pass in specific JavaScript objects on the page to your anonymous function. This accepts a comma delimited list of globally scoped JavaScript objects.

Disable Anonymous Function
--------------------------

Don't want the protection afforded by the anonymous function? Well, you can disable it by setting the value of this property to true. Your script will then simply be added to a script tag as is.

URL
---

This property allows you to add a script reference using a URL. Paired with the id property and you can ensure that it's only added once per page.