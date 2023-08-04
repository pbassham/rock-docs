# Intro To Filters
[View Original Source](https://community.rockrms.com/lava/filters)

All About Filters
=================

There may be times when you'd like to modify the data a bit before your present it on the page. Lava provides a wealth of filters to add to your 'bag of tricks'. Learning about them can really amp up what you can do.

For example:

```
{{ Person.NickName | Upcase }}
--renders --
'TED'
```
But that's just the beginning... consider this example...
```
{{ '1/1/2014' | HumanizeTimeSpan:'1/14/2014',2 }}
-- would return the friendly description of the difference between the two dates of --
'1 week, 6 days'
```
Bam!

You can even chain the filters to make them work together like so:

```
{{ Person.FullName | Upcase | Truncate:9 }}
-- returns --
TED DE...
```

**Tip** While filter parameters are typically enclosed by single-quotes you can optionally use double-quotes for times when your string will contain single-quotes.

So now that you understand filters, what are your waiting for? Check-out all the options available to you by reading about it in the sidebar.