# 
from:lava-fluid.html

A New Engine Under the Hood
---------------------------

Rock v13 introduces a new Lava engine called Fluid. What does that mean? It means the way your Lava is processed behind the scenes will be changing. We’re making this change because the new Fluid engine is faster than the old DotLiquid engine, and because the change to Fluid sets up Rock to move to the new .NET Core framework more easily. Generally you shouldn’t notice a big difference, but there are a few things you should know about the transition.

First, keep in mind that the old DotLiquid engine will go away entirely in the future. Everyone running Rock will eventually need to be using the new Fluid engine. Instructions for transitioning are provided below.

Also, while most of your Lava will work the same as it always has, there are a few specific changes to look out for. We have those [documented here](/lava/fluid/differences). You’ll also want to check out this [RX presentation](https://community.rockrms.com/subscriptions/rx2021/lava-20-transition-to-the-fluid-engine) which talks more about the transition to Fluid and the changes you’ll see.

Transitioning Rock to Fluid
---------------------------

In your Rock instance you’ll find a Global Attribute (Admin Tools > General Settings > Global Attributes) named “Lava Engine Liquid Framework”. When you first install v13 this attribute will be blank, which means Rock is running the old DotLiquid engine. You'll have the following options for setting this value.

1.  **DotLiquid**: This is the old engine that Rock has been using historically.
2.  **Fluid**: This is the new engine you’ll eventually transition to.
3.  **DotLiquid (with Fluid verification)**: This will run your Lava twice (once for each engine) and record any problems as Exceptions.

To start, you’ll want to select the **DotLiquid (with Fluid verification)** option. You’ll need to restart Rock for the change to take effect, so you might wait for a period of low activity to do this. Once Fluid verification is in place, any Lava that you run will be processed twice. First it will run through the DotLiquid engine, then through the Fluid engine. If the output isn’t the same or if there are any errors an Exception will be recorded in your Exception List (Admin Tools > System Settings > Exception List). This Exception indicates that the Lava you’re using is not compatible with Fluid and will need to be updated.

#### Running Lava Twice

Remember that using Fluid verification will cause all Lava to be run twice. So, any updates your Lava performs, including SQL updates, will be performed twice. This could cause problems or confusion if, for instance, the Lava you’re running is in a Workflow that updates a counter. You might need to consider the implications for any updates you might be doing in your Lava, because you might not have been expecting it to run twice.

You’ll want to keep Rock running in Fluid verification mode for a little while, perhaps a week or two, until you no longer get Exceptions and you’re confident all of your Lava is ready for Fluid. At that point you’re ready to set the “Lava Engine Liquid Framework” Global Attribute value to **Fluid** and restart Rock.

If you find you’re running into problems you can always change it back to **DotLiquid (with Fluid verification)** and check your Exception List to see where the issue is. Of course if you’ve found a bug it can be reported in [GitHub](https://github.com/SparkDevNetwork/Rock/issues).

Lastly, if you’re the developer of a custom plugin you’ll want to make sure it’s v13 and Fluid compatible. For details on the changes you’ll need, check out [this page](https://community.rockrms.com/page/2305).