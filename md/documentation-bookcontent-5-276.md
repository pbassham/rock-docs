# 
from:documentation-bookcontent-5-276.html

#### Updates for McKinley 15.0

Below is a summary of the updates for this version.

*   Race and ethnicity can optionally be tracked for individuals (off by default)
*   The Reminders feature will alert you about events and tasks, helping you stay informed and engaged in ministry

#### Updates for McKinley 1.0

No updates made.

#### Updates for McKinley 2.0

No updates made.

#### Updates for McKinley 3.0

Below is a summary of the updates for this version.

*   Updated the location of the 'Photo Request' page to its new home under 'Admin Tools > Communicatons'.
*   Detailed Rock's new international friendly School Grades.

#### Updates for McKinley 4.0

Below is a summary of the updates for this version.

*   Added detail information on Tag security.
*   Added new chapter _My Pages_ which covers the My Settings and My Dashboard pages.
*   Documented the move of the following page from under _People_ to _My Settings_.
*   Expanded the _Following_ chapter to including sections on engaging and configuring following, as well as following suggestions.
*   Added details on the new merge requests feature.
*   Described Rock's new 'Possible Duplicates' check when adding a family.
*   Documented the new Geofenced By Group badge.
*   Discussed the new 'Alert Note' badge.
*   Updated details on the Bio Bar where phone numbers with SMS enabled will display a small icon next to the phone number. Also, when the page is loaded on a mobile device the phone numbers will display as links to enable 'Click-To-Call'.

#### Updates for McKinley 5.0

Below is a summary of the updates for this version.

*   Updated new capabilities added to the My Dashboard page.
*   Added new chapter on the Person and Family Analytics tools.
*   Added new section to the Person Attributes chapter about configuring the Person Attribute Forms block
*   Documented the new 'auto-follow' feature on following suggestions.

#### Updates for McKinley 6.0

Below is a summary of the updates for this version.

*   Added new information on the new Directory feature.
*   Documented the new Family Attributes feature.
*   Added information on the new external profile editor.
*   Updated "liquid" to "Lava" in Badges section
*   Clarified calculating eRA as 'Weekend Service' in Person & Family Analytics chapter.
*   Added Reset Login Confirmation documentation to Duplicates chapter.
*   Added Foster Families note to Strategies for Blended Families chapter.
*   Updated Suggestion Type documentation in Following chapter to include "In Followed Group" option.
*   Corrected block settings information in the Directory chapter.
*   Updated Bio Bar screenshot and updated edit button information.
*   Clarified the Directory screen shot block settings explanation.
*   Fixed reversed callouts/typo in Following Suggestions screenshot in Following chapter.

#### Updates for McKinley 7.0

Below is a summary of the updates for this version.

*   Added new 'In Data View' badge type.
*   Added add/delete security roles from person profile page.
*   Added tip on how to extend the bio bar block settings to create a dynamic profile page.
*   Added 'Pending' to possible Connection Status badges in Bio Bar.
*   Added Merging Documents and Family Attributes tip to Duplicates section.
*   Changed "liquid" to "Lava" in the Badges section
*   Added Person History Following Event documentation and screenshot to Following chapter.
*   Added Search by Birth date subsection to Searching chapter
*   Added Add Family Block Settings subsection in Adding a Family chapter, including screenshot and callouts.
*   Updated Person Profile screenshots to include updated Actions menu.
*   Updated Actions callout in Person Profile section to include information on downloading a person's vCard.
*   Updated Bulk Updates screenshot and callouts to include information on workflows in bulk updates.
*   Updated Tags chapter to include updated tag security information.
*   Updated Suggestion Type documentation in Following chapter to include "In Followed Group" option.
*   Updated incorrect edit link information in Bio Bar documentation.

#### Updates for McKinley 8.0

Below is a summary of the updates for this version.

*   Updated Person Profile and Bio Bar screenshots to include social media icons.
*   Added Social Media section to the Extended Attributes section of the Person Profil Page chapter.
*   Added Process Adult Children Job note/section in the Reccomendations for Life Events chapter.
*   Updated Merge Screen screenshot in the Duplicates chapter.
*   Updated Merging Records and Family Attributes note in the Duplicates chapter to include information about the Family Values and Family Attribute Values sections of the Merge People screen.
*   Added How Rock Handles People and Families chapter.
*   Added information to the Editing an Individual chapter about the Lock as Child option available in the Edit Person screen.
*   Added Personal Devices badge to Badges chapter.
*   Updated Person Profile Page chapter to include Signals section of the Security tab.
*   Updated Individual Identifers documentation in Editing an Individual chapter.
*   Added Person Signal Types chapter.

#### Updates for McKinley 9.0

Below is a summary of the updates for this version.

*   Added "Schedule Toolbox" to the Group Tab
*   Updated Badge Bar with new assessment badges
*   Updated Badge chapter with assessments mention
*   Removed "DISC Personality Assessment" chapter (replaced by Assessments book)

#### Updates for McKinley 10.0

Below is a summary of the updates for this version.

*   Added details to describe single-campus behavior
*   Added ability to configure badges for any entity
*   Added option to select which address to keep when merging records
*   Added Documents and Assessments to History tab in Person Profile

#### Updates for McKinley 11.0

Below is a summary of the updates for this version.

*   Added Documents tab to Person Profile page
*   Individual parts of Addresses can be made optional or required

#### Updates for McKinley 12.0

Below is a summary of the updates for this version.

*   The external My Account page has a cleaner look and feel and new block settings, including a Lava template to control the view mode
*   Updates to Connection Requests can be viewed from the Person Profile page under Person History
*   Personal Links let you bookmark pages in Rock, allowing for fast navigation to the pages you choose

#### Updates for McKinley 13.0

Below is a summary of the updates for this version.

*   A new Following Event Type was added for when a person you're following has a person note added
*   New Account Protection Profile features restrict merges in order to reduce the possibility of an account hijack attempt
*   Some changes related to Steps items are now tracked in the Person History
*   The Family Pre-Registration block allows for launching a workflow for each parent and a workflow for each child
*   The Communication History block on the History tab of the Person Profile has been updated to provide additional details about communications sent to the person

#### Updates for McKinley 14.0

Below is a summary of the updates for this version.

*   The Person Profile pages have been given a new look and feel
*   New security settings allow you to hide account protection profile information on Person Profile pages

[](#welcome)Welcome
===================

Welcome to the Rock field guide for managing people. Individuals and families are at the core of what we do. In this guide we'll look at the people-managing tools you'll find in Rock. We'll also dig a little deeper to give you a glimpse into how Rock stores information about individuals to help you best use Rock in your organization.

[](#wearefamily)We Are Family
=============================

Every person in the database belongs to a specific _group type_ called Family. It’s impossible to add a person to the system without either creating a new family or adding them to an existing family. However, an individual isn’t limited to membership in a single family. They can belong to many families, but they will always have at least one. Below we look at some of the other unique things about the family.

[](#addresses)Addresses
=======================

Addresses are tied to the family, not the individual. There are several different types of addresses defined in Rock, and you can add more if you’d like. The ones that are available out-of-the-box include:

*   Home
*   Work
*   Previous

Adding an Address Type
----------------------

If you'd like to add a new address type, follow these steps:

1.  Add a new group location type under:  
    Admin Tools > General Settings > Defined Types > Group | Location Type.  
    Be sure you select the Group | Location Type as there's also a Location | Location Type.
2.  Add your new group location type to the Family group type under:  
    Admin Tools > General Settings > Group Types.  
    From this screen select the _Family_ group type and add the new address type to the Location Types list in the _General_ section.

Configuring Address Fields
==========================

If needed, you can make specific parts of an address required, optional or hidden. Navigate to Admin Tools > General Settings > Defined Types > Countries and edit the entry for your country according to your needs.

[](#campus)Campus
=================

If you’re a part of a multi-site organization, the campus is also tied to the family. Interestingly, if a person is a member of two families that attend separate campuses, the individual will be tied to two different campuses as well. This is a powerful pattern for blended families to use.

If you’re not a multi-site organization then the campus is still tied to the family, but it’s done behind the scenes. This is needed just in case a new campus is ever added.

[](#portraitofaperson)Portrait of a Person
==========================================

[](#whatmakesaperson)What Makes a Person
========================================

Before we start diving into the features, let's look at what makes up a person in Rock.

There are two main sources of data when looking at a person's record. First are the common data elements that are "hard-coded" into the system. These include basic fields like _First Name_, _Last Name_, _Email_, etc. These fields are common to all organizations, so they have been provided from the beginning of Rock and can't be removed.

Second, since every organization is different, Rock also allows you to add new data items to a person. We call these _Person Attributes_. You can add as many as you like, selecting a data type for each one. Common data types include:

*   Text
*   Date
*   Number
*   Dropdown of provided values (think of an attribute of T-Shirt Size with the values of S, M, L, XL)
*   Boolean (aka, True/False, Yes/No)
*   Document

While there are quite a few other data types you can use, those are the common ones.

Over time, your list of added attributes can become quite large. To help with this, we've provided the ability to group them into categories. You'll see these attribute categories later when we look at the _Person Profile_ page.

Note
====

See your administrator to help define new person attributes and categorize them into groups.

[](#addingaperson)Adding a Person
=================================

As you’re getting started, one of the first things you’ll want to do is add someone (perhaps yourself) to the database. While it might be intuitive to look for a menu item labeled "Add Person", you won’t find one. Because people are members of families, you must start with adding a family. You’ll find that under:  
People > New Family.

[](#deletingaperson)Deleting a Person
=====================================

While it might seem like a natural thing to do, deleting a person is not allowed in Rock. Why? The history of a person must be maintained for historical records to be accurate. Think about giving and check-in. If a person was deleted, you would lose their contributions and attendance information. Instead of deleting people, you can inactivate them in the database (more on how to do this later).

Let's look at some common situations where you might want to delete a record, and how to handle them in Rock.

**Scenario:** John Doe no longer attends and has asked to be removed from the database.

**In Rock:** You can consider John removed when he has been marked inactive. This should remove him from all future emails.

Note
====

When writing custom reports, be careful not to include inactive records.

**Scenario:** You added a duplicate record and want to delete the new one.

**In Rock:** Instead of deleting the record you'll need to merge it with the existing record. See the [Duplicates](#duplicates) section below on how to do this.

**Scenario:** You added a test record and now want to delete it.

**In Rock:** It would be best not to add test records to your production environment. You might consider creating a test environment that you can treat as a sandbox. If you added a sample record to your database, you have two options. The first option is to inactivate it like it was a normal person. The second would be to merge the record with an existing record.

[](#searching)Searching
=======================

[](#searchingbyname)Searching By Name
=====================================

To find someone in the database, start by using the _Smart Search_ tool found at the top of every page. This tool can be used to search several different types of data, but it defaults to searching for individuals by name.

Smart Search Tool

![Smart Search Tool](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/smart-search-v14.png)

When searching by name, it's important to know some tricks to improve the quality of your search and to save time. Keep in mind that you don't need to type a person's full name to search. You can type fragments of the name. Say, for instance, we're looking for Ted Decker. Here are several suggested ways we can search for him:

t decker  
te dec  
decker  

Notice that none of these suggestions included "Ted Decker." That would be a waste of key presses. (Useless fact: the average key on a keyboard has a life cycle of only five million presses.) Because you make fewer spelling mistakes if you press fewer keys, it's always a good idea to shorten searches.

Also, notice in our samples above that we never searched for just "Ted." If you provide only one name, Rock assumes you're searching by last name.

But I'd Like to Search by Only First Name...
============================================

If searching by only the first name works for your organization, no problem. We have you covered. To enable searching both first and last names when only one term is provided go to:  
System Settings > Search Services > Person Name and set _Allow Search by Only First Name_ to "Yes".

Once you submit your search, you'll see one of two possible screens. If only one person matches your search, you'll be taken straight to the _Person Profile_ page for that person. However, if more than one person is returned, you'll see a list of individuals. Select the correct one, and you'll be taken to their _Person Profile_ page.

Search Results for 'Decker'

![Search Results For Decker Family](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/search-results-v13.png)

Rock has a sophisticated algorithm that helps you find names even if you can't spel theem corectlly. You may often see other possible matches at the top of your search results.

Other Recommended Results

![Recommended Results](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/search-looking-for-v13.png)

Other Recommended Results

[](#searchingbyphone)Searching by Phone
=======================================

While not as common as searching by name, sometimes you may want to search for a person using a phone number. The _Smart Search_ tool can also search by phone. Simply select the _Phone_ option and type in the number.

Just like searching by name, you don't need to enter the full phone number to get results. You can enter any part of the phone number. (This is great for people who leave voicemails with rushed return numbers). If you were searching for the person with the phone number (623) 555-3322 (Ted Decker in our sample database), you could use any of the searches below to find him:

(623) 555-33  
62355533  
3322  
555 3322

Note
====

The phone search will strip out any characters that aren't numbers before running the search.

[](#searchingbyemail)Searching by Email
=======================================

Yep, you guessed it: Rock can search by email using the _Smart Search_ tool, too. Partial searches are supported. We're sure you've got it by now, so we won't repeat the search details here.

[](#searchingbyaddress)Searching by Address
===========================================

The address search is also similar to the other search types. Keep in mind, though, that it only operates on the street address portion (first line) of the address. Sample searches for Ted Decker would be:

11624 N 31st Dr  
11624  
31st Dr

[](#searchingbybirthdate)Searching by Birthdate
===============================================

You can also search for a person by birthdate. For this option to be available, it must first be enabled and configured in Admin Tools > System Settings > Search Services.

[](#searchingbygroupname)Searching by Group Name
================================================

Much like searching by name, you can also search by Group Name using the _Smart Search_ tool. You can type a specific name to locate a particular group (e.g., "Alisha Marble's Small Group"), or use a general term, such as "student", to display a list of all groups with that term in the name.

[](#searchingbybusiness)Searching by Business
=============================================

You can search by business name using the _Smart Search_ tool as well. Partial searches are supported.

[](#universalsearch)Universal Search
====================================

The _Smart Search_ capability in Rock is quite powerful, but sometimes you may need more. That's where _Universal Search_ comes in. _Universal Search_ allows you to search multiple types of data at once in a full-text manner. In a sense, it's like Google for Rock. To learn the ins and outs of Universal Search, check out the [Universal Search](https://community.rockrms.com/documentation/bookcontent/32/) guide.

[](#istillhaventfoundwhatimlookingfor)I Still Haven't Found What I'm Looking For
================================================================================

The _Smart Search_ and _Universal Search_ features should meet your needs in almost every case. If you need to search with even finer detail, you can write a quick _Data View_ to find the person. See the [Taking Off With Reporting](https://community.rockrms.com/documentation/bookcontent/6#filteringusingdataviews) guide to learn more.

[](#personprofilepage)Person Profile Page
=========================================

The _Person Profile_ page is by far the most used and powerful page in Rock. This one page gives you a detailed picture of a person's involvement in your organization and the relationships between people.

Person Profile Page

![Person Profile Page](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-page-v14.png)

The page can be broken down into four main areas, which we'll discuss in detail below.

[](#personbio)Person Bio
========================

The _Person Bio_ gives you details and contact information about the individual. Here's a breakdown of this section.

Bio Section

![Bio Section](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-bio-section-v14.png)

1 Photo

If a photo is available, it's shown here. If no photo is available, a gender/age appropriate silhouette image is shown.

2 Labels

Labels are a quick way of categorizing a person's involvement. After installation the following labels will be active on the page, but you can add custom labels.

*   **Connection Status:** Member, Attendee, Visitor, Participant, Pending.
*   **Campus:** Which campus the member's family attends. This label isn't shown if you only have one campus.
*   **Record Status:** This label is only shown if the record is _Inactive_ (i.e., they are no longer attending).
*   **Account Protection Profile:** The small padlock icon below the profile picture references the person's [Account Protection Profile](#accountprotectionprofiles) level. You can control who can see this by editing the block's security.

3 Demographic Information

This includes age, gender and marital status.

4 Contact Information

This section contains phone numbers and the person's email address. Note that if the phone number has SMS enabled, you'll see a speech bubble icon. Also, if this page is loaded on a mobile device, the phone numbers will appear as links to enable 'Click-To-Call'.

5 Email Address

Clicking the email address will launch a new communication to the individual. You may also see icons next to the address noting the individual's email preferences. If they have asked not to receive bulk emails, you'll see a . If they have asked not to receive any emails the address will not be a link and the icon will be displayed.

6 Actions

The action list allows you to launch workflows for the individual. See the [Blasting Off With Workflows](https://community.rockrms.com/documentation/BookContent/12#personprofileactions) manual for details on creating custom actions for your organization. More details on the _Photo Request_ action can be found in the _[Photo Requests](#photorequests)_ section below. This list is also where you can download a person's vCard, or virtual business card, to store on another device, such as the contacts on your cell phone. Rock automatically generates a person's vCard based on the contact information provided on their profile.

7 Edit Link

The edit button allows you to edit the person's personal and contact information and gives you the advanced option of combining their giving with another person's.

8 Social Media Icons

The icons of any social media accounts that have been configured in the person attributes and completed for the individual will appear below the photo. For more information about configuring and editing a person's social media information, see the [Extended Attributes Tab](#extendedattributestab) section below.

Note About Emails and SMS Phone Numbers
=======================================

You are limited to entering only a single email and SMS phone number for an individual.

Extending the Person Bio
========================

There are a lot of options available in the _Person Bio_ block settings that allow you to customize the _Person Profile_ page. For example, you can use the _Additional Custom Actions_ field to add buttons, link to workflows or add personalized content, or the _Custom Content_ field to add almost any content you wish that is not in the core Bio block.

NOTE: When using the _Custom Content_ area, you need special "context" syntax. For example, to display a Person Attribute here, you would use `{{ Context.Person | Attribute:'AttributeKey' }}`

The possibilities are endless. Be sure to explore these powerful options and consider how you might use them to create a unique profile page that meets the needs of your organization.

[](#badgebar)Badge Bar
======================

The next section is what we call the _Badge Bar_, with icons (i.e., badges) indicating a person's activity. While Rock comes preconfigured with several badges, you can add more. For more information on badges, including how to create new ones, see the [Badges](#badges) chapter below.

Badge Bar

![Badges of the Badge Bar](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-badge-bar-v14.png)

3 16 Week Attendance

The _16 Week Attendance_ badge will show how many times the family has attended (e.g., checked in children, serving team participation) over the past 16 weeks.

2 Attending Duration

The _Attending Duration_ badge shows you how long the individual has been a part of the organization.

3 Last Visit on External Site

This badge shows you how long it's been since the person last visited your external website.

4 Family Attendance

This chart gives you a wider picture of the attendance patterns over the last 24 months. Each bar represents one month. The taller the bar, the more often the family attended that month. As of Rock v15.1, this badge can be edited to show an individual's attendance.

5 Assessments

If the person has completed any assessments the results can be seen here. For more information, see the [Assessments](https://community.rockrms.com/documentation/bookcontent/37/) guide.

6 Baptism Badge

The _Baptism Badge_ shows if the individual has been baptized.

7 Serving Badge

The _Serving Badge_ shows if the person is a member of a serving team.

8 Tags

Tags are a handy tool for creating simple groups of people. Tags are so useful that they have [their own chapter](#tags).

[](#familysection)Family Section
================================

The next section outlines the individual's family or families. The _Family Section_ lists each family member's name, age and _Person Profile_ page link, along with an address and editing link for each family.

Family Section

![Family Section](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-family-section-v14.png)

The address section of the family area has a couple of interesting features. Clicking on the to the left of the address will bring up an interactive map. Also, when you roll over the address a will appear to the right. This icon will standardize and geocode the address when clicked. Lastly, you can click the icon to edit the address and its configuration.

Note
====

In Rock, an individual can be in more than one family. In these cases, both families will be shown in the family section. Behind the scenes one family is classified as the [Primary Family](#primaryfamily), but for the most part each family is treated as an equal.

[](#tabsbar)Tabs Bar
====================

The lower area of the page is devoted to subsections, with tabs that are visible according to your security level. We'll talk about each one below.

Subsections Bar - Person Profile

![Subsections Bar - Person Profile](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-subsections-bar-v14.png)

[](#personprofiletab)Person Profile Tab
=======================================

The first tab is the _Person Profile_, with notes and key attributes. Let's break each of these areas down.

Timeline
--------

The Timeline shows notes about a person, some of which are system-generated whenever the individual completes certain actions like joining a group. Most of them, however, are entered by staff and key volunteers. Notes are an important part of Rock and we've devoted an [entire chapter](#personnotes) to their usage below.

Bookmarked Attributes
---------------------

As we discussed earlier, person attributes are an important part of Rock. Over time, your list of attributes will grow according to your organization’s needs. Each staff member, however, only works with a limited set of attributes, depending on their position. To help simplify this, we’ve added a Bookmarked Attributes section. Each staff member can choose a list of person attributes they want to display in this box. Every time they visit a _Person Profile_ page, their chosen attributes will be displayed.

You can configure which attributes are displayed in this section by selecting the button in the header. You can also edit the values of the attributes by clicking the button. Each person can adjust the order of the attributes on their bookmark list by clicking the button, then dragging the attributes into the desired order.

Connection Requests
-------------------

This section shows a list of Connection Requests that have been made by the individual. This block’s settings let you change the detail page that’s viewed when a request is clicked, and lets you hide Connection Requests in specified States. You can read more about Connection Requests in the [Engagement](https://community.rockrms.com/documentation/bookcontent/39#connections) manual.

Known Relationships
-------------------

Just like in real life, relationships describe connections between two people. Some of the known relationship types provided are:

*   Grandparent
*   Parent
*   Child
*   Invited by
*   Allow check-in by

To add a new relationship, click the button on the _Known Relationships_ header. Select the relationship type you want to add from the dropdown, then select the person who matches the relationship you're trying to build.

Many of these relationships have an inverse relationship (e.g., Grandparent to Grandchild). When adding one of these relationships, the system will automatically add the inverse relationship for you. What a timesaver!

You can add custom relationship types if you want. In fact, we have a [whole chapter](#managingknownrelationships) on how to manage known relationships.

Peer Networks
-------------

Some relationships are known, but others are implied through the data. For example, if two people are in the same group, we can imply a relationship. Rock highlights these kinds of relationships in the Peer Networks area.

Note
====

The Peer Networks feature will get more powerful with time as we add more and more capabilities to Rock.

[](#extendedattributestab)Extended Attributes Tab
=================================================

The next subsection of the _Person Profile_ page contains all the added attributes, grouped by category. Only attributes with values are displayed. To add or edit the value of an attribute, just click the button in the category header.

Extended Attributes Subsection

![Extended Attributes Subsection](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-extended-attributes-v14.png)

1 Category

Attributes are grouped into categories to help order and manage them. The attributes we see here, like for Baptism, are in the Membership category.

2 Category Header

Each category has a header with a name (e.g., Visit Information, Education) and optional icon.

3 Reorder Button

Those with 'Administrate' access to the attribute block can re-order attributes by clicking the button, then dragging the attributes into the desired order.

4 Edit Button

To edit the values of the attributes in a category click the button in the header.

Social Media
------------

The _Social Media_ category is where you can enter and view social media account information for a person. By default, Facebook, Twitter, Instagram and Snapchat are included, but you can add other social media platforms by creating new _Person Attributes_ in the _Person Attributes_ screen with the _Social Media Account_ field type. The _Person Attributes_ screen is located at:  
Admin Tools > General Settings > Person Attributes.

Any _Person Attribute_ using the _Social Media Account_ field type will be displayed as an option in this category, and the icon of any social media options completed for the person will appear below the person's photo in the _Bio Bar_. The _Person Attributes_ screen also contains options that allow you to control what the icons look like and how they are displayed.

As you create new groups of person attributes, you'll want to be sure you keep this page updated. See your administrator for help.

[](#stepstab)Steps Tab
======================

The _Steps_ subsection lets you view and manage steps for the person. For full details on Steps, check out our [Engagement](https://community.rockrms.com/documentation/bookcontent/39#firststepsforsteps) guide.

Steps Subsection

![Steps](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-steps-v14.png)

[](#groupstab)Groups Tab
========================

The _Groups_ subsection displays a timeline of the person's history with groups, as well as a grid view of all the groups the person is involved with. The grid lists important facts like the type of group, the individual's role in the group and the date they were added to the group.

Groups Subsection

![Groups](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-groups-v14.png)

Schedule Toolbox
----------------

The schedule toolbox is used to update and display information that intertwines with the group scheduler. Each person will have their confirmed and requested schedule, their preferences and a sign up button.

Schedule Toolbox - My Schedule

![Schedule Toolbox - My Schedule](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-schedule-toolbox-v14.png)

This area shows the person's confirmed and requested schedule. This same information can also be seen if that person is signed in on the external site under My Account > Schedule Toolbox.

Schedule Toolbox - Preferences

![Schedule Toolbox - Preferences](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-schedule-toolbox-preferences-v14.png)

An internal staff member can set a person’s schedule preferences, or the person can set their own preferences and sign up for events using the _Sign Up_ tab from the external website.

Learn more about the group schedule toolbox and group scheduling in the [Rock Your Groups](https://community.rockrms.com/documentation/bookcontent/7#groupscheduling) guide.

[](#documentstab)Documents Tab
==============================

The _Documents_ tab lets you view and manage person documents.

Person Profile Documents Tab

![Person Profile Documents Tab](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-documents-v15.png)

At the top of the panel pictured above you can see a summary of the documents associated with the person. At the bottom is a list of all the signature documents associated with the person. For details on signature documents, check out the [Rock Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9#electronicsignatures). For now, let's focus on the Documents block.

For each document in the Documents block, the icons to the right allow you to view the document’s description as well as download, secure or delete the document. Click on any row to manage details about the document or click the button to add a new document.

Person Profile Add New Document

![Person Profile Add New Document](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-add-new-document-v14.png)

1 Document Type

Select the type of document that you want to add. The available items are controlled by the document type’s configuration and by block settings.

2 Document Name

If configured for the document type, a default name may be pre-populated here. Otherwise, it will be blank. You can provide your own name or edit the default name.

3 Description

You can optionally add a description to provide specific details related to this person's document.

4 Add Document

This is where you'll attach the actual document related to this entry.

Entity Documents
================

Documents can be added to any entity, not just people. To see how documents can be used with other entity types, see the [Entity Documents](https://community.rockrms.com/documentation/bookcontent/9#entitydocuments) section of the [Rock Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9/).

[](#contributionstab)Contributions Tab
======================================

This subsection shows the contributions made by the individual (or family, if combined as a family) and any repeating giving profiles that they have. Staff members can be granted access to create new recurring giving profiles or edit existing ones from this page. The [Giving Overview](https://community.rockrms.com/documentation/bookcontent/15#givingoverview) section provides details and analysis of the person's giving.

Contributions Subsection

![Contributions](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-contributions-v14.png)

[](#benevolencetab)Benevolence Tab
==================================

Those with access to view benevolence information will see a _Benevolence_ tab on the _Person Profile_ page. The requests shown here are summarized for the entire family.

Benevolence Tab

![Benevolence Tab](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-benevolence-v14.png)

For additional details related to benevolence, see the [Rock Solid Finances](https://community.rockrms.com/documentation/bookcontent/15#benevolence) guide.

[](#securitytab)Security Tab
============================

Rock takes security very seriously and offers several ways to protect both information and people. The _Security_ tab is one location where you can view and access Rock's security settings and data.

Security Subsection

![Security](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-security-tab-v14.png)

Signals
-------

Signals are discreet flags that can be assigned to a person to bring attention to something. They can be used to flag anything from security concerns to high-level lay leads and everything in between. Click the button to add a new signal. Click the button to delete an existing one.

Security Roles
--------------

In the _Security Roles_ section, you can view, add and delete the person’s security roles. The [Rock Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9#securingrock) has all the details you’ll need for understanding these roles and their meanings.

User Account List
-----------------

Each account (i.e., username) associated with a person is listed here. Over time a person can obtain multiple accounts if they forget one and re-register on the website. You can manage accounts in this section.

For more information on user accounts and logging in, check out the [Rock Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9#userloginuseraccounts).

Profile Viewed By
-----------------

The _Profile Viewed By_ section contains a record of people who have viewed this person's profile. The information in this section can't be modified, but it can be exported into an Excel report if needed.

Profiles Viewed
---------------

The _Profiles Viewed_ section contains a record of the profiles this person has viewed. The information in this section can't be modified, but it can be exported into an Excel report if needed.

[](#historytab)History Tab
==========================

The _History_ tab includes such things as:

*   **Communication History** - A list of all the communications of any type that have been sent to the individual, with full details of each communication available to view.
*   **Attendance History** - A list of all the events and services the person has attended.
*   **Person History** - A list of all the changes that have been made on the individual's record, including Connection Request and Steps updates. This area is helpful for identifying what was changed and who made the changes.
*   **Assessment History** - A history of assessments that have been taken and/or requested.

History Subsection

![History](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-history-tab-v15.png)

  

Don't forget, you can easily switch between family members. When you scroll down on any of the pages described above, you'll notice a drop-down menu near the top left of the screen where you can select other family members to view.

Select Family Member

![Select Family Member](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-switch-family-member-v14.png)

[](#editinganindividual)Editing an Individual
=============================================

To edit the bio and contact information for an individual, click the button in the upper-right corner of the _Person Profile_ page. Rock will display the edit screen for that person's profile.

Edit An Individual

![Edit An Individual](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/edit-person-v15.png)

Most of this screen should be pretty simple, but we have a few helpful tips to share.

When you mark an individual _Inactive_, you’ll be asked to provide a Reason and a Note. This information helps the organization understand why groups of people are leaving and it helps the next person who looks at the record understand why this change was made.

Near the top of the screen, you'll notice a warning indicating that changes to this record should be made with caution. This is due to the person's account protection profile level. You can control who can see this warning by editing the block's security settings.

Near the bottom of the screen is the _Alternate Identifiers_ section, where you can assign an individual an alternate identifier to use during check-in to speed up the process. Alternate identifiers may include barcode or fingerprint IDs, or any other text you care to use. The [Checking-out Check-in](https://community.rockrms.com/documentation/bookcontent/10#barcodecheckin) manual has more information about this process.

Before Now
==========

In previous versions of Rock, these identifiers were assigned at the family level. Now they are assigned to individuals, and any previous identifiers you may have created have been moved to the family's "head of household", which is typically the oldest male. Rock runs a job every night to find anyone who hasn’t been assigned an Alternate Identifier and assigns them one. So, you can count on the fact that everyone in Rock will have at least one alternate identifier within a day of when their record is created. You can create any number of alternate identifiers, and you can [use Lava](/lava/filters/person-filters#personbypersonalternateid) to look up a person record by any of their alternate IDs, so you can do all kinds of fun things with them!

In the _Advanced Settings_ section, you'll find the _Combine Giving With_ field. This helps describe how the individual would like their contributions tracked. In most cases individuals would like to have the contributions tracked as a family (the default option). If someone wants contributions to be tracked separately, just select the blank option.

Here you'll also see an option to _Lock as Child_. This overrides the automated process of updating a person to an adult when they turn 18. By default, individuals in Rock are considered adults when they turn 18 or are designated an adult in a family. The _Lock as Child_ option may be useful for situations where, although an individual is 18, it's best for Rock to continue to consider them a child in a family. This setting will also keep the "Move Adult Children" part of the [Data Automation job](https://community.rockrms.com/documentation/bookcontent/9#dataautomation) from reclassifying them within their family automatically.

Finally, there's a _Search Keys_ section you'll want to note. Rock is configured to support additional email addresses in this area. These could be outdated email addresses or simply alternate email addresses. Rock will consider these alternate email addresses when looking for matching person records but will **not** use these alternate addresses for communications. This helps prevent some duplicate records from getting created.

[](#addingafamily)Adding a Family
=================================

Important
=========

Before adding a new family be sure to search the database first. No matter how certain you are that they are new, you should always double check.

To add a family to the database, click People > New Family from the main menu. Rock will display the _New Family_ screen.

Add A Family

![Add A Family](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/add-family-v13.png)

[](#familymembers)Family Members
================================

First, add the individuals to the family. Completing this section should be fairly easy, but remember these points:

*   Only use these fields to add individuals to the family who are not already in the database. If you know that one or more of the individuals are already in the system, just add those who are not. After the family is saved, you can then edit the family and add the existing members.
*   Note the marital status selection below the list of family members. This allows you to set the marital relationship of the adults in the family. These options are _Defined Values_ so you can rename them or add additional options. You can read more about editing _Defined Values_ in the [Rock Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9#definedtypes).
*   The _Grade_ field will only be shown when you're adding a child.
*   Additional addresses (work, previous) can be added after saving the family.

[](#campusandaddress)Campus and Address
=======================================

The final step in adding a family is to select their campus and add their home address. Additional addresses can be added to the family after it has been saved.

Note
====

The _Campus_ field will be hidden if there's only one campus set up in your system. If a campus value is required by your _Add Family_ block settings (see next section) then the only available campus is automatically applied to the family's record behind the scenes.

[](#addfamilyblocksettings)Add Family Block Settings
====================================================

You can customize which options you want to display in the _Add Family_ block by customizing the block settings.

Add Family Block Settings

![Add Family Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/add-family-block-settings-v13.png)

1 Name

Enter the name you want to give the block. The default is 'Add Family'.

2 Group Type

Select the group type to display groups for. The default is 'Family'.

3 Parent Group

Select the parent group to add the new group to. The default is 'None'.

4 Show Title

Select 'Yes' to display a dropdown menu of titles.

5 Show Nick Name

Select 'Yes' to show an edit box for Nick Name.

6 Show Middle Name

Select 'Yes' to display an edit box for Middle Name.

7 Enable Common Last Name

Select 'Yes' to autofill the last name field when adding a new group member with the last name of the first group member. Remember, families are groups, and the individuals in the family are group members.

8 Default Connection Status

Select the default connection status. If this is not set, the new family member will inherit the same status as the family member who is adding them.

9 Show Suffix

Select 'Yes' to display the person suffix field.

10 Gender

Select whether gender should be required for each person added.

11 Birth Date

Select whether a birth date should be required for each person added.

12 Child Birthdate

Select whether a birth date should be required for each child added.

13 Grade

Select whether a grade should be required for each child added when the group type is Family.

14 Show Inactive Campuses

Select whether inactive campuses should be shown.

15 Require Campus

Select 'Yes' to make a campus required.

16 Show County

Select 'Yes' to provide a County field in the address.

17 Marital Status Confirmation

Select whether a confirmation message should be displayed when saving an adult without a marital status and the group type is Family.

18 Adult Marital Status

Select the default marital status for adults when the group type is Family.

19 Child Marital Status

Select the default marital status for children when the group type is Family.

20 Address

Select whether to require an address for the family.

21 Location Type

Select the type of location that should be used for the address.

22 Show Cell Phone Number First

Select whether the cell phone number should be listed first before the home phone number.

23 Phone Number

Select whether a phone number should be required for at least one person in the family.

24 Adult Phone Number

Select whether a phone number should be required for each adult added.

25 SMS

Select whether SMS should be enabled for cell phone numbers by default.

26 Attribute Categories

Select the Person Attribute Categories to display attributes from. The next section below talks about how this setting is used.

27 Workflows

Which workflows to launch when a family is added.

28 Person Detail Page

Select the page to navigate to after the family has been added. {GroupId} and {PersonId} can be included in the route. Leave blank to go to the default page of ~/Person/{PersonId}.

29 Enable Alternate Identifier

If set to "Yes" you can manually enter a custom identifier for each person when adding the family.

30 Generate Alternate Identifier

When this is set to "Yes" an alternate identifier will be generated automatically for each person.

31 Detect Groups already at the Address

If there is already a family (i.e., group) at the address provided, then you can have the system detect it and alert you. You will then be able to use an existing group instead of creating a new one.

32 Max Groups at Address to Detect

Use this feature to reduce the number of existing groups you'll be presented with when adding a new family to an address in use by other groups.

Select which options and default settings you want to display and click Save.

Default Connection Status
=========================

As noted above, if a _Default Connection Status_ has not been set, then the new family member will be assigned the same status as the family member who is adding them. For instance, a new child will be added with a status of 'Member' if the parent's status is 'Member'. If you have requirements for certain statuses, be sure to set a _Default Connection Status_ to ensure people aren't assigned statuses for which they do not qualify.

[](#wantevenmoreinfo)Want Even More Info?
=========================================

For many, the family entry screen will be just what the doctor ordered. Some organizations, however, may want to capture additional information about the family. The good news is you can have both!

The block settings of the _Family Entry_ block include a setting for configuring attribute categories. After filling out the family, phone number and email information and selecting Next, you'll see an entry form for the first attribute category you selected. Completing this form and pressing Next takes you to the next attribute category. This will continue until you've entered information for each attribute category. On the last screen, you’ll see the Finish button.

The following example shows this process with the _Education_ and _Visitor Information_ attribute categories set.

Adding Additional Attributes

![Adding Attributes](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/family-entry-attributes-v13.png)

1Next

With the additional attribute categories added, the Finish button on the phone number and email page (not pictured) is renamed to Next. Clicking Next will take you to the first attribute you’ve added to the block settings.

2First Category

After clicking Next from the phone number/email page, the first attribute category, _Education_, is displayed.

3Next or Previous

Navigation buttons are present to step either forward or backward.

4More Information

The remaining attribute category, _Visitor Information_, is displayed next.

5Finish

Since this is the final attribute category, the Finish button is back.

Useful Tips
===========

Below are a few tips to help you use this feature to its fullest:

*   Remember that attributes can belong to more than one attribute category. This allows you to create custom attribute categories with the sole purpose of being used on the _Family Entry_ screen.
*   If you configured the attribute to be required, it will also be required on these entry forms. Keep in mind that it will be required when it's edited on the _Person Profile_ page, too.

[](#duplicateshappen)Duplicates Happen
======================================

To help reduce the number of duplicate records, Rock will display a listing of possible duplicates for individuals added to the family.

Possible Duplicates

![Possible Duplicates](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/add-family-possible-duplicate-v13.png)

1 Possible Duplicates

You'll see a warning message indicating that you may be adding a duplicate record into the system. This page is skipped if no duplicates are detected, or if the existing record's [Account Protection Profile](#accountprotectionprofiles) is configured to skip duplicate checking based on your [Security Settings](https://community.rockrms.com/documentation/bookcontent/9#securitysettings).

2 New Record

The "New Record" is listed to the left, for comparison against existing records on the right.

3 Possible Duplicate Records

Existing records that may be duplicates of what you're trying to add are listed here. This allows you to view details related to the existing record, to determine whether you should proceed.

4 Do Not Add Individual

Click this button if you've determined that the record you're trying to add already exists and should not be added.

5 Continue With Add

If you've determined the record you're adding is not a duplicate and should be added to the system, then you can proceed by clicking this button.

For more information about duplicates in general, check out the [Duplicates](#duplicates) chapter below.

[](#editingafamily)Editing a Family
===================================

To edit a family, click the button in the upper-right corner of the _Family_ section of the _Person Profile_. This will take you to the screen pictured below.

Editing A Family

![Edit Family](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/edit-family-v13.png)

1 Overview Section

You can edit high-level information about the family here.

2 Family Members

From here you can add people to the family (e.g., a new child is born) or maintain each person’s Role (Adult or Child) in the family. You can also click the icon to move the individual to a new family.

3 Addresses

Here you can maintain the family’s address information or begin the process of indicating the family has moved.

Each of the areas noted above are discussed in greater detail below.

[](#overviewsection)Overview Section
====================================

The top section of the page allows you to edit the family's name, campus and record status. The family name is used as a title for the family.

Since a person is tied to a campus through the family unit, this is where you would change the campus for all members of a family. If you only have one campus, then the _Campus_ field won't be visible.

Note
====

If a person is in two different families, each tied to a different campus, they will be counted and reported in both campuses.

While the _Record Status_ is typically set on a specific person, we know you’ll sometimes need to change it for a whole family at once. When you mark the family _Inactive_, you’ll be asked to provide a reason. Like inactivating an individual, this helps the organization understand why groups of people are leaving and helps the next person who looks at this specific record understand why this change was made.

Keep in mind that marking the family _Inactive_ will also inactivate each member of the family. The individuals in the family will also be made _Inactive_ in any groups to which they belong.

[](#familymemberssection)Family Members Section
===============================================

The next section allows you to manage the members of the family. To add a new person to the family, click the Add Person button in the header. This will allow you to either select a person who's already in the database (say you're building a blended family) or add a new person (common if you're adding a new baby).

You can also move a family member to a new family. This is commonly done by some organizations when a child turns 18. We’ll discuss this more in the [Recommendations for Life Events](#recommendationsforlifeevents) section.

When you add an existing person to a family, you’re given the option of removing them from other families. If this is a blended family situation with joint custody, you’ll probably want to keep them in their current families. But, if the child is transitioning families, you’ll most likely want to remove them from the first one.

When an existing person is a member of more than one family a small delete button will appear, which allows you to remove them from the family.

Note
====

These are sensitive situations! Please take care when making these family changes. Ask extra questions and invest in getting this right from the start. Consider adding notes to the _Person Profile_ records of those involved to explain the situation in a positive way. This will help future staff understand the family make-up better and keep them from making changes that could upset a family member.

[](#addressessection)Addresses Section
======================================

This final section lists all the current and past addresses for a family. Several different address types can be attached to a family. Ask your administrator for help with adding new address types if needed.

When a family moves, it may be tempting to simply change the home address and save the record. Instead, you should click the Family Moved button. This will automatically move the home address to a previous address and start a new home address for you. Having a previous address is very helpful. When someone moves there’s a period of transition when both addresses could be floating around (online form submissions, checks, etc.) Having both addresses in the system helps staff understand the transition. This also helps reduce the chance that someone would change the new address back to the old. Trust us, it happens!

Map Location
============

Rock requires that one (and only one) address be used for showing on the map. The _Map Location_ flag indicates which address is being used for this purpose. The flag doesn't necessarily mean that the location can be mapped. For instance, if a family has only one address in the system, that address will always be tagged as the _Map Location_ because there is no other location to reference.

Important
=========

Please keep in mind that none of your changes on the _Family Edit_ screen are actually saved until you click the Save button. This includes actions like Move to New Family and Add Person.

[](#familypreregistration)Family Pre-Registration
=================================================

Available on the external website under _Connect_, the _Family Pre-Registration_ page is often where people are directed to create a new record in Rock. Having a place where people can add themselves to Rock saves your staff and volunteers from having to manually create new people and families. The form is simple and easy to use, as shown below.

Family Pre-Registration Entry

![Family Pre-Registration Entry](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/family-pre-registration-entry-v12.png)

1 Campus and Planned Visit Date

Capturing this information lets you know where the person might be planning to attend a service or event, and when. This information is typically only used if you’re launching a workflow as part of the pre-registration process. The Campus field will not be shown if you have only one campus.

2 Adult Information

Adults will fill out this portion of the form for themselves. The block’s settings control which fields are optional or required. First and Last Name are always required at a minimum.

3 Address

The same address will be applied to all adults and any children entered on the form. This will be stored as a Home address.

4 Child Information

The block’s settings let you control which questions to ask children. These are configured separately from the questions that are asked of adults. In both cases, attribute categories can be added in the block settings to allow entry for things like Allergies or Legal Notes.

5 Add Child

Click this button to add the first child, or additional children after the first.

After everyone’s information is entered, all the person needs to do is click Save to complete the process.

Family Pre-Registration Confirmation

![Family Pre-Registration Confirmation](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/family-pre-registration-confirmation-v12.png)

At this point, you’ll find the person/family in Rock. This means, for example, they can show up to your next service ready to check in without needing to be manually entered by staff or volunteers.

Block Settings
==============

As noted above, there are many block settings available to customize the _Family Pre-Registration_ experience. For instance, you can launch a workflow for each parent and for each child when the form is completed. Or, you can choose to ask for race and ethnicity information. Administrators are encouraged to review these settings to ensure you’re collecting all the information you need from new guests.

[](#howrockhandlespeopleandfamilies)How Rock Handles People and Families
========================================================================

Now that you've seen how individuals and families are added and edited in Rock, let's talk about how Rock helps you keep that information current.

Imagine having to manually update the ages of individuals in your organization whenever birthdays occur, or the grades of children at the start of each new school year. It would be a daunting, never-ending task! Thankfully, Rock uses automated calculations to update people and families, so you don’t have to. Let's look at which information is automated and how Rock makes the calculations.

[](#age)Age
===========

Rock calculates an individual’s age by comparing their birthdate to the current date. Why make things more complicated than they need to be?

[](#ageclassifications)Age Classifications
==========================================

In Rock, an Adult is anyone over the age of 18 or marked as an adult in one or more families. A Child is anyone less than 18 or a child in all families. If either of those conditions aren't met, the individual is marked as Unknown.

Rock calculates age each time a person is saved and re-calculates it every time the _Rock Cleanup_ job is run. The value is then saved in the _Age Classification_ property on the Person model, where it's made available to use in Data Views, Reports and other filtering operations.

[](#grade)Grade
===============

Rock calculates a person's grade using their graduation year and the global attribute _Grade Transition Date_. When an individual’s graduation year is entered into their _Person Profile_, Rock compares that year to the _Grade Transition Date_ to determine the individual’s grade. You can configure the _Grade Transition Date_ in the _Global Attributes_ screen, located at Admin Tools > General Settings > Global Attributes.

A Word to the Wise
==================

The transition occurs at the _end_ of the specified date, so if you enter today's date, the promotion to the next grade will take place tonight at midnight. Because this is simply a calculation, and nothing is changed on a person's profile, you can freely change the date back and forth and observe that the grade changes.

For more details on grades in Rock, see the [School Grades](#schoolgrades) chapter below.

[](#primaryfamily)Primary Family
================================

Individuals belonging to more than one family will be assigned a primary family. This is recorded behind the scenes as the _Primary Family ID_ and is initially associated with the family that was entered into Rock first.

Because it’s stored behind the scenes, you typically won’t see the _Primary Family ID_. However, on the _Person Profile_ page, the primary family will be whichever family is at the top of the list for the individual. So, you can change the primary family by clicking and dragging the icon for the desired family to the top of the list. While the _Primary Family ID_ isn’t visible, behind the scenes it will be updated in real time according to your changes on the _Person Profile_.

[](#directory)Directory
=======================

Many smaller organizations like to have a directory of all the people in the database. The Directory feature allows this and much, much more.

Directory

![Directory](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/directory-v13.png)

Out of the box, the directory is configured to display a simple search screen. However, you can change the “Show All People” block setting to show the first 1,500 people in the database if you prefer.

That's not all this block can do though. Let's check out all the features found under the block settings.

Block Settings

Setting

Description

Data View

The results of the directory are driven by a provided Data View. This gives you the power to use the block in many different ways. You may implement it to show _All Members and Attendees_ (which is the default) or perhaps limit it to group leaders, or youth. The sky's the limit.

Opt-out Group

The block allows people to opt out of being shown in the directory. This setting allows you to configure the group that will hold those who wish to opt-out.

Show By

Here you have the option to show the results as individuals or as families.

Show All People

This setting determines if all people should be displayed when the page is loaded or if the person viewing the page will need to first search to find the results.

Person Profile Page

Adding a page to this field will change people’s names into links when viewing the directory search results. Clicking a person’s name will then take you to the specified page.

First Name Characters Required

This setting determines the minimum number of characters that need to be entered in the _First Name_ field for searching. These types of limits are helpful if you'd like people to be able to find people but not be able to see or print the entire list.

Last Name Characters Required

Like the first name setting, but for the last name.

Show Email

This setting determines whether the email field should be displayed.

Show Address

This setting determines whether the address field should be displayed.

Show Phones

This setting determines which phone types should be displayed.

Show Birthday

Determines if the birthdate field should be shown. If shown, only the month/day will be displayed.

Show Gender

This setting determines whether the gender field should be shown.

Show Grade

This setting determines whether the grade field should be shown.

Show Envelope Number

If applicable (see [Rock Solid Finances](https://community.rockrms.com/documentation/bookcontent/15#givingenvelopes)) you can select to have a person’s envelope number shown.

Max Results

You can limit the max number of results to display with this setting. This keeps your server from crashing if you have hundreds of thousands of records.

  

So, there you have it. Once you consider all the features of this block, we're sure you'll be using it all over your sites.

[](#duplicates)Duplicates
=========================

[](#whereduplicatescomefrom)Where Duplicates Come From
======================================================

Duplicate records happen - period. It’s important that your organization understands why they occur and has a process to eliminate them by merging duplicate records.

There are two main ways duplicate records are added to the system. The first is by a staff person or volunteer using the internal site. Before you add someone to the database, it’s important that you make sure they haven’t already been added. Even if you’re certain the person or family is new, it’s always a good idea to double check.

The second way duplicates are added to the system is from activities (e.g., contributions, event registration, connection requests) on the external website. While Rock tries to limit the number of duplicates that are created, sometimes there isn’t enough data to know for sure.

At other times a duplicate is created for security reasons. Rock has to be very careful not to allow someone to "hijack" a record. This would allow a person to create an account as another person and gain visibility to their contact and contribution information. In these cases, Rock will create a duplicate record so that a staff person can double-check that the activity is normal before performing a merge.

Finally, it's important to understand that the amount of "friction" you decide to place on people using the public website can affect the number of duplicates generated. For example, you can attempt to limit the number of duplicates created by requiring individuals to log in for things like online giving and event registration. However, this means people will have that extra "friction" of needing to log in. On the flip side, you may choose to not require logins for these things on the web site (thus "low friction"), in which case Rock will attempt to match to an existing person based on Name and Email...but if Rock _doesn't_ find such a match, a new (often duplicate) record will be created.

[](#howrockavoidsduplicates)How Rock Avoids Duplicates
======================================================

As people are added to Rock, the system will try to look for existing records that might be a match before creating a new record. This logic is used anywhere a person could be added, with very few exceptions. For instance, if you use the REST API, this scoring is not done because a developer may not wish to use it.

When an attempt is made to add a new record, existing records are evaluated and assigned a score based on the logic shown below. If a new record has the same first and last name as an existing record, with nothing else in common, then a score of 30 points (15 + 15) would be assigned.

*   First Name or Nick Name = 15 points
*   Last Name = 15 points
*   Mobile Phone, Email or both = 15 points
*   Last Name doesn’t match, Previous Name matches = 12 points
*   Month and Day of birthdate = 10 points
*   Suffix = 10 points
*   Year of birthdate = 5 points
*   Gender = 3 points

If an existing record scores higher than 35 points, it’s considered a match (and possible duplicate) of the new incoming record. If multiple existing records score higher than 35 points, then the record with the highest score will be selected as the match. If there’s a tie, then the “first” record (typically the oldest) will be selected.

Rock will not perform the duplicate checking process described above if the existing record's [Account Protection Profile](#accountprotectionprofiles) is configured to skip duplicate checking based on your [Security Settings](https://community.rockrms.com/documentation/bookcontent/9#securitysettings).

[](#mergingrecords)Merging Records
==================================

While Rock will continue to pioneer new ways to prevent duplication, it will continue to happen (though hopefully at a reduced rate). So, let’s learn how to merge duplicate records.

The first step in merging records is to search for the individual who has a duplicate record. Type the search criteria into the Smart Search field at the top of the page. When you get your results, you can check the records that are duplicates and click the icon in the list's footer.

Select Individuals To Merge

![Merge Select](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/merge-select-v14.png)

1 Select Records

First select the records you wish to merge.

2 Click Merge

Next, click the icon at the bottom of the grid.

On the merge screen you’ll see each record side by side. Above these records, you’ll see a person picker (under “Add Another Person”) that will allow you to add additional records that are also duplicates to the current record. This is necessary if you can’t select both duplicate records from a single search (perhaps one of the names is spelled wrong).

Merge Screen

![Merge Screen](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/merge-screen-v13.png)

The first thing you'll want to do on this screen is pick the master record. This is the record that the others will be merged into. Then, look at each row and ensure that the correct value is selected. If a value isn’t correct on the master record, you can choose to select the data from one of the other records.

Merging Addresses
=================

The address displayed at the top of the merge block is shown for reference only. After selecting the primary/master record, you'll still need to pick which address to carry forward. If the address you pick is not the current address for the primary record, the current (pre-merge) address will be moved to a Previous Address after the merge is completed.

If you don't have permission to view an attribute that has a conflicting value, you'll receive the warning message pictured in the screenshot above, near the top of the merge block. If staff members responsible for merges shouldn’t have access to attributes outside of a merge context, we recommend using the “View All Attributes” Security Verb as pictured below. Roles or individuals with this access will be able to view any attribute values associated with the records being merged, and can select the value to keep, but will not be able to view those attributes in other contexts (like the Person Profile) without additional security.

Merge Records - View All Attributes

![Merge Records View All Attributes](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/merge-block-view-all-attributes-v13.png)

When you’re done, click the Merge Records button and you'll be taken to the _Person Profile_ page of the merged master record.

If two records exist with the same name, in cases where either of them has an email address and either of them has an associated user login, Rock will display a hijack warning message. For security purposes it's very important that you verify the validity of email addresses associated with either record, and remove invalid emails _before_ you merge the records. Failure to delete invalid email addresses prior to the merge may put a person's information at risk of being exposed to someone else.

After the records are merged, the person will be required to confirm their email address the next time they log in. The _Reset Login Confirmation_ option comes enabled out of the box, but you can disable it in the block settings of the _Merge People_ screen.

Merging Records and Family Attributes
=====================================

If two people being merged have differing family attribute values, the merge will display both values and allow you to select which should be used. If the family name and/or campus are different, both values will be displayed in the _Family Values_ section, and you can select which should be used. All other differing family attribute values will be displayed in the _Family Attributes_ section. Note that any changes made will update that value for the family, which will affect every member of the family. To learn more about family attributes, see the [Family Attributes](#familyattributes) section below.

If you don’t have Edit access to the merge block, you’ll see a message noting that your request to merge a person has been saved. This _Merge Request_ will be listed under Tools > Data Integrity > Merge Requests. Out of the box Rock only allows the members of the _RSR - Data Integrity Worker_ to complete merges.

Merge Request

![Merge Screen](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/merge-request-v13.png)

Merging Records Without Enough Security
=======================================

If you have access to merge but don't have enough security access to view things such as attributes, you won't be able to choose which item survives when the records are merged. Rock will take the value from the primary person/family you choose at the top of the merge panel. This could lead to unintended data being selected during the merge. You should consider giving individuals who process merge requests 'View All Attributes' access as described above.

[](#accountprotectionprofiles)Account Protection Profiles
=========================================================

Every person in Rock has an _Account Protection Profile_. This is a way to classify person records, to protect certain accounts from hijack attempts. A person's _Account Protection Profile_ is calculated each night by the _Process Elevated Security_ job and will be one of the following values:

0.  **Low:** There are no risk items associated with this person.
1.  **Medium:** The person has a login for Rock.
2.  **High:** The person meets one or more of the following conditions:
    *   Has an active Scheduled Financial Transaction
    *   Has a saved Payment Account
    *   Is in a security role with a "High" [Elevated Security Level](https://community.rockrms.com/documentation/bookcontent/9#securityroles)
3.  **Extreme:** The person is in a security role that has an [Elevated Security Level](https://community.rockrms.com/documentation/bookcontent/9#securityroles) of "Extreme"

These _Account Protection Profile_ levels are used by the [Security Settings](https://community.rockrms.com/documentation/bookcontent/9#securitysettings) described in the [Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9/).

When performing a merge, if the person being merged has an _Account Protection Profile_ of Medium or higher, you'll see a message when attempting to merge the record.

Merge with Elevated Security Warning

![Merge with Elevated Security Warning](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/merge-with-elevated-security-warning-v13.png)

There are restrictions on who can merge records that have High or Extreme _Account Protection Profiles_. This is controlled by your [Security Settings](https://community.rockrms.com/documentation/bookcontent/9#securitysettings) configuration. If the person performing the merge doesn't have the needed security, they'll be presented with a message as pictured below and will not be able to complete the merge.

Merge with Extreme Record

![Merge with Extreme Record](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/merge-with-extreme-record-v13.png)

[](#recommendationsforlifeevents)Recommendations for Life Events
================================================================

Below are some suggested processes for common life events. While these are just suggestions, you’ll want to have documented processes for each of these events so your staff handles them consistently.

Coming Soon!
============

In an upcoming update to Rock, you'll be able to automate some of these processes. Keep your eye on Rock’s workflow features as they are released.

[](#deathofafamilymember)Death of a Family Member
=================================================

The death of a loved one is a very hard thing. It’s made even harder, though, when the remaining person is constantly reminded of their loss. When someone notifies your organization about a death, we suggest taking the following steps:

1.  Mark the individual’s record as _Inactive_ with the reason of _Deceased_.
2.  Move the deceased individual to a new family by clicking the button from the _Edit Family_ page.
3.  Remove all contact information from the record.
4.  Add a note to the deceased person marked as _Alert_ with the text of "Deceased" and the date they died.
5.  If married, create a _Previous Spouse_ relationship back to the spouse. It's generally best to leave the surviving spouse as _Married_ as a matter of respect unless they indicate otherwise.
6.  Don’t forget to talk to your finance department about how to deal with regular contribution records. We recommend that the contributions assigned to the deceased person be moved to the surviving spouse. This can be done from the _Person Profile_ page.

[](#divorce)Divorce
===================

Before making these changes, be sure to discreetly get as much information about the family situation as you can. This will ensure you get the information right and not create an awkward situation in the future.

1.  From the _Edit Family_ screen, click the icon for one of the adults to move them to a new family.
2.  Depending on the custody status, you may want to ensure the children are in both families. To do this, find the new family and add any children to it, without removing them from their current family.
3.  Create a _Former Spouse_ relationship to both adults.
4.  Update phone and address information.
5.  Add any name changes on the _Edit Individual_ screen (under _Advanced Settings_).
6.  Update the _Marital Status_ for both individuals.
7.  You may need to use the Reassign Transactions button to transfer financial transactions from one spouse to the other. This can be found under the _Contributions_ tab in the _Person Profile_ page, at the bottom of the transaction list.

[](#marriage)Marriage
=====================

After the wedding, you'll want to complete the following steps.

1.  Go to the primary record (usually the husband or person with the primary address).
2.  From the _Edit Family_ screen click the Add Person button and select the individual from the database, removing them from their current family.
3.  Update the female’s title to "Mrs."
4.  Update both adults’ marital status to "Married."
5.  Add the anniversary date, if known.
6.  Add the wife's maiden name as a previous name on the _Edit Individual_ screen (under _Advanced Settings_).

[](#childturns18)Child Turns 18
===============================

When a child reaches adulthood it’s a good idea to move them to a new family, even if they are still living in their parents’ home.

1.  From the _Edit Family_ screen, click the icon.
2.  Create _Parent_ relationships back to the parents.
3.  Update the individual’s status from _Child_ to _Adult_.

You can use the notes to document the reasons for the changes. While it may seem obvious now, it won’t in a couple of weeks, especially for the next person who views the records.

Process Adult Children Job
==========================

Rock ships with a job that updates children to adults automatically, which not only makes things easier for you but also helps keep the person data in Rock accurate. The job only processes people who have a child role in one or more families, but also is of an "adult" age. The default adult age in Rock is 18, but you can change this. There are several settings the job uses to process individuals, which you can manage by navigating to Tools > Data Integrity > Data Automation | Move Adult Children. With these settings, the job looks at all the families a person belongs to and their role in each of those families, then decides whether or not the person should be updated as an adult and/or added to a new family.

You can learn more about jobs and how to configure them in the [Jobs](https://community.rockrms.com/documentation/bookcontent/9#jobs) chapter of the [Rock Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9/).

[](#personnotes)Person Notes
============================

You just can’t take too many notes! Documenting key conversations and important details is vital to the success of your organization. Here are some examples:

*   Information on life events like hospitalization of a loved one
*   Interest in a specific serving area
*   Likes or dislikes (i.e., preferences related to your organization)
*   Time and date of phone calls

These notes help the staff to be on the same page and help make an organization of any size feel small and caring. There are different types of notes:

Types of Notes

![Types of Notes](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/note-types-v14.png)

1 Alert Note

Used to alert viewers of very important topics. These note types will always remain at the top of the list.

2 Normal Note

These are the default note type. They are viewable by anyone who has been given access to them.

3 Private Notes

These notes are viewable only by the person who entered them.

4 Add Note

Click in this area and start typing to add a new note.

Sometimes you might want to enter a note that only you can see. There are a couple of ways to do this. The first, and easiest, is to make the note private. When you do this, you’ll be the only one who can view it. If you would like to share the note with a limited group of people (like _Pastoral Staff_), click the button and enable viewing for only the _Pastoral Staff_ group.

Note
====

Because we can't add security to an item before it's been created, the security icon will only be visible after the note is saved.

Adding A Note

![Note Editor](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/note-editor-v14.png)

Editor Window

This is where you can enter notes and mark them as Alert or Private. If neither Alert nor Private are checked, the note can be seen by anyone with security to view person notes.

Sometimes a note is very important, and you want everyone to see it. Checking the _Alert_ checkbox will keep the note at the top of the list and highlight it in red. These types of notes can be used to warn staff of a potential issue.

Warning
=======

If you’re creating an alert note, then it’s probably related to unpleasant or sensitive circumstances. As you consider your wording for an alert, try to be as discreet as possible while still getting your point across.

[](#securityfornotes)Security for Notes
=======================================

It's important to understand who will be able to see or edit notes. We touched briefly on note security above, but here is a full breakdown of what you can expect.

*   **Private:** Private notes are only viewable by the creator. No one else, no matter what their permissions are, can see them.
*   **Approve:** The Approve security verb lets you approve notes. You can view any notes for which you have Approve permission.
*   **View:** You can view a note if you have View security to the note itself. You can also view notes you have created or modified in the past. Lastly, you can view a note if you have rights based off of the Note Type.
*   **Edit:** Edit access gives you rights to add a new note and to edit notes that you have created. Edit access DOES NOT give you rights to edit notes that were created by someone else.
*   **Administrate:** Administrate permission will let you edit notes, including notes you did not create.

[](#badges)Badges
=================

Badges are one of Rock’s most exciting features. As you add more and more information into Rock, you can quickly become overwhelmed with the amount of data you collect on a person. Badges allow you to summarize key points of information in a graphical way. This allows you to quickly scan the page and familiarize yourself with the individual.

Badges come in two forms: an iconic badge that shows in the _Badges_ block and a label badge that shows in the _Person Bio_ area. While they look very different, they share the same configuration and settings.

Note
====

There may be some confusion about when to add a label to the _Person Bio_ area and when to add a new badge. We suggest that if you're categorizing a person into general groups that you use a label in the bio section. If you're describing a person’s activity or achievements, then consider a new badge.

Let’s look at the badges that come pre-configured and the steps to add your own new badges.

[](#preconfiguredbadgetypes)Pre-configured Badge Types
======================================================

Rock comes with several badge types pre-configured and ready for you to use. That said, be sure to see the [Defining a New Badge](#defininganewbadge) section below to learn how to set the badges up and add them to a person's profile. While some of these badges are pre-installed and already visible for you when you first log into Rock, other badges exist as a badge _type_ and will require you to configure and add them before they are visible.

Alert Note Badge
----------------

Alert Note Badge

![Alert Note](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/badge-alert-note-v14.png)

This badge displays when a note for the person exists that's marked _Is Alert_. This is helpful when you want to highlight at the top of the page that an important note should be read below. This badge has the following settings:

*   **Note Types** - Determines which note types to consider as alerts
*   **Badge Content** - The HTML to display when an alert note exists

Assessments
-----------

Assessments Badge

![Assessments Badge](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/badge-assessments-v9.png)

This badge displays assessment information. The individual icons within the badge will be filled in with color if the assessment has been taken. You can hover over the badge to see a summary of results, from the following assessments:

*   **Conflict Theme**
*   **EQ Self Aware**
*   **Motivators**
*   **DISC**
*   **Spiritual Gifts**

There's so much to know about assessments in Rock that we gave it its own book. Check out [Assessments](https://community.rockrms.com/documentation/bookcontent/37/) for all the details you'll need.

Attending Duration
------------------

Attending Duration Badge

![Attending Duration](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/badge-attending-duration.png)

Showing all states (new, in weeks, in months and years.)

The _Attending Duration_ badge shows you how long the individual has been a part of the organization. Using the _First Visit_ person attribute it calculates the time span that the person has been attending and then summarizes it by either weeks (if less than 8), months (if less than 24) or years. If the person has started attending in the last week it shows the value as _New_.

Person Signal Type
------------------

Person Signal Type

![Person Signal Type Badge](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/badges-person-signal-type.png)

The _Person Signal Type_ badge shows how many and what type of Person Signal Types are assigned to an individual. To learn more about Person Signal Types, see the [Person Signal Types](#personsignaltypes) chapter below.

Personal Devices
----------------

Personal Devices

![Personal Devices](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/badge-personal-devices.png)

The _Personal Devices_ badge shows how many devices [Wi-Fi Presence](https://community.rockrms.com/documentation/bookcontent/36) has detected for the individual. Clicking on the badge will take you to a screen where you can view all the devices linked to the individual. From there, you can select a specific device to view all the visits that device has made to your organization’s Wi-Fi network.

16 Week Attendance
------------------

16 Week Attendance Badge

![16 Week Attendance](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/badge-16-week.png)

It’s often useful to measure how often a family attends. This information will be displayed on the _16 Week Attendance_ badge. The top bold number is the number of times the family has engaged (e.g., checked in a child, served) in the last 16 weeks.

You'll find that the graph shifts a bit as you look at the various individuals in the family. On adult records the graph shows a summary of all the individuals in the family. A child's record shows just their check-in events.

Family Attendance
-----------------

Family Attendance Badge

![Family Attendance](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/badge-family-attendance.png)

While the _16 Week Attendance_ badge gives you a concrete metric, the _Family Attendance_ badge gives you a wider picture of the attendance patterns over the last 24 months. With this chart, each bar represents one month. The taller the bar, the more often the family attended a weekend service that month. This chart gives you an excellent picture of the attendance trend.

The bar graph on an adult will aggregate attendance for the whole family, while child records will only show attendance for the specific child. However, as of Rock v15.1, the badge's configuration can be updated to show individual attendance for adults too.

Baptism Badge
-------------

Baptism Badge

![Baptism Badge](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/badge-baptism-v14.png)

Showing enabled and disabled state.

The _Baptism Badge_ shows if the individual has been baptized, using the _Baptism Date_ person attribute. If the person has been baptized, the water droplet will be bright, and the rollover text will show the date of the baptism. If they haven’t been baptized yet, the droplet will be light.

Serving Badge
-------------

Serving Badge

![Serving Badge](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/badge-serving-v14.png)

Showing enabled and disabled state.

Similar to the _Baptism Badge_, the _Serving Badge_ shows if the person is a member of a serving team. If so, the clock is dark. Otherwise, it's light.

eRA Badge
---------

eRA Badge

![](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/era-badges.png)

This badge shows the eRA status of the current person. See the [Person And Family Analytics](#personfamilyanalytics) chapter for more information on this badge.

Labels
------

Badge Labels

![Badge Labels](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/badge-labels-v14.png)

Label types on the _Person Profile_ page.

Each label in the _Person Bio_ area indicates a separate badge. These badges show:

*   **Connected Status:** Shows the individual's connected status in green.
*   **Campus:** Shows the individual’s campus in purple. This is hidden if only one campus exists.
*   **Record Status:** This label only shows if the person is marked _Inactive_.

Last Visit On Site
------------------

Last Visit on Site

![Last Visit On Site](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/badge-last-on-site.png)

The _Last Visit on Site_ badge displays the number of days since a person's last visit to a selected site. If the person hasn't visited the site, it won't be displayed. The badge can be configured to link to a page that displays the visitor's sessions and pages that they visited. Rock comes installed with this badge configured for the external site.

Defining a New Badge
--------------------

You define new badges under Admin Tools > General Settings > Badges. Here you'll see a list of currently configured badges. You can also choose to create a new badge from this screen.

Badge List

![Badge List](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/badge-list-v13.png)

Add Badge

![Add Badge](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/add-badge-v13.png)

When you add a badge you’ll provide it with a name, description, entity type and badge type. You can choose to associate the badge with any entity, like a person or a group. The entity type you choose will affect the badge type options available to you. Some badge types require additional configuration.

Let’s look at each badge type and how it can be used.

### Achievement

A badge of this type will be displayed when a person has earned the provided [Achievement Type](https://community.rockrms.com/documentation/bookcontent/39#achievements). The badge's icon will be the icon configured for the Achievement Type or will be a generic medal icon if the Achievement Type doesn't have an icon configured.

### Steps

This badge type allows you to display progress in a step program. You can choose which step program to display and the _Display Mode_ (normal or condensed) for the badge icons. If you want to learn more about Steps badges, there’s a whole chapter for them in our [Engagement](https://community.rockrms.com/documentation/bookcontent/39#stepsbadges) manual.

### Assessment

This type of badge shows the results of assessments taken through Rock. This badge is pre-installed on person profiles out of the box.

### Streak Engagement

If you have any streak types set up, you can create badges for them. Badges of this type are somewhat similar to the family attendance badge. This is a great way to quickly and easily show Streak data (in the form of a bar graph) for a person on the _Person Profile_ page.

### Giving

This badge type will show up when the person has given at least the amount you specify to specified accounts, within a specific date range. You get to use Lava to determine how the badge looks; by default, it's an icon type badge.

### Attended Group of Type

This badge type will show up when the person has attendance in a group of the type you specify, within a set date range. You get to use Lava to determine how the badge looks; by default, it displays the same icon as the group type uses.

### In Data View

This badge can be reused any time you have a Person based Data View that contains the people you want to badge. You provide a _Data View_, and it will show the badge if they are included in it. The icon that's used for the badge is whatever you wish because it comes from whatever HTML or Lava you put into the Badge Content setting. Note that the _Person_ will be included into the Lava merge fields so you can use any property of the person in the display logic of your badge.

This badge type can also be used with _Groups_ or other entities besides _Person_.

### Top Person Signal

A badge of this type will show the top signal that you have stored for the person whose profile you're viewing. Read more about signals [here](#personsignaltypes), but remember that signals are ranked. This badge will examine all the signals you have for a person and display the highest-ranked one.

### Personal Device

A badge of this type will show how many devices are linked to the person and take you to the page you specify in the badge when it's clicked, so you can see their devices or interactions.

### Interaction in Range

A badge of this type will show how many interactions the person had with a specific channel, within a specific date range. When clicked, it will take you to the page you specify (usually the interactions page for the channel, but it could also be a report or another page you create) so you can get more information.

This is useful to see how many times someone visited your website in the last month, or how many communication interactions (received, opened, clicked, etc.) were seen from them in the last week.

### Geofenced By Group

The _Geofenced By Group_ badge displays a label of the group name that has a geo-fence that the individual lives within.

### Alert Note

This badge type will show up when a type of note which you specify has been added to the entity and marked as "Alert".

### Attending Duration

Like the _Campus Badge_, the _Attending Duration_ is fixed in nature and isn't meant to be re-used.

### Campus

The _Campus Badge_ displays a label of the individual's current campus. There’s not much more it does, so it’s re-use is very limited. The _Campus Badge_ isn't shown if you only have one campus in your system.

### Family Attendance

This badge drives the _24 Months of Attendance_ chart. It also provides several settings to allow you to customize it. For instance, if you find the animation on the bars distracting, you can disable it. You can also change the duration from the default of 24 to whatever you wish.

### Family Weeks Attended In Duration

This badge powers the _16 Week Metric Badge_. It’s probably not that re-usable, but you can change the duration from 16 weeks to whatever value you desire.

### In Group Of Type

Unlike the others, this badge type was made to be used often. The _Serving Badge_ uses this badge type. Here’s how it works. You provide a _Group Type_, and it will show the badge enabled if they are a member of a group of that type or disabled if they aren’t. The icon that’s used for the badge comes from the _Group Type's_ "Icon CSS Class". You can also set the color of the icon.

You can use this badge for all types of groups (think Bible Studies, specific classes, etc.)

### In Group with Purpose

A badge of this type will show an icon if they are a member of a group with a specific purpose specified. Out of the box, the most likely purpose you could use this for would be "Serving Area", but since you can create any number of purposes, you can have a different badge for any of them. You don't even need to know Lava to configure badges of these types; just specify the icon and the color you want it to have.

### Last Visit on Site

This badge type drives the _Last Visit on Site_ badge. The _Last Visit on Site_ badge displays the number of days since a person's last visit to a selected site. It’s unlikely that this badge type can be repurposed for any other use, but you can choose which Site should be tracked and details of which pages were viewed.

### Lava Badge

The _Lava Badge_ is the Swiss Army Knife of badges. This badge takes a Lava template and renders it to the screen. You can learn more about Lava [here](https://community.rockrms.com/Lava), but for now think of it as Microsoft Word’s mail merge feature for web development. The badge takes the data on the entity and merges it with your template.

Many of the label badges and the _Baptism Badge_ use this badge type. Feel free to look at their templates to see how they work. You can develop some very powerful badges using this badge type.

Note
====

As you create new badges, note the order they appear on the list. Badges will display in this order when you place them on the _Person Profile_ page.

Adding Badges to The Person Profile Page
----------------------------------------

Once you've defined a new badge the next step is to add it to the _Person Profile_ page. From this page click the button in the _Admin Toolbar_. This will display a block properties button for each block on a page. Hover over the badge block and select its button. Finally, select the badge you wish to add in the container you want to see it in (e.g., Top Left, Bottom Right), and press Save.

Adding Badge to Person Profile Page

![Add Badge To Page](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/badge-add-to-page-v14.png)

Warning
=======

As you can see, badges are a very powerful way to display useful data about an individual. There is such a thing as too much of a good thing. Adding too many badges can diminish their value by overwhelming the viewer.

Viewing Badges Using Custom Security Roles
------------------------------------------

If you create a new security role that should be able to view badges, there's a little extra configuration you'll need to do for the badges to work properly. Without the right setup in place the person will be able to see the badge icons, but the icons won't light up as expected.

Navigate to Admin Tools > Security > Rest Controllers > Badges and click the icon to add the new role to each badge that the role should be able to view.

Also don't forget that the person will need permissions for viewing the parts that make up a badge. For instance, a person needs permission to view the Baptism Date attribute in order for the Baptism badge to appear properly. The person also needs permission to view the badge itself.

[](#tags)Tags
=============

If you’re familiar with tags in photo-sharing sites like Flickr or notes applications like Evernote, then you already understand how to use them in Rock. Tags offer a way to categorize people, content channels or any other entity type. You can literally tag anything. For the purposes of this manual, we'll be talking about tags as they relate to the Person entity. Maybe you want to label a person as a future volunteer for recruiting or maybe you’d like to tag active military personnel. While you could create a group, that approach might be a little too cumbersome if you simply want to use it as a label for a person, so you might consider a tag instead. This helps keep your list of groups to a minimum, making them easier to manage.

Tags are added to a person in the bio section of the Person Profile page. You can add a tag to a person by clicking the icon in the bottom-left portion of the badge block and typing in the name of a tag directly onto the page. To save the tag link, simply press enter (i.e., there is no “Save” button). If a tag already exists, it will be displayed in the auto-complete area. If you type a new tag, it will confirm that you wish to create a new tag before adding it.

[](#yourtagsvs.ourtags)Your Tags vs. Our Tags
=============================================

There are two types of tags in Rock, personal tags and organizational tags. Personal tags are only seen by the creator, while organizational tags are viewable by everyone in your organization. When you create new tags, they are created as personal tags by default, so they can only be seen by you (and your system administrator). Your administrator can promote personal tags to organizational tags upon request. When they are promoted, they keep all the people tagged, so it’s a good idea to get started with a personal tag.

Tip
===

Instead of requesting a new organizational tag from your administrator and waiting for it to be added, consider creating a personal tag yourself and then requesting that it be promoted to an organizational tag.

[](#viewingtags)Viewing Tags
============================

To view all the individuals in a specific tag, go to People > Tags.

Tags List

![Tags List](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/tags-v13.png)

The _Tag List_ page displays all your tags with the option at the top to switch between personal and organizational tags. Clicking on a specific tag will display all the individuals in the selected tag. You can also manage the individuals within a specific tag by adding or removing them from the list here (as opposed to using the person profile for each person individually). If you want to filter tags even further, you can select a type from the _Type_ dropdown menu near the top-right of the block.

[](#administratingtags)Administrating Tags
==========================================

Tags can be managed by an administrator under Admin Tools > General Settings > Tags. The two most common reasons to administrate tags are to delete tags that no longer serve a purpose and to promote personal tags to organizational tags.

Administrators, or those with tagging rights, can also secure tags, limiting who can view them. Add security by clicking on the button in the tag's detail screen. This applies only to organizational tags, since personal tags are already limited to the tag creator and administrators by default. For more information about security settings, see the [Securing Rock](https://community.rockrms.com/documentation/bookcontent/9#securingrock) chapter of the [Rock Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9/).

Tag Security
============

Some administrative tasks related to tags (like deleting them) operate off the security of the Entity. Be sure to set the entity security for tags (Admin Tools > Security > Entity Administration > Tag) to reflect your needs. Out of the box, the _Staff Workers_ and _Staff Like Workers_ have permissions to view, edit and delete tags.

[](#personsignaltypes)Person Signal Types
=========================================

Signals are discreet flags that can be assigned to a person to bring attention to a matter. As with most aspects of Rock, signals are highly customizable. They can be used to flag anything from security concerns to high-level lay leads to anything and everything in between. Some examples of how your organization might use signals are:

*   Safety and Security - to flag someone who shouldn't be around children or on campus.
*   Pastoral Care - to bring attention to someone who needs extra or specialized care.
*   Administrative Tasks - to alert staff of a missing form or other administrative matter.

Signals differ from tags in that tags are meant only to provide information while signals are meant to prompt you to further action. They're a quick, visual way of saying, "Hey, there's something here you should know about."

Person Signal Types

![Person Signal Types](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-signal-types-v13.png)

Signals are managed from Admin Tools > Security > Person Signal Types. You can create as many signals as you need for your organization, giving each a specific color and icon to differentiate them. As you set your signals up, keep the following in mind:

*   The list order of the signals in the _Person Signal Types_ screen is important. The color of the top-most signal is used as the color for the _Person Signal Type_ badge displayed on the _Person Profile_ page, so it's best to keep the most important signal types at the top of the list.
  
*   It's best to use general names for signals. For example, "Safety Team Recommendation" is general without being too vague. This helps to avoid the problem of labeling people, something that not only isn't kind but could also pose future legal issues. Consider using an appropriate color and icon for signals as well.
  
*   Configuring the security settings for each signal type is essential. Signals aren't meant for everyone to see. Likewise, the information provided on the _Person Profile_ page (particularly in the tabs subsections) is sensitive and should only be viewed by those with the appropriate security permission.

Person Signal Types

![Add Person Signal Type](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/add-person-signal-type-v13.png)

For individuals, signals are managed on the _Security_ tab of the _Person Profile_ page. Each signal is assigned a type, owner, expiration date, and note. The owner is the person who should be contacted for follow-up details on the signal. Rock defaults the owner to the person currently logged in.

When a person is assigned a signal, it shows up as a flag-shaped badge on their _Person Profile_ page. The color of the flag corresponds to the most important (highest in the configuration list) signal type they've been assigned. It also includes a number, which indicates the number of signals assigned to the person. Roll over the flag to quickly view a list of which signals the person has. A detailed view of the person's signals is available in the _Security_ tab of the _Person Profile_ page. Signals are also displayed on group member lists, appearing as an icon (the icon you set when creating the signal) of the top-level signal beside the person's name.

Person Signal Type Badge

![Person Signal Type Badge](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-signal-type-badge-v14.png)

\* Signal Badge

The flag here is red because the color associated with this signal is red. If Bob had two signals, and if the higher-ordered signal was assigned a yellow color, then the flag would be yellow and the number “2” would appear in the center.

[](#mypages)My Pages
====================

_My_... _mine_... some of our first words as a child. In Rock, though, the _My Pages_ aren't a selfish grab for more, but rather a place where you can retreat to experience a personalized view of Rock. These pages are found under the login status on the internal site.

Finding My Settings

![My Settings](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/mysettings-nav-v13.png)

1 Photo

From here you can access the _My Settings_, _My Profile_ and _My Dashboard_ pages. We'll review each one in the sections below.

[](#mysettings)My Settings
==========================

Every person has a _My Settings_ page on the internal site. This is a place where each person can manage their Rock settings. Pictured below is a listing of the settings available. Note that many plugins install new pages here, so your options may appear differently.

My Settings

![My Settings](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/mysettings-screen-v13.png)

For details on the settings pictured above, see the [Rock Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9#mysettings).

[](#mydashboard)My Dashboard
============================

_My Dashboard_ is a central location for you to review all your assignments and open requests, as well as followed groups, items and suggestions.

My Dashboard

![My Dashboard](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/my-dashboard-v13.png)

1 My Tasks

This is a list of workflows that are active and currently assigned to you.

2 My Connection Requests

This is a list of connection requests that are active and assigned to you.

3 Following List

Click this button to view or manage the people you’re following.

4 Followed Groups

This is a list of the groups that you're currently following.

5 Followed Items

Rock allows you to follow several types of entities. Here you'll find a list of all the items you've chosen to follow.

6 My Open Requests

This is a list of open workflows that you've initiated.

[](#myprofile)My Profile
========================

This is simply a quick link to go directly to your _Person Profile_ page.

[](#personallinks)Personal Links
================================

Rock’s Personal Links feature makes navigating to your frequently used pages quick and easy. Just click the bookmark icon next to the search bar at the top of any page in Rock to instantly access your _Personal Links_ and _Quick Returns_. This feature also allows administrators to create shared groups of links for individuals in the organization.

Bookmark List

![Bookmark List](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/bookmark-list-v12.png)

_Personal Links_ are pages that you’ve bookmarked inside Rock. The links are divided up into sections that you can name and reorder to your liking.

The _Quick Returns_ are pages that automatically get bookmarked for you. For instance, viewing a group or a person’s profile will add it to your list so you can get back to it easily. Items get automatically added to your Quick Returns from the following pages:

*   Person Profile
*   Data View Detail
*   Report Detail
*   Group Detail
*   Financial Batch
*   Workflow Detail
*   Dynamic Data block (if enabled in the block's settings)

Dynamic Data Block
==================

If you have pages with multiple dynamic data blocks on the same page, you might end up with multiple quick links you wouldn't expect if they all have _Enable Quick Return_ enabled. In these cases, it's best to have only one dynamic data block on the page with _Enable Quick Return_ enabled.

_Quick Returns_ will keep up to 20 items from your browsing history. This could be 10 people and 10 groups, or five each of people, data views, reports and groups, or any other combination that adds up to 20. When you navigate to a new page the oldest item in the list is removed, so you'll always see a list of your 20 most recent activities.

Administrators can add new types of pages to _Quick Returns_ using the _AddQuickReturn_ Lava filter.

You can add any page in Rock to your _Personal Links_. When you’re on a page you want to bookmark, simply open your _Personal Links_ and click the button, then select _Add Link_. The URL of the page you’re on will automatically get copied to the screen, including any query string parameters. Feel free to modify this if you'd like.

You can also organize your links into sections. Think of sections as folders for your links. Adding a section is just like adding a link. Just click the button and select _Add Section_ to add a new section.

Your links and sections are managed using the _Personal Links_ page. To access this page, you can click the icon within the _Personal Links_ window and select _Manage Links_, or you can navigate to the page by going to the _My Settings_ page and clicking _Personal Links_.

Personal Links Page

![Personal Links Page](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/personal-links-page-v12.png)

Using the page pictured above you can add new sections, arrange the order of your sections or view the links within a section by clicking one of the rows.

Personal Links Section Detail

![Personal Links Section Detail](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/personal-links-section-detail-v12.png)

From here you can manage all of your links within a section. You can rearrange their order, add new links or modify existing links. You can also Edit the section to change its name.

Shared Links
------------

Administrators have access to similar pages for managing _Shared Links_. These are links which are shared with others in the organization and will appear in people’s bookmark list. Shared sections will have a icon next to them, to distinguish them from sections you’ve created for your own use.

Shared links can be managed by navigating to Admin Tools > CMS Configuration > Shared Links. Shared sections and links work the same way as personal sections and links, with the same options available for managing them or adding new ones.

Shared Links

![Shared Links](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/shared-links-page-v12.png)

Using security, administrators can manage who can see each section. This allows you to personalize who can see the links based on roles within your organization. Keep in mind that this works at the section level, not for individual links.

[](#configuringaperson)Configuring a Person
===========================================

As you’ve seen, there are a lot of ways you can describe an individual in Rock. However, there are still a few more configuration options available for you to extend. Below we’ll walk through some of these additional settings on a person. Generally, these options are accessed by clicking the icon in the _Person Profile_ page.

Note
====

Each of these settings is a _Defined Type_. You can add new values for each of these items by editing their _Defined Values_. See the [Rock Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9/) for more on working with [Defined Types](https://community.rockrms.com/documentation/bookcontent/9#definedtypes).

[](#connectionstatus)Connection Status
======================================

The _Connection Status_ helps categorize a person’s relationship to your organization. While many organizations will want to modify these options, the following statuses are available immediately after installation.

Status

Typical Usage

Member

This individual has completed all requirements established by your organization to become a member.

Attendee

While not a member, this person is a consistently active participant in your organization’s services and/or events.

Visitor

This status is used when a person first enters through your first-time visitor process. As they continue to attend, they will become an attendee and possibly a member.

Participant

A participant is indirectly involved with your organization. For example, if a family is part of a church’s youth sports program but doesn't attend that church, they would be entered into Rock as participants.

Prospect

Prospect is the default status given to any record that's added from the website. Watch out for duplicate records with these!

  

It's up to your organization to determine the needed connection statuses. These statuses can be modified by an administrator under Admin Tools > General Settings > Defined Types > Connection Status.

[](#recordtypes)Record Types
============================

Record types help Rock add some capabilities to track certain types of entities within the database. There are five record types included after the install:

*   **Person**: A person record
*   **Business**: A business record
*   **RestUser**: A Rest User (API)
*   **Nameless Person**: An unknown person (see [Nameless People](https://community.rockrms.com/documentation/bookcontent/8#namelesspeople))
*   **Anonymous Visitor**: A visitor to your website who is not known. This is used with Rock's [Personalization](https://community.rockrms.com/documentation/bookcontent/14#personalization) features.

For the most part, it won’t make sense to add additional types unless you’re adding new functionality by writing plugins.

[](#recordstatus)Record Status
==============================

The record status gives you an idea of the state of the relationship between your organization and the individual. Each option included by Rock is discussed below:

*   **Active:** Denotes an individual who is actively participating in the activities or services of the organization.
*   **Inactive:** Represents a person who is no longer participating in the activities or services of the organization.
*   **Pending:** Is used by the system to mark a record that needs to be verified before becoming active. This state is often used when someone registers online, to allow a staff person to confirm the new individual and check that it isn't a duplicate record.

You can add your own record statuses but realize that some of the features of Rock assume that the values provided have a certain meaning. Consider using connection statuses rather than record statuses if you need to track a person’s status in a more detailed way.

Making a Person Inactive
========================

In most cases, when you make a person inactive, they will automatically become inactive inside any groups; Unless the group isn't configured to remove people who are inactivated in the system.

[](#inactivereasons)Inactive Reasons
====================================

When someone is marked with the _Record Status_ of "Inactive" it’s a good idea to determine the reason. The system comes configured with the following reasons.

*   No Longer Attending
*   No Activity
*   Moved
*   Deceased
*   Does not attend with family

It’s simple to add more, so by all means feel free to add your own.

[](#maritalstatus)Marital Status
================================

You also have the option of adding additional martial statuses to Rock. The defaults are:

*   Single
*   Married
*   Unknown
*   Divorced

Hopefully these cover it, but if not, then adding them is easy.

[](#phonetypes)Phone Types
==========================

We’ve chosen to release Rock with a limited number of phone type options, allowing you to add others that make sense to you. The default values are:

*   Home
*   Mobile
*   Work

[](#titles)Titles
=================

The following titles are available in Rock: Mr., Mrs., Ms., Miss, Dr., Rev. and Cpt. Feel free to add more to your liking.

[](#suffixes)Suffixes
=====================

The following suffixes are available: Jr., Sr., Ph.D., II, III, IV, V and VI. Should you have a VII or VIII, you can add them yourself.

[](#personattributes)Person Attributes
======================================

Person attributes are a fundamental strength of Rock, so let’s spend some time unpacking this feature.

[](#whentousepersonattributes)When to Use Person Attributes
===========================================================

Person attributes should be used any time you want to store the characteristics of an individual. There are a couple of situations when a person attribute may not be the best fit though. Ask yourself these questions before you add a new attribute:

*   Is there already a common person element or person attribute that exists? You’d be surprised how many duplicate attributes get created.
*   Is the attribute related to a specific group? If so, consider making it a group member attribute instead.
*   Is this attribute really needed? While there are many interesting things you could track about an individual, you should ask yourself if the data item is helpful to your mission. You don’t want to get overwhelmed with the number of attributes you create.
*   Will I be able to keep this attribute accurate going forward? If the value of the attribute changes over time you should ask yourself if you’ll be able to keep it updated. Inaccurate data is often worse than no data at all. For instance, tracking a child’s height might be interesting but impossible to keep accurate. Even if it’s accurate, there’s no way for a person to verify it.

[](#managingpersonattributes)Managing Person Attributes
=======================================================

Person attributes are managed from Admin Tools > General Settings > Person Attributes. Each element of the person attribute is discussed in detail below.

Person Attribute Edit

![Person Attribute Edit](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/attribute-edit-v13.png)

Name
----

The name of the person attribute. This will be used as the label when displaying the value.

Description
-----------

While many people might skip over the description thinking that the name is obvious, we encourage you to spend a moment to enter a thoughtful description of the person attribute. What’s obvious to you now may not be clear to you, or others, in the future.

You might define what it means to your organization.

**Sample:** _Baptized Here_ tells us that the individual was baptized at our organization and not by a previous church.

How the data is entered:

**Example Description 1**: This value is updated by the baptism coordinator after the baptism record card is received.

**Example Description 2**: This value is updated by the system once the individual is marked completed in a baptism workflow.

Categories
----------

While person attributes should be created wisely and purposefully, over time it’s likely your list will grow to be very long. To help with this, you can categorize attributes into groups. This allows you to manage groups of attributes instead of individual attributes.

It should be noted that a person attribute can be in more than one category. This allows it to be displayed in multiple areas yet have a single consistent value.

Key
---

For the most part, you don’t have to worry about the attribute’s key. A default value is created for you. The key is more for developers who might wish to override the default. (You know how developers can be.)

Required
--------

Yep, you guessed it. You can require that certain attributes be completed whenever a person is edited.

Field Type
----------

OK, this is where it gets fun. Rock allows you to store different types of data. You get to tell the system what type to use for your attribute. This determines what options exist for an attribute’s value. For example, let’s say you want your person attribute to track which foreign languages a person can speak. You wouldn’t want to pick a field type of “Date” because a date wouldn’t tell you anything about languages. Instead, a field type like “Defined Value” or “Multi-Select” would be better for tracking spoken languages.

Let’s take a look at some field types and see how they can be used.

Field Type

Description

Boolean

That’s just a fancy term for True/False. Use this for situations where the options are Yes or No, Done or Not Done. For instance, the _Baptized Here_ attribute that comes with Rock is a Boolean. You were either baptized here or you weren’t.

Campus

Don’t use this to denote which campus someone attends. There's already a common element for that. Instead, this might be used to track which campus someone started attending or where they were baptized. Each of these could be different than their current campus selection.

Campuses

This allows you to pick several campuses as the value of the attribute. Perhaps you could use this to track every campus they have ever attended.

Date

You can probably guess what this does and how to use it.

Date Range

Tracks a start and end date.

Decimal

Stores a number with a fractional value.

Defined Value

Defined values are reusable lists of valid values. _Marital Status_, _Phone Type_ and _Record Status_ are all examples of defined value lists. You can use any of the pre-defined defined types or create your own. You can read more about defined types/values in the [Rock Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9#definedtypes).

File

Allows you to upload a document into the person attribute. This is helpful for storing scanned copies of signed membership covenants or other documents you want to keep on hand. If you think you’ll be uploading a lot of documents of a specific type, you might consider adding a new _File Type_. You can read more about this in the [Rock Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9#filetypes). When considering storing files in Rock keep in mind the storage implications of the files you’ll be adding to the system.

HTML

Allows you to store a fragment of HTML that's specific to the person attribute. While this is uncommon, it's useful in some cases.

Integer

Stores a whole number (no fractions or decimals).

Memo

A larger text field for entering multiple lines of text.

Multi-Select

Allows you to specify a list of values that multiple items can be selected from. You define the list of values by passing in a comma-separated list of items (Red, Blue, Green). You can also choose to store a separate value than the label by using the notation _Value^Text_ (1^Red, 2^Blue, 3^Green). The items will be displayed as a checkbox list.

Person

Allows you to tie the person attribute to a specific person. Be sure to consider using known relationships before adding a person attribute with a field type of _Person_ as they are often a better solution.

Single Select

Are very similar to the multi-select field type but only allow a single value to be selected. The single select field type has the added option of displaying the list as either a radio list or dropdown select.

Text

A simple single line of text.

Time

Allows for the entry of time to a person attribute.

  

The field types above are the most common for person attributes, but others exist that we don’t cover in this guide. The other types may be useful in certain edge cases, but the ones detailed above should be all you need for most scenarios.

Default Value
-------------

Most field types allow you to enter a default value that should be used when no specific value is provided.

[](#securingpersonattributes)Securing Person Attributes
=======================================================

The list of person attributes on the screen above also gives you the ability to secure person attributes so only a limited number of people can view and/or edit them.

Note
====

By default, _All Users_ can view an attribute, but only _Administrators_ can edit them.

[](#displayingpersonattributes)Displaying Person Attributes
===========================================================

Person attributes can be viewed and edited from any tab on the _Person Profile_ page. This is done by adding the _Attribute Values_ block to a zone and setting it to display a specific category of person attributes. This is very flexible because a person attribute can belong to more than one category.

To add a new block to a zone, use the _Admin Toolbar_ at the bottom of the page. There you'll use the to bring up the _Zone Editor_ which will allow you to add a new block. For more information on the content management features of Rock be sure to see [Designing and Building Websites Using Rock](https://community.rockrms.com/documentation/bookcontent/14/).

Tip
===

Don’t limit yourself to adding _Attribute Value_ blocks to only the _Extended Attributes_ page. These blocks can be added under any of the tabs on the _Person Profile_ page.

[](#publicpersonattributes)Public Person Attributes
===================================================

While it’s useful for your staff to see and edit person attributes from the _Person Profile_ page, sometimes you may want to let people update their own attributes. For example, if you need to ask questions of people who are interested in serving, you can create person attributes for these questions and then use the _Person Attribute Forms_ block on your external Rock site to prompt people for the answers to those questions. This block can be used to display any combination of person attributes and allows the person who’s logged in to fill out their own values. See the Adding Content to Rock section in the [Designing and Building Websites Using Rock](https://community.rockrms.com/documentation/bookcontent/14#addingcontenttorock) book for more details on that process.

Basic Usage
-----------

Once you’ve added the _Person Attribute Forms_ block to a page, you can configure the forms and fields for it to display. Think of forms as pages that a person will navigate between using Next and Previous buttons. The fields are the person attributes to display on each form. Open the block's edit page to create the forms and select the fields. You can give each form a title to be displayed, and optionally add any header or footer HTML content to each form.

Person Attribute Forms Settings

![Person Attribute Forms Settings](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-attribute-forms-settings-v13.png)

1 **Display Progress Bar**

If you are going to configure this block with multiple forms, you can optionally have a progress bar displayed at the top of each page that gives a visual indication to the individual on how far along they are in filling out the forms.

2 **Save Values**

This determines when the values for each field are saved. They can either be saved after each page (when the person clicks Next) or at the end of all the forms (when the person clicks Finish).

3 **Workflow**

You can configure the block to automatically launch a workflow after the individual has filled out all the forms. For example, you may want to launch a workflow that sends a notification to a staff member, and/or perhaps sends a thank you email to the person who filled out the form.

4 **Done Page**

In addition to sending a workflow, you can also pick another page on your website that people should be sent to after they have filled out all the forms. This could be a page that has an HTML block with a thank you message.

5 **Forms**

One form is added by default, but you can add additional forms by clicking the Add Form button at the bottom. To add Fields to a form, click the button. This will display the _Form Field_ dialog.

When adding a field to a form, there are several options for each field that can be set.

Field Settings

![Field Settings](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-attribute-forms-fields-v13.png)

1 **Person Attribute**

This one’s obvious. Select the person attribute that you’d like to display on the form.

2 **Use Current Value**

Check this box for the individual to be able to see what their current value is for this attribute. If you don’t check this box, the person won't see the current value, and if they don’t enter anything, it will get updated with a blank value.

3 **Required**

Check this box for the individual to be required to fill out a value for this person attribute.

4 **Pre-HTML/Post-HTML**

You can optionally enter any text or HTML to be displayed before or after the field. This is useful if you want to highlight certain fields or group them in a special way. This may take some HTML knowledge to pull off correctly, but it’s not required.

[](#familyattributes)Family Attributes
======================================

We've just looked at how to add person attributes to records, so now let's consider how you can add the same functionality to families.

As you consider your data needs, you'll want to evaluate whether the data attribute best describes an individual (person attribute) or the entire family (family attribute). Say, for instance, your organization is involved in the foster care movement. You might want to note which families are participating in this initiative. You might also want to note where they are in the process of getting approved. While you could put this information on the head of household, it would make more sense to instead make these fields family attributes. This will allow both the head of house and the spouse to be able to update them on the [Person Profile](#personprofilepage) page.

[](#viewingfamilyattributes)Viewing Family Attributes
=====================================================

Family attributes are displayed in the _Family Members_ block of the _Person Profile_ page. You'll note that attributes that are marked _Show in Grid_ will always be displayed. Attributes not marked in this way will be displayed when the icon is clicked in the upper right of the family bar.

Family Attributes

![](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/family-attributes-v14.png)

1 **Attributes**

Attributes marked _Show in Grid_ will always be displayed here.

2 **Edit Family**

You can update the family attributes (as well as other family information) by selecting the icon.

3 **Additional Attributes**

The icon will appear here only if there are family attributes with _Show in Grid_ disabled. When present, the icon can be clicked to view those attributes.

[](#addingfamilyattributes)Adding Family Attributes
===================================================

Since families are simply a group type in Rock, you'll add family attributes in the _Group Type_ editor under Admin Tools > General Settings > Group Types. Family attributes should be added as "Group Attributes" within the Group Type.

Categories Not Yet Supported
============================

Attribute categories are not currently supported for family attributes. There are plans to add support for categories in a future release.

[](#personfamilyanalytics)Person & Family Analytics
===================================================

An important role for leaders is to care for and support the people who engage with their organization. As an organization grows this can become a difficult task as you may lose track of many of the details that make your larger organization feel small. Rock’s person and family analytics tools help summarize all these details and provide predictive alerts when certain key behaviors change.

These tools provide a very clear picture of a family’s involvement. As you’ll see, this opens the door to some incredible opportunities for your organization. It can also, if not guarded, be somewhat creepy. Most tools in life can be used as a weapon (think of a hammer). We know we don’t need to say this but be careful that these tools aren’t used as a weapon. There… that’s done… let’s jump in!

Well, Almost Done...
====================

You'll note that in several places we use the icon to represent these analytic tools. Just another subtle reminder that these tools are a guardian for good.

[](#eraestimatedregularattender)eRA – Estimated Regular Attender
================================================================

Wouldn’t you love to know each and every one of your regular attenders? Get a reminder every time a new one showed up and another when someone left? Well, without divine intervention, that’s just not possible today. With all the data in Rock, though, we can make a decent prediction of a regular attender. This is what we call eRA (no… not Earned Run Average… Estimated Regular Attender).

Recipe for an eRA
-----------------

The key data points for calculating an eRA are giving and attendance. Neither is treated as more important, as each is a good reflection of activity. While researching the best algorithm, we tried to have a bias toward the speed of detection without having too many false positives. The result should determine a regular attender within four months of the first activity.

There are actually two recipes for determining an eRA. The first determines how one becomes (enters) an eRA, the other determines how one exits from being an eRA.

**Criteria for Becoming an eRA**

*   Have given at least four times in 12 months, once being in the last six weeks
*   (or) have attended at least eight times in the last 16 weeks

Keep in mind that every giving transaction counts toward eRA. So, if a person gave twice last Sunday and twice this Sunday, that counts as four transactions and the person will become an eRA.

Families and eRA
================

If a person meets either of the criteria above then the eRA status is applied to all Active family members, including children.

**Criteria for Exiting an eRA:**

*   Haven't given in over eight weeks
*   (and) have attended less than eight times in the last 16 weeks
*   (and) haven't attended at all in the last four weeks

Inactive Records
================

Inactive family members will not receive an eRA status. However, making a person Inactive after they have been established as an eRA will not immediately remove their eRA status. The same “exiting” rules apply as described above.

You might be thinking, "Those are a great start, a little tweaking for our organization and we'll be set." Another goal of the eRA metric is to have a well-defined measure that churches can use to help benchmark. Because of this, we don't allow the recipe to be configured.

If you're not sure why standard benchmarks are needed, let’s use an example. If you ask a church what their attendance is, the need for standard benchmarks becomes clear. Without asking at least four qualifying questions (is that just weekend services, does it include volunteers, etc.) you won't know what this number really represents. For that reason, and to establish that well-defined measure, when calculating eRA Rock looks at the attendance for groups whose attendance counts as 'Weekend Service'.

What's This About "Weekend Service"?
====================================

You may be wondering what counts as "Attendance" when it comes to Family Analytics. This is determined by the _Weekend Service_ setting on any Group Type used for check-in. Out of the box, Rock ships with the Kids/Youth and Serving Team Group Types configured with the _Weekend Service_ option enabled.

If you have another Group Type you wish to count as "attendance at a Weekend Service" (and thus, count towards Family Analytics) go to Admin Tools > General Settings > Group Types and edit the desired Group Type to enable Weekend Service under the Attendance/Check-in tab.

[](#viewingtheanalytics)Viewing the Analytics
=============================================

Person Profile Page
-------------------

Most of the information will be viewed on the person's _Profile Page_, specifically the _Extended Attributes_ tab. Let's take a look.

Analytics Attributes

![](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/analytics-attributes.png)

Security
========

By default, all these values are viewable by the RSR - Staff Workers and RSR - Staff Like Workers. You can adjust the security of each of these attributes under Admin Tools > General Settings > Person Attributes.

[](#erabadge)eRA Badge
======================

The state of the person's eRA can also be seen on the badge bar. The eRA badge has three states.

eRA Badge

![](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/era-badges.png)

*   **Is eRA:** The person currently is an eRA
*   **Was Recently eRA:** Was an eRA but exited the eRA criteria in the last 30 days.
*   **Is Not eRA:** Does not meet the eRA criteria. This badge is simply blank.

[](#erahistory)eRA History
==========================

It's possible that a family can start and stop being an eRA multiple times. To help you see this type of activity we log each time a person enters and exits the eRA status on their history (Person Profile > History Tab).

[](#eraworkflows)eRA Workflows
==============================

Would it concern you if someone who has had regular activity in the past suddenly becomes irregular? Of course it would! You’d probably want to be notified or send them a communication, right? Well, we’ve thought of that for you. The _Family Analytics_ job can be configured to launch a new workflow (you’ll still need to create the workflow) anytime a family enters or exits from being an eRA. To help simplify your workflow, the job will pass in the following information:

Attribute Key

Attribute Type

Description

Family

Group

This is a reference to the family group who has entered or exited.

HeadOfHouse

Person

The head of the household of the family.

Spouse

Person

The spouse of the family (could be empty).

Campus

Campus

The home campus of the family.

A couple of things to think about as you configure your workflow:

*   If the family doesn't have any adults configured, no workflow will be launched.
*   Remember the "e" in eRA stands for _Estimated_. It's not perfect. If you have a communication as a part of your workflow, be sure not to make any assumptions. It's possible that they are still attending but are not giving or having kids check in. Try to make the tone of your communications more of a "Just checking in…" instead of "We miss you…"

See our [Blasting Off With Workflows](https://community.rockrms.com/documentation/bookcontent/12/) guide for more information on workflows.

[](#calculatingtheanalytics)Calculating the Analytics
=====================================================

All these measures rely on the _Family Analytics_ job to be enabled and scheduled to run regularly. This job is available for you out of the box but isn’t automatically enabled. To enable it, simply go to Admin Tools > System Settings > Jobs Administration. From there you can select the _Family Analytics_ job and activate it. You'll also want to consider when and how often it's set to run.

The job can also be configured to launch workflows when a family enters or exits the eRA status. See the [eRA Workflows](#eraworkflows) section for more information on these settings.

Let's look at all the settings of this job in detail.

Family Analytics Job

![Family Analytics Job](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/era-job-v13.png)

1 eRA Entry/Exit Workflows

Use these fields to select which workflow should launch when someone enters and/or exits eRA.

2 Set Visit Dates

When enabled this will enter the first and second visit person attributes. See below for details.

The logic for setting visit dates is fairly complex as it doesn't only look at attendance. The job also considers when the person's record was created. This prevents the system from adding a date to a record that has been around for a while. This could happen when adults who have attended for some time check in a new child for the first time. So, the first visit date is only calculated if it's within 14 days of the person's record being created.

Additionally, remember that a child's visit dates will only be calculated using _Weekend Service_ check-in records. An adult's dates will be calculated based on the check-in records of all children in the family.

[](#managingknownrelationships)Managing Known Relationships
===========================================================

Known relationships are a great way to pattern real-world relationships in your database. While Rock comes with several relationship types already configured (Grandparent, Invited By, etc.), you can create new relationships as needed.

[](#creatinganewrelationshiptype)Creating A New Relationship Type
=================================================================

Known relationships actually use groups to store their values. Each person in the database has a hidden group that contains all of the individuals with whom the person has a relationship. When you configure known relationships, you’re really configuring the _Known Relationship_ group type.

To add a new relationship type, follow these steps:

1.  Navigate to the _Group Types_ editor Admin Tools > General Settings > Group Types and select the _Known Relationship_ group type.
2.  Open the _Roles_ section and add the new relationship role.
3.  Save the group type
4.  **Optional:** If your relationship has an inverse relationship (grandparent <-> grandchild), you can automate the creation of the inverse relationship by editing the role you created and selecting the inverse relationship. In order to pick the inverse, you must first create the relationship roles and save the group type. Then you can go back and edit the inverse types.

When adding a new relationship, you can decide if this type of relationship should allow an individual to check-in the other. For instance, you may decide that grandparents should be allowed to check in their grandchildren.

[](#schoolgrades)School Grades
==============================

Rock provides a customizable system for determining the grade or year of an individual's education and automating promotion from one grade to the next. For most organizations in the US, the out-of-the-box configuration should meet all their needs. For international organizations or those in locales where customization is required, it's easy to adjust the system.

When adjusting the grades, the first thing to keep in mind is that Rock only stores the year that someone graduates from the educational system. In the US, that's their high school graduation. Rock dynamically calculates a person's grade by:

1.  Comparing the current date to their graduation year which provides an offset in years. Rock also uses the _Grade Transition Date_ Global Attribute to help determine the start of the school year.

3.  The year offset from step 1 is then compared with the grades in the _School Grades_ defined type. The first Defined Value (grade) whose value is greater than or equal to the offset is selected. For systems that have one grade for each year, this is a simple setup. The last grade (senior year in the US) would have a value of 0, the next (junior) a value of 1, etc. For systems where a grade spans multiple years, you would "skip" years. For example, to have a _Middle School_ grade level instead of separate 7th and 8th grades, you would set the _Value_ of _Middle School_ to 5, and the next higher grade level (Freshman) to 3.

When adding a new person to the system you're asked to provide their grade. The person’s graduation year is initially determined by the grade provided, using the reverse of the above logic.

Knowing that not every system uses the term _Grade_, Rock allows you to configure the term that’s used by editing the _Grade Label_ global attribute under Admin Tools > General Settings > Global Attributes. So, if you’re more familiar with “year” or “level” it’s easy to adjust accordingly.

[](#bulkupdates)Bulk Updates
============================

Sometimes you have to update a little bit of data. Sometimes you need to update a lot. When you find yourself in the latter situation, you'll want to use Rock’s bulk update capabilities. Bulk update is used to make changes to large populations all at once, instead of making the same change repeatedly one person at a time.

You may have noticed the icon at the top and bottom of table grids that list people. Selecting people on the grid and pressing the icon will take you to the _Bulk Update_ page.

Select Individuals for Bulk Updates

![](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/bulk-select-v14.png)

1 Select All

Selects all items visible on the grid. It does not select items on previous or next pages.

2 Individual Select

You can also select specific individuals on the grid. Or you can use the _Select All_ and then individually unselect items.

3 Bulk Update

Takes you to the _Bulk Update_ page with the individuals you selected.

Power Tip
=========

If you would like to select all the individuals, even those on previous/next pages, you can leave selection blank (don't select anyone) and press the bulk update button. This adds everyone in the grid to the _Bulk Update_ page.

Once on the _Bulk Update_ page, you can select various data points to update. You must first select the data item you wish to update by clicking the icon next to the item.

Performing Bulk Update

![](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/bulk-update-details-v13.png)

1 List of People

You can add or remove individuals from the _Selected Individuals_ section. Whoever is listed will receive the updates being performed.

2 Details

Select data items you would like to edit and then provide a value. Note that you must click the little circle next to the item to enable it for updating.

3 Notes

You can add notes using the bulk update tool. In some cases, this may be the only update you make.

4 Group

You can also add/update/remove individuals from groups. After selecting a group, you can even set any group member attributes for that specific group.

\*

You can modify the block settings to include workflows in your bulk update options. Simply go to the block settings and select the workflows you want available from the _Workflow Types_ dropdown menu. An additional Workflows section is then displayed here, allowing you to choose which workflows to perform for the individuals included in your bulk update. You can select multiple workflows for a single update.

Once you've made your updates, click the Next button and you'll be shown a summary of your changes. If everything looks good, click Confirm and your changes will be applied.

Bulk Update Confirm

![](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/bulk-update-confirm-v13.png)

[](#personprofileeditor)Person Profile Editor
=============================================

The _Person Profile Editor_ is an external page that's dedicated to allowing individuals to update their own information. You can find this page on the external website by selecting My Account from the _Login Status_ block. You'll notice that individuals are able to edit their details at the top of the page. They can also update each of the individuals in their family.

Person Profile Editor

![](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-profile-external-v12.png)

1 Update Profile

In this example, Ted can click here to edit his own information. This is the easiest way to do things like address changes.

2 Edit Family Member

Ted can also edit the information for each member of the Decker family by clicking the icon shown here.

3 Add New Family Member

Your guests can add new members to their families by clicking this button.

4 Request Additional Changes

There may be some information that you want to maintain internally only. This button will launch a "Profile Change Request" workflow that lets your guests request changes to their profile that they can't make on their own.

There are several block settings that you should be aware of for this block. Some of them include:

*   **Show Family Members:** This determines whether the block should allow viewing and editing of the family members.
  
*   **Address Type:** The type of address that should be displayed for viewing and editing.
  
*   **Phone Types:** The type of phone numbers to show for viewing and editing.
  
*   **Workflow Launch Page:** This block can be configured to show a button labeled Request Additional Changes. When this button is clicked, it will navigate to the page provided to launch the workflow.
  
*   **Family Attributes:** The family attributes you would like to configure for viewing and editing.
  
*   **Person Attributes (Adults):** The person attributes you would like to configure for viewing and editing for adults in the family.
  
*   **Person Attributes (Children):** The person attributes you would like to configure for viewing and editing for children in the family.
  
*   **Require Gender:** If this is set to 'No' then the _Gender_ field will still be required, but an additional option of 'Unknown' will be made available.
  
*   **View Template:** The power of [Lava](https://community.rockrms.com/Lava) is at your disposal. With this block setting you can use a Lava template to control the view mode of the page.

These are only some of the options. Again, we strongly encourage you to review all the settings for this block to ensure it's meeting your needs.

[](#photorequests)Photo Requests
================================

Rock is about fostering relationships. Nothing helps this more than having photos in the system. In the past, keeping up with photos was a complex and time draining task. No longer! Rock makes it easy to populate photos into the database by asking individuals to upload a photo from an emailed request. Let's take a look at how it works.

Photo Request Process

![Photo Request Process](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/photo-request-process-v14.png)

1 Request

Staff sends out a photo request. This request, as we'll learn soon, can be an individual request to a single person or a bulk request.

2 Sent

An email is sent to the individual asking them to upload a photo.

3 Photo Uploaded

Once they click the link in the email, they'll be taken to a page where they can quickly upload a photo.

4 Verify

Once the photo is uploaded, it's added to a list for a staff person to verify.

[](#photoupload)Photo Upload
============================

When the individual clicks the upload link in their email, they'll be taken to the page pictured below. This page is under External Homepage > Support Pages > Photo Upload but it isn't linked into the website, so you'll have to get there from Admin Tools > CMS Configuration > Pages.

Photo Upload Page

![Photo Upload](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/photo-upload-v14.png)

The link they use to get to this page has an embedded security token that allows them to upload their photo without having to log in.

The block on this page has a couple of settings you can use to alter its behavior. These settings include:

*   **Include Family Members:** This setting will allow the individual to upload photos for their whole family from their link. The default value for this setting is true.
  
*   **Allow Staff:** This setting allows staff members to change their own photos. Some organizations may not want staff to update their photos as they have standard staff photos they'd like to keep consistent. The default value for this setting is false.

[](#bulkrequests)Bulk Requests
==============================

The easiest way to get a large number of photos into the system is to use the bulk photo request option. You can make these requests under Admin Tools > Communications > Send Photo Requests.

This screen allows you to send an email to a selected list of people asking them to provide a photo for the system.

Photo Request Send

![Photo Request Send](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/photo-request-send-v13.png)

1 Family Roles

Indicate if requests should go out for adults, children or everyone.

2 Age is more than

If you allow requests to be sent to children, you can provide a minimum age.

3 Connection Status

Select the _Connection Statuses_ you'd like to use as a filter. If none are selected, then the request will go to individuals with any status.

4 Exclude

It's not helpful to request a photo from someone who already has one in the system. This feature allows you to exclude those who have a photo newer than a set number of years.

5 Test

It's often a good idea to send yourself a test email to see what the recipients will be sent.

6 Send

When you're ready, click Send.

After clicking Send, the individuals will receive an emailed request to upload their photos. The contents of this email can be modified under:  
Admin Tools > Communications > Communication Templates > Photo Request Template.

Tip to Limit Abuse
==================

To help minimize the potential abuse of this feature by staff, there's a block setting that limits the number of photo requests that can be sent without approval. The default is 300. Feel free to change this number to suit your needs. The block uses the same approval process as bulk email.

But There's More
----------------

Using the bulk photo request screen above is a great way to send out mass requests for photos. You can also send this same email to a list of people using the _Photo Request_ communications template. Let's say you have a report that lists people for an upcoming event, and you'd like to get their photos before the event. By clicking the button in the grid's footer you'll be taken to the _New Communications_ page. Click the _Use Simple Editor_ button near the top right of the block, then select the _Photo Request Template_ from the Template dropdown and you're off to the races!

See our [Communicating With Rock](https://community.rockrms.com/documentation/bookcontent/8/) guide for more information.

[](#individualrequests)Individual Requests
==========================================

Bulk requests can help you populate your database with a large number of photos, but sometimes a personal request is needed. From an individual's _Person Profile_ page, you can quickly request a photo under:  
Actions > Photo Request.  
This will launch a short workflow entry screen that allows you to type in a personal message to the recipient. Rock will add some instructions and links to your email to enable the upload process.

[](#verifyingphotos)Verifying Photos
====================================

While it's highly unlikely, it's possible that someone could upload an inappropriate image. To help filter these out, Rock has a photo verification process. When a person uploads a photo, it's immediately available for viewing. At the same time, it's also added to a list to be manually verified. This list can be found under:  
Tools > Data Integrity > Photo Requests > Verify Photos.

Verify Photos

![Verify Photo](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/photo-verify-v13.png)

1 **Show Verified Photos**

By default, this screen only shows photos that need to be verified. Checking this box will show all photos, even those that have already been verified.

2 **Select All**

Checking this box will select all the records visible on the list.

3 **Photo Records**

Photos that have been submitted are listed here, along with details of the person.

4 **Status**

You can check the current status of the photo.

5 **Verify**

After selecting photos to verify, you must click Verify.

[](#photooptout)Photo Opt-Out
=============================

When an individual asks to be opted out of receiving future requests for photos, they are sent to the opt-out page which is located under:  
External Homepage > Support Pages > Photo Opt-Out

They are also added to an application group called _Photo Request_ with a member status of _Inactive_. You can view and manage this list under:  
Tools > Data Integrity > Photo Requests > Photo Request Application Group

To remove someone from the opt-out list, simply remove them from this group.

[](#following)Following
=======================

For most organizations, the database of individuals in Rock will far exceed the number of people a specific staff person will know. Without tools to help filter relationships, personalizing touch points would be impossible. Rock's _Following_ features help filter these relationships so that an individual can be made aware when life events occur with people they know.

[](#followinganindividual)Following an Individual
=================================================

The first step is to identify people you know. You can do this by clicking the _Follow_ button below an individual's photo on their _Person Profile_ page.

Following An Individual

![Following An Individual](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/following-status-v14.png)

[](#bulkfollowing)Bulk Following
================================

Don't forget our friend, the bulk update tool. Bulk updates also allow you to add or remove a list of individuals from your following list.

Following Bulk Update

![Following Bulk Update](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/following-bulk-update-v13.png)

[](#viewingthoseyoufollow)Viewing Those You Follow
==================================================

You can view a complete list of the people you follow under Login Status > My Settings > Following (the login status can be found in the top-right corner of the page). From this list you can manage the people you follow and remove any that may have been accidentally added.

Viewing Followers

![Following List](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/following-list-v13.png)

Just the Beginning
==================

Rock's _Following_ feature is just a start. Look for lots of new capabilities in upcoming releases. We're providing the basics for now to help you start building your following lists.

[](#engagingfollowing)Engaging Following
========================================

OK, now that you’re following people, let's use this data to build better connections. Following a person means you have a special interest in that person; that you care about what's going on in their lives. So, wouldn't it make sense that you'd want to know when it's their birthday or wedding anniversary, when they're joining a group or better yet that they were recently baptized? Rock makes this a snap!

You can configure what types of notification events you're interested in under My Settings > Following Settings (found under the login status in the upper-right corner). Here you can see a list of all the events you can be notified of.

Following Event Settings

![Following Event Settings](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/following-personalevents-v13.png)

Every day, Rock will determine if anyone on your following list has the configured notification events and will send you a personalized email of the results.

Following Event Email

![Following Event Email](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/following-eventemail.png)

Rock Administrators can even set up new types of events that will be displayed here. But more on that in a minute.

[](#configuringfollowingevents)Configuring Following Events
===========================================================

Rock ships with several following events, but it's easy to set up additional ones yourself. You can manage these events under Admin Tools > System Settings > Following Events.

Following Event Type List

![Following Event Type List](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/following-eventlist-v13.png)

As pictured in the screenshot above, you can apply security to Following Events by clicking the icon. The Following Settings block (see prior section above) will only allow subscribing to following events if the person has been granted 'View' access to that following event. If someone was subscribed to a following event that they no longer have access to view, when the following event notification is sent that event won't be included.

Person Note Added and Joined Group Type Security
================================================

Because the security of Notes and groups can't be checked when following events are being determined, each sensitive Following Event should be secured to match its related security configuration. For instance, if you have restrictions on who can view Pastoral Notes, then those same restrictions should be applied to the corresponding Following Event.

To add a new event, click the from the top or bottom of the grid.

Following Event Configuration

![Following Event Configuration](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/following-eventconfig-v13.png)

1 Name

Provide the name of the event. This will also be used for the title on the email so it's best to use a plural form of the word like _Birthdays_.

2 Active

Indicate whether the event is currently active.

3 Description

Provide a brief description of the event.

4 Event Type

Indicate the type of event you're configuring. Choose from the following options:

*   Person Note Added
*   Person Anniversary
*   Person Prayer Request
*   Person Baptized
*   Person Birthday
*   Person First Attended Group Type
*   Person First Joined Group Type
*   Person History

_Person History_ is an advanced tool that can be configured to provide powerful following recommendations. To learn more about this option, see the [Person History Following Event](#personhistoryfollowingevent) section.

5 Notice Required

We’ve already seen how people can choose which events to receive notifications for by changing their Following Settings. The “Notice Required” option means that individuals will always receive notifications for this event and cannot opt out from their Following Settings. Sometimes they should be given the option; other times you know what's best for them.

6 Send Weekend Notices on Friday

No one wants their birthday to be missed because it's the weekend. This setting allows you to send notifications for events that will occur over the weekend on the Friday before.

7 Notification Format

This is the Lava that will be merged into the email for each event. You'll probably want to copy/paste this from one of the standard events but feel free to modify it to meet your needs.

Each event type has additional settings you'll want to configure. For instance, the _Person Baptized_ event type lets you configure an _Anniversary Count_ that you can use to commemorate the person's baptism. The _Person Prayer Request_ event type also has an option to include non-public requests in the notification. Be sure to review the settings for each event type to maximize its usefulness.

Never Forget A Birthday
=======================

Following events are great for a personal touch but if you want to have a fool-proof way of sending your best wishes to every person on their birthday then you may want to consider configuring a job to send an email to each person celebrating their birthday. Read more about how to do so in the [Rock Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9#jobs).  
  
You might also consider setting up a [Reminder](#reminders).

[](#personhistoryfollowingevent)Person History Following Event
==============================================================

The _Person History_ following event is an advanced setting that gives you the option of being notified when there are changes to a person's history, such as a change in their membership or marital status. As with other following event types, you can configure any number of specific events which people can subscribe to and receive notifications for. Let's look at how to set up the _Person History_ following event option.

Following Event Configuration

![Following Event Configuration](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/person-history-following-event-v13.png)

1 Name

Provide the name of the event. This will also be used for the title on the email so it’s best to use a plural form of the word (e.g., _Birthdays_ instead of _Birthday_).

2 Description

Provide a brief description of the event.

3 Event Type

Indicate the type of event you're configuring. In this case, _Person History_.

4 Notice Required

This setting defines whether the follower gets to choose if they will receive this event. Sometimes they should be given the option; other times you know what's best for them.

5 Send Weekend Notices on Friday

This setting allows you to notify people of events that will occur over the weekend on the Friday before.

6 Active

Indicate whether the event is currently active.

7 Fields

This is where you specify which fields in the history data to monitor. Separate multiple items by a comma. Keep in mind that when viewing the fields in a person's history data, status changes are formatted as: 'Modified FIELD value from OLD to NEW'.

8 Max Days Back

Indicate the maximum number of days back to look at a person's history.

9 Negate Person

Use this setting when you want to trigger events only when it is NOT the specified person making the change. This sets the _Changed By_ person match to NOT a person.

10 Person

This allows you to filter by the person who changed the value. This is always an AND condition with the two value changes. If the _Negate Changed By_ option is also set, this becomes an AND NOT condition.

11 Matches Both

If enabled, requires a match on both the Old Value and the New Value. This equates to an AND comparison, otherwise it equates to an OR comparison on the values.

12 Old Value

This is the value to be matched as the old value. Leave this blank to match any old value.

13 New Value

This is the value to be matched as the new value. Leave this blank to match any new value.

14 Notification Format

This is the Lava that will be merged into the email for each event. You'll probably want to copy/paste this from one of the standard events, but feel free to modify it to meet your needs.

Let's look at an example of why and how you might use the _Person History_ following event option.

Say you have a care ministry that helps people who are recently widowed. You can use the _Person History_ following event to make sure those working in that care ministry are alerted when a person's marital status changes from 'Married' to 'Widowed'.

To track this change, you would create a new Following Event set with the basic information: Name, Description, Event Type (Person History) and Notification Format. Then you'd set the following options to capture the change in marital status:

*   Fields = Marital Status
*   Match Both = Yes
*   Old Value = (blank)
*   New Value = Widowed

These settings will cause a notification to be sent whenever a person's _Marital Status_ field changes from any value to 'Widowed'.

This is just one of many uses for the _Person History_ following event. You can see what a powerful and useful tool it can be.

[](#followingsuggestions)Following Suggestions
==============================================

Knowing who to follow can turn into a full-time job if you let it. But why? Rock can do the work for you. Administrators can set up suggestion criteria under Admin Tools > System Settings > Following Suggestions.

Following Suggestion Type List

![Following Suggestion Type List](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/following-suggestionlist-v13.png)

Rock ships with two suggestion types: _In Group Together_ and _In Followed Group_. You can see how these types can be used in several different ways. You can even add your own suggestion types with a little bit of light development.

To add a new following suggestion, click the button at the top or bottom of the grid. This will bring up the page pictured below.

Following Suggestion Configuration

![Following Suggestion Configuration](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/following-suggestionconfig-v13.png)

1 Name

This describes the suggestion and will be used as the title in the daily suggestion email that’s sent out.

2 Active

The suggestion must be Active in order to be used.

3 Description

A brief description of the suggestion can help clarify its purpose or intent.

4 Suggestion Type

Select the type of suggestion that’s being configured. As noted above, two suggestion types are shipped with Rock.

5 Reason Note

A brief message that's shown to the individual, describing why the person is being suggested to them.

6 Reminded Days

The number of days to wait before notifying the person of this suggestion again if they haven't followed the suggestion. Leave it blank if the person should never be reminded.

7 Auto-Follow

This setting will turn the following 'suggestion' into a ‘requirement’ for following. In other words, the person won’t be given the option to follow the individual, it will automatically follow when a new person is added to the group.

8 Suggestion Type Settings

Note that each suggestion type will have its own setup options. The sample pictured above shows the _In Group Together_ settings. The next section below is a guide to what these settings mean.

9 Notification Format

This is the Lava that will be merged into the email for each person being suggested. You'll probably want to copy/paste this from one of the standard suggestions but feel free to modify it to meet your needs.

In Group Together and In Followed Group Settings
------------------------------------------------

The settings below are available to the _In Group Together_ and _In Followed Group_ suggestion types.

*   **Group Type:** The group type that's used.
  
*   **Group:** The optional group that the person must belong to for the suggestion. Make sure to pick a group of the same type that was selected above.
  
*   **Security Role:** This is similar to the group limiter above, but for a specific security role.
  
*   **Follower Settings:** Next, we can limit who the follower role will be. To do this we need to provide both the group type and role (we must provide the group type again as this helps to limit the roles that will be displayed in the role dropdown).
  
*   **Following Settings:** Lastly, we can limit who will be suggested according to a security role. Only individuals assigned the role provided here will be suggested. Again, we must provide both the group type and the role.

Reducing the Confusion
======================

The settings above can be a bit confusing. If you're feeling overwhelmed, looking at the settings for the suggestions that ship with Rock can help reduce this confusion.

[](#strategiesforblendedfamilies)Strategies for Blended Families
================================================================

Families come in all shapes and sizes. Managing the complexities of relationships, whether in real life or a database, can be complicated. Luckily, Rock is very flexible. Below we discuss some of the options for entering blended families.

[](#dualfamilyapproach)Dual Family Approach
===========================================

When parents have dual custody and both parents are involved with your organization, you may wish to use the dual family approach. In our example below Ben and Sarah Jones divorced a couple of years ago. Both have joint custody of their son Brian. Sarah went on to marry Jim Simmons. This is one way to set up these two families.

Dual Family Approach to Blended Families

![Dual Family Approach to Blended Families](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/blended-dual-family.png)

In this example Brian, the child, is in both families. He is still one record in the database, but he is a member of both families. This approach has some details you should know about.

*   In reporting, Brian will be listed as a single record. However, if your reports list families, this pattern will add two families to the results.
*   Brian can be checked in using either family’s contact information.
*   Mailings will be sent to both home addresses.
*   A report showing the parents of Brian will include Ben Jones as well as Jim and Sarah Simmons. Each family will be listed as separate rows on the report.

[](#singlefamilywithrelationshipsapproach)Single Family with Relationships Approach
===================================================================================

In the single-family approach the children of blended families are only connected to a single family and relationships are used to link them to other individuals (e.g., for check-in).

Single Family Approach to Blended Families

![Single Family Approach to Blended Families](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/blended-single-family.png)

This approach may be preferable in cases where one parent has sole custody or if the other family doesn't participate in your organization. In this approach, reporting and most other features act just like a typical family. Check-in can be allowed by other individuals using the relationship of _Can Check-in_.

What About Foster Families?
===========================

Rock's flexibility also comes in handy when adding foster families. The best approach is to add the children to the family, and then create a [new Known Relationship type](#creatinganewrelationshiptype) that designates them as fosters.

[](#reminders)Reminders
=======================

Reminders are for those things we always want to do, but often forget. We truly intend to follow up with people or write them a card or send them an email, but then life happens and these things get pushed to the back of our minds where they're eventually forgotten. It happens to all of us. But with _Reminders_, staying organized and on top of all your commitments has never been easier.

By setting up reminders for key events and tasks, you'll never miss an opportunity to make a positive impact on those around you. For instance, by reminding yourself to check in with someone regularly, you're demonstrating that you value relationships. Whether you're a busy volunteer or a church leader, reminders are the perfect tool to help you stay organized and build deeper connections.

[](#viewingreminders)Viewing Reminders
======================================

To start, you can access your reminders from any page in Rock by clicking the icon in the header. This is also where you'll add new reminders, but we'll get to that later.

Current Reminder Alert

![Current Reminder Alert](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/reminders-header-alert-icon-v15.png)

From there you can choose to _View Reminders_ and see a filterable list of your reminders.

Reminders can be in different states. For instance, you either still need to be reminded (_Active_) or you've already been reminded and taken action (_Complete_). _Active_ reminders can be _Due_ or _Not Due_. This is determined by the _Reminder Date_ you select when creating the reminder, which we'll look at shortly.

*   **Active:** If a reminder is Active, it means you haven't been reminded yet or you haven't taken action on it yet
*   **Complete:** A reminder is Complete if you've already been reminded and taken action
*   **Due:** This means that it's time to take action on the reminder, and that you've been reminded via communication or workflow
*   **Not Due:** These are Active reminders that have _Reminder Dates_ in the future

Reminder List

![Reminder List](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/reminders-view-reminder-list-v15.png)

In the screenshot above we see three reminders. All of them are both _Active_ and _Due_, which we can tell from the filter selections near the top of the block. These are reminders on which you want to focus and take action. With filters like this you won't see _Not Due_ reminders, so your screen isn't cluttered with every reminder due in the future.

You can change the filters to see items that aren't due yet. After you've been reminded and have done what you need to do, you'll _Complete_ the reminder, taking it off your list.

[](#addingreminders)Adding Reminders
====================================

There are two ways to add reminders. You can add a reminder manually from pages with [context](https://community.rockrms.com/documentation/bookcontent/14#usingcontext), or you can add a reminder in an automated way using a workflow action. We'll look at each method below.

Adding Reminders Manually
-------------------------

You can view your current reminders from anywhere in Rock by clicking the icon. This is also where you'll go to add new reminders. You can add reminders from just about anywhere, all you need is a reminder type and a page with context.

To add a new reminder for an entity you need to be on a page that has [context](https://community.rockrms.com/documentation/bookcontent/14#usingcontext) for that entity. There will also need to be a corresponding reminder type for the entity. For instance, a reminder of type "Hospital Visit" has an entity type of _Person_, so you can add that reminder from the _Person Profile_ page. Similarly, you can add group reminders from the _Group Viewer_ page when you have a group selected.

Add New Reminder

![Add New Reminder](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/reminders-add-new-reminder-v15.png)

1 Existing Reminders

If you have any reminders for the item (e.g., person, group) you're looking at, Rock will let you know at the top of the screen. This gives you some context but also helps avoid duplicate reminders.

2 Update Existing Reminders

If you click the three dots to the right of the existing reminder you can choose to mark it as complete, edit it or delete it.

3 Reminder Date

This is where you'll select the date on which you want to be reminded. When this date hits, the communication or workflow configured for the reminder type will be processed. It is based on this date that the reminder is either _Due_ (the date has arrived or passed) or _Not Due_ (the date is in the future). You can also filter your reminders by date when viewing your reminders list.

4 Note

You can provide an optional note, to help specify why this specific reminder is being placed on the entity.

5 Reminder Type

As described in the prior section, the reminder type controls things like which notification settings (communication or workflow) the reminder will use when the reminder date arrives. You'll want to choose the reminder type most applicable to the reminder you're adding.

6 Assign Reminder To

By default, the reminder is assigned to yourself, but it can be assigned to other people. You won't be able to see the reminder after it's created if you assign it to someone else.

7 Repeat Settings

These repeat settings allow you to have the reminder repeat itself. For instance, you can set it to repeat every seven days with nothing in the _Number of Times to Repeat_ field to have a weekly reminder that repeats indefinitely. Just remember that the clock starts ticking only after you've _Completed_ the current reminder. So, if a weekly reminder was due on 3/7 and you completed it on 3/10 then the next reminder would be due on 3/17.

Adding Reminders via Workflow
-----------------------------

Reminders can be added in an automated way using workflows. There's a workflow action type dedicated to this. You can find information about this action in our [Workflow Actions](https://community.rockrms.com/WorkflowActionCategory?Category=8#reminderadd) documentation.

Workflow Action

![Workflow Action](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/reminders-workflow-action-v15.png)

[](#remindertypes)Reminder Types
================================

Reminder types help group, secure and organize individual reminders. Each reminder type is associated with an entity in Rock, so you can have reminders for just about anything. There are a few examples in the screenshot below to help get you thinking about what reminder types you might configure. To configure reminder types, navigate to Admin Tools > General Settings > Reminder Types.

Reminder Type List

![Reminder Type List](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/reminders-reminder-type-list-v15.png)

You have many options for setting up reminder types. For instance, do you want to receive a communication when the reminder becomes _Due_, or should a workflow launch and do something for you? Remember, you can set up reminder types for any entity type. All you need to make a reminder is a reminder type and a page with [context](https://community.rockrms.com/documentation/bookcontent/14#usingcontext).

Edit Reminder Type

![Edit Reminder Type](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/reminders-edit-reminder-type-v15.png)

1 Name and Description

It's helpful to give your reminder types a meaningful name and clarifying description, especially as your list of reminder types grows.

2 Notification Type

You can choose to be notified (i.e., reminded) by receiving a communication, or via a workflow. We'll talk more about [Notification Types](#notificationtypes) below.

3 Notification Workflow

This is where you select the workflow to launch when it's time to be reminded. This is optional unless you selected "Workflow" as your _Notification Type_

4 Should Show Note

This controls whether the note associated with the reminder should be included in the reminder email system communication. We'll talk more about this below.

5 Entity Type

This is where you decide if the reminders are going to be for people, groups, campuses or any other entity. You might have multiple reminder types with similar names and purposes for different entities.

6 Should Auto-Complete When Notified

The reminder will stay active after you've been notified unless this is checked. You might select this if all you need is to be notified.

Every reminder you create will be of one of the types you configure as described above. You can create as many as you need, and you can assign security to each one if it's only available for certain roles or individuals. In the next section, we'll see how these reminder types get used to create reminders.

[](#notificationtypes)Notification Types
========================================

You can be notified in one of two ways when a reminder's date arrives. You can be sent an email, or you could launch a workflow that performs certain actions and then perhaps notifies you in a different way. We'll look at both of these methods below.

Communication
-------------

If you choose a _Notification Type_ of Communication when configuring your reminder type, the person assigned to the reminder will receive a system communication when the reminder date arrives. The template for this communication can be found under Admin Tools > Communications > System Communications and is called _Reminder Notification_.

System Communication

![System Communication](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/reminders-system-communication-v15.png)

If you want to use a different system communication than the one provided, you can change which one is used by updating the _Process Reminders_ job configuration. We'll talk more about that below.

Workflow
--------

You can choose to have the reminder launch a workflow instead of sending you a communication. Of course, you can configure the workflow to send you a communication. When the reminder date arrives for a reminder configured to launch a workflow, the workflow will launch and will be passed the following items if the workflow has matching keys:

1.  Reminder
2.  ReminderType
3.  Person
4.  EntityType
5.  Entity

Workflow Attributes

![Workflow Attributes](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/reminders-workflow-attributes-v15.png)

[](#processreminderssystemjob)Process Reminders System Job
==========================================================

The _Process Reminders_ job is what will trigger the communication or workflow that's configured for your reminder type. Depending on the configuration of your reminder type, the job will also mark reminders complete after their notification has been processed. Lastly, the job will recalculate the active reminder count shown near the icon in page headers.

Process Reminders Job

![Process Reminders Job](https://rockrms.blob.core.windows.net/documentation/Books/5/1.15.0/images/reminders-process-reminders-job-v15.png)

1 Job Type

You'll want to ensure this is set to _Process Reminders_. Rock ships with a Process Reminders job configured for you out of the box, so it's unlikely you'll need to change this.

2 Reminder Types Include

You might only want to include certain Reminder Types in this job. This lets you set up different jobs to process different reminders. By default, all Reminder Types are included.

3 Reminder Types Exclude

This is similar to the above setting but excludes Reminder Types rather than includes them. By default, no Reminder Types are excluded.

4 Reminder Notification

Rock ships with the _Reminder Notification_ System Communication, which is configured for use by this job.

5 Max Reminders Per Entity Type

You don't want people to be overwhelmed with an excessively long list of reminders in an email. This setting helps you limit how many reminders the communication contains, by entity type. Rock ships with this set to 20, which means you could have an email containing 20 reminders for People and 20 reminders for Groups.