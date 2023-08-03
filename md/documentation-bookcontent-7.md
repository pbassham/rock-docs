# 
from:documentation-bookcontent-7.html

[](#overview)Overview
=====================

Groups are used whenever two or more are gathered. You'll find groups to be simple but incredibly powerful. Rock comes pre-configured with several types of groups, including:

*   **Families:** Each family is stored as a group. This is incredibly powerful because families get the same power and functionality as any other Group Type. In the beginning you'll want to leave families configured just the way you found them. As you create new Group Types and gain more experience with groups, keep in mind that you can add new attributes and additional functionality to the family Group Type.
  
*   **Security Roles:** These groups help secure Rock data. While you'll use these groups a majority of the time for security, you'll soon discover that any group in Rock can act as a security role.
  
*   **Check-in Groups:** Rock's check-in features use groups to store the locations where kids can check in, and to track attendance.
  
*   **Serving Teams:** While we have big ideas for how serving teams will work in the future, we have configured a simple group type to get you started with tracking your groups.
  
*   **General Groups:** It's likely that you'll be creating several groups that don't warrant their own specific Group Type. In these cases, feel free to create them as 'General Groups'.
  
*   **Application Groups:** Rock needs to keep track of various lists of people. For instance, people who have opted out of getting future photo requests. These 'lists of people' are stored as Application Groups. Application groups can be viewed/managed under Admin Tools > System Settings > Application Groups.
  
*   **Small Groups:** We've added a generic Small Group group type. Feel free to use this as a base to build from if your church has a groups ministry.
  
*   **Small Group Sections:** This group type works in conjunction with the Small Group type and acts as a leadership level to provide hierarchy for your groups. Again, feel free to use this type as a launching point for getting started.

[](#searchingforgroups)Searching for Groups
===========================================

As you add more and more groups to Rock, it may be tedious to locate a specific group. Never fear, you can use the Smart Search at the top of each page to help find the specific group you are looking for.

Smart Search

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/smart-search-v13.png)

Be sure to choose the _Group Name_ option from the drop down and then enter the group name you are searching for. You don’t need to enter the full group name, since the search will return any group that has the search term you entered. Say you were looking for the Bible Study group that Ted Decker leads (named "Ted Decker's Bible Study Group"). Any of the searches below would be valid, although some may return several other groups in the results, as well.

*   Decker
*   Bible Study
*   Ted Deck

If the search term you provide only matches a single group, you will be taken directly to that group. However, if several groups match, you will have to select one from the list of groups provided.

[](#groupviewer)Group Viewer
============================

The _Group Viewer_ page can be accessed by navigating to People > Group Viewer. This is the primary page for viewing and editing groups. Below, we will discuss each section of the group viewer in detail.

Group Viewer

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-viewer-v14.png)

1Group Tree

This control allows you to drill down through your group hierarchies. You’ll want to plan your hierarchies to achieve a good balanced approach. Too deep of a hierarchy will lead to too many clicks to drill down. However, if your hierarchy is too broad, then you will have to scan through long lists of groups to find the one you want.

2Group Details

Displays information about the group including adding tags.

3Action Bar

Options to edit, archive or delete a group.

4Group Maps

The viewer will display maps for each group location that is able to be mapped. You can click on the map to see a larger interactive map. You can also click on the map marker button directly below the map to see the interactive map.

5Actions

Below the maps you'll find buttons for a few key actions.

*   Takes you to the group _RSVP List_ page (see [Group RSVP](#grouprsvp)).
*   Takes you to the _Group History_ page (see [Group History](#grouphistory)).
*   Allows you to manually enter in attendance for the group.
*   Takes to you an interactive map where you can view all the people who are members of the group.
*   Using the security button, you can control who has access to view and edit this specific group. See the [Securing Groups](#securinggroups) section below for more information on how you can secure your groups.

6Group Members

List of members inside the group.

The group view has a couple of other interesting features you should be aware of. Notice the icons below the asterisk call out in the figure above. You can click the icon to add a new group, or the icon to search for a group. Clicking the icon will show you several advanced features in the tree view. Let's open it up and see what's inside:

Group Viewer

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-viewer-tree-v13.png)

You'll notice:

*   **Show:** This determines if inactive groups should be shown.
*   **Public:** This determines if only groups marked 'Is Public' should be shown.
*   **Show Count For:** The tree can also display counts of the number of members in the group, or the number of child groups a group has.
*   **Filter by Campus:** This lets you narrow down the groups according to a campus you select.
*   **Include Groups With No Campus:** If this is set to No then only groups with a campus will be shown.

Archived Groups
===============

You can Archive a group instead of deleting it. Archiving removes the group from the Group Viewer and other places where groups can be seen but allows you to restore it later. When a group has been marked as Archived and you want to bring it back go to Admin Tools > General Settings > Archived Groups and click on the icon to unarchive the group.

Note: If a group type has 'Enable Group History' checked, once the 'Process Group History' job runs the 'Archive' button will be enabled on a group.

[](#groupmaps)Group Maps
========================

Clicking the map marker button will take you to an interactive group map showing the members of the group. Depending on the configuration of the group other features may be enabled.

If the group has a geopoint (determined through the address geocoding process or by selecting the point on the map) the location of the group will also be present on the map.

If the group has a defined geofence this fence will be shown on the map. The presence of the geofence will also enable the display of connection status labels at the top of the map. Clicking these labels will show everyone with that connection status in the database who lives within the geofence. This allows you to view possible 'prospect' group members.

Limiting The Display of Certain Connection Statuses
===================================================

In order for a connection status to be displayed as a label, the status must be configured with a 'Color' attribute. This helps determine the pin color for the map marker as well as acts as a global setting to help determine which connection statuses should be mapped. You can set the color for a connection status under Admin Tools > General Settings > Defined Types > Connection Status.

Along the top of the block, you can click the labels (e.g., _Decker Group_ or _Group Members_) to toggle the display of the group's location or member locations. In the example pictured below we're displaying the location of the _Decker Group_ and we clicked the _Group Members_ label (with the green circle) to show the locations of individual members.

Group Map

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-map-v14.png)

[](#addingagroup)Adding a Group
===============================

You can add a new group to the tree by clicking the icon and then selecting the location from the list. Adding a group using _Add Top-Level_ will place the group at the root or top of the tree. Selecting Add Child to Selected will place the group under the currently selected group.

Note
====

If you have a group selected but Add Child to Selected is disabled, then this group type does not allow child groups. See the _[Group Types](#grouptypes)_ section below for more on group hierarchies.

Adding a Group

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/add-group-v13.png)

[](#groupdetails)Group Details
==============================

The group details section displays all of the information about the group. The group type and campus (if configured) will be shown as labels in the banner at the top. A map of the group’s location will also be shown, if configured.

[](#editingagroup)Editing a Group
=================================

Clicking the Edit button from the detail section will allow you to edit information about the group and provide additional configuration settings.

The key features of the edit screen are discussed below.

Editing a Group

![Editing a Group](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-viewer-edit-v13.png)

1 Name

Update this field to change the name of the group.

2 Active

You can inactivate the group by deselecting this checkbox. See [Inactivating a Group](#inactivatingagroup) for additional details.

3 Public

Only groups that are marked as Public can be viewed in the [Group Finder](#groupfinder).

4 Description

Providing a good description for the group lets people know what the group is all about.

5 Group Type

Changing the group type of an existing group is possible, but it does have some consequences. All group attribute data for the group will be lost if the group type is changed.

6 Parent Group

Changing this will move the group to a new parent in the hierarchy. Removing a parent group will move the group to the root or top of the tree.

7 Administrator

Select the individual who is responsible for administrating the group. This will only appear if _Show Administrator_ is enabled for the [group type](#grouptypes), and may be labeled differently (e.g., Coordinator, Director) if an _Administrator Term_ has been configured. Group administrators don't have the security privileges of Leaders, and they aren't members of the group. Generally, this is only used for internal purposes to identify who is responsible for the group from an organizational perspective without having to add that individual to the group as a member.

8 Security Role

This option will enable the group to operate as a security role. The members of the group will be granted access to whatever privileges the group is granted.

9 Campus

Providing an optional campus will link the group to a specific campus. This isn’t shown if you have only one campus.

10 Require Signed Document

This setting is only used if you have a legacy signature provider in place. If you're using a legacy signature provider like SignNow, you'll need to transition to the native electronic signature features in Rock soon. In a future release the _Require Signed Document_ setting for groups will be going away entirely. For details on electronic signatures in Rock check out the [Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9#electronicsignatures).

11 Meeting Details

This area allows you to add locations and times based on the configuration provided through the group type.

12 Group Attribute Values

Any group attributes values added by the group type will be available here for editing.

13 Member Attributes

In this area, you can configure attributes to be assigned to each member of the group. These attributes will be available for editing when adding or editing group members.

14 Group Member Workflows

This section allows you to configure workflows that will be launched when specific events occur with group members.

More Information Below
======================

You may notice that we skipped over a few sections above. Additional information on these areas is provided in later chapters of this guide.

Inactivating a Group
--------------------

If enabled in the [Group Type settings](#commongrouptypesettings), you’ll be prompted to provide additional details after inactivating a group.

Inactivating a Group

![Inactivating a Group](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/inactivating-a-group-v13.png)

1 Inactive Reason

Select a reason for inactivating the group. Depending on the [Group Type settings](#commongrouptypesettings), the Inactive Reason may be optional or required.

2 Inactive Note

Additional details can be recorded here for future reference. For instance, you might indicate why the group was made Inactive. Notes are optional, even if a reason is required.

3 Inactivate Child Groups

If there are child groups, you can choose whether to inactivate them also. You’ll be given this option any time an inactivated group has child groups.

The list of Inactive Reasons is maintained under Admin Tools > General Settings > Defined Types > Inactive Group Reasons. You can restrict which Group Types the reason can be applied to. If no Group Types are selected, the reason can be used with groups of any type.

Inactive Group Reasons Defined Type

![Inactive Group Reasons Defined Type](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/inactive-group-reasons-defined-type.png)

[](#grouptypes)Group Types
==========================

As you start to customize Rock for your ministry, you'll want to define new group types to match your various ministry areas (small groups, ministry groups, etc.)

Tip
===

Once you realize the power of group types, you’ll be tempted to start creating many custom types to fit each of your ministries. Don't do it! Resist this temptation at first. Less is more. Look for common points within your many ministries. This will help you reduce the number of group types that you’ll need. In general, it’s easier to add new group types later than it is to merge group types in the future.

[](#grouphierarchy)Group Hierarchy
==================================

One of the most important concepts to understand as you create new group types is the relationship that groups have to each other. There are two basic hierarchy types to choose from:

*   **Structured Hierarchy:** In this configuration, the levels of hierarchy are defined and limited. For example, you may want to define the hierarchy of your small group ministry to have a single leadership team, under them a level of lay leaders who act as coaches to the groups, and then the groups themselves. In a structured hierarchy you can be sure that this structure is enforced.
    
    Example of Structured Group Hierarchy
    
    ![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/structured-group-hierarchy.png)
    
*   **Flexible Hierarchy:** For some ministry types, you want your groups to have a more unstructured hierarchy. An example of this might be how you set up serving teams. You may want serving teams to be able to have sub-teams that might have additional sub-teams themselves. These hierarchies may be very deep in some ministry areas (like First Impressions) but shallow in others.
    
    Example of Flexible Group Hierarchy
    
    ![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/flexible-group-hierarchy.png)
    

You define these hierarchies by configuring what child groups each group type can have. In the structured example, you would create a group type called _Small Group Leadership_, which would allow child group types of _Group Coaches_, which would allow child groups of _Small Groups_. The _Small Groups_ would not allow any child types, ensuring that your hierarchy was fixed at the third level.

In the flexible hierarchy example, you would configure _Serving Teams_ to have child-types of itself. This guarantees that you can have an unlimited hierarchy.

[](#administeringgrouptypes)Administering Group Types
=====================================================

You administrate group types under Admin Tools > General Settings > Group Types. When adding or modifying a group type there are many areas of configuration, as pictured below:

Group Type Editor

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-type-setting-v13.png)

Let's look at the different Group Types settings you can configure in the _Group Type Detail_ block.

Show/Hide Group Type Settings
-----------------------------

The following Group Type settings, located in the General section of the _Group Type Detail_ block, control which panels and options should be shown or hidden in that block.

| Setting | Description |
| --- | --- |
| Allow Specific Group Member Attributes | Determines if individual groups of this type are allowed to have their own group member attributes. If selected, the Member Attributes section will be shown when editing the group. |
| Enable Specific Group Requirements | Determines if the Group Requirements section will be shown on the _Group Details_ block. |
| Allow Group Sync | Determines if groups of this type are allowed to have Group Syncs. This will show/hide the Group Sync Settings section. If a group of this type already has group syncs, they will be kept. Unchecking this box will **not** prevent them from running. |
| Allow Specific Group Member Workflows | Determines if groups of this type should be allowed to have Group Member Workflows. If selected, the Group Member Workflows section will be shown. |

Common Group Type Settings
--------------------------

| Setting | Description | Example |
| --- | --- | --- |
| Group Term | This is what Rock will use to describe the group on the various screens. | Group, Family, Event, Team |
| Group Member Term | This is what Rock will use to describe the people in the groups on the various screens. | Member, Individual, Participant |
| Roles | Roles describe the relationship of the individual to the group. Are they a leader? Or just a member? | Leader, Member, Prospect |
| Default Group Role | The default role to use when someone is added to the group. | Selection of one of the roles defined for the group, like Member. |
| Allowed Child Group Types | As we discussed above, child group types help determine the hierarchy of the group tree. This tells Rock what kind of groups can be added as children of the current group. | Serving Teams may allow Child Serving Teams |
| Location Types | The types of locations that can be assigned to the group. | Meeting Location |
| Location Selection Modes | Determines how locations should be selected in Location Picker. | The following options are available:
*   Named - Allows you to pick from named locations that have been defined under Admin Tools > General Settings > Named Locations.
*   Address - Allows the input of a new street address for the location.
*   Point - Displays a map that allows for the selection of a specific latitude/longitude point.
*   Geo-fence - Also displays a map that allows for drawing a polygon shape to use as a geo-fence.
*   Group Member Address - Lists all of the addresses associated with the members of the group. Note that if the address of the group member changes the meeting location will not be automatically updated to this new address.

 |
| Multiple Locations | Determines if the group can have multiple locations. | True/False |
| Group Attributes | The custom attributes that each group will have. When adding new Group attributes, the explicit authorizations from the Group Type are copied over to the Group attribute. | Meeting Day, Meeting Time, Topic of Study |
| Member Attributes | The custom attributes that each group member will have. | Hours Per Week Serving, Assigned Bus |
| Group Capacity Rule | Rock allows you to set individual capacities for groups. This configuration setting determines how the capacity should be enforced. If _Hard_ or _Soft_ is chosen, you'll get the option to make capacities required for all groups of this type. | The following options are available:

*   None - This disables the group capacity features.
*   Hard - This places a hard limit on the capacity. Once the capacity is reached no additional group members can be added.
*   Soft - The soft option will warn you when adding a member that is over the group's capacity, but still allows you to add them. This warning only appears in the Group Toolbox, not when adding members from the internal administration pages (e.g., Group Viewer).

 |
| Groups Require a Campus | This setting will require that all groups of this type have a campus when adding and editing. | True/False |
| Show Administrator | This setting determines if groups of this type support assigning an administrator for each group. Group administrators don't have the security privileges of Leaders, and they aren't members of the group. Generally, the group administrator is only used for internal purposes to identify who is responsible for the group from an organizational perspective. This is super useful in reporting because you can easily identify all the groups associated with an individual without having to add that individual to any of those groups. | True/False |
| Administrator Term | This setting allows you to customize the term used for the administrator of the group. | Administrator, Coordinator, Director |
| Enable Group Tag | This determines if tags are allowed for groups of this type. | True/False |
| Group RSVP Enabled | This setting enables [Group RSVP](#grouprsvp) features for groups of this type. | True/False |
| Enable Inactive Reason | If enabled, an _Inactive Reason_ may be provided when inactivating a group. | True/False |
| Require Inactive Reason | Determines whether an _Inactive Reason_ must be provided when inactivating a group. | True/False |

Attendance and Check-in Settings
--------------------------------

| Setting | Description | Example |
| --- | --- | --- |
| Takes Attendance | Determines if the group takes attendance. This will help to enable check-in and metrics features. | True/False |
| Weekend Service | Determines if attendance for this group should be counted towards attending a weekend service. For example, the attendance badge on the Person Profile will only consider attendance in groups with this value enabled. | True/False |
| Group Schedule Options | This setting is used when you want to configure a schedule for the groups of this type. The schedule is used for features like group attendance and group member scheduling. The options you select here help determine the types of schedules that can be configured for the groups. | Schedule type options include:
*   Weekly: This option allows a simple weekly schedule to be selected. When setting up a group of this type, all you'll need to do is select the day of the week the group meets and the start time. We highly recommend that you use this setting as it is the only schedule option that is usable as a filter in the [Group Finder](#groupfinder).
*   Custom: With this option enabled each group can select its own repeating schedule. This option allows for the most power and flexibility, but the schedule that's created can't be used as a filter in the Group Finder.
*   Named: The named option allows you to pick the group's schedule from a list of preconfigured schedules. These schedules are configured under Admin Tools > General Settings > Schedules. Like the _Custom_ option this setting can't be used as a filter in the Group Finder.

 |
| Schedule Exclusions | This setting allows you to define a set of date ranges when all of the groups of this type will not meet regardless of the specific group schedules. This allows you to easily configure breaks and holidays without having to edit each group's schedule individually. | Set of date ranges when groups of this type will not meet. |
| Check-in Rule | Determines how check-in will work if the person is not already in the group. | Add on Check-in (adds the person to the group if they are not already in the group), Already Belongs (the individual must already belong to the group) |
| Group Attendance Requires Location | This option will require that all attendance occurrences have a location. | True/False |
| Group Attendance Requires Schedule | This option will require that all attendance occurrences have a schedule. | True/False |

Advanced Group Type Settings
----------------------------

These settings will be rarely used, but it's helpful to know they exist as you define your group types.

| Setting | Description | Example |
| --- | --- | --- |
| Purpose | The purpose helps categorize different group types together. This allows you the flexibility of creating multiple group types but at the same time providing a way of 'linking' these various types together with a single 'purpose'. To add a new purpose simply add a new _Defined Value_ under Admin Tools > General Settings > Defined Values > Group Type Purpose. | While we recommend that you start with a single group type to manage your various serving teams you could over time add new ones. You would then create a purpose to describe them all as serving opportunities. |
| Group Type Attributes | Custom attributes that will be shared by every group of this type. In other words, every group of this type will have the same value of these attributes. | Group Type Attributes are used by the check-in system. Most group types won't have a need for them. |
| Print Using | When printing check-in labels, should the device's printer or the location's printer be used? The options are:
*   Device Printer - Always print using the device's printer.
*   Location Printer - Always print at the printer configured for the location.

 | This setting will have limited value outside of configuring check-ins. |
| Inherited Group Type | This allows you to create a group type that inherits its attributes from another group type. This is helpful when you have two group types that are very similar, but one needs a few more attributes. | Say you have a _Serving Team_ group type that covers most of your serving groups. Your worship teams, however, would like to add a special attribute for _Instruments Played_. You want this new group type to have all of the same attributes of the current _Serving Team_. To solve this, add the _Serving Team_ group type as the _Inherited Group Type_ of the new _Worship Serving Team_ group type. |
| Show Connection Status | This allows you to show a person's connection status in a column on group member lists. | This comes in handy for trying to understand a person's connection to your organization at a glance. |
| Show Marital Status | This allows you to show a person's marital status in a column on group member lists. | This comes in handy for quickly viewing a person's marital status. |

[](#groupmemberroles)Group Member Roles
=======================================

People often have special roles in groups. Some are leaders; others have unique duties. To help differentiate the members of a group, you can give each a Group Member Role. The list of possible roles is defined on the group type. For more information on the roles available, you can check out the chapter on [Group Members](#groupmembers).

Family Roles
============

As noted above, roles are defined on the group type. While we encourage you to add roles as needed in general, we recommend against adding new roles to Family group types. Using values other than “Adult” or “Child” may cause issues with certain system processes, such as determining Age Classification.

[](#securinggroups)Securing Groups
==================================

Most groups you create will need to have some level of security added to them. They may or may not contain the world’s secrets, but you’ll want to control who can add, edit and/or delete them at the very least.

[](#securinggrouptypes)Securing Group Types
===========================================

By adding security to a group type, you control the base security of every group of that type. Let's say your organization adds a new type of group to help manage some classes you're starting. You may want to create a new group type for this initiative where every class is a group of this new type. By adding security to the group type, you can ensure that every group can be viewed and edited by a select handful of people.

To add security to a group type, go to Admin Tools > General Settings > Group Types. There you will see a list of group types in a table. In the far right column, you will see a button. Clicking this will allow you to set the security for the selected group type.

[](#securingagroup)Securing A Group
===================================

There may be occasions where each group will need different security settings. Don't worry, this is super easy in Rock. To secure a specific group, find the group in the group viewer (People > Group Viewer). On the group details page, you'll find the same button. Clicking this button will bring up the Rock security dialog where you can adjust the security settings.

Groups have a special _Manage Members_ security tab. Anyone with _Manage Members_ security can add, edit and delete group members, but they can't edit or delete the group itself. If no permissions are listed under _Manage Members_, it doesn't mean that members can't be managed. Anyone with _Edit_ access has _Manage Members_ access by default. Also, group Leaders can manage members even if no _Manage Members_ permissions are set or if they don't have _Edit_ permission.

Group Security

![Steps Page](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-viewer-edit-security-v13.png)

Note the inherited permissions at the bottom of this screen. Inherited security is a very powerful concept with groups. By default, a group will inherit the security of its parent groups and group type. This limits the amount of security configuration each group requires. These inherited rights are only a starting point. You can either build on top of these permissions or override them. The choice, and power, is up to you.

At first you may be tempted to go overboard with your group's security settings. In general, it's best to keep them simple. For instance, in the case of home-based Bible studies you may be tempted to secure each group differently to only allow the leader to edit them. While in certain cases you may need to do this, you could also secure all groups with a generic _Small Group Leader_ role. You could then limit which groups a leader was able to navigate to through the configuration of your leader toolbox blocks.

Group Creator Security
----------------------

In older versions of Rock, the person who created a new group would automatically have Administrate permissions for the group they added. This behavior can now be controlled via block settings.

The Group Detail block has a setting called _Add Administrate Security to Group Creator_. When this is set to "Yes" then the person who created the group will automatically have the security permission to _Administrate_ the new group being added.

The default value for this setting is "No", which means the person creating the group will not be able to administrate the group unless they have permissions from another role that would allow them to do so. If you started off on an older version of Rock, this won't retroactively impact security permissions for any existing groups.

[](#groupmemberroles)Group Member Roles
=======================================

Group member roles play an important part in how groups are secured. Each role can be configured to provide _View_ and / or _Edit_ rights. This is configured under Admin Tools > General Settings > Group Types.

[](#inheritedpermissions)Inherited Permissions
==============================================

When determining the security of a group it’s important to consider not only the specific permissions of the group but also the inherited permission rules. The inheritance rule for groups is:  
  
Current Group > Group Type Security > Parent Group Security > (continue up the hierarchy until it reaches the root group) > Group EntityType Security > Global Default.

The primary inheritance rules come from the group’s hierarchy, but the system has a built in ‘choke point’ check on the security of the group type first. Why is this? Adding a quick check of the group type's security allows specific types of groups to have unique security considerations. Take for example a group type for ‘Addiction Classes’. Adding a check for the group type's security allows a way for limiting visibility to these groups without having to worry about inconsistencies in the security of the group hierarchy. In most cases the group type will not have specific security so this check will not matter, but it’s there if you need it.

If when checking the group’s security, the person is blocked access there’s still one last check to be done. Roles defined on the group type can be configured to provide access to the group. For instance, you can configure the leader of a group to have view/edit rights to that group. Likewise, the member of a group could be set up to have view access. This allows a very simple and flexible way of providing access to external individuals.

[](#groupstrategies)Group Strategies
====================================

The flexibility built into Rock groups is very powerful. But like a puzzle when you open the box and dump out the pieces, it can be a little overwhelming to get started. Below are a few strategies for you to consider first. Don’t be afraid to ask others how they have configured their groups. The [Ask](https://www.rockrms.com/Rock/Ask) section of the Rock website is perfect for these kinds of discussions.

[](#multiplegroupviewers)Multiple Group Viewers
===============================================

Rock comes preconfigured with a general group viewer People > Group Viewer, but you can add more. Say, for instance, your church has a strong small group ministry. You may want to create a new _Group Viewer_ page just for this ministry. You can do this by adding a new page under _People_ (or any other page you like) and adding the group viewer blocks to the page as described below.

Group Viewer Blocks

![Group Viewer Blocks](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-blocks-v14.png)

The following blocks are used to make a group viewer page. We recommend that you use the _LeftSidebar Panel_ page layout.

1 Group Tree View

Add a group tree view block to the sidebar zone to help you navigate your group hierarchy.

2 Group Detail

Add the group details block to the top of the main zone.

3 Group Member List

Next, add the group member list block under the group details.

When you set up the _Group Tree Block_ you can set the root group to start with, and limit which types of groups it will display. This allows you to make a very specific small groups viewer with just a couple of clicks.

[](#groupfolders)Group Folders
==============================

As you start to think about your group hierarchies, make sure that you plan for growth. This might mean that you create special groups in your hierarchy to help categorize your groups. You can think of this like using folders on your computer to help manage all of your files. You could throw all of your files in one folder, but you’d never find anything. Adding folders helps you arrange and sort your groups. While folders add little value to your computer’s file system, these _category groups_ can actually be beneficial beyond just organizing. For instance, if you add these category groups to your serving teams, the categories can act as leadership teams for their sub-groups. Take a look at this example of the first impressions serving teams at a large multi-campus church:

Sample Serving Hierarchy

![Sample Usher Ministry](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/sample-usher.png)

Notice how each campus and ministry area has a leadership group. These groups not only help arrange the serving teams, but they can also have members of their own that represent the leadership team for each area.

[](#groupschedules)Group Schedules
==================================

Let's take a brief moment to see the various scheduling options for groups and how these settings affect the features available.

[](#typesofgroupschedules)Types of Group Schedules
==================================================

There are three types of group schedules that can be configured for a group. To help simplify the editing of a group we allow you to configure which of these options are available to groups of each particular type. For instance, you'll probably want to configure your _Small Groups_ to only be configured to allow the _Weekly_ schedule. You can select which of these options are available for a specific group type under Admin Tools > General Settings > Group Types.

Weekly
------

This option allows a simple weekly schedule to be selected. When configuring a group, one only needs to select the day of the week the group meets and the start time. We highly recommend that you use this setting because it is the only schedule option that is usable as a filter in the [Group Finder](#groupfinder). For example, if you set your small groups to the _Weekly_ schedule option, your website visitors can find groups that meet on a specific day of the week that's convenient for them.

Custom
------

With this option enabled, each group can select its own repeating schedule. This option allows for the most power and flexibility, but the schedule created can't be used as a filter in the Group Finder.

Named
-----

The Named option allows you to pick the group's schedule from a list of preconfigured schedules. These schedules are configured under Admin Tools > General Settings > Schedules. Like the Custom option, this setting can't be used as a filter in the Group Finder.

[](#scheduleexclusions)Schedule Exclusions
==========================================

Picture this: you've just finished entering all of your small groups into the system with their correct schedules and your supervisor just announced that, "groups are taking a two-week break." Not a problem! Adding a _Schedule Exclusion_ to the _Small Group_ group type will add the exclusion(s) to the schedule of all groups of this type. This is done under Admin Tools > General Settings > Group Types. This not only keeps the schedule accurate, but it also keeps attendance reminders from being sent while groups are not meeting.

[](#groupattendance)Group Attendance
====================================

Whether you're following the leadership principle of _inspect what you expect_ or you simply want to keep a pulse on the health of a group, the group attendance feature can simplify the process of gathering participation details of your group members.

[](#configuringagroupforattendance)Configuring a Group for Attendance
=====================================================================

Before a group can take attendance, its group type must first be configured to enable attendance tracking under Admin Tools > General Settings > Group Types. From here you should select the group type you'd like to configure check-in for. Under the _Attendance / Check-in_ tab enable the setting _Takes Attendance_.

While this one setting is all you need to enable the attendance features, there are a couple of other settings that help improve the attendance tools:

*   **Group Schedule Options:** While a group schedule is not required to take attendance, having a schedule will simplify the attendance entry because it will guide the user to enter attendance on those dates when the group meets.
  
*   **Schedule Exclusions:** While each group can set its own schedule (including exclusion dates) you may want to set exclusion dates for every group of this type. This is especially helpful when using the simple schedule option where you only specify the day of the week and the start time for a group. Adding these group type schedule exclusions helps to keep email attendance reminders from being sent.
  
*   **Send Attendance Reminder:** This checkbox will enable the sending of an attendance reminder email or text message to the group leader the day the group is scheduled to meet.

[](#enteringattendanceinformation)Entering Attendance Information
=================================================================

Internal Attendance Features
----------------------------

There are several ways to collect group attendance. The first is to use the internal attendance features built into the Group Viewer under People > Group Viewer. You'll notice an attendance button on the group details block for groups that are configured to take attendance.

Group Attendance Button

![Group Attendance Button](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-attendance-v14.png)

Selecting this option will bring up the group attendance grid. This grid lists the previously entered attendance for the group and allows you to enter new attendance records from the add button in the grid's header or footer.

Attendance List

![Group Attendance List](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-attendance-list-v13.png)

Selecting the button will take you to the attendance entry screen pictured below. From this screen you can check off all those who attended the group or note that the group did not meet on its scheduled date and time. You can also print an attendance sheet, which allows attendance to be collected via a register.

Attendance Entry

![Attendance Entry](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/attendance-entry-v15.png)

1 Attendance For

The date for which attendance is being recorded.

2 Schedule

If a Named schedule is being used for this group, it will be shown here.

3 We Did Not Meet

Select this checkbox if there was no attendance because the group did not meet. This distinction is helpful for record-keeping, but also impacts areas like [Streaks](https://community.rockrms.com/documentation/bookcontent/39#streaksoverview).

4 Attendance Location

If enabled in the block's settings, here you can select the type of attendance, like physical (in-person) or virtual (online). If you need other options, you can manage these values using the _Attendance Types_ Defined Type. Edit the Attendance Entry block's settings to restrict the available options to only certain Attendance Types, or to change the "Attendance Location" header to say something else.

5 Attendance Count

After attendance has been entered, the count of attendees is displayed.

6 Search

For larger groups it can be helpful to search for the people you're looking for.

7 Notes

If enabled in the block settings, notes can be added here. Notes will appear in the Attendance Summary Notification email if you are using that feature. The label “Notes” can be customized in the block settings.

8Attendance Roster

Click the Roster button to generate a printer-friendly version of the attendance page. This will be a Word document that you can then update, print or save.

9 Members

Attendance is tracked by clicking the cards of those who attended. You can see here that nine people were in attendance on that day.

External Attendance Features
----------------------------

Entering attendance on this internal screen is great for staff-entered attendance. Often times you will want to push the responsibility of attendance entry to the group leaders. One way to do this is to allow them access to the leader toolbox. See the [Group Leader Toolbox](#groupleadertoolbox) chapter for details on this set of tools.

Rapid Attendance Entry
----------------------

The Rapid Attendance Entry method of recording attendance may come in handy for your groups. To learn more, see the [Rapid Attendance Entry](https://community.rockrms.com/documentation/bookcontent/10#rapidattendanceentry) chapter of the [Checking-out Check-in](https://community.rockrms.com/documentation/bookcontent/10/) manual.

[](#attendancereminders)Attendance Reminders
============================================

You can also configure Rock to send a communication to the group leader on the day that their group meets to remind them to take attendance. This communication will include a link to take them straight to the attendance detail screen. Since each group leader gets an individual communication, we have enabled this link to not require a login to help simplify the process (the user however must have edit rights to the group to enter attendance).

There are two other key configuration points for attendance reminders.

The first is the system communication that is used as the template for the reminder. This template can be edited by navigating to Admin Tools > Communications > System Communications > Group Attendance Reminder. See our [Communicating With Rock](https://community.rockrms.com/documentation/bookcontent/8/) guide for more information. If the template is configured for both email and SMS, and if your system is set up to send emails and text messages, then the reminder can use either medium. Group leaders will receive either an email or a text, depending on how the job is set up.

The other configuration point is the job that is run to send the communications on a daily basis. This job must be created for every group type that requires reminders. For more information on this job see the [Service Jobs Relating To Groups](#servicejobsrelatingtogroups) chapter below.

Before You Report
=================

When running reports on attendance data be sure to filter on _Did Attend_ to show those who attended the event.

[](#groupattendancedigest)Group Attendance Digest
=================================================

The _Group Attendance Digest_ is an email containing a summary of attendance information for one or more groups. See the [Service Jobs Relating to Groups](#sendgroupattendancedigest) chapter for information on setting up the Send Group Attendance Digest job.

Example Group Attendance Digest Email

![Example Group Attendance Digest Email](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-attendance-digest-email-v10.png)

The Group Attendance Digest may not be the right fit for all of your groups. It’s only intended for a specific type of groups structure that we’ll describe below.

Group Structure for Attendance Digest

![Group Structure for Attendance Digest](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-attendance-digest-flowchart.png)

1 Parent Group

This is the Parent Group for all of the other groups below it. This group will be added to the Send Group Attendance Digest job configuration, which we’ll talk about in the [Service Jobs](#servicejobsrelatingtogroups) chapter below.

2 Region or Area

Individuals in these groups who have a group role that’s configured as _Is Leader_ will receive a digest email for the associated child groups. If these groups have multiple _Leaders_, then each will receive their own email individually.

3 Attendance Group

These are the groups where attendance is being recorded. The attendance in these groups will be emailed to the _Leaders_ of their respective parent groups. For instance, the attendance in ‘Group #3’ and ‘Group #4’ will be emailed to the _Leaders_ in ‘Region #2’.  
  
The _Leader_ of the attendance group will be contacted when the ‘Email Leader’ link is clicked from the Attendance Digest email as shown in the prior screenshot above.

The chart above has three “Regions” with two “Groups” below each region. But you’re not limited to those numbers. You can have only one region with five child groups below it, or ten regions with a single child group each. The only requirement is that you need all three hierarchical levels, with a single parent group at the very top.

[](#groupsync)Group Sync
========================

Have you ever thought, _"With people constantly coming and going, how am I supposed to keep the members of this group up to date in Rock?"_ Well, the Group Sync might just turn out to be your next best friend.

Group Sync automates the process of keeping group membership updated by adding and removing members for you. Take, for instance, a security group that gives access to a toolbox for your group leaders. Without Group Sync, every time a leader is added or changed someone would have to remember to manually adjust the toolbox security group accordingly. With the Group Sync feature, this can all be automated for you.

[](#configuringgroupsync)Configuring Group Sync
===============================================

Configuring your groups to sync takes only a few one-time steps. After you've got it all set up, you can sit back and watch Rock do the work for you.

To get started, you'll want to make sure that Group Sync is enabled for the groups you're working with. This is set at the Group Type level, as described in the [Group Types](#grouptypes) chapter above.

Next, you'll need to create a [Data View](https://community.rockrms.com/documentation/bookcontent/6#filteringusingdataviews) that returns the people who should be synced as group members. The list of people in this data view will be compared against the list of the group's current members. If there are any differences between those lists, the group's membership is updated so that it matches the data view.

With Group Sync enabled and your data view in place, go to the group you'd like to sync and edit its details. If you have _Administrate_ access to the group, you'll see a panel labeled Group Sync Settings. At first, when you're just getting started, there won't be anything listed in this panel. Click the to add your sync as described below.

Group Sync Settings

![Group Sync Settings](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-sync-settings-v14.png)

1 **Sync Data View**

This is the data view you created to use as the source of your sync. The people found by the data view are compared against the current members of the group, and changes to group membership are made if there are differences.

2 **Group Role to Assign**

Select the role you want to assign to group members added by the selected data view. Each sync works with one role at a time, so you'll need a second sync like this one if you want to automatically manage both 'Leaders' and 'Members'.

3 **Sync Interval**

This setting controls how frequently this group should be synced. Having a lot of group syncs running constantly throughout the day might create performance issues in your system, even if no changes are made. So, try to keep the frequency as low as possible according to your needs. When setting the sync interval here, you'll want to keep the Group Sync job in mind, which we'll discuss a little later below.

4 **Welcome Communication**

If you'd like to notify new group members of their new status in life you can configure a system communication to let them know. We've provided a good template called _Sync Welcome To Group_ that covers most cases. If the member already had a login, it even reminds them what their username is (not their password though, we store that in a super-secret way that not even we can decrypt). If you've enabled _Create Login During Sync_ below, and if the person doesn't already have a login, the communication will include their new username and password (we know the password in this case because we just created it).

5 **Exit Communication**

You can also choose to send a notification letting people know that they're no longer part of the group. This can be helpful in some cases but isn't required. We've provided a template called _Sync Exit From Group_ for this purpose.

6 **Create Login During Sync**

When syncing with security roles, you may also want the job to create logins for new group members. This will give those members access to use their new permissions.

[](#groupsyncjob)Group Sync Job
===============================

As noted in the prior section above, the _Sync Interval_ setting for the group controls how frequently the group's members are checked against the data view. However, this is only part of the equation.

There's a system job called _Group Sync_ that actually does the syncing we've been describing in this chapter. By default, this job runs once every 20 minutes. Most of your groups won't need to be synced that frequently, so you generally don't need to worry about when the job runs. The only time it might cause an issue is if you've configured a group to sync at a more frequent interval than the job. That should be an extreme case, but if you need to change the frequency of the job you can do so under Admin Tools > System Settings > Jobs Administration.

Security Tip
============

The _Group Sync_ job has a setting to create new logins in such a way that the individual will need to reset their password on their first login. This setting is initially set to not require a reset. Feel free to change this if you'd like.

[](#managingsyncedgroupmembers)Managing Synced Group Members
============================================================

Once a Group Role is managed by a sync, members cannot be added to that role manually. You can still manually add people to the group, just not with that role.

That's because if you're manually adding a person to a synced group, then it means the person doesn't meet the criteria of your data view. The sync would remove that person from the group the next time it runs, undoing your manual work. That's why each sync is specific to a role, so you can have some roles that are synced and others that are managed manually.

For the same reason, you can't manually remove synced group members. If you did, they would just be put back in the group by the sync the next time it runs. If you need to remove a synced group member, consider updating the data view to account for that person's scenario.

If you want to stop syncing a group, you can remove the sync from that group’s settings, and it will keep the members. At that point, members of the group would need to be managed manually.

You’ll also notice a icon on the group's member list, to notify you that the group and that member are being automatically synced. The icon is also displayed in the upper-right corner of the list. If you hover your cursor over the icon, Rock will display the roles being used to sync the members of the group.

[](#groupfollowing)Group Following
==================================

Hopefully by now you've seen how to follow a person. If not, stop what you're doing and [read this](https://community.rockrms.com/documentation/bookcontent/5#following). You can also follow a group. Why...? Following a group allows you to put that group into easy reach from your [My Dashboard](https://community.rockrms.com/documentation/bookcontent/5#mydashboard) page.

[](#howtofollow)How To Follow
=============================

Following is super simple. First navigate to the group you'd like to follow. Then, press the follow star in the upper right of the group detail block.

Following A Group

![Following A Group](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-follow-v14.png)

Also note that when you have an event registration that places registrants into a group, you can configure the registration to notify all individuals who are following that group.

[](#groupmembers)Group Members
==============================

Group members are a key component of groups. Like groups, they come with a ton of options for customization.

[](#groupmemberroles)Group Member Roles
=======================================

People often have special roles in groups. Some are leaders; others have unique duties. To help differentiate the members of a group, you can give each a _Group Member Role_. The list of possible roles is defined on the group type. Each role has the following configuration options:

*   **Is Leader:** Determines if the individuals in this role are considered leaders within the group. This option enables additional functionality within Rock.
  
*   **Receive Requirements Notifications:** Individuals in this role will receive notifications of group members who do not meet the group's requirements. This only applies if you've configured the [Send Group Requirements Notification](#send-group-requirements-notification) job.
  
*   **Can View:** This gives the members of this role the ability to view the group information in various group toolbox blocks.
  
*   **Can Edit:** Allows members to edit group information in various group toolbox blocks.
  
*   **Can Manage Members:** Individuals with this role will be able to manage group members (e.g., change their role, status, etc.) regardless of the security settings on the group itself.
  
*   **Minimum Required:** Rock allows you to have rules on how many individuals can have certain roles. This setting configures the minimum number of individuals who must have this role. This will keep you from deleting a group member if the deletion will drop the number of individuals with this role below the minimum.
  
*   **Maximum Allowed:** This setting is like the minimum but limits the number of people who are allowed this role. For instance, you might configure a group type to only allow one person to be the leader. You can also use this option to limit the number of adults in a family. A family is a group type.
  
*   **Default:** When someone is added to a group, this will be the default role they'll be assigned to. Note: Some blocks will have a block setting that overrides this default. This setting will handle cases when a block does not provide an overriding setting.

[](#groupmemberstatus)Group Member Status
=========================================

The status of the group member tells you the person's standing within the group. The available statuses are:

*   **Active:** The individual is currently participating in the group.
  
*   **Inactive:** The individual is not currently participating in the group. Usually, this status denotes that the person did participate at one point but isn't doing so anymore. How you choose to use this is up to you.
  
*   **Pending:** The individual has not yet fully joined the group.

[](#groupmemberattributes)Group Member Attributes
=================================================

Group members can also have attributes. This allows you to track custom data points for each person as it relates to their membership in the group. Usually, these _Group Member Attributes_ are defined on the _Group Type_ under Admin Tools > General Settings > Group Types. When they're configured here, the attributes will apply to every group member in groups of this type.

You can also add Group Member Attributes to a specific group under People > Group Viewer > Group if you have _Administrate_ access to the group. This also requires that there is at least one Group Member Attribute defined at the group type level, or that the group type has _Allow Specific Group Member Attributes_ enabled.

[](#editingagroupmember)Editing a Group Member
==============================================

Selecting a group member from a group member list will take you to the group member detail screen shown below. From here you can change the role and status of the group member. You will also be able to modify any of the _Group Member Attributes_ defined for the group.

Editing a Group Member

![Editing a Group Member](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-member-detail-v15.png)

1 Person

The name of the person is shown here for reference. You can't change the group member from here. Instead, you would add a new group member or remove an existing member.

2 Notified

This indicates whether the group leader has been notified about the person's membership in the group. This only has an effect if you're running the Group Leader Notification job.

3 Role

We talked about group member roles above. This is where you set or change the role that this group member has in the group.

4 Note

Here you can add a note about the group member or their membership in the group.

5 Member Status

Group members can either be Active in the group, Inactive or Pending.

6 Communication Preference

This sets the person's communication preference as it relates to this group's communications. This does not impact the Communication Preference that would be set on the person's profile.

7 Quick Communication

Click this icon to send a quick SMS or Email communication to the group member.

8 Move Group Member

Click this icon to transfer the person from this group to a different group. See the next section below, and the [Alternate Placements](#alternateplacements) chapter, for more details.

9 Group Member Notes

Here you can track notes about the group member. These can optionally stay with the group member if they are moved to a different group.

As pictured above, you'll see a note field for the group member. This is useful for keeping basic notes. Rock uses this field to provide specific information about the group member when processing things like workflows and alternate placements.

If a group member has a note attached, a small note icon will display on the group member list to help identify this fact.

As noted above, you can send a quick communication to the group member from the group member detail screen by clicking the icon. You can send either an email or an SMS text message. This is best used when you just want to send a quick note to a single group member.

Send Group Member Communication

![Send Group Member Communication](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/send-group-member-communication-v15.png)

[](#movinggroupmembers)Moving Group Members
===========================================

From the Group Member Detail screen discussed above, it's also possible to move a group member from one group to another by clicking the icon. When you do, you'll be given the option to transfer any group member notes to the new group. If you're working with [Fundraising Groups](#fundraisinggroups) you'll also see an option to move donations to the new fundraising opportunity.

Moving a Group Member

![Moving a Group Member](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/move-group-member-modal-v15.png)

If the group member's current group and the destination group share group member attributes with the same key, then those attributes will be retained. Otherwise, when the group member is moved, the member's attribute information will be lost.

[](#groupmemberworkflows)Group Member Workflows
===============================================

By now you realize that groups are the backbone of Rock. So, it makes sense that we'd invest in making them as powerful as possible. Group Member Workflows are one of these investments. So, what do they do?

Group Member Workflows are an easy way to trigger workflows to launch when the state of a group member changes for a specific group. These events include:

*   Being added to a group
*   Being removed from a group
*   Member status changes (e.g., status changed from _Pending_ to _Active_)
*   Member role changes (e.g., role changed from _Attendee_ to _Leader_)
*   Member attendance
*   Member alternate placements (discussed in detail in the next chapter)

The workflows you define for these triggers can be configured for all groups of a specific type under:  
Admin Tools > General Settings > Group Types or for a specific group under People > Group Viewer > Group. Below is the screen you'll see in either case. Note that workflows for a specific group can only be added if _Allow Specific Group Member Workflows_ is enabled for the Group Type.

Required Access
===============

You must have _Administrate_ access to a group to be able to configure Group Member Workflows.

Group Member Workflow Settings

![Group Member Workflow Settings](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-member-workflows-v14.png)

1 **Name**

This is the name you want to use to describe the trigger.

2 **Active**

Indicates whether this trigger is currently active.

3 **Start Workflow**

The workflow type you'd like to start when the trigger conditions are met.

4 **When**

This determines when the trigger should be considered.

5 **With Status Of**

This allows you to filter when the trigger is applied for members with a specific status.

6 **With Role Of**

This allows you to filter when the trigger is applied for members with a specific role.

7 **From Status/Role Of**

Determines what the original status/role was to use as a trigger filter.

8 **To Status/Role Of**

Determines what the new status/role must be for the trigger to fire.

9 **First Time**

Determines if this trigger should only be activated the first time a person attends this group, or every time.

See our [Blasting Off With Workflows](https://community.rockrms.com/documentation/bookcontent/12/) guide for more information on working with workflows.

[](#tipsforcreatingtriggeredworkflows)Tips For Creating Triggered Workflows
===========================================================================

When workflows are started from the group member triggers, they will pass in a few attributes for your convenience (as long as the attributes are defined). These include:

*   **Person:** The person that the group member represents.
*   **Group:** The group that the person is a member of.
*   **AttendanceDateTime:** Only applies to the Member Attended Group trigger type and is the date/time that person attended the group.

Be Persistent
=============

Make sure the triggered workflow is _Automatically Persisted_. This will ensure it works correctly and as intended.

Whenever possible, the workflow will also pass in the _Group Member_ model as the entity of the workflow. You can access the group member properties and attributes by using the _Attribute Set From Entity_ action combined with Lava like the following:

{{ Entity | Attribute:'HasBook' }}  
{{ Entity.GroupMemberStatus }}  
{{ Entity.GroupRole.Name }}  
{{ Entity.PersonId | PersonById | Property:'PrimaryAlias' | Property:'Guid' }}  

When Group Member Won't Be Passed
=================================

Some member workflow triggers won't pass the group member as the entity. For instance, for the _Member Removed from Group_ and _Alternate Placement_ workflow types there won't be a group member left to pass when these events are launched.

[](#alternateplacements)Alternate Placements
============================================

In some group usage scenarios, you may want group leaders to be able to remove someone from their group but not have the group member fall to the wayside. Alternate placements allow you to do just that.

The first step is to configure the group type to have an alternate placement group member workflow. We discussed creating these workflows in the previous chapter. The _Member Placed Elsewhere_ workflow trigger type has two options: _Show Note_ and _Require Note_. This allows the group leader to notate the reason why they are seeking to place the group member elsewhere.

Configuring an Alternate Placement Workflow

![Configuring an Alternate Placement Workflow](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/alternate-placement-setup-v13.png)

The _Group Member Detail_ screen contains a button that allows you to initiate an alternate placement workflow. When you click this button, Rock displays the _Move Group Member_ window, where you can select which configured workflow to launch (if there is more than one) and allow the leader to enter a note (if it's configured to do that).

Alternate Placement Button

![Alternate Placement Button](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/alternate-placement-button-v15.png)

Alternate Placement

![Configuring an Alternate Placement Note](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/move-group-member-modal-v15.png)

When the Move button is clicked, the workflow is launched, and the person is removed from the group.

[](#tipsforcreatingtriggeredworkflows)Tips For Creating Triggered Workflows
===========================================================================

When workflows are started from the group member triggers, they will pass in a few attributes for your convenience. These include:

*   **Person:** The person that the group member represents.
*   **Group:** The group that the person is a member of.
*   **Note:** The note that was entered by the group leader.
*   **Group Member Status:** The status that the group member was when the workflow was launched.
*   **Group Member Role:** The role name of the group member when the workflow was launched.
*   Any attributes that match those of the group member attributes configured for the group.

[](#grouphistory)Group History
==============================

As you work with groups—adding and removing members, adjusting schedules and member roles, etc.—there may be times when you want to get a 40,000ft view to see how they're doing. Rock's Group History feature allows you to do just that.

Group History takes all of the configurations and changes made to a group and compiles them into timeline and table views that let you easily view the life and health of that group. Here's an example of a Group History timeline view.

Group History

![Group History](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-history-timeline-v13.png)

Rock ships with Group History enabled for small groups and serving groups. You can enable and disable Group History for any group type. However, because a lot of data can build up quickly, we recommend using it only with your more regular, stable groups. For example, enabling Group History for a Sunday School group where different children are in attendance each week would lead to crowded (and potentially messy) timelines and tables. Enabling it for a security team or other serving group that experiences fewer fluctuations makes a lot more sense.

OK, let's take a closer look at how to set up and use Group History.

[](#enablegrouphistory)Enable Group History
===========================================

To enable Group History for all groups of a certain group type, begin by locating the group type in:  
Admin Tools > General Settings > Group Types.  
In the _General_ section of the _Group Type Details_ screen, check the _Enable Group History_ checkbox. You can customize the group type's display options in the _Display Options_ section by assigning it a color and icon. These options come into play in a number of the Group History views, but we'll get into that later. For now, click Save and Rock will enable the history and options for that group.

Enable Group History

![Enable Group History](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-type-detail-enable-group-history-v13.png)

[](#viewgrouphistory)View Group History
=======================================

Now that you have Group History enabled, you can jump to that 40,000ft view. Locate the group in the Group Viewer and click the button.

View Group History

![View Group History](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-hisotry-new-v13.png)

Archived Groups
===============

You can Archive a group instead of deleting it. Archiving removes the group from the Group Viewer and other places where groups can be seen but allows you to restore it later. When a group has been marked as Archived and you want to bring it back go to: Admin Tools > General Settings > Archived Groups Click on the icon to unarchive the group.

Note: If a group type has 'Enable Group History' checked, once the 'Process Group History' job runs the 'Archive' button will be enabled on a group.

This brings up the group's timeline view, shown earlier, including both member and group history information. The Group History screen shows the history of the group by day for the lifetime of that group. Each event on the timeline has an icon that corresponds to a type of action.

*   \- Member added
*   \- Member removed
*   \- Group edited
*   \- Other/general group action

If there is more information than space available for an event on the timeline, you can view the entire contents by hovering your mouse over the text. For multiple occurrences on the same day, Rock will display a link to expand the area to display all of the actions for that day.

To hide member history and view only actions made on the group level, click the button.

You can also zoom in from that 40,000ft view and get a closer look at the history of the members of a group. Click Member History to display a group's members and the history/dates of their involvement in the group. Click on a specific person to view a timeline of their involvement with the group.

Group Member History

![Group Member History](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-member-history-v13.png)

[](#viewgrouphistoryinapersonsprofilepage)View Group History in a Person's Profile Page
=======================================================================================

Individual group history is also available on the _Person Profile_, under the _Groups_ tab.

Group History in Person Profile

![Person Profile Group History](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/person-profile-group-history-v14.png)

Hover your mouse over any of the events on the person's timeline to display the details of that event. Note the timeline colors correspond to the color assigned to the group back when Group History was enabled. If the person is a group leader, the color will be slightly darker. You can also click on a specific event to drill down into the group. As with all of the tabs on the _Person Profile_, the information is filterable. Click the button to display the filter options.

[](#groupleadertoolbox)Group Leader Toolbox
===========================================

The group leader toolbox can be found on the external site under _My Account_. The toolbox is made up of just a couple of pages and blocks that provide a ton of options. The out-of-the-box configuration is meant more as a sample of what's possible rather than a _one size fits all_ model. Let's look at each of the blocks in detail to give you an idea of what you can achieve.

[](#myaccountgroups)My Account - Groups
=======================================

Along the right of the _My Account_ page is a listing of groups to which the person belongs. The individual can also see their role within the group. Through block settings you can configure which group types to show or hide. Using Lava, you can adjust the look of this block to your heart's content.

Group List in My Account

![Group List in My Account](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-list-in-my-account-v12.png)

Clicking on any group in which the person is a leader will open the group leader's toolbox.

[](#grouptoolbox)Group Toolbox
==============================

Group Toolbox

![Group Toolbox](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-toolbox.png)

This is the money block. With this block, you have access to every detail of a group that's accessible in a Lava template. It also has some special _Postback Commands_ that allow you to enable editing of the group details and its members. If enabled in the block settings, you can even allow individuals to set their communication preference for the group. The sky is really the limit when it comes to customizing the look of this block.

Note on Security
================

When adding a person to the group the default view allows you to select the new individual from those already in the database. In order for this search to work you will need to adjust the security on the API/People/Search REST endpoint. You can find this under:  
Admin Tools > Security > REST Controllers > People.

If you would prefer not to allow group leaders to search the list of people in the database, you can provide an alternate _Group Member Add Page_ in the block settings. On this new page you may choose to set up a workflow entry form, a group registration block or a simple email form.

[](#groupattendancelistanddetail)Group Attendance List and Detail
=================================================================

Group Attendance List

![Group Attendance List](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/external-attendance-list-v10.png)

Group Attendance Entry

![Group Attendance Entry](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/external-attendance-entry-v15.png)

These two blocks allow you to track the attendance of a group. By default, these options will only show for groups of a type with attendance enabled.

[](#groupfinder)Group Finder
============================

The group finder is another very powerful block that allows your website visitors to search for a group and register quickly. The group finder has been configured on the external website under Connect > Small Groups.

If configured in the block settings, it allows for searching by the day of the week that the group meets and the study topic. Selecting your criteria and clicking Search returns all of the groups that match those criteria. From there you can choose to register for a group.

Public Groups
=============

Only groups that are marked as Public can be viewed in the group finder. You can change the public setting by editing the group.

Group Finder

![Group Finder](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-finder-v12.png)

While this default configuration should work for many organizations, there are a number of ways you can alter the experience by modifying the settings of this block. Let's take a look at what's possible in the block's settings:

Group Finder Block Settings

![Group Finder Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-finder-block-settings-v13.png)

1 Group Type

Start by choosing the Group Types you would like to be available through the group finder.

2 Hide Overcapacity Groups

If the group is full, then you may not want to show it in the Group Finder. This setting lets you hide groups that have reached (or exceeded) their maximum capacity.

3 Load Results on Initial Page Load

When this is enabled, a person coming to the page will see the group map and the available groups, even though they haven't searched for anything yet. When this is disabled, the person needs to do a search before the map and groups become visible. This only applies if you've enabled filters the person can search on, like _Day of Week_ or _Campus_. See below points for more details.

4 Geofence Group Type

Some organizations may want to limit the results to certain geofenced areas that are close to an address that is provided during the search. For instance, some churches with neighborhood ministries may only want to show groups that meet in a person's neighborhood. These churches would create a group type to manage these _neighborhoods_, each as a group of that type. Selecting this group type would then prompt the user to enter their address as part of the search criteria. This address would be used to determine which neighborhood geofence they live in so that only groups in that fence are displayed.  
  
Below the Geofence Group Type selector, you have options for changing what your filters are called.

5 Location Types

You can filter groups by Location Type, to show only groups with locations of a certain type. For instance, you might only want to show groups with a Location Type of _Meeting Location_. You can set a Location Type for each Group Type individually.

6 Display Day of Week Filter

If your groups have a "weekly" type schedule, you can offer people either a single-select or a series of checkboxes they can use to find groups which meet on the day they choose.

7 Display Time of Day Filter

If your groups have a "weekly" type schedule, you can offer people the ability to filter for groups meeting at a specific time. They can choose Greater Than 5:00pm to find groups which meet in the evening, for instance.

8 Display Campus Filter

Allows people to filter the list of groups according to the campus they belong to.

9 Enable Campus Context

Configures the block to automatically filter for groups belonging to a specific campus, if you've set the Campus Context for the page.

10 Display Attribute Filters

Allows you to choose which Group Attributes people can filter the list by. The same attribute must exist on all of the selected group types in order to be used as a filter.

11 Campus Type/Status

You can restrict which campuses are available for selection by limiting them to certain types or statuses. For instance, this would be helpful if you only want to list _Physical_ campuses that are _Open_.

12 Show Map

This section allows you to display or hide the map on which the filtered groups will be shown. You can also choose the Map Style and size (Map Height).

13 Map Marker

You can change the style of the markers that appear on the map. Options include:

*   Pin
*   Marker
*   Marker With Dot
*   Circle

You can also change the color of the markers by updating the _Marker Color_.

14 Min/Max Zoom Level

You can use the Minimum and Maximum Zoom Level settings to control exactly how far a person can zoom in or out on the map. These settings help people find groups within a reasonable area, while giving you the option to not let them zoom in to a specific house or building.

15 Initial Zoom Level

This controls the zoom level on the map when the page is loaded. You might set it to something like _10 - City_ to give a wider view of all the available groups.

16 Marker Auto Scale Zoom Level/Amount

These settings relate to the markers on the map. For instance, if your map can be zoomed in to the Building level, you can set the Marker Auto Scale Zoom to the Street level. This would mean that the person can zoom the map in to see buildings, but the marker would still be at the street level. This gives some ambiguity to the exact location of the group, which can be good for privacy if it's a person's house.

17 Location Precision Level

This is another setting to help mask the exact location of a group, which you might want to do if it's a person's home. This determines how precise of a latitude/longitude to provide to the map. The options include:

*   Precise
*   Narrow
*   Close
*   Wide

18 Group Window Contents

The HTML and Lava used to display a pop-up window on the map when a group is clicked. By default, it will show the group name, location, attributes, a link to the Group Detail Page (if configured) and a link to the Register Page (if configured).

19 Lava: Show Formatted Output

Allows you to configure your own output based on the groups matching the filters. If you enable both the Lava and grid, the Lava results will be shown above the grid. Your Lava will have access to an array called Groups which you can loop through to display groups matching the filters. See our [Lava](https://community.rockrms.com/lava/) documentation for more information.

20 Show Grid

Configures whether the grid (table) of groups will be displayed once filters are chosen. If it's shown, you can also configure whether other information about each group is included in the grid, such as the Schedule, Description, Member Count, Average Age (of members), the Campus, the distance from their address, and whether the groups are sorted according to how close they are to the person's address. You can also choose how many groups are shown on each page and which Group Attributes you'd like to display in the grid.

21 Group Detail Page

Specifies a page the person will be taken to if they ask for more details about a group. This page is available to your Lava using the `LinkedPages.GroupDetailPage` object

22 Register Page

Specifies a page the person will be taken to if they click the "Register" button. This page is available to your Lava using the `LinkedPages.RegisterPage` object

Another Way to Use the Group Finder
===================================

If you pass a 'PersonGuid' through the page's query string you can use the group finder to register that person for a group. You can use this trick to say link from a group badge on the person profile page if they are not already in a group. This allows a staff person to quickly register them for a group without a lot of clicking around.

Consider using the [Group Member Add From URL](#groupmemberaddfromurl) block with this feature.

[](#groupregistration)Group Registration
========================================

Registering for a group is a simple process using Rock's Group Registration block. Out-of-the-box this block will ask for basic contact information for the individual and their spouse. By adjusting the block settings, you can customize this block in several different ways. Below we'll walk through some of the common settings but be sure to review all of this block's settings to ensure it's meeting your organization's needs.

*   **Mode:** There are three entry modes for the registration form.
    *   **Simple:** This mode only asks for the individual's first name, last name and email address.
    *   **Full:** This mode additionally asks for more contact information including home phone, cell phone and address.
    *   **Full With Spouse:** This mode is identical to the normal _Full_ mode but adds the spouse's first name, last name, cell phone and email.
  
*   **Group Member Status:** This setting determines the group member status that will be used when they are added to the group. Options include Pending, Active or Inactive.
  
*   **Connection Status:** The registration form will attempt to find a matching record in the database using the first name, last name and email. If a record cannot be found, a new record will be created in the database. When that occurs, this will be the connection status that is used for these new records.
  
*   **Record Status:** This represents the record status that will be used for new records. It's best to leave this as _Pending_ so individuals on your data integrity team can manually review them for possible duplicates and merge the records if needed.
  
*   **Workflow:** This option allows you to launch a workflow after the registration. The group member will be attached to the workflow as the Entity.
  
*   **Lava Template:** This is a Lava template that will be applied to the top of the registration block. This allows you to customize the experience for the individual.
  
*   **Result Lava Template:** This Lava template is used to craft a response message after the registration is completed.
  
*   **Result Page:** You can optionally send the individual to a new page after the registration is processed.

[](#groupscheduling)Group Scheduling
====================================

People feel valued when they’re part of a group working toward a common goal. The most important part of gathering a group of people to accomplish a task is communication. Ensuring that everyone in the group knows where they should go and when they should be there is a critical first step in making them feel like they’re included and valued. The group scheduling tools in Rock are an amazing tool for empowering those within your organization to communicate important information about locations and times to group members, and to check up on whether that information was received and responded to.

Sending out schedules can go well beyond serving teams for weekend services. Just a few ideas to get you brainstorming:

*   VBS staff and volunteer schedules
*   Summer camp volunteers
*   Monthly campus potluck rotation
*   Youth groups
*   Special events
*   And so much more

Now with all that said and done, most of the examples below will be referring to weekend schedules since it is used this way most commonly. But we encourage you to think big. Don’t limit your organization’s use of the group scheduler to the obvious. And don’t be afraid to think outside the box.

[](#schedulingtools)Scheduling Tools
====================================

Any organization needs a way to manage which workers are assigned to what positions. Many approaches are used to schedule workers, from a paper on a clipboard, through Excel spreadsheets, to complex and costly specialized scheduling software. Sometimes all of these approaches and more are in use within the same organization. In Rock, all of these methods can be put to rest by using the Group Scheduling feature as your one-stop-shop for coordinating people for any event.

Overview
--------

The general point of using this tool is to quickly drag and drop people into a room for a specific time. The tools are very customizable for you to configure this so it will work for your organization's flow. A typical example here will be scheduling volunteers for your nursery team for the weekend. You'll pick the group, week, time, and location—the people will then be filtered based on those selections. Now you will drag and drop people's names into the desired areas or use the auto tool. Make sense? If not, don't worry, we'll break each step down into detail.

Scheduling Toolbox
------------------

Let’s start with the power each person has. On the Schedule Toolbox on their My Account page they can:

*   See what upcoming opportunities they are assigned to.
*   Choose the frequency of serving. This could be once a month, every week, 1st and 3rd, etc.
*   Choose which room/area of volunteering they prefer, plus preferred times.
*   Set blackout dates—vacation, work, etc.

The Schedule Toolbox relieves your staff of a significant load because individuals can do that work for themselves. When each person logs in to the external website, within their My Account, they have access to their Schedule Toolbox. Don’t worry; we'll still have some work for you to do.

Schedule Toolbox - Schedule

![Schedule Toolbox - Schedule](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/schedule-toolbox-v2-schedule-v13.png)

1 Copy Calendar Link

Clicking this button will copy a URL to your clipboard that can then be used to download an iCalendar file which can be used by programs like Outlook.

2 Accept/Decline

Simply click _Accept_ or _Decline_ to record the response. Accepted assignments will be marked as _Confirmed_, while Declined assignments will be removed from the list.

3 Unavailable

This indicates an assignment that occurs during a period of unavailability, which the volunteer can configure for themselves (see below screenshot). Clicking the icon will let the person remove such assignments from the list.

4 Confirmed

Confirmed assignments can be cancelled if needed by clicking the icon and selecting _Cancel Confirmation_. This will give them the opportunity to either _Accept_ or _Decline_ the assignment.

5 Actions

Each of these buttons will direct the volunteer to a new screen where they can manage different aspects of their schedule and schedule preferences. Each of these actions are described in the following screenshots below. The list of available Actions can be modified by editing the block's settings.

Block Settings
==============

Be sure to review the settings for this block, as there are many options. For instance, you can change the text of the buttons, or you can choose to override the _Disable Schedule Toolbox Access_ setting on groups to show all schedule enabled groups. You can also choose the format of how the schedules appear within the toolbox, or you can disable some of the available options.

Next, we'll look at how a person can set dates on which they are unavailable to serve. The below screen can be accessed by clicking on the _Schedule Unavailability_ button from the main Schedule Toolbox page.

Schedule Toolbox - Unavailability

![Schedule Toolbox - Unavailability](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/schedule-toolbox-v2-unavailability-v13.png)

1 Date Range

This is where volunteers can select which dates they are unavailable to serve. This will prevent the person from being scheduled to serve on those dates.

2 Description

The person can optionally provide a description, indicating why they are unavailable for the selected dates.

3 Group

A volunteer can be unavailable for scheduling in a single group, or across all groups.

4 Individual

If a person is unavailable, it's often the case that others in their family are unavailable as well. The volunteer has the option to also indicate that family members are not available to serve on the selected dates.

The screen pictured below can be accessed by clicking on the _Update Schedule Preferences_ button from the main Schedule Toolbox page. Among other things, this is where volunteers can go to set their time and location preferences for serving.

Schedule Toolbox - Preferences

![Schedule Toolbox - Preferences](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/schedule-toolbox-v2-preferences-v13.png)

1 Send Reminders

Each volunteer can select how long before a scheduled serving time they want to receive a reminder that they're scheduled to serve. They can also choose to not be sent a reminder at all.

2 Current Schedule

This is where volunteers can set the frequency of their serving. Options include:

*   No Schedule
*   Every Week
*   Every Other Week
*   1st and 3rd Week
*   2nd and 4th Week

3 Assignment Preferences

This is where the volunteer can set their preferences for when they would like to serve (i.e., what service time) and where. As pictured above, a person can choose not to select a location, indicating they don't have a location preference for the selected schedule. Only schedules marked as _Show Publicly_ are available for selection.

The person's assignment preferences can also be changed when viewing the group member details page, as pictured below.

Group Member Detail Serving Preferences

![Group Member Detail Serving Preferences](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-member-detail-serve-prefs-v14.png)

The last stop on our tour of the Schedule Toolbox is the Sign-Up screen. Volunteers can come here to sign up for additional serving opportunities, which will then be added to their schedule. This screen is accessed by clicking the _Sign-Up for Additional Times_ button from the main Schedule Toolbox page. Note that the text near the top of the page (in blue) can be modified with a custom template by editing the block's settings.

Schedule Toolbox - Sign-Up

![Schedule Toolbox - Sign-Up](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/schedule-toolbox-v2-signup-v13.png)

1 Select Schedule

All a volunteer needs to do is check the box next to the time they want to serve for the given date. It's just that easy! Only schedules marked as _Show Publicly_ are available for selection. What displays for the schedule (e.g., 10:30 AM) can be changed in the block settings.

2 Select Location

Optionally, the person can provide a location preference for the selected time.

At least initially, you will need to configure all your locations and schedules within your groups. Once this part is complete, all you’ll do is place volunteers into their dedicated serving positions and send the request.

Along with being able to do everything we’ve listed above for volunteers, here are more actions you can take:

*   Set the minimum, desired, and maximum people needed for each room and time.
*   Auto-schedule each room and time based on volunteers’ preferences.
*   Manually drag and drop people into positions and send a request for confirmation.
*   Manually accept or decline individuals from the scheduler page.
*   Individually resend a request to serve.
*   And more…

Let’s take an in-depth look at each of these settings and how to configure it for your organization.

[](#configuringgroupscheduling)Configuring Group Scheduling
===========================================================

There are two critical pieces of the puzzle you need before starting to schedule volunteers. It’s simple to get these pieces because when it comes to asking for help, people are hardwired to know _when_ and _where_ they are needed. So, we are going to make sure our _Named Locations_ and _Schedules_ are configured.

Be sure to check out the [Checking-Out Check-In](https://community.rockrms.com/documentation/bookcontent/10/#locations) user guide for more detail about adding locations. For _Group Scheduler_, however, you will be adding more than rooms. Perhaps you’ll be adding sections, areas or positions. These might be used to schedule specific areas of your lobby for the greeters to be stationed. Or, if you’ll be using Rock to schedule your band and technical teams, add a location named ‘Audio’ or ‘Piano’ and change the location type to be a position.

Adding Location Types
=====================

Location Types (Campus, Building, Room, etc.) are _Defined Types_. To add more, open the Defined Type _Location Type_ associated with the Location category and click the button.

Named Locations

![Named Locations](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/named-locations-gs-v13.png)

Next up: schedules, also known as times. This is found in Admin Tools > General Settings > Schedules. You should have a few parent groups for different types of schedules. For group scheduling, we want to make sure the times are accurate since, you guessed it, location and time are critical aspects of scheduling volunteers.

Schedules

![Schedules](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/schedules-gs-v13.png)

One Schedule
============

It is best practice to have one schedule for each time. If you have multiple sites with the same start times, you will only need one schedule for that time.

Lastly, make sure scheduling is enabled on the Group Type. Navigate to Admin Tools > General Settings > Group Types > Serving Team | Scheduling. There are additional settings you can configure for your organization. To enable, check the _Scheduling Enabled_ box as pictured below.

Group Type Scheduling

![Group Type Scheduling](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-type-scheduling-v14.png)

1 Scheduling Enabled

Enabling scheduling unlocks all of the scheduling features for groups of this type.

2 Schedule Confirmation Communication

Select the System Communication that you want to send to people to confirm their schedule. Rock ships with the _Scheduling Confirmation Email_ System Communication for this purpose.

3 Schedule Cancellation Workflow

You can optionally launch a workflow whenever a person indicates they can't make it at their scheduled time. You might use this to notify people that you're a person shorter than planned.

4 Requires Reason If Schedule Declined

This setting determines if a reason is required if a person says they can't attend at their scheduled time. The available reasons are stored as a Defined Type called _Group Schedule Decline Reason_.

5 Schedule Reminder Communication

This is the System Communication to use for sending people a reminder about their scheduled serving time. Rock ships with the _Scheduling Reminder Email_ System Communication for this purpose, but you can use a custom communication if desired.

6 Schedule Confirmation Offset Days

This is simply the number of days before the scheduled serving time that you want to send the confirmation email.

7 Schedule Reminder Offset Days

This is similar to the setting described above but applies to the reminder email.

8 Schedule Confirmation Logic

Here you can choose to _Ask_ the person if they accept their schedule, or you can have all schedules automatically accepted by choosing _Auto Accept_ instead. If this is set to _Auto Accept_, then the confirmation email will only contain a Decline button.  

Changing Schedule Confirmation Logic
====================================

Keeping in mind it should happen rarely, use caution when changing the _Schedule Confirmation Logic_ setting. In some scenarios, changing this setting could result in a person who is not confirmed receiving a confirmation email with only a Decline button and no way to Accept the assignment. This typically happens when changing from _Ask_ to _Auto Accept_ before the person receives their confirmation email.

In the Group Type configuration pictured above, note the _Schedule Confirmation Email_ and _Schedule Reminder Email_ settings. These communications can be sent via email or SMS messaging.

To send these as SMS messages you'll need to be sure to have SMS messaging configured (see the [Communicating With Rock](https://community.rockrms.com/documentation/bookcontent/8#smsindetail) guide for details) and the person needs to have an SMS enabled phone number. You'll also need to make sure the [System Communications](https://community.rockrms.com/documentation/bookcontent/8#systemcommunications) for these are configured for SMS. With all that in place, the communication medium will be decided based on the person's group member communication preference or, if not specified there, the person's personal profile communication preference.

[](#configuringgroups)Configuring Groups
========================================

We're almost to the fun part. The _Group Scheduler_ requires some information from the group before it’s ready. In the _Group Viewer_, add _Meeting Details_ for every location that needs assigned people. This might be a pretty long list for some groups like the list we see in the screenshot below.

Meeting Details

![Meeting Details](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/meeting-details-sg-v13.png)

At the end of the day, the goal for this page is to have separation and customization for each group. You can break your groups up any way that works best for your flow of work. We recommend that you do some planning before jumping in and creating groups so you can maximize the effectiveness of this feature for your staff.

Meeting Details
---------------

Click on the icon in the _Meeting Details_ tab.

This opens a window to add a new location. The properties include Location, Type, and Schedule(s).

Adding Meeting Details

![Adding Meeting Details](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-location-gs-v13.png)

1 Location

Choose from the drop down (these are the rooms from the _Named Locations_ page).

2 Type

These are Defined Types found in General Settings > Defined Type > Group | Location Type.

3 Schedules

This drop down shows all the times from the _Schedules_ page in General Settings.

You can select multiple schedules (i.e., service times) just by clicking on them one by one. Make sure you use the same schedule for every group in the meeting details. This will avoid scheduling conflicts. More properties can be selected to add the minimum, desired and maximum people needed for that room and its times.

Capacities

![Capacities](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/capacities-group-location-v13.png)

You have the option to choose different capacities for each time. The _Group Location_ screen pictured above is where all those details are customized.

When it's complete, you shouldn’t have to do anything in the meeting details again until your organization opens more rooms or adds times.

Members
=======

It goes without saying: it’s best practice for your volunteers to be members in the group to appear on the people list in the Group Scheduler, although there are other ways to search for people in the Group Scheduler. We’ll discuss that later.

Next, you'll need to set up the group's Scheduling options. Even though scheduling is enabled at the Group Type level, there are settings you can control for each group individually.

Scheduling

![Scheduling](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-viewer-edit-scheduling-v13.png)

1 Scheduling Must Meet Requirements

If this is enabled, then the person must meet the group's membership requirements in order to be scheduled. For instance, you might want to prevent someone from being scheduled in certain groups if their background check is expired.

2 Check-in Requirements

The setting here applies when the person attempts to check in to the group. The options include:  
  

*   **Schedule Not Required:** The person does not need to be scheduled in order to check in for this group
*   **Pre-select Group if Scheduled:** If the person is scheduled then this group will be pre-selected when the person goes to check in
*   **Schedule Required:** A person can't check in to this group unless they are scheduled

3 Schedule Cancellation Person to Notify

If a person is scheduled but responds that they can't attend, this person will receive a cancellation communication.

4 Disable Group Scheduling

Group scheduling is enabled at the Group Type level, but you can disable group scheduling for individual groups using this setting.

5 Disable Schedule Toolbox Access

Enabling this takes the group out of the public-facing [Schedule Toolbox](#schedulingtools).

Setting up Permissions
======================

You'll want to be sure that the right people have the proper permissions to access and manage groups. We have all the info you need on how group security works for both group leaders and staff in the [Securing Groups](#securinggroups) chapter above.

[](#groupscheduler)Group Scheduler
==================================

Now the moment of truth…the _Group Scheduler_ page. This is where the magic happens. Okay, maybe not actual magic, but it is where the scheduling happens. This page will become very familiar to your staff, since it’s the "magic page" for organizing group members into a location.

Block Properties
================

You can change the number of weeks to show on the drop down by changing it on the block properties. The default is set to six weeks. You can also choose to disable group selection and limit the page to a single group if a group Id is present in the query string (e.g., `https://rocksolidchurchdemo.com/GroupScheduler?GroupId=123`).

Navigating Group Scheduler
--------------------------

The Group Scheduler can be accessed from People > Group Scheduling > Group Scheduler. In this example we’ll be working with the Children's group. You can also use this page with multiple groups at once, but we'll get to that later. Note that there's a column for each schedule, with the locations for that schedule listed vertically below.

Group Scheduler

![Group Scheduler](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-scheduler-v13.png)

1 Help

Click here to display a handy summary of how various parts of the Group Scheduler works. This is a great quick-reference tool for staff using the page.

2 Copy Link to Clipboard

You can use this to copy a link to this page to your clipboard. The link will include the parameters you’ve selected on the page, like Week, Locations and Schedules. Anyone (with proper permissions) who uses it will essentially see the page as it appears for you when the link is copied.

3 Send Now

Sends a scheduling confirmation request, allowing individuals to respond "yes" or "no" to the position if they haven’t already responded to an email with the same request. You can choose to send the confirmation request to the group that’s currently selected, or to all groups at once if you're working with more than one group at a time.

4 Auto Schedule

Based on an individual’s preferences, when this button is clicked it will automatically place people into their desired group and time if it is currently listed and if spots need to be filled. If you’re viewing multiple groups, you can choose to Auto Schedule only the currently selected group, or all visible groups. See the [Auto Schedule Vs. Manual Schedule](#autovsmanual) section for more details.

5 Select List

Determines where the list of people to schedule should come from. You can pull individuals from the group itself, an alternative group, the parent group or even a data view. Note, the List options will be restricted to the members of the group if _Scheduling Must Meet Requirements_ is enabled on the Scheduling tab in the group’s settings. You can also add individuals to the list manually by clicking the icon to the right of the List selection.  
  
Select _Group Members - Matching Week_ to find group members whose week to work is the selected week. Select _Group Members - Matching Assignment_ to find group members whose week to work is the selected week AND whose preferences (location/schedule) match the selected filters, or they have no preferences.

6 Search

Use the search bar to search for specific individuals within the displayed list. This is super helpful if you have a long list of people to choose from.

7 Group View Selection

Here you choose which group or groups should appear in the scheduler. In this example we’ve selected the Children’s group. You can choose to view one group at a time, or you could add other groups like Greeters or Ushers. The layout of the scheduler will change a bit if you're working with multiple groups, which we'll talk about a little later.

8 Week, Location and Schedule

Use these filters to narrow down what you want to view. By default, the scheduler shows the current week and all locations and schedules for all the selected groups.

9 Person List

The people listed here are available for scheduling, based on your selections. You can click and drag each person from this list to an available slot to the right. However, this is much more than a list of names. From here you can see:

*   **Preference:** If the person has any scheduling preferences set up, you can see them here.
*   **Assignments:** Shows where the person is currently assigned, to help avoid scheduling conflicts.
*   **Blackout:** You can see if the person is being scheduled during a blackout period when they’re unavailable. In this example you can see Becky Peterson's card has been highlighted yellow, and an icon appears to indicate the blackout.
*   **Role:** The person’s role in a group is displayed for reference.

10 Occurrence Details

There’s a lot to see and do in this area. If you lose track of what all the colors and symbols mean, the icon near the top of the block will break it all down for you. You can see the person’s scheduling status (e.g., Accepted Invite, Matches Preference) and how close you are to meeting the room’s staffing requirements. We’ll go into more detail in the sections below.

Auto Schedule Vs. Manual Schedule
---------------------------------

Auto scheduling works based on the _preferences_ set by volunteers. In both an individual's My Account page on the external site, and on the groups page on an internal site person profile, there is a scheduling toolbox. These are the same, connected toolboxes so whatever a person sets on their external account will appear on the internal site for Rock administrators to view. Sometimes a verbal conversation will happen about someone’s preferences so a staff member can manually set that on their profile for them – whatever works for your organization, you can do.

So how does the auto scheduling feature work? Well, it involves some complex logic, and thankfully we already figured that all out for you, so sit back, relax and we’ll take a brief look at an example.

We all know those multi-talented people who can greet everyone at the door, run the lighting console and keep the attention of 10 three-year-olds for an hour, so naturally they set their preferences to every service, in every group which is a huge blessing. Only problem is how do you avoid double booking this individual?

This is how Rock solves that conflict: If you’re using the same schedules to represent the same time frames, (which we know they are from the foundation of your schedule configuration), then the auto scheduler won’t schedule the same person twice. Auto scheduling scans the person’s preferences and sees that they are not assigned anywhere so the first time a staff member clicks on auto schedule it will always pull them first.

Conflict

![Conflict](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-scheduler-conflict-v13.png)

Manual scheduling is in the name. It’s physically placing people into their serving locations. If we are being realistic here, we know there are going to be those few people who never get around to setting their preferences, so in those cases you’ll have to manually place them. We know you know each and every one of your volunteers’ time and location preferences, so this isn’t a big deal anyway.

Note that when people have a blackout date, they cannot be auto or manually scheduled, but they will appear in the list with an icon by their name. If someone is scheduled in one group and you're doing scheduling for a different group the person will also appear in the list with an icon by their name, indicating potential conflicts with the group you're scheduling.

Blackout

![Blackout](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-scheduler-blackout-v13.png)

If you have multiple sites that are close enough to each other that some people volunteer at more than one location, you will run into a scheduling conflict that doesn’t appear as one if the locations have different schedules. For example, one site might have a 4:30pm and 6:00pm schedule while the other only has a 5:00pm schedule. If someone was already scheduled for the 5:00pm time, Rock would not see that they are elsewhere on the people list for the other site since the schedules are different.

Note
====

If both sites have a 4:30pm and 6:00pm schedule, make sure those schedules in your meeting details are the same for all groups. There is no need to have location-specific 4:30pm schedules in the schedule tree.

Confirmation Communication
--------------------------

You will typically send a mass communication once you have your teams set up for them to accept or decline. Click on the Send Now button near the top of the block to send a confirmation. Rock will automatically send either SMS or email confirmations based on the person's preferences and available information.

Send Now

![Send Now](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-scheduler-send-now-v13.png)

Alternatively, you can send an individual a communication to accept or decline by clicking on the three dots near their name. This opens a drop-down list of options where you can choose the Resend Confirmation button to send the email or SMS message to confirm or decline again.

Resend

![Resend](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-scheduler-resend-for-individual-v13.png)

Scheduling with Multiple Groups
-------------------------------

Most of the time you'll just want to look at scheduling for a single group before moving on to the next one. However, you can view multiple groups at once in the Scheduler by selecting them from the picker near the top of the block.

In the example below we've selected the Greeters, Ushers and Children's groups. As you can see, this changes the look of the page pretty significantly. Each column now represents a group, and all of the schedules and locations for that group are listed beneath it.

Viewing Multiple Groups

![Viewing Multiple Groups](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-scheduler-multi-group-v13.png)

Even though you can see multiple groups, you can only do manual scheduling for one group at a time. That's primarily because your list of group members will change depending on which group you're actively working with. To select a different group, click the checkbox near the top of the desired group's column. This will shift the selected group to the left and will update the list of group members accordingly.

[](#schedulestatusboard)Schedule Status Board
=============================================

The status board gives you a bird’s-eye view of rooms and times, showing what's covered and what is still needed. You can access the status board by navigating to People > Group Scheduling > Group Schedule Status Board.

The block settings allow you to choose a parent group to filter out any unnecessary groups showing in the select groups list. The Dates button opens a slider bar to choose how many weeks to show at a time. You can also access the _Group Schedule Roster_ and _Group Schedule Communications_ pages directly by clicking their links near the top of the page.

Status Board

![Status Board](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-schedule-status-board-v13.png)

[](#scheduleanalytics)Schedule Analytics
========================================

The analytics board acts similarly to the scheduler page. You can choose the group, location and schedule then hit Update to show records of the response, or lack thereof, in one place.

Schedule Analytics

![Schedule Analytics](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-scheduler-analytics-v13.png)

[](#groupscheduleroster)Group Schedule Roster
=============================================

The _Group Schedule Roster_ shows you who’s serving, plain and simple. Of course, you can see this information from other group scheduling tools, but the roster provides a clean, simplified view of volunteers and where they’re scheduled. This layout is great for printing, to give your staff a paper copy they can use to track volunteers. It even comes pre-populated with checkboxes next to each person’s name, so individuals can be marked off the printed list.

To access the roster, navigate to People > Group Scheduling > Group Schedule Roster.

Group Schedule Roster

![Group Schedule Roster](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-schedule-roster-v13.png)

You can click the icon to access the configuration for the roster. These settings let you add or remove the groups, locations and schedules shown on the roster. This way you can rapidly print several different rosters for the day. This is also where you change the date of the roster, to view assignments on different dates.

Roster Configuration

![Roster Configuration](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-schedule-roster-config-v14.png)

By default, the roster is updated automatically every 10 seconds, to pick up scheduling changes as they occur. After all, you don’t want to print outdated rosters, and last-minute changes are always a risk. This “Live Update” feature can be disabled, or set to a different refresh frequency, by accessing the block’s settings. Just keep in mind that a very frequent refresh rate may negatively impact performance.

[](#groupschedulingcommunications)Group Scheduling Communications
=================================================================

There are different ways to send group scheduling communications from Rock. You can send scheduling confirmation requests from the _Group Scheduler_ page as described above, or you can wait for a job to run to send them for you. You can also send custom one-time communications if you need to.

Send Group Schedule Notifications Job
-------------------------------------

Rock will automatically send out confirmation and schedule communications based on the values you set on the Group Type Detail page. By default, these communications will be sent daily at 4pm to people who have not already received them. If you want to change the sending time, you can edit that time in the "Send Group Schedule Notifications" job, which can be viewed under Admin Tools > System Settings > Jobs Administration.

We have "Scheduling Confirmation Email" and "Group Attendance Reminder" system communications already set up for you, which are of course customizable to fit your organization’s lingo. Just like all system communications, you can view and modify them under Admin Tools > Communications > System Communications.

See our [Communicating With Rock](https://community.rockrms.com/documentation/bookcontent/8#systemcommunications) guide for more information on working with system communications.

Custom Group Scheduling Communications
--------------------------------------

While schedule and confirmation communications are certainly useful, sometimes you’ll want to send other types of communications to your teams. On top of that, maybe you just want to contact volunteers who have Accepted the invite, or only those that are serving on Sunday. The _Group Schedule Communication_ block lets you do all that, and more, quickly and easily. You can navigate to it directly from People > Group Scheduling > Group Schedule Communication or you can access it from the _Group Schedule Status Board_.

Group Schedule Communication

![Group Schedule Communication](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-schedule-communication-v13.png)

1 Groups

Members of the group or groups selected here will form the initial list of individuals that will receive the communication. If you don’t want to send the communication to everyone in this list, you can use the other settings on this page to narrow it down.

2 Include Child Groups

If you have a lot of groups, you don’t always have to select each one individually. Enabling this option will include members of any child groups a selected parent group has. You can select multiple parent groups if needed.

3 Invite Status

You can choose to send the communication only to individuals with a certain Invite Status. If you want everyone to receive the communication, select all statuses.

4 Locations

You can limit the communication to people serving in certain locations. The list of locations you see here is automatically filtered according to the group selections, so it may change as you add or remove groups from the communication.

5 Schedules

Like the _Locations_ field, you can select certain schedules to further refine the list of communication recipients. For instance, you may only want to communicate with volunteers for the Sunday morning services.

6 Week

The list of volunteers will probably change from week to week. Select a week here to send the communication to those scheduled during that week.

7 Create Communication

After you’ve made your selections above, clicking this button will take you straight to the [Communication Wizard](https://community.rockrms.com/documentation/bookcontent/8#communicationwizard) with the list of recipients conveniently pre-loaded for you. At that point you would proceed with creating a new communication as normal.

[](#groupblocks)Group Blocks
============================

By now you've seen the power of groups in Rock. Hopefully, you're starting to see all the different ways they can bend and flex to meet the demands of your organization. The real power is when you break free to see _what is_ and start to comprehend what _could be_. While we've attempted to _pre-configure_ groups with some standard best practices, you shouldn't limit yourself to what is configured out of the box.

The best way to see what's possible is to understand what group blocks are available in Rock. Start thinking of these blocks as your own box of Legos®. How you arrange and build with these blocks is limited only by your imagination. If you're unfamiliar with blocks and how to add them to a page, take a minute and read about them in the [Designing and Building Websites Using Rock](https://community.rockrms.com/documentation/bookcontent/14#addingcontenttorock) guide.

[](#grouplist)Group List
========================

As its name suggests, the _Group List_ block lists all groups that match a specific filter. The power of this block lies within its block settings. They allow you to:

*   **Include Groups Of Type:** Specify which group types to include in the list.
  
*   **Exclude Groups Of Type:** Specify which group types not to show in the list.
  
*   **Detail Page:** The page you would like to navigate to when someone selects a group from the list.
  
*   **Limit to Security Groups:** Remember that security groups are a bit special. While there is a group type for security groups, any specific group can be configured to act as a security group. This setting shows groups that meet any of these criteria.
  
*   **Display Filter:** Determines if the filter panel should be displayed above the list.
  
*   **Display XYZ Column:** This block also has several block settings to hide or display columns for displaying group type, group description, active status, group member count and system status.

Below is an image of a sample group list.

Group List Block

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/groupblock-grouplist-v13.png)

[](#grouptreeview)Group Tree View
=================================

The _Group Tree View_ block is very similar in configuration to the _Group List_ block except that it displays the groups in a hierarchical tree view. Below is a sample of what this block would look like.

Group Tree View Block

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/groupblock-grouptreeview-v13.png)

[](#groupdetailsgroupmemberlistgroupmemberdetails)Group Details / Group Member List / Group Member Details
==========================================================================================================

While these are three different blocks, they are usually used together to fully display the contents of a group with the ability to edit.

Group Details & Member List Blocks

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/groupblock-groupdetails-memberlist-v13.png)

[](#grouptypemap)Group Type Map
===============================

The _Group Type Map_ block maps the location of every group of a specified type. This is different from the [Group Map](#groupmaps), which shows members of a single group. While not included on a page out of the box, the Group Type Map is a very powerful block for mapping all of your small groups. Small organizations could even use it to map all the families in the database (remember families are groups too). Below is a sample of this block in action.

Group Type Map Block

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-type-map-block-v13.png)

[](#groupmemberaddfromurl)Group Member Add From URL
===================================================

Say what? OK, this is easy... this block when passed a PersonGuid and GroupId through the query string will add the person to the group and display a Lava template of your design. This is very useful in crafting various group registration scenarios. To get the juices flowing think about all the things you could do with this using the _Dynamic Data_ and _Group Finder_ blocks. There you go!

Add Group Member From URL

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-member-add-from-url-v13.png)

[](#groupmemberremovefromurl)Group Member Remove From URL
=========================================================

This block is just like the Group Member Add From URL block - but the opposite. It takes a PersonGuid and GroupId through the query string and will remove the person from the group and display a Lava template of your design. This allows you even more flexibility in creating group registration situations. Alright!

[](#groupsimpleregister)Group Simple Register
=============================================

This block is another block that's handy for registration scenarios. It provides a simple form that accepts a first name, last name, and email address, registers the person to a group, and then forwards them on to a confirmation page. This block is most useful when it's used on an external facing site as a simple first point of contact but is flexible enough for many other scenarios!

Simple Register Block

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/groupblock-simple-register-block-v13.png)

[](#groupsimpleregisterconfirm)Group Simple Register Confirm
============================================================

This block is designed to pair with the Group Simple Register block as a confirmation page. When a user is redirected to this page it provides either a success or a failure message. It's that simple!

[](#groupregistration)Group Registration
========================================

This block is the big brother of the Simple Register block. This block takes a GroupId as a query parameter for context and allows you to do a few neat things like fire off a workflow when a user registers and use Lava options to format the registration form. It also has a full mode that takes down address details and phone details and a full with spouse -- which does exactly what you might expect. Use this mighty block when you want to get more than your standard information about a person or when you want to use a specific workflow process for your registrants.

Group Registration Block

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/groupblock-registration-block.png)

[](#groupmap)Group Map
======================

The _Group Map_ block maps the members of a specific group that is passed through the query string (aka passed in through the address of the page http://server.com/page?GroupId=12). While this block isn't too powerful on its own, it can be very helpful when used in conjunction with other blocks like the _Dynamic Data_ block. Below is a sample of what this block looks like with a sample group.

Group Map Block

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/groupblock-groupmap-with-connect-statuses-mockup.png)

You'll notice two sets of color-coded labels near the top of this block. Clicking these will toggle the display of groups and families on the map. Below is a description of how and when these label toggles will appear.

**Group / Group Member Labels** (top left)

*   If the selected group has a valid geopoint, or geofence location, that group's name will be displayed as a label in the upper left which can be used to toggle the display of the group. The group will be displayed on the map either as a marker or a polygon depending on whether the selected group had a geopoint or geofence. The color of the marker or polygon is determined by the first color specified in the _Colors_ attribute of the selected mapstyle defined value. Note: this option will not appear if the selected group does not have a geopoint or geofence defined.
  
*   A _Groups_ label will be displayed if the selected group has any child groups with a valid geopoint or geofence location. The child groups may also be either a marker or a polygon. The color of markers is determined by the second color specified in the _Colors_ attribute of the selected mapstyle defined value. The color of polygons is determined by the _Polygon Colors_ block setting.
  
*   A _Group Members_ label will be displayed if the selected group has any members with a valid geopoint location. Clicking the label will toggle the display on the map of those members. Note, if the selected group is displayed as a polygon, these members may or may not be within the boundaries of the polygon. The color of the markers is determined by the third color specified in the _Colors_ attribute of the selected mapstyle defined value.

**Connection Status Labels** (top right)

*   If the selected group has a geofence location and is displayed as a polygon on the map, then the block will also display a list of _Connection status_ labels to toggle the display of families whose locations fall within the boundaries of that polygon.
  
*   The connection statuses that will be included as toggle options are determined by the Connection Status Defined Values. Only those defined values that have a value specified in the _Color_ attribute will be displayed. The color value is also used to determine the color of the markers.
  
*   Only families with at least one active record will be included.
  
*   If family members have different connection statuses, they will be ordered by the connection status defined value order, and the first connection status found will be used for the family. For example, if a family has a member and a visitor, the family will be displayed when the _Member_ label is selected.

[](#servicejobsrelatingtogroups)Service Jobs Relating to Groups
===============================================================

Service jobs allow you to set up reoccurring tasks that run on a schedule you define. Below are jobs that relate to groups.

Learn More
==========

This section highlights unique aspects of service jobs relating to groups. For information on setting up jobs in general, see the [Rock Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9#jobs).

[](#sendattendanceremindersforgrouptype)Send Attendance Reminders for Group Type
================================================================================

This job (formerly _Send Attendance Reminders_) sends reminders to group leaders to enter attendance. All individuals in the group with a role that has the 'Is Leader' setting will receive this reminder. Keep in mind that this job will only send reminders to groups of the configured type if the group type's _Send Attendance Reminder_ option is disabled (unchecked).

A couple of key configuration options for this job are:

*   **Group Type:** The group type that the reminders are for.
  
*   **System Communication:** The system communication that you would like to use for sending the reminder. Rock ships with a _Group Attendance Reminder_ system communication for this purpose.
  
*   **Send Reminders:** By default, a reminder will always be sent the day the group meets. By adding values here, you can configure additional reminders if the attendance has not been entered. For instance, entering _2,4_ would send reminders two and four days after the group has met if no attendance has been entered.
  
*   **Send Using:** Choose whether the reminder should be sent via SMS text message, email or either according to the group leader's preference. Group leaders can set their preference in the [Group Leader Toolbox](#groupleadertoolbox).
  
*   **Campuses:** You can select one or more campuses to only send reminders for groups associated with that campus. This does require that the groups are tied to a campus.
  
*   **Parent Group:** If you choose a group here, reminders will only be sent to groups that are children (and grandchildren, etc.) of the selected group.

Note that the attendance reminder options available on the group type apply to the _Send Group Attendance Reminders_ job described below.

SMS Job Errors
==============

If the reminder job is configured for SMS, and if a person's communication preference is SMS but they don't have an active/valid SMS number, then the job will record an error. Similarly, if the job can't find the SMS configuration it needs, then it will also record an error message to the job's status/history message.

[](#sendgroupattendancereminders)Send Group Attendance Reminders
================================================================

This job is very similar to the _Send Attendance Reminders for Group Type_ job discussed above. This job sends a reminder to group leaders about entering attendance for their group meeting. The key difference between the two jobs is that _Send Attendance Reminders for Group Type_ requires a group type, while _Send Group Attendance Reminders_ does not. That means you can have one job handling all of your reminders for all of your group types.

Keep in mind that this job will only send reminders for group types where the _Send Attendance Reminder_ option is enabled under the _Attendance / Check-in_ panel. Each group type can continue to have its own _Attendance Reminder Communication Template_.

Send Attendance Reminder Option

![Send Attendance Reminder Option](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/send-attendance-reminder-option-v15.png)

This job is configured to run every 15 minutes. It looks for Group Types that have _Send Attendance Reminder_ checked and once a group's scheduled Start Time is within the _Attendance Reminder Start Offset Minutes_ setting, the attendance reminder is sent. This can only happen once per day.

To get a little technical, when a reminder is sent, the _Attendance Occurrence_ record is created, and the current date/time is written to the _AttendanceReminderLastSentDateTime_ property. This ensures that we never send the same reminder twice in one day.

[](#groupleaderpendingnotifications)Group Leader Pending Notifications
======================================================================

This job allows you to notify group leaders of newly pending members in their groups. This provides the following customization options:

*   **Group Type:** The group type to filter off for limiting the groups that are checked for pending members.
  
*   **Include Previously Notified:** This determines if only newly pending members should be sent to leaders, or if pending members who have already been sent once should also be considered. Note that when you initially set up this job, none of the current pending members will have been marked as sent, so they will all be sent to leaders on the first run.
  
*   **Notification Email:** This is the system communication template that should be used. A sample system communication called _Pending Group Members Notification_ is provided out of the box for you to use or edit as you see fit.
  
*   **Group Role Filter/Role:** This is an optional setting that allows you to only include pending members of a specified role. If you don’t select a role, all roles will be considered. You must first select a Group Type before specifying a role.
  
*   **Pending Age:** Only pending members who have been added or updated within the number of days set here will be included. For instance, you might set this to seven to select pending members added within the past week. Leave this blank to not consider the last time a record was updated.

The notification will be sent to all group members of the group whose role has been configured as _Is Leader_.

Keeping Your Options Open
=========================

Keep in mind that you can set up multiple instances of this job. This allows you to send one scheduled communication for newly pending members and a separate for older pending members that the group leaders have already been made aware of.

[](#sendgroupattendancedigest)Send Group Attendance Digest
==========================================================

This job sends a summary of group attendance information to certain group _Leaders_. See the [Group Attendance Digest](#groupattendancedigest) section above for details on the group structure requirements for this job. When you’re configuring this job, pay close attention to the following configuration options:

*   **Parent Group:** The job needs to know the highest-level parent group in the group structure to identify which child groups apply to the job. Again, this job expects a very specific group structure to be in place, so be sure to check out the [Group Attendance Digest](#groupattendancedigest) section above to make sure you're set up correctly.
  
*   **System Communication:** This is the system communication template that should be used. A sample system communication called _Group Attendance Digest_ is provided out of the box for you to use or edit as you see fit.
  
*   **Date Range:** You can choose to send the attendance digest for either the ‘Current Week’ or the ‘Previous Week’.

In order for the job to work correctly, the groups taking attendance must meet on a regular (i.e., Weekly) schedule.

[](#processgrouphistory)Process Group History
=============================================

This job creates historical snapshots of Groups and Group Members for any group types that have history enabled. Once the job runs, groups that have history enabled will show an 'Archive' option instead of 'Delete'. See the [Group History](#grouphistory) chapter for more details.

This job is set to run once per day in Rock.

[](#groupattendancereporting)Group Attendance Reporting
=======================================================

This job will create new Person attributes to track a person's _First Attended Date_, _Last Attended Date_, _Times Attended in Last 12 Months_ and/or _Times Attended in Last 16 Weeks_ for groups specified by a Data View. These attributes can be manually assigned categories and security as needed. This job considers all attendance in the specified groups, regardless of whether the person is currently an active member of the group.

When you're setting up this job, you have the following options:

*   **Group Data View:** You'll need to create a data view that returns the group or groups that you want to report on. For instance, you might select all groups of the Small Group type to report on a person's attendance in small groups.
  
*   **Reporting Label:** This gets used as part of the name of the attribute(s) that will be created by the job. In the example screenshot below the Reporting Label was "Small Group" so each attribute name starts with that phrase.
  
*   **Tracked Values:** For the groups returned by your data view, select the attendance data you want to track. In the example screenshot below all four options were selected, so four new attributes were created.

In the example pictured below, new attributes have been added to show Small Group involvement. In this case the attributes were manually assigned to the _Visit Information_ category, to allow them to show on the Person Profile.

Group Attendance Reporting Attributes

![Group Attendance Reporting Attributes](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-attendance-reporting-job-results-v14.png)

This job will create a new attribute only if it does not find an existing attribute (e.g., from a prior run of the job) to update. This depends on how the job itself is configured. For instance, changing the _Reporting Label_ will result in new attributes being created with the new label.

[](#groupleaderabsencenotifications)Group Leader Absence Notifications
======================================================================

The Group Leader Absence Notifications job is intended to alert group leaders when a member of the group has been absent a configured number of times in a row. This is so the leaders can follow up with absent people or update their status in the group if needed. Rock ships with a System Communication created specifically for this notification, called _Absence Group Member Notification_. When you’re configuring this job, pay close attention to the following configuration options:

*   **Group Type:** Because the job only runs for one Group Type at a time, you'll need multiple instances of this job if you want to run it for multiple Group Types.
  
*   **Notification Email:** You can use the _Absence Group Member Notification_ System Communication that ships with Rock, or you can create your own.
  
*   **Group Role Filter/Role:** This applies to the members of the group. If set, only group members with the provided Group Member Role will be evaluated and reported by this job.
  
*   **Minimum Absences:** This is the minimum number of consecutive meeting occurrences for which a person must be absent in order to be included in the Notification Email. If left blank, then '3' will be used. Setting this to '0' will cause the job to fail.

[](#grouprequirements)Group Requirements
========================================

Group requirements allow you to place criteria on who should be allowed to be in a group. For instance, it's a pretty common feature that to be on a serving team around children you need to have an active background check. Administrating this need manually can be daunting, but with Rock why would you EVER consider doing it by hand?

Setting up group member requirements is a two-step process.

1.  Define a Group Requirement.
2.  Apply the requirement to each group that needs it.

When a group member is checked to determine if they meet a requirement, the result will be one of the three conditions:

*   **Positive:** The group member meets the requirement.
  
*   **Negative:** The group member does not meet the requirement.
  
*   **Warning:** Something in the middle. The specific definition of warning will depend on the configuration. For a background check, warning might mean that they have a passing background check, but it's about to expire.

Group requirements can be set at the Group Viewer level, which applies member requirements to one specific group, or at the Group Type level, which applies the member requirements to all groups of a certain type. Both options are explained in detail below.

[](#defininggrouprequirements)Defining Group Requirements
=========================================================

You manage group requirements under Admin Tools > General Settings > Group Requirement Types.

Group Requirements List

![Group Requirements List](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-requirements-list-v15.png)

Editing a requirement allows you to provide the following configuration options.

Editing Group Requirements

![Editing Group Requirements](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-requirements-edit-v15.png)

1 Name

This is the name of the requirement. This will appear on the _Group Member Detail_ screen in the internal site, and within the fundraising groups pages externally.

2 Description

Be sure to provide a good description of the requirements and any of the underlying criteria that are used to determine whether a group member meets the requirement. A little documentation now will save you headaches in the future.

3 Icon CSS Class

You can optionally associate an icon with the requirement. The icon will appear in places like the group member detail screen, or as a requirement for fundraising groups (e.g., for trips).

4 Category

It can be very helpful to categorize your requirement types, especially as your list starts to grow. To add categories for requirement types, navigate to Admin Tools > System Settings > Category Manager and create a new category with an entity type of _Group Requirement Type_.

5 Summary

The Summary you provide will be shown in places where the requirement is displayed, such as the group member detail screen.

6 Check Type

So how do we determine the logic of whether someone meets a requirement? Rock gives you three options:

*   **SQL:** In this case you provide a SQL statement. This statement should return a list of Person Ids in the database that meet that requirement.
*   **Data View:** You can also select a data view that returns a list of all the people who meet the requirement.
*   **Manual:** This requires someone to manually determine if a person meets the requirement.

You'll notice that the SQL and Data View options give you a separate property to determine the warning state. You can leave this blank if your requirement doesn't have a warning state.

7 Descriptive Labels

People will either meet the requirement, be in a warning state or not meet the requirement. According to the group member's state, these labels will appear where the requirement is displayed, such as the group member detail screen and as a requirement for fundraising groups.

8 Requirement Workflows

You can launch workflows for people who either do not meet the requirement or who are in a warning state. Based on the _Auto Initiate_ setting described next, the workflow will be launched either manually or automatically. The entity passed to the workflows will be a _Group Member Requirement_ entity. If your workflow has a Person attribute with a key of "Person", the corresponding person will automatically be set in your workflow. Requirement workflows must be automatically persisted.

9 Auto Initiate

You can choose to automatically launch a workflow at the point when Rock first determines that the group member does not meet a group requirement or that they're in a warning state. If this is disabled, then the workflow can be manually launched in places where the requirement is displayed.

10 Link Text

If the workflow is going to be launched manually based on the _Auto Initiate_ setting, this is what the link to launch the workflow will say. If nothing is provided here, then default text (e.g., "Requirement Not Met") will be used.

11 Can Expire

Some requirements, once met, will always be true - say for instance a requirement that you take a specific class before serving. Other requirements may expire. A good example of this is a background check or CPR certification. It's important to keep in mind that the _Calculate Group Requirements_ job will not automatically re-check to see if the person still meets the requirements unless Can Expire is enabled.

12 Expire Duration

When a requirement can expire, you can set the number of days in the future to wait before re-checking the requirement. For something like a background check, you don't need to look every day to see if the background check is still valid.

13 Due Date

Each requirement of this type will have a due date, and this is where you indicate how that due date is determined.

1.  **Immediate:** The requirement applies as soon as the person is added to the group.
2.  **Configured Date:** When adding this requirement type to groups or group types, you'll be able to choose a date on which the requirement is due.
3.  **Group Attribute:** You'll use this option if you have a group attribute that contains the date on which the requirement is due. You'll choose the attribute when the requirement type is applied.
4.  **Days After Joining:** This option gives everyone the same amount of time after joining to complete the requirement.

14 Save

Don't forget to save!

As noted above, the _Expire Duration_ is how many days Rock will wait before checking requirements again. With background checks it typically isn't necessary to re-check every day, or even every week or month. But there are edge cases to consider. For instance, let's say someone passed a background check yesterday and, as a result, shows up as meeting the group requirement. Then today something changes with the requirement (e.g., the Data View is updated) and the person no longer meets the requirement. The _Calculate Group Requirements_ job will not re-check this person's requirement until after the _Expire Duration_ has passed. In such cases the person will appear as meeting the current requirement, even though they don't.

If someone does not meet a requirement and the due date has not been reached, then the person is considered to be in a warning state.

Tips for Creating Data Views and SQL Expressions
================================================

When creating data views and/or SQL expressions for group requirements keep these two things in mind:

*   **Meets** The data view/SQL expression for meets should return a list of all the people in the database that meet this requirement.
*   **Warning** This data view/SQL expression should return a list of all the individuals in the database in a warning state.

When you apply a requirement type to a group or group type (see the following sections below for instructions on that) you have the option of allowing group leaders to override the requirement for individual group members. For other staff or volunteers, you can indicate who can override requirements by accessing the security for the requirement type by clicking the icon and adjusting permissions for _Override_.

Group Requirement Override Permission

![Group Requirement Override Permission](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-requirement-override-permission-v15.png)

[](#applyinggrouprequirementstoindividualgroups)Applying Group Requirements to Individual Groups
================================================================================================

Once you have defined your requirement, and if _Enable Specific Group Requirements_ is enabled at the Group Type level, you can apply the requirement to individual groups. If you have _Administrate_ access to a group, you'll notice a panel on the edit screen entitled _Group Requirements_. You can add group requirements from this panel. There is also a setting to keep group members who don't already meet the requirements from being added to a group.

Limited Restriction
===================

This restriction on adding group members only applies to manually adding people to the group. Workflow actions that add someone to a group will still be able to add people who don't meet the requirement to the group.

Applying Group Requirements

![Applying Group Requirements](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-requirements-apply-v15.png)

[](#applyinggrouprequirementstogrouptypes)Applying Group Requirements to Group Types
====================================================================================

You can also set group member requirements at the Group Type level. This allows you to apply member requirements to all groups of a certain type rather than to each individual group.

Group Requirements Section - Group Type Detail Screen

![Applying Group Requirements to Group Types](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-type-group-requirements-v15.png)

To access your group types, go to Admin Tools > General Settings > Group Types. Select the group type you want to add requirements to from the Group Type list. In the Group Type Detail screen, expand the Group Requirements section. From here you can either select an existing group requirement to edit or click the button to add a new requirement.

Adding New Group Requirement

![Adding New Group Requirement](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-requirement-type-v15.png)

1 Group Requirement Type

This is simply where you pick the requirement you want to apply. This is where having a descriptive name pays off.

2 Applies to Group Role

You might have some requirements that only apply to Leaders or that only apply to Members. Whatever roles you have, this is where you indicate which role the requirement applies to. If this is left blank, then the requirement applies to all roles.

3 Applies to Age Classification

Sometimes requirements like background checks only apply to adults, whereas a waiver for minors would only apply to children. Here you can choose which age classification the requirement applies to or apply it to all age classifications.

4 Applies to Data View

This is an advanced setting that lets you provide a data view to indicate who the requirement should apply to. This is only needed if the above settings aren't targeting the desired population.

5 Allow Leaders to Override

For some types of requirements, it makes sense to allow group leaders to provide an override.

6 Members must meet this requirement before adding

You might set up some serving teams this way, to ensure new members have passed a background check before they get added to the group.

[](#viewinggrouprequirements)Viewing Group Requirements
=======================================================

Once you enable group requirements, you'll notice in the Group Viewer that certain group members may have warning icons next to their names. The yellow icon denotes that the group member is in a warning state, while the red icon indicates that the group requirements are not met.

Viewing Group Requirements

![Viewing Group Requirements](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-requirements-issue-v15.png)

While the icons shown above will give you a general sense of whether a person meets requirements or not, you can switch over to the Requirements tab to view the status of individual requirements.

Viewing Group Requirements Tab

![Viewing Group Requirements Tab](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-requirements-tab-v15.png)

Clicking on a group member will show you details about the group member and the group's requirements. In the group requirements note that you can _Upload Passport_ for Ted or mark his Trip Insurance requirement as met.

Viewing Group Member Details

![Viewing Group Member Details](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/view-group-member-details-v15.png)

[](#grouprequirementjobs)Group Requirement Jobs
===============================================

The Group Requirements features rely on two system jobs. These jobs can be configured under Admin Tools > System Settings > Jobs Administration.

Calculate Group Requirements
----------------------------

This job comes pre-configured and running in Rock. Every night it runs to check that all the group members met their requirements.

Send Group Requirements Notification
------------------------------------

This job does not come pre-configured. You can set up this job to send a warning communication to group leaders when a group member does not meet the requirements. These communications will go to group members whose role has been configured with the 'Receives Requirements Notifications' setting. This can be configured under:  
Admin Tools > General Settings > Group Types.  
Below is a listing of settings for this job.

*   **Notification Email Template:** This is the system communication template that you want to use to format the communication. Rock provides a sample communication entitled _Group Requirements Notification_ that's configured to meet most needs.
  
*   **Group Types:** The group types you want to check the requirements on.
  
*   **Notify Parent Leaders:** This setting will notify the roles of parent groups of the group. This follows the hierarchy of the group structure all the way to the top. This ensures that top-level group leaders will receive notifications for all the groups under them.
  
*   **Accountability Group:** The group you select here will get a listing of all group members not meeting requirements. Some might call this fascism, but we prefer "inspect what you expect."

[](#fundraisinggroups)Fundraising Groups
========================================

It's unfortunate, but sometimes it takes money to do good in this world. Whether it's money to pay the travel expenses of a mission trip or the small salary of an internship, costs can become a roadblock for many individuals. But when the community can be made aware of these needs, the burden of costs can be shared. The problem then becomes promoting the need and managing the transactions that are generated. Rock's fundraising features make quick work of both problems. Think of it as a mini Kick-starter just for your organization's needs! Let's dive in and see this feature at work.

Fundraising needs are stored as a new group inside Rock. These groups are created with the group type _Fundraising Opportunity_. This group type provides several group and group member attributes that will drive the fundraising features within Rock.

Each group will represent a specific type of fundraising activity. Examples include:

*   A specific mission trip (e.g., _Summer China Mission Trip_)
*   A specific type of fundraising (e.g., _Summer Interns_, _Fall Sports Season_)

[](#fundraisingwalkthrough)Fundraising Walk Through
===================================================

Keep in mind that each fundraising opportunity is a group. You'll manage the opportunities from the Group Viewer.

Fundraising Opportunities - Group Viewer

![Fundraising Opportunities - Group Viewer](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/walkthrough-group-v15.png)

Ok, but that's the boring part. Let's start looking at how these groups are displayed on your external site! Out of the box Rock configures several pages to view fundraising opportunities. The pages are displayed under the Missions pages (found under the Connect menu item). The missions page lists the various opportunities that are marked _Show Public_. Keep in mind that this block can be filtered by the _Fundraising Opportunity Type_ (e.g., Trip, Internship, Project).

Fundraising Opportunity List

![Fundraising Opportunity List](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/walkthru-opportunitylist-v15.png)

Selecting one of the opportunities will take you to its detail page. In the example below, Ted (who is leading this particular mission trip) is viewing the page. Since we know it's Ted, a summary of his Fundraising Progress is shown. Links are also displayed to take him to his participant's page and for him to make a payment. Also, note that since Ted is a leader for this opportunity, he has access to a leader toolbox.

Fundraising Opportunity Detail - Leader

![Fundraising Opportunity Detail - Leader](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/walkthru-detail-1-v15.png)

Pictured below is the same page, but with a fundraising group that's configured to use families. In this case both Ted and Cindy are in the group, and their individual fundraising goals become combined into a single family goal. Note there is a single Make Payment button for the family, but each member has their own Participant Page.

Fundraising Opportunity Detail - Family

![Fundraising Opportunity Detail - Family](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/walkthru-detail-1-family-v15.png)

This page is also used for the general public to view. It allows them to easily register for the opportunity if a registration instance was provided.

Fundraising Opportunity - Public

![Fundraising Opportunity - Public](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/walkthru-detail-1-public-v15.png)

Fundraising Opportunities can also optionally be configured with a Content Channel for providing updates. When configured, a new tab will be shown to display these updates.

Fundraising Detail - Updates

![Fundraising Detail - Updates](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/walkthru-detail-2-v15.png)

Another optional setting is to allow commenting on the opportunity. This tab will display a Rock notes control. Keep in mind that this feature currently doesn't allow for approving comments and does not email when new comments are added.

Fundraising Participant Comments

![Fundraising Participant Comments](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/walkthru-detail-3-v15.png)

Each opportunity participant has a personalized page that they can share with others to help generate interest and help encourage funding.

As pictured below in green, red and yellow, the participant can use this page to track documents that are needed for the trip and, if configured, launch a workflow to upload those documents. These are really just [group requirements](#grouprequirements) that have been added to the fundraising group. They could be used to track things like documents, attendance in classes or background checks. In this example, Ted has a driver's license on file but hasn't provided his passport yet. He hasn't submitted his trip insurance either, but it's not due until a date in the future, so Ted is currently in a warning state.

Fundraising Participant Profile

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/walkthru-profile-1-v15.png)

Viewing Group Requirements
==========================

Requirements are only visible to the individual participants, people in their family (if the fundraising group has a _Participation Type_ of Family) and trip leaders.  
  
Note, this means that if Ted is logged in, he should see everyone in his family who is in the group even if he is not in the group himself. This allows him to view the details for his children and make payments.

Each participant can provide a custom opportunity introduction and edit their profile image from their personalized page. This block can also be configured to edit specific person attributes if you wish, such as the Facebook example pictured below.

Fundraising Participant Profile

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/walkthru-profile-2-v15.png)

If the person logged in is the participant, they can also view the gifts that have been given near the bottom of the page by selecting _Contributions_.

Fundraising Participant Transactions

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/walkthru-profile-3-v15.png)

If someone doesn't have a link to a participant's profile page, they can choose to give from the opportunity detail page and select the participant they would like to fund.

Donate to a Participant

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/walkthru-donate-v15.png)

If the fundraising group is set up for families, and if more than one person from the same family is in the group, you can give to the family as a whole.

Donate to a Family

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/walkthru-donate-family-v15.png)

After selecting a participant and clicking Next from the page pictured above, the person will be brought to the _Fundraising Transaction Entry_ page pictured below. There are many block settings for this block, so be sure to review them to ensure this process matches your organization's needs.

Donate to a Participant

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/fundraising-transaction-entry-v15.png)

1 Fundraising Opportunity

The name of the fundraising opportunity comes from the _Opportunity Title_ group attribute that was set when the fundraising group was created.

2 Participant Information

Based on the person's selection in the prior screen (see prior screenshot above) we see the participant's name, their total fundraising goal and how much they have left to raise to meet the goal. If giving to a family, the family's name will appear here, and the amounts displayed will be for the family as a whole.

3 Contribution Information

When a participant is selected from the prior screen, the _Financial Account_ associated with the fundraising group (set as a group attribute) is passed to this page in the URL. The amount entered here will go to that account. Only Public accounts can be used by this block.  
  
If this page is accessed directly without first selecting a participant, then multiple _Donation Amount_ fields will be present, one for each Public account you have. This can be changed in the block's settings by specifying the Accounts that should be used. The block settings also provide an option to allow the person to choose additional accounts if needed, but this only applies if an AccountId is not present in the URL.

4 Donor Information

This information will be pre-filled for the person if they're known (i.e., logged in). The type of address to use can be changed in the block's settings.

5 Additional Options

The block settings allow you to remove the prompt for email, and also give you the option of asking for a phone number. You can also disable the option for the person to give anonymously.

6 Payment Information

This is where the person will provide their card or bank account information. The title of this area can be changed in the block settings.

7 Previous

This will take the person back to the prior screen, where they can select a different participant if needed.

8 Next

Clicking Next will take the person to a confirmation screen. The header and footer text of the confirmation screen can be customized in the block settings.

[](#fundraisingopportunityconfiguration)Fundraising Opportunity Configuration
=============================================================================

As we mentioned earlier, Rock's fundraising features are driven by a set of group and group member attributes. Let's take a look at these settings to see how you can customize each fundraising opportunity to meet your individualized needs.

Keep in mind the group and group member attributes below are specific to a single fundraising opportunity (each one is a group). This allows you to have several types of opportunities, each with their own unique settings and configuration.

Group Attributes
----------------

Below is a detailed discussion of each setting for the group that represents the opportunity (Mission Trip, Internship Season, etc.)

| Name | Type | Description |
| --- | --- | --- |
| Opportunity Title | Text | The group name is mainly used internally. This attribute of _Opportunity Title_ is what will show on the external site when opportunities are listed. |
| Opportunity Date Range | Date Range | Used to show the start and end dates of the opportunity. For a mission trip, we would recommend that you put the trip dates here. This date range doesn't control when the opportunity is shown externally; it just describes when the opportunity occurs. |
| Opportunity Location | Text | This is the location of the opportunity. For a mission trip, this would be the city or country. Feel free to leave this blank if it doesn't make sense in your situation. |
| Opportunity Summary | Memo | A brief description of the fundraising opportunity. |
| Opportunity Photo | Image | If a picture is worth a thousand words, then we'd better include one. |
| Opportunity Details | HTML | Now we get to the nitty-gritty of what this opportunity is all about. |
| Individual Fundraising Goal | Currency | This field determines how much money each person is trying to raise. If each person in the opportunity is raising different amounts, you can provide those unique amounts on their group member attribute (discussed below). |
| Opportunity Type | Defined Value | The opportunity type helps group similar opportunities. Rock ships with three options (_Trip_, _Internship_ and _Project_). You can add your own under General Settings > Defined Types > Fundraising Opportunity Type.  
  
This setting has two roles:
*   Acts as a filter for opportunities on the external website (e.g., show only mission trips on this list)
*   Provides a label to describe the opportunity type. For instance, should this opportunity be referred to as a _Trip_, _Project_, etc.

 |
| Update Content Channel | Content Channel | You may want to provide updates on the status of your opportunity. For example, if your opportunity is a mission trip, you might want to file trip reports. Or if it's a project, you might want to provide updates on the overall funding level or project status. This setting allows you to configure a content channel to manage these updates. If you don't provide a channel the updates tab will be hidden. |
| Enable Commenting | Boolean | Sometimes you want comments, sometimes you don't. When enabled, a notes block will be added to the opportunity detail. Just remember that there is no automatic email when new notes/comments are left and no approval process. These features may be added in a future release. |
| Registration Instance | Number | This is what ties in a registration to the fundraising opportunity. You must provide the registration instance ID (currently there isn't a registration instance picker). |
| Registration Notes | Memo | This short description will show up on the opportunity details page to provide any quick notes about the registration (e.g., _A $200 deposit is required_). |
| Allow Individual Disabling of Contribution Requests | Boolean | Opportunity participants can have their own personalized fundraising pages. Some participants may want to use this page to share the opportunity and provide updates, but not want to communicate the financial needs. This setting allows you the option to allow them to disable the sharing of their funding status. |
| Allow Individual Editing of Fundraising Goal | Boolean | This allows individuals to set their own fundraising goals from their external fundraising profiles. The default for this is not to allow editing. |
| Cap Fundraising Amount | Boolean | This setting determines if an individual can raise more money than their goal. |
| Financial Account | Financial Account | This configures which financial account the fundraising opportunity should use to track their money. |
| Allow Donations Until | Date Picker | An inclusive date that specifies how long to allow donations to participants. Once this date passes no more donations will be accepted by Rock. |
| Show Public | Boolean | This flag determines whether the opportunity should be displayed on the external website. Since it's common for an opportunity to be displayed long before it starts, and for a brief time after it ends, this flag is used to determine when an opportunity should be displayed. |
| Participation Type | Single-Select | This is where you select whether the participant is an individual or a family. This controls much of how people interact with the group, as noted throughout this chapter. |

  

Since many of these attributes drive the external display of the opportunity, let's look at an example and see where each value is shown.

External Display of Attributes

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/opportunity-detail-v15.png)

1 Opportunity Title

2 Photo

3 Date Range

4 Location

5 Summary

6 Details

7 Trip Updates

8 Comments

9 Registration Status

This is determined by looking at the dates on the registration instance. If the registration is not yet open, the future opening date will be displayed.

10 Registration Contact

The contact comes from the Registration if it is configured.

11 Registration Note

12 Spots Available

This is calculated by looking at the number of registrant openings available for the registration.

Group Member Attributes
-----------------------

The following group member attributes are available to help configure the opportunities.

| Name | Type | Description |
| --- | --- | --- |
| Individual Fundraising Goal | Currency | This allows you to provide an individual goal that is unique to each person. This attribute is only available to internal Rock administrators and cannot be edited by the individual. |
| Personal Opportunity Introduction | Memo | This is a short message that the person can provide to provide a personalized note on their individual trip page. |
| Disable Public Contribution Requests | Boolean | This allows an individual to hide their name when listing people to fund. It also hides many of the features on their personal opportunity profile that are intended to encourage someone to give. This allows them to use their personal page to communicate updates if they are self-funding the opportunity. |

[](#fundraisingfinancialtransactions)Fundraising Financial Transactions
=======================================================================

Financial Transactions that are created from the fundraising features will all default to the _Contribution_ type. The account for the transaction will be applied based on the opportunity group setting. It is possible to change the transaction type to a different value than _Contribution_. To do so, you'd need to create a new page with a _Transaction Entry_ block on it. This block has a block attribute to set the transaction type on the advanced setting panel. You'd then need to configure your fundraising pages to use this new page for processing financial transactions.

Moving Transactions
===================

If a participant moves from one fundraising group to another, you can easily transfer the donations that were already made. See the [Moving Group Members](#movinggroupmembers) section above for details.

In Rock, financial transactions can be tied to another entity (event registration, etc.). Donations that are made as a part of fundraising will be tied to the _Group Member_ of the _Fundraising Opportunity_ group. There is no financial linkage to registrations. This is an important point to understand as there is no way to link money coming in to a registration with that given as a fundraising opportunity. Below we cover several ways you can configure event registration to work with the fundraising tools for maximum impact.

[](#financialtransactionsmatching)Financial Transactions Matching
=================================================================

We've already discussed that Financial Transactions for fundraising are Contributions that are tied to the Group Members of the Fundraising Opportunity Group. The Rock tools mentioned above do all of the connecting of the group member to the transactions. You might be asking, "What about checks or gifts that need to be entered manually?" And that...is a GREAT question!

After entering contributions (either scanning and matching or through another process), you can link a contribution to a fundraising opportunity participant using the _Fundraising Matching_ page found under Finance > Fundraising Matching.

Fundraising Matching

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/fundraising-matching-v15.png)

[](#fundraisingprogress)Fundraising Progress
============================================

You can quickly track the progress of fundraising campaigns for fundraising groups. Start by going to the _Group Viewer_ page (People > Group Viewer). From this screen you can view the individual fundraising donations for each group member, below the list of group members.

Fundraising Group

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/fundraising-progress-v15.png)

You can also quickly view the group's overall fundraising progress. Click the button to display a snapshot of both the combined and individual fundraising progress.

Fundraising Progress

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/fundraising-progress-detail-v15.png)

If the fundraising group's _Participation Type_ is Family, then the chart combines family members into a single line as pictured below.

Fundraising Progress - Family

![](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/fundraising-progress-detail-family-v15.png)

[](#howregistrationcanworkwithfundraising)How Registration Can Work with Fundraising
====================================================================================

As mentioned above, Rock's registration and fundraising tools were meant to work together. That said, financial transactions from these two features don't tie directly together. Below are some use cases to show how you can get these two features to sing in perfect harmony.

Basic Mission Trip
------------------

In a basic scenario you would create a new event registration to capture information about the trip participant and have the registrant drop directly into the fundraising group. To enable this direct link to the fundraising group, be sure you define a linkage on the registration instance to the group. The fundraising blocks are smart enough to use these linkages in the registration process.

Pro Tip
=======

You can actually provide multiple linkages to have individuals drop into different groups. The linkage name will be used on the registration button on the fundraising page.

Mission Trip with No Cost Application Process
---------------------------------------------

Say you wanted to configure a mission trip in which a person needed to register and be approved before they could begin fundraising. You could use an event registration to take their application information. Once their application was approved, they would be added to the _Fundraising Opportunity_ group (using the group placement tools would help with this) and they could then start their fundraising. They would use the same _Donation_ page to submit their own payments for the trip.

Mission Trip with Required Costs Paid by the Participant
--------------------------------------------------------

Now let's say that the trip costs $1,000 and that $200 is due upfront and should be paid by the trip participant. Also, suppose that there is an optional post trip safari that a person could choose to add. In this case, you would set up an event registration for $200 with an optional fee for the safari. You would then set up the _Fundraising Opportunity_ group to have an _Individual Fundraising Goal_ of $800.

[](#grouprsvp)Group RSVP
========================

If you’re hosting an event, class or other type of gathering, it can be very important to know how many people plan to attend. The expected attendance can impact things like the location, the refreshments and even how many chairs you'll need. Those are just some of the reasons why Rock comes with an RSVP system that lets you track whether invitees actually plan on attending your function.

If this brings Rock’s event registration features to mind, you’re not too far off. You already know how robust and flexible event registration features can be, but sometimes it might be a little more than you need. Group RSVP is for when you just need to know who’s coming, plain and simple.

[](#enablegrouprsvp)Enable Group RSVP
=====================================

The RSVP function is enabled in group type settings, making RSVP features available to any groups within that type. All RSVP features are tied directly to a group. That means you must have a group created before you can use RSVP. The group doesn't need to have any members, but it needs to exist so individuals who accept your RSVP can be added to it.

To enable RSVP for a group type, navigate to Admin Tools > General Settings > Group Types and open the RSVP settings for the group type.

Enable Group RSVP

![Enable Group RSVP](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-type-enable-group-rsvp-v13.png)

1 Group RSVP Enabled

This checkbox must be selected to access RSVP features for any group of this type. Once enabled, the other two fields related to RSVP will appear.

2 RSVP Reminder System Communication

Select the System Communication that should be used to send reminders to invitees who have Accepted. Only communications in the “RSVP Confirmation” category will be available for selection. The selected communication will automatically be used with all groups of this type. Leave this blank to set the System Communication on each group individually.

3 RSVP Reminder Offset Days

Indicate how many days before the event the reminder should be sent. Like the communication selection, you won’t be able to change the offset days for individual groups if you set a value here. All groups of this type will inherit the offset days set at the group type level. Set this to '0' days if you instead want to manage the reminder offset days on each group individually.

RSVP - Group Viewer
===================

After you’ve enabled RSVP for a group type, you’ll see a couple of changes when viewing groups of that type from the _Group Viewer_ page.

First, you’ll notice the addition of a new icon that will take you to the _Group RSVP List_ page, where you can view or add occurrences. We’ll talk more about occurrences in the [RSVP Occurrences](#rsvp-occurrences) section below.

Group Viewer With RSVP

![Group Viewer With RSVP](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-viewer-rsvp-enabled-v13.png)

Second, you can Edit a group to access the _RSVP Reminder System Communication_ and _RSVP Reminder Offset Days_ for that group. These settings are only available for groups where RSVP has been enabled on the group type.

Group Viewer RSVP Reminder Settings

![Group Viewer RSVP Reminder Settings](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-viewer-rsvp-reminder-settings-v13.png)

1 RSVP Reminder System Communication

Select the _System Communication_ that should be used to send reminders to invitees who have _Accepted_. Only communications in the “RSVP Confirmation” category will be listed for selection. If you already set this at the group type level, then you won’t be able to change it here.

2 RSVP Reminder Offset Days

Indicate how many days before the event the reminder should be sent. Like the communication selection, you won’t be able to change the reminder settings for individual groups if they’re already configured for the group type.

[](#grouprsvplist)Group RSVP List
=================================

Clicking the icon takes you to the _Group RSVP List_ page. It will be empty when you first start, but after you add a few occurrences to the list (see [RSVP Occurrences](#rsvpoccurrences)) you’ll quickly see how useful this page is. Let's take a look.

RSVP List Page

![RSVP List Page](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/rsvp-list-page-v13.png)

1 Date

The date of the occurrence is shown in the first column. You can use the _Filter Options_ near the top of the block to narrow the list by date.

2 Schedule

The check-in schedule associated with the occurrence, if applicable, is shown here.

3 Location

If a location has been assigned to the occurrence you can see it here.

4 Response Progress Bar

This column gives you a graph of RSVP response data:

*   Green = Accepted
*   Red = Declined
*   Blank/Gray = No Response

5 Invited

You can view the count of all invitees for the occurrence, so you know how many people were invited.

6 Response Statistics

In this part of the block, you can see how many people have replied to the RSVP with either an Accept or Decline, and a count of how many haven’t responded.

7 RSVP Detail Icon

Click the icon to access the _RSVP Detail_ page (see [RSVP Detail](#rsvpdetail)).

[](#rsvpoccurrences)RSVP Occurrences
====================================

Let’s look at how to add an occurrence to the RSVP List. You'll need to have at least one occurrence set up for the group before you can start sending your RSVP emails.

Add Occurrence

![Add Occurrence](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/rsvp-detail-add-occurrence-v13.png)

1 Name

You can optionally set a unique name for an occurrence. This applies only to the occurrence being viewed. Invitees will see the name you provide on the external website when they _Accept_ or _Decline_.

2 Date

Set the date of the occurrence.

3 Check-in Schedule

Choose the check-in schedule associated with the occurrence, if applicable.

4 Location

Select the location of the occurrence.

5 Show/Hide Additional Fields

Click _Show Additional Fields_ to reveal the settings for custom messages and decline reasons (listed below).

6 Custom Accept/Decline Messages

You can customize the message invitees see when they respond to your RSVP request. We'll show you what that looks like in the [Responding to RSVP Requests](#respondingtorsvprequests) section.

7 Show Decline Reasons

If the _Show Decline Reasons_ box is selected, then invitees can give a reason for declining. You can choose which reasons are available to invitees from the list of _Available Decline Reasons_.

Decline Reasons
===============

The list of _Available Decline Reasons_ can be maintained from the Admin Tools > General Settings > Defined Type list under _Group RSVP Decline Reason_.

[](#rsvpemailrequests)RSVP Email Requests
=========================================

Now that we have an occurrence set up, we’re ready to send out some invitations.

Adding an RSVP request to an e-mail is as simple as clicking and dragging the RSVP tool button (look for the icon) into your email. If you’re not sure how to get to this point, check out the [Communication Wizard](https://community.rockrms.com/documentation/bookcontent/8#communicationwizard) section in the [Communicating With Rock](https://community.rockrms.com/documentation/bookcontent/8/) guide.

Add RSVP To New Communication

![Add RSVP To New Communication](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/rsvp-add-to-new-communication-v13.png)

After the RSVP buttons have been added to the body of your email, use the panel on the right to select the group and occurrence.

Add Occurrence to Email

![Add Occurrence to Email](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/rsvp-add-occurrence-to-email.png)

1 Select Group

Choose the group associated with the occurrence. Only group types with RSVP enabled will be in the list of options.

2 Select Occurrence

Pick the occurrence for which you want to send an email. The RSVP responses you receive will be for this occurrence.

3 Register Recipients

Click the Register Recipients button to keep track of RSVP data for all the recipients of your email. If this button isn’t used, only people who have responded to your RSVP request will appear in the _RSVP List_ or _RSVP Detail_ pages.

4 Show Advanced Settings

You can use the advanced settings to customize how the RSVP buttons are shown to invitees.

[](#rsvpdetail)RSVP Detail
==========================

Now that we’ve sent our email, we need to monitor the responses. We’ll do this from the _RSVP Detail_ page, which you can get to by clicking an occurrence from the _RSVP List_ page.

The detail block at the top of the _RSVP Detail_ page shows the occurrence details and a graph of responses. The list block at the bottom of the page shows your invitees and their responses.

RSVP Detail Page

![RSVP Detail Page](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/rsvp-detail-page-v14.png)

Not only can you view responses, but you can also update responses or add decline notes if you need to. This ensures you always have accurate information, especially if the invitee responds (or changes their response) by phone or in person.

If you didn’t turn on the _Show Decline Reasons_ option for the occurrence, then the _Decline Reason_ and _Decline Note_ columns won’t be shown.

Missing Invitees?
=================

If you used the Register Recipients button when sending your email, then everyone from your email will be on this list. Otherwise, you'll only see people who have responded.

[](#respondingtorsvprequests)Responding to RSVP Requests
========================================================

It may be helpful for you to know what individuals will be seeing and doing after they receive your RSVP email.

Clicking either Accept or Decline in the email will bring the invitee to your external site. What happens at that point depends on how you’ve set up your group, occurrence and email.

Public Group Member Attributes
------------------------------

When adding a member attribute to either a group or group type, you'll notice a _Public_ setting. This setting controls whether the member attribute is included as part of the RSVP response process.

Enable Public Attributes

![Enable Public Attributes](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-member-attributes-public-v14.png)

If the _Public_ setting is enabled, then the group member attribute will be shown to RSVP invitees who accept your invitation. This allows you to gather additional information from the invitee beyond knowing that they plan to attend. We’ll show you exactly what this looks like in the [Accept](#accept) section below.

Accept
------

Invitees will be taken to your website after clicking “Accept” in the RSVP email they received. If you’ve attached any public member attributes to your group, then invitees will be asked to provide additional information (i.e., attribute values) accordingly.

For example, the _RSVP Response_ page pictured below has a field labeled “Need Childcare?” with a drop-down menu below it. This prompts the individual to disclose if they need childcare before finalizing their RSVP acceptance. You can see how this particular member attribute was set up in the [Public Group Member Attributes](#publicgroupmemberattributes) section above.

RSVP Accept With Attribute

![RSVP Accept With Attribute](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/rsvp-response-accept-with-attribute.png)

After the invitee clicks the Accept button on the page pictured above, they’ll be brought to the acceptance confirmation page pictured below.

If you didn't add any public member attributes to your group, then the above page is skipped because there is nothing else the invitee needs to provide. Instead, invitees will be taken directly to the acceptance confirmation page pictured below when they click “Accept” from the RSVP email.

RSVP Accept Message

![RSVP Accept Message](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/rsvp-response-accept-default-message.png)

The generic acceptance message pictured above can be customized if desired (see [RSVP Occurrences](#rsvpoccurrences)).

Accepts Become Group Members
============================

Rock will always add a person who accepts the RSVP into the group as a group member. This is especially needed when, for example, group member attributes are used. If an individual declines the RSVP invitation, they won’t be removed from the group.

Decline
-------

Just like clicking Accept, you control what happens when a person clicks Decline.

If the person declines, and if you enabled decline reasons, then they’ll be asked to provide a reason.

RSVP Decline With Reason

![RSVP Decline With Reason](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/rsvp-response-decline-with-reason.png)

In the above example a custom decline message is displayed near the top of the block. If you didn’t customize your decline message, then the generic message (pictured below) will appear instead.

If you didn’t enable decline reasons, then the invitee will be taken directly to the page below from the email.

RSVP Decline Message

![RSVP Decline Message](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/rsvp-response-decline-default-message.png)

[](#grouprsvpreminders)Group RSVP Reminders
===========================================

The _Send Rsvp Reminders_ job will send a reminder to people who have accepted an RSVP invitation. Those who have declined or who haven’t responded won’t receive a reminder.

The job is ready for you to use out of the box, but it must be manually configured and is intended to be run daily. It will use the _RSVP Reminder System Communication_ for the content, as configured at either the group or group type level. If you haven’t selected a _System Communication_ to use, then the job will not send a reminder.

Sending Reminders using SMS
===========================

If a person's communication preference is SMS, and if the _System Communication_ you use for RSVP reminders is fully configured for SMS, then the reminder will be sent as a text instead of an email.

Group RSVP Reminders Job

![Group RSVP Reminders Job](https://rockrms.blob.core.windows.net/documentation/Books/7/1.15.0/images/group-rsvp-reminders-job-v13.png)

1 Job Type

For RSVP reminder communications, be sure to select the _Send Rsvp Reminders_ job as pictured above. You’ll then be prompted to select a group type.

2 Group Type

The _Send Rsvp Reminders_ job will attempt to send reminders for all group types if one is not specified here. Otherwise, you can pick a group type if you only want to send reminders for groups of that type. In most cases you’ll probably want to configure a single job, without picking a group type, for all of your reminders. You can create multiple jobs if needed but be sure every instance of the job has its own group type specified or you risk sending duplicate communications.

Don’t forget that the _Send Rsvp Reminders_ job will reference the configured _RSVP Reminder Offset Days_ value (either from the group type or for a particular group) to determine when to send reminders for any given occurrence.