# Raw
[View Original Source](https://community.rockrms.com/lava/tags/raw-tags)

Raw
===

This tag temporarily disables the processing of Lava tags markup. We wondered why this would ever be needed... then we wrote this documentation and used it all over the place!

Usage
-----

The `raw` tag is useful when you need to process text that contains { and } characters. This might be needed if you're using Mustache.js or Handlebars.js. Or, perhaps you're writing documentation showing Lava syntax...

```
{% raw %}
    We can use Lava syntax and it shows {{ See }}.
{% endraw %}
```

Without the `raw` tags used in the example above, the text {{ See }} would have been replaced with the value of the "See" variable if one existed (a blank space would appear if there was no "See" variable defined). The `raw` tag tells the system not to try to process the text as Lava, but instead to just display the text exactly as it was written.

Not that you care... but if you think it's hard to think about using the raw tag to show liquid syntax you should try figuring out how to raw the raw tag...

Email Templates
---------------

Raw tags are used in a similar way when you're working with email templates. If you want your template to include Lava so the person doesn't have to add merge fields on their own, simply wrap the Lava in `raw` tags for it to appear as-is when the person creates an email from the template. For an example of this, check out our [Email Template Survival Guide](https://community.rockrms.com/documentation/bookcontent/34#configuringthemecustomization).