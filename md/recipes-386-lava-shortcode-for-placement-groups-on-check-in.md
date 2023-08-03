# 
from:recipes-386-lava-shortcode-for-placement-groups-on-check-in.html

![Photo of Zack Dutra](/GetAvatar.ashx?PhotoId=56563&AgeClassification=Adult&Gender=Male&RecordTypeId=1&Text=ZD&w=100&h=100)

[0](/login?returnurl=/community/recipes/386/lava-shortcode-for-placement-groups-on-check-in "Login to like a recipe")

Lava Shortcode for Placement Groups on Check In
===============================================

*   Shared by **[Zack Dutra](/profile/9a99ea4a-27f3-4233-936e-0e0da5436985)**, [Bayside Covenant Church](https://community.rockrms.com/organizations/9e6d63a6-f95e-4376-8964-a93237a1e0af)
*   14 days ago

14.0 General Intermediate

        

![](https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/868423_852561/MicrosoftTeams-image%20%2828%29.jpeg)

![](https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/868423_852561/MicrosoftTeams-image%20%2826%29.png)

When doing event check in, it's often requested to have placement groups printed onto labels, [wristbands](https://community.rockrms.com/recipes/388/), or shown on the [success message](https://community.rockrms.com/recipes/385) screen. This recipe shows you how to create a lava shortcode that retrieves group placement information when provided with a ParentGroupId and PersonId. That lava shortcode can be used in check in label merge fields and check in success display messages to show relevant information when checking in.

**_Note Before Starting_**

The shortcode uses a ParentGroupId to look up groups that a person belongs to. That means that all of your groups of a certain placement type (like Bus, Tent, Cabin, Team, etc) would need to be under the same parent group for this to work. If that's not your setup, you could likely modify this in some way to work still, but this is what worked well for us.

An example of our Middle School camp Rec Team and Small Group structure is provided in this screenshot.

![](https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/868423_852561/Screen%20Shot%202023-07-19%20at%2011.12.01%20AM.png)

_**Setup**_

*   Create a new lava shortcode (CMS Configuration > Lava Shortcodes)
    *   Name: Checkin Merge - Member of Group From Parent Group
    *   Tag Name: memberofgroups
    *   Description: Used to print the group that a member is part of onto a check in label or to show the group on a success message when provided with a parent group id.
    *   Documentation shown in screenshot below.

![](https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/868423_852561/Screen%20Shot%202023-07-19%20at%2011.03.25%20AM.png)

*   Use the Shortcode Markup shown below.
*   Set Parameters
    *   parentgroupid: Blank
    *   personid: Blank
    *   groupterm: Blank
    *   comment: Blank
    *   showleader: False
*   Under Enabled Lava Commands, select Sql
*   Save the shortcode.

_Shortcode Markup_

```
{% sql return:'groups' %}
    SELECT g.\*
    FROM GroupMember gm
    JOIN \[Group\] g ON g.Id = gm.GroupId
    WHERE gm.PersonId = {{ personid }} AND g.ParentGroupId = {{ parentgroupid }} AND gm.IsArchived = 0;
{% endsql %}
{% comment %}If you make the lines pretty by adding returns, you will add spaces to the final label. Avoid that. {% endcomment %}
{% for group in groups %}{% assign groupid = group.Id %}{% if groupterm !='' %}{{ groupterm }}: {% endif %}{{ group.Name }}{% endfor %}
{% assign groupCount = groups | Size %}
{% if showleader == "True" and groupCount > 0 %}
{% sql return:'leaders' %}
    SELECT gm.\*, g.Name, gtr.Name AS RoleName
    FROM GroupMember gm
    JOIN \[Group\] g ON g.Id = gm.GroupId
    JOIN GroupTypeRole gtr ON gm.GroupRoleId = gtr.Id
    WHERE gtr.IsLeader = 1 AND gtr.GroupTypeId = g.GroupTypeId AND g.Id = {{ groupid }};
{% endsql %}
{% capture leaders %}
{% for leader in leaders %}{% assign leaderPersonId = leader.PersonId %}{% assign leaderPerson = leaderPersonId | PersonById %}{% if forloop.last %}{{ leaderPerson.NickName }}{% else %}{{ leaderPerson.NickName }}/{% endif %}{% endfor %}
{% endcapture %}
({{ leaders | Trim }})
{% endif %}

```

_**Using the Shortcode on Labels**_

*   Navigate to Check-In > Label Merge Fields
*   Add a new label merge field and give it a name value of the group term, for example "Middle School Camp Bus Group"
*   In the Merge Field, put in the Shortcode with all relevant settings, for example: {\[ memberofgroups parentgroupid:'1001798' personid:'{{ Person.Id }}' groupterm:'' comment:'Middle School Bus' \]}  
    *   All of my MS camp bus groups are under the parent group of id 1001798.
    *   The person id is merged from check-in, set just like other label merge fields.
    *   I'm leaving the groupterm blank - it's optional and just adds a term to the front of the value. Since my group names already have "Bus", I leave this blank so that I don't print "Bus Bus 1" 
    *   The comment is just for me. It's a helpful reminder of what this shortcode is, and is not used anywhere else.
*   Once you save, you can use this in a label merge code like normal (Check-In > Check-In Labels). Each type of group would need its own merge field, like bus, tent, team, etc.
*   Bonus Points: Instead of creating a new merge field for every camp, you can use an If statement to choose from more than one camp event.
    *   This assumes that the group you are actually checking into is unique for this event. You will use the group Id for each event and depending on which one you're checking into, use a different lava shortcode. Screenshot example provided.

![](https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/868423_852561/Screen%20Shot%202023-07-19%20at%2011.27.28%20AM.png)

![](https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/868423_852561/Screen%20Shot%202023-07-19%20at%2011.24.36%20AM.png)

![](https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/868423_852561/Screen%20Shot%202023-07-19%20at%2011.33.13%20AM.png)

![](https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/868423_852561/MicrosoftTeams-image%20%2828%29.jpeg)

Sample of shortcode being used to include group placements on a middle school camp wristband.

_**Using the Shortcode on Check-In Success**_

For an example of how to set up a custom check in success screen using shortcodes, check out the [Event Specific Custom Check-In Success Messages](https://community.rockrms.com/recipes/385/) recipe.

![](https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/868423_852561/MicrosoftTeams-image%20%2827%29.png)

![](/GetImage.ashx?id=56539&maxWidth=1000&maxHeight=1200)