# 
from:lava-commands.html

Getting Started With Lava Commands
==================================

Lava, on its own, is quite amazing. Enabling Commands adds great power, and with that comes... you know... great responsibility. Commands let you do several things that can bypass the built-in security and business logic inside the code.

Security
--------

To help keep things secure you must enable Lava Commands when you'd like to use them. Let's take a quick look at how to configure them.

#### HTML Blocks

Each HTML block that you place on a page has a block setting that will enable specific Commands for the content of the block. By default the blocks will not have any Commands enabled.

#### Communication Entry

Like the HTML block, you'll need to enable Lava Commands for the Communication Entry block. This allows you to enable some Commands for your staff on the internal portal while disabling them for those that may send emails from your website's leader toolboxes.

#### Default Commands

As you're aware, there are a million places that use Lava. Adding block settings to each one would be difficult to administer. Because of this, we've added a 'Default Enabled Lava Commands' Global Attribute. What you enable here will be used in all the places that don't have block settings.