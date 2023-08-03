# 
from:lava-tags-include-tags.html

Include
=======

While you can type your Lava syntax right into a block's settings, there will be times when you want to reuse your template in several places (think about a template that renders a navigation menu). The include tag reads the contents of a file and uses the Lava in it as the template.

Usage
-----

```
{% include '~~/Assets/Lava/PageNav.lava' %}
```

This particular include will look for the file 'PageNav.lava' in the theme's /Assets/Lava folder. The ~~ is a placeholder for the directory of the current theme. A single ~ is a placeholder for the application root.