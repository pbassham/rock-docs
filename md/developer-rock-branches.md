# 
from:developer-rock-branches.html

    

**Error**

Rock’s Git Branches
-------------------

[Rock adheres to the Gitflow branching strategy](https://github.com/SparkDevNetwork/Rock/wiki/Git-Branching-Strategy) and as you probably know, the develop branch is a bit wild west with the biggest rule being: don't break the build. This is where you branch off of if you are building a feature for the next release (i.e., a feature branch).

There are two more important branches we want you to be aware of in Rock: pre-alpha-stage and pre-alpha-release.

![pre-alpha-release-diagram.png](/Content/RockExternal/Images/Developer/pre-alpha-release-diagram.png)

pre-alpha-stage

This is the branch Spark Development Network runs on, and it powers this site. This is how Spark gets to 'eat our own dog food'. Pre-alpha-stage is a dangerous, risky, place to live but we want to encounter issues before anyone else does. **Only Spark should be running off this branch -- not you!**

pre-alpha-release

Two weeks after code is branched to pre-alpha-stage, the pre-alpha-_release_ branch gets it. If your organization has developers and wants to live on the risky, bleeding edge, you could use this branch in your production environment.

Why Use pre-alpha-release?
--------------------------

The main reasons are:

*   You'll have access to the latest and, often, greatest version of Rock.
*   You'll get bug fixes almost as soon as they're written.
*   You're doing a service to others by using this code base because you will catch, report and [possibly fix issues](https://github.com/SparkDevNetwork/Rock/wiki/Creating-Pull-Requests) before anyone else.

There are a few cons to be aware of:

1.  New features will appear that are not yet documented.
2.  New bugs will appear that have not been reported yet.
3.  You could miss a database change (aka "data migration") that the core team had to manually fix.
4.  You could really, really mess up your system if you do something wrong with your branching practices.

It's item number 3 that keeps us up at night. We want to make sure this doesn't happen to you so we want you to **let us know each time you pull from the pre-alpha-release branch:**

[Just Pulled From pre-alpha-release](https://community.rockrms.com/developer/pulled-prealpha)

*   [Technical Release Notes](/developer/changelog)
*   [Community Developer Subscribe](/developer/CommunityDeveloperSubscribe)
*   [Rock Branches](/developer/rock-branches)
*   [Workflow Actions Documentation](/WorkflowActions)
*   [Design System](/developer/design-system)
*   [Videos](/developer/videos)
*   [Rockit SDK](/developer/rockit)
*   [SQL Style Guide](/developer/sql-style-guide)