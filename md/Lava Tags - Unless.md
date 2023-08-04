# Unless
[View Original Source](https://community.rockrms.com/lava/tags/unless-tags)

Unless
======

The unless is the mirror of the if statement. By that we mean it reverses the logic of what is true and false. In most cases you'll want to stick with if as more people are used to its usage. In some cases the unless might be more readable.

Usage
-----

Unless is very similar to if statement.

```
{% unless Person.NickName == '' %}
    Hi {{ Person.NickName }}
{% endunless %}
```