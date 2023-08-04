# Checking-out Check-in
[View Original Source](https://community.rockrms.com/documentation/bookcontent/10)

[](#welcome)Welcome
===================

Attendance data is the backbone of any organization's information strategy. Not only can it provide safety and security to the children who attend your events, it also provides a window into each person's ongoing relationship with your organization.

As you read through this guide and start to think about configuring check-in for your organization, you'll realize the system has a ton of flexibility. Keep in mind that the downside of flexibility is complexity. To keep it simple, consider using the out-of-the-box configuration as much as possible, renaming locations, groups and service times as needed. As you get more comfortable with Rock, you can dive deeper into some of the more complex configurations.

[](#checkinsystems)Check-In Systems
===================================

Before we get into the details of Rock’s check-in system, let’s start with a broad overview of what check-in is and how it works.

In general terms, check-in involves a person attending a group at a location at a specific time. Each of these elements ties to a component in Rock. A person. A group or area. A location. A time (schedule). The check-in system consists of a series of screens that allow a guest to identify each of these elements and capture them in an electronic record. In many check-in systems, the process ends with some kind of identification label being printed.

[](#typesofdigitalcheckinsystems)Types of Digital Check-In Systems
==================================================================

Digital check-in systems have been in use for over a decade. Over the years these systems have developed into three basic categories:

*   Centralized self-service check-in
*   Decentralized check-in
*   Centralized attended check-in

There are pros and cons to each system. Let’s take a look at each.

Centralized Self-Service Check-In
---------------------------------

With the centralized self-service model, attendees check themselves in at a main kiosk that serves multiple areas and rooms.

**Pros:**

*   Once people are familiar with the system, they become comfortable and efficient with the check-in process
*   Does not require as many volunteers
*   Families with multiple kids can check-in all of their kids at the same time

**Cons:**

*   Can be somewhat intimidating for first-time guests

Decentralized Check-In
----------------------

Decentralized check-in places a kiosk in every room where check-in is required.

**Pros:**

*   Attendees get to observe the room (considering the teacher and students in the room) before checking in
*   Can be fast since you don’t need to select the location and there are smaller lines due to the greater number of kiosks

**Cons:**

*   Higher equipment costs due to the number of kiosks and printers needed
*   Families with multiple kids of different ages need to go through the check-in process more than once
*   Increased support costs due to the number of kiosks required

Centralized Attended Check-In
-----------------------------

In this model, attendees walk up to a kiosk that is staffed by a volunteer who performs the check-in process for the guest.

**Pros:**

*   Good experience for first-time guests

**Cons:**

*   After the first check-in many people may prefer to do the process themselves
*   Must have a volunteer for each kiosk
*   Can be slower since there is an added communication layer

Check Out The Rock Shop
=======================

Rock has [Registration Mode](https://community.rockrms.com/documentation/bookcontent/10/266#checkinregistration) for churches that desire to register or edit new families as they arrive.  
There is also a third-party plug-in available from Kingdom First Solutions Inc (KFS) in the Rock Shop that has some additional features.

[](#checkinprocessesavailableinrock)Check-In Processes Available in Rock
========================================================================

Rock provides two different types of basic check-in processes: Family and Individual.

Family check-in allows a family to check in multiple family members at once. A family can walk up to a central kiosk and check in everyone at the same time with a minimum number of steps. Adults may be checked into volunteer (or other) groups while also checking in their children.

As you might guess, Individual check-in checks in one person at a time. The process leads one person through the selection of groups, locations, and times, then repeats for each additional family member.

The check-in process is similar for both systems. Rock defaults to the Family check-in configuration, but you can easily change this when configuring your check-in process. More on that in a bit.

While Individual check-in is typically used for decentralized scenarios and Family is typically used for centralized, there is no requirement that you stick to this pattern. You could choose to use the family check-in configuration with a decentralized system, letting families check-in all of their children at the first location, then taking the kids to individual rooms without needing to check them in again. The system is designed to be flexible.

[](#learningthelingo)Learning the Lingo
=======================================

Let's talk about vocabulary. Feel free to revisit this section as you go through the manual to clarify the meanings of these terms.

| Term | Definition |
| --- | --- |
| Check-in Configurations | A check-in configuration is what you start with when configuring check-in. All the settings are associated with a particular configuration. When you start a check-in kiosk, one of the first things you'll be asked is which check-in configuration to use. Examples of check-in configurations include Volunteer Check-In and Weekly Service Check-In (for kids). |
| Areas | This is a high-level collection of related check-in groups. Typically, these will match your organizational structure. Within an area, you'll probably have several groups that individuals can check into. Areas allow you to organize your groups into collections of similar groups. Example areas in the default configuration include: Nursery/Preschool, Elementary, Jr High and High School. For those who like to know how things work under the hood, areas are simply Rock group types. For everyone else, it’s ok... just keep the hood closed. |
| Sub-Areas | If needed you can create sub-areas, which act as a hierarchy of areas. Even though Rock allows it, we strongly encourage you to keep your structure simple. (Some of the largest organizations using Rock do so without the need for sub-areas.) |
| Group | 
This is the classification unit that a person checks into. A newborn would be checked into the _Infants_ group while a second-grader would be checked into the _Grades 2-3_ group. Note that these are just examples. You can easily customize your groups.

Deeper Knowledge: while classification units are called groups, and they are actual Rock groups under the hood, individuals are not added as group members when they check in, since their relationship with the group is not permanent.

 |
| Locations | If a group is _what_ someone checks into, the location is _where_. In most cases this will be a room. Specifying locations makes sense for larger organizations that might have multiple rooms for each group. |
| Service Schedule | Groups tell us _what_, locations tell us _where_, and the schedule tells us _when_. Starting to understand the structure? Again, this makes sense if you consider that most churches have multiple services. |
| Labels | In most check-in scenarios, you'll want to print out some form of label or tag. These might be used for a nametag or a check-in/check-out token. Rock allows you to print as many (or few) labels as you want. It's also easy to customize these labels to your liking. |
| Kiosk | A kiosk is the device that is used to process the check-in. |
| Printer | The printer is what prints the labels. Rock allows you to configure where and how these labels get printed. More on that later... |

[](#individualandfamilycheckininrock)Individual and Family Check-In in Rock
===========================================================================

Before we get into the more technical aspects of configuration, let’s step back and take a general look at how individual and family check-in works in Rock.

Check-In Overview

![Check-in Overview](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-overview.png)

The specific screens the guest will be guided through are based on whether they’re checking in an individual or a family, as well as the check-in system settings set up by the administrator. But as you can see, the process is similar for both.

Now let’s take a more specific look at the family check-in process. Here, Ted and Cindy Decker are checking in their children, Noah and Alex.

Family Check-In Walkthrough

![Family Check-In Walkthrough](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/family-walkthrough.png)

1**Welcome**

The Welcome screen is the waiting screen your guests will see when they walk up to the kiosk to check in. If no check-in locations are currently active, the guest will see a countdown for the opening time.

2**Search**

The Search By Phone screen allows guests to enter their phone number to begin the check-in process. By default, only four digits are needed to perform the search, but like most check-in features, this is configurable. Since entering the last four digits reduces check-in time, you may want to share this tip with your guests.

3**Results from search**

The Families screen lists the families that match the phone number entered. If _Prioritize families for this campus_ is enabled in the Family Select block's settings, then families matching the kiosk's campus will be listed first. Otherwise, the families will be listed in alphabetical order.

4**List of Check-in people**

Rock displays a list of family members who are able to check in to any of the areas that have valid areas and groups (more on that when we get to the Administration screen). From here the guest can select all of the family members who are checking in.

5**Select Times**

The Select Time screen allows the guest to pick the times they are checking into, either a single time or more than one. If only one time is available, this screen will be skipped.

6**Area Selection**

The Area Selection screen lists the check-in areas that are available for the current time and individual. This screen will only display if the child’s age spans groups in multiple areas.

7**Group Selection**

The Group Selection screen lists the check-in groups that are valid for the current time and individual. If only one group is valid, this screen will be skipped.

8**Room Location**

The Location Selection screen will list all open locations for the group selected on the previous screen. If only one location is available, this screen will be skipped.

There is also an optional Ability Level screen that is displayed if any areas or groups selected have an ability level requirement (e.g., crawling, walking, potty-trained, etc.). This screen is used to filter the available areas and/or groups. You can learn more about it in the [Ability Levels](#abilitylevels) chapter below.

Previous Check-Ins
==================

By default, when accessing the Family Selection screen, family members who have previously checked in within the last 10 days will already be selected. If 10 days is too short (or too long) a timespan, you can change this value in the Check-in Configuration area. See the [Setting It all Up](#settingitallup) chapter below for more information.

The process described above is practically the same for an individual, but the process is only done once rather than cycled through multiple family members.

As you can see, many of the screens will be skipped over if there is only one selection. This means if a family only has one teen, for example, they will only have to enter the phone number and select their family. The rest of the screens will be skipped, and their label(s) will print. This makes check-in very quick and simple.

[](#theadministrationscreen)The Administration Screen
=====================================================

OK, ready to get a little more technical? Let’s take a look at the Administration Screen.

The Administration screen is where you choose your check-in options for the kiosk device you're starting.

Check-in Administration Screen

![Admin Screen](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/walkthru-1.png)

The Administration screen is the first screen you come to when you launch the check-in system. From this screen you can configure the check-in session by selecting:

*   Check-in Theme
*   Kiosk Device
*   Check-in Configuration
*   Areas

The Check-in Theme field is where you select which look and feel you want to use for the check-in screens at that kiosk. You can learn more about the themes that ship with Rock in the [Themes](#themes) chapter below.

The Kiosk Device field is where you choose which kiosk device to set this kiosk to. Among other things, this sets the location for the kiosk, determining which location-matching groups can check in here.

The Check-in Configuration field allows you to select which check-in configuration you want to use for the kiosk.

The Area(s) and Additional Area(s) checkboxes are where you identify which check-in areas you want to enable for the kiosk. Rock’s check-in system will allow checking into any area from any number of configurations at the same time, but it can only use one type of configuration settings at a time. Area(s) are all of the areas in the selected configuration that are allowed to check in based on their location matching the location setting of the kiosk device. Additional Area(s) are any other areas also configured to use the selected kiosk device but from different check-in configurations.

The selections you make on this screen will be remembered for future sessions.

Tip
===

You can bypass this screen by entering [URL Parameters](#urlparameters).

Let’s ramp this up another notch and look at the types of customization you can do with Rock’s check-in system. Then we’ll dive into planning and configuring the check-in system for _your_ organization.

[](#typesofcustomization)Types of Customization
===============================================

We've mentioned several times that Rock lets you customize the check-in process in powerful ways. Here are some details on the different ways you can customize the system and the level of effort needed for each.

| Type | Level of Effort | Description |
| --- | --- | --- |
| Area, Group and Schedule Structure | Easy | In all likelihood no two organizations will have the same areas, groups and schedules for their check-in. Rock's check-in configuration tools make these changes a simple process. |
| Labels | Easy/Moderate | Depending on the type of customization required, labels can be easy or a bit tricky. Most of this depends on the level of graphics required for your labels. Read [below](#creatingcustomlabels) for a deeper discussion about how to modify the labels. |
| Look and Feel | Moderate | While Rock ships with several different check-in themes, you can add your own with some basic knowledge of HTML/CSS and Less. |
| Workflow Process | Difficult (but possible) | 
Rock's check-in process runs on top of the workflow engine. The check-in workflow handles actions such as selecting families from the entered phone number and selecting rooms that match the chosen family member. Each step of the check-in process is controlled by a workflow activity or action. You can customize workflows to do certain tasks, such as checking room balance based on last name or family address. These types of changes do require deep knowledge of the workflow engine (and possibly of writing custom code).

The out-of-the-box workflow is based on over 30 years of check-in experience through first-hand work with lots of organizations. It should fit the needs of all but a few. If you feel that you are one that needs something different, you might confirm that the reasoning is based on strategy, not preference. If it's strategic in nature, you might consider engaging a Rock consultant to assist you with the configuration and custom coding.

 |

[](#sampleconfigurations)Sample Configurations
==============================================

Before we get much further, let's stop and take a look at two different check-in configurations. The first is for our fictitious _Rock Solid Church_. It's also the default check-in configuration that ships with Rock. The second is a sample configuration for a larger church, _Boulder Solid Church_, which has two campuses. This second option will give you some ideas about how things can be modified to meet an organization's needs.

[](#rocksolidchurchconfiguration)Rock Solid Church Configuration
================================================================

Default Configuration

![Default Configuration](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-config-default.png)

Points of Interest
------------------

1.  Note how Jr High and High School have their own areas with only a single check-in group in each one. This is a preference. You could combine them into a single _Youth Area_ and put both groups in it. In this case _Rock Solid Church_ has broken them out for reporting reasons.
2.  Pay close attention to the age ranges in the groups. Notice how they are fairly wide. Wider ranges tend to work better because they give you some leeway in unique family edge cases. Also note that the age ranges overlap. It's important that there are no gaps in the age ranges.
3.  This church has decided to use a centralized kiosk for check-in. They have also defined a printer device for this kiosk.
4.  For simplicity's sake, we are not showing the mapping of the check-in schedule (service times) to the various locations (rooms). Keep in mind that each location can determine which service times it's available for.

[](#bouldersolidchurchconfiguration)Boulder Solid Church Configuration
======================================================================

Default Configuration

![Large Configuration](https://rockrms.blob.core.windows.net/documentation/Books/10/1.13.0/images/checkin-config-large-a-v13.png)

![Large Configuration](https://rockrms.blob.core.windows.net/documentation/Books/10/1.13.0/images/checkin-config-large-b-v13.png)

Points of Interest
------------------

1.  Notice that Boulder Solid Church has two campuses, _North_ and _South_. These two campuses can share the same check-in group, with each location (campus > room) being attached to the group. This is true even if the two campuses have different service times.
2.  Note how the _North_ campus has two rooms (Bobcats & Turtles) for their K-1 group. By using schedules, they can configure check-in to use the Turtle room for only their most popular services.
3.  This church has configured a second kiosk in Rock that is dedicated to their youth ministry.
4.  You might be questioning the strategy of a church this size only using two check-in kiosks for the whole church. You'll learn later that a kiosk, as defined in Rock, is a device configuration template that can be used by multiple physical machines.
5.  You've probably noticed that this configuration has more areas and groups. In some cases, like the kids' area, this configuration is the best fit for the structure of the buildings. In the teen area, it's more for reporting reasons since the youth are all in the same large room.

[](#planningyourconfiguration)Planning Your Configuration
=========================================================

Before jumping into the configuration of the check-in system, it's important to take a step back and do some planning. No matter how well you know your organization's structure in your head, it's critical that you put it all down on paper. This will help you get the configuration done right the first time and reduce the chance for error. Be sure to consider the following:

*   What groups will you be checking into?
*   Are they broken down by age, ability, gender or grade?
*   How are these groups organized into areas?
*   What rooms/locations are used for each group?
*   Do these locations vary by:

*   Day of the week (e.g., Saturday vs. Sunday)
*   Service times

*   Will you have special events (think Christmas, Easter, etc.) that will impact your normal configuration? If so, briefly write out how these will differ.
*   If you have multiple campuses, how does this change by campus?

Consistent Configuration
========================

We strongly encourage multi-site organizations to select just one area/group configuration as a standard. This will greatly simplify the attendance reporting and configuration. Of course, locations and schedules will need to be specific to the campus but do try to keep the groups and areas consistent.

We've provided a [Check-in Configuration Worksheet](http://storage.rockrms.com/resources/checkin-template-v1_0_0.pdf) to help you plan your configuration. Use your answers above to complete the worksheet.

[](#settingitallup)Setting It All Up
====================================

With your configuration all documented (you did document it, right?), let's jump in and start configuring check-in for your organization.

Simple Sample
=============

Keep in mind that sample configurations are already present at installation. Feel free to modify these settings, adding new items as needed.

[](#servicetimes)Service Times
==============================

Let's start with something simple by configuring our service times (schedules) under Admin Tools > Check-in > Schedules. You'll use the values on this list later in the check-in configuration. They are used to help determine which services are active (allow check-in) at any given time.

Editing A Schedule

![Editing A Schedule](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/schedule-edit-v15.png)

1 Schedule Menu Tree

Shows a hierarchical list of schedules defined in Rock. Notice that there are separate categories for Service Times and Event Schedules.

2 Name

The name to use for the schedule item.

3 Abbreviated Name

If present, the _Abbreviated Name_ will appear in Group Scheduling areas.

4 Description

A brief description of what the schedule refers to and how it will be used.

5 Enable/Close Check-in

The times check-in will start (before the scheduled time) and end (after the scheduled time). If your _Close Check-in_ time extends beyond the length of your service (based on the service's scheduled Duration), check-in will close when the service ends. In other words, if your service is one hour long then check-in will close after one hour even if your _Close Check-in_ is set to more than 60 minutes.

6 Edit Schedule

Click to edit the start date and time, event duration, and recurrence pattern.

7 Inactivate Schedule When Complete

You'll probably leave this unchecked for your service times, but you might use it for event schedules. Checking this box will automatically set the schedule to Inactive if the schedule has no more occurrences.

8 Show Publicly

Setting this allows you to filter out schedules that are not public-facing.

1.  Configure your weekend service schedules at Admin Tools > Check-in > Schedules.
2.  Modify, and if needed, add additional services times to the Service Times category. If you have multiple campuses with different service times, add each unique start time to this list. If two campuses share the same start time, you should only add it once. Our suggestion is to put _all_ campus weekend service times in this one category, Service Times.
3.  Be sure to set the correct check-in start and end times. The built-in example values start check-in 30 minutes before each service begins and end 30 minutes _after the start_. Adjust these values to fit the needs of your organization.
4.  Schedules that overlap will present the person checking in with a choice during that overlap period.
5.  Click Edit Schedule to set the day, time and recurrence settings as pictured below.

Schedule Builder

![Schedule Builder](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/schedule-edit-schedule-builder.png)

[](#takingexception)Taking Exception
====================================

Of course, there will be times when your regularly-scheduled programming is interrupted by special events or holidays. For example, let's say there are no Saturday services on Easter weekend. You can tell Rock to ignore your regular schedule for that date. This is called an exclusion, and there are two ways to set it up. Let's check them out.

The first way to set up an exclusion is at the schedule parent category level in the main _Schedules_ page, found at Admin Tools > Check-In > Schedules. This is an easy way to inactivate all schedules in a category for specific date ranges. In the tree navigation, select the parent category for which you want to create an exclusion, such as "Event Schedule" as shown in the screenshot below. Click the to name the exclusion and set the date parameters.

Scheduled Exclusions

![Scheduled Exclusions](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/scheduled-exclusions-v13.png)

The second way to set up an exclusion is at the schedule event (or child) level. From the Schedules page, drill down in the tree navigation to the specific event you want to create an exclusion for. Click the Edit button to display the schedule details for the event, then click Edit Schedule. In the Exclusions section of the Schedule Builder page, click Add Date Range to specify the exclusion parameters as pictured below.

Schedule Builder

![Schedule Builder Exclusion](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/schedule-builder-add-exclusion-v13.png)

[](#locations)Locations
=======================

Next, let’s configure the locations where our children meet.

Location Details

![Location Details](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/location-details-v13.png)

1.  Navigate to Admin Tools > Check-in > Named Locations.
2.  Start by renaming the top-level campus.
3.  Next enter each building on your campus.
4.  Finally, add locations (or modify the existing ones) for each room that will need to be set up for check-in.

[](#areasandgroups)Areas and Groups
===================================

Rock comes with several pre-configured check-in types. Most organizations should be able to simply tweak what is already there using the following steps.

Start by navigating to the check-in configuration screen at Admin Tools > Check-in > Check-in Configuration and then select _Weekly Service Check-in_. You'll see the sample configuration for check-in. Note that area headings are blue, with their associated groups indented below in green. If your structure is vastly different, you may want to check with other Rock organizations to ensure that you're on the right track.

Check-in Configuration (Area)

![Check-in Configuration (Area)](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-area-configuration-v13.png)

1 Inherit From

This setting determines what options you have available in your check-in group configuration as described below. For instance, if you want to check in children by their grade then you would want to select _Check in by Grade_. For more details on how Rock handles grades and promotion from one grade to the next, see our [Person and Family Field Guide](https://community.rockrms.com/documentation/bookcontent/5#grade).

2 Check-in Rule

This setting relates to the check-in groups within this area. Selecting _None_ means the person won't be added to a group and doesn't need to belong to a group in order to check in. If _Add On Check In_ is selected, the person will be added to the check-in group when they check in. If _Already Belongs_ is selected, the person must already be a member of the group or they will not be allowed to check in.

3 Print To

Here you'll select whether check-in labels should be printed to the _Device Printer_ or the _Location Printer_. You can set printers for either Devices or Locations under Admin Tools > Check-in > Named Locations and Admin Tools > Check-in > Devices.

4 Location Selection Strategy

Select how you want locations (typically rooms) to be filled during check-in. There are three options to select from:

1.  **Ask:** This is the default setting. The person checking in will be asked which location to check in to.
2.  **Load Balance:** This will automatically pick the check-in location according to how many people are already checked in to each available location. This helps ensure each location has roughly the same number of people.
3.  **Fill In Order:** The first location configured in the check-in group will be filled before the next location starts having people added to it.

The Location Selection Strategy options are only available when the _Inherit from_ setting is either Check in by Ability Level, Check in by Age or Check in by Grade. The order of the locations matters, particularly if you have multiple campuses. If you have multiple campuses in your location list, group the locations by campus. For instance, you would list the second campus's locations second, then the third campus's locations third, etc.

5 Check-in Labels

Select which labels you want to print for the groups in these areas. More information on configuring labels can be found below in the [All About Labels](#allaboutlabels) chapter. The [Settings](#settings) section below also talks about some label configuration options within the _Check-in Configuration_.

No Labels
=========

If for some reason you do not want labels, just delete them from the Area. It's that simple.

Once you have your areas configured, move down to the groups under each area. You'll notice that groups have a green top border. Under each area, configure the groups that are needed for your organization.

Check-in Configuration (Group)

![Check-in Configuration (Group)](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-group-configuration-v13.png)

1 Age Range

These are the ages of the people who should be allowed to check in to a group.  
  
When a person checks in, Rock reads the age in their profile and compares it to the group's configured age range. For the first number in the range, Rock looks for a "greater than or equal to" condition. For the second number in the range, Rock looks for ages "less than or equal to" numbers _starting with_ the second number. So, a child of age 3.9 would still match your "0 to 3" age group, since their age starts with a number less than or equal to the upper range you've configured ("3").  
  
You can get creative with decimals if you want to be really specific, such as specifying half ages. For instance, one group configured with ages 2 to 2.4 and another group configured with ages 2.5 to 2.9 would put children who've already had their second birthday, but who are not yet 2 1/2 into the first group, and children older than that but who are not yet 3 into the second group.

2 Birthdate Range

This is very similar to the _Age Range_ setting and will only allow check-in if the person's birthday falls within this range.

3 Gender

Groups may be configured by gender. If a gender is selected, only individuals of that gender will be able to check in to the group.

4 Ability Level

Depending on your check-in Area settings, you may see _Grade Range_ here instead of _Ability Level_. Depending on your configuration, the person checking in will either need to be at the selected _Ability Level_ or must be in the selected Grade.

5 Locations

Select all of the locations where this group will meet. For multi-site organizations, you can use a single group to cover all campuses by adding the appropriate locations for each campus.

[](#settings)Settings
=====================

There are several settings that can be configured for the check-in type that control the behavior of check-in. While the default values are probably sufficient for most installations, you can change any of them to suit your particular needs. These are updated by selecting the Edit button on the Check-in Type. You get there from Admin Tools > Check-In > Check-in Configuration.

Editing Individual Settings

![Editing Settings](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-settings-v14.png)

1 Name/Description

Be sure to add a detailed description. Your future self will thank you.

2 Icon CSS Class

You can set or change the icon associated with this check-in configuration.

3 Check-in Type

This is where you select Individual vs. Family. As described in the sections [above,](#individualandfamilycheckininrock) this controls the screen flow when a family checks in. Using the Family check-in type allows a family to check-in multiple family members at one time.

4 Prevent Inactive People

Select this option if you do not want people who have an inactive record status to be able to check in. This area of the screen will have additional fields if the Check-in Type is Family (see next screenshot below).

5 Enable Check-out

Here you can select if check-out should be allowed on the kiosk, or in [Check-in Manager](#checkinmanager), or in both places. If neither of these are selected, then check-out is disabled entirely.

6 Enable Presence

The _Presence_ feature allows staff or volunteers to mark a person as 'present'. This is the next step after being checked in and indicates that the person has physically arrived at the room or location. This is a great way to identify how many people are actually taking up a seat, as opposed to people who are checked in but not in the room.

7 Enable Manager Option

By default, the Welcome screen in check-in displays a gear that can be used by a manager to close/open rooms, override age limits, etc. If you don't want this to be available, unselect this option.

8 Enable Override

If the manager option is enabled, you can still turn off the ability to override age and grade constraints by unselecting this option.

9 Achievement Types

This is where you can add one or more achievement types to be used for check-in celebrations. Each achievement type you add will trigger a celebration if the check-in results in the achievement being earned. See the [Check-in Celebrations](#checkincelebrations) chapter below for details.

10 Security Code Length

When Rock creates new security codes for labels, it will create the codes using the number of characters you specify in these fields. It will show the alpha-numeric characters first, then alpha characters, and then numeric characters. Typically, you would configure just alpha-numeric characters or a combination of alpha and numeric (typically, you wouldn't use all three). We would recommend using codes that contain at least three characters, as you would be limiting the number of available codes with anything less than that. A three character alpha-numeric provides a total of 13,744 codes to assign in one day, so larger churches who may be expecting to check in more people than that should use at least four characters.

11 Random Numeric Values

When using numeric values as part of the security code, should those numbers be randomly generated? If not, they will be generated in numeric order starting with "1" every day.

12 Search Type

Select how you'd like your families to search for their family (Phone Number, Name, Name & Phone, or Family Id). Remember, using anything besides Phone Number will require that a keyboard is available at each check-in kiosk. Also keep in mind that barcode scanning, RFID check-in and any other keyboard wedge technology is ready to use from the Welcome screen regardless of which option you choose here.

13 Maximum Number of Results

When searching for a family, this is the maximum number of families that will be returned.

14 Minimum Phone Number Length

Individuals will be required to enter this many digits of their phone number before being able to search.

15 Maximum Phone Number Length

Individuals won't be able to enter any more than this number of digits when searching.

16 Phone Search Type

When searching for families with a matching phone number, you can elect for Rock to search for phone numbers that end with the digits that were entered, or search for any phone numbers that contain those digits (anywhere in the number). The best choice probably depends on the size of your database. If you are a large organization with tens of thousands of phone numbers, you probably want to use the "ends with" option. This will require that your families know they need to enter the last digits of their phone number.

17 Header Text

This is an advanced setting that will give you control of the Heading text for nearly every step of the check-in process.

18 Display Settings

This is an advanced setting that will give you control of the output on certain steps of the check-in process.

19 Registration Settings

This is an advanced setting that is explained in the [Check-in Registration](#checkinregistration) section.

20 Regular Expression Filter

This is an advanced setting that can be used to remove any special characters from the search string before using it to search the database. This would only be needed if your kiosks have a keyboard that can be used to enter special characters.

21 Refresh Interval

The frequency (in seconds) that the kiosks should check for any updated configurations (i.e., closing a room).

22 Age is Required

If a family member doesn't have a birthdate entered in Rock (i.e., age) should they still be able to check-in to group types and groups that have an age restriction?

23 Grade is Required

If a family member doesn't have a graduation date (i.e., grade) should they still be able to check in to group types and groups that have a grade restriction? For more details on how Rock handles grades and promotion from one grade to the next, see our [Person and Family Field Guide](https://community.rockrms.com/documentation/bookcontent/5#grade).

24 Ability Level Determination

This controls whether or not the Ability Level Selection should be shown during check-in. You would set this to _Don't Ask_ if you don't want parents to select the ability level for their child because you have an outside/external system in place to gather that information. Choosing _Don't Ask If There Is No Ability Level_ will allow a person with a set ability level the opportunity to update it, while a person without an ability level set will not be asked to select one.

25 Display Location Count

When the Location Selection screen is displayed for families to choose a location to check a family member into, should that location listing display the current count of people already checked into that location?

The General Settings have a few extra options if the _Check-In Type_ is set to Family. Below we have descriptions for those settings that only apply if you are using the Family Check-In type.

Editing Family Settings

![Family Settings](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/check-in-extra-family-settings-v14.png)

1 Auto Select Days Back

This is the number of days back that Rock will look for a previous check-in when deciding whether a family member should be selected by default when using the Family check-in type.

2 Auto Select Options

You can choose to auto select people only, or people and the location they are being checked into, based on their previous check-in data. See the [Auto Check-In](#autocheckin) section below for more details.

3 Use Same Service Options

When using the Family check-in type, people will be asked to select the area, group and location for each person and each service time they selected. If you would like families to only have to select these options once for each person (i.e., not for each service), select this option. When selected, Rock will automatically select the same area, group, and location for the other service times assuming the same options are available.

4 Prevent Inactive People

Select this option if you do not want people who have an inactive record status to be able to check in.

5 Prevent Duplicate Check-in

Selecting this option will result in people not being allowed to check in during a particular service time if they have already checked into any group/location already for that same time.

[](#check-in-display-settings)Check-in Display Settings
-------------------------------------------------------

You can also control the content of the start page, the family select list results, the person select list results, and what is shown when someone successfully checks in. Four different templates are inside the _Display Settings_ section when editing a check-in configuration. Typically, you won't need to make changes to these templates.

Display Settings

![Display Settings](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/check-in-display-settings-v13.png)

1 Hide Photos

If you've selected a _Check-in Type_ of Family, you'll see this option to hide the family member photos that are shown after a family is selected.

2 Start Template

This template controls the appearance of the Start button that's shown on the first screen of check-in. If enabled, this template also controls the barcode button on the start screen.

3 Family Select Template

You can modify this template to change how the list of families appears after a search has been performed. By default, the name of the family and the names of the family members are displayed.

4 Person Select Template

After a family has been selected, you're provided with a list of individuals. You can add a template here to append additional information to each individual in the list. In the example pictured above we've added a birthday note that will appear if the person's birthday is within the next week.

5 Success Template Display Mode

By default, the final screen of the check-in process displays the names of the people who were checked in, along with the location and times they were checked in to. That's what you'll see if _None_ is selected here. However, you can choose to _Replace_ that information with a template of your own. Or, you can add additional information to the screen by selecting _Append_ and creating a template that will be shown in addition to the default check-in success information.

[](#locationschedules)Location Schedules
========================================

Now that we have many of the details covered, we can schedule the locations and their availability. This allows you to configure check-in to only allow certain rooms to be used at specific times. We'll do this from the Schedule Builder.

1.  First head to Admin Tools > Check-in > Check-in Configuration.
2.  Select the Schedule button in the lower right corner of the check-in configuration screen.
3.  Now you'll see a large grid. Each combination of location/group will have a row, while each possible schedule time will have a column. To make configuration easier, you may wish to filter the locations by a specific campus or building, and/or schedules to a specific schedule category.
4.  Check the check box for each schedule time when you wish to allow check-in for the specific location/group.
5.  Don’t forget to click the Save button at the bottom of the screen.

[](#allaboutlabels)All About Labels
===================================

Out-of-the-box, Rock comes with a standard set of labels for use with check-in. There are two different types of labels: plain-text and icon-based. The icon-based labels, while more attractive, require that you install a specific font on each of your printers. This really isn’t hard (we walk you through it below), but some organizations may want to keep it simple and stick with the plain-text labels. Each of these labels is discussed below, with some notes on their usage.

| Label Description | Sample |
| --- | --- |
| **Child Label (Plain Text):** This is the label that will be placed on the child. This is a plain-text version that does not require installing the rockcheckin.ttf font on each printer. | ![Child Label Plain-Text](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/label-child-text.png) |
| **Child Label (Icons):** This is an icon version of the child check-in label. | ![Child Label](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/label-child.png) |
| **Note Label:** This label highlights any allergy or legal notes as well as providing a place for writing custom notes. | ![Note Label](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/label-notes.png) |
| **Parent Label:** This is the label that will be handed to the parents at check-in to be used as a token for checking the child out. | ![Parents Label](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/label-parents.png) |
| **Name Tag:** This label can be used as a name tag for volunteer or event check-in. | ![Name Tag](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/label-name-tag.png) |

A Note On First Visit
=====================

The first visit check-in icon will display if it's the child's first time checking into a group of any type (they've never checked into any group before). The flag does not look at the 'First Visit' person attribute, instead it solely uses group attendance data.

[](#labelsettings)Label Settings
================================

There are a few things you can configure for labels. The default values are probably sufficient for most installations, but you can change any of them to suit your particular needs. You get there from Admin Tools > Check-In > Check-in Labels and then select the label you would like to edit.

Edit Check-in Label

![Edit Check-in Label](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/label-settings-v13.png)

1 Name

A unique name for the label.

2 Description

A description of the label.

3 File/Mime Type

This is where you would upload a new label file. The [Creating Custom Labels](#creatingcustomlabels) chapter below gives an overview of how to create these files.

4 Merge Codes

The merge codes are used to map fields on the label to data retrieved from Rock. Again, the [Creating Custom Labels](#creatingcustomlabels) chapter below describes how to set up merge codes for your labels.

5 Print For Each

When using the Family check-in mode, multiple family members can be checked in at the same time and each family member could be checking into a different location for each service time. Because of this, labels can be configured to print once per family, person or location. A 'Family' label will print once per family, a 'Person' label will print once per person, and a 'Location' label will print once for each location that a person checks into.

6 Edit Label Contents

This button allows you to edit the contents of the label. This is for advanced individuals who are able to edit the label in its native ZPL format. We'll show this editor in the next section. If you're just getting started you may want to use the [ZebraDesigner](#installingzebradesigner) program instead to modify your labels.

7 Reload Merge Fields

Pressing this button will reparse your label, looking for updated merge fields.

[](#labeleditor)Label Editor
============================

The label editor is for advanced users who are able to edit the label in its native ZPL format. If you're just getting started you may want to use the [ZebraDesigner](#installingzebradesigner) program instead to modify your labels.

Label Editor

![Label Editor](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/label-editor-v13.png)

1 Label Contents

The contents editor shows the raw ZPL of your label. If you're comfortable with the ZPL language you can edit the file and save it back to the database.

2 Test Print To Device

This section of the editor allows you to print the label to the selected printer device (if your server is on the same network as your printer). The ability to print a test label helps ensure your changes are working as intended.

3 Label Viewer

The label viewer allows you to see what your label will look like using the Labelary website. Note that this is not an exact representation of how it will print, so do a final print before you're done.

[](#kiosks)Kiosks
=================

Kiosks are the hardware devices used to check-in. Setting up kiosks allows you to specify the check-in configuration for a specific device or set of devices. This is helpful if, for example, you have a set of kiosks in your youth area and only want them used for the services in that area.

The two main configuration points for the kiosk are:

1.  **Locations:** Kiosks are assigned to allow check-in for selected locations.
2.  **Printing:** Kiosks also help manage how and where printing takes place. See the [Printing](#printing) section for more options for label printing.

[](#configuringkiosks)Configuring Kiosks
========================================

You can manage your check-in kiosks under Admin Tools > Check-in > Devices. Keep in mind that Rock supports multiple types of devices. Check-in kiosks are just one type. (Printers are also configured here.)

When the check-in system starts up, it lists the kiosk devices so the attendant can select which kiosk configuration to use.

It's also helpful to know that when you define a check-in kiosk configuration, it can be used on multiple physical machines at the same time. This means that when you define a check-in kiosk for use in your youth building, that definition can be used for each check-in computer or tablet in that area. Think of these configuration definitions as kiosk templates, not physical machines.

Whether you are adding a new kiosk or editing an existing one, you'll use the screen below to manage the configuration.

Kiosk Configuration

![Kiosk Configuration](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/device-setup-with-camera-v13.png)

1 Name

The name is used at check-in startup to select the kiosk device to use for that session.

2 Description

A brief description documents the details of the configuration.

3 IP Address

Provide an IP address here if you want that address to be available for identification purposes. The _Check-In Admin_ block checks for devices configured with the same IP address as the device being used for check-in. If it finds one, it automatically selects that device and all of the group types associated with it. Because this process is automatic, in this scenario the attendant would be taken directly to the _Welcome_ screen, bypassing the _Check-In Admin_ screen. On a related note, the _Enable Kiosk Match By Name_ field in the _Check-In Admin_ block settings searches for devices based on both IP address and hostname when looking for a matching kiosk.

4 Point/Geo-fence

This allows you to define the latitude/longitude and geo-fence of the kiosk device. The geo-fence setting is used by [Mobile Check-in](#mobilecheckin). The latitude/longitude settings will be used to support future applications.

5 Print Settings

These three settings define how printing will work. Be sure to read more in the [Printing](#printing) section.

1.  **Print Using:** Tells the kiosk how to determine which printer to use.
    1.  **Device Printer:** Uses the printer defined in the Printer setting below
    2.  **Location Printer:** Uses the printer defined for the location
    3.  **Group Type:** Uses the print logic defined by the group type
2.  **Printer:** If you selected _Device Printer_ above, you will need to select a printer to print to.
3.  **Print From:** While the previous two settings helped define where to print _to_, this setting determines where to print _from_.
    1.  **Client:** This is the best option, but it assumes that you will be using the iPad application or Windows application. If you are running check-in inside a web browser, you won’t be able to print from the client.
    2.  **Server:** With this option, the printing will be done from the web server. This requires the web server to be on the same network as the printer. If you are hosting Rock on an external webhost, printing from the server will not be an option.

6 Kiosk Type

Select the type of kiosk that will be used for check-in. This will depend on the type of device you're using. Each of the three Kiosk Types support QR code scanning to identify the person, provided the device has a camera. The QR code scanning feature requires using the Aero theme if you're checking in using the Windows App or a browser. Scanning of QR codes generated by [Mobile Check-in](#mobilecheckin) is still limited to iPads only.

7 Has Camera

This option must be enabled to use a device's built-in camera for scanning barcodes or QR codes.

8 Camera Barcode Configuration

Select the camera configuration setting that applies best to how the _Device_ will be used. See the [iPad Application](#ipadapplication) section for a description of each Camera Barcode Configuration option. This setting only applies to iPads.

9 Registration Mode

This setting allows you to turn the kiosk into a volunteer assisted, walk-up registration station where your volunteer can quickly add a person or guest to an existing family. See the chapter on [Check-in Registration](#checkinregistration) below for details.

10 Locations

This setting allows you to define which locations the kiosk is serving. This will limit the location options that are displayed to the guest. For centralized check-in you will want to enable all locations. Since locations are hierarchical in nature (they have parent and child locations), you can select a parent location and all of its children will also be automatically selected.

[](#locations)Locations
=======================

Locations configure where individuals can check in. Think of them like buildings or rooms for your check-in. Locations are tied to check-in groups and enabled through schedules. Let's take a look at an example to see how they work.

Sample Configuration

![Check-in Locations](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-locations.png)

The diagram above shows a configuration for a large church's _Three Year Olds_ check-in group. As you can see, the church has two campuses it calls _North_ and _South_ and each of these campuses has multiple locations (aka, rooms) for their three-year-olds. Based on attendance patterns, all of these rooms are not needed during all services. In this configuration, the _Crickets Room_ is not set up to be used during the second service of the day.

[](#editinglocations)Editing Locations
======================================

Locations are edited under Admin Tools > Check-in > Named Locations. Locations are hierarchical in nature, so build them out to match the structure of your buildings.

Named Locations

![Check-in Locations](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/location-details-v13.png)

[](#schedulinglocations)Scheduling Locations
============================================

Group/Location pairs are matched to schedules at Admin Tools > Check-in > Check-in Configuration (click the Schedule button.)

[](#openingclosinglocations)Opening / Closing Locations
=======================================================

We've seen how you can enable or disable a location based on a schedule. Each location also has an open/closed state. Say for instance you want the _Bears Room_ to be used for your 9:00 am service but need to be able to close it if it reaches capacity. Once it reaches capacity, you can close the room from the [Check-in Manager](#checkinmanager) or the [Device Manager](#devicemanager) (more info on these below) and it will no longer be available as an option for check-in.

Of course, you probably don’t want to keep the room closed forever. If you’ve closed the _Bears Room_ for your 9:00 am service, you’ll want it open again for your 10:30 am service. You can manually open rooms the same way that they were manually closed, or you can configure the [Auto Open Locations](https://community.rockrms.com/documentation/bookcontent/9#jobs) job to reopen them for you automatically at certain intervals.

[](#locationthresholds)Location Thresholds
==========================================

In addition to simply closing rooms manually, you can also configure locations to have threshold limits for the number of people that can be checked into the location at once. These limits are evaluated during check-in and once they are reached, the location will automatically stop being available as an option for people to check into.

1.  **Threshold:** If this number is reached, check-in will not allow people to check into the location unless an attendant overrides the threshold.
2.  **Threshold (Absolute):** Once this number is reached, check-in will absolutely not allow people to check in to the location at all, ever… even if an attendant attempts to override the threshold.

[](#printing)Printing
=====================

As we mentioned in the Welcome section, Rock's check-in is very flexible. This is especially true when it comes to printing. What printer you print to and where the printing takes place (client or server) is completely customizable. While this is very powerful, it can be a bit confusing. To help get you started, we have outlined a simple approach that should work for most organizations. We'll also dive a little deeper for those who want more options.

[](#asimpleapproachtoprinting)A Simple Approach to Printing
===========================================================

The recommended approach to printing is to always print from the client using the printer defined on the client. While this is a simple approach, it should meet the needs of most organizations.

*   We recommend that you use either the iPad or Windows client application for running check-in.
*   On your check-in kiosk device configuration set the _Print Using_ setting to _Device_, leave the _Printer_ setting blank and choose _Client_ for the _Print From_ setting. See the [Kiosks](#kiosks) chapter for more on these settings.
*   Configure the iPad/Windows application to print to a specific printer.

[](#divingdeeperintoprinting)Diving Deeper Into Printing
========================================================

Ok, so the simple approach doesn't work. Never fear, we have many more options for you. When we break down the printing process, there are two bits of information that need to be determined: where to print and how to print. Let's look at each in detail.

Where to Print
--------------

The flowchart below breaks down the logic of how Rock determines where to print the check-in labels.

Determining Where To Print

![Printing Diagram](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/print-location-logic.png)

1Override

If using the iPad or Windows application, you can set a printer override that diverts all printing to the printer you define on the client.

2Devices

If the kiosk device’s _Print Using_ is set to _Device Printer_, the printer defined by the kiosk device will be used. These settings can be found under Admin Tools > Check-in > Devices.

3Location

If the _Print Using_ is set to _Location_, then the printer defined by the group's location will be used. The location's printer is defined under Admin Tools > Check-in > Named Locations.

4Group Type

Finally, if the _Print Using_ is set to _Group Type_, then the _Print Using_ setting of the Group Type will be considered. This setting can be configured to get the print device from the Location or the Kiosk Device. This is set under Admin Tools > General Settings > Group Types.

Quick Shortcut
==============

This may seem a bit complex. You might be wondering why all this is needed. If you want to get creative, these features will allow you to customize label printing so that some groups print at the device and other groups print inside the actual room. Remember to keep it simple. You can define the printer on the kiosk and forget the chart above. It'll be there when you need it.

How to Print
------------

Determining _how_ to print is much easier than figuring out _where_ to print. You can print either from the server or the client. This is determined on the kiosk configuration under Admin Tools > Check-in > Devices. But wait, there are a couple of considerations for each of these options:

*   **Client:** To be able to print from the client you must use either the iPad or Windows applications. This is the method you will use when your Rock server is hosted externally.
*   **Server:** To print from the server you must be sure that the server is on the same network as the printers (or more accurately, the server must be able to route IP to the printers). If you are hosting Rock externally, you won’t be able to print from the server unless you do something crazy like a VPN between your hosted server and local printers. And you're not crazy.

Label Size?
===========

Before you get too far into printing labels, we should probably mention that the _size_ of the default labels that ship with Rock is 4 x 2 inches. If you plan on using the built-in labels, this is the size you should purchase.  
  
You can of course create your own labels to work on any size stock you choose (as often happens when switching from another system and you already have a bunch of, say, 3 x 2 stock) but more about that in the [Creating Custom Labels](#creatingcustomlabels) section.

[](#reprinting)Reprinting
=========================

We've all worked with that one volunteer or staff member whose ability to tear off the labels from the printer might not be, shall we say, their calling in life. Okay, maybe it's you…so you have a torn name tag, and we can come up with many reasons why that is an issue. Possibly you can't read a child's name, or the security pick up code is not legible. Either way, you need a solution, and we have just the thing. That's right: label reprinting.

There are two ways to reprint labels. One is through the check-in kiosk device manager (accessed by clicking the gear on the check-in Welcome page), and the other is in Check-in Manager. We will walk through both and how to enable this option.

Restrictions on Reprinting
==========================

Due to web browser restrictions, Check-in Manager reprinting only works with server printing, while Kiosk Device reprinting works with either server or device printing. Reprinting is not available for mobile check-ins.

Check-In Kiosk Device Manager
-----------------------------

The very first thing you'll want to do is ensure _Allow Label Reprinting_ is enabled, through a block setting on the internal page in Rock. Go to CMS Configuration > Pages > Check-In | Welcome and edit the block settings on the Welcome block to enable or disable reprinting. It should be enabled by default, but you won't get very far if it's been disabled so it's a good idea to confirm.

Enable Reprinting

![Reprint Block Setting](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/welcome-page-block-settings-enable-reprinting.png)

After logging into the Check-In Kiosk Device Manager with a PIN, you'll see a _Reprint Labels_ button.

Device Manager Screen

![Reprint Manager Screen](https://rockrms.blob.core.windows.net/documentation/Books/10/1.9.0/images/Check-inDeviceManager_1.png)

Clicking on _Reprint Labels_ takes you to the Check-In screen to type in the person's name or their phone number.

Search

![Search](https://rockrms.blob.core.windows.net/documentation/Books/10/1.9.0/images/Check-inDeviceManager_2_alt.png)

In some cases, you might get more than one result. Simply click on the desired name to reprint. On the next screen, choose which tags to reprint.

Choose Person

![Search](https://rockrms.blob.core.windows.net/documentation/Books/10/1.9.0/images/Check-inDeviceManager_3.png)

Multiple Services
=================

If someone is checked into more than one service, say the 4:30 and 6:00 Saturday service, and a reprint is performed, it will print out two of each tag. This is because Rock has no way of knowing if there is something different between the two service labels.

Tags

![Search](https://rockrms.blob.core.windows.net/documentation/Books/10/1.9.0/images/Check-inDeviceManager_4.png)

After selecting the labels to reprint, hit the _Print_ button and the confirmation screen will appear indicating that the labels have been printed.

Check out the [Device Manager](#devicemanager) section of this guide for additional kiosk device manager information.

Check-In Manager
----------------

Now let's take a look at using Rock's convenient and oh-so-mobile-friendly Check-in Manager option.

Reprinting is not enabled by default for the Check-In Manager. You'll need to enable _Allow Label Reprinting_ from the Check-In Manager Person Profile page, Person Profile block setting, located at CMS Configuration > Pages > Check-in Manager > Person Profile. After enabling, you'll see a reprint button on the Check-In Manager person profile screen.

Person Profile Block Setting

![Person Profile Block Setting](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-manager-person-profile-reprint-block-setting-v12.png)

With the above setting enabled, you'll now see the reprint button on the person profile as shown below.

Check-In Manager Person Profile Page

![Check-In Manager Person Profile Page](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-manager-person-profile-reprint-button-v12.png)

When you click the button to reprint, a secondary window will display asking which labels you'd like to reprint, and to which printer to send the new tag. If you're using the check-in app with the configuration pointing to the `/checkinmanager` it will give you an option to print to a "local printer" (that is a printer that is defined in the check-in wrapper application).

Choose Labels to Reprint

![Choose Labels to Reprint](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-manager-reprint-labels-modal-v12.png)

After hitting the _Print_ button, you will be redirected back to the person's profile with a confirmation message.

Reprint Success

![Reprint Success](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-manager-reprint-labels-success-v12.png)

Check out the [Check-in Manager](#check-in_manager) section of this guide for additional Check-in Manager information.

[](#labelcutting)Label Cutting
==============================

You can easily configure your cutter-enabled label printer to automatically cut at the end of the set of labels. So, if there are a set of three kids checking in, it will automatically cut once after all labels for each child have been printed. As you’ll see later, you can take this to the next level and control cutting to a great extent.

Printers with Cutters
=====================

If you’re in the market for a label printer with a cutter, see the [Printers](#printers) chapter below for some models we recommend.

Enabling automatic cutting is easy. All you have to do is let Rock know that your printer has a cutter. There are different ways to configure this depending on what you use for check-in. Automatic cutting works with the latest versions of the iPad and Windows Client apps and can also be used with server-side printing.

If you’re using the Windows app, simply enable the _Printer Has Cutter_ option in the app settings.

Enable Windows Label Cutting

![Enable Windows Label Cutting](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/windows-app-settings-cut-v11.png)

For the iPad application, you’ll need _Enable Label Cutting_ turned on. To do this, go to _Settings_ on your iPad and access the _Rock Check-in_ application settings.

Enable iPad Label Cutting

![Enable iPad Label Cutting](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/ipad-app-settings-with-cutting-v11.png)

If you’re set up for server-side printing, you’ll use the _Has Cutter_ option in the Check-in Device configuration. In Rock, navigate to Admin Tools > Check-in > Devices and select your label printing Device.

Enable Server Side Label Cutting

![Enable Server Side Label Cutting](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/device-settings-has-cutter-v13.png)

With the above in place, the cut will occur automatically at the very end of the last label in the entire set. However, there’s an additional feature that lets you add a cut command anywhere within the set.

Advanced Cutting
----------------

Cutting at the end of each set of labels is often all you want, but if you want to get fancy Rock enables you to determine exactly when to cut a set of labels. Let’s say that you print three labels per child. Two of these labels are used by the childcare worker and one is the pick-up receipt for the parent. You may want to print two labels, cut, then print the final label and cut once more.

By adding `^FX ROCK_CUT` somewhere before the last line in a label’s contents, Rock will perform a cut after that label. The cut you add will be in addition to the automatic cut that always happens at the end of the set.

Add Cut After Label

![Add Cut After Label](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/edit-label-rock-cut-v13.png)

[](#allergiesandlegalnotes)Allergies and Legal Notes
====================================================

Watching over someone else's child is a big responsibility and knowing specific details about a child's allergies or legal situations is especially important. Rock lets you easily store these details in a child's record and have them displayed at check-in. Here's how.

[](#settingallergyandlegalnotes)Setting Allergy and Legal Notes
===============================================================

To set an allergy or legal note on a child's record, first bring up their _Person Profile_ page in Rock and click on the _Extended Attributes_ tab. There you will see a section of attributes labeled _Childhood Information_. Click the icon to edit the values for allergies and legal attributes.

Note To Self
============

The text you enter for these attributes will print on the child's note label (see below), so keep the message short and appropriate for volunteers to view. If you get carried away, Rock will automatically truncate it to a reasonable length when printed.

[](#viewingnotesatcheckin)Viewing Notes at Check-In
===================================================

The notes you enter above will be printed at check-in in two ways.

On the _Child Label_ you'll see a notation that the child has an allergy or legal note in the system. Depending on the label used, the notation will be in the form of a letter ("A" for Allergy or "L" for Legal) or an icon. This label will be worn by the child and does not show the details of the allergy or legal note, for privacy reasons.

Child Label

![Child Tag](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/label-child-text.png)

The note label will print the complete note entered above for the benefit of the volunteer assisting with child check-in.

Note Label

![Child Tag](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/label-notes.png)

[](#abilitylevels)Ability Levels
================================

We've already seen that you can filter groups by age ranges and grades. There's one more criterion you can use: ability levels. It's common for infants and preschoolers to stay in certain rooms until they achieve a special milestone activity such as crawling or potty-training. Rock can help you track and select these levels within the check-in process. Let’s see how it works.

Ability Level Walkthrough

![Ability Levels](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/ability-level-v14.png)

1 Initial Level Set

The first time a child who matches the age range of ability levels checks in they will be asked which ability-level they meet.

2 Ability Level Set

When the parent selects the ability level for their child it will be stored in the _Ability Level_ person attribute on their _Person Profile_. Feel free to update their level here if needed in the future.

3 Subsequent Check-Ins

Future check-ins will display their current ability and fade out previous levels. Parents can update the setting at any time. They can even select from the previous levels if needed.

[](#howabilitylevelsarestored)How Ability Levels Are Stored
===========================================================

Ability levels are simply a person attribute that can be used as a filter to select a check-in group. If you go to the _Extended Attributes_ tab of a _Person Profile_ page, you’ll see the _Ability Level_ attribute in the _Childhood Information_ section. This is the attribute that will be considered when filtering groups. Rock comes with three ability levels configured: Infant, Crawling or Walking and Potty-Trained. You saw in the walkthrough above that an individual, or more likely their parents, could update this ability level during each check-in. You can also change the ability level behind the scenes on the _Person Profile_ page.

[](#configuringabilitylevels)Configuring Ability Levels
=======================================================

Not all check-in groups care about ability levels. Once you leave the preschool area, they aren't that useful. (Imagine the responses you'd get if you asked high school students if they were potty-trained!) To enable ability levels, first you need to set your check-in area (the default configuration is _Nursery_) to inherit from _Check-in by Ability Level_ under Admin Tools > Check-in > Check-in Configuration > Areas and Groups. This will tell all the groups in this area that they can define an ability level.

A key to ability levels is that you need to configure groups with overlapping age ranges. A child will only be able to check into the groups whose age criterion she meets, even though the parent will be presented with a list of all ability levels.

Ability Level Area Configuration

![Ability Level Area Configuration](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/ability-level-area-v13.png)

1 Inherit From

Set the group's _Inherit From_ property to _Ability Level_ to enable the check-in for ability levels.

Once an area has been configured to inherit from _Check-in by Ability Level_, you'll see that the groups assigned to that area now have an _Ability Level_ setting. This will be the filter that is used to present options to the individual during check-in.

Ability Level Group Configuration

![Ability Level Group Configuration](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/ability-level-group-v13.png)

1Ability Level

Select the group's ability level.

[](#whenabilitylevelsareshown)When Ability Levels Are Shown
===========================================================

Due to the potential awkwardness of the ability level selection with older children you might be wondering when the selection screen is shown. This screen is only shown when the following criteria are met:

1.  The kiosk is configured to check-in for an area that inherits from _Check-in Ability Levels_.
2.  The individual being checked in matches the age ranges of the groups with ability levels.

[](#addingabilitylevels)Adding Ability Levels
=============================================

Adding additional ability levels is a simple process. But you should refrain from adding too many levels because it can confuse your guests. To edit or add levels simply edit the _Ability Level_ Defined Type Admin Tools > Check-in > Ability Levels.

Note
====

The order of the levels is very important. The order that they are shown in the Defined Type is the order they will be displayed on the check-in screens.

[](#firsttimeregistration)First Time Registration
=================================================

When new people show up for the first time, you'll need to enter them into the system before they can check in. The best way to enter these families is under People > New Family.

New Family

![New Family](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/new-family-v13.png)

If you are using a paper registration card and entering the data into the system, keep in mind you don't need to enter all of the data right away. You only need to enter these six key points to get started:

*   Parents' names
*   Children's names
*   Children's birth dates
*   Children's grades (if in grade school)
*   Phone numbers
*   Allergies and legal notes

You can enter other contact information like addresses and emails later. This really helps speed up the registration process for first time guests.

Important
=========

It's critical that you enter a child's birthdate before the family attempts to check in. Without a birthdate none of the age filters will work. Also, if you've configured your check-in groups to filter on grade, it's highly recommended that you enter those right away. If you don't, it will fall back to using age, but the grade is usually a better (read: narrower) filter.

Self-Service Coming Soon
========================

The _New Family_ screen does not allow you to enter some fields, like allergy/legal notes. This must be done on the _Person Profile_ screen. We hope to add specific _registration_ screens soon to streamline the entry process and even allow a _self-service_ capability. Stay tuned.

[](#familypreregistration)Family Pre-Registration
=================================================

The _Family Pre-Registration_ block can be used by families to pre-register before attending a service for the first time. Registering ahead of time makes the check-in process faster and easier. By default, the _Family Pre-Registration_ block is included in the external site on the Connect page.

Family Pre-Registration Screen

![Family Pre-Registration Screen](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/family-pre-registration-page-v13.png)

You can customize the Family Pre-Registration page by changing the block settings on the external site. There are a lot of settings here, so we're going to break it up into pieces.

Family Pre-Registration Block Settings

![Family Pre-Registration Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/family-pre-registration-block-settings-1-v15.png)

1 Name

Name of the registration block.

2 Show Campus

Select 'Yes' to display the _Campus_ selection field.

3 Default Campus

If the _Campus_ selection field is displayed, you can designate a default campus to be displayed. Alternatively, the campus can be passed to this block (by Id or GUID) using a query string parameter in the URL.

4 Require Campus

This setting simply determines whether a campus must be selected.

5 Campus Type/Status

You can limit which campuses are available for selection with these filters. For instance, you may only want to show 'Physical' campuses that are 'Open'.

6 Campus Schedule Attribute

Here you can provide a campus attribute of type _Schedules_ that can be used to set the _Planned Visit Date_ and _Planned Visit Time_. See the help text for additional information.

7 Planned Visit Date

This field determines how the _Planned Visit Date_ field will be displayed. Select 'Hide', 'Optional' or 'Required'. The Planned Visit Date value is not saved anywhere. It is only used if launching a workflow, or it can be used in the Lava to redirect the guest after they are done completing the screen. (Note: If both the _Campus_ and _Planned Visit Date_ fields are hidden, the entire Visit Information section will not be displayed.)

8 Scheduled Days Ahead

If you're using a schedule configured for the campus, this setting limits how many days ahead the person can select their _Planned Visit Date_. If you're not using a campus schedule, then a date picker will be shown, and this setting does not apply.

9 Family Attributes

Enter any family attributes you want displayed. The attributes will appear to the right of the _Address_ field on the _Family Registration_ screen. Any attributes that are configured as ‘required’ will require the guest to provide a value.

10 Allow Updates

Select 'Yes' if you want the block to automatically assume the guest who is logged in is updating information for their own family. If 'Yes' is selected, when a guest is logged in, the current names of each family member will not be editable. If 'No' is selected, the block will automatically assume a new family is being entered, regardless of whether a guest is logged in or not.

11 Auto Match

Select 'Yes' if you want the block to attempt to find a matching person in Rock when a new adult is being added, rather than creating a new person. Rock will identify a match if one (and only one) person with the same first/last name and email address matches the adult being added. This process is skipped and a new record will be created if the existing record's [Account Protection Profile](https://community.rockrms.com/documentation/bookcontent/5#accountprotectionprofiles) is configured to skip duplicate checking based on your [Security Settings](https://community.rockrms.com/documentation/bookcontent/9#securitysettings).

12 Connection Status

Designate the connection status to use when creating a new person.

13 Record Status

Designate the record status to use when creating a new person.

Family Pre-Registration Block Settings

![Family Pre-Registration Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/family-pre-registration-block-settings-2-v14.png)

1 Workflow Types

Select any optional workflows you want to launch after the guest has entered the information. For any workflows launched, the block will set the entity for the workflow to the family that is being created. It will also try to set any of the following workflow attribute values if they exist on the workflow type:  
  

*   ParentIds: A comma-delimited list of the person IDs for each adult
*   ChildIds: A comma-delimited list of the person IDs for each child
*   PlannedVisitDate: The value entered in the Planned Visit Date field

You can also define a workflow to launch for each parent or each child using the _Parent Workflow_ and _Child Workflow_ fields.

2 Redirect URL

Enter the URL you want to redirect the guest to after they are finished entering the family information. This field supports Lava, and the block will pass the following fields (in addition to common fields):  
  

*   Family: The family that is being created, including adults and children
*   RelatedChildren: A collection of any children that are not included in the primary family
*   ParentIds: A comma-delimited list of the person IDs for each adult
*   ChildIds: A comma-delimited list of the person IDs for each child
*   PlannedVisitDate: The value entered in the Planned Visit Date field

3 Number of Columns

Use this setting to change the look of the form by setting how many columns are available for data entry fields.

4 Planned Visit Information Panel Title

Here you can change the title of the panel that appears at the top of the form, where the person provides their planned visit details.

Family Pre-Registration Block Settings

![Family Pre-Registration Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/family-pre-registration-block-settings-3-v15.png)

1 Adult Fields

The options here determine which fields in the Adult Information section of the _Family Registration_ screen will be displayed. Select options according to your organization’s preferences.

2 First Adult Create Account

In addition to creating a record in Rock, the person can also create their account so they can log in right away. You can make account creation required or optional.

3 Create Account Title

This is simply the title of the area that displays when account creation is shown. This only applies if _First Adult Create Account_ is not set to Hide.

4 Create Account Description

The description you provide here will appear below the _Create Account Title_ configured above. Again, this only applies if _First Adult Create Account_ is not set to Hide.

5 Race

You can choose to collect a person's race, which describes their physical traits and characteristics.

6 Ethnicity

You can also choose to collect a person's ethnicity, which is a cultural identifier.

Family Pre-Registration Block Settings

![Family Pre-Registration Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/family-pre-registration-block-settings-4-v15.png)

1 Child Fields

The fields in this section determine how the fields in the Child section of the _Family Registration_ screen will be displayed. Select options according to your organization’s preferences.

2 Relationship Types

Select the known relationship type roles that should be displayed as an option for each child. The value ‘Child’ will always be included, even if it is not an existing known relationship type.

3 Same Immediate Family Relationships

Select the known relationship type roles that, if selected, should not actually create the relationship, but rather just add the child to the same family as the adults. In most cases, ‘Child’ will be the only value included in this list. Any values included in this list that are not in the Known Relationship Types list will be ignored.

4 Can Check-in Relationship

Select the known relationship type roles that, if selected, should also create an additional ‘Can Check-in’ relationship. This is only necessary if the role that is selected does not have the ‘Allow Check-in’ option.

As you can see, there are several ways to get new people into Rock. You can even turn a kiosk into a volunteer assisted, walk-up registration station to help get people registered. Read more about that in the [Check-in Registration](#checkinregistration) chapter.

[](#checkinregistration)Check-in Registration
=============================================

A check-in kiosk can also be used by a volunteer to register new families or add guests to existing families.

Although the experience is as simple and smooth as can be, it's not intended to be used by your guests. We recommend you pair the kiosk with a friendly volunteer who is good with quick data entry.

On a kiosk with this mode [enabled](#configuringkiosks), after searching for a family you will see new Add Family options whether you find a match...

Select Your Family

![results of searching for a family by name](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-registration-families.png)

...or not.

Select Your Family

![results of searching for a family by number](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-registration-search.png)

To speed up the process, when adding new people you will see only the essential fields -- although you can configure what other optional or required fields (person attributes) you want to capture during these steps. Organizations will typically add additional information not essential to check-in at a later point when there is more time.

Add Person

![adding a new person](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-registration-addperson.png)

[](#editingfamilies)Editing Families
====================================

Did Maddie bring her friend Alex to church with her? No problem. Adding guests of a family is a breeze with the 'Can check in' relationship. Just select the new 'Edit Family' button and add Alex with that relationship.

Edit Family

![editing an existing family](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-registration-editfamily.png)

Adding a Guest

![adding a guest to an existing family](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-registration-addperson-cancheckin.png)

Editing Family Members

![prior to saving existing family changes](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-registration-editfamily-save.png)

We've even enabled some duplicate detection so you're less likely to end up with another Alex Decker in your system.

Select or Edit Family Members

![after saving family changes](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-registration-editfamily-no-duplicates.png)

There are a few things to note regarding duplicate detection. When adding multiple 'guest' adults, if one of them matches a person in Rock, the other new adults (and new children) will be added to that person's matching family. Also note, when a matching person is found, only non-blank field values will update the matching person's record. This will prevent accidentally clearing out a person's allergy or legal notes (for example) in the event that they didn't provide the current/correct values.

[](#addingbarcodesincheckinregistration)Adding Barcodes in Check-In Registration
================================================================================

If your organization uses barcode scanners for rapid check-in, we've also enabled these screens to know where to put the data coming from the scanner. Scanning a barcode on this screen will ensure it will automatically go into the _Alternate ID_ field if you have enabled it (as described in the [Configuration](#checkinregistrationconfiguration) section below).

Barcode Scanning

![after scanning a barcode](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-registration-addperson-alternateid.png)

[](#checkinregistrationconfiguration)Check-in Registration Configuration
========================================================================

These registration features are packed with options. To configure these options, follow these steps:

1.  First, enable a particular device kiosk by setting its [Registration Mode](#configuringkiosks) to 'Yes'.
2.  Then open up the check-in configurator Admin Tools > Check-in > Check-in Configuration.
3.  Select the configuration you want to enable registration for and then Edit.
4.  Change the _Registration Settings_ as needed (see below) and then Save.

Registration Settings

![Check-in Registration Settings](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-registration-settings-v15.png)

1 Default Person Connection Status

This controls which connection status to use when creating new people (children or adults).

2 Display Alternate ID Field for Adults

If checked, a field will be shown on the adult add/edit screen that can store an alternate id (such as a key tag or barcode identifier) for that person. When enabled, scanning a barcode using a reader will capture the code into this field automatically.

3 Display Alternate ID Field for Children

If checked, a field will be shown on the Child add/edit screen that can store an alternate id. When enabled, scanning a barcode using a reader will capture the code into this field automatically.

4 Display SMS Enabled Selection for Phone Number

If you select this option, then a field will appear to indicate that the person's phone number is SMS enabled.

5 Set the SMS Enabled for the phone number by default

If enabled, this setting will automatically set the person's phone number as SMS enabled.

6 Enable Check-in After Registration

This determines if the family can continue to check-in after being registered, or if they should be directed to visit a regular check-in kiosk to check-in. If unchecked, the kiosk will return back to the search mode after data entry.

7 Known Relationship Types

Select the known relationship types that should be displayed as an option for each child. The value ‘Child’ will always be included, even if it is not an existing known relationship type.

8 Same Family Known Relationship Types

Select the known relationship types that, if selected, should not actually create the relationship, but rather just add the child to the same family as the adults. In most cases, 'Child' will be the only value included in this list. Any values included in this list that are not in the Known Relationship Types list are ignored.

9 Can Check-in Known Relationship Types

Select the known relationship types that, if selected, should also create an additional 'Can Check-in' relationship. This is only necessary if the role that is selected does not have the ‘Allow Check-in’ option.

10 New Family Workflow Types

Select any optional workflows you want to launch after a new family is added. For any workflows launched, it will set the Entity for the workflow to the family group that is being created.  
Note: This is only for actual new families and not families that are incidentally created as a result of adding a guest to an existing family.

11 New Person Workflow Types

Select any optional workflows you want to launch after a new individual is added to a family. For any workflows launched, it will set the Entity for the workflow to the person that is being created.

12 Required Attributes for Adults

These are attributes you want to require on the adult records. These attributes will be required regardless of their original configuration on the _Person Attributes_ page.

13 Optional Attributes for Adults

These are attributes you want to show when adding or editing an adult. These attributes will be optional regardless of their original configuration on the _Person Attributes_ page.

14 Required Attributes for Children

These are attributes you want to require on the child records. These attributes will be required regardless of their original configuration on the _Person Attributes_ page.

15 Optional Attributes for Children

These are attributes you want to show when adding or editing a child. These attributes will be optional regardless of their original configuration on the _Person Attributes_ page.

16 Required Attributes for Families

These are family attributes you want to require on the family record. These attributes will be required regardless of their original configuration on the Group Type.

17 Optional Attributes for Families

These are family attributes you want to show when adding or editing a family. These attributes will be optional regardless of their original configuration on the Group Type.

18 Display Birthdate on Adults

Specific to adults, you can choose to _Hide_ the birthdate field, or make it _Optional_ or _Required_. This is set to _Hide_ by default.

19 Display Birthdate on Children

Similar to the Adults field above, here you can choose to _Hide_ the birthdate field, or make it _Optional_ or _Required_ for children. This is set to _Optional_ by default.

20 Display Grade on Children

You can choose to _Hide_ the grade field or make it _Optional_ or _Required_. This is set to _Optional_ by default.

21 Display Race on Adults

You can choose to collect the adult's race, which describes their physical traits and characteristics.

22 Display Ethnicity on Adults

You can also choose to collect the ethnicity of the adults, which is a cultural identifier.

23 Display Race on Children

As with adults, you can optionally choose to display a race selection for children.

24 Display Ethnicity on Children

Similar to the above, ethnicity information for children can be collected.

[](#checkinmanager)Check-In Manager
===================================

It's critical for growing organizations to be able to view check-in data in real-time and react by opening and closing locations in response. Rock provides a check-in management site that gives your staff a dashboard of live check-in data and lets them respond to needs as they occur in real-time.

[](#thephasesofcheckin)The Phases of Check-in
=============================================

The check-in process doesn’t necessarily end when someone finishes checking in. Depending on your [settings](#settings) there are different phases of check-in. A person can be _Checked-in_, _Present_ or _Checked-out_. Later in this chapter you’ll see how this all gets configured and managed within the Check-in Manager. For now, it’s only important to be aware of the different states a person can be in.

Checked-in
----------

When a person finishes the check-in process, they will appear as Checked-in on the roster. What can happen next depends on your configuration.

If you don’t have check-out or presence enabled in your [Check-in configuration settings](#settings) then the other states described below don’t apply. The person will be marked as _Present_ (see below) unless the Check-in Manager is used to _Delete_ their check-in attendance entirely.

Cancel Check-in

![Cancel Check-in](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/check-in-manager-roster-cancel-v14.png)

Delete Attendance
=================

If you look at the security settings for the Roster block, there is a special _Delete Attendance_ security verb. This controls who is able (or not able) to delete attendance as pictured in the screenshot above.

Present
-------

Being checked-in isn’t always the same as being in the room or location. A lot can happen between checking in on your phone from the parking lot and arriving in the intended space. Rock’s _Presence_ feature lets you keep track of who is physically in a seat, making it easy to see how many of your checked-in guests are in the room or not.

To mark someone as present, navigate to the 'Checked In' tab along the top of the roster. A person must be checked in before they can be manually marked as Present in the roster.

Present

![Present](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/check-in-manager-roster-present-v14.png)

From the 'Present' tab of the roster you can check people out individually or, if enabled in the block settings, you can check out all people who are marked present. From the block settings you can also enable the _Staying_ feature, which lets you mark a person as staying for the next service, creating a new attendance record for that person. Lastly, you can update the block settings to add a _Not Present_ button. This reverts a person back to _Checked In_ if, for instance, they were accidentally marked as present but aren't actually in the room.

Attendance Record Cleanup
=========================

When someone checks in, an attendance record is created showing them as having attended. This might not always be true if the person has checked in but has not been marked as _Present_. The Rock Cleanup job has an optional setting to clean up these records. If enabled, the attendance record will still exist, but the person will be marked as not having attended if they were never _Present_. This only applies if _Presence_ is enabled.

Checked-out
-----------

At times, people will need to leave earlier than planned. If _Enable Check-out in Manager_ is enabled in your Check-in Configuration, you can indicate that someone has left the room. The person will still appear in the Roster as Checked-out and the check-in is not removed from their record. For more details, see the [Manual Checkout](#manualcheckout) section.

To check someone out, you'll navigate to the 'Present' tab along the top of the roster. Only people who are Present can be checked out. If _Presence_ is not enabled, then a checked in person is automatically considered as being present.

Checked-out

![Checked-out](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/check-in-manager-roster-checked-out-v14.png)

If enabled in the block's settings, you can also re-mark someone as Present from the 'Checked Out' tab if they have been checked out. Maybe they left the room but decided to come back, or maybe they were checked out by accident.

[](#usingthecheckinmanager)Using the Check-in Manager
=====================================================

The check-in manager can be loaded from the address `http://[your-rock-server]/checkinmanager`.

When you access this screen for the first time, you’ll be prompted to select a campus if you have more than one to choose from. Next, you’ll select a Location near the top-left to see the _Room Roster_ for that Location. Let’s look at what we can do from there.

Mobile Friendly
===============

Check-in Manager was designed with kiosk devices of all sizes in mind. That means the pages might look a little different from the below screenshots if you’re working with a smaller screen. For instance, the Tag and Service Times columns will be combined into a single column at some resolutions. Similarly, you’ll notice icons (e.g., ) instead of words (e.g., ‘Present’) for the check-in states.

Check-in Manager Room Roster

![Check-in Manager Room Roster](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-manager-roster-v14.png)

1 Navigation Panel

Click the three horizontal lines (the icon) to open the navigation panel. From here you can access other areas of the Check-in Manager. We’ll cover those areas in more detail [below](#navigatingcheckinmanager).

2 Back / Campus Selection

At the top of each page is a 'back' button you can use to navigate back to prior pages. Next to the back button is a drop-down to switch between your campuses, to show rosters for rooms at different campuses as applicable.

3 Location Selection

You can select or change the Location here. This will update the Roster being viewed.

4 Schedule Selection

You can select or change the Schedule here. This will update the Roster to show only check-ins for the selected Schedule.

5 Roster / Room Settings

Click here to toggle back and forth between the Roster and the Room Settings views. From the Room Settings view you can Close or Open the selected room.

6 Room Roster

The roster gives you a lot of information about each person, including check-in label codes and their check-in state. You can click on any row in the roster to view additional details about the person (see [below](#checkinmanagerpersonprofile)).

7 Person Information Icons

These give you a visual clue that the person has things like legal notes, allergies or an upcoming birthday. In this example Alex Decker has an allergy you might want to know about, Maddie Lowe has a legal note, and Brian has a star to show this is his first check-in. You can change which attributes are displayed by adjusting the _Check-in Roster Alert Icon Category_ block setting, or by adding attributes to the default _Check-in Manager Roster Attributes_ category. For consistency, any attributes you use on the roster should have an _Icon CSS Class_ and an _Attribute Color_.

8 Room Roster Filter

You’ll only see these buttons if _Enable Check-out in Manager_ and/or _Enable Presence_ are enabled for the Check-in Type. The experience will be slightly different if only one or neither of those settings are enabled.  
  

*   **All:** Shows all the people who have checked in to the selected room. This is the view that is pictured in the screenshot above.
*   **Checked-In:** This will show only people who have checked in, and who have not been Checked-out or marked as Present. This is also where staff will come to mark someone as Present when, for instance, the person physically arrives at the room. This only appears if _Enable Presence_ is enabled for the Check-in Type.
*   **Present:** This view will display only individuals who have been marked as Present. If _Enable Presence_ is disabled for the Check-in Type, then everyone who checks in is automatically considered Present. From here, staff can Check-out individuals who have left the room or are otherwise not considered present if _Enable Check-out in Manager_ is enabled in the Check-in Type configuration.
*   **Checked Out:** Shows all the people who have been checked out from the selected room.

A single person can be checked into the same room for different services. In those cases, you'll see each service listed, and separate states (e.g., 'Present' or 'Checked In') if the person isn't in the same state for both rooms.

Closing a Room
==============

When you close a room using the Check-in Manager it can take several seconds for the room to show closed on the kiosks, depending on the Refresh Interval setting of the current check-in configuration. If your kiosks aren't reacting fast enough to room closures, it could be that you have the Refresh Interval set too high.

Before we move on from the roster, you'll want to take a look at its block settings. These settings can be used to enable a variety of features to align the roster's functions with your check-in processes.

Roster Block Settings

![Roster Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-manager-roster-block-settings-v13.png)

1 Name

The name of the block can be changed if needed. The name is only visible to admins.

2 Person Page

The Check-in Manager has its own _Person Profile_ page (see next section below) that people will be directed to when they click a person's row on the roster. You can use this setting to direct people to a different page instead. Typically, this won't be changed.

3 Show All Areas

This setting references check-in configurations (e.g., Weekly Service Check-in) and not check-in areas (e.g., Elementary Area). If set to _Yes_, then the roster will show check-ins from any configuration. If set to _No_, then the roster will only show check-ins according to the _Check-in Area_ block setting described below.

4 Area Select Page

Like the above setting, this references check-in configurations. If _Show All Areas_ is disabled, and if a check-in area has not been configured or selected, this is the page that the person will be brought to. Typically, this setting will not change.

5 Check-in Area

If _Show All Areas_ is disabled, this is where you can set which check-in configuration the roster should use. Only check-ins from the selected area will be shown on the roster.

6 Enable Group Column

If enabled, then the group and the check-in area the person checked in to will be displayed in a new "Group" column on the roster.

7 Enable Checkout All

If enabled, a Check Out All button will appear on the _Present_ tab of the roster. This will check out everyone who is Present on the roster all at once. This only applies if _Enable Check-out in Manager_ is enabled in the check-in type's configuration.

8 Enable Staying Button

Enabling this will cause a new button (with the icon) to appear on the _Present_ tab of the roster, or the main roster, depending on your check-in configuration. Clicking the button indicates the person is "staying" for another service and will check the person in for the selected service.

9 Enable Not Present Button

This setting only applies if _Enable Presence_ is enabled in your check-in configuration. This will give you a new button (with the icon) on the _Present_ tab of the roster, where you can mark someone who was previously marked Present as no longer being Present.

10 Enable Mark Present

This setting only applies if _Enable Presence_ and _Enable Check-out in Manager_ are enabled. This will give you a button on the _Checked-out_ tab of the roster, where you can mark someone who was checked out as being present again.

11 Check-in Roster Alert Icon Category

Person attributes that belong to the category selected here (default is _Check-in Manager Roster Attributes_) will be shown as icons on the roster. For consistency, any attributes you add to the roster should have an _Icon CSS Class_ and an _Attribute Color_ configured.

[](#checkinmanagerpersonprofile)Check-in Manager Person Profile
===============================================================

There are lots of ways you can get to the _Check-in Manager Person Profile_ page. Whether you arrived here from a _Search_, from the _Room Manager_ or from _Live Metrics_, there’s a lot to see and do on this page.

Check-in Manager Person Profile

![Check-in Manager Person Profile](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-manager-person-profile-v13.png)

1 Person Information

You can see the person's photo and campus to the left, as well as their gender, age and grade along the top of the page.

2 Attendance History

Clicking this icon will take you to a page listing the changes that have been made to the person's check-in attendance data. For instance, you could use this page to track that the person switched rooms or had their attendance deleted.

3 Reprint Labels

You won’t see this button if label reprinting is disabled. Otherwise, you can click here to reprint labels for the person. When you do, you’ll be asked to select which label(s) to print, and which printer should be used. See the [Reprinting](#reprinting) section in this guide for full details. Note that there is a "Reprint Labels" security option on the "Person Recent Attendances" block that allows for finer control over which roles can see the re-print label button.

4 Badge Bar

By accessing the block settings for this page, you can select badges to display on either the left or right side of the bar. In this example we're showing attendance, eRA, baptism, and more that you can't see because they don't apply to Noah. This bar can tell you a lot about a person, quickly and easily.

5 Check-in History

The center of the page tells you just about everything you’d need to know about this person’s check-in history. You can see their _Current_ check-in if one exists, as well as previous check-ins from other services. You might have noticed that _Bobcats Room_ appears as a clickable link in the _Current_ row. Click the link to access the _Room Roster_ for that room. Lastly, you can click the row to view additional details of the check-in or to delete the check-in entirely.

6 Person Attributes

If enabled in the block's settings, you can choose to display person attribute data for a given category. Separate categories can be selected for children and adults. You'll probably want to select the same person attribute category that is used on the _Roster_ page (e.g., _Check-in Manager Roster Attributes_).

7 Family Members

Each family member for the person being viewed is displayed here. Click on any family member to view the Check-in Manager profile for that person. You'll find there are more features for parents, as noted [below](#textingparentsfromcheckinmanager). In this example there isn’t any contact information for the children, but phone numbers and emails for the parents will be displayed on their profile.

In the person profile's block settings, there's an option to _Share Person_. If this feature is enabled, you'll see the share icon () next to the person's name. Clicking the icon will generate a link that can be shared to edit that person's profile. This is great for situations where a room attendant needs to send the individual to a roaming staff person in order to quickly edit the person's record in Rock.

[](#navigatingcheckinmanager)Navigating Check-in Manager
========================================================

As noted above, you can click the icon at the top-left of the page to expand the Check-in Manger’s navigation menu. From here you can search for individuals, view check-in metrics, change Check-in Types or navigate back to the Room Manager described above in the prior section.

Searching for Individuals
-------------------------

Check-in Manager Search

![Check-in Manager Search](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-manager-person-search-v12.png)

As pictured above, you can search for individuals and then select them from the list. In this example we searched for 'Decker', and we were provided with two of the four Decker family members. The adults don't have any check-in data for today so won’t appear in this list even though they're still part of the Decker family.

Clicking on any person’s row within the search results will bring you to that person’s Check-in Manager person profile.

Searching by Code
=================

You can also search for a person by the check-in code assigned to them by the check-in system. To ensure this option is available, check that it's enabled in the Search block's settings. You can then conduct the search in the same way as detailed above, entering the check-in code in the search field rather than the person's name. Remember, check-in codes are only used once per day.

Person Attribute Settings
=========================

Be sure to check out the _Person Profile_ block settings to set the _Child Attribute_ and the _Adult Attribute_ categories to view on each person's check-in profile page. This may be helpful if you offer a snack during class and need to see which type of allergy a child may have. You can link the child attribute category directly with the childhood information on their main profile page.

Live Metrics
------------

The _Live Metrics_ page shows you a lot about who is checked in, where and when they checked in. Let’s take a look at what can be seen here.

At the highest level, pictured below, you can see each of the check-in areas and how many people have checked in to all those areas.

Check-in Manager Live Metrics - Areas

![Check-in Manager Live Metrics - Areas](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-manager-live-metrics-areas-v15.png)

Clicking on any area will show you the groups, and then rooms, under that area. At each stage, the metrics pictured above will change to reflect your selection. In the screenshot above, you can see '3' people are in the test area we’re using. If there was a capacity set for this room, it would appear as it does for the Nursery/Preschool Area and High School Area.

Filled Spots and Shared Locations
=================================

The totals you see in the screenshot above are the rolled-up values from the areas and groups beneath. Depending on how your locations are shared across areas, these numbers may be confusing as you drill down, because the numbers of checked-in people may not appear to roll-up. That's because some people will be in the same location, but from a different area.

Let’s take a close look below at the page after we’ve navigated all the way down from the areas to the individual room level.

Check-in Manager Live Metrics - Rooms

![Check-in Manager Live Metrics - Rooms](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-manager-live-metrics-room-v12.png)

1 Check-in Graph

The graph at the top of the page shows you when people have checked in for the area, group or room being viewed. In this case we’re looking at the Bobcats room, so the graph shows when this set of people checked in.

2 Check-in Counts

Here you can see counts of how many people are Checked-In, Present or Checked-Out. Like the graph, these numbers will change if you are looking at a different room or check-in area.

3 Location Selection

The example pictured above shows us information for the Bobcats room. You can click here to navigate up in your check-in structure, to see metrics for a different room, or an entire group or area.

4 Person Listing

At the room level we can see individual people with check-ins for that room. Clicking on any of the rows will bring you to that [person’s profile](#checkinmanagerpersonprofile).

Room List
---------

The _Room List_ is a great resource for seeing all of your rooms and their statuses at a glance. From here you can see the counts of how many people are checked in/present/checked out for each room. Clicking on any room will bring you to the roster for that room.

Check-in Manager - Room List

![Check-in Manager - Room List](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-manager-room-list-v12.png)

En Route
--------

The _En Route_ page shows a list of people who are Checked In but not yet marked as Present. There are a few things to see and do on this page, as described below.

Check-in Manager - En Route

![Check-in Manager - En Route](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-manager-en-route-v12.png)

1 Filters

You can filter the list of people by groups, schedules or names. Options for these filters can be found in the block's settings.

2 En Route List

By default, this will be the list of people who have checked in and are not Present. This block can also be used to show people who are Present or Checked Out by changing the block's settings.

3 Move Person

Clicking this button opens a modal that allows you to change the check-in for the person to another schedule, location or group. If the person is checked in to multiple services, you'll select which one to move.

Settings
--------

Lastly, you can select a different Check-in Configuration to view from the Settings menu. So far, in the screenshots above, we’ve just been working with the default 'Weekly Service Check-in' configuration.

Check-in Manager - Settings

![Check-in Manager - Settings](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-manager-settings-v12.png)

[](#textingparentsfromcheckinmanager)Texting Parents from Check-in Manager
==========================================================================

We've all been there—there's always that poor child in the nursery that just really _really_ needs Mom or Dad. It's easy enough, using Check-in Manager, for a volunteer to look up the parents' information, but then what? Do they have to use their personal cell phone to text them? Well, not anymore.

The Person Profile block has a setting that lets you specify a Twilio number to send texts from. Once that's configured, your volunteers who have access to Check-in Manager will have a text input box they can use to send the parent a message. Easy!

Texting from Check-in Manager

![Texting from Check-in Manager](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-manager-SMS-from-profile-v12.png)

To access the messaging feature, click the SMS icon next to a person’s phone number when you’re looking at their profile. As pictured above, this will open up a text box where you can type your SMS message and hit Send to contact the person.

Here's what you need to make sure Rock is set up in order for that box to show up:

*   The SMS Communication Medium needs to be enabled and configured with an enabled SMS Transport (see [SMS: Twilio](https://community.rockrms.com/documentation/bookcontent/8#smstwilio) in the Communicating with Rock manual).
  
*   As noted in the above link, you need to add at least one _SMS From Value_ to your _Defined Values_
  
*   You need to select the SMS number which will be used to send messages from Check-in Manager. To do this, go to `[yourrockserver].com/checkinmanager` and search for someone in your database. Click on their row to load the Check-In Manager Person Profile (the page in the above screenshot). The block settings for the block on this page include a _Send SMS From_ setting where you can choose one of your SMS numbers. Select one and click "Save".
  
*   Finally, the person whose profile you're viewing needs to have a phone number with SMS enabled. If they don't, you'll see their phone numbers listed and linked for calling, but you won't see the option to send them an SMS message.

Check-In Manager Profile Block Settings

![Check-In Manager Profile Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-manager-person-profile-SMS-block-setting-v12.png)

[](#devicemanager)Device Manager
================================

While you can manage many aspects of a kiosk device from the _Check-in Manager_ you can also manage the device from the actual kiosk. Below we'll discuss the various capabilities of these features.

[](#loggingin)Logging In
========================

To access the Device Kiosk simply press the gear icon at the bottom right of the main check-in screen. This will bring up the screen below.

Device Manager Authentication

![](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/devicemanager-auth.png)

From this screen you can get a quick view of the counts for rooms configured to this kiosk. You can also enter your PIN to access the device manager.

Setting a PIN
=============

To set a PIN for a person, go to the _Security_ tab on the person's Profile and add a new User Account. Choose _PIN Authentication_ for the Authentication Provider, and enter the desired PIN as the User Name.

[](#devicemanager)Device Manager
================================

Once you're in the device manager you will see the screen below. This screen allows you to open/close rooms that have been configured for this kiosk. It also allows you to _Override_ a child. This simply means that you can check-in a child to a room without considering the room's age or grade ranges. When you select the _Override_ button you will see the standard _Search_ screen. Everything will operate the same, but the room's configured age and grade ranges will be ignored.

Device Manager

![](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/devicemanager-main.png)

[](#schedulelocations)Schedule Locations
========================================

From the main screen above you can also choose the _Schedule Locations_ button. This screen allows you to alter the room schedules. This is normally done in the Rock Admin screens (Admin Tools > Check-in > Check-in Configuration > Schedule) but you can also enable/disable the schedules for the kiosk's configured rooms here too.

Device Manager Schedules

![](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/devicemanager-schedules.png)

[](#attendanceanalytics)Attendance Analytics
============================================

While there are a number of ways to access attendance data using Data Views and SQL reports, Rock also provides powerful analytics capabilities that you can access from Tools > Reporting > Attendance Analytics. This powerful tool should be able to answer any question you throw at it. Let's see what's possible.

This block operates in two modes: _Chart_ and _Attendees_.

[](#chartmode)Chart Mode
========================

When in chart mode, the analytics block will report back the count of the attendees who match the criteria you've provided. This is great when you're looking for numbers for a specific weekend or viewing attendance over time.

Chart Mode

![](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-analytics-chart-v13.png)

1 **Attendance Area**

The first step is to select the kind of attendance that you'd like to report. Most often you'll probably be interested in check-in data, so select _Weekly Service Check-in_.

2 **Date Range**

The most important criterion you will provide is the date range. This date range picker is very powerful and allows you to select many different types of date ranges. To help reduce confusion, the label above it shows the exact dates that are currently being used for the filter.

3 **Group By Setting**

This determines how the attendance data should be grouped for the graph. Typically, this will be by week, but you may want to get a monthly or yearly graph too.

4 **Schedules**

Use this dropdown menu if you want to filter by specific schedules, such as only Sunday morning services. Select multiple times or events by clicking on them. Leave it blank if you don't want schedules to be included in your filter.

5 **Campuses**

If your church has multiple campuses, you can select the one you're currently interested in.

6 **Groups**

Next you can filter which check-in groups (usually age ranges) you'd like to view in your analysis. If your organization has a lot of groups, you can change the block settings to display your groups as a dropdown menu, which makes finding and selecting groups easier. To learn how to change this display, see [Configuring Attendance Analytics Block Settings](#configuringattendanceanalyticsblocksettings) below.

7 **Limit By Data View**

This is an advanced setting that allows you to apply even more filter options to your criteria. For instance, let's say you only want to report on _girls_. You could easily make a data view with this gender filter and use it here to only show girls.

8 **Copy Link**

Did you configure the attendance analytics block to provide the perfect snapshot of your attendance? Want to share that with a colleague? The _Copy Link_ button lets you do exactly that.

9 **Update**

Since the block has to crunch through a ton of data to show its results, the graph will only refresh when you click the Update button.

10 **Graph By**

Sometimes you may want to only see one series on your graph (the _Total_ option) but other times you'd like to see multiple series. This setting allows you to configure what types of series you'd like displayed.

11 **Graph**

Yep...this is the graph.

12 **Show Data**

Sometimes you want a pretty picture, other times you need raw data. The good news is that you can have both!

[](#attendeemode)Attendee Mode
==============================

Now that you see how you can see how to get numbers, let's look at how you can see the individuals who make up those numbers. Clicking the Attendees button will hide the graph and show you the individuals behind the data.

Much of the block works in the same way as the graph mode, but here are a few of the differences.

Attendee Mode

![](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-analytics-attendees-v13.png)

1 **Filter**

The filter allows you to show all the attendees or special attendees. We discuss these filters in detail below.

2 **Return Type**

Sometimes you want the attendees (usually children) but other times you want to convert the list to the parents (or children) of the attendees.

3 **Columns**

If you look carefully, you'll notice that the number and types of columns change based on your criteria. Normally you'll see a column for each week in the date range with a checkmark if they attended that week. If you select _Group By_ month or year however, it will show a column for that period type instead.

Filters
-------

### By Visit

Many times, you'll want to filter out only the first-time visitors. That's easy! Just use the _By Visit_ filter. You can select from the first to fifth visits.

Filter By Visit

![](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-analytics-byvisit-v13.png)

Note that the date range is important to this filter. It will show anyone who has had a first visit during the provided range.

You'll also notice a _No_ visit option at the end. This will show members of the selected groups that did not attend at all during the selected date range. Keep in mind though that children are not members of most weekend service groups. This option is more for small groups or service groups that children are members of.

Ministry Idea
=============

Hopefully you're already seeing that this filter provides an easy way to send emails or letters to parents of first-time visitors.

### Pattern

Perhaps you want to find kids who have stopped coming or maybe who come often. The pattern filter can help with either case.

Filter By Pattern

![](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-analytics-pattern-v13.png)

As you can see, you can filter by certain attendance and non-attendance patterns.

[](#configuringattendanceanalyticsblocksettings)Configuring Attendance Analytics Block Settings
===============================================================================================

You can configure the Attendance Analytics block to service other types of check-in scenarios, such as volunteer or serving team check-in. In the Group Types section, select which group types you want to use for your analytics. Ensure that the group type you select is a top-level type that contains the groups you wish to report on.

Attendance Analytics block settings is also where you can choose whether to display all of the groups in your organization as a list on the screen, or to use a group dropdown menu instead. If you want to use a dropdown menu, select No in the Show All Groups field.

Attendance Analytics Block Settings

![](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-reporting-block-settings-v13.png)

Group Specific Attendance Analytics
-----------------------------------

There are additional _Attendance Analytics_ block settings that allow you to filter data by a specific group ID, as well as additional display options. This option is intended for group leaders to use as part of their Group Leader toolbox.

Additional Attendance Analytics Block Settings

![](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-analytics-additional-options-v13.png)

Selecting "Yes" in the _Group Specific_ field will tell the block to only display attendance for a single group, passed to the block through a query string in the URL (e.g. `?GroupId=123`). When a group ID is used, the _Merge People_, _Bulk Update_ and _Merge Document_ options on the _Attendance Analytics_ screen will be hidden.

The _Show Schedule Filter_, _Show Campus Filter_ and _Show View By Option_ settings give you control over whether or not these options are displayed on the _Attendance Analytics_ screen.

[](#finalpieces)Final Pieces
============================

We have a couple of final items to mention, both of which can be found at the top of the Attendance Analytics screen.

Final Pieces

![Final Pieces](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-analytics-final-pieces-v13.png)

1 Help

We've provided a lot of built-in help to this block to assist you in remembering all of these details. When in doubt, open this panel up.

2 Check-In Detail

This button will take you to the attendance data that drives the analytics. This allows you to edit the data.

[](#printers)Printers
=====================

Rock's check-in requires the use of specific Zebra printers. Since most models have many SKUs/options, you'll want to be careful when ordering to specify the exact model number that includes the features you need. Working with a vendor that specializes in Zebra printers is often better than "going it alone" and Googling for the cheapest price. Rock has been tested on the following models:

1.  **ZD421d/621d** - These are the replacement for the now-discontinued GK/GX series and look to be capable successors. The cutter module (which we highly recommend) is purchased separately and is user-installable (as is the ethernet port), unlike earlier models. Make sure you purchase the _d_, not _t_—very few (if any) churches need thermal-transfer capability. These models are available with very good dual-band Wi-Fi.
2.  **ZD500** - This model is more expensive than the others as it can do direct thermal _and_ thermal transfer, and also comes with Ethernet and dual band 802.11n Wi-Fi. It can be ordered with or without a cutter, but the cutter is not user-installable after the fact. This is a large model as it needs to accommodate the thermal transfer roll mechanism but is proving to be a workhorse in many organizations.
3.  **GX420d / GK420d** - Now discontinued, these are de facto standard desktop printers used in countless check-in systems. While they were available with (now) horrible 802.11g Wi-Fi, we do not recommend using that mode with Rock due to the lack of stability with 802.11b/g. That said, if you have them, they still work great via USB (only supported by the Windows check-in client) and Ethernet.
4.  **QLn series** - These are battery powered mobile printers for specialized applications (read: you need to walk around with it).
5.  **LP2844-Z** - These oldies but goodies have been replaced with newer models, but if you still have them, they should work (although this model does not support extended-character printing). Oh, and the 'Z' in the name is really important, as a plain-old LP2844 doesn't talk ZPL, which is necessary for Rock.

While it's highly likely that other Zebra models could work (technically any printer that supports ZPL should work) we've only tested with the models above.

We recommend that when purchasing these Zebra printers, you get ones with built-in Ethernet ports and/or Wi-Fi. This allows more flexibility such as printing from the server (when self-hosting) or the iPad app. If you currently have models that do not have Ethernet or Wi-Fi, you will need to use the Windows client to enable printing via USB. Some models also support Bluetooth LE, which Rock supports _only_ via the iPad app. Bluetooth is a good option if you want to use iPad clients _and_ your printers are not networked via Ethernet or Wi-Fi (or the local network does not allow Wi-Fi clients to talk to each other.)

We also _highly_ recommend printers with cutters, as this eliminates 99% of the jamming problems you get when visitors have to manually tear-off labels. However, we **do not** recommend trying to mix cutter and non-cutter printers within the same system. It's technically possible to do so, but you have to do some hacky things to make such a system stable.

Resolution Matters!
===================

It's important to know that several Zebra models are available as different SKUs in 203dpi or 300dpi resolution. These are not like laser printers that can print at 1200, 600, or 300dpi and look great... it is the literal _physical_ resolution of the print head.

It might be tempting to assume 300 is better than 203 and you should automatically go with that but realize that the labels that ship with Rock are designed at 203dpi and if you try to print them on a 300dpi model, they will look too small. There is no way to fix this other than to re-design the label at 300dpi in ZebraDesigner. Thus, **our recommendation is to stick with 203dpi models** (which cost less, anyway) and only go 300dpi if you plan on creating your own labels **and** want the extra resolution for things like printing photos on the labels (though photos look decent at 203, too).

We'll also mention that because of the way labels are designed for a specific resolution, it is not practical to mix 203dpi and 300dpi printers in the same system. Whatever you do, pick a resolution and stick with it for every printer in your system. Your future sanity will thank you.

Other Printer Vendors
=====================

While we may add support for other print vendors in the future, we currently support only Zebras. Based on our long experience with check-in systems, we feel that they are the best option. While purchase price can be more expensive than other makes, you'll find that their total cost of ownership will be less over time. Zebras are built to last for many years and their labels can be purchased for much less than other vendors. (The difference in labels alone can make up for the difference in printer price in less than one year.)

[](#definingprintersinrock)Defining Printers in Rock
====================================================

For Simplified Printing
=======================

If you are using the simplified printer setup where you are printing from the client and specifying the printer in the iPad or Windows application, you do not need to define the printers in Rock.

To add printers in Rock for selection when configuring locations, group-types or kiosks, follow the steps below:

1.  Navigate to the Devices page under Admin Tools > Check-in > Devices.
2.  Select a printer device to edit or add a new printer.
3.  From the device details screen:
    1.  Give your printer a name.
    2.  Provide the IP address for your printer.
    3.  Select the device type of _Printer_.

Printer Details

![Printer Details](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/printer-device-v13.png)

Now that your printers are defined, you can configure them to be used on either locations Admin Tools > Check-in > Named Locations or kiosks Admin Tools > Check-in > Devices.

[](#checkinrelationships)Check-In Relationships
===============================================

There will be times when you'll want to allow individuals outside of a family to check in children. To make this easy, Rock allows you to add relationships between individuals.

[](#knownrelationships)Known Relationships
==========================================

From a _Person Profile_ page, you can define _Known Relationships_. The _Allow Check In_ relationship allows you to grant check-in rights to a person outside of a child's immediate family.

To add a known relationship to an individual, complete the following steps:

1.  Go to the _Person Profile_ page for the child.
2.  Click the \[+\] button on the _Known Relationship_ block.
3.  Select the _Relationship Type_ of _Allow Check-in by_.
4.  Select the person who should be allowed to check the child in.
5.  Click the Save button.

After following these steps, anyone in the family of the person you selected will be allowed to check in the child. You may notice that the inverse relationship (can check in) is automatically added to the adult.

[](#addingcheckinabilitiestootherknownrelationships)Adding Check-In Abilities to Other Known Relationships
==========================================================================================================

Rock ships with several other _Known Relationships_ such as grandparent, step-parent, etc. Out-of-the-box these relationships do not have check-in rights applied to them. You can easily change that behavior by following the steps below:

1.  Navigate to Admin Tools > General Settings > Group Types > Known Relationship.
2.  Select the role you would like (under Roles) to add check-in capabilities to.
3.  Select Yes under Can Check-in.
4.  Click the Save button on the role dialog and then Save again on the _Group Type_ screen.

[](#checkinkioskoptions)Check-In Kiosk Options
==============================================

The easiest way to run Rock's check-in system is to simply open a web browser on a desktop or tablet and navigate to http://\[yourserver\]/checkin. Rock also provides a native iPad application and a Windows application. Let's explore the different strengths of these three platforms.

| Platform | Print From Server | Local Network Printing | Local USB Printing | Bluetooth printing | Notes |
| --- | --- | --- | --- | --- | --- |
| Browser-Based | X |  |  |  | The easiest method for running check-in, but all printing must be done from the server. (This will only work if your server is on the same network as the printers.) |
| iPad Application | X | X |  | X | This application is available for free from the [Apple App Store](https://itunes.apple.com/us/app/rock-check-in/id879253336?mt=8). The application provides a simple tablet interface to the Rock check-in system. It also allows you to print directly from the iPad to a networked printer, allowing the server to be hosted remotely. |
| Windows Application | X | X | X |  | The Windows check-in application can be downloaded from Admin Tools > Power Tools > External Applications. This application allows you to print to a USB-connected printer as well as network-based printers. |

Externally Hosted Servers
=========================

If your Rock server is hosted outside your organization, you will need to use either the iPad application or Windows application to enable local printing.

[](#ipadapplication)iPad Application
====================================

While the normal check-in screens run really well in mobile Safari, we have created a native iPad application to host the check-in experience. This application can be downloaded for free from the [Apple App Store](https://itunes.apple.com/us/app/rock-check-in/id879253336?mt=8). The application displays the same Rock check-in screens as the browser but also adds the ability to print straight from the iPad to your network-connected printers. The application can also cache the labels, which increases check-in performance.

Note
====

As of Rock v9, the iPad app only runs on **iOS 10** or newer, which means very old hardware like the iPad 2/3 and original iPad Mini will no longer work.

Configuration
-------------

After installing the application from the App Store and running it for the first time, you'll be prompted to enter the address of the check-in start page you want to use for the application. For most organizations this address will be `https://[your-rock-server]/checkin`.

iPad Launch Configuration

![iPad Launch Configuration](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/ipad-checkin-launch-configuration-v11.png)

Navigating Complex Configurations
=================================

Organizations with multiple check-in configurations might want to point to a simple navigation page that allows the individual to select the check-in configuration on load.

Once you provide this address, all subsequent launches will load this address on startup. If you want to modify this address later, or access advanced configuration settings, you can select Settings on your iPad and scroll down to the Rock Check-in application settings. From there you can adjust the following settings.

iPad Configuration

![iPad Configuration](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/ipad-app-settings-v11.png)

| Setting | Description |
| --- | --- |
| Check-in Address | This is the initial page that will load when the application launches. |
| Enable Label Caching | This setting will cache the loading of check-in labels, which keeps them from being downloaded on each check-in. |
| Cache Duration | This determines how often the labels will be re-downloaded. The cache can also be expired by stopping the application and restarting. |
| Enable Label Cutting | If your label printer has a cutter, enable this feature to automatically perform cuts at the end of each set of labels. See the [Printing](#printing) chapter above for more information. |
| Printer Override | This setting has the effect of always printing from the iPad to the printer IP address you provide. |
| Bluetooth Printing | Determines if the Printer Override setting contains a Bluetooth printer name or an IP address for Wi-Fi printing. |
| Enable in Application Settings | Enables or disables the 5-finger long press gesture to get to the in-app settings screen. You can also change how long a person needs to press before the settings screen appears. |
| UI Colors | You can easily customize the background and foreground colors of the interface by adjusting these settings. |
| Camera | Select whether the iPad should use the front or the rear camera for scanning barcodes. You can also adjust the exposure if the image is too bright or too dark. See the [iPad Barcode Scanning](#ipadbarcodescanning) section below for details on enabling this feature. |

Bluetooth Printing
------------------

The iPad Application supports Bluetooth Low Energy printing to supported Zebra printers. As of this writing, these are the ZQ300, ZQ500, ZD400, ZD600 and ZT600 series printers. Zebra also has some older “Bluetooth Classic” printers, but these are not supported. If you are thinking of buying Bluetooth printers, try just one first to make sure everything works before you buy them all. To configure the use of a Bluetooth printer you need to use the in-app settings screen.

While you are in the Rock Check-in app, press five fingers on the screen for two seconds to access the settings screen pictured below. When you enable Bluetooth Printing, a list will appear that contains nearby Bluetooth devices. Select the name of the Bluetooth printer and it will auto-fill the Printer Override setting for you.

iPad Bluetooth Configuration

![iPad bluetooth Configuration](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/ipad-app-settings-with-camera-v13.png)

You may have noticed the _Print Test Label_ button pictured above near the bottom of the screen. This feature is enabled if you have a Bluetooth printer name or an IP address in the _Printer Override_ field. Tapping this button will print a simple test label to verify the connection to your printer.

Note About iPad Restrictions
============================

It's not uncommon when using iPad kiosks to "lock down" the iPad as much as possible via the use of iPad Restrictions, to prevent individuals from changing the configuration or using it in a way that wasn't intended. We have discovered a minor issue in iOS 10 where restricting the use of Safari Browser prevents the Rock check-in app from working properly. (Check-in worked fine in iOS 9 and earlier.) So be aware that you won't be able to disable the use of Safari when running iOS 10 or newer if you want the Rock app to function.

iPad Barcode Scanning
---------------------

You can use an iPad’s built-in camera to scan barcodes or QR codes for check-in. This speedy option is easy to set up and comes with a variety of customization options.

To start, make sure that you have at least one _Device_ set up with the camera feature enabled as shown below. See the [Configuring Kiosks](#configuringkiosks) section for full details on setting up a _Device_. Remember, a single _Device_ configuration can be used on multiple physical machines at the same time.

Device Camera Setup

![Device Camera Setup](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/ipad-camera-device-setup-v13.png)

1 Kiosk Type

In this case, be sure iPad is selected as the Kiosk Type.

2 Has Camera

This option must be enabled to use a camera for scanning barcodes or QR codes with the selected _Device_.

3 iPad Camera Barcode Configuration

Select the camera configuration setting that applies best to how it will be used:

*   **Off:** If selected, the camera will be off and can’t be used for check-in.
*   **Available:** This will add a button to the _Welcome_ screen, allowing the person to choose between scanning a code or providing a phone number to proceed with check-in.
*   **Always On:** Select this option to require scanning for every check-in. The camera feature will activate immediately when the _Welcome_ screen is accessed.
*   **Passive:** With this setting the camera is always on, but the camera view isn’t shown on the screen. In this case, the individual will have to know to place the barcode into the camera’s field of view.

If a _Camera Barcode Configuration_ option is not chosen in the _Device_ settings, then the Welcome block’s settings will be used by default. Those settings can be changed by navigating to Admin Tools > CMS Configuration > Pages > Check-In > Welcome and editing the Welcome block.

Welcome Block Settings

![Welcome Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/welcome-page-block-settings-camera.png)

In-App Camera Settings
======================

There are more camera options you can set within the iPad application itself. See the [Configuration](#ipad-configuration) section above for details.

Now that Rock knows about your camera, you’re ready to start using it.

If a camera-enabled device is selected in the [Administration Screen](#theadministrationscreen), the configuration settings described above will impact what you see next. We’ll start with the **Available** option, which adds a button to the _Welcome_ screen as pictured below.

Welcome Screen with Barcode Button

![Welcome Screen with Barcode Button](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/welcome-screen-with-barcode-button.png)

When the barcode button is tapped in **Available** mode, the camera will activate and look for a code to scan.

Camera View

![Camera View](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/ipad-app-scanning-qr-code.png)

If **Always On** has been selected, you’ll be taken directly to the camera view pictured above immediately after moving past the _Administration_ screen.

The code being scanned should be placed within the semi-transparent brackets to be read properly.

If the **Passive** setting is used, then the barcode button will still appear on the _Welcome_ screen as a reminder that scanning is available but tapping it will not take you to the camera view page pictured above. The person scanning the code will need to know where to position it.

Changing the Barcode Button
===========================

The barcode button can be customized in the application’s [Configuration](#ipad-configuration), or by modifying the [Check-in Display Settings](#check-in-display-settings).

When the **Off** setting is used, the process will be the same as if the camera were disabled. The barcode button will not appear, and the camera will not activate.

After a valid code has been scanned, the check-in process will continue according to your overall setup.

[](#windowsclient)Windows Client
================================

If you're planning on running the check-in kiosk on a PC platform, the Windows Client provides a simple and powerful hosting experience. The client application can be downloaded from your Rock install under Admin Tools > Power Tools > External Applications.

Configuration
-------------

After running the setup application, you'll have a Rock Check-in icon in your Start Menu and on your desktop. When you launch the application, you'll see the settings screen. Unlike the iPad application you'll see this screen on every launch, but the settings you select will be remembered for you. Below is a summary of these settings.

| Setting | Description |
| --- | --- |
| Check-in Address | This is the initial page that will load when the application launches. |
| Enabling Label Caching | This setting will cache the loading of check-in labels, which keeps them from being downloaded on each check-in. |
| Cache Duration | This determines how often the labels will be re-downloaded. The cache can also be expired by stopping the application and restarting. |
| Printer Override | This setting has the effect of always printing from the device to the printer IP address entered here. |
| Printer List | Under the _Printer Override_ setting you will see a list of local printers configured in Windows. This allows you to print directly to a USB printer. |

QR Code Scanning
================

Don't forget that QR code scanning to identify the person is supported in the Windows application. For details on setting up your device to enable this feature see the [Kiosks](#kiosks) chapter above. Note that scanning of QR codes generated by [Mobile Check-in](#mobilecheckin) is still limited to iPads only.

[](#closingthewindowsclient)Closing the Windows Client
======================================================

After pressing the Start button, the check-in application will load the initial check-in screen. When you are ready to exit, simply tap or click in the upper left corner of the screen six times in three seconds to close the application.

[](#urlparameters)URL Parameters
================================

By specifying additional parameters in the URL of the check-in site, it's possible to pass additional information or override the default behavior of check-in.

For instance, if your check-in URL is `examplechurch.com/checkin`, you could use the URL `examplechurch.com/checkin/2/14/18,19` to load the kiosk with the ID of `2`, use the check-in configuration with an ID of `14`, and group types with IDs of `18` and `19`. This is really useful if you have specific devices that always load the same configuration.

However, what if you have a lot of kiosk devices? It can be impractical to provide a unique URL to every kiosk, even if you want all of them to use the same check-in configuration. Luckily, Rock can go get the kiosk ID for you. If a CheckinConfigId is passed into the Check-in Admin block but a KioskId is not passed in, Rock will attempt to look up the KioskId for you using the client's IP address to find a matching Device in Rock. However, because the KioskId is required in all the routes, the only way to have it be blank is to explicitly name the parameters. So, you would use a URL of `examplechurch.com/checkin?CheckinConfigId=14&GroupTypeIds=18,19` instead of something like `examplechurch.com/checkin/_/14/18,19` to enable the kiosk lookup.

If you're explicitly naming the parameters in the URL then the parameter options include:

*   KioskId
*   CheckinConfigId
*   GroupTypeIds
*   GroupIds

Keep in mind that you should not provide both Group and Group Type Ids. If you have both then the `GroupTypeIds` parameter will be ignored, and the group types used will be the ones associated with the listed `GroupIds`. If only `GroupIds` are provided, Rock will use the group types of those groups in the configuration.

It's also possible to override the theme by appending a `?theme` parameter to the end of your address. For instance, `examplechurch.com/checkin?theme=CheckinBlueCrystal` will render the Blue Crystal theme. These parameters are configured using _Routes_, which you can learn more about in the [Designing and Building Websites Using Rock](https://community.rockrms.com/documentation/bookcontent/14#routes) guide.

[](#goingdeeperwithareas)Going Deeper With Areas
================================================

We've already spent some time on areas in the earlier configuration but let's dig a little deeper. By now you know that areas are a way of categorizing your check-in groups. They also help to:

*   Define which tags will be printed when checking into any of the groups assigned to the area.
*   Provide configuration templates by setting the group type for the check-in groups. (More on this in a minute.)
*   Structure attendance reporting.

Keep it Simple
==============

We’ve said it before, but it’s worth repeating. Your future self will thank you for keeping your areas streamlined and simple. Before adding a new Area, make sure you wouldn’t be better off adding a new Group to an existing Area.  
  
For instance, it’s possible for a person to check in to more than one area at the same time. But, if a person checks in to “2nd Grade” in the “Elementary” area for the first service and “2nd Grade” in the “Volunteer Kids” area for the second service, only the locations and schedules for one area will be printed on their label. Adding an additional “2nd Grade Kids of Volunteers” group in the “Elementary” area would be better than creating a new area.

[](#howareasassistwithconfiguration)How Areas Assist With Configuration
=======================================================================

The check-in system is a rich pairing of Rock's workflow engine and groups system. Under the hood, _Areas_ are really just _Group Types_ while check-in groups are, well, _Groups_. Before continuing on with this section we highly recommend you stop and read the [Rock Your Groups](https://community.rockrms.com/documentation/bookcontent/7/) guide to get a solid background on Rock's group capabilities, paying special attention to the _Group Types_ section. Don't worry, we'll wait...

Now that you have a good understanding of groups and group types let's continue. Since check-in areas determine the group types for their groups, you can configure attributes for the groups by modifying the area group type. That's a mouthful, but it will make more sense when you look at the group types under Admin Tools > General Settings > Group Types. Here you'll see each of the areas you've defined using the check-in configuration screens. If you click on them, you'll see some familiar attributes like _Age Range_ and _Grade Range_. The check-in configuration screens are really a simplified group type and group editor especially designed for check-in. You could do all of the configuration using the normal group type editor and group viewer, but it would be much more difficult.

[](#usinggrouptypeinheritance)Using Group Type Inheritance
==========================================================

Imagine what a pain it would be to have to add attributes like _Age Range_ to every new check-in group you create. Make one typo and your check-in might break. That's where group type inheritance comes to your aid.

Group type inheritance simply means that attributes from one group type are used (inherited) by another group type. For instance, the _Check-in by Ability Level_ group type that ships with Rock has an _Inherited Group Type_ of _Check-in by Age_. This means that all of the attributes configured for _Check-in by Age_ are also set up for _Check-in by Ability Level_. This saves you from having to manually recreate attributes that you use often in your check-in setup.

You might be asking, "I get the inheritance but what if I need a group to inherit attributes from more than one group type?" Brilliant! We have that same problem, too. You might notice that groups like _Jr High_ have a need for both the _Age Range_ attribute AND the _Grade Range_ attribute. But a group type can inherit from only one group type.

From your reading in the [Rock Your Groups](https://community.rockrms.com/documentation/bookcontent/7/) guide, you may remember the concept of group type hierarchies. In this case, _Check-in by Grade_ inherits from _Check-in by Age_. So, check-in areas (group types) that inherit from _Check-in by Grade_ get the attributes from both, allowing your check-in groups to filter by _Age Range_ and _Grade Range_. This complicated behind-the-scenes concept really serves to keep things simple for you.

Let's circle back to the pre-configured group types called _Check-in by Age_, _Check-in by Grade_ and _Check-in by Ability Level_. You can probably guess by their names what each one does. If you're sharp (and we know that you are) you may have also noticed that these group types have a purpose defined as _Check-in Filter_. A group type’s _Purpose_ is really just a way of telling you what it's used for. In this case, giving a group type the purpose of _Check-in Filter_ helps Rock know when to show it on certain screens. Nothing magic, we promise.

[](#checkintestarea)Check-In Test Area
======================================

You may have noticed an area called _Check-in Test Area_. This area is used to help you test your kiosk configuration and label printing. Since most areas and groups are only configured to allow check-in during certain schedules, they aren't that helpful for testing. The _Check-in Test Area_ is configured to be available all the time.

[](#themes)Themes
=================

Rock ships with several different check-in themes. Use these themes to give your check-in process the look and feel that best fits the event you're hosting. Some might be more friendly for children, while others might be better for adults. You can change themes as often as you need to, which is great because we're always adding more!

Rock Check-in Themes

![Themes](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/themes-v11.png)

Change That Logo
================

The Rock logo on some themes isn't there to promote Rock. It's there as a placeholder, giving you the option to add your own logo with one simple file change.

There are two ways to activate a theme:

1.  You can select the theme to use during each check-in session on the check-in admin page that is displayed when you first start the check-in process at `http://[your-rock-server]/checkin`.
2.  You can temporarily change the theme by appending `?theme=themename` in the address of your browser on a check-in page. This is a good solution when you'd like to support multiple check-in themes with a simple configuration.

[](#workingwiththeaerotheme)Working with the Aero Theme
=======================================================

You can use the [Theme Styler](https://community.rockrms.com/documentation/bookcontent/14#themestyler) to customize any of Rock’s check-in themes. However, the Aero theme takes this to the next level. With just a few clicks you can quickly and easily transform your check-in look and feel.

Pictured below is the Aero theme’s welcome screen as it ships with Rock.

Aero Theme Welcome Screen

![Aero Theme Welcome Screen](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/aero-theme-welcome-screen-default-v11.png)

Let’s look at the configuration for the Aero theme to see some of the options you have for making changes. You can get to the page pictured below by navigating to Admin Tools > CMS Configuration > Themes.

Aero Theme Styler

![Aero Theme Styler](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/aero-theme-styler-default-v13.png)

Note the _Background Color_ and _Brand Primary_ colors above. Also take note of the two images near the bottom. As shown in the next screenshot below, we’re going to change those colors and images.

Aero Theme Changes

![Aero Theme Changes](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/aero-theme-styler-custom-v13.png)

With these changes in place, you can see in the screenshot below we now have a theme that looks very different from what we started with. All the changes were done without needing any web design experience.

Easy Reset
==========

In the screenshot above you might have noticed the small 'X' icons next to the items that were changed. Simply click each 'X' to automatically reset the configuration back to how it was originally.

Welcome Screen with Changes

![Aero Theme Welcome Screen with Changes](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/aero-theme-welcome-screen-custom-v11.png)

Maximizing Impact
=================

You can see in the screen above that we used the changes to promote our upcoming summer camp. You can configure the theme for branding, promotions or anything else you want your guests to see. As if that wasn’t enough, the Aero theme is optimized for mobile, so you don’t have to worry about how it looks on smaller screens.

[](#creatingnewthemes)Creating New Themes
=========================================

While standard themes might work for many organizations, some may wish to create a custom theme. This is pretty simple if you have some web design experience. Follow the steps below:

1.  Download our Photoshop PSD check-in theme design template from: [https://storage.rockrms.com/resources/Check-in-Template-v1\_0\_0.psd](https://storage.rockrms.com/resources/check-in-theme-template-v1_0_0.psd)
2.  Edit this template by:
    1.  Changing the background to an image of your choosing. It should be a retina-sized image (2696 x 2048).
    2.  Changing the colors on the assets (buttons, headers, etc.) to suit your needs and compliment your background colors.
    3.  Hiding the assets layer and saving the background to your desktop as background@2x.jpg.
    4.  Re-sizing the file to 50% and saving this to your desktop as background.jpg.
3.  Go to the RockWeb\\Themes\\ folder on your server (or better yet - development environment) and make the following edits:
    1.  Make a copy of the existing CheckinPark\\ theme folder (along with its subfolders).
    2.  Overwrite the two background images in the <themename>\\Assets\\Images\\ folder with the ones you created earlier. We recommend giving the images new names to avoid caching conflicts with previous themes. Make sure the new file names are correctly specified in the theme settings at Admin Tools > CMS Configuration > Themes.
    3.  Edit the <themename>\\CSS\\checkin-theme.less and change the fonts and colors of the named assets (the things you modified in the PSD) found in the _Variables_ section of the file.
    4.  If you need additional styling, put your changes in the _Custom Overrides_ section of the file.
    5.  Compile your Less into CSS.
4.  Test your theme by appending '?theme=<themename>' to the address of one of your check-in pages.

Theme Sounds
============

You can customize the sound effects of any check-in theme from directly inside the theme's Assets folder. See our [Designing and Building Websites Using Rock](https://community.rockrms.com/documentation/bookcontent/14#designingthemes) guide for more information on working with theme contents.

[](#installingtherockiconfontonzebraprinters)Installing the Rock Icon Font On Zebra Printers
============================================================================================

Rock has created an icon font just for check-in labels. This font applies specific FontAwesome icons to the same merge fields used by the plain-text labels. You can download this font from: [https://storage.rockrms.com/resources/rockcheckin.ttf](https://storage.rockrms.com/resources/rockcheckin.ttf).

If you plan on creating custom labels using ZebraDesigner, you will want to begin by installing the font on your Windows computer: open _Fonts_ in the Windows Control Panel and drag your downloaded rockcheckin.ttf into it.

You can install the icon font on all your printers by simply "printing" a label containing the font and the command to install it. Rock comes with such a label; all you need to do is temporarily add that label to a check-in area (you can also print the label to your printers in the Rock label editor by choosing a printer and clicking on the Print button under _Test Print to Device_, assuming that you can print from your server to each printer).

Here's how:

1.  If you're curious, you can check out the label (and the magic code that installs the font) at Admin Tools > Check-in > Check-in Labels.
2.  Click on the _Install Icon Font on Printer_ label and read the notes in the label description.
3.  To add this label to a check-in area, go to Admin Tools > Check-in > Check-in Configuration, and click on Weekly Service Check-in.
4.  Click on the Check-in Test Area. In the right-hand column, you'll see other Check-in Labels listed. Click the \[+\] to add a new one, then select _Install Icon Font on Printer_, then Add. This adds the font installation label to this area.
5.  Run Check-in, selecting the _Weekly Service Check-in Area_ configuration, and the _Check-in Test Area_ check box.
6.  Check a person in and watch what prints. Out of the box, a name tag and a child label will print, followed by a directory label listing all the files in the E: memory space of the printer (where all custom fonts and graphics are stored), followed by a label that prints the "A, B, F and L" characters from the Rock icon font (these will be the associated icons if you've succeeded). The directory label will list the _ROC000.FNT_ icon font, showing that it actually has been successfully installed on the printer.
7.  Now all you have to do is check a person in on all your other kiosks, instantly installing the icon font on each one in turn. Easy!
8.  Make sure you remove the special label from the area on which you installed it; imagine the surprise when a parent checks her child in and is rewarded with these "special" demonstration labels (not to mention it would slow check-in significantly if the font were to be re-installed with every check-in).

You can create a similar font file for your custom needs at: [https://icomoon.io](https://icomoon.io/). If you're curious, we've tried Fontello, but the fonts it creates don't work correctly with Zebra printers.

Whew! Now that you've installed your font on your printer, you're ready to print awesome icons on your labels.

[](#creatingcustomlabels)Creating Custom Labels
===============================================

You can create your own labels for check-in with the free ZebraDesigner software. Once you've created the labels, you can upload them to Rock and apply them to various check-in areas. Let's walk through that process step-by-step.

About System Labels
===================

Rather than modifying the built-in labels that come with Rock, you'll want to create your own new ones. If you want to start with an existing one and "tweak" it, we'd suggest copying the code into a newly-created label. Rock updates can overwrite system labels that you've modified.

[](#installingzebradesigner)Installing ZebraDesigner
====================================================

ZebraDesigner is a WYSIWYG design tool for designing ZPL-formatted labels. While Zebra has several different versions of the software, the free ZebraDesigner has everything you'll need to make labels.

Don't Go Pro
============

The 'Pro' version doesn’t have any additional features necessary for creating check-in labels. It only adds capabilities such as embedding RFID codes.

To install Zebra Designer, follow these steps:

1.  Download the [ZebraDesigner Software](http://www.zebra.com/us/en/products-services/software/zebralink/zebra-designer.html#mainpartabscontainer_71ac=downloads).
2.  Run the setup, selecting all of the defaults.
3.  Launch the application. The first time it's run, it will ask you to install a ZDesigner print driver. Select the Add Printer button to add this driver.
4.  Walk through the wizard steps until you reach the Select Printer screen. Here, select the printer model you'll be working with.
5.  Next, you'll need to pick the port where the printer is attached. While it's easier to select a printer connected through USB, connecting to one via IP would allow it to also be used from Rock. To connect it via IP, first get the IP address of the printer (press and hold the feed button until it flashes once, then release. A network configuration label should be printed that lists the printer’s IP.) Next, press the Add Port... button and type in the IP address in both the _Port Name_ and _IP Address Field_. Finally, press OK. Select this new port and click Next.
6.  Double check that the _Launch installation of Zebra Font Downloader Setup Wizard_ is checked and click Next.
7.  Walk through the setup wizard.
8.  Congratulations! ZebraDesigner is now installed. You should now be able to open the program, select a default label and print it to the printer you configured.

For more information, read the [ZebraDesigner User Guide](https://www.zebra.com/apps/dlmanager?dlp=-227178c9720c025483893483886ea540bd07dd0f9873752cf891686eb4950400add13410300d57bba85f97bf163f9fd36e5d570ea311ae808567bcd4ee78e9be0215920c304d73b6c5a140c8126d1edbc18563899b977f5cc08e0ee725c5d28&c=us&l=en).

What's a Zero Font?
===================

Before we dive into creating a label, we should talk about fonts. Zebra printers come with a plethora of built-in fonts, named A, B, C, Zero (0), T…wait. Zero? Interesting! The 0 font is unique, in that it's the only pre-installed font that is scalable, i.e., resizable. All the other fonts are fixed in size (well, they can be doubled, tripled, etc., but that doesn't sound like a useful plan). You'll want to use the 0 font for all normal text fields, since it can easily be scrunched (or blown up) to fit a text field (and yes, those are technical terms used in the font world.)

[](#creatingyourfirstbasiclabel)Creating Your First Basic Label
===============================================================

Follow the steps below to create a simple check-in label. We'll talk about more advanced features in just a bit:

1.  Open ZebraDesigner.
2.  Choose to Create a new label (or create a new blank label by selecting File > New from the menu).
    1.  You can skip the _Select Stock_ screen (this option is to select the type of sticker you are using, such as selecting a paper weight/finish for a regular printer.)
    2.  On the _Page Size_ screen, enter the size of your labels (often 4x2).
    3.  Select the print orientation of your label on the _Label Layout_ screen. (It might seem counter-intuitive, but you need to select the portrait orientation. Trust us, we went through stacks of labels figuring this out.)
    4.  Make sure you _uncheck_ Rotated, or the labels will print upside down.
    5.  Finally, enter your label canvas height and width (4x2) and click Finish.You should now have a blank label.
3.  Add a text field to the label:
    1.  Click the Text button on the left side of the screen and click on the blank label in the approximate place you'd like to place the text object you're creating.
    2.  A text wizard pops up; choose Fixed text.
    3.  Enter your church name in the box.
    4.  Make sure the font is set to Zebra 0 and sized to 18pt.
    5.  Click Finish and your brand-new text object is placed on the label. You can move it around or resize it (a word to the wise: it's best to define the font size when you create the object. Resizing after you place the object can lead to undesirable effects later when you use the label in Rock).
4.  Add an additional text field to the label with "NickName" as the text, set to 24 pt. and again, using the zero font.
5.  Print your label to the printer to see the result.
6.  Save your label as a .lbl (ZebraDesigner) file for future edits.
7.  When you're satisfied with your creation, create the ZPL file (which will export with the extension of .prn) for the label by printing again, but choosing _Print to File_ on the print screen. When you click Print, the save dialog will be displayed. Save the file, remembering the name you gave it (and where you put it).

[](#addyourlabeltorock)Add Your Label to Rock
=============================================

Now we'll add our new label to Rock. Open the Rock _Check-in Label_ page under Admin Tools > Check-in > Check-in Labels.

Click \[+\] to add a new check-in label. Once you upload the ZPL file (.prn) you should see the merge field list open, showing the text fields you created. Link the _NickName_ merge code from your label to the _Nick Name_ merge field in Rock. Delete the field that contains your church's name (since it's just text, and not a merge field).

Your simple label is now ready to be used in Rock. To use it, follow these steps:

1.  Open up the check-in configurator Admin Tools > Check-in > Check-in Configuration.
2.  Determine the check-in configuration type you want to add it to (e.g., _Weekly Service Check-in_) and click on the check-in area you want to add the label to.
3.  Add the label to the list of labels on the right side by clicking the \[+\] button and choosing your new label from the drop-down list. Click Add.
4.  Click the Save button to complete the configuration.

Your new label should now print with every check-in to that area.

[](#mergefields)Merge Fields
============================

You might be wondering where that merge field came from and what others are available for your use. We like the way you think! Merge fields are created as Defined Values under Admin Tools > Check-in > Label Merge Fields. There you will see all of the merge fields currently set up. Pretty much everything you see on the built-in labels is a merge field. You'll also see that merge fields are simple fragments of Lava matched to a keyword.

For instance, the _Birthday Icon_ merge field is simply:

```
            {% if Person.DaysToBirthday <= 7 %}B{% endif %}
            
```

This Lava looks at the birthdate of the person checking in and if it's within seven days it prints the letter 'B' (or a birthday present icon if the Rock icon font is installed on the printer).

You can see a list of all of the fields available for you to use in your Lava by pressing the Show/Hide Merge Fields button of the defined type. Impressive, isn't it?

[](#addingapersonphoto)Adding a Person Photo
============================================

If you need a photo in your nametag, you can use your newly-acquired custom label knowledge to make it happen. Just follow the steps below:

1.  As described in the last section, add a new Label Merge Field (Defined Type) with a value of _Person Photo_ and a MergeField containing the Lava "{{ Person | ZebraPhoto }}".
2.  Photos are always printed as squares; you can adjust the size by adding the length of one side as a parameter in the merge field Lava: {{ Person | ZebraPhoto:'203' }}. This would print a photo one inch by one inch on a 203-dpi printer. Coming soon: the ability to rotate your photos.
3.  While editing your custom label's ZPL file (.prn), add two new lines exactly like in this snippet (anywhere between the ^LL and ^XZ commands):
    ```
    ^LL812
    ...
    ^FDPhoto^FS
    ^FO25,68^XGR:LOGO.PNG^FS
    ...
    ^XZ
                    
    ```
    
4.  The first line performs the magic of downloading and storing the photo in the printer's memory, and the second recalls it from memory and places it on the label. (25,68) is the coordinate of the upper left corner of the printed image (you can adjust this to place the image where you want it on the label).
5.  Lastly, when you upload your new check-in label's ZPL file (.prn) into Rock, link the _Photo_ on the label to the _Person Photo_ merge field.

The photo of the person checking in should now appear on the label when they check in. You can find more details on the [ZebraPhoto Lava filter](https://community.rockrms.com/lava/person#zebraphoto) in the Person section of the Lava documentation.

[](#achievementlabels)Achievement Labels
========================================

When a check-in results in an Achievement being earned, you can print an additional label recognizing the successful completion. In this example the label will print the person's name and the name of the Achievement.

1.  Create a new Label Merge Field by adding to the list under Admin Tools > Check-in > Label Merge Fields. The MergeField value will be as shown below:
    ```
    ^FS
    {% for completedAchievement in JustCompletedAchievements %}
    CT~~CD,~CC^~CT~
    ^XA~TA000~JSN^LT0^MNW^MTD^PON^PMN^LH0,0^JMA^PR6,6~SD24^LRN^CI28^XZ
    ^XA
    ^MMT
    ^PW812
    ^LL0406
    ^LS0
    ^FT16,256^A0N,56,55^FH\\^FD{{ Person.NickName }} {{ Person.LastName }}^FS
    ^FT18,328^A0N,56,55^FH\\^FDCelebrates {{ completedAchievement.AchievementType.Name }}^FS
    ^LRY^FO0,0^GB812,0,122^FS^LRN
    ^PQ1,0,1,Y^XZ
    {% endfor %}
    ^FD
                    
    ```
    
2.  Next, create a new label under Admin Tools > Check-in > Check-in Labels. You'll need to add a new Merge Code with a Key of "Achievements" and a Value that matches the Label Merge Field created in the prior step.
3.  Save the label, then open it up again and click the Edit Label Contents button.
4.  In the _Label Contents_ area, add the following:
    ```
    ^FDAchievements^FS
                    
    ```
    
5.  Save your changes and save the label.

Don't want an entire label for the Achievement? You can add individual fields to an existing label. For instance, if you want to print the name of the Achievement simply create a new Label Merge Field with the MergeField value set as shown below and add it to your existing label.

```
{% for completedAchievement in JustCompletedAchievements %}
    {{ completedAchievement.AchievementType.Name }}
{% endfor %}            
        
```

The `JustCompletedAchievements` merge field used in the above example is a list of `CompletedAchievement`, which has fields of:

*   Achievement Type

*   Name
*   Description
*   Category
*   AchievementIconCssClass
*   AllowOverAchievement
*   CustomSummaryLavaTemplate
*   ComponentEntityTypeId
*   (etc...)

*   AchievementTypeId
*   AttemptStartDateTime
*   AttemptEndDateTime
*   PersonId

[](#bestpracticesandlessonslearned)Best Practices and Lessons Learned
=====================================================================

Creating labels is easy using the ZebraDesigner software. Below are a few best practices to help you create the highest quality labels:

*   When you're working with images, be sure to make the image the exact size you want on the label (do not stretch or shrink it.) The best way to achieve this is to create the label first in Photoshop. Set your Photoshop file to be the same size in inches as your label with a DPI of 203. If you adjust the image size in the Zebra Designer, you’ll get a bad case of the jaggies (a pixelated look).
*   Only use embedded printer fonts. These fonts are noted with a small printer icon in the ZebraDesigner font picker. If you would like to use a different font, be sure to upload it to the printer. (Note: You’ll need to do this to each printer that will be used in the check-in process.) For instructions on how to do this, see the section [Installing the Rock Icon Font on Zebra Printers](#installingtherockiconfontonzebraprinters).
*   If you create some truly custom labels, you will likely run into issues with things like centered or justified text. There is a bug in ZebraDesigner where the size of a field on the rendered (.prn file) label is incorrect (even though it looks perfect in the Designer app), and you end up with a jumble of text printed over itself when trying to print the label. If you run into this issue, you can edit the label's ZPL directly via the Edit Label Content button after uploading your label into Rock under Admin Tools > Check-in > Check-In Labels This lets you play with the field's coordinates and length and see your changes in real time until you get it right.

Important
=========

If you are manually updating the contents of your label file, make sure that you do not end up with line breaks in your label merge code (between the ^FD and ^FS). The check-in application will be looking for the codes in the label, and if you add line-breaks the pattern may not match.

Equally important, if you create your own Merge Fields in Rock for your custom labels, do not add line breaks to your Lava to make it pretty. Line breaks can cause the wrong icons to print.

[](#beyondchildrenscheckin)Beyond Children's Check-In
=====================================================

While much of this document has focused on using check-in for childcare activities, Rock is capable of much more. Below we'll discuss a few ideas on how to extend check-in.

[](#servinggroups)Serving Groups
================================

Serving groups are one of the pre-configured group types in Rock. There are many benefits to having people check in when they serve. To help you gather that data, we've configured the serving groups to allow check-in. All you need to do is provide two settings for each group to help Rock know where and when to allow check-in. Let's take a look at how to do this.

Configuring Serving Groups For Checkin

![Configuring Serving Groups For Checkin](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/configure-serving-groups.png)

1**Navigate**

Edit the group from People > Group Viewer.

2**Open The Details**

Expand the _Meeting Details_ panel and click the button if no location has been set, or the button if one has.

3**Location**

Select a _Location_ for the meeting spot. This will be used to help determine which kiosk device should handle the check-in. It’s best to choose a broad location (like a campus instead of a specific room), because this allows your group to be visible to the check-in kiosk without a lot of extra configuration. See how we're saving you all this time?

4**Schedule**

Select a _Schedule_ to determine when the check-in should be active.

Voila! Your serving group is now ready for checking in.

Double Check:
=============

Make sure that the check-in kiosk you are using is configured for the location you chose for the group.

[](#configuringnewgrouptypesforcheckin)Configuring New Group Types for Check-in
===============================================================================

Now that you've seen ~the power of the dark-side~ how serving groups can check in, we bet you're wondering how to configure other group types for check-in. Just follow these steps.

Configuring A New Group Type For Check-In

![Configuring A New Group Type For Checkin](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/configure-group-type-for-checkin-v13.png)

1**Name**

Add or edit your group type under Admin Tools > General Settings > Group Types. Be sure to give it a good name and a clear description so there's no confusion about what it's for.

2**Location Selection**

Configure the _Location Selection Modes_ to use _Named_ locations.

3**Location Schedules**

Make sure _Enable Location Schedules_ is enabled.

4**Location Type**

Add the _Location Type_ of _Meeting Location_.

Once enabled, you'll still need to add the meeting details just like we illustrated in the _Serving Groups_ section above.

Well done. You are now a check-in whiz. You can properly configure check-in for any group type.

Got Labels?
===========

Do you have a group of a type that doesn't usually print labels that needs labels printed? Rock has you covered. There is an advanced option that allows you to print labels for group types that don't typically print labels at check-in. To learn more about this feature, see the [Appendix - Advanced Options](#appendixadvancedoptions) section below.

[](#rapidattendanceentry)Rapid Attendance Entry
===============================================

The _Rapid Attendance Entry_ block allows you to record attendance for lots of people very quickly. This could come in handy for certain situations, such as checking a lot of people in for a worship service and wanting to do so as fast as possible. _Rapid Attendance Entry_ can also be very useful outside of attendance. It's great for entering communication cards, prayer cards or other information you might collect in large volumes. The _Rapid Attendance Entry_ block makes these tasks quick and simple. Let's look at how it works.

To start, navigate to People > Rapid Attendance Entry. You’ll begin the process by selecting the group for which you want to record attendance. The group's settings and attributes determine which options will be available on the screen.

Rapid Attendance Entry Screen

![Rapid Attendance Entry Screen](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/rapid-attendance-entry-contact-entry-v13.png)

1 Group

Select the group for which you want to enter attendance. The group’s configuration will determine what other fields appear on this page. In some cases, _Group_ and _Attendance Date_ will be the only fields you see.

2 Location

If the group has multiple locations, select the one you need for attendance.

3 Schedule

You’ll be prompted to select a schedule only if there are multiple schedules for the chosen _Location_. Otherwise, this field will not appear.

4 Attendance Date

Provide the date for which you want to record attendance. You can either choose a date from the calendar or enter a date manually.

5 Campus

You can optionally select a campus, which will filter the Locations for that campus. This field can be shown or hidden by updating the block settings.

After filling out the required fields as described above, click the Start button to proceed to the page pictured below.

Your page may look slightly different depending on how your organization has configured the block settings.

Rapid Attendance Entry Search

![Rapid Attendance Entry Search](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/rapid-attendance-entry-search-v13.png)

1 Search

Provide a person or family name and click the Go button to proceed with recording attendance. As always, we recommend doing a thorough search before adding a new person or family.

2 Attendance Details

The group, schedule, and attendance date selections from the prior page are displayed here for reference.

3 Current Attendance Count

This count will increase as each person’s attendance is recorded. Block settings can be used to turn this into a link to an attendance page, allowing you to easily access the list of recorded attendees.

4 Settings

Click the button to go back to the first screen. This is how you’ll change the group, location, schedule or attendance date.

5 Add Family

If the family you're looking for isn't in Rock yet, you can add a new family directly from here.

After entering a name and clicking Go, you’re ready to start recording attendance...and more!

Again, keep in mind that there are many block settings to tailor this page to your organization’s needs. The example pictured below highlights some useful features, but they aren’t required and may not be visible when you access the page in your system.

Attendance and Contact Entry

![Attendance and Contact Entry](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/rapid-attendance-entry-results-decker-v13.png)

1 Person List

The panel along the left will show you individuals who match the search criteria you provided. You can switch between people and families by clicking here.

2 Family Information

Information for the selected person's family is displayed near the top of the block. You can edit the family’s address without leaving the page by clicking the icon. Add individuals to the family by clicking the icon.

3 Attendance Selection

Select the available boxes for anyone who should have attendance recorded. In this example, we can’t select Noah or Alex because they are too young. Administrators can change the age restriction in the block settings.

4 Select Person

Click a person to view information like their age, email or phone number. Depending on your block settings, there are other actions you can perform elsewhere on the page, which we’ll describe in the following points.

5 Person Details

The details for the selected person are displayed in this area. This information can be edited directly from this page by clicking the icon.

6 Workflows (I'm interested in...)

If enabled in the block settings, workflows can be launched from this page when the page is saved. The title “I’m interested in” and the available workflows can be changed in the block settings.

7 Note

This block’s settings can be configured to enable Person note entries directly from the page. The block settings also let you specify which _Note Types_ can be used. If multiple _Note Types_ are allowed, then the person entering attendance can choose which one to use.

8 Prayer Request

Prayer requests can be entered if allowed by the block settings. There are several block settings related to prayer requests. In the example pictured above, we used the block settings to enable the _Urgent_, _Public_ and _Prayer Category_ fields.

9 Save

We're bringing attention to the Save button as a reminder that this single button applies to all the changes you've made in the areas described above. With a single click you can add the note, create the prayer request, launch a workflow and, of course, save attendance.

Workflows launched from this block will be passed the person as the workflow’s entity. If they exist, the block will also fill in any of the workflow attributes listed below:

*   **Group -** The group for which the attendance is being entered. The attribute should be of type group.
*   **Location -** The selected location for which attendance is being entered.
*   **Schedule -** The schedule selected for entering the attendance.

[](#rapidattendanceentryblocksettings)Rapid Attendance Entry Block Settings
===========================================================================

It’s easy to see that there’s a lot more to _Rapid Attendance Entry_ than entering attendance. But to truly understand all your options for this feature, we’ll need to dive into the block settings. There are a lot of settings to cover, so we’ll break it down into a few parts.

Block Settings - General and Attendance

![Block Settings - General and Attendance](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/rae-block-settings-general-attendance-v10.png)

1 General Settings

Here you can update the name of the block. You can also change the pages that individuals will be taken to when attempting to add a new family or view attendance list data.

2 Enable Attendance

Because there’s so much that can be done on this page, you might choose to disable the attendance feature entirely. This could be useful if you’re adding this block to a custom page that should only be used for entering contact cards or prayer requests.

3 Parent Group

You can limit which groups are available for attendance entry by designating a parent group. Only groups that are listed under the selected parent group will be selectable.

4 Attendance Group

By selecting a group here, you can limit the block to only allow attendance entry for the selected group.

5 Show Can Check-In Relationships

If enabled, individuals who have a “Can check in” _Known Relationship_ to the selected person will be available for attendance entry.

6 Attendance Age Limit

Individuals younger than the age provided here cannot be marked as having attended. This can be left as zero to allow attendance for individuals of any age.

Block Settings - Family and Individual

![Block Settings - Family and Individual](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/rae-block-settings-family-individual-v15.png)

1 Family Attributes

If you have any family attributes set up, you can choose what should appear when editing family information. Those attribute values can be changed while editing the family.

2 Family and Individual Header Lava Templates

You can edit this Lava to change what information about a person or family is displayed, or to change how the information is displayed. You probably won’t need to update this, but it’s an option if you’re familiar with [Lava](https://community.rockrms.com/Lava).

3 Adult Phone Types

The phone types you select here will be made available for view or edit when editing an adult individual’s information.

4 Adult Person Attributes

The selected attributes will be available when editing an adult’s person information.

5 Show Communication Preference (Adults)

If this is set to “Yes” then the communication preference for adult individuals can be seen and changed when editing the individual’s information.

6 Child Phone Types

The phone types you select here will be made available for view or edit when editing a child’s person information. Always use caution when adding phone numbers for children, and be sure you’re familiar with [Children’s Online Privacy Protection Act (COPPA)](https://www.ftc.gov/tips-advice/business-center/privacy-and-security/children%27s-privacy) compliance standards.

7 Child Person Attributes

The selected attributes will be available when editing a child’s person information.

8 Child Allow Email Edit

If enabled, a child’s email address will be available for display and edit. Always use caution when adding email addresses for children, and be sure you’re familiar with [Children’s Online Privacy Protection Act (COPPA)](https://www.ftc.gov/tips-advice/business-center/privacy-and-security/children%27s-privacy) compliance standards.

9 Race

You can choose to collect a person's race, which describes their physical traits and characteristics.

10 Ethnicity

You can also choose to collect a person's ethnicity, which is a cultural identifier.

Block Settings - Notes, Prayers and Workflows

![Block Settings - Notes, Prayers and Workflows](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/rae-block-settings-notes-prayer-workflow-v10.png)

1 Note Types

Select which types of notes can be used. If multiple types are allowed, then the person entering attendance will choose which one to use. If nothing is selected, then the page cannot be used to enter notes.

2 Enable Prayer Request Entry

You can choose to enable or disable prayer request entries on the page by changing this setting.

3 Enabled Urgent Flag

Set whether the “Urgent” flag can be selected.

4 Show Public Flag

Set whether the prayer request can be marked as “Public” from the page.

5 Expires After (Days)

Set the number of days before the prayer request is expired.

6 Default Category

You can optionally provide a default prayer category into which the request will be grouped. If category selection is not enabled (see below), then this will be the category into which all requests from this page will be grouped.

7 Display to Public

If enabled, all requests will be set to “Public” by default. This can be changed for individual requests if the public flag is configured to be shown.

8 Default Allow Comments

Set whether or not prayer requests entered here should allow comments.

9 Enable Category Selection

This controls whether the person entering the prayer request can choose a category or change the default category if one has been configured.

10 Workflow List Title

This allows you to create a custom title that appears above the available workflow types. You can change this to match the wording on a contact card.

11 Workflow Types

Select one or more workflows that can be launched from the page. See details [above](#workflowfromrae).

[](#attendanceselfentry)Attendance Self Entry
=============================================

With the advancement of online services, getting accurate engagement data can be a challenge. To address this need, Rock lets attendees report their own attendance from your external site. All a person needs to do is check a few boxes to indicate who’s watching the service with them.

Attendance Self Entry

![Attendance Self Entry - Known Person](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-self-entry-known-person-v10.png)

Pictured above, Ted is watching the service at home with Cindy and Alex. Noah is at grandma’s house this weekend, so isn’t selected. Below the family you can see Jim and Sarah Simmons are over at the Decker house watching the service too.

With everyone in the room accounted for, all Ted needs to do now is click the Check-in button near the bottom of the page to have their attendance recorded.

Using with Moments
==================

The Attendance Self Entry feature pairs very nicely with Church Online Platform’s “Moments” feature. Check out the details [here](https://support.online.church/category/9yx9qvdlha-moments) to learn more.

[](#attendanceselfentryindetail)Attendance Self Entry In Detail
===============================================================

In the above example, Ted was logged in to the external website. That’s how Rock was able to find him and his family. There’s a little more to the process if Rock doesn’t know who the person is.

In this section, we’ll walk through the full attendance self-entry process for Alisha. Alisha is new to the organization and is watching an online service with her family for the first time. Rock can’t track attendance for someone who’s not in the system, so we’ll ask her for some basic information to get started.

Attendance Self Entry - Person Information

![Attendance Self Entry - Person Information](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-self-entry-unknown-person-v10.png)

1 Person Information

At a minimum, the person is required to provide their first and last name. The remaining fields are optional by default, but you can make them required in the [block settings](#theattendanceselfentryblock).

2 Login

This area provides an opportunity for the person to log in. Logging in lets the person skip to the last step of the process and helps ensure attendance is being added for the right people.

3 Next

After clicking Next, Alisha’s information is compared to person records in the system. If a match is found, then Rock will automatically add the person’s family on the next page (see screenshot below). If a match isn’t found, then a new record will be created for Alisha using the information she provided.

On the next page, Alisha is asked to provide similar information for anyone who's joining her. Because Alisha is new to the church and doesn’t have a record in Rock, she’ll need to add each of her family members manually. Ted Decker is joining the Marble family for this service, so Alisha will need to add him too.

Pictured below, Alisha is adding Ted Decker as an ‘Online Watcher’ to indicate that Ted is watching with her and her family. For those who are curious, ‘Online Watcher’ is a _Known Relationship_ in Rock and is used to connect these individuals to each other.

As many watchers as needed can be added by clicking the Add Additional Individual button. Each new person is added to the list on the right, where we can see Alisha has already added Bill and Matthew.

Attendance Self Entry - Other Watchers

![Attendance Self Entry - Other Watchers](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-self-entry-other-watchers-v10.png)

1 Adding Other Watchers

The person filling out the form can select a _Spouse_, _Child_ or _Online Watcher_ to add to the list of attendees. The next section [below](#theattendanceselfentryblock) explains how to change these options. An individual can only have one _Spouse_, but as many other types of watchers as needed.

2 Currently Listed

The people listed here will be available for check-in on the next page. It’s important to note that this list isn’t meant to actively track who is watching an individual service on a given day. For instance, if someone is hosting a watch group then all of the planned participants should be added here, regardless of that day’s attendance.

3 Remove Remembered Watchers

Watchers that the person has added can be removed by hovering over the person’s name and clicking the “X” icon that appears. Family members (Spouse or Child) can’t be removed from this list.

After everyone has been added to the list, the person clicks Next to proceed. Because she’s new, Alisha is prompted to create an account so she can log in next time and save herself a few steps.

Attendance Self Entry - Create Account

![Attendance Self Entry - Create Account](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-self-entry-create-account-v10.png)

Account creation is optional but should be encouraged. Whether or not the person creates an account, they can proceed by clicking the Next button.

Do I Have To Do This Every Week?
================================

A person only needs to provide their information once, even if they never log in. That’s because Rock will place a cookie on their device to identify them for future services. So, _identified_ individuals will have the same experience as _authenticated_ individuals. But remember, being identified isn’t the same as being authenticated. Individuals must log in to access other areas of the site that require authentication.

The last step, pictured below, is where Alisha will indicate who is watching the current service. Rock assumes that everyone who was added in the prior step is still watching, so everyone from her list is selected. Individuals can be de-selected here if they’re no longer watching.

This is the last step in the process for Alisha, but you might recall from the start of the chapter that it was the first step for Ted. Any identified or authenticated person will always start on this page.

Attendance Self Entry - Current Watchers

![>Attendance Self Entry - Current Watchers](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-self-entry-confirm-current-watchers-v10.png)

1 Attendee Selection

Everyone from Alisha’s list is watching the current service, so everyone is selected. Any person can be deselected by clicking inside the blue box, indicating that they aren’t watching this service.

2 Adjust Remembered Watchers

Rock remembers the people who have watched a service with you and will keep your list from one service to the next. Alisha can remove Ted from the list, or add new people, by clicking this link. This takes the person to the same page described [above](#adjustrememberedwatchers).

3 Check-in

After the current service’s participants have been selected, the Check-in button is used to add their attendance for the service.

After Alisha clicks Check-in, the below page confirms that the attendance has been successfully submitted.

Attendance Self Entry - Check-in Success

![Attendance Self Entry - Check-in Success](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-self-entry-check-in-success-v10.png)

It’s important to note that this process has created person and family records in Rock for Alisha and her family. Ted already had a record, otherwise one would have been created for him too. This is required because a person needs to be in Rock for their attendance to be added.

What About In-Person Attendance?
================================

_Attendance Self Entry_ works the same way for any type of service. The same pages and processes can be used to track attendance for services that are in-person, online or a combination of both.

[](#theattendanceselfentryblock)The Attendance Self Entry Block
===============================================================

Now that you’re familiar with the process, let’s take a closer look at the _Attendance Self Entry_ block itself. This block handles the entire process from start to finish, so there are a lot of configuration options to cover. We’ll break down the block’s settings into pieces below.

First, there’s some terminology you should know. The block’s settings refer to a _Primary Person_, who is the person that’s filling out the form. In the prior section, Alisha Marble was the _Primary Person_. There are also settings for _Other Person_, which apply to anyone other than the _Primary Person_.

Attendance Self Entry - Block Settings 1

![>Attendance Self Entry - Block Settings 1](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-self-entry-block-settings-1-v11.png)

1 Location

If you select a location here, the block will match the attendance record with that location. This only works if the check-in area's group is associated to that location.

2 Check-in Configuration

You may have noticed in the [prior section](#attendanceselfentryindetail) that Alisha never provided information about the service she was attending. The block uses the check-in configuration selected here to know where to add attendance automatically. See below for more details.

3 Primary Person Options

This set of options lets you customize what information you can collect from the primary person. The primary person is always required to provide their first and last name at a minimum, so there aren’t settings for those fields.

4 Other Person Options

These options apply to the information gathered for people other than the primary person. Like the primary person, a first and last name must be provided. The _Email_ and _Mobile Phone_ fields are not shown when a _Child_ is being added.

As noted above, Rock uses the _Check-in Configuration_ setting to know where to add attendance. There’s some complex logic behind how this works, which we won't get into here. In short, the block looks for the appropriate service by comparing the selected check-in configuration to the time when the person is checking in. For instance, Rock will automatically determine that the person checking in at 9:55am is watching the configured 10:00am service.

Additional Logic for Adding Attendance
======================================

If the block can’t find an appropriate schedule with respect to the person’s check-in time, then the attendance will be added to the first group that’s found without a location or schedule. If no such group exists, then the attendance can’t be recorded.

Pictured below are the next set of configuration options for the _Attendance Self Entry_ block.

Attendance Self Entry - Block Settings 2

![>Attendance Self Entry - Block Settings 2](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-self-entry-block-settings-2-v10.png)

1 Known Relationship Types

The _Known Relationship_ types you add here will appear as options in the _Relation_ field described in the prior section. Also, the people with whom the primary person has these relationships will automatically be added to their list of watchers. For instance, if we added “Sibling” then Alisha’s brothers and sisters would automatically be added to Alisha’s list (assuming they have records in Rock and are set up as siblings).

2 Redirect URL

At the end of the process, when the primary person clicks the Check-in button, you can optionally direct them to a different page by providing a URL here. If this is blank, the default confirmation page shown in the prior section is displayed.

3 Check-in Button Text

The Check-in button can be assigned a different name by changing it here.

4 Workflow

You can optionally launch a workflow when the person finishes the check-in process. The primary person will be passed to the workflow, along with information about the group and schedule. For full details, see the help text (the icon) for this setting in Rock.

5 Hide Individuals

You can place age or grade restrictions on the people who appear in the list of attendees. For instance, you can prevent anyone under the age of 18 from being selected for attendance in the service.

The last set of configuration options lets you change the text that’s shown near the top of each attendance entry panel. As pictured below, you can edit the _Title_ and _Text_ for each panel described in the prior sections.

Attendance Self Entry - Block Settings 3

![>Attendance Self Entry - Block Settings 3](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/attendance-self-entry-block-settings-3-v10.png)

1 Unknown Individual Panel 1

This is the first panel someone sees if they’re not identified or authenticated. It’s helpful to indicate why the information is being collected, so people are less concerned about sharing their personal information.

2 Unknown Individual Panel 2

This panel is where the primary person can add or remove other watchers. Both new and returning individuals can access this panel, so avoid phrases like “Welcome Back!” that don’t apply to everyone.

3 Unknown Individual Panel 3

The title and text of the account creation panel can be changed here. This panel won’t appear for people who are logged in, so only applies to new attendees.

4 Known Individual Panel 1

This is the panel where the current service’s attendees are selected. In many cases, this will be the only panel a returning person sees.

5 Known Individual Panel 2

After clicking the Check-in button, this is the confirmation panel that displays. This configuration doesn't apply if you’ve also configured a _Redirect URL_ as described above.

You might have noticed the Lava in the title for _Known Individual Panel 1_. That’s right, you can personalize the experience by adding [Lava](https://community.rockrms.com/Lava) to any panel’s _Title_ or _Text_ content. Remember, not all the panels will know who the person is.

[](#additionalcheckinoptions)Additional Check-In Options
========================================================

While Rock ships with the check-in configurations we’ve found to be best practice for most organizations, there may be times when you need a different check-in procedure, such as checking in groups by birthdates or manually checking individuals out of events. Let’s look at the additional check-in options available.

[](#configuringbybirthdate)Configuring by Birthdate
===================================================

Configuring check-in by age range means less work for you when it comes to managing groups. Students simply move up into the next age group or grade without you having to update group names. There may be situations, though, where you want to check in groups by birthdate range, such as when you want to keep a group of children together as they get older. While this configuration allows groups to move together, it will require the group names to be continually updated as the grade level of the group changes.

Birthdate Range

![Check-in Birthdate Range](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/check-in-birthdate.png)

To configure check-in groups by birthdate range, follow these steps:

1.  Go to Admin Tools > Check-in > Check-in Configuration
2.  Select the configuration you want to modify.
3.  In the Areas and Groups section, click the Area of the group you want to modify. Rock displays the check-in options for that area.
4.  From the Inherit from dropdown menu, select either Check in by Age or Check in by Grade. Either option will display the birthdate range option in the group.
5.  Click Save.
6.  In the Areas and Groups section, click the group you’re modifying. The birthdate range option will now be displayed in the Check-In section.
7.  Select the beginning and ending birthdates from the calendars in each field to set the range.
8.  Click Save.

For more details on how Rock handles grades and promotion from one grade to the next, see our [Person and Family Field Guide](https://community.rockrms.com/documentation/bookcontent/5#grade).

[](#filtergroupsbygradeandage)Filter Groups By Grade And Age
============================================================

Rock ships with a Workflow Action called _Filter Groups by Grade and Age_. When implemented in the _Unattended Check-in_ workflow, this action can replace the _Filter Groups by Grade_ and _Filter Groups by Age_ actions within the Person Search activity.

Filter Groups By Grade And Age

![Filter Groups By Grade And Age](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/filter-groups-by-grade-and-age-v13.png)

A key feature of this action is that it has a _Prioritize Grade_ option. When this is enabled, a child who meets the age criteria for one group and the grade criteria for a different group will be automatically checked in to the grade-based group. For instance, let's say you have a preschool room (age-based) and a kindergarten room (grade-based). Kindergartners who are also 4 or 5 years old would normally get a choice between the two rooms, even though they really shouldn't be in the preschool room. The _Prioritize Grade_ setting would check them into the kindergarten room.

[](#manualcheckout)Manual Check-Out
===================================

Out of the box, Rock automatically “checks out” individuals when an event end time has passed (it doesn't actually mark them as checked out, they no longer appear in Check-in Manager). However, you can configure Rock to allow individuals to manually check out and set it up to print a check-out label.

Allow Checkout

![Allow Checkout](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/check-in-configuration-allow-checkout-v14.png)

To configure manual check-out, follow these steps:

1.  Go to Admin Tools > Check-in > Check-in Configuration
2.  Select the configuration you want to modify.
3.  In the General Settings section, check _Enable Check-out at Kiosk_ and/or _Enable Check-out in Manager_.
4.  Click Save.

Kiosk Check-Out
---------------

One of the ways to perform a check-out is through the kiosk, similar to checking in. After searching for and selecting a family, you'll see an option to check out individuals who are checked in, or to check in additional people. Simply tap _Check Out_ to select individuals to check out.

Kiosk Check-out

![Kiosk Check-out](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/kiosk-check-out-v13.png)

To print a label at check-out, follow these steps:

1.  Go to Admin Tools > Check-in > Check-in Labels
2.  Click to create a new check-in label or select an existing label to modify from the File List.
3.  Select Check-Out in the Print for Each dropdown menu.
4.  Click Save.

Check-Out Labels

![Print Check-out Label](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/check-out-label-v13.png)

Check-in Manager Check-Out
--------------------------

People can also be checked out using the [Check-in Manager](#checkinmanager). From the Check-in Manager Room Roster, navigate to the _Present_ tab and click the button as pictured below. This will check the person out.

Check-in Manager Check-out

![Check-in Manager Check-out](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/check-in-manager-check-out-v13.png)

If you ever need to undo a check-out, you can mark the person as _Present_ from the _Checked-out_ tab on the roster. In order to do this, you must enable the _Enable Mark Present_ option in the roster's block settings.

[](#autocheckin)Auto Check-In
=============================

Automatic check-in is an option that works with family check-in and creates a speedier check-in process. With this configuration, when a family checks in, Rock pulls information from their previous check-in based on a certain number of days back. For example, if you have a weekly service, you can set up auto check-in to search a family check-in record ten days back and pull the same options as their check-in for the previous week. This saves them time when checking in. If there is no check-in record within the designated number of days, Rock automatically selects the first eligible option for the family based on age, grade and room availability.

Auto Check-In

![Auto Check-In](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/auto-check-in-v13.png)

To set up auto check-in, follow these steps:

1.  Go to Admin Tools > Check-in > Check-in Configuration
2.  Select the check-in you want to modify.
3.  Click Edit.
4.  In the Check-in Type field, select Family.
5.  In the Auto Select Days Back field in the General Settings section, type in the number of days back you want Rock to search.
6.  Click Save.

With the above settings in place, the screen pictured below will appear right away for the Decker family based on their prior check-in information.

Auto-Selected Family and Locations

![Auto-Selected Family and Locations](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/auto-check-in-select-individuals-v10.png)

You'll notice the Change button for each family member in the screen above. Clicking that button will bring you to the page pictured below, where you can change the auto-selected location.

Change Location for Individual

![Change Location for Individual](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/auto-check-in-change-location-v10.png)

[](#barcodecheckin)Barcode Check-In
===================================

You can use barcode scanners in addition to your standard check-in methods as long as the barcode scanner you use supports keyboard wedge. You don't need to direct Rock to search for barcodes, though. Once installed, the scanner waits at the Welcome screen, ready to check people in by barcode key. You do, however, need to match up barcodes with person records in Rock, but this process is easy. See the steps below. When a person's barcode is scanned, Rock automatically identifies their family and checks them in. This system can be used for check-out as well.

Barcode Scanner Settings
========================

Rock expects a carriage return at the end of the scanned data, which must be automatically added by the scanner. To configure your Zebra/Motorola device, follow the instructions [here.](https://posguys.com/download/ls2208_enable_carriage_return.pdf) Consult the manufacturer's instructions for other brands.

Check-In Identifiers

![Check-in Identifier Field](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/person-profile-alternate-identifiers-v13.png)

To associate barcodes with people, follow these steps:

1.  Go to a person's profile page.
2.  Click the edit icon at the top right of their person profile page. (In past versions, alternate identifiers were stored on a family rather than an individual—please don't be confused! We're editing the person record itself now, not the family).
3.  Click to add an Alternate Identifier in the section shown above.
4.  Click in the Alternate Id field in the pop-up dialog to set its focus.
5.  Scan the barcode using the barcode reader. The barcode number will be captured in the Check-in Identifier field.
6.  Click Save on the pop-up dialog, and then be sure to also click Save on the Edit Person page. It will return you to their profile, and the check-in barcode should work for their family now.

Barcodes and the Welcome Screen
===============================

Barcodes can be scanned at the Welcome screen. One way to make this option clear to members approaching a check-in kiosk is to modify the button on the Welcome screen to indicate barcode scanning is an option. For example, you could customize the button to read "Scan or Search by Name". To customize the button on the Welcome screen, locate the Welcome page in Admin Tools > CMS Configuration > Pages. Click the button to view the page's block properties, then change the text in the _Check-in Button Text_ field to whatever you'd like the button to say. Click Save to save your changes.

Barcode Readers
---------------

Scanning a barcode printed on paper is easy. Reading a code presented on a mobile device screen is a different story. You’ll want to make sure that the reader you purchase is able to read a code from a device screen. These types of readers typically use cameras for the task instead of the old school laser.

While there are numerous readers on the market that will work, we have found the Zebra DS457 fixed mount scanners to work very well. You’ll often find this exact model from Motorola. In 2014 Zebra purchased Motorola’s scanning business. You’ll also sometimes see the same model from Symbol. Turns out Motorola owned Symbol…

Either way the scanner works well and can be flush mounted to a surface, or you can purchase a moveable arm stand (Symbol part 20-60136-02R) or a wall bracket (Zebra KT-145344-01).

Buyers Tip
==========

Often these readers do not come with a cable. Be sure to read carefully to see if it’s included. If not, you’ll most likely want to purchase Zebra part CBL-58926-04 USB Cable Assembly, 9-Pin Female Straight Scanner Connector, Straight Cable, 6' Length.

The built-in cameras on recent iPad models can read codes very well. If you’re using an iPad for check-in you won’t need to purchase a separate reader. You might want a reader even if you have an iPad, to support different types of check-in. A reader might be better for weekly services, while an iPad is definitely more practical for checking kids onto a bus.

Generating QR Codes
-------------------

Rock has a feature that lets you generate QR codes based on a person's Alternate Identifier using `GetQRCode.ashx`. In most cases you'll probably want to include the QR code in a communication to the person, so they can have it on their phone when they go to check in.

Including a QR code in your communication (or elsewhere) is fairly easy. The key is that you provide a value for the `data` parameter. This is what's used to create the content of the QR code. The below example can be copied into an email, using the person's Alternate Identifier for the `data` parameter. In this example you can control the size of the QR code image by changing the `dim` variable value.

```
{% assign dim = 200 %}
{% assign altId = Person | GetPersonAlternateId %}
<img src="{{ 'Global' | Attribute:'PublicApplicationRoot' }}GetQRCode.ashx?data={{ altId }}" height="{{ dim }}" width="{{ dim }}">

```

[](#rfidcheckin)RFID Check-In
=============================

You can also use RFID readers during check-in. Setting up RFID is the same process as setting up a barcode; you’re just using a different input type. To work with Rock, your RFID reader must support keyboard wedge. If your device doesn’t support keyboard wedge, the free Smartlux 232 Key utility can be used to emulate this functionality. Once the RFID is associated with a family, there is no need for further configuration. 232 Key captures information for whichever screen has focus. For example, a member can scan their RFID card from the welcome screen, and Rock will take them through the check-in process.

[](#checkintitles)Check-In Titles
=================================

You can customize the titles on your check-in screens to fit with your organization branding. This is an advanced setting in the Page Map configuration.

Check-In Titles

![Check-in Titles](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/check-in-titles-v13.png)

To create unique check-in titles, follow these steps:

1.  Go to Admin Tools > CMS Configuration > Pages
2.  Drill down in the navigation tree to the page you want to modify.
3.  Click Edit.
4.  Type the custom title in the Page Title field. You can also specify a title for internal use in the Internal Name field, and a browser title in the Browser Title field.
5.  Click Save.

[](#configuringforspecialneeds)Configuring for Special Needs
============================================================

You might have separate check-in locations for children with special needs. As long as the person is identified as having special needs in Rock, you can ensure they only get checked in to special needs locations.

You’ll start with a person attribute that you’ll need to identify special needs people. This can be a simple Boolean type attribute.

Special Needs Person Attribute

![Special Needs Person Attribute](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/special-needs-person-attribute-v12.png)

Next, you’ll need to create a group attribute at the group type level (Admin Tools > General Settings > Group Types) to identify special needs groups. In the below example we added a “Special Needs” Boolean attribute to the _Check in by Grade_ group type. This lets us sort special needs people into different groups based on Grade. You could instead add it to the _Check in by Age_ group type, which is inherited by _Check in by Grade_ and _Check in by Ability Level_.

Special Needs Group Attribute

![Special Needs Group Attribute](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/special-needs-group-attribute-v12.png)

With both the person and group attributes in place, you’ll need to modify the _Unattended Check-in_ workflow type that ships with Rock. This workflow type can be found in Admin Tools > General Settings > Workflow Configuration under the _Check-in_ category. Edit the workflow to add a new _Filter Groups by Special Needs_ action type to the _Person Search_ activity. The new action should be after the existing _Load Groups_ action.

Special Needs Workflow Action

![Special Needs Workflow Action](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/special-needs-workflow-action-v13.png)

Below is sample configuration for the new activity.

Special Needs Workflow Action Configuration

![Special Needs Workflow Action Configuration](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/special-needs-workflow-action-config-v12.png)

1 Person Special Needs Attribute

This is where the person attribute that was created earlier will be entered. This is how Rock will know if the person checking in has special needs.

2 Group Special Needs Attribute

The attribute that was added to the group type configuration should be entered here. This is how special needs check-in groups will be identified.

3 Remove (or exclude) Special Needs Groups

Set this to “Yes” to ensure that special needs groups can’t be checked into by people who are not special needs. If set to “No” then it’s possible non-special needs people will check into special needs groups.

4 Remove (or exclude) Non-Special Needs Groups

Setting this to “Yes” will ensure that special needs people can only check into special needs groups. Setting this to “No” would allow special needs people to check into non-special needs groups.

5 Remove

The above two settings let you either remove or exclude groups. This setting is where you determine whether those groups are removed (set to Yes) or excluded (set to No). If removed, they will not appear in check-in according to the above settings.

Lastly, you’ll need to update your check-in settings under Admin Tools > Check-in > Check-in Configuration. Note in the screenshot below that we have separate groups for special needs, with the _Special Needs_ attribute set to "Yes".

Special Needs Check-in Configuration

![Special Needs Check-in Configuration](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/special-needs-check-in-configuration-v12.png)

With these configuration settings in place, you’re ready to start checking in special needs populations.

[](#mobilecheckin)Mobile Check-in
=================================

_Mobile Check-in_ lets people check in to your services and events using their mobile phone. Rock will automatically determine where the person is physically located. Based on the person’s location, Rock will know which services and areas are available for check-in. As you’ll see, the process is very similar to traditional kiosks, but entirely contactless and mobile-friendly.

Before You Get Started
======================

Mobile Check-in requires that you have SMS messaging configured in your system. See our [Communicating With Rock](https://community.rockrms.com/documentation/bookcontent/8/) guide for more information.

[](#mobilecheckinoverview)Mobile Check-in Overview
==================================================

Rock ships with the _Mobile Check-in Launcher_ block located at `https://yoursite/mobilecheckin`. If Rock can’t identify the person right away, they’ll be asked to identify themselves.

Identification

![Identification](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/mobile-launcher-identify-person-v11.png)

As you can see above, the person has different options for identifying themselves. They can use _Phone Lookup_ or choose to do a traditional _Login_. For full details on the _Phone Lookup_ process, see the [Phone Number Lookup](https://community.rockrms.com/documentation/bookcontent/9#phonenumberlookup) chapter of the [Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9/)

After the person has been identified they’ll need to give permission to use their device’s location. Or, if location services have been disabled (see [Setting Up Mobile Check-in](#settingupmobilecheckin)) the person will be asked to select a campus instead.

Select Campus

![Select Campus](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/mobile-launcher-select-campus-v13.png)

If location services have been disabled, then the person will see the screen pictured above. Otherwise, they will see the screen pictured below.

Allow Location

![Allow Location](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/mobile-launcher-allow-location-v11.png)

After clicking _Next_ above, a pop-up window will appear where the person can _Allow_ the use of their location. Once permission has been granted, the next screen greets the person by name and allows them to proceed with the check-in process.

Check-in Start

![Check-in Start](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/mobile-launcher-start-checkin-v11.png)

The screen above is where the process will start if the person has previously identified themselves using this device and allowed location access in the past.

Clicking the _Check-in_ button above will take the person to the next screen pictured below. This may look familiar because it’s very similar to other check-in methods.

Select Individuals

![Select Individuals](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/mobile-launcher-select-people-v11.png)

Noah and Alex have been selected for check-in using the screen above. Clicking _Next_ will bring the person to the next step in the process, pictured below, where they can select the service time.

Select Times

![Select Times](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/mobile-launcher-select-time-v11.png)

After selecting the time above, the person will be able to select which room to check each person into.

Select Location

![Select Location](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/mobile-launcher-select-room-v11.png)

Once a room has been chosen for each person, the check-in process is complete. At this point a QR code for check-in labels appears, which can be scanned via the [iPad application](#ipadapplication) using the iPad's built-in camera. A person can check in from the parking lot, and then go to a physical location where they can scan the code and get their labels.

For iPads Only
==============

As noted above, the mobile check-in QR code can only be scanned and used for label printing if you're using the [iPad application](#ipadapplication) and the iPad's built-in camera.

Checked-in

![Checked-in](https://rockrms.blob.core.windows.net/documentation/Books/10/1.11.0/images/mobile-launcher-qr-code-v11.png)

If the person clicks the _Done_ button pictured above, or if they close the window and return to the page later the same day, they will see the screen pictured below. Here they can choose to check in additional people or use the QR code to print labels.

QR Code and Additional Check-in

![QR Code and Additional Check-in](https://rockrms.blob.core.windows.net/documentation/Books/10/1.11.0/images/mobile-launcher-add-more-checkin-v11.png)

A single QR code is generated for all the people being checked in. As individuals are added the QR code graphic will become more complex. Again, you'll need the [iPad application](#ipadapplication) and the iPad's built-in camera to scan the QR code for label printing. The iPad Device in Rock will need to have _Has Camera_ enabled for this to work.

[](#settingupmobilecheckin)Setting Up Mobile Check-in
=====================================================

Getting your system set up for _Mobile Check-in_ is easy because it uses many of the same pages and configurations you probably already have in place. Many of the same concepts described throughout this guide will still apply. In this section we’ll cover the specific things you’ll need to know.

First, you’ll need to have a _Google API Key_ configured for Google maps. See the [Global Attributes](https://community.rockrms.com/documentation/bookcontent/9#globalattributes) section of the [Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9/) for instructions on setting that up. The _Google API Key_ is required to designate the check-in area, which we’ll talk about next.

Secure Your Site
================

You must have HTTPS enabled on your server for geolocation features to work. See the [Other Considerations](https://community.rockrms.com/documentation/bookcontent/1#otherconsiderations) section of our [Internal Hosting](https://community.rockrms.com/documentation/bookcontent/1/) guide for information on setting this up.

With the _Google API Key_ in place, your next step will be to create a new Device. Navigate to Admin Tools > Check-in > Devices and add a new Device as pictured below.

Device Configuration

![Device Configuration](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/mobile-launcher-device-setup-v13.png)

1 Name and Campus

You’ll need to set up a Device for each of your campuses. If you only have one campus, then you’ll only need one Device. You can think of this as a “virtual kiosk” device for the campus. While it’s technically possible to have multiple virtual kiosks for a single campus, we advise against this due to geolocation constraints (see the Geo-fence item below).

2 Print Settings

Mobile Check-in is a little different from other check-in methods because the device being used may not be connected to your network and is not connected to your printer. Keep the “Printer” setting blank if using the configuration pictured above. For organizations using server-based location-printing, you can set “Print Using” to _Location Printer_ and “Print From” to _Server_.

3 Geo-fence

This is where you’ll select the area where a person needs to be located when they check in from their device. If the person tries to check in outside of this area, they’ll see a message indicating they’re too far away. Typically, this area will cover your campus, parking lot, and a bit of a buffer zone to account for potential location inaccuracies. Keep in mind a person’s location can be inaccurate by as much as ¼ mile depending on factors like their device, their mobile network, etc.  
  
It’s very important that these geo-fences do not overlap between different campuses. If a person tries to check in from within an overlapping area, Rock won’t know which campus the person needs and will pick the first one it finds.

4 Locations

Add all the Locations at the campus that a person can check in to using this virtual kiosk.

With the Device configuration in place, you’ll need to add it to the _Mobile Check-in Launcher_ block’s settings. This is how the block knows which Device configuration to use when a person goes to check in. Navigate to Admin Tools > CMS Configuration > Pages | External Homepage > Support Pages > Mobile Check-in Launcher to access the block and its settings.

Mobile Launcher Block Settings

![Mobile Launcher Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/mobile-launcher-block-settings-v13.png)

1 Enabled Devices

This is where you can add one or more of the virtual kiosk Devices we talked about above. In this case we only have one campus, so only one Device is listed. If you have multiple campuses, they can all be listed here. This lets you use the same page (and block) for all of your campuses. The block will choose the campus based on the person’s location relative to the _Geo-fence_ configured for that campus’s Device, unless location services have been disabled (see below) in which case the person will select a campus.

2 Theme

Just like other check-in methods, you can select which [Check-in Theme](#themes) you want to use for _Mobile Check-in_. In this case we’ve chosen the _Electric_ theme, which is the theme pictured in the examples from the section above. Before choosing a theme, ensure it is mobile-friendly and will work on small screens. If you're not sure, we suggest using the _Electric_ or _Aero_ themes.

3 Check-in Configuration

In this example we’ve configured the block for our Weekly Service Check-in. This has the same effect as choosing the _Check-in Configuration_ used with other check-in methods.

4 Check-in Areas

Again, if you’ve used other check-in methods in the past then you’re probably familiar with this setting. Here you’ll select which areas are available for _Mobile Check-in_.

5 Disable Location Services

If location services are disabled, then the person checking in will not use their device's location during the check-in process. Instead, the person will be asked to select a campus. The selected campus will be used to find a matching device from the _Enabled Devices_ block setting.

As you’ve probably noticed by now, _Mobile Check-in_ isn’t very different from other check-in methods. If you need more details on the above settings, see the [Administration Screen](#theadministrationscreen) chapter, and related chapters, of this guide.

Additional Settings
===================

The block's configuration (the icon) has some other settings you might want to review. For instance, you can change the text that's displayed on each of the screens. These text fields are Lava-enabled, making it easy to customize and personalize each step of the process.

iPad Has Camera
===============

When you're configuring your iPad as a Device in Rock, be sure to enable the _Has Camera_ setting so Rock knows it can read the QR codes.

[](#handlingotherscenarios)Handling Other Scenarios
===================================================

The _Mobile Check-in_ process relies on many factors we can’t control. We don’t know what devices people are using, what settings those devices have or how people will try to check in. Rock knows how to handle each of these situations to make your job easier, and to help those using the feature.

Services Not Scheduled
----------------------

Sometimes people might arrive a little too early, or a little too late. If someone tries to check in during a time when there are no services scheduled, they’ll be shown a message letting them know.

No Services Ready

![No Services Ready](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/mobile-launcher-no-services-v11.png)

Device Location Disabled
------------------------

If the person denies location access, as described in the Overview section above, they’ll see the screen pictured below. Clicking the _Next_ button will return them to the screen which prompts them to enable location services.

Device Location Disabled

![Device Location Disabled](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/mobile-launcher-no-device-location-v11.png)

Outside of Geo-fence
--------------------

Sometimes a person might try to check in before they leave the house. Or their device’s location may be a little inaccurate, making it look like they’re not close enough to the campus. In either case, they’ll see the screen pictured below.

Outside of Geo-fence

![Outside of Geo-fence](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/mobile-launcher-outside-location-v11.png)

[](#checkincelebrations)Check-in Celebrations
=============================================

If you’ve accomplished a goal, you deserve to celebrate it! Check-in celebrations are a recognition the person sees (and hears) when their check-in results in an achievement being earned. This is a great way to track and encourage engagement at your organization.

![Check-in Celebration](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-celebration-v13.png)

The check-in confirmation screen shows more than just a celebration when an achievement has been earned. The person can also see their history of earned achievements, and their progress toward the next time they will earn an achievement. Let's break down all the information below.

Check-in Celebration Screen

![Check-in Celebration Screen](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/checkin-celebration-page-v13.png)

1 Celebrations

This area shows the achievements that were completed with the current check-in. In this example, Noah Decker’s check-in resulted in two achievements being earned and celebrated.

2 Check-in Confirmation

The standard check-in confirmation displays information about the check-in (location, schedule, group, etc.).

3 In Progress

Noah has earned a star for each time the achievement’s goal has been met. The last star on the end isn’t filled in because Noah is currently working toward earning that achievement. This happens because the achievement was configured with a _Max Accomplishments Allowed_ set to 10. The screen shows that he has attended six out of the ten weeks needed to get the next star.

4 Earned Achievements

The person checking in can see the prior achievements they’ve earned and how many times they’ve been earned (the number of filled in stars). This gives a history of their accomplishments.

How a celebration is displayed is built into each check-in theme. Each core theme that ships with Rock has its own celebration, as detailed below. Each celebration has both an animation and a sound effect, giving the person something to see and hear. Your custom themes will need to implement their own celebrations using CSS and JavaScript.

<table><tbody><tr><td><figure><a href="" class="book-image"><img src="https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/adventure-celebration-v13.png" alt="Adventure Kids"></a></figure></td><td style="vertical-align:middle ; padding:15px"><strong>Adventure Kids Theme</strong><br>Watch out for the lion that jumps across the screen with a mighty roar!</td></tr><tr><td><figure><a href="" class="book-image"><img src="https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/aero-celebration-v13.png" alt="Aero"></a></figure></td><td style="vertical-align:middle ; padding:15px"><strong>Aero Theme</strong><br>See a colorful display of confetti bursting from the screen as trumpets proclaim the achievement has been earned.</td></tr><tr><td><figure><a href="" class="book-image"><img src="https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/blue-crystal-celebration-v13.png" alt="Blue Crystal"></a></figure></td><td style="vertical-align:middle ; padding:15px"><strong>Blue Crystal Theme</strong><br>Watch as blue and white confetti falls to the sound of majestic trumpets.</td></tr><tr><td><figure><a href="" class="book-image"><img src="https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/electric-light-celebration-v13.png" alt="Electric"></a></figure></td><td style="vertical-align:middle ; padding:15px"><strong>Electric Theme</strong><br>A burst of multi-colored confetti rains down the screen as trumpets play to celebrate the achievement.</td></tr><tr><td><figure><a href="" class="book-image"><img src="https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/electric-celebration-v13.png" alt="Electric (Dark Mode)"></a></figure></td><td style="vertical-align:middle ; padding:15px"><strong>Electric Theme (Dark Mode)</strong><br>Trumpets sound as a flurry of blue and white confetti pops from the screen.</td></tr><tr><td><figure><a href="" class="book-image"><img src="https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/park-celebration-v13.png" alt="Park"></a></figure></td><td style="vertical-align:middle ; padding:15px"><strong>Park Theme</strong><br>Balloons of many different colors float up the screen while trumpets play.</td></tr></tbody></table>

  

[](#settingupcelebrations)Setting Up Celebrations
=================================================

Check-in celebrations occur when an achievement’s goal has been met for the person checking in. So, before you get started, you’ll need to have at least one achievement type in place. Because we’re working with check-in, the achievement type you pick will most likely be tied to a streak.

Streaks and Achievements
------------------------

The first thing you'll need to do is set up the streak type you'll be using under People > Streaks. The example pictured below will track weekly attendance.

Streak Type Configuration

![Streak Type Configuration](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/streak-type-config-for-celebration-v13.png)

1 Linked Activity

Setting this to _Any Attendance_ will track attendance in any group. For instance, this would count both weekly service check-ins and small group attendance.

2 Frequency

Here you can choose either _Daily_ or _Weekly_. In this example we're using _Weekly_ to track how many weeks a person has attended.

With a streak type in place, we can now configure achievements by navigating to People > Achievements. As it relates to check-in, you’ll probably want to use one of two basic kinds of achievements.

The first type is for attending a certain number of times in a row. For instance, you might have an achievement that’s earned if the person attends ten weeks in a row. Your achievement type would be set up as pictured below.

Achievement Type Configuration - Consecutive

![Achievement Type Configuration - Consecutive](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/achievement-type-consecutive-config-for-celebration-v13.png)

1 Achievement Event

We want the achievement to be earned when the person attends a certain number of times in a row, so this is set to _Streaks: Consecutive_.

2 Streak Type

Because we're using streak data to drive the achievement, the streak type needs to be identified. This would be the weekly streak type we configured above.

3 Number to Achieve

In this case we want the achievement to be earned when the person attends ten times in a row, so this is set to 10. Of course, you could use a different _Number to Achieve_ if you wanted to track a different number of consecutive attendances.

The second type of achievement you might use would track attendance over a certain period of time. For instance, you might configure an achievement that’s earned if the person attends twenty weeks within a year. The achievement type in that case would be configured as shown below.

Achievement Type Configuration - Accumulative

![Achievement Type Configuration - Accumulative](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/achievement-type-accumulative-config-for-celebration-v13.png)

1 Achievement Event

This is set to _Streaks: Accumulative_ because we want the achievement to be earned when the person accumulates twenty attendances.

2 Streak Type

This achievement can use the same streak type as the prior example because we're still looking at attendances by week.

3 Number to Accumulate

This is set to 20 to show that we want the achievement to be earned when the person has attended twenty weeks.

4 Timespan in Days

This field is used to indicate that the twenty attendances we're looking for need to occur within a single year (365 days).

Keeping the Streak Alive
========================

People will get excited as they see their progress toward earning achievements. But some might need a little grace if they miss a week through no fault of their own. In those cases, you can use the Engagement Exclusion Map on a person’s streak to forgive missed attendances. This is the best way to keep an unbroken streak going if the person was unable to attend a given week.

For full details on setting up streaks and achievements, check out our [Engagement](https://community.rockrms.com/documentation/bookcontent/39#streaksoverview) guide.

Check-in Configuration
----------------------

Once you have an achievement type configured, head to your check-in configuration at Admin Tools > Check-in > Check-in Configuration. This is where you’ll connect each check-in type to one or more achievement types. For instance, you might track some achievements for your volunteer check-in, and others for weekly service check-in.

Check-in Configuration for Achievement Type

![Check-in Configuration for Achievement Type](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/check-in-configuration-for-achievement-type-v13.png)

Each achievement type you add will trigger a celebration if the check-in results in the achievement being earned. Even if the check-in doesn’t result in a celebration, the person will still see their progress toward each achievement type you’ve configured here.

That’s all you need for check-in celebrations to work. Once you’ve added achievement types to your check-in configuration, you’ll start seeing them in check-in right away. However, there’s more you can do to customize the experience.

Achievement Type Configuration
------------------------------

The achievement type itself has some configuration you’ll want to know about. Navigate to People > Achievements then select an achievement type to edit. Under the _Advanced Settings_ you’ll find configuration items for celebrations.

Achievement Configuration for Celebrations

![Achievement Configuration for Celebrations](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/achievement-type-config-for-celebrations-v14.png)

1 Image

The image you upload here will be shown on the achievement's card when it’s displayed on the check-in confirmation page. In our examples we’ve used trophies and medals, but you can use any image you want. If this is blank, then no image will be shown.

2 Alternate Image

Here you can add a second image to the achievement type. Currently Rock doesn't ship with a place to use this, so it would be for custom purposes only.

3 Custom Summary Lava Template

This is an advanced setting that lets you replace the default achievement summary with a Lava template of your own. You won’t need to do anything here unless you want a completely customized way of displaying achievement information on the check-in confirmation screen.

Check-in Theme Configuration
----------------------------

To change the colors of the balloons or confetti for each theme's celebration, navigate to Admin Tools > CMS Configuration > Themes and expand the _Celebrations Configuration_ area for the selected theme. Here you can choose what colors to show. You can change the colors to match your organization’s branding, or you can pick colors that you think best fit the check-in theme.

Theme Configuration for Celebrations

![Theme Configuration for Celebrations](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/check-in-theme-edit-celebration-colors-v13.png)

Don’t forget that custom themes can have their own celebrations. Creating your own celebrations might require some help from a developer, but it would allow you to have an entirely custom celebration experience.

[](#appendixadvancedoptions)Appendix - Advanced Options
=======================================================

This chapter is intended only for those who need to configure some of the advanced options that are not enabled out-of-the-box in Rock.

[](#preventduplicatecheckin)Prevent Duplicate Check-in
======================================================

By default, when you enable the [Prevent Duplicate Check-in](#settings) option for a check-in _Area_, it affects all groups under that area. If you find yourself in a situation where you really only wanted one specific group type to be affected, don't check this option under the check-in area. Instead, you can add a Boolean attribute with a key of `PreventDuplicateCheckin` to the group type under Admin Tools > General Settings > Group Types. You can even add it to a group type that is inherited by other group types.

The underlying _Filter By Previous Checkin_ workflow action used by the check-in system always checks for this specific attribute and value if the [Prevent Duplicate Check-in](#settings) option is not already checked. The end result is that you can control which check-in areas do not allow re-checking-in instead of using the "all or nothing" option within Check-in Configuration.

An example of this might be you wanting to prevent duplicate check-in for kids/youth (to prevent label reprinting shenanigans) but allowing it for Classes/Events where duplicate check-in is a great way to reprint a name tag for an adult if the printer ate it or similar.

[](#labelfieldtypeingroupattributes)Label Field Type in Group Attributes
========================================================================

The _Label_ field type is an advanced option for group attributes that you may find helpful in specific situations. For example, you could run into a scenario where you have a group that needs labels printed but is of a group type that doesn't print labels. Rather than create a new group type, you can create a group attribute with the field type _Label_ that the groups of that type can use. If a group selects a Label value, Rock will print that label at check-in.

To add the Label attribute, go to the _Group Attributes_ section of the group type's detail screen, and click to add a new attribute. For the _Field Type_, select "Label" and click Save. Now that the group attribute is available, individual groups can choose the type of label they want printed in the _Edit_ screen of the _Group Viewer_.

In Addition...
==============

Note: This label prints _in addition to_ the labels printed for the area, or group type.

[](#checkinroomthreshold)Check-in Room Threshold
================================================

Although Rock examines room capacity when starting the check-in process to avoid displaying over-capacity rooms during check-in, there is another feature that will double-check the capacity again before allowing a person to check-in. This feature will add a bit more strain on your system, so you should consider wisely before enabling it on your system.

Absolute threshold
==================

When attempting to check-in a child using the manager override, please note that even your manager cannot bypass the location's "absolute" threshold... and that makes your local fire department happy too.

Enabling the Threshold
----------------------

First, you will need to have each room's threshold set.

Go to Admin Tools > General Settings > Workflow Configuration, edit the workflow called "Unattended Check-in", expand the _Save Attendance_ activity and expand the _Save Attendance_ action. You will see a setting for _Enforce Strict Location Threshold_. To enable, simply change the response from No to Yes. Once you are done be sure to hit save before exiting the page.

Save Attendance

![save attendance](https://rockrms.blob.core.windows.net/documentation/Books/10/1.15.0/images/check-in-threshold-settings-v13.png)

Just before the attendance record is saved, the action verifies the room count again. If a room is at capacity, a warning message is created for people trying to check in.

Absolute threshold
==================

NOTE: The formatting and layout of the check-in 'warning' messages can be seen in the check-in area's "Success Template" under Admin Tools > Check-in > Check-in Configuration.