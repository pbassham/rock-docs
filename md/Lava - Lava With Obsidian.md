# Lava With Obsidian
[View Original Source](https://community.rockrms.com/lava/obsidian)

![](/Content/RockExternal/Lava/obsidian.svg)

Lava With Obsidian
==================

There are a handful of Lava filters that attempt to modify the HTTP response data directly, such as adding Meta tags or performing redirects. These types of actions are often not supported by Obsidian blocks. The reason for this lies in how Obsidian can gain so much performance over legacy blocks. Since the entire page is not reloaded when an action is performed in Obsidian, the page response has already been sent. As such, there is no page to perform the Redirect on and no header section to insert new Meta tags into. Some of these operations may be supported in the future, though for some it may not be possible to add support.