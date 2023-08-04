# Raising Up With Prayer
[View Original Source](https://community.rockrms.com/documentation/bookcontent/11)

[](#welcome)Welcome
===================

Prayer support is vital to churches of all sizes and the people who support them. After all, what can be more important to your church than building connections through prayer? We’ve joined the natural power of prayer with the built-in power and simplicity of Rock’s relationship management features in a dynamic way. Whether sharing requests or accessing them, Rock will take care of the details so you can focus on what really counts – raising up your people with prayer.

[](#allaboutprayer)All About Prayer
===================================

Prayer ministries give a voice to people in need and support the mission of your church. For a successful prayer ministry, individuals need to be able to communicate their requests, and prayer teams need to be able to access them easily as they spend time praying. Rock helps make both processes simple. Here’s how.

1.  Prayers are entered by either the individual on your website or by volunteers.
2.  You can then configure the optional step of approving requests. This is helpful if you would like to ensure that the requests do not give out any details that some would consider personal or that are written in a format that might be mistaken as gossip.
3.  Finally, your prayer team uses the secure page on the website where they pray through each request.

Prayer Flowchart

![Flowchart](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/prayer-flow.png)

There's a bit more going on behind the scenes but Rock handles all that so all you really need to worry about is praying.

Rock will even auto-organize the requests so they’re properly balanced. New ones that have been prayed for less will be bumped to the front of the line, and any "urgent" requests will jump ahead of even those. Rock will even automatically expire requests after a period of time that you set.

[](#gettingstarted)Getting Started
==================================

To tap into the power of prayer with Rock you'll need to understand the security roles involved and some ways we can use the features.

[](#rocktheprayerteamroles)Rock the Prayer Team Roles
=====================================================

You'll basically need two serving roles for prayer requests: Prayer Administrator and Prayer Team. Here’s what each role should be responsible for.

Prayer Administrator
--------------------

*   Enter requests submitted on cards during your weekend services
*   Review requests that are flagged or unapproved

Prayer Team
-----------

*   Pray for the requests
*   Flag any requests that seem inappropriate for public viewing

[](#understandingprayercategories)Understanding Prayer Categories
=================================================================

Once you have a large number of prayer requests in Rock, it could be difficult to view all of them or to find the one(s) you are looking for. Prayer Categories were created to help you find exactly what you are looking for as an Administrator and to help prayer teams as they work through requests.

When a prayer request is entered on the website by a requester, it is automatically given the default category _General_ unless the requester selects another category from the drop-down list. Selecting a top category will enable all the sub-categories as options. As Administrators review the new requests, they edit or can assign a category to each request to help the prayer team work through them. Pre-defined Prayer Categories include things like _God's Will_, _Health_, _Comfort/Grief_ and _Family Issues_. You can modify the available categories under Admin Tools > General Settings > Prayer Categories if you find that they don't meet all your needs.

You can enable prayer categories on the block settings of the _Prayer Request Entry_ block, if you want the requesters to be able to specify the category their request fits into. Any child categories of the _Category Selection_ option you select will be available for the requester to choose from. If Category Selection is left blank however, then the category option will be hidden from the requester, and new prayer requests they enter will be automatically assigned the category you select in the _Default Category_ option.

As a prayer team begins a prayer session, they can see prayer categories that have active prayers and select from those categories if the total number of prayers is too many for one session.

[](#workingwithflaggedrequests)Working with Flagged Requests
============================================================

Because requests are entered by any member of the general public, you could find some instances where a request is considered poorly worded. Possibly someone entered a full name of a missionary in a hostile country, revealing their identity and endangering their life. Maybe there are details in a request that suggest suicide or abuse and an authority should be notified.

To help communicate these concerns between a prayer team and an administrator, we've developed a flagging system. This is especially helpful when requests are configured to auto-approve rather than having an administrator approve each one first. If flagging is enabled, members of the prayer team can flag any request that might be inappropriate or may need administrative review. Once a request is flagged by one person, it is immediately unapproved and no longer visible to the prayer team. This one-person limit is customizable. You could increase the threshold to two or three or another number that makes sense to your specific ministry by editing the prayer session block settings on the external website under Connect > Prayer > Prayer Team.

The administrator will see this request when sorting by flagged or unapproved requests, and can edit, delete or re-approve at that time.

[](#enteringprayerrequests)Entering Prayer Requests
===================================================

So now that you understand how prayer functions in Rock, let's look at the details of entering and managing requests.

[](#addingarequest)Adding a Request
===================================

Most people will enter prayer requests online through the _Prayer Request Entry_ block on your website under Connect > Prayer. Prayer administrators can also add prayer requests internally from People > Prayer > Add Prayer Request.

Adding a Prayer Request

![Adding a Prayer Request](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/adding-request-v14.png)

[](#aboutdefaultconfigurations)About Default Configurations
===========================================================

Don't forget to check Rock's settings. Our out-of-the-box configurations will be a great fit for most organizations, but they are all customizable. Modify the configuration on the external website under Connect > Prayer using the _Prayer Request Entry_ block settings.

Block Settings
--------------

Here are some of the settings for these request blocks, right out of the box.

| Setting | Description | Example |
| --- | --- | --- |
| Category Selection | This controls which categories the requestor can choose for their prayer request. Selecting a top-level category enables all the categories underneath as options. Leaving this option blank will hide the category control from the requester and assign all prayer requests entered here to the Default Category you choose (see the next option). | All Church |
| Default Category | This is the default category that will be assigned to the request unless it is changed at the time the request is entered. | General |
| Enable Auto-Approve | The system can be configured to _auto-approve_ any prayer requests entered by people on the website. This means a request will be immediately available for the prayer team. Otherwise, you will have to approve (and optionally edit) each request before the team will see them. | Yes/No |
| Expires After (Days) | This controls how long a prayer request remains active once it's approved. This setting is only used if auto-approve is enabled. | 14 |
| Default Allow Comments Setting | If _Enable Comments Flag_ is enabled, then this setting controls whether the checkbox the requester sees for "Allow Encouraging Comments?" is checked or not. If this is set to "Yes" then comments will be allowed by default. | Yes/No |
| Enable Urgent Flag | If enabled, the person entering the prayer request has the option to mark it as urgent, which keeps it at the top of the prayer stack. | Yes/No |
| Enable Comments Flag | If enabled, requestors will be able to set whether or not they want to allow comments on their requests. | Yes/No |
| Enable Public Display Flag | This allows the requester to say whether their request can be shown on the public website for a wider audience to pray for. | Yes/No |
| Character Limit | This controls the maximum permitted length of the prayer request. Setting this to a reasonable value will cause the requestor to focus their request on the essential details. | 250 |
| Navigate to Parent On Save | Checking this causes the website visitor to be returned to the page they were on before they entered the request. | Yes/No |
| Save Success Text | This text will be shown after the request is saved (unless the previous setting is checked). You can use both HTML and Lava here. | 
Thank you for allowing us to pray for you.

 |
| Workflow | If a workflow is selected here, then the workflow will launch following a prayer request being submitted. You can then access the request's information from within the workflow. | Photo Request |

Prayer Attributes
=================

Need to capture some additional info with the request like Campus or a "Please Tell" field to let the sender indicate a specific Pastor or Staff Member to inform about the request? We've got you covered. Go to People > Prayer > Prayer Request Attributes and add any attributes you want. Can we get an Amen!?

[](#administratingprayerrequests)Administrating Prayer Requests
===============================================================

After requests have been entered, and before the Prayer Team can pray for them, the Prayer Administrator needs to take a look at them. One exception to this process is if the requests are set to auto-approve when they are entered. In that case, the Prayer Team has immediate access to new requests.

All administration work is done under People > Prayer. Here, you can select to add a new prayer request, view current requests or view all the comments in the system.

Prayer Administration Tools

![Prayer Home](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/prayer-home-v13.png)

Prayer Requests List
--------------------

Selecting the _Prayer Requests_ option will display a list of all the prayer requests in the system.

Prayer Request List

![](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/request-list-v13.png)

Using the _Filter Options_, you can narrow the list down to exactly what you want to see. This is useful if you have hundreds of requests and only need to worry about the ones that are flagged or unapproved.

Flagged Requests
================

If you find a request that is flagged, it's a good idea to read it carefully. Requests can be flagged if a member of your prayer team feels like there is something inappropriate in the request. For instance, if it's considered dangerous to use a global worker's full name or list the exact country name where they are stationed.

From this list you can click the approved switch from yes to no (or vice versa) to quickly change its approval status. Otherwise, you can select an item to view all the details or press the Delete button to permanently remove it from the system.

Clicking the Edit button will allow you to change the request including its approved or urgency status, expiration date, and other details about the request. It also brings up a box for recording an answer to that prayer. Say, for example, if the Prayer Administrator knows that the prayer has been answered. They can note that here, so it then becomes a praise.

Prayer Request Detail

![Request Detail](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/editing-request-v13.png)

Once you've made all your changes, you can check the _Approved_ checkbox and press the Save button to return back to the list. If a request was previously flagged, checking the approved checkbox clears the flags so that it can be included in prayer sessions once again.

Prayer Comments List
--------------------

Selecting the _Prayer Comments_ option will display a list of all the prayer comments in the system. This is a good way to help moderate the comments that are coming in without having to view each prayer request. Selecting a comment will take you directly to the prayer request page.

Prayer Comments List

![](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/comments-list-v13.png)

[](#advancedideas)Advanced Ideas
================================

You may want to take special action for certain categories of prayer requests. With Rock's workflow engine, you can trigger a particular action based on some criteria of the prayer request.

For example, if someone enters a _Hospitalization_ request, you can notify the person in charge of hospital visits by sending a system message with a link to that request directly to their email address. See the [Blasting Off With Workflows](https://community.rockrms.com/documentation/bookcontent/12/) guide for more details on creating these automatic actions.

The possibilities are endless.

[](#prayerteampowertools)Prayer Team Power Tools
================================================

Put that extra oomph behind your prayer efforts with Rock’s power tools. If you take the time to understand these settings now, you will be set up to maximize your prayer team's very important work.

[](#startingaprayersession)Starting a Prayer Session
====================================================

Once it's time for the prayer team to begin working through the requests, they will find them on the website under Connect > Prayer > Prayer Team.

Starting a Prayer Session

![Starting a Prayer Session](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/team-session-v13.png)

When a member of the prayer team starts a prayer session, all categories with active prayers will show on the webpage, along with a number of active prayers in each. Once one or more categories are selected, they will be auto-filled for the next session.

Selecting Prayer Categories
===========================

If your team is small, you should consider selecting most or all categories until you have good prayer coverage.

Press the Start button to begin.

Urgent requests will be at the top, followed by all remaining requests in the order of the _least_ prayed for to the _most_ prayed for.

Prayer Session

![Prayer Session](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/requests-displayed-v12.png)

1 Requestor

The name and photo of the person who submitted the request. Since it's common for people to request prayers on behalf of other people, this person may not be the subject of the request.

2 Request Details

Displays the details about the prayer request.

3 Prayer Information

The category and urgency of the request as well as the number of times the request has been prayed for.

4 Action Bar

Options to move to the next request, flag a request as inappropriate (if enabled) or to end the session.

5 Comments

A place for the prayer team member to leave a comment.

After praying for this request, press the Next button to move to the next prayer. Each time you view a request, Rock will record an additional prayer for it.

Unapproving Requests
====================

If you are concerned about whether a particular request is appropriate, because of danger or abuse for instance, you can flag the request by clicking the Flag button. This will un-approve the request until it has been reviewed by the Prayer Administrator.

Prayer Team Comment Security
============================

Out of the box, the "RSR - Prayer Access" role by itself doesn't allow adding comments to prayer requests. You could use this role to include people on the [prayer comments email](#prayerrequestcommentsdigest), while keeping comment entry restricted to those with staff-level access.

If your prayer team members with Prayer Access should be able to comment on requests, add the role to the "Edit" rights on the _Prayer Comment_ note type in Admin Tools > System Settings > Note Types.

[](#aboutdefaultconfiguration)About Default Configuration
=========================================================

Just like entering prayer requests for the public, prayer session settings can also be modified on the external website under Connect > Prayer > Prayer Team.

Block Settings
--------------

Below are some of the settings for the _Prayer Session_ block. You'll want to review these and the other settings for this block to ensure it fits your process and needs.

| Setting | Description | Example |
| --- | --- | --- |
| Welcome Introduction Text | Custom text (HTML) that is shown to the prayer team before they start their prayer session. | Let's get ready to pray |
| Category | Setting a top-level category controls which sub-categories are shown when starting a prayer session. | Health Issues |
| Enable Prayer Team Flagging | If enabled, members of the prayer team can flag prayer requests that they believe are inappropriate and need reviewing or editing by the prayer administrator. | Yes/No |
| Flag Limit | This specifies how many times a request needs to be flagged before it is unapproved. | 1 |

  

That's it. With just a few simple steps you can simply and powerfully raise up the people of your church with prayer. And once you start using it, you'll wonder how you ever got along without it.

By configuring your categories and creating new pages you can create general prayer request systems each with their own requests and categories. This is helpful if you would like to set up a unique prayer area for ministries like teens or missions.

[](#prayercardviewblock)Prayer Card View Block
==============================================

An alternate way for your prayer team to pray is to use the _Prayer Card View_ block. This block is similar to the _Prayer Session_ block described in the prior section above, except prayer requests are viewed as cards on the page. All the person needs to do is click the Pray button to have the prayer counted.

Prayer Card View

![Prayer Card View](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/prayer-card-view-external-website-v13.png)

The Prayer Card View block ships with Rock but isn't added to any pages out of the box, so it will need to be added to a page on your external website. You can add a new page for this block, or you might replace the Prayer Session block on the _Prayer Team_ page.

Block Settings
--------------

The block settings for the Prayer Card View block give you several options for how your prayer team will interact with the prayers. You'll find many of these settings have the same functions as the settings we discussed in the prior section above.

Prayer Card View Block Settings

![Prayer Card View Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/prayer-card-view-block-settings-v13.png)

1 Name

You can change the name of this block, but it would be for internal purposes only. You might want to change the name if you have multiple blocks of this type for different ministries.

2 Display Lava Template

This Lava template controls how the prayer cards look, and what information is displayed. You generally won't need to make changes here.

3 Prayed Button Text

The text you put here will become the text of the Pray button after it is clicked.

4 Category

Select a category to only show prayer requests from that category. You might use this if you have different prayer team pages/blocks for different ministries.

5 Public Only

Each prayer request can be designated as Public. Use this setting to either display all prayer requests, or only requests marked as Public.

6 Enable Prayer Team Flagging

Flagging lets your prayer team report individual prayer requests for various reasons, typically for inappropriate content. This is used by the Flag Limit setting described below.

7 Flag Limit

After a prayer request has been flagged the number of times you choose here, it will automatically be un-Approved. Only prayer requests that are Approved will be displayed to the prayer team.

8 Order

This setting can be helpful if you have long lists of prayer requests, to help prioritize them according to the option you select.

9 Show Campus Filter

Prayer requests can be associated with a campus. If you have multiple campuses, you can enable this setting to show a campus filter drop-down on the page, to let your prayer team(s) focus on requests at a specific campus.

10 Campus Types/Statuses

These settings only apply if you've enabled _Show Campus Filter_. You can use these settings to restrict which campuses appear in the drop-down filter.

11 Max Results

If you have a large volume of requests, you might use this setting to keep the page from getting too overwhelming. Keep in mind that requests which exceed the cutoff cannot be accessed by the prayer team.

12 Prayed Workflow

You can launch a workflow each time the Pray button is used. This is a great way to maximize the impact of the prayer. The workflow will be passed the prayer request as a generic Entity field type and will populate a workflow attribute with a key of PrayerOfferedByPersonId.

13 Flagged Workflow

You might want to launch a workflow when a request is flagged to alert someone that the request needs their attention. The workflow will be passed the prayer request as a generic Entity field type, and will populate a workflow attribute with a key of FlaggedByPersonId

14 Load Last Prayed Collection

You could use this to edit the _Display Lava Template_ to show the last time the request was prayed for. For example:

```
{% for prayer in LastPrayed %}
    {% if prayer.RequestId == item.Id %}
        {{ prayer.PrayerDateTime }}
    {% endif %}
{% endfor %}    


```

The Last Prayed collection also has other data you can show besides the PrayerDateTime. You can also print the RequestId, and the FirstName and LastName of the person who prayed.

[](#prayerrequestsforgroups)Prayer Requests for Groups
======================================================

Prayer requests can be associated with a group. This allows prayer requests to be limited to the group members, so only they pray for the request. In this chapter we'll take a deep dive into how this works, and how these types of prayer requests differ from standard requests.

[](#creatinggroupprayerrequests)Creating Group Prayer Requests
==============================================================

All you need to do is pass a group's Guid into the _Prayer Request Entry_ block. The block will be looking for a _GroupGuid_ parameter in the URL, along with the Guid itself. If it finds this, the prayer request will be associated with that group.

Enter Prayer Request With Group URL

![Enter Prayer Request With Group URL](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/enter-prayer-request-with-group-url-v14.png)

As pictured above, nothing will change or appear differently on the page. The prayer request would be entered and submitted like normal. The only way you'll know that the request is tied to a group is when looking at the request from the internal administrative view under People > Prayer > Prayer Requests. Clicking on a request will show you its details as pictured below, including the associated group.

Prayer Request Detail with Group

![Prayer Request Detail with Group](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/prayer-request-detail-with-group-v14.png)

Note that the group associated with a prayer request cannot be changed or removed once it's been set.

[](#prayingforgroupprayerrequests)Praying for Group Prayer Requests
===================================================================

In the previous section we talked about how the only difference between a regular prayer request and a group prayer request is having the group's Guid as a parameter in the URL. Nothing else changes. The same is true when praying for group requests; the only difference will be what's in the URL.

Both the _Prayer Session_ and _Prayer Card View_ blocks are looking for a _GroupGuid_ parameter in the URL. If these blocks find a group Guid, the prayer session will be only for requests associated with that group. If there is no _GroupGuid_ parameter in the URL then requests associated with a group will not be listed and will not be prayed for.

Group Requests Not Shown

![Group Requests Not Shown](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/no-prayer-requests-with-url-v14.png)

Even though there are prayer requests in the system, they're all tied to groups. Without the needed URL parameter those requests won't be shown.

Group Requests Shown

![Group Requests Shown](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/pray-for-group-request-with-url-v14.png)

With the needed group Guid in the URL, we can now see the prayer requests associated with that group.

[](#prayerrequestcommentsdigest)Prayer Request Comments Digest
==============================================================

The importance of prayer and the impact it has can’t be overstated. In times of trouble, it helps just simply knowing that people are out there praying for you. Using the _Send Prayer Comments_ job, you can ensure that those who submit prayer requests will know that they have the power of prayer behind them.

[](#settingupthejob)Setting up the Job
======================================

As the prayer team comments on requests, you can enable a job to send those comments to the originator. The job is included in your Rock installation but will need to be configured. Below is an example setup:

Job Detail - Send Prayer Comments

![Job Detail - Send Prayer Comments](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/job-detail-send-prayer-comments-v13.png)

1 Job Type

For this job, you’ll want to select “Send Prayer Comments” as pictured above. Once selected, additional fields will appear.

2 System Communication

The “Prayer Request Comments Digest” system communication template is ready for you to use out of the box.

3 Prayer Categories

You can choose to send these communications for only specific categories. Or you can leave this field blank to send for any category.

4 Include Child Categories

Select “Yes” to send communications for prayer requests associated with a child prayer category. Select “No” to only send communications for requests associated with main/parent categories.

5 Save Communications

Indicate whether the email should be saved to the system. If you select “No” then the communication will still be sent but won’t be saved.

For general instructions on setting up jobs, be sure to review the [Admin Hero Guide](https://community.rockrms.com/documentation/BookContent/9/#configuringajob).

To send communications for all prayer requests, regardless of category information, leave the _Prayer Categories_ field blank and select “Yes” for _Include Child Categories_. Those settings should only be changed if there are categories for which you don’t want to send communications.

The job will only send communications for prayer requests where _Allow Comments_ has been enabled. Requests where _Allow Comments_ isn’t enabled will be ignored.

[](#prayerrequestcommentscommunication)Prayer Request Comments Communication
============================================================================

The example email pictured below is generated from the “Prayer Request Comments Digest” system communications template.

Prayer Request Comments Email

![Prayer Request Comments Email](https://rockrms.blob.core.windows.net/documentation/Books/11/1.15.0/images/prayer-request-comments-email.png)

1 Greeting

The greeting at the top of the email includes the person’s name and references the date on which the person submitted the prayer request.

2 Request

The original prayer request that was submitted is copied here for reference.

3 Comments

Any comments that have been added since the last time the job was run will appear here. If the job has never been run before then all comments will appear.

The email address included with the prayer request will be the one used by the job. If the requestor exists in your system, this may or may not be the email address associated with their profile.

See our [Communicating With Rock](https://community.rockrms.com/documentation/bookcontent/8/) guide for more information on working with communications.