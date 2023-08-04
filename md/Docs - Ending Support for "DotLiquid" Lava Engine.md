# Ending Support for "DotLiquid" Lava Engine
[View Original Source](https://community.rockrms.com/connect/ending-support-for-dotliquid-lava-engine)

![Ending Support for "DotLiquid" Lava Engine](https://rockrms.imgix.net/https%3a%2f%2fwww.rockrms.com%3a443%2fGetImage.ashx%3fId%3d53161?auto=format&w=1800&h=312&fit=crop&s=9f7fb07e115ff68edb7e25fb6e21aa9d)

Ending Support for "DotLiquid" Lava Engine
==========================================

Published Apr 4, 2023

_If your Rock instance **Lava Engine Liquid Framework** Global Attribute is already set to the "Fluid" mode, then you can skip this article._

Maintaining two complex sets of code is a costly endeavor. So, starting with Rock v17, we're removing support for the old "DotLiquid" Lava engine.

In Rock v13 a faster Lava engine called "Fluid" was introduced to replace the legacy "DotLiquid" engine. The details about DotLiquid and Fluid were [presented at RX2021](https://community.rockrms.com/subscriptions/rx2021/lava-20-transition-to-the-fluid-engine) and were also documented on the [Future of Lava](https://community.rockrms.com/lava/fluid) page. But more succinctly, the most important usage differences are documented on the [Differences Between DotLiquid and Fluid](https://community.rockrms.com/lava/fluid/differences) page.

If you haven't already changed your Lava Engine configuration to use "Fluid" (_Admin Tools > General Settings > Global Attributes > \[Lava Engine Liquid Framework\]_) and you're unsure if your Lava is Fluid-ready, set it to the "DotLiquid (with Fluid verification)" mode and restart Rock (or wait until the next day).

![Lava Engine Liquid Framework](/Content/blog/Lava_Engine_Liquid_Framework.png)  

In "DotLiquid (with Fluid verification)" mode, Rock will report any potential Lava issues to the Exception List (_Admin Tools > System Settings > Exception List_). That will assist you with tracking down any suspect Lava. After running in that mode for a week or so we recommend ripping the Band-Aid off and switching over to the Fluid engine. Then you'll have a faster Lava engine and be ready for the future.