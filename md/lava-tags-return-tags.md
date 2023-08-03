# 
from:lava-tags-return-tags.html

Return

v13.0


===============

This tag will cause Lava processing to end when it is encountered.

Usage
-----

The `return` tag is like a short circuit and stops processing the remaining Lava template similar to the way the `break` option does inside a `for` loop.

s
```
{% if currentRegistrationCount >= maxRegistrationsAllowed %}
    Sorry, this event is full. No additional registrations are possible.
    **{% return %}**
{% endif %}

It's great to see you {{ CurrentPerson.NickName }}! Let's get you registered for this event.

\[\[ Additional Registration Logic Here \]\]


```

In the example above a friendly error message will be shown when there are no additional registration messages available, otherwise instructions on how to register will be presented.

You might be thinking, "Well, you could just use an `{% else %}` to do the same thing..." and you'd be correct. The return however can make your logic simpler to read, especially when dealing with multiple levels of if statements. This is often referred to as an "early out" pattern. The video below covers this in detail if you're interested in learning more.