# 
from:styling.html

Introduction to Styling
-----------------------

As you begin to start building out pages within your Rock-powered website, you'll quickly become familiar with the core blocks that are available to provide various functionality to your websites' users. However, there may be situations when these core blocks don't do exactly what you'd like them to, or maybe you want to customize the format a bit more.

Keep in mind this guide provides a partial overview of the built-in classes available in Rock. For more examples visit the [Bootstrap 3.4 documentation](https://getbootstrap.com/docs/3.4/).

HTML & CSS
----------

One of the things that makes Rock so powerful is its flexibility, and one of the ways that plays out is through the core HTML block. This block essentially allows you to add custom HTML to any page. If you're not familiar with HTML, it's essentially the language that is used to define the "structure" of any and every web page across the entire internet. The core blocks included with Rock each generate their own HTML automatically – but the HTML block itself allows you to write your own.

While HTML is used to define a webpage's structure, there is another language called CSS that enables us to manipulate or style what our HTML actually looks like on the webpage. That's what we'll discuss in this section of documentation.

CSS, at its core, starts with properties and values. A property could be considered to be the attribute about the element that you're manipulating, while the value is how you're manipulating it. A very simple example would be the \`background-color\` property – which is used to set the background color of an element.

```
<div style="background-color: red;">
    <h1>Welcome to Our Website</h1>
    <p>Dignissimos dicta ex sequi quo dolores quas voluptatem.</p>
</div>
```

The documentation below walks through some of the core styling classes available for your use when writing custom HTML/Lava. These helper classes are included outside of the website's theme, so they can be utilized on anywhere - both on your internal and external websites.