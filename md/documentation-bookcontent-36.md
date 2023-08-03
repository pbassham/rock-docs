# 
from:documentation-bookcontent-36.html

#### Updates for McKinley 15.0

No updates made.

#### Updates for McKinley 8.0

No updates made.

#### Updates for McKinley 9.0

No updates made.

#### Updates for McKinley 10.0

Below is a summary of the updates for this version.

*   Added new chapter Using Wi-Fi Presence for Service Attendance
*   Updated Captive Portal block settings

#### Updates for McKinley 11.0

No updates made.

#### Updates for McKinley 12.0

No updates made.

#### Updates for McKinley 13.0

No updates made.

#### Updates for McKinley 14.0

No updates made.

[![Frontporch Advertisement](/GetImage.ashx?Id=22369)](http://www.frontporch.com/ "Frontporch")

[](#welcome)Welcome
===================

They say knowing is half the battle. For organizations, keeping track of individual engagement is critical, especially when it comes to knowing when an individual is physically present at a particular campus or site. We may have to infer what their presence at that site means—are they visiting the coffee shop or engaging in an event?—but the fact they’re there means something in terms of engagement. Rock’s Wi-Fi Presence, powered by Front Porch, is a powerful tool in helping determine who is on site. Let’s take a look at how it works.

Front Porch Account
===================

You'll need to have a Front Porch account set up in order to use Wi-Fi Presence.

[](#solutionwalkthrough)Solution Walkthrough
============================================

Let’s look at how we’re able to discover user devices and, most importantly, tie them to a person in your Rock database.

Wi-Fi Presence Walkthrough

![Wi-Fi Presence Walkthrough](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/wi-fi-presence-walkthrough.svg)

1

The whole process begins when an individual first connects to your organization’s Wi-Fi. When this happens, the Wi-Fi controller uses a feature called Captive Portal (sounds like a fun place, right?) to determine who’s approved to be on the network. The good news is you get to decide who is approved. The Captive Portal process opens a web browser on the individual’s phone, which takes them to a page you configure on your Rock website (just like you experience when using airport Wi-Fi). You’ll configure this page to use the _Wi-Fi Welcome_ block. This block does a few things:

*   Helps gather information about the individual. (This is very configurable. More on that in the [Customizing Your Captive Portal](#customizingyourcaptiveportal) chapter below.)
*   Sets a cookie (a hidden bit of data) on the individual’s phone, which provides a unique identifier for their device (aka, MAC address).
*   Redirects the user to the next screen when ready.

2

Once the individual accepts the agreement, they are redirected to the Front Porch Cloud service. They’ll never see anything from Front Porch, but it’s doing some important tasks that we’ll look at next.

3

Front Porch makes a call back to the organization’s Wi-Fi controller to grant access to the individual’s device.

4

Front Porch then transparently redirects the individual to a _Success_ page on your Rock server. The individual will think they went right from the _Captive Portal_ page to the _Success_ page. They won’t notice any of the redirecting. The _Success_ page is a great place to be creative with a custom (and perhaps personalized) welcome to the network. This is also where your organization could put some ‘content of value’, such as upcoming announcements. If for some reason an error occurs, the individual will be taken to the captive portal page.

5

Finally, Front Porch consistently passes information to your Rock server about every device it sees on the network. It passes in the data using each device’s unique identifier (the same as used at the beginning of the process, above).

[](#customizingyourcaptiveportal)Customizing Your Captive Portal
================================================================

Rock ships with sample _Captive Portal_ pages configured out of the box. You can find them under Admin Tools > CMS Configuration > Pages. These are provided as samples, but feel free to use them as your default pages.

If you asked ten people how a Captive Portal should be configured, you’d get ten different answers. Luckily, you should be able to meet each of these goals with the settings available in Rock. For the purpose of discussion, we’ll start with the most heavy-handed approach and work our way down to more permissive configurations.

[](#requiredlogin)Required Login
================================

By adding security to require a login you can, in effect, ensure that you know every individual who is connecting to your network. You could also choose to enable social media authentication, which provides additional information about them. You would still need the _Wi-Fi Welcome_ block to set the MAC address and redirect to the Front Porch service, but all of this would be behind a login.

[](#captiveportalregistration)Captive Portal Registration
=========================================================

The next approach is to use Rock’s _Wi-Fi Welcome_ block right out of the box. With the default settings, this block looks like the figure below.

Captive Portal Block

![Captive Portal Block](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/captive-portal-block-v14.png)

As with all Rock blocks, the styling is totally in your hands and there are a ton of block settings to configure this to your heart’s content. Let’s take a look at each of them.

Captive Portal Block Settings

![Captive Portal Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/captive-portal-block-settings-v13.png)

1 Name

You can edit the name of the block here.

2 MAC Address Parameter

This is the query string parameter that contains the MAC address. You can change this based on the value that your Wi-Fi controller uses to pass in the address.

3 Release Link

This is the URL that the person will be redirected to when they’ve completed the registration. This URL will be provided by Front Porch.

4 Show Name

Determines if the first and last name fields should be shown.

5 Show Mobile Phone

Determines if the mobile phone number field should be shown.

6 Show Email

Determines if the email field should be shown.

7 Show Acceptance Checkbox

Determines if the acceptance checkbox needs to be shown or if pressing the button is enough to prove acceptance.

8 Acceptance Checkbox Label

The text that is displayed next to the acceptance checkbox. You may wish to change this depending on your legal counsel.

9 Button Text

The text to display on the button. You may wish to change this depending on your legal counsel.

10 Show Legal Note

Determines if the legal iframe should be shown.

11 New Person Record Status

Select the record status that should be applied when Captive Portal creates a new person.

12 New Person Connection Status

Set the Connection Status that will be assigned to a new person record created by the Captive Portal.

13 Legal Note

The legal note text. Be sure to run this by your legal counsel for input. The provided sample is just that, a sample.

Important
=========

Be sure to run all configuration and text past your legal counsel to ensure they meet the current best practices.

[](#transparentregistration)Transparent Registration
====================================================

Some may prefer not to have any registration at all. When no fields are set to be shown on the _Captive Portal_ block, the individual will be redirected immediately after reaching the page. It’s still critical that the _Captive Portal_ block be used to set the unique device cookie. The user experience in this case will be that the individual is taken straight to the _Success_ screen. Again, be sure to use the _Success_ screen to provide a nice welcome and some additional ‘content of value’.

[](#wifipresencerestkey)Wi-Fi Presence REST Key
===============================================

The Wi-Fi Presence REST key is located with the other REST keys at Admin Tools > Security > REST Keys. You can use the key that is automatically created, or you can add a new one.

Wi-Fi Presence REST Key

![Wi-Fi Presence REST Key](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/wi-fi-presence-rest-key-v13.png)

Once that is done, you'll need to give that new user rights to the API Endpoint.

Navigate to Admin Tools > Security > REST Controllers.

Presence REST Controller Security

![Presence REST Controller Security](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/rest-controller-presence-security-v13.png)

1 Presence Controller

Scroll to the Presence controller in the list of REST controllers.

2 Security settings

Click the padlock icon button to open the security settings for the Presence REST controller.

3 Add User

On each of the available tabs (View, Edit, and Administrate), you will need to click "Add User" and search for your REST Key's name. In this example, we called the key "Presence" so the person picker should find a record called "Presence Presence". Be sure the permissions are set to "Allow" on all three tabs, then click Done.

[](#linkingindividualstodevices)Linking Individuals to Devices
==============================================================

At this point you might be thinking, “I see how we now know about the device, but how do we link that device to a specific individual?” Great question! If the person is already logged in, or is forced to log in, when visiting the _Captive Portal_ block, we’ll create a new Personal Device and tie them to it. If we don’t know who they are, we’ll still create the Personal Device but will leave the owner blank. We’ll also add the ‘rock-Wi-Fi’ cookie with their device's unique identifier (MAC address). This cookie will stick with the device and will be available every time they visit your website on their device.

The key then is to get them to log in to your website from their device. That may take some time, but you can help them along. To do that, you might occasionally send out a bulk SMS message to your individuals providing them with some relevant (and do make it relevant) content on your site. When you provide the link, you can also include a login token that will automatically log them in (even if they don’t have an account).

Creating the Lava for your SMS message to do this can be a little tricky, so here’s an example.

```
Hey {{ Person.NickName }}, here’s a video from Pastor Pete with some news you’ll want to know.
http://rocksolidchurchdemo.com/greatcontent?rckipid={{ Person | PersonTokenCreate }}

```

When the individual opens the link, they will see the content and also be linked to the personal devices that match the device identifier in their cookie. If that device wasn’t tied to a specific individual, we’ll also go back and link all previous Presence Interactions to this individual.

[](#personalpresencedetails)Personal Presence Details
=====================================================

Once you get people linked to devices, you’ll want to enable the viewing of this information. The best place to start is to enable the Personal Devices badge on the _Person Profile_ page. This badge has already been configured for you, so all you need to do is activate it.

To activate the badge, from the _Person Profile_ page click the button in the _Admin Toolbar_. This will display a block properties button for each block on a page. Hover over the badge container block and select its button. Finally, check the badge you wish to add to the container and press Save.

Personal Devices Badge

![Personal Devices Badge](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/personal-devices-badge-v14.png)

Clicking on this badge will take you to a screen where you can view all of the devices linked to the individual.

Personal Device List

![Personal Device List](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/personal-device-list-v13.png)

Clicking the Interactions button for a specific device will list all the visits this device has made to your organization’s Wi-Fi network.

Interaction List

![Interaction List](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/personal-device-interactions-v13.png)

[](#presenceinteractions)Presence Interactions
==============================================

As noted in the [first figure](#solutionwalkthrough), Front Porch will consistently be notifying your Rock server about devices that are on your network. Each time it does this, the data will be written to a new Interaction record. You can find these records in Rock under Tools > Interactions > WiFi Presence. Here you’ll see an Interaction Component for each Space you configured in Front Porch. Clicking on a component allows you to see a listing of all the interactions for that space.

Wi-Fi Interactions

![Wi-Fi Interactions](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/wi-fi-presence-channel-details-v13.png)

[](#morepresenceoptions)More Presence Options
=============================================

We’ve now seen how to view presence information for an individual for an entire network. There’s a couple of other options for you to consider.

[](#personaldeviceinteractionblock)Personal Device Interaction Block
====================================================================

You might remember the _Personal Device Interactions_ block linked from the Personal Devices badge. Turns out you can use this same block to view details from the entire network. Just add the _Personal Device Interactions_ block to a page and it will list all of the interactions at a network level. You can also filter by date range and even those interactions that are currently present.

Personal Device Interaction Block

![Personal Device Interaction Block](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/personal-device-interaction-block-v13.png)

[](#usingwifipresenceforserviceattendance)Using Wi-Fi Presence for Service Attendance
=====================================================================================

Service attendance can be imported into Rock via Wi-Fi Presence. By configuring service times, Wi-Fi Presence can identify devices within certain locations during those times.

First, be sure to have your schedules created. You can manage schedules from Admin Tools > Check-in > Schedules by adding new schedules or modifying existing ones. If already complete, skip this step and head over to Check-in Configuration area.

Manage Check-in Schedule

![Manage Check-in Schedule](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/manage-check-in-schedule-v13.png)

\* Edit Schedule

Clicking the Edit Schedule button will open the _Schedule Builder_ window.

The _Schedule Builder_ window pictured below is where you can create or edit the meeting pattern that will be used.

Edit Schedule Builder

![Edit Schedule Builder](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/edit-schedule-builder.png)

The result will be the schedule as it appears pictured below:

Viewing Schedule Details

![Viewing Schedule Details](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/viewing-schedule-details-v13.png)

With your schedules established, you're ready to set up check-in configuration for service attendance. It's ready out of the box, but you’ll need to configure it for your organization. You’ll start by going to Admin Tools > Check-in > Check-in Configuration and click on _Service Attendance_ (with the icon).

Service Attendance Check-in Configuration

![Service Attendance Check-in Configuration](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/service-attendance-check-in-configuration-v13.png)

Next, we’ll look at the schedule builder by clicking the Schedule button.

In the example pictured below, the schedules associated with the “Service Times” category are displayed, so the list here matches “Service Times” list we set up earlier. For this example, we’ll select all the available times.

Check-in Configuration Schedule Builder

![Check-in Configuration Schedule Builder](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/check-in-configuration-schedule-builder-v13.png)

Check the URL for the schedule builder page (pictured above) in your browser. You should see something similar to `https://yourrockurl/page/202?groupTypeId=34`. Make note of the number that comes after `groupTypeId=`. If you see `groupTypeId=34` then you can proceed to the Front Porch configuration described below. However, if you see a number other than “34” then the GUID for this groupTypeId will need to be identified. To find the GUID, navigate to Admin Tools > Power Tools > SQL Command and type the following query into the _SQL Text_ area. Replace `your groupTypeId` with the number found in your URL.

```
SELECT 
    \[Id\]
    ,\[Name\]
    ,\[Guid\]  
FROM 
    \[dbo\].\[GroupType\]
WHERE 
    \[Id\] = 'your groupTypeId'


```

Copy the resulting GUID value from the query above to use in the Front Porch configuration pictured below.

Return to the Wi-Fi Presence configuration on the Front Porch site and scroll down the configuration page to the RockRMS section. Expand the section to show the available fields.

If your groupTypeID is “34” as described above, then enter `77713830‐ae5e‐4b1a‐94fa‐e145dff85035` into the _RockRMS Attendance GUID for Schedule Builder Group_ field as pictured below. If your groupTypeID is not “34” then enter the GUID obtained from the SQL above.

Also, confirm that the _Send Attendance Data To RockRMS_ box is checked. This is needed in order to send the individual attendance records to Rock.

Front Porch Wi-Fi Presence Configuration

![Front Porch Wi-Fi Presence Configuration](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/front-porch-wifi-presence-configuration.png)

The services are listed in Front Porch (pictured below) according to the schedules and selections made in the prior screenshots above.

Front Porch Wi-Fi Presence for Service Attendance

![Front Porch Wi-Fi Presence for Service Attendance](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/front-porch-wi-fi-presence-for-service-attendance.png)

The resulting attendance information can be viewed from Tools > Attendance Analytics by selecting an _Attendance Type_ of “Service Attendance” and the “Weekend Service” group as pictured below.

Attendance Analytics

![Attendance Analytics](https://rockrms.blob.core.windows.net/documentation/Books/36/1.15.0/images/attendance-analytics-v13.png)

[](#frontporchconcepts)Front Porch Concepts
===========================================

While the configuration of Front Porch is outside the scope of this document, it’s important that you understand how their configuration applies to Rock. Let’s look at some of their terms.

[](#zones)Zones
===============

Zones are defined in Front Porch as one or more access points. This allows you to create areas of your environment that are as large or small as you’d like. Each zone will show as an Interaction Component that Interactions will be assigned to.

[](#sessions)Sessions
=====================

A new session is created each time a device comes onto your network. There’s quite a bit of configuration around how sessions are tuned. Let’s take a look at some of them:

*   **Minimum Session To Track** - This value, in minutes, determines how long a device needs to be on the network in order for a session to be created. This helps keep the drive-bys from becoming a session, which would then be added to Rock. While there’s no right answer, Front Porch recommends making this value be 33-50% of the program event you’d like to track.
*   **Session Timeout** \- The amount of time before a session will timeout for inactivity.
*   **Polling Interval** \- How frequently to process records and (when necessary) poll the Wi-Fi controller for new information. Some Wi-Fi controllers push session data while others require polling.

For more information on Front Porch configuration see: [https://manager.frontporch.cloud/support](https://manager.frontporch.cloud/support).

[](#frequentlyaskedquestions)Frequently Asked Questions
=======================================================

Got questions? We've got answers!

What about the concept of random MAC addresses that modern devices use?
-----------------------------------------------------------------------

While it’s true that modern devices will randomize their MAC address while not connected to a Wi-Fi network, it will use a consistent MAC address once it does connect to a specific network.