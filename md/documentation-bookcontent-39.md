# 
from:documentation-bookcontent-39.html

#### Updates for McKinley 15.0

Below is a summary of the updates for this version.

*   The Sign-Ups feature lets you quickly and easily register for short-term serving opportunities

#### Updates for McKinley 10.0

Below is a summary of the updates for this version.

*   Added existing Connections chapters.
*   Added new chapters for Steps.
*   Added new chapters for Streaks.
*   Added details to describe single-campus behavior.
*   Updated Connection Request Transfer feature.
*   Added capability to enter attribute values during connection request signup.
*   Added Connection Campaigns.

#### Updates for McKinley 11.0

Below is a summary of the updates for this version.

*   Added option to apply security to individual Connection Requests
*   Added new Steps Automation job to add Steps for people in a Data View
*   Added support for Connection Activity Attributes
*   Future Follow-Up Connection Requests can be set back to Active and can launch workflows after the follow-up date has passed

#### Updates for McKinley 12.0

Below is a summary of the updates for this version.

*   New setting on the Connection Type which can optionally specify a particular page to use when viewing details for requests of that type
*   Added Achievements features that allow any entity to earn achievements
*   Achievements can be tracked using Interactions or Step Program data, in addition to Streak data
*   Dates for Steps can be either optional or required
*   Multiple changes to the look and feel of Connections, including a new Board view, an updated List view and an improved view of individual requests
*   Added a new 'Achievement' Badge Type for displaying Achievement badges
*   Added 'Advanced Settings' to Connection Opportunity configuration, allowing certain options to be hidden when working with requests
*   A new 'Future Follow-up Complete' action is automatically added to Connection Requests that reach their future follow-up date
*   A history of changes can be viewed for each Connection Request by clicking the "View History" link on the request

#### Updates for McKinley 13.0

Below is a summary of the updates for this version.

*   The history of a person's Steps data can be viewed on the History tab of the Person Profile page
*   The status of Connection Requests can be updated automatically by setting up Status Automation rules on the Connection Type
*   Streaks and Achievements can now be driven by a person's giving data

#### Updates for McKinley 14.0

Below is a summary of the updates for this version.

*   The Connection Request list view has a special Bulk Update feature that let's you update things like the status, state or connector for multiple requests at once
*   The order in which Connection Status Automations are processed is now configurable
*   The new Step Flow feature gives you visual insights into engagement patterns in your Step Programs
*   The manual workflows that are launched from a Connection Request can now be displayed or hidden based on the Status of the request

[](#welcome)Welcome
===================

> "Without continual growth and progress, such words as improvement, achievement, and success have no meaning."
> 
> \-Benjamin Franklin

The ability to grow and adapt in an ever-changing world is a driving factor behind any successful organization. As individuals we also strive for growth, but you can only go so far on your own. At any level, growth requires engagement. That may sound straightforward on the surface, but successful engagement can be a very complex and long-term undertaking.

It’s often better to break up complicated tasks into manageable pieces instead of trying to tackle everything at once. That’s why Rock enables you to approach engagement from different angles using three sets of complimentary tools. With Connections you can move people from being disconnected to being plugged in. With Steps you can lay out a walkable path to the top of the mountain. With Streaks you can monitor engagement patterns. This book will show you how the power of these engagement features can help ensure the growth of your organization and the individuals within it for years to come.

[](#connections)Connections
===========================

Many of your organization's strategies are about helping people move from one state to another. Often this movement isn't a straight line, but more of a meandering path. When the path takes an extended period of time it's possible for people to fall through the cracks.

This is where the Connections tool comes to our rescue. While workflows can be a great help by connecting people through automated processes, they can quickly become complicated and unwieldy in complex situations. The Connections tools provide a backbone that allows you to build advanced processes. As you'll soon see, workflows still play an important role in Connections but more so as an extension of the foundation instead of the foundation itself. But enough talk... let's see for ourselves what the Connections feature can do.

[](#10000footviewofconnections)10,000 Foot View of Connections
==============================================================

When we started to work on the Connections features, we were trying to solve a specific problem: connecting people who want to serve. As we progressed through the ideation process, we started to see that this specific problem was really a reoccurring pattern inside of an organization. What we mean is, these features could be used in lots of different ways. With that realization we made the tool to be configurable for many different types of connection processes. Out of the box it's configured for a single _Involvement_ (fancy term for serving) process, but we encourage you to build your own connection processes. You're not on your own, though; we'll show you how later.

In most connection processes the goal will be to take a person who wishes to be connected to a high-level _Opportunity_ and walk them through a series of steps or activities until they can be connected to a specific group. This will make more sense if we look at an example. Let's consider the _Involvement_ connection type.

Connections Overview

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connections-overview-diagram.png)

**Connection Type**

Remember that you can create as many connection types as you want. Each type should represent a specific organizational process.

**Connection Opportunities**

Each connection type can have numerous opportunities. In the involvement type these opportunities would be the high-level ministry areas where someone might be interested in serving (Ushers, Greeters, Parking Lot, Children's, etc.).

Connection Requests

As people enter the connection process a _Connection Request_ is created. This request could be generated by the individuals themselves through the website or entered manually by staff or volunteers.

**Opportunity Connectors**

Each opportunity will have a group of connectors (staff members, team leaders, etc.) that work with the individual request through the connection process. As you'll see, next they can generate multiple activities and change the status of the request as they move the individual through the process.

**Placement Groups**

The goal in many connection processes is to ultimately get the person to a specific group. For the involvement process this may be a serving team, but other connection types could place someone in a specific small group.

Okay, now that we've seen all the components of a connection process, let's learn a bit more about the lifecycle of a request. Requests have a couple of different properties that allow us to describe their current state and see a history of previous activities. Each of these properties is discussed below.

[](#state)State
===============

The state of a request describes the standing of the request. There are only four options for state:

*   **Active:** The request is currently being worked.
*   **Inactive:** The request has either been completed or canceled.
*   **Future Follow-up:** Often requestors will need more time before they are ready to be fully connected. The future follow-up state allows us to _freeze_ the request until a specific date. This is helpful as it allows the connector to remove it from view until the specified follow-up date. The state will be changed back to Active by the _Connection Request Workflow Triggers_ job based on the follow-up date.
*   **Connected:** The request has completed the full connection process.

[](#status)Status
=================

You can define as many different statuses as you'd like for a request. These statuses are defined for each connection type. The statuses that have been configured for the Involvement connection type include:

*   **No Contact:** This is the initial status of a request. It basically means nothing has been done with the request.
*   **In Progress:** Once a connector has been assigned and communication has been attempted, then the status should be changed to _In Progress_.

Remember you can customize these statuses and add your own. For instance, you could have a status for _In Training_ or _Complete_.

You can automate the process of moving individuals from one status to another. See the [Automating Status Changes](#automatingstatuschanges) section below for details.

[](#activities)Activities
=========================

Activities are a listing of events that have occurred during the process of connecting the requestor. You can customize what these activities are. The involvement connection type is pre-configured with the following activities:

*   **Called:** A phone call was made, and the requestor answered.
*   **Called Left Message:** Pretty much says it all.
*   **Called No Answer:** You can probably figure this one out too.
*   **Contacted Waiting for Response:** Some type of contact was made, and the request is waiting for a reply.

While each request will only have one value for state and status, they can have as many activities as needed.

Now that we understand the properties of requests, let's see them in action.

Connection Request Lifecycle

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-lifecycle.png)

1**New Connection**

Sara Simmons makes a request from the website to get connected into the ushers opportunity. From this, a new connection request is created with the _State_ of _Active_ and the _Status_ of _No Contact_. Also note that at this point no _Connector_ is assigned.

2**In Progress**

After seeing it, Alisha Marble assigns herself to the new request and makes a first attempt at contact with the requestor. Unfortunately, Sara was at her daily spin class and missed the call. At this point, Alisha changes the status of the request to _In Progress_ and adds an activity of _Called No Answer_.

3**Future Follow-up**

In a few days, Alisha tries calling again and this time is able to reach Sara. After talking, Sara decides that it might be best to wait four weeks until things settle down at the hospital where she works. Alisha now changes the state to _Future Follow-up_ with a follow-up date of 9/15. At this point the request will be hidden from her list of requests until 9/15.

4**Connected**

On 9/15 the request pops back up on Alisha’s radar and she makes another call to Sara. During this call they conclude that Ushering at the noon services makes the most sense for Sara's schedule. Alisha then connects her to the group and marks the request _Connected_.

5**Picks Group**

As a part of the _Connected_ step, Alisha picks the group to connect Sara to. While the connection process doesn't have to always end with placing someone in a group, it will in most cases.

6**Workflow**

We promised you workflows and here's a taste of them. Workflows can be set up to automatically launch when certain conditions of the request are met. In this case a workflow was defined to launch whenever someone was _Connected_ that sends out some training materials. We'll look more at workflows soon.

[](#theroleofcampus)The Role of Campus
======================================

Campus plays an important role in the connection process, particularly for multi-campus sites. As requests come in, they will be attached to a campus. Also, the connectors and assigned connection groups can be partitioned by campus. We'll see how to set this up later. For now, just know that the connection opportunities can be shared for all campuses while still providing support for campus-specific requests.

[](#spottingconnectionsamileaway)Spotting Connections a Mile Away
=================================================================

Connection requests are shown prominently on the person profile page to help give you an overview of a person's connection at a glance. Each connection request listed on the profile page lists the connection type, opportunity, campus and status.

Person Profile Connection Requests

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-requests-on-person-profile-v14.png)

You can edit the settings on this block to choose which connection requests to show based on their State.

[](#workingwithrequests)Working With Requests
=============================================

The connections tools can be found under People > Connections. This page gives you an overview of your organization’s Connection Requests, grouped and summarized by each Connection Opportunity and Connection Type. This is typically how you’ll access individual Connection Requests for specific people, which you can view as either cards or in a list format, but we’ll get to that in a bit. First, let’s take a look at the _Connections_ page to see what we have to work with.

Request List

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-page-v13.png)

1 **Color Key**

Each Connection Opportunity card has colored circles with numbers in them, and this key tells you what those colors mean. Hover your mouse over the circles in the key to see their description.

*   Blue – Assigned to You
*   Yellow – Unassigned Item (not assigned to anyone)
*   Orange – Critical Status (e.g., person has not been contacted)
*   Red - Idle (no activity in a configurable number of days)

2 **Connection Type Configuration**

Click the icon to manage your Connection Types. Rock admins and those in the RSR – Connection Administration security role will have access to this. We’ll talk more about configuring connection types [below](#configuringconnectiontypes).

3 **Favorites**

You can “favorite” individual connection opportunities by clicking the star in the top right corner of the opportunity’s card. Favorited opportunities will automatically appear at the top of the page under the _Favorites_ heading, so you don’t have to go hunting for the ones you work with most often.

4 **My Active Opportunities**

If you turn this on, the rest of the page below will be updated to show only opportunities with active requests that are assigned to you.

5 **Campus**

Selecting a campus here will filter requests to show only those from that campus. When you click on a connection opportunity, the campus you select will automatically be applied as a filter when viewing the list (or board) of requests.

6 **Connection Types**

Below your Favorites (if you have any set) you’ll see headers for each Connection Type. Connection Opportunities are displayed as cards below the name of the Connection Type to which they belong. In this example we have two Connection Types displayed, one for _Involvement_ and one for _Special Mission Trips_.

7 **Connection Opportunity Cards**

Each Connection Opportunity is displayed as a card. You can click on these cards to access details about the opportunity. We’ll show you what that looks like below.

8 **Opportunity Badges**

At the bottom of each card, if applicable, you’ll see colored badges with a number that shows the total count of requests in a particular state/status (see #1 above). If there are no requests, or if all the requests have been closed out, you won’t see any badges for that opportunity.

Clicking on any of the Connection Opportunity cards will bring you to the _Connection Board_, pictured below. The _Connection Board_ gives you an overview of all the requests for the selected opportunity. Not only can you see each individual request, but you can also manage the Status of those requests without having to access each one individually.

Connection Board

![Connection Board](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-board-v13.png)

1 Campaign Requests

See the [Connection Campaigns](#connectioncampaigns) chapter below for the details on what this button does. In short, clicking this button allows a person to create more requests from the campaign list.

2 Favorite

You can add or remove the Connection Opportunity from your Favorites by clicking the star icon. This is the same as the favorites we talked about above on the _Connections_ page.

3 Opportunities

In the screenshot above we’re looking at the Children’s opportunity. You can quickly and easily switch between opportunities by clicking Opportunities and selecting an option from the list that appears. Opportunities that you’ve favorited will be listed first.

4 Add Request

Click here to add a new request for this opportunity. People can submit Connection Requests from your public website, which we cover [below](#enteringnewrequests), but staff/volunteers can use this button to add requests themselves if needed.

5 Connectors

This filter lets you view cards for all connectors, your connections or for specific connectors other than yourself.

6 View Options

Use these to change how the cards are sorted, to apply filters or to view connections only for certain campuses. Each of these has different options, so feel free to experiment until you find the view that works best for you. There’s also a icon you can use to switch between the List and Board views, which we’ll talk about in detail below.

7 Request Status Columns

You’ll notice that each connection request card is grouped into a vertical column. This represents the _Status_ of the request, making it easy to quickly see which people are in what status. Even better, you can change the status of a request by clicking and dragging the card from one column to another. Or, see the [Automating Status Changes](#automatingstatuschanges) section for details on automatically moving requests from one status to another.  
  
There is a maximum number of cards that can be viewed at once in each column, which is set to 100 by default but can be changed in the block’s settings.

8Connection Request Cards

Each card represents a connection request for an individual. Aside from the person’s name and photo, there’s a lot of useful information packed into these little cards. For instance, you can see the same color-coded badges that are visible from the Connections page as discussed above. You can also see a count of how many Activities have been added to the request, and how long it’s been since the most recent Activity. Clicking on the card itself will open up the details of the request, which we’ll cover [below](#connectionrequestdetail).

[](#listview)List View
======================

As we mentioned above, you can click the icon in the top-right of the block to toggle between the _List_ and _Board_ views. Since we’ve already seen the board view, let’s shift over to the list view. You can see that both views are similar, but we’ll highlight some key differences you’ll want to know about.

Connection Board List View

![Connection Board List View](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-board-list-view-v14.png)

1 Grid Options

The first thing you might notice about the list view is that the connection requests are in a grid. This opens the doors to additional actions you can take like launching workflows or exporting to Excel. There's also a special bulk update feature that we'll discuss more below.

2 List View Columns

The list view shows a lot of the same information as the board view, but with some additional details. For instance, you can see both the State and Status, as well as the last Activity that was performed.

3 Action Icons

With a single click you can go directly to the _Person Profile_ page for the person by clicking the icon. You can also delete the request by clicking **X**.  
  
If you have request security enabled, you'll also see the icon which you can use to update security for the individual request.

4 Rows Per Page

The list view is best when it comes to handling large volumes of requests. Controls like these are already in place to help you navigate very long lists. Viewing hundreds or perhaps thousands of requests in the board view, while possible, might result in performance issues that can be avoided by sticking with the list view.

[](#connectionrequestbulkupdate)Connection Request Bulk Update
==============================================================

You might have noticed the icon pictured in the screenshot above. While you may be used to seeing this icon on other grids, it has a special function for connection requests. Instead of the traditional bulk updates that are normally performed, here you can make updates that are specific to connection requests. Let's take a look at the options.

Connection Request Bulk Update

![Connection Request Bulk Update](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-request-bulk-update-v14.png)

1 Campus Filter

If you have multiple campuses, bulk updates to connection requests can only be performed one campus at a time. This is where you select which campus’s requests you want to update.

2 Optional Updates

Here you can choose to change the opportunity, status or state for the connection requests. Just like other bulk update screens, you need to click in the small circle next to _Status_ and _State_ to update these fields.

3 Connector

Select whether to keep the current connector, keep the default connector, select a connector from the configured list of connectors or assign no connector.

4 Launch Workflow

If a workflow type is selected, then one workflow will launch for each connection request. The connection request itself will be passed to the workflow using a key of _Request_.

5 Add Activity

You can optionally choose to add an activity to the selected connection requests. Clicking the _Add Activity_ checkbox will cause the other activity fields to appear.

Setting up Bulk Update
----------------------

There are a couple of configuration pieces that need to be in place for the bulk update feature to work.

First, you'll need to create a new page with the _Bulk Update Requests_ block added to it. You might make this new page a child of the main _Connections_ page. For details about adding new pages and blocks see our [Designing and Building Websites Using Rock](https://community.rockrms.com/documentation/bookcontent/14#addingcontenttorock) guide.

After you've created your new page, you'll need to edit the block settings of the _Connection Request Board_ block. There is a block setting called _Bulk Update Requests_ where you'll select the new page that you created.

With both of the pieces above in place, you're ready to start bulk updating connection requests.

[](#connectionrequestdetail)Connection Request Detail
=====================================================

We've seen connection requests at a high level, but now it's time to get into the weeds. Accessing any request from either the _List_ or _Board_ views will show its details as pictured below.

Connection Request Detail

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-board-request-detail-v12.png)

1 **Request Labels**

At the top of the details screen pictured above you'll see several labels. These include (in order):

*   Campus (if applicable)
*   Connection Opportunity
*   State
*   Status

2 **Requestor**

This is the person that is in the process of being connected. You can update the block settings to provide custom Lava that will render above the person's name.

3 **Contact Information**

The contact information for the requestor is shown to help speed up the process of contacting the individual. You'll also note that there's a quick link to the right that will take you to the requestor's Person Profile.

4 **Connector**

The currently assigned connector is displayed for reference, but you can quickly change the connector (or assign one if nobody is assigned yet) by clicking in this area.

5 **Placement Group**

This is the group that the person will be added to when the request is connected. The groups that display in this list are configured on the _Connection Opportunity Detail_ screen. You'll learn more about these settings in the [Configuring Connection Types](#configuringconnectiontypes) chapter. For now, just know that you can limit the groups displayed here. Also note that this list of groups will be filtered by the campus of the request.

6 **Lava Badge Bar**

If configured in the block's settings, a custom badge bar for the connection request will be displayed here.

7 **Connection Request Attributes**

Connection request attributes can be displayed here and will be grouped under tabs according to their category. If some attributes have categories and some don’t (as pictured in the example screenshot above) an "Attributes" tab will be added for those without a category. In this case, we have attributes assigned to the categories of Orientation and Training, so we see those tabs. We also have one attribute called “Planned Start Date” that isn’t assigned to any category, so it falls under the Attributes tab. If none of the attributes have categories, then you won't see any tabs.

8 **Available Workflows**

Many of the workflows will be automatically triggered by events to the request (like changing statuses). You can also define manual workflows that can be launched by the connection team at any time. When defined, these workflows will be displayed here.

9 **Edit**

This allows you to edit the details of the request, including the Connector, State, Status and Assigned Group.

10 **Transfer**

This allows you to transfer the request to another _Connection Opportunity_. We'll talk more about transferring later.

11 **View History**

Click the _View History_ link to open a new page that lists updates and changes to the request. You can see things like when the request was created, status and state changes or when the person was connected.

12 **Connect**

Select this button to complete the connection process. This will drop the person into the group and mark the state as _Connected_. This button can be hidden by changing the opportunity's configuration as described in the [Configuring Connection Types](#configuringconnectiontypes) chapter.

13 **Activities**

This is a list of activities for the request. You may notice that some activities are highlighted in blue while other activities are white. The activities with a blue background color represent those that are for this specific request. Activities without the blue highlights are activities that are from other requests in the same connection type. You can only remove the activities you've added, otherwise the "**X**" will be greyed out.

14 **Workflows**

You can expand this area to show any workflows that have been initiated for this request, as well as the status (e.g., Running, Complete) of those workflows. Both manual and triggered workflows will appear in the list.

You might be wondering why you'd ever want to see activities from other opportunities. It's not uncommon for overly-ambitious requestors to sign up for multiple connection opportunities at once. Viewing activities from one opportunity in other opportunities allows you to see that they are being contacted by more than one connector.

This functionality can be disabled if needed. More on that later.

[](#addingactivities)Adding Activities
======================================

You can add new activities by selecting the button. This brings up the _Add Activity_ window.

Adding Activities

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-add-new-activity-v12.png)

You can use [entity attributes](https://community.rockrms.com/documentation/bookcontent/9#entityattributes) to enter additional details related to the activity. Those attributes will be added to the window above according to your setup.

[](#transferringarequest)Transferring a Request
===============================================

During the connection process it's common that the requestor (or connector) decided that this opportunity isn't a great fit. The transfer feature is a quick and powerful way to ensure the requestor can find a new opportunity that works for them.

Click the Transfer button to bring up the transfer screen below. While it looks pretty simple, it has some powerful capabilities.

Transfer a Request

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-transfer-request-v12.1.png)

1 Opportunity

This is where you can select a different opportunity for the individual, if needed. By default, the opportunity being viewed is selected.

2 **Search**

This allows you to find the best next opportunity. We'll dive deeper into this next.

3 **Status**

This allows you to select the new status when the request is dropped into the new opportunity. This can be shown or hidden based on the opportunity's configuration.

4 **Connector**

Most of the time you'll want to clear the current connector when you transfer the request. Sometimes you'll just want to select a new connector without changing the opportunity. Either way, the options provided here allow you to select:

*   The default connector for the opportunity
*   The current connector (whose name, if available, will be displayed here)
*   A new connector (which you can choose from the dropdown that displays when the option is selected)
*   No connector

5 **Campus**

If enabled in the opportunity's configuration, and if you have more than one campus, you can transfer the request to a different campus using this drop-down.

6 **Note**

This allows you to send a note to the new connection team.

Through the transfer process you want to make sure you find each individual the right next opportunity. Otherwise, they might feel like a hot potato. The Search button allows you to look at all the new opportunities to help coach them on what might be best for their personality and situation. Below is the search screen for the Involvement connection type.

Transfer Search

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-transfer-search-v12.png)

[](#displayingbadges)Displaying Badges
======================================

Badges are a great way to see a lot of information about a person at a glance. Displaying badges on your connection requests can save staff from having to look elsewhere for the information they need to get the right people connected to the right opportunities.

Connection Badges

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-request-detail-badges-v12.png)

In the example pictured above we’re displaying the Connection Status, Baptism and In Serving Team badges. You can choose which badges to display by editing the _Connection Request Board_ block settings as shown below.

Connection Board Block Settings

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-board-block-settings-badges-v12.png)

Select which badges you want to display and click the Save button. Those badges will now be displayed for anyone with those connections. Super easy!

Also within the block settings you can use the _Lava Heading Template_ and _Lava Badge Bar_ to further customize the page. The _Lava Heading Template_ will appear above the person's name, while the _Lava Badge Bar_ will appear below the person's details and above the attributes section.

[](#enteringnewrequests)Entering New Requests
=============================================

There are three ways to enter new connection requests. Let's look at each one in detail below.

[](#selfservice)Self-Service
============================

Rock ships with blocks that allow you to create a self-service entry to the connection process. This has been pre-configured on the external website for the involvement connection type under Connect > Serve.

Opportunity Search

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/opportunity-search.png)

Here you will see the search page for finding involvement opportunities. It allows you to filter by campus and also by various attributes about the opportunity (we'll show you how to configure these below). Selecting an opportunity will display its details.

Opportunity Detail

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/opportunity-detail.png)

From the details page, the guest can then choose to Connect with the opportunity. This action creates a connection request.

In the example pictured below, a custom attribute has been added to request "Begin Date" information from the individual.

Connection Signup Page

![Connection Signup Page](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-signup-page-external-website-v13.png)

Connection Request Attributes
-----------------------------

To set up attributes for the connection request, go to Admin Tools > System Settings > Entity Attributes. Add an attribute with an _Entity Type_ of "Connection Request". The attribute's configuration can be used by the signup block to control which attributes will appear. You have different options for controlling this.

You can select specific categories to include or exclude. To set up categories for this, navigate to General Settings > Attribute Categories and add a category with the _Entity Type_ set to "Connection Request". That category can then be assigned to your connection request attributes, so they can be included or excluded in the signup block's settings.

You can also use the _Public_ flag in the attribute's setup to control which attributes are shown. There's a simple setting on the signup block where you can blanketly exclude non-public connection request attributes. This can be used in place of, or in conjunction with, included or excluded categories.

Connection Signup Block Settings

![Connection Signup Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-signup-block-settings-v10.png)

[](#staffentry)Staff Entry
==========================

As discussed above the staff can also enter requests from the internal site under People > Connections.

[](#workflows)Workflows
=======================

Rock also ships with a workflow action that can create a new request. This is a powerful way of creating your own request screens using the workflow entry actions. See the [Connection Workflows](#connectionworkflows) chapter below for more information on how you can configure workflows to best use the connection features.

[](#configuringconnectiontypes)Configuring Connection Types
===========================================================

Out of the box Rock ships with a single connection type for Involvement. But that's just a starting point for all the options within connections. Let's walk through the configuration capabilities of the connections features to see what's possible.

[](#connectiontypeconfiguration)Connection Type Configuration
=============================================================

The first step is to see a listing of all the connection types that have been configured in the system. You can see this screen by clicking the from the _Connections_ page under People > Connections.

Connection Type List

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-types-v13.png)

Selecting a connection type from the list pictured above will display the details for the type as well as a list of all the connection opportunities that have been defined.

Connection Type Detail

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-type-detail-page-v13.png)

Let's start by looking at the configuration options available for a connection type.

Connection Type Edit

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-type-configuration-v13.png)

1 **Basic Configuration**

The first few items cover the basics like Name, Description, Active/Inactive and an icon for the type.

2 **Days Until Request Considered Idle**

Setting this number determines how the red (idle) colored badges shown in the Connection Requests are totaled.

3 **Connection Request Detail Page**

This setting only applies to older versions of Rock that aren't using the Connection Request Board block. You could use this to specify the page for viewing Connection Request Details for this Connection Type. As of Rock v12 this is no longer needed with the Connection Request Board because viewing Connection Request Details no longer takes you to a different page.

4 **Enable Future Follow-up**

We discussed the future follow-up feature previously. It allows a request to be frozen until a specific date, at which point a job will turn it back to Active and a "Future Follow-up Complete" action will be added to the request. You can decide whether this feature is available on each connection type you set up.

5 **Enable Full Activity List**

We also talked about how a request can show activities from other requests made by the same individual. You have the option to disable that functionality on a connection type basis.

6 **Requires Placement Group To Connect**

If checked, this will prevent the Connect button from activating on a _Request_ unless a _Placement Group_ is set.

7 **Enable Request Security**

If enabled, connection request blocks will have an additional setting allowing security to be applied to individual requests. A special rule is also applied, which automatically allows an assigned connector to view or edit their requests even if the connector doesn't have security to the connection opportunity or type. _Enabling this setting will noticeably impact performance when there are a significant number of requests._  
  
If you can't see requests that you should be able to see, be sure to check security at the connection's Request, Opportunity and Type levels.

8 **Connection Request Attributes**

Attributes associated with a connection request will be displayed here. Connection request attributes apply to all of the connection requests in every opportunity of the given connection type.

9 **Opportunity Attributes**

Here you will define attributes about the opportunities. These attributes are mainly used to power the opportunity search screens. Enabling _Allow Search_ allows the attribute to be filtered on by a person using an opportunity search.

10 **Activities**

Each connection type allows you to define types of activities that a connector can make on a request. You can apply [entity attributes](https://community.rockrms.com/documentation/bookcontent/9#entityattributes) to activity types, to track additional details related to that type of activity.

11 **Statuses**

You can create as many request statuses as you like for your requests. This is also where you'll configure rules to automate the process of moving individuals from one status to another. See the [Automating Status Changes](#automatingstatuschanges) section below for details.

12 **Workflows**

We’ll go into all the details about connection request workflows [below](#connectionworkflows). For now, the important takeaway is that the workflows you define here will apply to all requests for all of the Connection Opportunities of this Connection Type. That’s a wide net to cast, but sometimes that’s exactly what you need. If not, you can also add workflows at the Opportunity level.

After setting up a connection type, you can duplicate it to create additional types. To duplicate an entire connection type, click the button on the _Connection Type Detail_ screen.

Connection Type Copy

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-type-copy-example-v13.png)

Once copied, the duplicated connection type is displayed in the _Connection Types_ screen. From there you can edit its settings in the _Connection Type Detail_ screen. Note, if you need to delete the duplicated connection type, you'll need to first delete all of the Connection Opportunities listed in its _Connection Type Detail_ screen.

Automating Status Changes
-------------------------

As noted above, the Connection Type is where you define the _Statuses_ that are available for connection requests. For instance, you might have statuses like "In Progress" or "Pending Interview" to track different stages as the connection request moves through your process. Statuses can be manually assigned by editing a request, but in many cases, you might find it's more efficient to automatically move a connection request from one status to another.

To set up rules for automating status changes, edit the Connection Type and access the Statuses section. By either updating a status or adding a new one, you can access the list of status automations. Click the icon to add a new automation, or the icon to edit an existing automation.

Connection Type Status Automation

![Connection Type Status Automation](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-type-status-automation-v13.png)

1 Automation Name

Be sure to provide a descriptive name so you know what the automation does. This is especially helpful if you have several automations for a single status.

2 Data View

This is where you select the data view that will identify which connection requests the automation should apply to. For instance, you might create a data view that returns connection requests where a specific Activity has been completed. Only data views with an "Applies To" setting of _Connection Request_ will be listed here.  
  
For more information about building data views, see our [Taking Off With Reporting](https://community.rockrms.com/documentation/bookcontent/6#filteringusingdataviews) guide.

3 Group Requirements Filter

These options apply to connection requests that have a specified _Placement Group_. The group (and/or group type) requirements will be checked according to the following logic.

*   **Ignore:** If this is selected, any group requirements are not considered when deciding if the automation should be performed.
*   **Must Meet:** If this is selected, all group requirements must be met by the connection request's _Requestor_ to perform the automation. If there are no group requirements for the connection request's _Placement Group_, then the automation will be performed.
*   **Does Not Meet:** If this is selected, the automation will be performed only if there are group requirements that the _Requestor_ does not meet. If there are no group requirements for the _Placement Group_, then the automation will not be performed.

For more information about group requirements, see our [Rock Your Groups](https://community.rockrms.com/documentation/bookcontent/7#grouprequirements) guide.

4 Move To

This is the new status that the connection request will be updated to if it's returned by the selected data view and if the conditions of the _Group Requirements Filter_ are met. In the example above, the connection requests returned by the data view would automatically be updated from a status of _No Contact_ to a new status of _In Progress_.

The automations you configure will be performed after saving a connection request, or when the _Connection Requests Automation_ job is run.

Keep in mind that the automations are performed in the order that they're listed. If you need to change the order, click the icon and drag the automation to the desired location. Once an automation criterion is matched, no further automations will be processed for that status.

So, there is the Connection Type. Next let's look at creating and editing Connection Opportunities within this Connection Type.

[](#connectionopportunityconfiguration)Connection Opportunity Configuration
===========================================================================

When viewing a Connection Type, you can select an existing opportunity or click the icon to add a new one. Either way you'll be brought to a screen like the one pictured below.

Connection Opportunity Detail

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-opportunity-detail-edit-v13.png)

1 **Name**

This is where you’ll set the name for the opportunity. This can be different or the same as the _Public Name_ described below.

2 **Active**

This determines if the opportunity is active. This is helpful if you have seasonal opportunities.

3 **Summary**

Use this area to provide a brief summary that will display on the search results page.

4 **Details**

Use Details to give more information about the opportunity. For instance, you might describe the specific tasks a person might be performing in this role.

5 **Public Name**

This name will be used on the blocks that are displayed publicly.

6 **Photo**

Sometimes the best way to sell an opportunity is to show it in action. The right photo can go a long way toward making your site look even more professional and inviting.

7 **Campuses**

Because some opportunities might only exist at one campus and not others, you can specify which campus(es) the opportunity is for. This is disabled if you have only one campus.

8 **Connection Request Attributes**

Here you can see connection requests attributes that apply to requests in this opportunity. Attributes inherited from the Connection Type will also be shown here for reference.

9 **Opportunity Attributes**

Remember setting up the opportunity attributes for the _Connection Type_? This is where you'll provide their values.

10 **Placement Group Configuration**

The next few settings help to configure how the request will process adding people to groups when the person's request is marked _Connected_. Let's review each setting:

*   **Group Type:** This defines which group type the available groups will be. We need to know this so we can personalize some of the other settings like role and status.
*   **Group Member Role:** The role the person will be assigned when they are connected, or added, to the group.
*   **Group Member Status:** The configured status the person will receive when they are added to the group.
*   **Use All Groups of This Type:** Each opportunity will have a selected list of groups that a person can be connected to. This setting says instead of having to select every group of a certain type (and keep it current) just use all of them.

We'll talk more about these settings in the [Placement Group Configuration](#placementgroupconfiguration) chapter below.

11 **Placement Groups**

These are the groups that will be displayed as options to connect the requests to. The campuses defined on these groups are important, as they will be used to filter for the campus of the request. You'll define this campus from the group details page of the group. This will not apply if you have only one campus.

12 **Connector Groups**

Next, we'll define the various groups that contain the people who will work the requests as they come in. The members of these groups are your Connectors.

13 **Default Connector**

You can optionally define a default connector for each campus. Any new requests originating at a campus will then default to the specific campus' connector. The drop down will show a list of active members from the connector group listed. This is disabled if you have only one campus.

14 **Workflows**

We saw that we could define workflows when configuring the connection type. Configuring it there would apply the workflows to all opportunities of that type. You can also configure workflows for a specific opportunity here. We’ll talk more about connection request workflows [below](#connectionworkflows).

15 **Advanced Settings**

Use the Advanced Settings to change what buttons and fields are available when working with requests. Typically, you'll only want to hide these fields if you have automated processes (e.g., workflows) around your connection request processing. This allows you to prevent manual updates from interfering with those processes.

[](#placementgroupconfiguration)Placement Group Configuration
=============================================================

An important part of the connection process is the selection of a group to place the person in when they are connected. The definition of these 'selectable' groups is highly configurable. Knowing all of your options will increase the power of your connections processes.

[](#configuration)Configuration
===============================

Let's say for instance that we’d like our _Children's_ connection opportunity to allow placement into three different serving teams. We'd also like the connector to be able to place them into groups as either a _Leader_ or a _Member_. Finally, if they are a _Member_ of the group, we'd like for the connector to be able to place them with the member status of _Active_ or _Pending_. That's quite a list of requirements... let’s see how we can configure the _Children's_ opportunity to do just that.

You can set up placement groups in the _Connection Opportunity_ configuration screen. Here you'll find a panel for setting placement group options. The screen below shows the configuration for the example given above.

Placement Group Configuration

![Placement Group Configuration](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/placementgroup-configuration-v13.png)

1**Placement Group Configuration**

The first things we configure are the group types, roles and statuses that will be options for our placement groups.

2**Group Member Role**

Next, we configure the one option for the _Leader_ role and the two options for the _Member_ role.

3**Group Member Status**

Note that we configured two different options for the role of _Member_ for the group type of _Serving Team_. One option allows for the Group Member Status of _Active_ the other for _Pending_.

4**Placement Groups**

With our roles and statuses configured we can now select the specific placement groups for the opportunity. In this example, you'll notice that we've selected three different serving teams.

In our example above we specifically picked each placement group that is an option for the connection opportunity. This will work in most cases. But if you wanted the list to show every group of a specific group type, you could configure that as well by enabling the _Use All Groups of This Type_ option. This eliminates the need to configure new groups when they are added.

[](#results)Results
===================

With our configuration in place, let's see the fruits of our labor. The screen below shows the editing of a connection request for Helen Evans who is interested in helping in the _Children's_ area. Let's walk through how the placement group settings drive the process of selecting a group.

Placement Group Example

![Placement Group Example](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-request-placement-group-example-v13.png)

1**Placement Group**

Once you select a placement group, options will appear below allowing you to select roles and statuses. The screen will only show these settings if more than one option exists. So, for instance, since the role of _Member_ is selected, the option of _Group Member Status_ is displayed since we can choose to add them as _Active_ or _Pending_. If, on the other hand, we selected the role of _Leader_, the _Group Member Status_ option would disappear since the only option is _Active_.

2**Group Member Attributes**

You'll also note that group member attributes are shown on this screen. In this case there's only one, the "Hours Serving" attribute. Showing the group member attributes here allows you to set these values quickly as you place the individual into the group.

[](#grouprequirements)Group Requirements
========================================

If a group has specific requirements to join, these will be checked before saving the placement group. If the person does not meet the requirements, you will see a warning message like the one pictured below.

Placement Group Requirements Not Met

![Placement Group Requirements Not Met](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-placement-group-reqs-not-met-v13.png)

[](#connectionworkflows)Connection Workflows
============================================

On their own, the connection features are very powerful. Adding workflows to the mix, though, magnifies what you can do. Let's take a look at how you can set up workflows for your connections.

You can define workflows for your requests for the connection type (in which case they will be applied to all requests in all opportunities) or for a specific opportunity. In either case the configuration is the same.

Connection Workflows

![](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-workflow.png)

There are two basic items that you'll need to configure:

*   **Trigger:** This defines when the workflow should be started. The options are:
    *   **Request Started:** Executed when the request is first started.
    *   **Request Assigned:** The workflow will launch when a connector has been assigned to the request.
    *   **Request Transferred:** The workflow will launch when the request has been transferred.
    *   **Request Connected:** Fired when the request is marked as connected.
    *   **Placement Group Assigned:** This workflow will be launched when a placement group is assigned.
    *   **Status Changed:** This workflow is launched when a status change has occurred. You optionally have the ability to limit this trigger to certain pre/post status values.
    *   **State Changed:** Like the status change trigger but this time for state.
    *   **Activity Added:** This trigger will be launched every time an activity is added to a request. You can also filter this to a specific kind of activity. The entity passed to the workflow will be the connection request activity.
    *   **Manual:** This workflow will be added to the request detail screen to allow the connector to manually execute it. You can optionally limit which workflows display on the request based on the status of the request.
    *   **Future Follow-up Date Reached:** In this case, the workflow is launched by the _Connection Request Workflow Triggers_ job. Depending on how the job is configured, the workflow will launch on or after the request's Future Follow-up date.
*   **Workflow Type:** This is the simple part. This defines which workflow will be executed when the trigger condition is met.

[](#buildingconnectionsworkflows)Building Connections Workflows
===============================================================

When the workflows above are executed, the initial activity of the workflow will have access to the connection request through the workflow entity property. It's important that this initial activity gets the information it needs to process from the request. The main action you'll use to get the properties from the request is _Attribute Set From Entity_. You can use the _Lava Template_ field of this action to pull different properties of each request. Below are a few samples:

**Get The Requestor – Attribute Type: Person**  
{{ Entity.PersonAlias.Guid }}  

**Get the Connector Person (if any) – Attribute Type: Person**  
{{ Entity.ConnectorPersonAlias.Guid }}

**Get the Placement Group – Attribute Type: Group**  
{{ Entity.AssignedGroup.Guid }}

**Opportunity Type – Attribute Type: Text**  
{{ Entity.ConnectionOpportunity.Name }}

**Status – Attribute Type: Text**  
{{ Entity.ConnectionStatus.Name }}

**State – Attribute Type: Text**  
{{ Entity.ConnectionState }}

The 'Activity Added' Workflow Trigger is a Bit Different
========================================================

While most of the workflow triggers send the Connection Request to the workflow, the 'Activity Added' trigger only sends the new Activity. So, if your workflow is triggered by 'Activity Added' then you will need an extra step to get the Connection Request associated with that activity. You can derive the Connection Request from the Activity by using the following Lava:  
{{ Entity.ConnectionRequest.Guid }}

Connection Attribute Types
==========================

Rock provides several attribute types to help you build workflows. These include:

*   Connection Request - Set by Guid
*   Connection Status - Set by Guid
*   Connection State - Set by Enum value
*   Connection Type - Set by Guid
*   Connection Opportunity - Set by Guid
*   Connection Activity Type - Set by Guid

[](#connectionworkflowactions)Connection Workflow Actions
=========================================================

To facilitate even more power with connections we've added several workflow actions. They're outlined below.

Create Connection Request
-------------------------

Creates a new connection request with the following settings.

1.  **Person Attribute** - The Person attribute that contains the person that connection request should be created for.
2.  **Connection Opportunity Attribute** - The attribute that contains the type of connection opportunity to create.
3.  **Connection Status Attribute** - The attribute that contains the connection status to use for the new request.
4.  **Connection Status** - The connection status to use for the new request (when Connection Status Attribute is not specified or invalid). If neither this setting nor the Connection Status Attribute setting are set, the default status will be used.
5.  **Campus Attribute** - An optional attribute that contains the campus to use for the request.
6.  **Connection Comment Attribute** - An optional attribute that contains a comment that should be added to the request.
7.  **Connection Request Attribute** - An optional connection request attribute to store the request that is created, for use later in the workflow.

Transfer Connection Request
---------------------------

Transfers a connection request to a new opportunity type.

1.  **Connection Request Attribute** - The attribute that contains the connection request.
2.  **Connection Opportunity Attribute** - The attribute that contains the type of the new connection opportunity.
3.  **Transfer Note** - The note to include with the transfer activity.

Set Connection Request Status
-----------------------------

Changes the status of a connection request.

1.  **Connection Request Attribute** - The attribute that contains the connection request.
2.  **Connection Status Attribute** - The attribute that contains the connection status.
3.  **Connection Status** - The connection status to use (if Connection Status Attribute is not specified).

Set Connection Request State
----------------------------

Changes the state of a connection request.

1.  **Connection Request Attribute** - The attribute that contains the connection request.
2.  **Connection State Attribute** - The attribute that contains the connection state.
3.  **Connection State** \- The state to set the request to, if a Connection State Attribute is not provided.
4.  **Follow Up Date Attribute** - The attribute that contains the follow-up date when state is being set to Future Follow Up.
5.  **Follow Up Date** - The follow-up date when state is being set to Future Follow Up (if Follow Up Date Attribute is not specified).

Add Connection Request Activity
-------------------------------

Adds a new connection request activity.

1.  **Connection Request Attribute** - The attribute that contains the connection request.
2.  **Connection Activity Type Attribute** - The attribute that contains the activity type to add.
3.  **Note** - The note or an attribute that contains the note for the new activity.
4.  **Person Attribute** - An optional Person attribute that contains the person who is adding the activity.
5.  **Connection Request Activity Attribute** - An optional connection request activity attribute that contains the created activity, for use later in the workflow.

  

See our [Blasting Off With Workflows](https://community.rockrms.com/documentation/bookcontent/12/) guide for more information on working with workflows.

[](#connectioncampaigns)Connection Campaigns
============================================

A connection campaign is a way to generate a set of connection requests in bulk for a special purpose. The goal of this feature is to provide a simple way to create connection campaigns that allow for the contacting of many individuals. It links several of Rock’s most-loved features to work together to achieve this. Connection campaigns have been designed to work as a one-time connection or a reoccurring connection. Keep that in mind as you read through the rest of this chapter.

[](#settingupconnectioncampaigns)Setting Up Connection Campaigns
================================================================

Before diving into the details, let’s take a high-level tour of how a connection campaign works. The diagram pictured below shows the flow of a campaign.

Connection Campaign Flow

![Connection Campaign Flow](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-campaign-flow-chart-v12.png)

1 Campaign Settings

We start by configuring our campaign. This includes defining:

1.  The connection opportunity to link to
2.  Who should be contacted by the campaign (think [data view](https://community.rockrms.com/documentation/bookcontent/6#filteringusingdataviews))
3.  How to assign connectors
4.  Whether people should be contacted on a continued basis

Obviously, there is a lot more detail to cover, but we’ll get to that in a minute.

2 Campaign Job

A job has been configured to process the setup above and create a list of people who should be added to the campaign.

3 Campaign List

This list can change over time (based on the dynamic filters of your data view and who has already been processed). While it’s not important to know where this list resides, it is stored as an EntitySet for those who are curious about the technical nature of the feature.

4 Connections

From the campaign list, connection requests are created.

Because the process ends with the creation of a connection request you may wonder, "Why not just create the connection request directly?" The answer is that we realize it may take days or weeks to process through the list. We don’t want the age of the connection requests to be skewed by the date the request was created, especially if it takes several days or weeks for a connector to be assigned. It might be perfectly reasonable for a request to be waiting for someone for several days. We want to be able to measure requests by age as a reflection of how efficiently connectors are working requests. This provides good accountability to the process.

Now that we’ve looked at the feature from a 30,000-foot view, let’s dive into each component in detail.

Connection Campaigns
--------------------

We'll start with the _Connection Campaigns_ page. This allows us to define as many campaigns as we’d like. You can find this list under People > Connections > Connections Configuration > Connection Campaigns.

Connection Campaign List

![Connection Campaign List](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-campaign-list-v13.png)

As you can see, this lists the campaigns and provides a few metrics about each. These include:

*   **Active Requests:** This is the number of active connection requests that are currently open.
*   **Pending Connections:** This is the number of people still on the campaign list waiting to be moved to a connection request.

Selecting a campaign will take you to the _Campaign Detail_ page.

Campaign Detail Page
--------------------

This page is the control center for a campaign’s configuration. Below we'll walk through each section of the setup.

Connection Campaign Settings

![Connection Campaign Settings](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-campaign-settings-v13.png)

1 Campaign Name

The name of the campaign should make it easy to identify its purpose.

2 Active

Set whether the campaign is currently active or not.

3 Connection Type/Opportunity

This is where you'll choose which connection type and opportunity the requests will be created in.

4 Requestor Data View

This is the data view that will be used to populate the campaign list.

5 Family Limits

It’s often the case that you’ll want to connect with just one person in the family. While you can attempt to configure your data view to handle this for you, we’ve made it easy to set this up. By checking “Limit to Head of Household” you can have your data view return as many people as you’d like, but only one connection per family will be made. The head of household will be used as the requestor for the entire family. This is also very helpful if your data view contains children, but you really want to reach out to the parents.

6 Opt Out Group

This setting will remove any group members of the selected group from the campaign list. While you could also add this to your data view, we’ve provided an easy out with this setting. Note that all families that the group member is a part of will be opted out of future connections.

7 Create Connection Requests

This setting helps determine when connection requests are created. You have the option of having them all created as soon as the job runs, or as they are needed. Selecting _As Needed_ means requests will be created as there are people ready for them. Doing it this way allows for better accountability because the creation date tells you how long the request has been worked instead of how long it sat before someone did work it.

8 Daily Limit of Assigned Connection Requests

The number you provide here tells the Campaign Manager job the maximum number of connection requests that should be automatically created and assigned for each connector on a daily basis, provided there are any to create. This limit applies to everyone by default, but you can change the limit manually for individual connectors if needed. More on that in the [What to Know About Connectors](#whattoknowaboutconnectors) section. Keep in mind a value of 0 or blank will stop the job from creating and assigning any connection requests. In that case, all connection requests must be made manually on demand. Be careful when combining this with the "All at Once" setting, because you could create many requests that will never be assigned.

9 Number of Days Between Connection

This setting allows connection requests to be created on a routine basis for an individual (or family). Say you wanted to make a connection every 30 days with an individual. Set this value to "30" and thirty days after the original connection has been closed (status of _Inactive_ or _Connected_) a new one will be created.

10 Prefer Previous Connector

This setting attempts to use the same connector for future requests. The key word here is ‘prefer’. If the original connector is not available or is over their daily limit, then the system will select a different connector.

11 Request Comments Lava Template (Advanced Settings)

This allows you to create customized "Comments" using a [Lava](https://community.rockrms.com/lava/) template. The _Person_ object and _Family_ (group) object will be merged with this template prior to creating new connection requests. Example:

```
    Please contact {{ Person.NickName }} with a quick phone call.
    Here are the family members:
    {% for m in Family.Members %}
    \* {{ m.Person.FullName }} - {{ m.GroupRole.Name }} 
    ({{ m.Person.ConnectionStatusValue.Value }}, {{ m.Person.RecordStatusValue.Value }})
    {% endfor %}
    

```

Easy Opt Outs
=============

Consider adding a simple manual workflow on your connection request that will add the requestor to the opt out group. This allows the connector to simply click a button to keep the individual (and their family) from being contacted in the future if your campaign is set to recur.

[](#workingwithconnectionrequests)Working with Connection Requests
==================================================================

There's nothing special about working with the connection requests. A button at the top of the connections pages allows a person to create more requests from the campaign list for themselves.

Add Campaign Requests

![Add Campaign Requests](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-campaign-add-request-button-v13.png)

Pressing this button will activate a modal to ask how many requests the individual would like to create.

Get Additional Requests

![Get Additional Requests](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/connection-campaign-create-requests-modal-v10.png)

Note
====

When creating new requests, the person will be assigned first to any current connection requests that do not have a connector assigned. If all requests already have connectors, then new requests will be made from the Campaign List.

[](#whattoknowaboutconnectors)What to Know About Connectors
===========================================================

Connector Group Campus
----------------------

When the system automatically marks people as connectors, it respects the connector group settings with respect to campus. Individuals in a connector group for all campuses will be available for any new request. Those in a group for a specific campus will only be available for requests that are marked for that campus (determined by the requestor’s primary campus).

Connector Override Settings
---------------------------

When configured for auto assignments, connectors can have a specified number of requests assigned to them per day. The global setting is configured for the specified campaign. This can be overridden however using group member attributes on the connector groups. The keys for these attributes are required to be:

*   **CampaignDailyLimit (Integer):** The number of requests that the individual should be assigned per day.
*   **CampaignScheduleDays (Days of Week):** The days that the individual should be assigned requests.

[](#samplerecipes)Sample Recipes
================================

Below are a couple of sample recipes to help you understand connection campaigns in more detail.

Reoccurring Seniors Check-in
----------------------------

Say you’d like to make a calling campaign to check-in with seniors every two weeks. Below are the high-level steps you’d need to set this up.

1.  Create a new Connection Type and Connection Opportunity for this new activity.
2.  Add a Connection Group to the Connection Opportunity with the people who will be making the calls.
3.  Create a data view with the seniors you’d like to call. This can be something like those over 65, or perhaps members of a group that a workflow from your website adds people to who have requested check-ins.
4.  Create the Connection Campaign with the following settings:
    1.  Choose the connection opportunity from step 1.
    2.  Select the data view from step 3.
    3.  Set “Family Limits” to “Everyone in the Data View”.
    4.  Set “Create Connection Requests” to “As Needed” with a “Daily Limit of Assigned Connection Requests” to 10 (meaning each connector will get 10 calls a day).
    5.  Set the “Number of Days Between Connection” to 14. This will create a new request 14 days after the last request is closed.
    6.  Set “Prefer Previous Connector” to true, because who doesn’t like to hear from the same person each time?

A new connection request will be created for each check-in. This helps provide good accountability to how quickly calls are made. Keep in mind that the connections features will show all activity for a person across all their requests. This helps you see previous notes. It’s a win-win!

Bonus Points
============

Create a manual workflow to remove the person from the group that the data view uses to create the campaign list. This allows a volunteer to simply click a button if a senior decides that check-ins are no longer required.

Large Emergency Call List
-------------------------

Say there has been a local emergency and you need to make calls to reach out to numerous people in a specified area. One way to achieve this would be to follow the steps below.

1.  Create a new Connection Type and Connection Opportunity for this new activity.
2.  Add a Connection Group to the Connection Opportunity with the people who will be making the calls.
3.  Create a data view with the individuals who need to be reached.
4.  Create the Connection Campaign with the following settings:
    1.  Select the connect opportunity from step 1.
    2.  Select the data view from step 3.
    3.  Select “Family Limits” to “Limit to Head of Household” (each home only needs one call).
    4.  Set “Create Connection Requests” to “As Needed” and a “Daily Limit of Assigned Connection Requests” to 0. This will allow people to get calls in batches to fill the amount of time they have to make calls.

Note
====

You could also use the setting to create all the requests at once. The only trick to this strategy is that it’s possible that two individuals could assign themselves to the same request at nearly the same time. This could create duplicate calls. In an emergency no one has time to duplicate calls.

[](#firststepsforsteps)First Steps for Steps
============================================

Whether it’s getting kids to bed at night or getting ready for work in the morning, many areas of our lives require a series of tasks intended to achieve a single goal. Spiritual growth is no exception. With Rock’s help, you can guide your attendees through customized steps along the path of spiritual development.

But before we dive too deeply into Steps, let’s take a moment to define a few terms and introduce you to some key features you’ll need to know.

A _Step Program_ is made up of individual activities and accomplishments called _Step Types_. If the goal is to reach the mountain’s summit, then the Step Program is the mountain, and the Step Types are the basecamps on the way to the top.

Let’s explore these concepts further by looking at the program for Discipleship, which is available right out of the box. Once you understand this program, you’ll be able to change it or create an entirely new program to measure anything from your students’ spiritual growth to your volunteers’ progress through training programs, and more.

[](#steps)Steps
===============

You can access your step programs under: People > Engagement > Steps. This is also where you’ll go to create new programs, which we’ll cover later in the [Editing Step Programs](#editing-step-programs) section.

Steps Page

![Steps Page](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/home-step-programs-v13.png)

1 Name

The name of the step program.

2 Category

Categories are a great way to group and organize your programs. You can view and manage step program categories from Admin Tools > System Settings > Category Manager using the _Step Program_ entity type.

3 Step Types

A count of all step types, either active or inactive, included in the program.

4 Steps Taken

A count of all completed steps for all individuals in the program.

[](#stepprogram)Step Program
============================

The _Step Program_ page has a detail block at the top and a list block below. There’s actually a lot to see and do on this page, so for now we’ll just get familiar with the page itself before diving into the setup and maintenance in later sections.

Let’s take it from the top and look at the detail block first.

Step Program Detail

![Step Program Detail](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/disciples-prog-chart-v13.png)

1 Campus

You can select a campus to only show step information from that campus. The step metrics, chart and step type information (see below) will all be updated to show data only from the selected campus.

2 Description

A good description helps clarify the program’s purpose.

3 Category

The category assigned to the program is displayed for reference.

4 Step Program Metrics

These metrics provide good information on the overall program. The values include:  

*   **Individuals Completing:** This is a count of unique individuals who have completed the program. People who complete the program multiple times will only be counted once.
*   **Average Days to Complete:** The average number of days to complete the program is calculated based on the earliest Start Date and the latest End Date across the steps in the program.
*   **Steps Started:** A count of the number of steps that have been started, regardless of whether they were completed.
*   **Steps Completed:** This is a count of all completed steps in the program.

5 Step Program Activity Chart

This is a stacked area chart (a chart where areas don’t overlap because they are cumulative at each point) showing completed steps by step type. This chart actually has a lot going on, so we'll wait to break it all down for you later in the [Steps Charts](#stepscharts) chapter.

Next, let’s move down to the list block at the bottom of the page. Here you can see and maintain the step types included in your program.

Step Types List

![Step Types List](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-program-step-types-list-v13.png)

1 Name

The step type names are each listed here.

2 Spans Time

You'll see a checkmark in this column if the step occurs over a period of time (as opposed to a step that occurs in a moment of time).

3 Allow Multiple

A checkmark will appear if the step type can be completed more than once by the same person.

4 Started

Shows a count of how many times the step type has been started.

5 Completed

Shows a count of how many times the step type has been completed.

6 Bulk Entry

The icon will take you to the _Bulk Entry_ page, where you can add steps of that type in bulk. We’ll cover how to do that [below](#bulkentry).

Not Adding Up?
==============

You'll sometimes notice that the counts for Started or Completed steps are higher than the number of people in your program. If you're doing any analysis with these numbers, it's important to keep in mind that a single person can be counted more than once if the step allows multiple completions.

In the [Editing Step Types](#editingsteptypes) section we’ll dive deeper into how the information in this block gets added and maintained.

[](#steptypes)Step Types
========================

Next, let's shift our focus to one of the individual step types within our example program.

The layout of the _Step Type_ page is very similar to the _Step Program_ page. You’ll see a familiar detail block at the top, followed by a list of step participants below. From here you can maintain the list of participants and view their progress as they start and finish the step.

Step Type Page

![Step Type Page](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-type-page-v13.png)

1 Name and Description

The name of the step type is shown at the top of the page for reference. A description for the step type adds context and meaning.

2 Step Type Metrics

These are the same metrics as discussed in the prior section but showing only data for the individual step type being viewed.

3 Steps Activity Chart

This overlapping area chart shows when the step type has been started and/or completed. We’ll unpack all the pieces of this chart later, in the [Steps Charts](#stepscharts) chapter.

4 Step Participants

All individuals who have started and/or completed the step type are listed here.

5 Date Started

This is when the individual started the step. This column only appears if the step type is configured to span time.

6 Date Completed

This is when the individual completed the step. If the step type doesn't span time, then this is the “Date” associated with the step (see [Step Entry](#stepentry)).

7 Status

The status for each person is displayed, using values configured at the program level (see [Editing Step Programs](#editingstepprograms)).

8 Attribute

Any step attributes you create with the "Show in Grid" option selected will be displayed here. In this example we've added an attribute to show which pastor is related to the step.

In the [Editing Step Types](#editingsteptypes) section we’ll dive deeper into how all of this gets set up and maintained. At this point it's just important to be familiar with the kinds of data shown on this page.

[](#stepentry)Step Entry
========================

Shepherding individuals through your program can be done either from the _Step Types_ page or from the _Person Profile_ page (which we’ll examine in the next section). Whichever path you take, you’ll wind up at a _Step Entry_ page like the one pictured below. This is where you'll maintain step type information for an individual.

Step Entry Page

![Step Entry Page](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-entry-page-with-campus-v13.png)

1 Person

In this example we’re adding a step from within the _Steps_ area, so we need to provide a person. Steps entered from the _Person Profile_ page will automatically populate the person’s name.

2 Campus

If you have multiple campuses configured, you can optionally associate the step with a particular campus.

3 Start Date/End Date/Date

*   **Spans Time:** If the step spans time then _Start Date_ and _End Date_ fields will be available. Use these fields to track the dates on which a person has started or finished a particular step. These are displayed as the “Date Started” and “Date Completed” fields on the _Step Types_ page.
*   **Does Not Span Time:** If the step doesn’t span time, then you’ll see only a single _Date_ field. In this case the date is treated as an end date and will be displayed as the “Date Completed” on the _Step Types_ page.

4 Status

Here you can update the individual’s status for the step. We’ll show you how to maintain the list of statuses when we talk about [Editing Step Programs](#editingstepprograms) in the next section.

5 Step Note

Here you can add a Step Note to the step, to track details or record items for future reference.

6 Step Attributes

Any attributes applicable to the step will appear here. We’ll cover how to set up step attributes [below](#stepattributes).

When you add or change a step for a person, a history of those changes can be viewed on the _Person Profile_ page under the [History tab](https://community.rockrms.com/documentation/bookcontent/5#historytab) in the _Person History_ section.

While the _Step Entry_ page is used for manually maintaining step information for individuals, there are automated alternatives. Steps can be updated from [Streak Achievements](#stepconfiguration) or as part of a [Workflow](https://community.rockrms.com/documentation/bookcontent/12#defaultactiontypes).

[](#bulkentry)Bulk Entry
========================

Often, you’ll need to add a step for a (sometimes very long) list of people. Luckily, that doesn’t mean you have to spend endless hours on repetitive data entry. The _Bulk Entry_ page lets you quickly enter steps for a large number of individuals. You can access bulk entry for steps by clicking the icon from either the _Step Program_ or _Step Type_ pages.

Bulk Entry

![Bulk Entry](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-type-bulk-entry-v13.png)

In our Discipleship example we can use the “Pastor” attribute to record which pastor performed the baptisms. This is great if large groups are baptized by different pastors because you only have to select a pastor once for any number of individuals. We’ll cover how to set up attributes like this in the next chapter [below](#stepattributes).

Show on Bulk
============

If the _Show on Bulk_ option is not enabled for the attribute, then the attribute will still appear in bulk entry, but it will need to be set for each person individually.

[](#nextstepsforsteps)Next Steps for Steps
==========================================

Now that we’re more familiar with the concepts of step types, step programs and step entry, we're ready to see how it all gets maintained. We'll start at the program level, and then move on to setting up individual step types.

[](#editingstepprograms)Editing Step Programs
=============================================

Let’s go back to the _Step Program_ page to see how we can edit our programs. Clicking the Edit button lets you update the program and its configurable settings.

Edit Step Program

![Edit Step Program](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-program-edit-v13.png)

1 Name

Provide the name of the program.

2 Active

Set the program to active or inactive.

3 Description

Add a meaningful description of the program.

4 Icon CSS Class

Choose the CSS icon to use for the program.

5 Default List View

Select either _Cards_ or _Grid_ as the default layout for viewing Steps on the _Person Profile_ page (see the Default List View section below for full details).

6 Category

Categories help to group your related programs. You can view and manage step program categories from Admin Tools > System Settings > Category Manager using the _Step Program_ entity type.

7 Step Type Attributes

This is where you can create attributes that will be applied to each Step Type associated with this Program. These can be seen and edited when [editing the Step Type](#editingsteptypes).

8 Statuses

This is where you'll set the different statuses, like 'In Progress' or 'Complete' for the program. We'll discuss this area in detail [below](#statuses).

9 Workflows

Workflows and Step Programs are a powerful combination. We'll go into details on the options available to you [below](#stepprogramworkflows).

Default List View
-----------------

Steps information for an individual can be viewed under the Steps tab on the person profile, either as cards or in a grid. You can toggle between these views from within the person profile using the and buttons. As noted in the prior section, the default view is set at the step program level.

Cards View

![Person Profile Steps Cards](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/pers-profile-steps-cards-v14.png)

The screenshots above (cards) and below (grid) are both for the same person following the Discipleship program.

Grid View

![Person Profile Steps Grid](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/pers-profile-steps-grid-v14.png)

While in card view, hovering over a card lets you view additional details as well as access the _Step Entry_ page. This is controlled by the Step Type Advanced Settings (see [Editing Step Types](#editingsteptypes)).

Step Security
=============

A person needs to be in a role with Edit permission for the Steps block in order to add steps from the _Person Profile_ page.

Card View Hover

![Person Profile Steps Cards Hover](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/pers-profile-steps-cards-hover-v14.png)

Cards or Grid?
==============

The cards view will condense multiple occurrences of a step into a single card, whereas the grid view will display a row for every occurrence of the step. For this reason, the grid view may be more appropriate for step programs that allow steps to be repeated often. The grid view also displays a "Summary" column that shows step attributes configured to show on grids.

If you have multiple campuses, you can choose to show or hide the campus associated with a step by changing this block's settings. This applies to both the cards and grid views.

The default view doesn't have to be the same for all of your programs. Choose the one that seems best for each individual program. You can always change it later if you need to.

Statuses
--------

The values you set up here are used to track an individual’s status for any step type in the program. This list shows each status and whether it is treated as Completing the step.

Statuses

![Step Program Statuses](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-program-edit-statuses-v13.png)

The _Create Status_ page is used when adding or changing a status.

Create/Edit Status

![Create Status Page](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-program-create-status-page-v13.png)

1 Name

Add the name of the status (e.g., In Progress).

2 Is Active

Set the status to active or inactive.

3 Is Complete

Select this option only if the status means the entire step has been completed.

4 Display Color

Select the display color for the status.

Completed But Not Completed
===========================

In the [Step Entry](#stepentry) section we discussed the “Date Completed” field. It’s important to note that this date, by itself, is not enough to indicate that the person has finished a step. For a person to truly complete a step, an “Is Complete” status and a completion date should both be present.

Workflows
---------

Here you can add one or more workflows to the program. Keep in mind that workflows added to the program apply to all the steps in program, regardless of the step type.

Step Program Workflow

![Step Program Workflow](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-program-edit-workflow-v13.png)

The workflow can be launched according to one of three triggers:

Workflow Triggers

![Workflow Triggers](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-program-add-workflow-v13.png)

*   **Step Completed:** The workflow is launched when the step is assigned any “Is Complete” status (see [Editing Step Programs](#editingstepprograms)).
*   **Status Changed:** The workflow is launched either when there is any status change, or according to specific status changes you define.
*   **Manual:** The workflow is launched by a manual click of a button.

See our [Blasting Off With Workflows](https://community.rockrms.com/documentation/bookcontent/12/) guide for more information on creating workflows.

Why Use Step Program Workflows?
===============================

Applying a workflow at the step program level (as opposed to the step type level, described in the next section) is a great way to save yourself time and effort on repetitive tasks. For example, do you have an email that should be sent after the completion of each step in a program? If so, it can be added and maintained once at the program level instead of individually for each step type.

[](#editingsteptypes)Editing Step Types
=======================================

From the _Step Type_ page click the Edit button to change the step type settings.

Edit Step Type

![Edit Step Type](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-type-edit-v13.png)

1 Name

Provide the name of the step type.

2 Active

Set the step type to active or inactive.

3 Description

Provide a description for the step type.

4 Icon CSS Class

Choose the CSS icon to use for the step type.

5 Highlight Color

Choose the color to use for the step type.

6 Allow Multiple

Select whether the step can be completed more than once by the same person.

7 Spans Time

Select whether the step occurs over a period of time or in a moment of time.

8 Show Count on Badge

Select this option if you want the number of completions for the step type to be shown on the corresponding badge. See the [Steps Badges](#stepsbadges) chapter for full details.

9 Prerequisite Steps

Indicate if one or more other steps within the program should be completed before this step can be started.

10 Is Date Required

You can choose whether the date associated with a step is required. This applies to both Start and End dates if the step _Spans Time_.

Missing Some Prerequisites?
===========================

Behind the scenes we have programming that prevents two step types from being set as prerequisites of each other. For example, if Baptism is configured as a prerequisite to the Serve step, then the Serve step won’t appear in the list of available prerequisite steps for Baptism.

The step type configuration also has settings for Step Attributes, Workflows and Advanced Settings. We will cover each of these areas individually in the following sections below.

Step Attributes
---------------

One or more attributes can be associated with a step type, using the page pictured below.

Assigning attributes to step participants is a great way to track details beyond whether a person simply started or finished a step.

Step Attributes

![Step Participant Attributes](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-type-attribute-edit.png)

We should pause a moment here to highlight the _Show on Bulk_ option pictured above, which is described in the [Bulk Entry](#bulkentry) section. Regardless of whether the _Show on Bulk_ option is used, the attribute value can always be set for an individual from the _Step Entry_ or _Bulk Entry_ pages.

If you need more information on setting up attributes in general, check out our [Person and Family Field Guide](https://community.rockrms.com/documentation/bookcontent/5#managingpersonattributes).

Workflows
---------

We’ve seen how workflows can be added at the program level, but they can also be added to individual step types. As you might have guessed, the key difference is that workflows added to a step type will only be used for that particular step.

Add Workflow

![Step Type Add Workflow](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-type-add-workflow.png)

For additional details on using workflows in Steps, see the [Editing Step Programs](#editingstepprograms) section. For every other detail you could imagine related to workflows in general, see our [Blasting Off With Workflows](https://community.rockrms.com/documentation/bookcontent/12/) manual.

Advanced Settings
-----------------

The Advanced Settings panel has options for customization and automation as described below.

Step Type Advanced Settings

![Step Type Advanced Settings](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-type-edit-advanced-settings-v11.png)

1 Auto-Complete Data View

New steps will automatically be added and completed for the people in the selected Data View when the _Steps Automation_ job runs. This job respects the 'Allow Multiple' and 'Prerequisite Steps' configuration options described above. If a person is found by the Data View, any currently incomplete steps of this type will be completed for them. If 'Allow Multiple' is not enabled for the step type, and if the person hasn't taken the step, then a new step will be added in a Complete status. If 'Allow Multiple' is not enabled, and if the person already has a Complete step of this type, then nothing will happen for that person.

2 Allow Manual Edit

If this is disabled, people will not be able to add or edit steps of this type from the _Person Profile_ page. This does not prevent manually editing steps from within the step program pages.

3 Card Content Lava Template

This is the Lava used to display the card content for Steps. See the [Editing Step Programs](#editingstepprograms) section for additional details on cards. Generally, you shouldn’t need to make changes here.

[](#stepscharts)Steps Charts
============================

In prior sections we only briefly mentioned the charts you’ve seen on the administrative screens. Now that we’re more familiar with the data behind those charts, we’re ready for a closer look. It’s important to learn how to read and use these charts because they are truly powerful tools that provide a lot of useful information at a glance.

Unless otherwise noted, the information in this section applies to both the program and step type activity summary charts.

Let’s start by looking at the parts of the chart.

Step Program Chart

![Step Program Chart](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-program-area-chart-v13.png)

1 Adjust Chart Timeframe

The time period shown on the chart (i.e., the x-axis) can be changed here. If a “Year” interval is chosen then the chart will display months as pictured above, otherwise you'll see specific dates.

2 Chart Data

The data displayed here is in the form of a stacked area chart, which we'll describe in detail below.

3 Legend/Key

Only completed step types will appear on the _Step Program_ chart. The _Step Type_ chart shows activity for either started or completed steps.

Note
====

By default, the Steps charts are set to display the “Current Year”. This default, and the option to disable the chart entirely, can be changed in block settings.

Let’s focus on the April 2021 section of the chart below. We see the purple area reaches the “17” line on the chart. This doesn't mean that seventeen people completed the Small Group step. In this kind of chart, the Small Group area begins where the Serve area ends…they are stacked on top of each other, hence the term “stacked area chart”.

The Baptism, Starting Point Class, and Small Group steps each had four completions. Five people completed the Baptism step. Adding those up, we get seventeen total completions in April 2021 as pictured below.

Example Step Program Chart

![Step Program Area Chart Zoomed](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-program-area-chart-zoomed-v12.png)

Build a Rainbow
===============

Besides controlling the icon colors on the person profile, the highlight color you assign to a step type is reflected in the program activity summary chart. The colors you choose can make a big difference in how easy (or difficult) it is to read your chart.

Unlike the Step Program area chart, the Step Type area chart is "overlapping" and not "stacked". It's important to know the difference between these two types of charts.

In the example below, the green area (Completed) extends to the “6” line in February 2021. This actually means six people Completed the step. Also in May 2021 we see that four people Started the step, represented in blue. The blue and green areas overlap, hence the term "overlapping area chart".

Example Step Type Chart

![Step Type Area Chart Zoomed](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-type-area-chart-zoomed-v12.png)

[](#stepflow)Step Flow
======================

Rock's Step Flow feature is an excellent way to get valuable insights into your step program. This diagram shows each step in your program, and graphically displays how people move from one step to another or stop after a certain step. You'll want to pay special attention to those areas where people abandon the program, which we'll show you how to spot.

First, to access the Step Flow for a program, navigate to People > Steps and select your program. From there, click the Step Flow button as pictured below.

Access Step Flow From Program

![Access Step Flow From Program](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/access-step-flow-from-program-v14.png)

From the Step Flow page, you can see and do several different things. Let's break down how this page works so you can use it to its full potential.

Step Flow

![Step Flow](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-flow-page-v14.png)

1 Step Completion Date Range

You can select a date range to use as a filter. The data in the Step Flow will be updated to show only steps completed within the selected date range.

2 Max Levels to Display

In this example we're only showing four levels, but more exist. You might need to increase this number to get a full picture of how people are flowing from one step to the next across your program.

3 Campus

If a campus is selected, then the Step Flow will only reflect steps associated with that campus. This is a great way to visualize differences between campuses.

4 First Level

This is the first step that people take in the program. In this example we can see each step in the program listed vertically. This tells us that people start the program from any one of the four steps, but we know most people start with Baptism or the Starting Point Class since those are the largest bars.

5 Step Flow

The thick gray lines that stretch from one colored bar to the next represent people moving from the step on the left to the step on the right. The thicker the line, the more people it contains. In this example the majority of people who start with the Starting Point Class proceed to the Starting Point Class a second time. We can also see that some people who started with the Starting Point Class proceeded to the Small Group step. Notice that nobody does the Baptism step after the first Starting Point Class step.

6 Step Falloff

You'll want to pay close attention to areas like this. After the second Baptism step, some people proceeded to the Starting Point Class, and some proceeded to Small Group. But there's a large empty area to the right of the blue bar. This represents people who took the step and then did not proceed with any other steps. In this example we see that a majority of people are no longer involved with the program when their second step is Baptism.

7 Last Level

Remember that in this example we selected '4' as our _Max Levels to Display_, so nothing will be displayed beyond that point. Don't assume nobody continued with the program after their fourth step.

You'll want to pay special attention to the empty areas to the right of the colored bars. These areas reflect program abandonment, or step falloff. You'll want to investigate why people stop participating in the program after certain points. The Step Flow lets you visually see where those points of step falloff are, to identify areas where changes in your program might be needed.

As you can see, the Step Flow provides great insight into how people move from one step to another (or stop moving entirely) throughout your program. That might be all you need, but there's more to be seen. Hovering your mouse over the colored bars or over the gray flow lines will give you additional details, providing further insights.

Hover Information

![Hover Information](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/step-flow-hover-text-v14.png)

1 Step Details

Hovering your mouse over one of the colored vertical bars will give you the name of the step, and how many people took that step. Here we can see that 12 people started the program with the Starting Point Class step.

2 Flow Details

If you hover your mouse over any of the gray lines, you can get additional details. In this example we're looking at the flow from a Starting Point Class step to a Serve step. We can see that four people who took the Starting Point Class as their second step proceeded to the Serve step. We can also see the average amount of time between those two steps is 44 days.

[](#reportingonsteps)Reporting on Steps
=======================================

These charts aren’t the only way to get data from steps. Rock ships with data view filter types for steps, to use in reporting.

*   **Step Participants By Attribute Value:** Lets you filter people records by the value of an attribute on the person’s step. You must provide a Step Program and a Step Type.
*   **Steps Taken:** Allows you to filter people records according to their involvement in a step program. You can add criteria related to individual steps, or even start/end dates.
*   **Step Data View:** You can create a _Data View_ to return step entries, then use this filter to get all the people associated with those steps.

If you’re not sure about data view filters or how to use them in reporting, our [Taking Off With Reporting](https://community.rockrms.com/documentation/bookcontent/6#filteringusingdataviews) guide has all the information you need.

In addition to charts and data views, you can query against the _StepProgramCompletion_ table. This table tells you when the person started and completed the Program by providing the earliest Start Date and, in many cases, the latest End Date across all completed Steps. Additional logic is applied when Steps have been repeated, to find the earliest appropriate End Date. A row is added to the table each time the person completes all Steps in the Program.

[](#stepsbadges)Steps Badges
============================

You have the option of displaying badges for your step programs, to quickly and easily view an individual’s progress from places like the _Person Profile_ page or Connection Requests.

To add Steps badges, first navigate to Admin Tools > General Settings > Badges and add a row to the badge list. A single badge should be set up for the entire program (and not one badge for each step in the program) using the page below.

Edit Badge

![Steps Create Badge](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/steps-create-badge-v13.png)

1 Name

Provide the name of the badge.

2 Description

Add a description for the step program/badge.

3 Entity Type

For step badges, the entity type will be “Person”.

4 Badge Type

For step badges, the badge type will be “Steps”.

5 Step Program

Choose the step program to which the badge applies. This field only appears if you've selected “Steps” as the badge type.

6 Display Mode

Select how badges appear in the person profile.

*   **Normal:** Badges for individual steps are displayed as normal-sized badges, similar to existing badges you’re used to seeing.
*   **Condensed:** Badges for individual steps are smaller icons, grouped together with other steps from the program.

Example "Normal" Display Mode

![Badge Normal Display](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/pers-profile-steps-badges-normal-v14.png)

Example "Condensed" Display Mode

![Badge Condensed Display](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/pers-profile-steps-badges-condensed-v14.png)

Note
====

The “Show Count on Badge” setting we mentioned in the [Editing Step Types](#editingsteptypes) section only applies to the “Normal” display mode.

After you’ve set up your new badge, the next step is to add it to the _Person Profile_ page.

From the person profile, click the button in the _Admin Toolbar_. This will display a block properties button for each block on the page. Hover over the badge container block and select its button. The _Badges_ page pictured below will appear, where you can select your new badge to have it added to the bar.

Badges

![Badges](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/pers-profile-block-badges-v14.png)

Check out our [Person and Family Field Guide](https://community.rockrms.com/documentation/bookcontent/5#badges) if you want to learn more about badges in general.

[](#streaksoverview)Streaks Overview
====================================

Before we get started, you should know we’re not finished with our work on streaks. We’re excited to show you what we have so far, but there are still a lot of features that aren’t quite ready just yet. Still, there’s plenty to see and do, so let’s dive in.

Streaks takes attendance data to the next level by helping you find and analyze meaningful engagement patterns. So, what does that mean? Whether or not you’re into sports, you’ve probably heard people refer to a team or a player as being on a ‘winning streak’ or a ‘losing streak’, which just means they’ve won or lost several times consecutively. Streaks in Rock is similar, except we’re talking about attendance or, in a broader sense, engagement.

The most basic definition of streaks is that it tells you how many times in a row someone engaged at your organization. But, even though it’s very cool to know that someone is showing up for their 16th straight weekend, that definition is insufficient because there’s a whole lot more Streaks can do.

[](#streaksmaps)Streaks Maps
============================

To truly understand streaks, you’ll need to understand maps, so that’s where we’ll start. These maps won’t help you navigate the globe, but they will help you navigate streaks like you’re the Magellan of Rock!

We’ve already mentioned that streaks are used to find engagement patterns. Maps are what Rock uses to collect and analyze the data needed to find those patterns.

There are three kinds of maps:

*   **Occurrence:** The occurrence map defines when it’s possible to participate in something. This gives a framework for deciding if an individual has been participating regularly or not. After all, how can you tell if someone missed a meeting if you don’t know there was a meeting scheduled?
*   **Engagement:** The engagement map tells you when an individual has or has not participated in something. In effect, you can think of it as a person’s attendance. However, it’s important to know that the engagement map isn’t just a fancy new name for attendance. The two share many characteristics but are not the same.
*   **Exclusion:** In school you may have been introduced to the concept of ‘excused’ versus ‘unexcused’ absences. An excused absence is acceptable, but an unexcused absence might have negative consequences. The exclusion map is for tracking excused absences. Exclusions don’t prevent a streak from being positively affected by an attendance, but absences are ignored and don’t cause streaks to be broken. Exclusions can be provided for an individual or a location. Exclusions on locations can be used for events like snow days or other circumstances that might close a campus.

All three of these maps are used to calculate streaks. For example, let’s say you want to calculate someone’s streak in a recurring weekly meeting. You would need to know when meetings were held (occurrence map), which meetings someone attended (engagement map) and whether missed meetings should be forgiven (exclusion map).

[](#streaktypes)Streak Types
============================

The streak type tells the system where and when to look for streaks. For example, do you want to track weekend attendance at the Main Campus since it opened? Or do you want to track small group attendance at the West Campus starting six months ago? All that gets built into the streak type setup. A streak type also contains the people for whom you want to track streaks.

To manage your _Streak Types_, head to People > Engagement > Streaks. From here you can see streak types you’ve already set up, along with some basic information about each. You can also add or delete streak types.

We’ll start by reviewing what you can see on this page. We’ll explain the setup in the next section.

Streak Types List

![Streak Types List](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-types-list-v13.png)

1 Name

The name of the streak type is displayed in the first column.

2 Active

A checkmark will appear if the streak type is currently active.

3 Frequency

The frequency for the streak type (Daily, Weekly, Monthly or Weekly) is shown here for reference.

4 Start Date

Every streak type requires a _Start Date_. The start date plays a major role in calculating streaks, so it’s important to keep track of it.

5 Enrollments

The _Enrollments_ count is the number of individuals enrolled in the streak type.

Don’t worry if you’re not sure exactly what all of this means yet. What’s important for now is to be familiar with the page in general. We’ll get into the details in the next section.

[](#addnewstreaktype)Add New Streak Type
========================================

Adding new streak types may look like a simple task because there aren’t a ton of fields. While it’s true that the setup is simple, don’t take it lightly. Before you start, it’s best to have a plan in mind for why and how you want to use the streak type.

In this example we’ll be tracking streaks for our “ASU Student Group”, a small group that meets weekly on Saturdays. Everything related to the group has already been set up. In fact, the group is already well-established and has been meeting regularly for a while. They weren’t taking attendance in Rock at first but started a few months ago. With that backdrop in mind, let’s add a new streak type for this group.

Add New Streak Type

![Add New Streak Type](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-add-new-streak-type-v13.png)

1 Name

Provide a name for the streak type. For our example we’re just using the name of the small group.

2 Active

Set the streak type to active or inactive.

3 Description

You can optionally provide a description for the streak type.

4 Start Date

The start date controls how far back in time the streak type can look for data. In this example we used 8/1/2021, so engagements from July 2021 or earlier won’t be included in these streak calculations.

5 Sync Linked Activity

If this is enabled, then additions to a person's attendance or interactions (based on the Linked Activity) will cause a matching update to the person's engagement map. The reverse will also happen, where adding to a person's engagement map will result in creating new attendance or interaction data.

6 Require Enrollment

If enabled, an individual would need to be manually enrolled in the streak type. Otherwise, the person's engagement will create an enrollment into the streak type for them automatically.

7 Linked Activity

This setting, combined with the _Activity Target_ setting described below, helps link the streak type to group, schedule, location, interaction, financial and attendance data. There are several options to choose from:

*   **None**  
    You can choose not to have any Linked Activity. In this case you'll have to manage everything (enrollments, maps, exclusions) manually.
*   **Attendance: Any**  
    Use this option to cast a wide net. As the name implies, this option will use any available attendance data to build streaks.
*   **Attendance: Group**  
    You might use the group option to track streaks for something like weekend attendance. In that case, the _Activity Target_ would be the group you use for weekend attendance tracking. The locations and schedules associated with the group are then used to build the streak type maps.
*   **Attendance: Group Type**  
    If you select group type then all groups of a certain type (according to your _Activity Target_ selection) will be included in the occurrence and engagement maps. For example, you may want to use this linked activity if you're tracking streaks for serving because, in many cases, serving groups all share the same group type.
*   **Attendance: Group Type Purpose**  
    With this option, all groups under any group types that share the same purpose are used to build occurrence and engagement maps. For example, you might have two different group types that both contain serving groups. You'll pick the specific purpose in the _Activity Target_ field below.
*   **Attendance: Check-In Configuration**  
    If you select this option then any group that's used in the specified _Activity Target_ check-in configuration will count toward the occurrence and engagement maps. This option is probably best for more complex streaks, like tracking children’s check-in.
*   **Interactions**  
    You can use interaction data to drive your streaks. You can choose either Interaction Channels, Interaction Components or Interaction Mediums as the Linked Activity. This is a great way to track engagement beyond traditional in-person attendance.
*   **Financial Transaction**  
    Giving is another area where a person can have a streak. You can optionally limit the financial transactions that are evaluated for the streak to a specified account.

It’s important to remember that for this example we’re using the _Attendance: Group_ linked activity.

8 Activity Target

This field changes according to your _Linked Activity_ selection (above). Specify the group, group type, group type purpose, financial account or check-in template you want to use to build maps for the streak type.

In this example we selected _Attendance: Group_ as the linked activity. This allowed us to specify “ASU Student Group” as the group we want for our streak type.

9 Frequency

The frequency determines whether this is a _Daily_, _Weekly_, _Monthly_ or _Yearly_ streak type. Pick the frequency that makes the most sense for what you’re tracking. Our example group meets once every week on Saturdays, so _Weekly_ was selected. You might pick _Daily_ if you’re tracking something that meets several days per week.

10 Day of Week Start

If the frequency is _Weekly_, then you can optionally choose the start day of the week. You’ll only need this if you want to use a different start day than the system default.

Warning
=======

You can’t manually change the _Start Date_ or _Frequency_ after they’re saved. Generally, the only way to correct these fields is to start over with a new streak type.

[](#streaktypedetail)Streak Type Detail
=======================================

After saving your new streak type, you’ll be brought to the streak type detail page. You can also access this page by clicking on a streak type from the list (see [Streak Types](#streaktypes)).

We’ll look closely at the detail block before moving down the page to check out the list block at the bottom.

Streak Type Detail Block

![Streak Type Detail Block](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-type-detail-block-v13.png)

1 Streak Type Information

Along the left side of the block, you can see most of the settings for the streak type. These are shown for reference. You can edit or delete the streak type using the corresponding buttons at the bottom of the block.

2 Achievements

Clicking here takes you to a page where you can view or edit _Achievements_ for the streak type. See the [Achievements](#achievements) chapter below for instructions on setting up achievements.

3 Map Editor

This button will take you to an edit page that allows you to modify the occurrence map. We’ll explore the map editor in the [Occurrence Map Editor](#occurrencemapeditor) section below.

4 Exclusions

This button will navigate you to a page that allows you to add location exclusions. We’ll cover the details in the [Location Exclusions](#locationexclusions) section.

5 Rebuild

Clicking this button deletes streak data and rebuilds it from attendance or interaction records. Because rebuilding deletes data, be sure that's really what you want to do. However, you might want to _Rebuild_ (i.e., build) as part of your initial setup. The impacts of rebuilding a streak type are described in the [Streak Type Rebuild](#streaktyperebuild) section.

You may notice that the _Start Date_ changes from what you originally entered when creating the streak type. The date may be rounded up to the next Sunday. This happens if the streak type is weekly because weeks end on Sunday by default. To put it another way, if you’re tracking streaks on a weekly basis then it doesn’t really matter which specific day of the week someone engaged.

[](#occurrencemapeditor)Occurrence Map Editor
=============================================

Click on the Map Editor button to edit the occurrence map for the streak type.

When you add a new streak type the occurrence map will initially be blank as pictured below. The map can be populated manually through the editor, or it can be built from attendance or interaction data using the streak type Rebuild button (see [Streak Type Rebuild](#streaktyperebuild)).

Occurrence Map Editor

![Occurrence Map Editor](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-occurrence-map-editor-v13.png)

1 Date Range Selection

Adjust the date range and click the Update button to change the dates you see in the bottom portion of the block.

2 Occurrence Map

This is where you’ll edit the occurrence map by picking which weeks (or days) should be included in the map. The _Start Date_ for the streak type is 8/1/2021, so any dates prior to that can’t be chosen. You also can’t select dates that are in the future.

When you update the occurrence map, you’re changing the list of possible meetings. The most common reason to do that would probably be to remove dates where a regularly scheduled meeting isn’t taking place due to things like weather events. Removing dates from the occurrence map ensures nobody’s streak is broken for missing something that never actually took place. It's important to know that changes to the occurrence map will not be reflected in everyone's streak data in the blocks until the nightly cleanup job runs.

In our small group example, we’ll manually select all of the weeks that are available as pictured above. Any absences in any of those weeks will count against a person’s streak.

You might find it odd that the current week (or day) is not shown in the streak graph. Not to worry, we did this intentionally to avoid scaring anyone into thinking their streak had been broken, when in reality they simply haven't had a chance to engage yet. By default, streak calculations and graphs exclude the current day or week.

[](#locationexclusions)Location Exclusions
==========================================

Click the Exclusions button from the _Streak Type_ page to access the list of excluded locations. Excluding a location means a person’s streak won’t be broken if they missed an event or meeting at that location for the date(s) specified. You could use this for snow days, or other similar events that might close a campus or location.

Location Exclusion

![Location Exclusion](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-location-exclusion-v13.png)

[](#streaktypeenrollment)Streak Type Enrollment
===============================================

Below the streak type detail block is the enrollment list block. Here you can see all the participants in the streak type and their streaks.

When you first create a new streak type the enrollment list will be empty. The list pictured below has individuals on it for example purposes only. We’ll review the block first, and then show you how to get individuals added.

Streak Type Page - Enrollments

![Streak Type Page - Enrollments](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-type-page-enrollments.png)

1 Name

Individuals who are enrolled in the streak type have their names and photos listed here.

2 Recent Engagement

This graph shows the recent history of engagement for the individual. Our example is weekly, so each bar represents one week.

3 Current Streak

This column shows a person’s current streak, relative to today.

4 Longest Streak

This column shows the longest streak the individual has ever had.

5 Engagements

You can see the total number of engagements for the individual.

6 Enrollment Date

This is the date when the person entered the streak type. Absences and engagements prior to this date are ignored when calculating the person's streak.

There are two ways to enroll individuals into a streak type. We mentioned earlier that you can click the Rebuild button to add individuals from attendance records. We’ll look closely at that method in the [Streak Type Rebuild](#streaktyperebuild) chapter. The other method is to manually add a single person to the list.

Add New Streak

![Add New Streak](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/add-new-streak-v13.png)

1 Person

Find the person you want to enroll into the streak type.

2 Location

Select the person’s ‘home’ location to use for exclusions. If you have multiple campuses, you might want to track a person’s streak at one campus separately from the others.

3 Enrollment Date

Enter the date when streaks should start for this person. Absences and engagements before the enrollment date are ignored. You can think of this as being like the streak type _Start Date_, but for an individual person. You can't manually change the enrollment date after you save, so it's important to pick the correct date for the individual.

As soon as you save, you’ll be brought to the _Enrollment Detail_ page.

[](#streakenrollmentdetail)Streak Enrollment Detail
===================================================

You can access the _Enrollment Detail_ page either by clicking on an existing person from the enrollment list block, or after manually adding a new person to the list.

In the prior section we added Ted Decker with an Enrollment Date of 8/1/2021. After clicking Save we’re brought immediately to Ted’s _Enrollment Detail_ page.

Enrollment Detail Page - New Add

![Enrollment Detail Page - New Add](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-enrollment-detail-new-add-v13.png)

1 Enrollment Date

The date we selected when adding Ted to the list is shown here for reference. It’s important to remember that every individual in a streak type can have a different enrollment date.

2 Streaks

Ted is showing zeros for _Current Streak_ and _Longest Streak_. That might be fine, but we have group attendance data showing Ted has been participating regularly for months. Ted’s attendance isn’t reflected here because we manually added him and are (at this point) manually maintaining his streak data.

3 Rebuild

We mentioned the Rebuild button on the _Streak Type_ page earlier. The button here is very similar. You’ll see what it does in the [Individual Rebuild](#individualrebuild) section.

4 Engagement Map

Similar to an attendance record, you can use this editor to indicate when an individual has or has not engaged. If you use the Rebuild button, this map will be updated to match Ted’s small group attendance data (see [Individual Rebuild](#individualrebuild)). It’s blank now because we’re building Ted’s streak manually (see [Manual Tracking](#manualtracking)).

5 Engagement Exclusion Map

Here you can manage exclusion dates for an individual. For excluded dates, absences are ignored and don’t cause streaks to be broken. The selections here don’t apply to anyone else in the streak type.

[](#manualtracking)Manual Tracking
==================================

We know from attendance records that Ted should have streak numbers higher than zero. But we’re taking the manual path, so we need to manually feed that into Ted’s streak data. Take a look at how the page changes after selecting the “Sep 05” week in the engagement map.

Enrollment Detail Page - Manual

![Enrollment Detail Page - Manual](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-enrollment-detail-page-manual-tracking-v13.png)

1 Engagement Graph

With an engagement manually recorded, now we have some streak data. You can see a blue bar has been added near the end of the graph to mark Ted’s recent involvement.

2 Longest Streak

We can also see Ted's _Longest Streak_ count is now “1” instead of “0”. The _Current Streak_

is still zero because the engagement we added is in the past.

3 Engagement Map

Adding the selected week to the map is what updated the streak data noted above.

Map Updates
===========

After updating the engagement or exclusion maps be sure to save and then refresh the page to verify the changes.

That’s the manual route for Ted. But what if you want to build streaks in a more automated way according to actual attendance records? As we mentioned earlier, you can do that by using the _Rebuild_ feature.

[](#individualrebuild)Individual Rebuild
========================================

Let’s see how Ted’s data has changed after clicking the Rebuild button.

Individual Rebuild
==================

The rebuild process will delete the individual’s engagement map data and rebuild it from attendance records. Any manual changes you’ve made to the engagement map will be lost.

Enrollment Detail Page - Rebuild

![Enrollment Detail Page - Rebuild](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-enrollment-detail-page-rebuild-v13.png)

1 Engagement Graph

At the top of the block, we see several new bars have popped up. From left to right, this graph shows:

*   Two consecutive weeks of attendance (8/8 – 8/15)
*   One week absent (8/22)
*   Two consecutive weeks of attendance (8/29 – 9/5)
*   One week absent (9/12)
*   One week of attendance (9/19)

2 Streak Data

As a result of the rebuild, the _Current Streak_ and _Longest Streak_ were both updated from Ted's attendance records.

3 Enrollment Date

Notice that Ted's enrollment date was changed from 8/1 to 8/8 by the rebuild process. Even though Ted has attendance data prior to that date, 8/8 was chosen because individual streaks can't go any earlier than the streak type start date.

4 Engagement Map

When building from attendance data, you’ll see three different types of date selections in the engagement map:

*   **Selected, Editable:** Weeks where Ted has small group attendance data have been selected with a checkmark (e.g., “Sep 05”). You can manually remove these engagements from the streak data by unchecking these boxes.
*   **Not Selected, Editable:** In this example Ted didn’t attend the weeks of “Aug 22” or “Sep 12” so they are not selected. You can manually add engagements to streak data by selecting these boxes.
*   **Not Selected, Not Editable:** This applies to dates before the person’s enrollment date, or dates in the future.

What if we want to include Ted's attendance data from June and July? We've already established that this streak can't go any earlier than 8/1 due to the streak type start date, and that the start date can't be changed. So, at this point, if we want to include earlier attendance, we'll need to rebuild the streak type. Aside from creating an entirely new streak type, rebuilding is the only way to alter the start date. We'll cover what that looks like in the [Streak Type Rebuild](#streaktyperebuild) chapter.

Don't forget that the streak type occurrence map (see [Occurrence Map Editor](#occurrencemapeditor)) applies to a person's individual enrollment data. Only dates that are selected on the occurrence map will be reflected in an individual's streak data.

[](#exclusions)Exclusions
=========================

Looking closer at the _Engagement Map_, we can see Ted didn’t attend the week of August 22nd. We know Ted’s car broke down in a storm that week, and we’re feeling generous, so we’ve decided to ignore that absence in Ted’s streak data. All we need to do is select the "Aug 22" week in the exclusion map and click the Save button. Now it’s like the absence never happened.

Enrollment Detail Page - Exclusion

![Enrollment Detail Page - Exclusion](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-enrollment-detail-page-exclusion-v13.png)

1 Engagement Graph

You might notice the engagement graph looks the same as it was before adding the exclusion. That's because the graph still accurately reflects data from attendance records. Ted’s absence still exists even though we excluded it from his streak data.

2 Longest Streak

Ted’s longest streak is now "4" even though we can see from the engagement graph that he never actually attended four times in a row. The exclusion doesn’t count toward the streak, but it also doesn’t break the streak. In other words, the excluded date is skipped over.

3 Engagement Map

Like the engagement graph, we can still see that Ted didn’t attend the week of "Aug 22" because it isn’t selected in the engagement map. This is accurate according to attendance data.

4 Engagement Exclusion Map

Selecting "Aug 22" triggered the updates in the above points. If anyone were to question the discrepancy between attendance and streak data, it’s clear here that a week was manually excluded.

[](#streaktyperebuild)Streak Type Rebuild
=========================================

We’ve already covered streak types, but we didn’t go into detail on what happens when you use the _Rebuild_ feature. Now that you’ve seen what rebuilding an individual’s enrollment looks like, you can apply those concepts to rebuilding the streak type.

Let’s go back in time to when we first added our new streak type. As a reminder, this is how the page originally looked before we added Ted:

New Streak Type

![New Streak Type](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-new-streak-type-for-rebuild-v13.png)

1 Start Date

Note the 8/1/2021 start date because it’s about to change.

2 Enrollments

There are no enrollments currently. Remember, we’re going back in time to before we manually added Ted, so this is a clean slate.

3 Rebuild

We’ll use the rebuild feature to enroll individuals into the streak type according to attendance data.

Streak Type Rebuild
===================

Occurrence and enrollment map data will be deleted and rebuilt from attendance records if you rebuild the streak type. Any changes you made to the occurrence map or to individuals’ enrollment maps will be lost.

After clicking the Rebuild button you’ll notice several changes.

Streak Type Rebuild

![Streak Type Rebuild](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-type-after-streak-rebuild-v13.png)

1 Start Date

The rebuild process changed the start date to 3/28/2021. This is the earliest week that attendance data exists for the small group.

2 Enrollments

Three people were automatically added to the enrollments list. These individuals were selected because they have attended the small group at least once.

3 Streaks

The Current Streak, Longest Streak and Engagements counts are based only on attendance data.

4 Enrollment Date

Each person’s enrollment date is calculated individually by the rebuild process. The date is set to the earliest date the person has ever attended according to attendance records. In this case all three individuals attended the first meeting where attendance was recorded, so they all have the same enrollment date.

If we compare Ted’s data now to what it was when we rebuilt him in the [Individual Rebuild](#individualrebuild) section, we can see some obvious differences. Mostly these differences are because Ted now has an earlier enrollment date. However, there’s one other difference you should know about.

Let’s do a quick comparison of Ted’s enrollment pages, paying close attention to the engagement graph near the top of the block.

Enrollment After Individual Rebuild

![Enrollment After Individual Rebuild](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-enrollment-detail-graph-indiv-rebuild-v13.png)

Enrollment After Streak Type Rebuild

![Enrollment After Streak Type Rebuild](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-enrollment-detail-graph-type-rebuild-v13.png)

There was a gap in attendance that has seemingly disappeared from the graph after the streak type was rebuilt. Ted had two recent gaps, but now he only has one. If the Rebuild button is supposed to pull from attendance data, and if the attendance data hasn’t changed, then what caused this discrepancy?

This can be traced back to the _Occurrence Map_. Since we were originally taking the manual route for this streak type, we manually selected all available weeks in the map. Then we rebuilt Ted's streak from attendance data. Because Ted didn’t have attendance data for the weeks of “Aug 22” or “Sep 12” we saw two gaps.

Now, on the other hand, we’ve rebuilt the entire streak type and not just one person's data. The rebuild process updated both the _Occurrence Map_ and Ted's engagement according to attendance data.

Rebuilt Occurrence Map

![Rebuilt Occurrence Map](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-rebuilt-occurrence-map-v13.png)

Notice that the week of “Sep 12” isn’t selected. The rebuild process knew to skip this week because the attendance record shows the group “Didn’t Meet” as pictured below.

Group Attendance

![Group Attendance](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/streak-group-attendance-v13.png)

Because the group didn’t meet at all, that week was removed from the occurrence map and ignored in streak data. The remaining gaps in Ted’s attendance are truly the result of an absence.

[](#achievements)Achievements
=============================

> _"What you get by achieving your goals is not as important as what you become by achieving your goals."_
> 
> \-Henry David Thoreau

With _Achievements_ you can define goals that are measured against things like engagement and interaction data. For instance, you may want to recognize when a person has attended services three times in a row in a single month. You could wade through the raw data looking for that kind of pattern, but _Achievements_ will do that for you automatically.

Before we jump in too deep let’s define a few terms for you.

*   **Achievement Type:** Each achievement type represents a specific goal and defines what a person (or any entity) must do to reach that goal. You can have several types of achievements to track different kinds of goals.
*   **Achievement Attempt:** When a person tries to meet the goal of an achievement type, an achievement attempt is created for the person. Depending on how the achievement type is configured, a person can have one or many attempts. If the achievement type’s goal is to attend services three weeks in a row, then an attempt will be created the first time a person attends a service.
*   **Achievement – Successful Attempt:** An attempt is successful, and the achievement is earned, if the person meets the conditions of the achievement type. So, if the goal is to attend three services in a row, then the person will have successfully attempted the achievement after they’ve attended their third consecutive service.
*   **Closed Attempt – Not Successful:** Reaching any goal in life can be challenging, and we’re not always successful. If the achievement type’s goal is to attend three services in a row, then the attempt will not be successful if the person attends the first week but not the second. In this case, the attempt is not successful and is closed. The next time the person attends a service, a brand new attempt toward that achievement type will be created.
*   **Attempt Progress:** There’s usually a period of time between starting and finishing an achievement attempt. During this time, the attempt is considered in progress because we can’t know in advance if the attempt will be successful or not. Rock tracks a person’s progress toward the goal along the way. Continuing with the service attendance example we’ve been using above you can track that a person who has attended two consecutive weeks is two-thirds (or 66%) of the way toward earning the achievement.

[](#achievementtypes)Achievement Types
======================================

Let’s look at an example achievement type with some data already added, so you can get an idea of what to expect. In this example we’re tracking an achievement that’s earned when a person has attended ten times consecutively. In later sections we’ll go into the details and cover how this all gets set up.

Achievement Type

![Achievement Type](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/achievement-type-v14.png)

1 Successful Attempts Graph

This graph shows the number of successfully completed attempts toward this achievement type. Like other graphs in Rock, you can adjust the timeframe that’s displayed. The graph won’t appear if there’s no achievement data at all, or if there aren’t any successful attempts within the selected timeframe.

2 Edit / Delete

The achievement type can be edited or deleted using these buttons. You can edit any of the achievement type’s setup except for the _Achievement Event_. See the [Adding Achievement Types](#addingachievementtypes) section for full details.

3 Rebuild

If you’ve already read the [Individual Rebuild](#individualrebuild) or [Streak Type Rebuild](#streaktyperebuild) sections, then you’re familiar with the concept of rebuilding. Achievement types also have a rebuild feature, which works in a similar way. Clicking the Rebuild button from the _Achievement Type_ page causes attempt data that occurs after a person's most recent successful attempt to be deleted and rebuilt.

4 Attempts

Each person’s attempts at the achievement type are listed here. This block provides several important details for each attempt, covered in the points below. We’ll take a deeper dive into viewing and managing attempts in the [Achievement Attempts](#achievementattempts) section below.

5 Start Date

This column indicates the date on which the person started the attempt. For instance, if your achievement type requires ten engagements in a row then this would be the date of the first engagement.

6 End Date

This column indicates the date on which the attempt ended. For instance, if your achievement type requires ten engagements in a row, then this would be either the date of the tenth engagement or the date on which the streak was broken.

7 Successful

A checkmark in this column indicates a successful attempt, which means the person satisfied the conditions of the achievement type. If there’s no checkmark here, it either means the attempt wasn’t successful (a checkmark appears in the _Closed_ column) or is still in progress (the _Closed_ column doesn’t have a checkmark).

8 Closed

An attempt is closed when the person has either succeeded or failed in their attempt at the achievement. For instance, if your achievement type requires three engagements in a row, then the attempt would be closed when the third engagement is registered or when the streak was broken.

9 Progress

The progress bar reflects how far along the person is (or was) toward successfully earning the achievement. The percentage complete can exceed 100% if the achievement type has _Allow Overachievement_ enabled, which we'll discuss below.

10 Person Profile

Simply click this icon to be taken to the person's _Person Profile_ page.

[](#addingachievementtypes)Adding Achievement Types
===================================================

To get started with achievements, navigate to People > Engagement > Achievements. You’ll be brought to the _Achievement Types_ page pictured below.

Achievement Types

![Achievement Types](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/achievement-type-list-v13.png)

From here you can add as many achievement types as you want or look at the attempts for an existing achievement type, as described in the prior section. Let’s look at what makes an achievement type work.

Add Achievement Type

![Add Achievement Type](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/add-achievement-type-v13.png)

1 Name

Provide a name for the new achievement type.

2 Active

The achievements will be tracked only if the achievement type is Active.

3 Description

Some achievement types will be similar, so be sure to provide a description that will help identify what makes this one unique.

4 Category

You can optionally assign a category to help group and organize your achievement types. When creating a new category (System Settings > Category Manager) for achievement types, be sure to select “Achievement Type” as the entity type.

5 Allow Overachievement

If enabled, this setting allows you to track how much someone has exceeded the conditions of the achievement type. For example, if your achievement type requires someone to attend three times in a row, and if someone attends six times in a row, you’ll see that they have 200% progress toward the achievement.

6 Max Accomplishments Allowed

Use this field to limit how many times the achievement can be accomplished. For example, if your achievement type requires someone to attend three times in a row and they attend six times in a row, they can earn the achievement twice. Leave this field blank to allow an unlimited number of accomplishments. This should be set to “1” before enabling _Allow Overachievement_.

7 Icon CSS Class

You can optionally assign an icon to the achievement type, to help distinguish it. This will be used as the achievement’s badge icon in most cases (see [below](#advancedsettings) for details).

8 Highlight Color

Each achievement type can have a color assigned to it. Currently this setting has no functionality in Rock and would only be used for custom purposes.

9 Achievement Event

Achievements can be earned in several different ways. Here you’ll select what kind of event this achievement type will use. This can’t be changed after it’s saved.  

*   **Giving: Giving to Account**: Achievements can be earned using giving data. This is an accumulative type of achievement, counting the total number of giving transactions for each person. If this is selected, you'll be prompted to select an Account.
*   **Steps: Program Completion**: Select this if you want to have an achievement for someone who has completed all of the Step Types within a specified Step Program. Selecting this will prompt you to specify the Step Program to use.
*   **Interactions: Accumulative**: This is used to track achievements based on [Interactions](https://community.rockrms.com/documentation/bookcontent/9#interactions). You can track the achievement based on a person having any kind of interaction, or you can get more specific by selecting an Interaction Channel and Interaction Component to reference.
*   **Streaks: Accumulative**: The achievement is earned by engaging a specified number of times, regardless of whether or not those engagements are consecutive. Use this setting if you want to track that someone has engaged 20 times in a year. Selecting this will prompt you to choose the Streak Type that should be used for this achievement.
*   **Streaks: Consecutive**: The achievement is earned by engaging a specified number of times in a row. The key here is that the engagements must be consecutive (i.e., an unbroken streak) to earn the achievement. Selecting this will prompt you to choose the Streak Type that should be used for this achievement.

10 Number to Achieve / Accumulate

The name and function of this field will change according to the _Achievement Event_ setting. Think of this as the goal that the person must reach to earn the achievement. In this example the Number to Achieve is set to “10” because this achievement is earned by people who have attended ten times in a row.  
If _Allow Overachievement_ is enabled, then this number marks 100% progress. If _Allow Overachievement_ isn’t enabled, then this number marks successful completion of the achievement.

11 Timespan in Days

Provide the number of days in which the number of engagements (_Number to Achieve / Accumulate_) must occur to successfully earn the achievement. For instance, you would set this to "365" if you wanted to track people who engaged a certain number of times within a year.

12 Start Date / End Date

These dates establish boundaries for when events can count toward the achievement type. Events before the _Start Date_ or after the _End Date_ are ignored. For instance, if you’re using achievements to track Step Program completion, only people who completed the Step Program within the provided date range will earn the achievement.

13 Step Configuration

That’s right, achievements can be used in step programs. We'll look closely at this area and how it works in the [Step Configuration](#stepconfiguration) section below.

14 Advanced Settings

In the Advanced Settings you can add _Prerequisite Achievements_, launch workflows, design achievement badges, and adjust settings for check-in celebrations. Check out the [Advanced Settings](#advancedsettings) section below for full details.

Overachievement and Max Accomplishments
=======================================

You can either enable _Allow Overachievement_ or set a _Max Accomplishments Allowed_ value, but you can’t use both. For example, if your achievement type requires someone to attend three times in a row, and if someone attends six times in a row, the system needs to know if the fourth engagement should count toward overachievement or toward a second accomplishment.

[](#achievementattempts)Achievement Attempts
============================================

Now that the Achievement Type is set up, we can start tracking attempts. Attempts, as you might have guessed, are instances of individuals trying to meet the conditions of the Achievement Type. Although there isn’t a formal “status” for attempts, they can be thought of as either successful, unsuccessful or in progress.

If the person satisfies the achievement type’s conditions, then the attempt is _Successful_. If the person fails to meet the conditions, then the attempt is not _Successful_. If the person is in the middle of working toward the achievement, then their attempt is in progress.

Even though achievements are automated, you can add or change individual attempts manually from the _Achievement Type_ screen. Simply click on the attempt row for a person and then click the Edit button. Manual adjustments should be rare but may be needed occasionally due to unusual circumstances or overrides.

Manage Achievement Attempt

![Manage Achievement Attempt](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/manage-achievement-attempt-v13.png)

1 Start Date / End Date

You can manually change the _Start Date_ and _End Date_ values for the attempt being viewed or added.

2 Progress

Changes here will be reflected in the progress bar for the attempt. A value of “.5” indicates 50% completion. A value of “1” reflects 100% completion and will count as a successful attempt.

Adding a new attempt is similar to managing an existing attempt. In addition to the fields above, you'll also need to provide the Achiever Id (the Person Alias Id) and the Achievement that the attempt should be applied to.

[](#stepconfiguration)Step Configuration
========================================

No, you haven’t jumped to the wrong section in the manual. Rock lets you add step data automatically using achievements. When the achievement has been successfully accomplished, a step gets added. You can access the configuration described below when creating or editing an achievement type.

Achievement Type Step Configuration

![Achievement Type Step Configuration](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/achievement-type-step-configuration-v13.png)

1 Add Step on Success

The step features for the achievement type will only work if the achievement type has this option enabled.

2 Step Program

Select the step program to which a step should be added. After selecting a step program, the _Step Status_ and _Step Type_ fields will appear.

3 Step Type

Indicate the _Step Type_ that should be added to the person’s record.

4 Step Status

Choose the status that should be applied to the step when it’s added.

The date on which the achievement was completed successfully will be the date used for adding the step. The date may be used as the step’s start or end date, depending on how the step type and achievement type are configured.

The conditions you’ve configured for your step types will still apply when steps are added from achievements. Steps with prerequisites won’t be added if the individual hasn’t completed the required prerequisite steps. If an achievement is earned more than once it will only add multiple steps if the step type allows multiple completions.

[](#advancedsettings)Advanced Settings
======================================

You can access the advanced settings while creating or editing an achievement type. As described below, you can use this configuration to do things like create achievement badges or add prerequisite achievements.

Achievement Type Advanced Settings

![Achievement Type Advanced Settings](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/achievement-advanced-settings-v13.png)

1 Prerequisite Achievements

You can optionally specify other achievements that must be earned before this achievement can be earned. The other Achievement Type must already be configured in order to be selected.

2 Workflow Launch

Achievements can be thought of as having three different states. An individual has either started an achievement, successfully finished it, or failed to finish it. At each of these points you can launch a specified workflow.

3 Badge Lava Template

If you provide a template here, it will be used for the badge wherever the badge (of type 'Achievement') is displayed. If there’s no template here then the achievement’s icon will be used for the badge, except for Step Program Completion which uses the step program’s icon. If there is no template here and no icons configured, the default icon is used for the achievement’s badge.

4 Results Lava Template

Like the badge, you can create a Lava template to display the achievement results elsewhere in Rock. Currently Rock doesn’t ship with a dedicated place to display achievement results but stay tuned because we’ll be rolling out additional features for this in future releases.

5 Image

If you're using this achievement for check-in celebrations, the image you upload here will be shown on the achievement's card when it’s displayed on the check-in confirmation page. See the [Checking-Out Check-In](https://community.rockrms.com/documentation/bookcontent/10#checkincelebrations) guide for more details.

6 Alternate Image

This setting gives you the ability to associate an image with the achievement type. Currently this setting has no functionality in Rock and would be used for custom purposes only.

7 Custom Summary Lava Template

This setting is also for check-in celebrations. This is an advanced feature that lets you replace the default achievement summary with a Lava template of your own. For more details see the [Checking-Out Check-In](https://community.rockrms.com/documentation/bookcontent/10#checkincelebrations) guide.

[](#signups)Sign-Ups
====================

In today's fast-paced world time is a precious commodity, and we often find ourselves looking for ways to make a difference in our community while juggling busy schedules. Fortunately, there are short-term serving opportunities that allow us to give back without committing to a long-term project. Whether it's a food drive or a few hours spent volunteering at a local shelter, every small effort counts towards making a positive impact.

However, organizing these short-term opportunities and managing the logistics of people who are signing up can be a daunting task. The Sign-Ups feature simplifies the process and makes it easier than ever for people to get involved in serving opportunities that align with their passions and availability. That includes addressing a major pain point for many organizations, which is ensuring that thresholds are respected. But best of all, it's easy to set up and start using. But don’t think of Sign-Ups as being only for serving projects. This is a flexible tool that has a variety of potential applications.

[](#signupwalkthrough)Sign-Up Walkthrough
=========================================

Let's start by walking through the sign-up process from the perspective of an online guest. When someone wants to sign up, they’ll go to the Sign-Ups Finder page under the Connect area of your external website. From there you can filter the Opportunities, to find the best fit based on date and location. Note that there are many block settings and filter options available here, which we'll look at a little later.

Sign-Ups Finder

![Sign-Ups Finder](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/sign-ups-finder-v15.png)

In the results you can see the description, date, time and location of the opportunity. At the bottom of each card, you can register for the opportunity or view additional details. The registration form is short and simple. As pictured below, you can easily register yourself and others.

Sign-Ups Register

![Sign-Ups Register](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/sign-ups-register-external-site-v15.png)

You’ll see a confirmation screen after registering, and that’s all it takes. It’s a simple way to sign up for something without needing to configure, for instance, an entire event registration template.

[](#managingsignups)Managing Sign-Ups
=====================================

Before we move on, it’s important to become familiar with some terminology.

1.  A _Project_ is a group and is used to organize other Projects or to house _Opportunities_, which we'll look at next. Projects are one of two types:
    1.  _In Person_ means the opportunities take place on a specific date and time, like hosting a car wash fundraiser for a day.
    2.  _Project Due_ means the opportunities are due by the specified date and time, like the deadline for a clothing drive.
2.  A person registers for an _Opportunity_, as we saw in the section above. Opportunities are events with a date, time and location.

Sign-Up Group Group Type
========================

Projects are groups of a type called Sign-Up Group. You can create new sign-up group types by inheriting them from the Sign-Up Group type. You’ll also need to add the new Group Type as an Allowed Child Group Type of the Sign-Up Group group type.

Managing Projects
-----------------

To access your projects, navigate to People > Sign-Ups. On the left are projects, which are organized into a hierarchical tree view. In the below example, Habitat for Humanity doesn’t have any opportunities, but is used to group other projects. To the right is a Sign-Up Overview. Here you’ll find the schedule and the participant count for each opportunity. The Sign-Up Overview only appears when you first access the page before a project is selected on the left.

Sign-Ups Overview

![Sign-Ups Overview](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/sign-ups-overview-v15.png)

At the bottom of the Sign-Up Overview list, you can click _Select Action_ to email either leaders or all participants of the selected opportunities. Each person will get one communication, even if they registered for multiple opportunities.

You’re able to use the below Lava fields in your Sign-Up Overview communication. Note that we’re looping over opportunities because one person can be in multiple opportunities.

##### Sign-Up Overview Communication Lava Fields

```
{% for opportunity in Opportunities %}
    Project Name: {{ opportunity.ProjectName }}
    Opportunity Name: {{ opportunity.OpportunityName }}
    Address: {{ opportunity.FormattedAddress }}
    Next Start Date & Time: {{ opportunity.NextStartDateTime }}
    Leader Count: {{ opportunity.LeaderCount }}
    Participant Count: {{ opportunity.ParticipantCount }}
{% endfor %}


```

Managing Opportunities
----------------------

Clicking on a project to the left will display the opportunities for that project to the right. This is where you would come to edit the project, but we’ll get to that in the next section. For now, let’s see what you can do on this page.

Sign-Up Opportunity Detail

![Sign-Up Opportunity Detail](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/sign-ups-opportunity-detail-v15.png)

1 Upcoming/Past

Flip this toggle to see opportunities whose dates have passed.

2 Opportunity Details

The opportunity name, schedule and location are shown for reference. We’ll look at how to manage these shortly.

3 Sign-Ups

This bar shows how many people are registered compared to the opportunity’s minimum, desired and maximum attendance values.

4 Members

Click the icon to see a list of everyone who has registered for the opportunity.

5 Edit Opportunity

Clicking the icon lets you edit the opportunity, which we cover in the next section.

6 Add Opportunity

Add a new opportunity to a project by clicking the button.

Managing Members
----------------

Click the icon to see the people who have registered for that opportunity. In the screenshot below you can see details of the opportunity including the location, schedule and capacity information. You can also come here to add or remove people from the list, or to manage Roles (i.e., Leader, Member).

Sign-Up Opportunity Attendee List

![Sign-Up Opportunity Attendee List](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/sign-ups-opportunity-attendee-list-v15.png)

It does feel like you’re managing members of a group. The screens and features used to manage the attendee list are generally the same as with members of groups. But do keep in mind that the project is the group, and the opportunities are what people sign up for. So, if you have multiple opportunities under one project, everyone who signs up for any of the opportunities will all be added to the same group.

[](#configuringsignups)Configuring Sign-Ups
===========================================

Now we’ll look at the setup that’s used to configure Sign-Ups.

Group Types
-----------

The first thing you’ll need is a Group Type, and we’ve got one ready for you. The _Sign-Up Group_ group type is used by Rock, so editing is limited, but many features are available. Just remember that projects are groups, and the people who have signed up are group members.

There are too many options to cover here (check out the [Rock Your Groups](https://community.rockrms.com/documentation/bookcontent/7#grouptypes) manual) but you might edit this group type to add group requirements or attributes.

Project Configuration
---------------------

Projects are created and managed from People > Sign-Ups. Click a project from the tree menu on the left, then click the Edit button.

Sign-Up Project Detail

![Sign-Up Project Detail](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/sign-ups-project-details-v15.png)

1 Project Name

This will be the name of the project/group and will be seen by people visiting your site.

2 Description

You’ll want to put some thought into a good description. The description is displayed publicly and will influence whether someone signs up.

3 Group Type

For a new project, select which group type to use. Only Sign-Up Group, or group types inherited from Sign-Up Group, will be listed.

4 Campus

Like other types of groups, you can assign the project to a campus. People can filter opportunities by campus using the Sign-Ups Finder.

5 Project Type

_In-Person_ project types occur at a specific time and place, so people can be reminded about it as the date approaches. _Project Due_ project types typically span time, so they have a deadline for completion rather than a single upcoming event.

6 Reminder Settings

If the project type is In-Person then you can choose which communication template to use for the reminders, and how many days in advance the reminders should be sent. You can also provide details that will be added to the reminder communication.

7 Confirmation Details

A communication is sent to the person when they register. The content you add here will be added to that communication.

Setting up Opportunities
------------------------

With your projects in place, you’re ready to start adding opportunities to them. Remember, an opportunity is what the person registers for, so this is where you’ll set the schedule, location and attendance goals.

Sign-Up Edit Opportunity

![Sign-Up Edit Opportunity](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/sign-ups-edit-opportunity-v15.png)

1 Schedule

You can choose either a custom schedule or a named schedule. People can filter on named schedules in the Sign-Ups Finder. What the date and time represent depends on the project type for this opportunity.

2 Location

Provide a named location or an address. This is required and is seen publicly.

3 Attendance

Here is where you’ll set the minimum, desired and maximum people needed for the opportunity. You can use one, two or all of these options.

4 Reminder Details

This won’t be available if the opportunity has a project type of Project Due. The content you add here will be appended to the reminder email for the opportunity.

5 Confirmation Details

A communication is sent to the person when they register, and the content you provide here will be added to that communication.

Send Reminders System Job
-------------------------

Rock ships with a job called _Send Sign Up Reminders_ that runs daily at 8am. There isn’t anything you need to configure with this job but be aware that reminders won’t be sent until it runs.

Send Sign Up Reminders

![Send Sign Up Reminders](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/sign-ups-send-sign-up-reminders-v15.png)

Sign-Ups Finder Block Settings
------------------------------

The public-facing block that’s used to search opportunities has several settings you’ll want to know about.

Sign-Up Finder Block Settings

![Sign-Up Finder Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/sign-ups-finder-block-settings-v15.png)

1 Hide Overcapacity Projects

If an opportunity is full, you might not want to show it on your website.

2 Load Results on Initial Page Load

When you first come to the page should opportunities be shown or do people need to search first?

3 Display Project Filters As

Certain filters can be displayed as either checkboxes or a drop-down menu.

4 Filter Columns

You can change the look of the Sign-Up Finder by changing how many columns the filters should be divided into.

5 Project Types

Here you can choose which sign-up group types to show. This is useful if you have multiple sign-up group types.

6 Display Attribute Filters

If you have group attributes configured, then you can use them as filters.

7 Project Type Filter Label

If you’re filtering on project types (group types) you can change the label of that filter.

8 Display Campus Filter

Simply choose whether the person can filter by campus.

9 Enable Campus Context

The opportunities can be filtered automatically based on a campus selection if the page has campus context. You can read more about context in our [Designing and Building Websites](https://community.rockrms.com/documentation/bookcontent/14#usingcontext) manual.

10 Campus Types/Statuses

You can restrict which campuses are shown. For instance, you may only want to show Physical campuses that are Open.

11 Display Named Schedule Filter

You can configure opportunities to use a Named Schedule, in which case you can filter those opportunities based on their schedule.

12 Named Schedule Filter Label

If you are filtering on named schedules, you can call them something else.

13 Root Schedule Category

You may only want to show opportunities with schedules under a certain category.

14 Display Location Sort

If the person provides location information, like a zip code or city and state, the results will be sorted based on their proximity to the location.

15 Display Location Range Filter

This determines whether the person can filter on the distance to the opportunity. The provided location is used, or if a location isn’t provided and the person is logged in then their address will be used.

16 Location Sort Label

Here you can provide guidance on what the person should put into the location sort field.

17 Display Date Range

Leave this on to let people filter opportunities based on their dates.

18 Display Slots Available Filter

Enable this to let people filter opportunities according to their available space.

19 Results Lava Template

This is an advanced setting that lets you customize how the opportunities are displayed in the Sign-Ups Finder.

20 Results Header Lava Template

Similar to the above setting, you can use Lava to customize what the page says below the Results header.

21 Project Detail Page

When someone clicks on the Details link for an opportunity, they’ll be taken to the page you provide here.

22 Registration Page

When the person signs up, this is the page they’ll be taken to when they click the Register button.

Registration Block Settings
---------------------------

You have some options when it comes to the person’s experience when they register for an opportunity. You’ll want to review these settings to ensure they meet the needs of each opportunity.

The goal is to craft the experience you desire for the specific ministry need. In addition to the settings below, don't forget to review the Sign-Up Finder settings detailed above. These settings, combined with the Project Type, significantly influence how people interact with sign-ups.

Registration Block Settings

![Registration Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/sign-ups-registration-block-settings-v15.png)

1 Mode

There are three modes in which the block can be.  

*   **Family:** You’ll see a list of family members and you can check the box next to each one you want to register. The person must be logged in to identify family members. If the person isn’t logged in, they’ll be processed in Anonymous mode.
*   **Anonymous:** This is the default mode. The person doesn’t need to be logged in, but their information will be filled in for them if they are. Additional people can be added by providing their name and information.
*   **Group:** Group mode is used when signing up people from a group. For instance, you might want to register your bible study small group for a day of serving. See details in the next section below.

2 Include Children

When the block is in Family mode, can children in the family be registered? In Group mode, this option will display children of group members.

3 Workflow

When the sign-up is complete you can optionally launch a workflow. Use the info icon to see what gets passed to the workflow.

4 Registrant Confirmation System Communication

Confirmation emails are sent to each registrant, except in Family mode. In Family mode the confirmation only goes to the adults, although a child gets one if they did the registration.

5 Require Email/Mobile Phone

You can require an email and phone number to ensure good communication with the registrant.

[](#groupregistrationandattendance)Group Registration and Attendance
====================================================================

Now that you’re familiar with projects and opportunities, let’s change the scenario from what we saw at the start of this chapter. In this section we’ll cover how to use sign-ups for groups and how to take attendance for sign-up events.

Group Registration
------------------

As we saw in the prior section, the Sign-Up Register block has three modes. When it’s set to Group mode then people can be signed up from an existing group. This takes a few steps to set up, but we’ll walk you through it.

First, we need to talk about Id Keys. The Sign-Up Register block needs to know what you’re signing up for. It needs to know the project, the location and the schedule. Normally we would pass in the Id’s for those entities from the URL. But with sign-ups, we’re going to need the IdKey instead of the Id. The IdKey is an alphanumeric string of characters that represents the Id. For instance, an entity with an Id of 4 has an IdKey of “da0BJvBpzX”.

You’re going to need a new page to house the Sign-Up Register block set to Group mode. As you’re setting this page up give it a route with parameters. The easiest way is to copy the route from the sign-ups registration page that ships with Rock, change the route names, and add a parameter for GroupId. The route for your registration page might look like:

`signup-group/{ProjectId}/location/{LocationId}/schedule/{ScheduleId}/group/{GroupId}`

Then, all you need to do is use Lava to generate the IdKey for each entity. There is a property on each of these entities called "IdKey" and you'll need to use Lava to access it. If you want to find the IdKey for a group, you might use Lava like the below:

```
{% group where:'Id == 113' %}
{% endgroup %}

{% for item in groupItems %}
    {{ item.IdKey }}
{% endfor %}


```

Note that the ProjectId is the IdKey for the sign-up group. In the end your URL would look like:

`yourchurch.org/signup-group/7QVlZ89BZW/location/KewldO1moa/schedule/Dx9l4aPaEX/group/7oWlzzdljq`

Anyone who is in the group can use this link to register themselves or others for the given project.

Group Registration

![Group Registration](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/sign-ups-group-registration-v15.png)

Taking Attendance
-----------------

Taking attendance for a sign-up group works similarly to the Group Registration process described above. You’ll need to build a URL, and then that URL can be used to take attendance.

You’ll need a page with the Sign-Up Attendance Detail block. Rock ships with one under the route of signups/attendance. Instead of the GroupId, we’ll be passing in the Attendance Date. So, your URL will look like:

`signups/attendance/{ProjectId}/location/{LocationId}/schedule/{ScheduleId}/attendancedate/{AttendanceDate}`

The Send Attendance Reminder job uses the Group Attendance Reminder system communication. But you’ll have to set up the link in that email to look something like this:

```
{% capture attendanceLink %}
    {{ 'Global' | Attribute:'PublicApplicationRoot' }}signup/attendance/{ProjectId}/location/{LocationId}/schedule/{ScheduleId}?AttendanceDate={{ Occurrence | Date:'yyyy-MM-dd' | EscapeDataString }}
{% endcapture %}


```

Note the date formatting above. If you’re building a link directly to the page, the date should be formatted in that way:

`yourchurch.com/signups/attendance/7QVlZ89BZW/location/KewldO1moa/schedule/Dx9l4aPaEX/attendancedate/2023-08-26`

Once you arrive at the page all you need to do is mark who is present and save.

Attendance Detail

![Attendance Detail](https://rockrms.blob.core.windows.net/documentation/Books/39/1.15.0/images/sign-ups-attendance-detail-v15.png)