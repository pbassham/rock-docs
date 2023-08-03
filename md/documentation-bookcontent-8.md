# 
from:documentation-bookcontent-8.html

[![Ministry by Text Advertisement](/GetImage.ashx?Id=53880)](https://ministrybytext.com/ "Ministry by Text")

[](#welcome)Welcome
===================

In today's hectic world people expect their communications to be personal and professional. One channel isn't enough; organizations must meet people where they are. Sometimes that means pushing a message through email or text, other times it needs to be pulled from the web or social media. Rock gives you the tools you need to personalize your message through all these mediums and more. Let’s jump in and see how Rock can be that communications assistant you’ve always dreamed of.

[](#sendingacommunication)Sending a Communication
=================================================

Communications are ways of pushing out messages to your attendees. Today this can be in the form of emails or SMS text messages, but in the future communications could offer many more options.

Rock has two tools for sending communications: our [Communication Wizard](#communicationwizard), which will make you feel like an email rock star, and the [Simple Email Editor](#simpleemaileditor), which is best suited for sending simple emails, such as from a group toolbox. If you’re anxious to get started sending messages with the wizard, jump to the [Communication Wizard](#communicationwizard) chapter. If you’d like to learn about how communications work in Rock, read on.

But Wait, I Just Want to Send a Letter!
=======================================

"These are great and all, but I need a good old-fashioned low-tech letter. Although I would like to use a fancy merge document and maybe a little Lava..." If this is you, you need to head over to the [Rock Admin Hero Guide](https://community.rockrms.com/documentation/bookcontent/9#mergedocuments) for more info on Lava and merge docs.

[](#underthehoodofcommunications)Under the Hood of Communications
=================================================================

[](#rockscommunicationengine)Rock's Communication Engine
========================================================

Like a car engine, Rock's communication tool has a number of different parts or components. Most of them can be found in the _Communications_ screen (Admin Tools > Communications). We'll be talking about many of them in depth throughout this guide, but you can read an overview of all of the parts in the [Communications](https://community.rockrms.com/documentation/bookcontent/9#communications) chapter of the Admin Hero Guide.

[](#mediumsandtransports)Mediums and Transports
===============================================

Like everything in Rock, the communications features are designed to be extensible for the future. That means the messages of tomorrow won't be limited by the messages of today. The communications engine is based on two types of components: mediums and transports. Let's look at how that works.

Think of mediums as different communication channels. Today Rock provides an email medium, an SMS medium and a push notification medium. Other mediums could easily be added in the future. These mediums can be written by either the core developers of Rock or by third-party developers. If you don’t like it, change it! Mediums can be configured under: Admin Tools > Communications > Communication Mediums.

Transports, on the other hand, can be thought of as the worker bees of the mediums. They do the actual work of getting the messages to their recipients. Today the _Email Medium_ has transports for delivering emails via the Mailgun and SendGrid email services. Settings for the transport are configured under Admin Tools > Communications > Communication Transports. As applicable, each transport lets you control how many concurrent communication recipients will be processed in parallel when communications are sent by adjusting the _Concurrent Send Workers_ value.

A medium can only use one transport at a time. You select the transport under the medium administration.

[](#communicationssendjob)Communications Send Job
=================================================

Usually when you send a communication, it will be sent immediately to a communication queue that gets processed in almost real-time. There is, however, a Rock Job that runs every 30 minutes to look for communications with a pending status. You can view this under: Admin Tools > System Settings > Jobs Administration > Send Communications.

You don’t need to worry about this job, but we wanted to point it out, so you know more about how communications are sent.

[](#bouncedmail)Bounced Mail
============================

We know you have much to share, so let's make sure you have the opportunity to do that. You have to process bounced mail to keep your email addresses accurate and improve your email reputation (a metric used by ISPs to help determine if your organization's email is spam). Bounced messages are emails that are returned back to you after you send them because an email address is incorrect or no longer valid. Rock can automate this process if you use an email integration that supports the notification of these messages. Currently, the only core integration that supports bounced mail processing is the Mailgun integration (more on this integration is provided under the [Integrations](#integrations) chapter of this manual). Third-party provided solutions may be available for other services.

[](#smspipeline)SMS Pipeline
============================

In this chapter we’ll look at how Rock handles incoming SMS messages using Rock’s SMS Pipeline feature.

Rock’s SMS Pipeline is the entry point for all incoming SMS messages. Think of it as a switchboard operator that's directing each message to its intended action.

[](#thefundamentals)The Fundamentals
====================================

Below is an overview of how the SMS Pipeline feature works. If some of these concepts are foreign to you right now, don’t worry. We’ll go over all the details in the next section.

1.  An incoming SMS message is received into the pipeline.
2.  The message flows down the pipeline, through a series of _Actions_. Actions are activities that the system performs, like launching a workflow.
3.  Each action has filters. The pipeline uses filters to analyze the message and its contents against criteria you provide. If the message meets your criteria, then the action is performed. If not, the message moves to the next action. This process repeats until an action is performed.
4.  When an action is performed, the pipeline looks at the action’s _Continue_ setting. This determines if the message should continue down the pipeline to the next action, or if the matched action is all that’s needed.
5.  If a message continues down the pipeline after an action has already been performed, it works the same way as described in #3 above. Satisfying the filter criteria for one action does not mean the message automatically satisfies the filters on the remaining actions.

These general steps are repeated for each new message you receive. That means you can use a single pipeline to perform different actions for a variety of scenarios.

[](#anatomyofactions)Anatomy of Actions
=======================================

Actions automate many of the tasks you would want to perform in Rock after receiving a text message. For instance, you might want to send the person an automated reply message. Or you might want to launch a workflow if the person’s message contains certain keywords.

Each action you add has its own settings and filters, giving you full control over what should happen and when.

There are four SMS Pipeline actions:

*   Give
*   Launch Workflow
*   Reply
*   SMS Conversations

We’ll use the Reply example pictured below to describe the properties of actions in general. Then in the following sections we’ll dive into each type of action individually. The below page can be accessed from Admin Tools > Communications > SMS Pipeline.

SMS Pipeline Actions

![SMS Pipeline](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sms-pipeline-anatomy-of-actions-v14.png)

1 Actions

These are the actions you can add to the pipeline. Click and drag the desired action into the center of the page to add it.

2 Name

This is the name of the action, which displays within the pipeline in the center of the page. The default name will be the type of action it is. If you have the same type of action in your pipeline more than once, you’ll want to change their names so you can easily tell them apart.

3 Active

The action will only be performed if it is active. You might want to disable actions that only apply during certain times of the year, so you don’t need to delete them when they’re no longer needed.

4 Continue

After an action is performed the process will check the _Continue_ setting for that action. If _Continue_ is enabled, the message will continue down the pipeline to the next action. When _Continue_ is disabled, the process ends with that action and any remaining actions in the pipeline are ignored.

5 Expire Date

If you open the Advanced Settings, you'll see an _Expire Date_. The Rock Cleanup job will delete the action from the pipeline automatically after this date passes. If you have actions that are only temporary or only apply to a particular time period, this means you don't have to remember to update your pipeline when the action is no longer needed.

6 Filters

Filters decide whether an action will be performed. If a message meets the action’s filter criteria, then the action is performed. If not, the process moves to the next action to evaluate that set of filters. If no filters are applied to an action, every message that reaches the action will cause the action to be performed.

7 Action-Specific Properties

This area will appear for actions where additional setup is needed. It will change depending on the type of action. We’ll cover these properties in the next section.

SMS Pipeline Webhooks
=====================

You might have noticed the _Webhook URL_ at the top of the _SMS Pipeline Detail_ page. This identifies the pipeline you’re viewing. You’ll use this URL to link your phone numbers to a specific pipeline. See [below](#configuringtwilioforsmspipeline) for details.

[](#smspipelineactions)SMS Pipeline Actions
===========================================

As noted in the prior section, all actions share some common properties. However, each type of action has unique features and properties that we’ll describe in detail below.

SMS Conversations
-----------------

This action will send the message over to the [SMS Conversations](#smsconversations) page, at which point you’re messaging with the person directly. There is only one filter for this action, and no additional unique properties.

Remember, the phone number filter references the number to which the person sent the message, not the person’s phone number. If this is left blank, then every message that reaches this action will go to the _SMS Conversations_ page.

SMS Conversations

![SMS Conversations](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sms-pipeline-sms-conversations-action-v14.png)

As pictured above, the SMS Conversations action is typically at the bottom of the pipeline. If the person’s message doesn’t meet the criteria for any of the other actions, this is how you can ensure it doesn’t fall through the cracks.

Reply
-----

The _Reply_ action is an easy way to automate responding to an incoming text. You can customize the content of your response and personalize it for the recipient using Lava. The reply action can in some cases eliminate the need for a workflow if a specific message is always to be returned.

Reply

![Reply](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sms-pipeline-connect-response-v14.png)

1 Message Filter

You can check the content of the incoming text message against key words you provide. You can add as many of these conditions as needed. You can also select whether the message requires "any" or "all" of those criteria to match.

2 Response

This is the content of your organization's response, which will be sent if the incoming message meets the filter requirements. You can personalize the response using Lava.

The example pictured above will only perform the Connect Response action if the words "serve" or "volunteer" are somewhere in the message's text. If the incoming text says "I would like to serve" then the contents of the _Response_ field will be sent to the person as a text message. In this particular example a workflow might also be launched for this message, because the _Continue_ option is enabled.

Launch Workflow
---------------

As the name implies, this action will launch a workflow. You’ll want to configure your workflow to receive information from the pipeline, using the same workflow attribute merge fields we cover in the [SMS Pipeline Workflows](https://community.rockrms.com/documentation/bookcontent/12#smspipelineworkflows) chapter of the [Blasting Off with Workflows](https://community.rockrms.com/documentation/bookcontent/12/) guide.

Launch Workflow Action

![Launch Workflow Action](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sms-pipeline-launch-workflow-action-v14.png)

1 Workflow Type

You’ll use the drop down to choose your preconfigured workflow.

2 Pass Nameless Person

You can control whether Nameless person records (see [Nameless People](#namelesspeople)) should be passed to your Workflow.

3 Workflow Name Template

This Lava-enabled field is where you can create a string to use as the workflow name.

4 Workflow Attributes

This lets you pass information, like the person or their phone number, to the workflow you want to launch. See the [SMS Pipeline Workflows](https://community.rockrms.com/documentation/bookcontent/12#smspipelineworkflows) chapter of the [Blasting Off with Workflows](https://community.rockrms.com/documentation/bookcontent/12/) guide for details on setting this up.

Give
----

This action enables _Text Giving_ functionality, allowing a person to send a text to donate using their phone.

The _Give_ action isn't ready to use out of the box. An administrator will need to configure the settings for the _Utility Payment Entry_ block in addition to SMS Pipeline setup. For details on _Text Giving_ and the required configuration, head over to the [Rock Solid Finances](https://community.rockrms.com/documentation/bookcontent/15#text-giving) manual.

Give Action

![Give Action](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sms-pipeline-give-action-no-callouts-v14.png)

[](#smspipelineinaction)SMS Pipeline In Action
==============================================

Let’s look at a completed pipeline to see how this all comes together. This pipeline has four actions and was designed to handle inquiries about small groups and connecting. Below each screenshot we’ll highlight the key points.

Response

![Response](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sms-pipeline-reply-action-group-response-v14.png)

As pictured above, when an incoming text contains the word 'group', an auto-response will be sent to the person with more information about joining a group. In this case the processing stops, because the _Continue_ option is not enabled.

If the SMS message doesn't contain the word 'group' then the "Connect Response" action will be evaluated because it's the next in line. If the message contains the word 'volunteer' or 'serve' an auto response gets sent with more information about getting connected to a serving team. The arrow on the action indicates that the continue functionality is enabled, and the next action will run if the message meets the requirements.

Launch Workflow

![Launch Workflow](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sms-pipeline-launch-workflow-no-callouts-v14.png)

You'll note in the screenshot above that the workflow action has the same filters as the "Connect Response" action. That means any message which activates the "Connect Response" action will also launch this workflow.

Lastly, the pipeline continues down to the “SMS Conversations” action so that a staff member can directly connect with this person.

In this case, the "SMS Conversations" action has no filters applied. Knowing this, and looking at the pipeline as whole, all incoming SMS messages will end up in the _SMS Conversations_ page except messages that contain the word 'group'.

If we enabled _Continue_ in the "Group Response" action, then every incoming SMS message would go to the _SMS Conversations_ page. In that case, a message containing the word 'group' would not satisfy the "Connect Response" and "Launch Workflow" filter criteria, so those actions won’t be performed.

In this example pipeline, if an SMS message is received that says "I'd like to learn more about your services" it would pass through the pipeline straight to the "SMS Conversations" action. No automated replies would be sent, and no workflows would be launched for that message because it does not meet the criteria for those actions.

SMS Pipeline Lava
-----------------

You can use [Lava](https://community.rockrms.com/Lava) to customize and personalize your pipeline’s actions. There are different merge fields depending on whether you're working with the Reply or Launch Workflow action.

SMS Pipeline Response Lava

![SMS Pipeline Response Lava](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sms-pipeline-response-lava-v14.png)

### Launch Workflow Action Lava

Below is a list of Lava merge fields you can include in your pipeline when you're working with the Launch Workflow action. These are the same workflow attribute merge fields we cover in the [SMS Pipeline Workflows](https://community.rockrms.com/documentation/bookcontent/12#smspipelineworkflows) chapter of the [Blasting Off With Workflows](https://community.rockrms.com/documentation/bookcontent/12/) guide.

SMS Pipeline Workflow Lava Merge Fields
| Merge Field | Description | Field Type |
| --- | --- | --- |
| {{ FromPerson.PrimaryAlias.Guid }} | The pipeline uses the person's phone number to look up the first person with that phone number. If it finds a match, it assigns that individual's record to FromPerson. If the phone number is used in more than one profile, the pipeline defaults to the first record of an adult with children. | Person |
| {{ FromPhone }} | The person's phone number, pulled from the inbound message, from the SMS gateway. This will automatically get added to the workflow as FromPhone and will include the country code (i.e., the raw phone number 18645555555). | Phone Number |
| {{ ToPhone }} | The SMS gateway number where the message was sent. | Phone Number |
| {{ ReceivedDate }} | The date the message was received. | Date |
| {{ ReceivedTime }} | The time the message was received. | Time |
| {{ ReceivedDateTime }} | The date and time the message was received. | Date Time |
| {{ MessageBody }} | The content of the SMS message that was received. | Text or Memo |
| {{ MatchedGroups }} | If the RegEx expression provided contains matched groups, they are loaded into an array here. This is an advanced feature, so if you’re not sure what this means, don’t worry. You probably don’t need it. | Typically, you fill in a text field with a merge expression of a single result from the MatchedGroups array. |

### Reply Action Lava

Below is a list of Lava merge fields you can use when you're working with the _Reply_ action. Note that each uses a prefix of `Message`.

SMS Pipeline Reply Lava Merge Fields
| Merge Field | Description |
| --- | --- |
| {{ Message.FromNumber }} | The person’s phone number from the inbound message |
| {{ Message.ToNumber }} | The SMS number where the message was sent |
| {{ Message.FromPerson }} | The pipeline uses the person's phone number to look up the first person with that phone number. If it finds a match, it assigns the value to FromPerson. If the phone number is used in more than one profile, the pipeline defaults to the first record of an adult with children. This is the full Person object, so, for instance, you'll need `{{ Message.FromPerson.FullName }}` to get the person's full name. |
| {{ Message.Message }} | The content of the SMS message that was received |

[](#addingnewpipelines)Adding New Pipelines
===========================================

Technically a single pipeline is all you need in Rock. After a while though, you might find that your single pipeline becomes complex, especially if you have multiple numbers that you are supporting. In this case you can create additional pipelines. Please note though that a single SMS phone number can only work with a single pipeline, but a pipeline can service multiple SMS numbers.

To start, navigate to Admin Tools > Communications > SMS Pipeline. From here you can add, delete or edit your list of pipelines.

SMS Pipeline List

![SMS Pipeline List](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sms-pipeline-pipeline-list-v13.png)

Click the button to add a new pipeline or click an existing pipeline to access its details. You can edit the 'Default' pipeline that ships with Rock, or you can create your own. In this example we’ll add a new pipeline from scratch so you can see the process.

The first thing you’ll need to do is provide a name and description for the pipeline. If you have multiple pipelines, be sure to make the name and description clear.

Add New Pipeline

![Add New Pipeline](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sms-pipeline-add-new-pipeline-v13.png)

Click the Save button, and that's all you need to start configuring your new pipeline using the instructions in the above sections. Remember, each pipeline can be associated with its own webhook (see [below](#configuringtwilioforsmspipeline)) for added flexibility.

From One to Many
================

If you started using SMS Pipeline before Rock v11, you don't need to change anything. The webhook you have in place will continue to work. However, don't forget that a webhook will stop working if the associated pipeline is deleted.

[](#smsindetail)SMS in Detail
=============================

Before you can start using the SMS features Rock has to offer, you need to set up a phone number. This chapter provides the information you’ll need to get started.

[](#addsmsphonenumber)Add SMS Phone Number
==========================================

You need to have a phone number before you can start sending and receiving texts. We recommend Twilio, and have a whole section for [setting up Twilio](#smstwilio) in a later chapter. Even if you don’t have a phone number set up yet, it’s important to be familiar with the _System Phone Number_ settings because they are referenced later in this chapter.

These settings can be accessed and maintained from Admin Tools > Communications > System Phone Numbers.

System Phone Number

![System Phone Number](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/system-phone-number-detail-v15.png)

1 Basic Settings

Here you can give the number a name, make it active or inactive, and you can choose a description. A good description can be very helpful if you have multiple phone numbers. Only Active phone numbers can receive responses. You might use a phone number for a large event and then inactivate it until the next event

2 Phone Number

Be sure that the phone number is in the Phone Number field and that it is in the format of "+15555555555" (or similar for international numbers).

3 Assigned to Person

The person you select here will receive the incoming messages sent to the SMS Phone Number you’re viewing. This only happens if _SMS Forwarding_ is enabled. Be sure the individual you select has a valid SMS phone number on their record.

4 SMS Enabled

This simply indicates whether the number can be used in SMS contexts within Rock.

5 SMS Forwarding

If enabled, then incoming messages to this SMS Phone Number will be sent to the _Assigned to Person_ and to the SMS Pipeline. If this is not enabled, then the conversation will still go to the SMS Pipeline or SMS Conversations, but it will not be sent to the _Assigned to Person_.

6 SMS Received Workflow

You have the option of automatically launching a workflow when a response is received. Use this field to indicate which workflow should launch. Don’t forget, you can use the same phone number to launch different types of workflows using the SMS Pipeline.

7 SMS Notification Group

The members of this group will be notified when a message is received to this number.

7 Mobile Application

Using this requires that you have Mobile configured correctly. This determines which mobile application to use when sending notifications.

In addition to the Assigned to Person settings described above, you can apply security to each System Phone Number individually. Simply click the icon when viewing the Phone Number to apply security for that number. This will limit who can see the number in the _SMS Conversations_, _Communication Wizard_ and _Simple Communication_ blocks.

You may also want to review the block settings for [SMS Conversations](#smsconversations) to further refine how your numbers are used and who can see them.

[](#smsnumberstrategies)SMS Number Strategies
=============================================

Now that you've seen how SMS replies are handled in Rock, let's touch briefly on strategies to implement this effectively in your organization.

SMS services like Twilio make it very inexpensive to rent phone numbers for SMS. (A number from Twilio runs only $1 per month.) Don't limit your organization to a single number if you need more than one. Think about getting a number for each department and/or heavy SMS user. It's also very easy to turn an SMS number on and off. You might grab a number for a large event and remove it after the event is over. You can also reuse a number internally by changing the _Response Recipient_ as described above.

[](#mmsconsiderations)MMS Considerations
========================================

Standard MMS (aka, Multimedia Messaging Service) messages allow you to send images, slideshows, videos and audio clips as attachments. While this means you can do some creative things with your communications, there are some limitations to keep in mind.

The biggest limitation is that the recipient's phone may not support all multimedia files. So, while you may be able to send a short video, not all of your recipients may be able to view it.

Another thing to keep in mind is that some mobile carriers limit the file size of attachments being sent over their network. For example, Twilio limits messages that combine text and images to 5MB. If you try to send, say, an MMS message combining text and video, and the total size is greater than 5MB, Twilio will prevent the message from sending. Before sending out a large number of messages, it's a good idea to test your communications on various handsets using different file formats and sizes. See what works and what doesn't.

Twilio, Short Codes and MMS Messages
------------------------------------

If you're using a Twilio short code, keep in mind that it doesn't automatically support MMS messages. You can add MMS capabilities for a one-time fee of $500. This is different than regular "long codes" (phone numbers) where MMS is usually automatically supported.

If you're not sure whether your account supports MMS messaging, check your Twilio Console. If you only see "Capabilities: SMS" and MMS is not listed, then it's likely you haven't purchased MMS for your short code.

See the [setting up Twilio](#smstwilio) section for more information on configuring Twilio as your SMS provider.

[](#longcodethrottling)Long Code Throttling
===========================================

It's still a bit like the Wild West out there when it comes to SMS and MMS. Each carrier has its own rules and practices. For many carriers, sending or receiving too many messages too quickly will set off spam warnings, which results in messages either not being sent or not being received. This can be a real problem when you need to send information to a lot of people at once.

Fear not. We've got you covered. Out of the box, Rock comes configured with Long Code Throttling. This slows the delivery of non-short code numbers. By default, it is set to 500 milliseconds, or half of a second, which is the rate we've found works best for both speed and reliable delivery. You can modify the rate, though, by changing your Twilio transport settings (Admin Tools > Communications > Communication Transports). You can also disable Long Code Throttling altogether. Keep in mind, though, that this may result in your messages not being delivered.

[](#configuringtwilioforsmspipeline)Configuring Twilio for SMS Pipeline
=======================================================================

In the past, each SMS feature included its own webhook. The SMS Pipeline condenses those features into one place, so you only have to use one webhook. That means you can use a single phone number for a variety of different purposes.

To set your number up for the SMS pipeline in Twilio, set the _A Message Comes In_ URL to:  
`https://YourServer/Webhooks/TwilioSMS.ashx?SmsPipelineId=YourPipelineId`

If you need multiple SMS Pipelines, you can link each one to your phone numbers by specifying the pipeline’s ID in the URL.

See the [Integrations](#smstwilio) chapter for more information on setting up Twilio in general.

[](#smsconversations)SMS Conversations
======================================

In the prior chapter we explain why many of your incoming SMS messages will end up getting passed from the _SMS Pipeline_ into _SMS Conversations_. Now, let’s take a step back and see how to manage those messages, or messages that are sent to _SMS Conversations_ directly. Navigate to People > Communications > SMS Conversations to start.

SMS Conversations Page

![SMS Conversation Page](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sms-conversations-v13.png)

1 New Conversation

This will open up a new conversation window to start a conversation with a selected individual. You can send the SMS message directly from Rock, and even include an image.

2 Recipient Filter

Use this filter to search for specific recipients. This is a fast alternative to scrolling through a lengthy list of people to find the conversation you're looking for.

3 Available SMS numbers

You can change between currently active SMS numbers by clicking the drop-down here. Changing the number will show you conversations associated with that number. If only one number is available, then the dropdown is replaced with a label.

4 Show/Hide

You can choose to show or hide messages that have already been read.

5 All Responses

This panel displays all the responses to the selected SMS number. Clicking on any of the listed responses will show you the conversation with that person.

6 Message

All you need to do is type your message here and hit Send to keep the conversation going. Your outgoing messages and responses will be shown in the screen above.

7 Add Note

The conversation you're having with the person can hold important information. By adding a note directly from SMS Conversations, you can track details about the conversation in a more visible and accessible way. The block's settings let you limit the Note Types that can be used.

8 Send Image

Click the icon to upload and send an image to the person.

We realize that every organization is different, so we add in settings to allow you to customize each feature for your needs. Suppose you have the Students Director and First Impressions Director using communications for scheduling different events with their volunteers. This could be done with the out of the box _SMS Conversations_ page, or you can customize this so the two can only see their own SMS number on different pages.

Create Multiple SMS Pages
=========================

You can create multiple pages with the SMS Conversations block on them. Then on each page you can specify who has access and which number(s) can be used. Each ministry could have their own SMS Conversations page, for example. To learn more about creating pages and adding blocks check out the [Designing and Building Websites using Rock](https://community.rockrms.com/documentation/BookContent/14#addingcontenttorock) guide.

[](#namelesspeople)Nameless People
==================================

Sooner or later, you’ll start receiving SMS messages from people and phone numbers you don’t recognize. If you’re worried that this will cause a snag in your processes, don’t be.

Rock will try to match the phone number of a new incoming SMS message to a person in the system. If it can’t find anyone with that number, Rock will create a _Nameless Person_ record instead. This allows your processes to continue as normal, without knowing their name or other contact information. In most cases this will result in the message being passed from the SMS Pipeline to the _SMS Conversations_ page. Other possible actions are limited because we don’t know who the person is.

Nameless People in SMS Conversations

![Nameless People in SMS Conversations](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sms-conversation-nameless-person-v13.png)

1 Phone Number

Typically, a name is shown here. Since Rock doesn’t know the person’s name, you’ll see the phone number instead.

2 Unknown Person

This indicates the conversation is with an unknown (i.e., nameless) person.

3 Link To Person

Click this button to link the phone number to a new or existing person record. We’ll cover that in detail below.

As new texts come in, you might lose track of your nameless people in the _SMS Conversations_ page. Luckily, you can go to Admin Tools > Communications > Nameless People to see and manage your list of nameless records.

Nameless People Page

![Nameless People Page](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/nameless-people-page-v13.png)

1 Phone Number

All of the phone numbers Rock can't link to a person record are listed here.

2 Link To Person

Click the button to link the phone number to a new or existing person record (see below).

Where Did My Nameless Person Go?
================================

Each night, the _RockCleanup_ job will go through the Nameless record types to look for a matching person record. If it finds a match it will merge them for you and the Nameless record will be removed.

Linking to an Existing Person
-----------------------------

Once you know for sure who you’re talking to, you'll want to link the phone number (and the conversation) to an actual person in Rock. You'll do this from the _Link Phone Number to Person_ page. You can get there from the _SMS Conversations_ page or from the _Nameless People_ page as described above.

Link Phone Number to Person

![Link Phone To Person](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/link-phone-to-person-v13.png)

1 Add New Person

As pictured above, this page lets you quickly and easily create a new person record to be linked with the phone number.

2 Link Existing Person

Clicking this button will give you a person picker screen so you can look up the existing record to be linked with the phone number.

[](#respondfromadevice)Respond from a Device
============================================

When you send an SMS message (see the [Communication Wizard](#communicationwizard) chapter) you'll select an SMS number to send from. When _Response Recipient Forwarding_ is enabled as described earlier, responses will be forwarded to the response recipient's mobile phone with the sender's name and a response code.

The response code consists of the @ symbol followed by a three-digit number (e.g., @347). If further follow-up is required, the response recipient can use this code to reply back.

If your mind is swimming a bit, that’s OK. Let's look at an example. In our example Jenny has just sent out a bulk SMS message to several attendees reminding them of the car show that afternoon. Let's walk through a conversation she has with Alisha.

SMS Example

![SMS Example](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sms-example.png)

1 Bulk Message

The original bulk SMS message. Notice Jenny has cleverly used merge fields to personalize the text message with each recipient's name.

2 First Response

Alisha then responds to the message.

3 Response Code

The response goes back to Rock's SMS phone number. Rock then looks up that number's response recipient and relays the message to Jenny's phone. Because the message is no longer directly from Alisha, Rock adds Alisha's name to the message and also the response code @671.

4 Sent to Alisha

Jenny decides she would like to continue the conversation, so she writes a quick message back including the response code. Rock will use this code to match the conversation back to Alisha.

5 Shows Message

Alisha receives Jenny's response. Note how Rock has removed the response code. To Alisha it appears that she is texting Jenny directly.

Notice that both sides of the conversation are texting to Rock's SMS number (555) 351-5392. Little does Alisha know that Jenny's real number is 867-5309.

[](#configuringemail)Configuring Email
======================================

Out of the box, you'll need to configure the email communication medium and transport. You'll want to be sure that your email settings are all correctly configured under Admin Tools > Communications > Communication Transports and that Rock is pointed to that transport for the Email medium under Admin Tools > Communications > Communication Mediums.

SMTP Relaying May Bite You
==========================

For development and testing you might decide to use SMTP as your transport. If you do, be sure that the server/service you use is configured to allow the Rock server to relay. If you're using Google Apps see the tips in the [Integrations](#emailgoogleapps) section below.

Broken Images?
==============

If you’re finding that some of your images appear as broken links in your email, be sure your _Public Application Root_ organization setting is set to the proper URL. This can be modified under:  
Admin Tools > General Settings > Global Attributes > Public Application Root.

There are several other settings that you should be aware of. While most are preconfigured to best practices, it's good to know that they exist.

[](#unsubscribehtml)Unsubscribe HTML
====================================

If you'd like to change the HTML that is displayed at the bottom of all bulk emails your can do so under:  
Admin Tools > Communications > Communication Mediums > Email.  
The default is to display a small _Unsubscribe_ link at the bottom right of the email.

Mailgun Unsubscribe
===================

To avoid having two _Unsubscribe_ options at the bottom of your emails, be sure to check that your Tracking Settings in Mailgun itself are turned off.

[](#defaultplaintext)Default Plain-text
=======================================

If you do not provide a plain-text message, the recipient will see a generic message with a link to view the rich text email on your website. The contents of this generic message can be configured under:  
Admin Tools > Communications > Communication Mediums > Email.  
The default message is:

```
Unfortunately, you cannot view the contents of this email as it contains formatting that is not supported by your email client.  
You can view an online version of this email here:
<link to page>
        
```

[](#safesenderdomains)Safe Sender Domains
=========================================

Many email service providers have implemented new restrictive policies on emails that are sent from a person's account (e.g., yahoo.com) but did not originate from their email server. Because Rock sends email on behalf of others these emails can bounce in these situations. To prevent this, if an email communication is created with a From Address that is not in the _Safe Sender Domains_ defined type, the _Organization Email_ global attribute value will be used instead for the _From Address_ and the original value will be used as the _Reply To_ address.

You'll want to add all of your organization's email domains to the _Safe Sender Domains_ defined type under:  
Admin Tools > Communications > Safe Sender Domains.

Adding Domains
==============

Be sure that only your organization's domains are added to the _Safe Sender Domains_ list. Adding gmail.com, yahoo.com, or any other domain you don’t control or have SPF records for will result in your email being dropped because you'd be forging 'From' addresses.

[](#communicationlists)Communication Lists
==========================================

The Communication Wizard utilizes communication lists to send messages. Communication lists are kind of like the contact lists or groups you can set up in your own email and messaging apps. Rock's communication lists are simply groups of a specific type. For example, you could create a communication list of all small group members, or everyone registered for summer camp, or anyone serving as an usher. If you can create a group of it, you can create a communication list from it. Using groups as the basis for lists allows you to quickly identify and select recipients from the different areas of your organization.

Communication lists can be found in the _Communication Lists_ screen, located at:  
Admin Tools > Communications > Communication Lists.  
Click the name of a list to view its members or modify its settings.

Communication Lists

![Communication Lists](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-lists-main-page-v13.png)

Rock ships with the following four lists:

*   Members and Attendees
*   Parents of Children
*   Parents of Youth
*   Sports Ministry

These lists are just samples to get your juices flowing and so you can see how lists should be configured. You can use them for your organization if you want, but you'll need to wire them up to sync with your data views. Because these lists are groups, you can add people to them manually..._or_ you can use Rock's group sync features to keep them automatically updated. To learn more, see the [Group Sync](https://community.rockrms.com/documentation/bookcontent/7#groupsync) chapter in the Rock Your Groups guide.

You can also create your own communication lists. In the _Communication Lists_ screen, click the button to create a new list.

Communication List Detail

![Communication List Add New](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/add-new-communication-list-v13.png)

As you can see, the _Communication List Detail_ screen offers a lot of options and flexibility for creating your communication list. To make your new list available to members viewing the _Communication List Subscribe_ block on your external site, be sure to click the _Public_ checkbox. (To learn more about that block, see the [Communication Preferences](#communicationpreferences) section below.)

Next let's look at how to associate the list with categories and data views.

[](#communicationlistcategories)Communication List Categories
=============================================================

You can create categories to further identify and filter your communication lists. The _Communication List Categories_ page is located at Admin Tools > Communications > Communication List Categories.

Communication List Detail

![Communication List Categories](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-list-categories-v13.png)

Rock ships with one category, called "Public", but you can create as many categories as you want. For example, you could create a category called "Staff Only" to use when creating communication subscription blocks you want only to be available to staff members. Categories can have child categories as well. You can use communication list categories in a number of ways: for paring down the recipients in your communication lists, in creating subscribe/unsubscribe blocks in your organization's website, for creating data views to use when filtering communication lists... The more you use them, the more you're going to see how extensive they are. We'll be talking about communication list categories a little later in the [Communication Preferences](#communicationpreferences) chapter.

Keep in mind that the category's security will be used to decide if the individual can see the communication lists associated with that category. This means an administrator can set up a new category (e.g., Staff) and then add security to that category such that people with access to view that category will be able to see any communication lists that are tied to that category. Don't forget, the admin would have to configure the _Communication List Subscribe_ block's settings with the new category.

[](#segments)Segments
=====================

Segments provide a way to select and filter your lists based on any field in the system. You can use data views to further pare down, or segment, who you’re communicating with in a particular list. They can be global to all lists or unique to a specific list. When using the Communication Wizard, after selecting a communication list, you can add any segments you want to use to filter that list. For example, if you only want the communication to be sent to members who are age 35 or older, you’d select the segments “Members” and “35 and older”. (More on that in the [next section](#sendingacommunicationusingthecommunicationwizard).)

It's important that you think through your list strategy. A smart use of segments can cut down on the number of lists you will need.

Data views can be created, modified and deleted in the _Communications Segments_ category of the _Data Views_ screen, located at Tools > Data Views. For more information about data views, see the [Filtering Using Data Views](https://community.rockrms.com/documentation/bookcontent/6#filteringusingdataviews) section of the Taking Off with Reporting manual.

OK, now for the fun part. Let’s look at how to actually use the Communication Wizard.

[](#communicationwizard)Communication Wizard
============================================

Rock's Communication Wizard works like other wizard models, with buttons that move you forward and backward through a series of screens. Let's walk through how to use the wizard to send a communication.

[](#sendingacommunicationusingthecommunicationwizard)Sending a Communication Using the Communication Wizard
===========================================================================================================

To begin a new communication, go to People > New Communication. The first screen you'll see, pictured below, is where you'll pick who you want to send the communication to. This can be done by using a [Communication List](#communicationlists) or by adding individuals manually. There are other ways too, like if you arrived at this screen from a grid.

List Selection

![List Selection](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-wizard-list-selection-v13.png)

1 Use Simple Editor

Click this button to launch the [Simple Editor](#simpleemaileditor).

2 Full Screen Toggle

This button will change the view of the page into a full screen. The same button is used to return the screen back to its original state.

3 Manual List

If you want to select individual recipients manually, you can do that here. This lets you create a list of people without using a configured [Communication List](#communicationlists).

4 Communication List

After a [Communication List](#communicationlists) has been created, you can select it here. Depending on the other settings you choose on this page, this will be the list of people who receive the communication.

5 Prevent Duplicates

This setting is only visible if enabled in the block's settings. People within a family will often share an email address or SMS phone number. Selecting this option will cause only one communication to be sent per email address or phone number. For instance, if spouses share an email address, then only one of them will receive the communication, personalized to that person.

6 Segments

The _Segments_ feature lets you filter people in the _Communication List_ according to your selections. For instance, you could apply the '35 and older' segment to only communicate with people from the 'Members and Attendees' list who are 35 and older.

7 Recipients Must Meet

If you’ve chosen more than one _Segment_ then this lets you decide if the people who receive the communication should meet all of the segment requirements, or any one of them.

Click Next to advance to the _Communication Details_ screen.

Wait! I want to go back!
========================

If at any point you want to return to a previous screen, click the Previous button.

Communication Details

![Communication Details](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-wizard-communication-details-v13.png)

1 Communication Name

This is the name of the communication you’re sending. This is for internal use only, to help you identify which communications were sent as you look through your history of communications. The name you provide here will not be included in the communication you send.

2 Bulk

Here is where you designate whether or not you're sending a bulk (or group) communication. When you enable this option, Rock automatically includes a link for the recipient to unsubscribe from the list associated with the communication. You can change the default for this option in the block settings.

3 Communication Medium

The options you see here may vary depending on your Rock configuration/data. In this case we can choose to send an email, an SMS text message or a push notification. Or we can send it using different mediums based on each recipient’s communication preference.

4 Schedule Send

By default, the communication will be sent immediately after it has been created (and approved, if applicable). However, you can click here to specify a date and time on which the communication should be sent.

Click Next to advance to the _Communication Template_ screen. This is where you’ll select the email template you want to use to create your communication. You can imagine how, after you’ve created a number of templates, having a Template Image Preview (i.e., thumbnail) will help you easily locate the template you want.

Communication Template

![Communication Template](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-wizard-communication-template-v13.png)

1 Category Filter

You can also use the _Category Filter_ dropdown to help you locate your template. If you don’t see a template listed, you may not have permission to use it, or it might not be set up for use with the wizard. You can learn more about template security and support in the [Email Template Survival Guide](https://community.rockrms.com/documentation/bookcontent/34/).

2 Template Selection

Rock ships with these three templates out of the box, but this list will expand as you create your own. Remember, the template is a starting point for how your email will look, but you’ll be able to customize many aspects of it in the following screens. Keep this in mind before creating new templates.

After selecting your template, click Next to advance to the _Email Summary_ screen. The _Email Summary_ screen is where you specify the sender, the subject and any files you want to attach to the message.

Email Summary

![Email Summary](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-wizard-email-summary-v13.png)

1 From Name

This will be the name that appears as the person, ministry, etc. who sent the email.

2 From Address

The email address you provide here will be seen by the recipient as the email address from which the email was sent.

3 Show Additional Fields

Click this link to specify a separate 'Reply to' email address, and to add email addresses to 'CC' and 'BCC' lists. These fields are optional and can be left blank.

4 Email Subject

The subject line of your email is added here. You can use Lava to personalize the email subject.

5 Attachments

You can use this to upload files that will be sent with the email as an attachment.

CC, BCC and Personalization
===========================

If you use the CC or BCC fields, be aware that each communication is personalized for each recipient, so each email is unique. That means your CC/BCC recipients will receive many messages.

Click Next to advance to the _Email Editor_. If your communication will be sent by SMS or Push only, then the wizard will skip this screen.

Email Editor

![Email Editor](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-wizard-email-editor-v13.png)

Here’s where things get really fun. The _Email Editor_ is a drag-and-drop visual email composer. This is where you configure the layout, images, text, buttons, etc., of your communication.

To add an element, simply drag it from the buttons bar to where you want it to be in your message. Notice that when you drag an element over a section, a transparent image of the element helps to show where you’re placing it.

After placing an element, you can edit it by clicking on the section it's in. The options associated with that element are displayed on the right side of the screen. Notice that the section you’re editing is highlighted with a green border, and you can view your changes in real time. When you’re done editing the section, click Complete. If you decide you don’t want that element after all, click Delete.

At any point while working in the Email Editor, you can send a test email to yourself by clicking the Send Test button. Click Preview to see both desktop and mobile previews of your design. Click Save to save a draft of your email.

We should pause a moment here to note the RSVP button, indicated by the icon. This element is used to send RSVP requests to groups, and it requires some setup in advance. For full details check out the [Group RSVP](https://community.rockrms.com/documentation/bookcontent/7#grouprsvp) section of the Rock Your Groups guide.

Adding Videos to Email
======================

Because of how different email clients work, we can't reliably embed a video within an email. Using the Video feature will let you provide a link to a video, with an associated image, but the video can't play from inside the email itself. As of this update, Rock will automatically apply a thumbnail image if the video is from YouTube or Vimeo.

Emailing a Login Link
---------------------

As you're crafting your communication you may find it necessary to include a link that will automatically log the person in to your website. This is easy to do using the [PersonTokenCreate](https://community.rockrms.com/lava/filters/person-filters#persontokencreate) Lava filter. Simply add `?rckipid={{ Person | PersonTokenCreate }}` to the URL of the page you want the person to visit. The example pictured below will log the person in and take them to the external site's homepage using a URL of `https://yoursite.org/page/1?rckipid={{ Person | PersonTokenCreate }}`.

Email Link with Person Token

![Email Link with Person Token](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/email-with-persontokencreate-v13.png)

A link like the one pictured above can be added to your email by using the button near the top of the editor. Unlike the example above, you'll want to provide friendly text for the link (e.g., "Click Here") instead of the URL itself. Using the URL as pictured above would result in a very long and ugly looking link in the recipient's email.

You can optionally add parameters to your _PersonTokenCreate_ filter, to control how long the token is valid, how many times it can be used or which page it should be used for. Check out our [PersonTokenCreate](https://community.rockrms.com/lava/filters/person-filters#persontokencreate) Lava documentation for full details.

Depending on your [Security Settings](https://community.rockrms.com/documentation/bookcontent/9#securitysettings) a tokenized link may not be able to be generated for all of your recipients. Out of the box, a person token can't be created for people with an Extreme level [Account Protection Profile](https://community.rockrms.com/documentation/bookcontent/5#accountprotectionprofiles).

* * *

When everything is set up and looks the way you want, click Next to go to the _Mobile Text Editor_ screen. If your communication will be sent by email only, the wizard will skip this screen. The _Mobile Text Editor_ is similar to the _Email Editor_. This is where you design how your SMS message will appear.

Mobile Text Editor

![Mobile Text Editor](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-wizard-mobile-text-editor-v13.png)

1 From

Select the SMS phone number from which the text message will be sent. Unless specified in the block’s settings, this list will contain all active SMS phone numbers you have configured.

2 Add Merge Field

Personalization has never been easier. Use the list here to populate your message with the Lava you’ll need to truly customize and personalize content for each recipient.

3 Message Body

This area is where you’ll compose the actual content of your message, including any Lava you might be using for personalization.

4 Attachment

You can use this to upload files that will be sent with the message as an attachment.

5 Send Test / Save

You can also send a test text to yourself by clicking the Send Test button. Click the Save button to save a draft of your text.

6 Live Preview

As you make changes to your _Message Body_ you can see in real time how the message will appear when it’s received.

If you're sending the communication via a Push Notification, then you'll see the _Push Notification Editor_ screen instead of the Email and SMS screens described above.

Push Notification

![Push Notification](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-wizard-push-notification-editor-v13.png)

1 Title

This will be the title of the push notification and will be seen by the person receiving it.

2 Add Merge Field

Just like the _Mobile Text Editor_ page, you can easily personalize the content of the notification by adding Lava merge fields from this drop-down.

3 Notification Content

This is the main content that the person will see. Merge fields will appear here when added, to customize and personalize the content.

4 Open Action

When _Link to Mobile Page_ is selected then you can set which page the person will be taken to, including any query string parameters you might add. If _Show Details_ is selected, you'll be prompted to select a Mobile Application and add additional details in the editor provided. If your app has a push notification detail page defined in it, that page will be opened with the details for the communication. These two features require Rock Mobile and require that Rock Mobile is configured correctly to receive these details.

With the last of the communication methods configured, click Next to go to the _Confirmation_ screen. This is the last stage in the process before we actually send the communication.

Confirmation

![Confirmation](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-wizard-confirmation-v13.png)

1 Communication Details

The information along the left applies to the communication in general. This lets you ensure you’ve selected the correct options in the prior screens.

2 Communication Method Previews

In the example pictured above, the communication may be sent in two different ways. You can click each button to see a preview of the communication in each of the formats we talked about above.

3 Communication Preview

This area will show you what the communication recipient will see. In the example pictured above we also see the number from which the SMS message will be sent, because that is specific to the SMS version of the communication.

4 Save as Draft

Not quite ready yet? That’s okay, you can save this as a draft and come back later. Your communication drafts can be found in the [Communication History](#communicationhistory) screen.

5 Send

This is the Moment of Truth. Are you ready to send the communication? If so, click Send.

After clicking Send, the communication is sent to the communication queue.

Communication Queue

![Wizard Complete](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-wizard-queued-for-sending-v13.png)

To immediately view the communication’s analytics, click the _View Communication_ link. See the [Viewing Analytics](#viewinganalytics) section to learn more.

To turn around and send the same communication to a different list, click the _Copy Communication_ button from the [Communication History](#communicationhistory) page. This will take you back to the beginning of the Communication Wizard, keeping the settings and design options of the original communication.

Pretty cool, right? With the Communication Wizard, you’re going to be rocking email and SMS messages in no time.

[](#simpleemaileditor)Simple Email Editor
=========================================

Rock’s previous, non-wizard communication system (aka, Simple Editor) is still available. You may find it useful if volunteers need to send individual or simple communications. Here’s what you should know about using the Simple Editor.

[](#sendingacommunicationusingthesimpleeditor)Sending a Communication Using the Simple Editor
=============================================================================================

There are a lot of ways to start a new communication. The most popular one is to click the button at the top or bottom of any grid of people. This will take you to the _New Communications_ page and add all of the individuals from the grid to the communication as recipients. This is really powerful when used with Data Views and groups pages. If you prefer you can also start a new communication from People > New Communication and enter your recipients by hand.

Whichever method you use, the Simple Editor can be accessed by clicking the Use Simple Editor button near the top right of the screen.

Use Simple Editor

![Use Simple Editor](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/new-communication-use-simple-editor-v13.png)

Tip: Hide the New Communications Button
=======================================

If a person does not have view access to the _New Communications_ page the button at the bottom of the grid will be hidden.

Once on the _Simple Editor_ page, you’re ready to start crafting your message. We'll walk through each section of this page highlighting some of the features you have at your disposal.

New Communication

![New Communication](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/new-communication-v13.png)

1Selector

Email is the default communication medium, but this can be updated from the communication selector at the top of the page.

2Recipients

The recipient list will be filled with all of the people you previously selected as recipients. You can also add and/or remove names from the list at this point. Don’t forget that if you started with a blank communication, you'll need to enter all of the names manually. You may notice that some names are in red. These names either do not have an email address or have been marked as not wanting emails or bulk emails.

3Bulk Option

Determine if this message should be treated as a bulk email. Bulk emails will have the unsubscribe link added to them. They will also not be sent to people who have asked that they not receive bulk emails from your organization.

4Template

If you would like to use a previously created email template, you can select it here. For more information on creating templates see the [Email Template Survival Guide](https://community.rockrms.com/documentation/bookcontent/34/). This page can be set with a default template. Out-of-the-box this will show your organization’s header and footer with the sender's signature.

5From

Fill in the email address that you would like the email to be sent from. By default, your contact information will be input, but you can change this as needed.

6Reply to Email

You might want replies to go to a different address than the one you're sending from. For example, when you send emails from the organization's leader, you may want the replies to go to an administrative assistant.

7Attachments

You can add any number of attachments you want to the email. Why limit a good thing?

8Subject

Next, enter the subject of your email. A well-written subject can greatly increase the response rate of the email. Here are a few tips: provide context for the content of the message and a hint about the organization sending it. Remember to focus on catching the eye of the reader. You can use Lava merge fields in your subject line so by all means, be creative.

9The Message

Now the fun part: your message. While you can enter any generic message in this box, consider personalizing your message using merge fields. The message editor has a button {} for selecting a merge field to add. Personalization is one of Rock's main strengths so be sure to use it to its fullest.

10Delay Send

If you'd like you can delay the sending of your message to a date and time in the future. What a timesaver!

11Test

Before sending the email it's wise to send a test. Using the Test button will send the contents of the email to the currently logged in user. The first recipient will be used to process any merge fields in the email.

12Draft

Finally, you can send the communication or save it as a draft to be completed later. This draft will be available to complete from People > Communication History. Take the time to get it right!

Resolving Relative Links
========================

By default, Rock will convert relative URLs in links and images to absolute URLs using the _Public Application Root_ global attribute.

[](#masspushnotifications)Mass Push Notifications
=================================================

The _Mass Push Notification_ page lets you send a push notification to every active mobile device in your system. By default, a device is considered active if it's had an interaction recorded within the past year. That's a lot of notifications, so this isn't something you'll use every day, but you'll find it's perfect for certain communications.

[](#sendingmasspushnotifications)Sending Mass Push Notifications
================================================================

You'll find the _Mass Push Notification_ page under People > Communications > Mass Push Notification. If you've used tools like the [Communication Wizard](#communicationwizard) to send push notifications, then this page will look familiar to you.

Mass Push Notification

![Mass Push Notifications](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/mass-push-notification-v13.png)

1 Title

This will be the title of the push notification and will be seen by the person receiving it.

2 Add Merge Field

You can easily personalize the content of the notification by adding Lava merge fields from this drop-down.

3 Notification Content

This is the main content that the person will see. Merge fields will appear here when added, to customize and personalize the content.

4 Open Action

When _Link to Mobile Page_ is selected then you can set which page the person will be taken to, including any query string parameters you might add. If _Show Details_ is selected, you'll be prompted to select a Mobile Application and add additional details in the editor provided.

By default, this block will send a notification to every device that has had an interaction recorded in your system within the past year. Administrators can edit the block settings to change the number of days that the device must have had an interaction for it to be considered active.

[](#approvals)Approvals
=======================

As your organization grows, you'll find an increasing number of people sending large emails. Chances are good that not all of them understand the intricacies of your communications strategies. Rock has just the thing to help you maintain quality in growth – approval settings for emails that are sent to a large number of people.

[](#approvingemails)Approving Emails
====================================

By default, emails that are sent to 300 or more recipients will require approval. This number can be changed by configuring the block settings of the _Communication Entry_ block (for the simple editor) or the _Communication Entry Wizard_ block (for the wizard).

When an email requires approval, its status will be set to _Pending Approval_ and members of the _RSR - Communication Approvers_ group will receive an email. Note that this is the only group that will receive the approval emails.

A communication will not be sent until it's approved by a person with approval access. By default, these are the _RSR - Communication Administration_ and _RSR - Communication Approvers_ roles. Before a communication is approved these roles have the ability to edit the communication to ensure it meets the standards of your organization.

Any individual with approval access can view a complete list of communications waiting for approval from the _Communication History_ page. The filters on the _Communications List_ block allow approvers to view communications from anyone in Rock, with additional filters for status.

Additional security roles can be added to approve communications by adjusting the block security of the _Communication Entry Wizard_ and _Communication Entry_ blocks. Simply add the new role to the _Approve_ permission of these blocks.

[](#approvernotificationemails)Approver Notification Emails
===========================================================

By default, the [System Communication](#systemcommunications) for approval emails is _Communication Approval Email_. Just like other communications, you can customize the content of your approval notifications to suit your needs.

Email Only
==========

The approval notification communication currently only works with emails and cannot be used with the _SMS_ or _Push_ features.

If you need to take it a step further, you can use an entirely different System Communication for these approvals. Simply go to Admin Tools > Communications > Communication Settings and select the System Communication you want to use instead.

Communication Settings

![Communication Settings](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-settings-v13.png)

[](#communicationpreferences)Communication Preferences
======================================================

Rock's communication tools provide powerful functionality not only to senders but also those receiving communications. Recipients can control not only which communications they receive but also how they receive them. Let's look at how Rock handles communication preferences.

[](#communicationlistsubscribeblock)Communication List Subscribe Block
======================================================================

Rock ships with the _Communication List Subscribe_ block ready for you to use on your external website under Connect > Subscribe. This block will display the communication lists a person is subscribed to or can be subscribed to. Pictured below is an example of this block on the external website.

Sample Subscribe Page

![ Sample Subscribe Page](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/subscribe-v13.png)

In this example, the block shows the three communication lists that ship with Rock under the _Public_ category: Parents of Children, Parents of Youth and Sports Ministry. Additional lists unique to your organization would be displayed here as well if the person is subscribed or is able to subscribe to them.

You can further configure the _Communication List Subscribe_ block in the block settings. This is one area where Communication List Categories come into play. You can specify a category in the block settings if you want the _Communication List Subscribe_ block to target only a particular segment of the communication lists. By default, this is set to display lists in the _Public_ category.

Communication List Block Settings

![Communication List Block Settings](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-list-block-settings-v14.png)

1 Communication List Categories

Whichever categories you select here will affect the functionality of the _Communication List Subscribe_ block. For example, you could select Staff Only to display lists only available to staff members. If you don't select a category, Rock will display all of the lists the person is authorized to view.

2 Show Medium Preference

For instance, the person could choose SMS or Email as their preferred medium.

3 Filter Groups By Campus Context

Communication lists associated with a campus can be filtered using campus [context](https://community.rockrms.com/documentation/bookcontent/14#usingcontext).

4 Always Include Subscribed Lists

If the campus context would normally filter out a list the person is subscribed to, this setting keeps it in place.

Remember, the "Public" category ships with Rock, but you can create as many categories as you want. Whichever categories you select here will affect the functionality of the _Communication List Subscribe_ block. For example, you could select Staff Only to display lists only available to staff members. If you don't select a category, Rock will display all of the lists the person is authorized to view.

Now let's look at how a person interacts with the _Communication List Subscribe_ block to set their communication preferences.

[](#settingsubscriptionpreferences)Setting Subscription Preferences
===================================================================

There are two ways a person can access and set their communication preferences: by logging in and navigating to a subscribe page, or by clicking an unsubscribe link that takes them to an email preferences page. Let's look at the subscribe page option first.

Setting Preferences in a Subscribe Page
---------------------------------------

When a person logs in, the _Communication List Subscribe_ block is made available for them to set their communication preferences. If that block is placed on a Subscribe page, as shown in the earlier screenshot, they can select which lists they want to subscribe to, and choose which format they want the messages they receive to be in. To subscribe to a list, simply check the box beside the list's name. To unsubscribe, uncheck the box. To set a delivery preference, simply click which you want to receive: email or SMS. Super easy, right?

Communication Wizard and Delivery Preference
============================================

The Communication Wizard uses the preferences set using the _Communication List Subscribe_ block. So, when sending a communication using the wizard, if you choose the _Recipient Preference_ option in the _Communication Delivery_ screen, the wizard will check which preferences a person has set and send the communication accordingly.

The _Communication List Subscribe_ block works the same way for the internal pages of your organization's site as well. You can create subscribe pages available only to staff members or others where they can set their communication preferences. For example, you can set up an employee resources page with an email preferences zone containing the _Communication List Subscribe_ block.

Sample Employee Resources Page

![Sample Employee Resources Page](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/employee-resources-email-preferences-v13.png)

Setting Preferences from an Unsubscribe Link
--------------------------------------------

The other way a person can access and set their communication preferences is by clicking on an unsubscribe link in an email or SMS message.

The US government's CAN-SPAM act requires that all "bulk" emails have an unsubscribe link. Rock automates the insertion and processing of these links for you. Here are a few things you'll need to know about how this process works.

*   When you send a bulk communication using the communication wizard, Rock automatically includes an unsubscribe link in your message, but you can place the unsubscribe link anywhere by using the merge field: \[\[ UnsubscribeOption \]\].
*   If you do not provide this merge field when using the Simple Email Editor, the link will be added for you at the bottom of your email (\*evil laugh\*).
*   You can modify the format and destination of this link on the _Email Medium_  
    Admin Tools > Communications > Communication Mediums > Email.  
    If you blank out this field, then no link will be added to your message. Think about it before you simply delete it. Friendly senders should provide a way to opt out of messages.

Below is a view of the page that is displayed when someone clicks an unsubscribe link.

Unsubscribe Page

![Unsubscribe Page](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/unsubscribe-page-v13.png)

The _Email Preference Entry_ block on this page allows you to customize the wording for each of the options on the page. If you want to add more reasons for the "I am no longer involved" option, you can do that under  
Admin Tools > General Settings > Defined Types > Inactive Record Reason.  
The block also allows you to suppress any reasons that might be awkward in this context (e.g., _Deceased_, _No Activity_).

Here’s a quick overview of each of these options:

*   **Update my email address.** This will provide a field where the person can change their current email address. This will not unsubscribe the person from anything.
*   **I'm still involved and wish to receive all emails.** This doesn't unsubscribe them from anything. In fact, if they had previously unsubscribed, it would undo that preference.
*   **I'm still involved but don't want to receive mass emails.** This will keep the email address active in the system but will remove them from receiving bulk emails.
*   **I'm still involved but don't want to receive any emails.** This will inactivate a person's email address inside Rock. You will still be able to see their address, but they will not receive any emails.
*   **I am no longer involved.** This will inactivate the person's record in the database. They will be asked to select a reason and have the option of providing more information.

A Note About the Email Preference Page
======================================

If a person is logged in when they view the _Email Preference_ page, any communication lists they're subscribed to will be displayed beneath the "Only unsubscribe me from the following lists" item, allowing the person to select which list(s) to unsubscribe from.

[](#communicationhistoryandanalytics)Communication History and Analytics
========================================================================

A communication from Rock continues to provide value even long after it's sent. Using the tools described in this chapter, you can measure the success of past communications to inform your future communications. You can even drill down to an individual's communication history to see which communications they engage with.

[](#personcommunicationhistory)Person Communication History
===========================================================

A history of communications that have been sent to an individual can be viewed on the _Person Profile_ page, under the History tab. This is where you'll come to find out which communications a person has received, and to view the details of those communications.

Person Profile Communication History

![Person Profile Communication History](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/person-profile-communication-history-v14.png)

1 Communication Medium

From this block you can view push notifications, emails or SMS messages the person has been sent.

2 Message Summary

Here you can see the subject (for emails) and title (for SMS/push) of the communication. You can also see who sent the communication. Clicking _More_ will provide details about each communication, as pictured in the next screenshot below.

3 Recipients

This column shows a count of how many recipients received the communication.

4 Date and Status

The date the communication was sent is shown for reference. You can also see the _Status_ of each communication:

*   Cancelled
*   Delivered
*   Failed
*   Interacted
*   Pending
*   Sending

[](#communicationhistory)Communication History
==============================================

You can view a history of the communications you've sent under People > Communication History. The list of communications can be filtered based on a variety of data elements, like type, status, content, etc.

Communication History

![Communication History](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-history-with-filters-shown-v13.png)

See the Bigger Picture
======================

Those with Administrate permissions on this block will be able to see every communication in the system and can filter by a specific person.

[](#viewinganalytics)Viewing Analytics
======================================

When you click a communication from the _Communication History_ list, Rock displays a page showing the status of the message along with any analytics that are available. This is where using one of the email service integrations like Mailgun can provide a ton of value.

With services like Mailgun you can see how many people have opened your message and even which links they've clicked. This gives you a much broader understanding of how well your message was received and what calls to action were engaged. To learn more about Mailgun, see the [Integrations](#integrations) chapter below.

Communication Analytics

![Communication History - Analytics](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-history-analytics-v13.png)

1 Status States

Analytics are shown for each state that a message could be in. The number and types of states is dependent on the transport that you used. The states pictured above include:

*   **Pending** - The communication has been saved or queued but hasn't been sent yet.
*   **Delivered** - The communication has been sent to the appropriate destination server. For email communications this does not mean that it necessarily reached the person's inbox, just that it made it to the recipient's email server.
*   **Failed** - The communication did not reach the recipient. This could be from a bad email address or a hard bounce.
*   **Cancelled** - This state is used when a communication has been cancelled by the sender.

2 Analytic Graph

This graph shows the number of opens, clicks and unopened messages over time. As emails are opened you should expect the number of unopened messages to go down while the number of clicks (hopefully!) goes up.

3 Actions

The _Actions_ section gives you lots of information at a glance, making it easy to monitor overall activity.

4 Clients

Services like Mailgun can identify which email clients are being used by recipients to view your email.

5 Popular Links

In addition to knowing the number of clicks, progress bars at the bottom of the page let you know which links are being clicked and how frequently.

Email Analytics
===============

If you want a wider view of these types of analytics for emails, go to People > Communications > Email Analytics. There you can view analytics for all emails within a specified time period.

[](#viewingmessagedetails)Viewing Message Details
=================================================

This page shows you details related to the communication itself. Reviewing things like the subject of an email or the phone number used to send a text message can be helpful both for sent messages and for future communications that are pending.

Communication History - Message Details

![Communication History - Message Details](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-history-message-details.png)

1 Created By

The name of the person who created the communication, and when it was created, will be displayed here.

2 Approved By

After a communication has been approved you can see who approved it and when the approval took place.

3 Communication Details

Specifics about the communication, including the _From Name_, _From Address_ and _Subject_, are displayed here for reference. For text messages, the number that was used to send the text will be displayed.

4 Message

The contents of either the email or SMS message will be displayed for reference.

5 Originated from this page

If the communication originated from a list block, such as those associated with data views or small groups, clicking this link will take you to that page.

6 Cancel Send

If the communication is scheduled to go out in the future, you can cancel it from here by clicking this link. This function is not available for communications that have already been sent.

7 Copy Communication

Often times you will want to resend a similar communication. Using the _Copy Communication_ link will create a new communication with the exact settings used for the communication being viewed. It's important to note that the recipient list will be exactly the same. If the initial communication was sent from a dynamic list of people (like a Data View) it will not re-run the list.

[](#viewingactivity)Viewing Activity
====================================

This area lists activities for the communication. Depending on the transport used, you can see every time the message was opened by a recipient and every link inside the communication that was clicked.

Communication History - Activity

![Communication History - Activity](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-history-activity.png)

1 Date

The date and time on which the activity occurred are displayed for reference.

2 Person

The person who took the action is provided as a link that takes you to their _Person Profile_ page.

3 Activity

The specific action (e.g., Opened, Click) that the person performed is shown here. You can sort the list by activity to group actions together.

4 Details

Details related to the activity are displayed here. If the person clicked a link, the link’s URL will also be displayed.

[](#viewingrecipientdetails)Viewing Recipient Details
=====================================================

Details about the individuals who received the email can be viewed here. This is great for accessing and analyzing easily customizable sets of information about communication recipients.

Communication History - Recipient Details

![Communication History - Recipient Details](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/communication-history-recipient-details.png)

1 Person Properties

Select one or more person properties and click the Update button to have those properties displayed in the grid. You can then sort the communication recipients according to the selected properties.

2 Person Attributes

Like the person properties, you can select one or more attributes to display in the grid. From allergies to t-shirt sizes, you can add as many as you need.

3 Filter Options

You can filter results based on a wide variety of options related to the communication and to the recipient. You can even filter by name to view details for an individual or a family.

4 Recipient Detail Information

This area will show the person’s name and general information related to the communication itself. As described above, columns can be added according to any properties and/or attributes you’ve selected.

[](#systemcommunications)System Communications
==============================================

_System Communications_ (formerly known as "System Emails") are communication templates that are used by Rock to send very specific messages. Typically, these are automated communications, such as the message someone receives when they've forgotten their password and requested to reset it.

_System Communications_ can be used with either emails or SMS messaging. While Rock sets these up to look professional from the start, you may want to modify them to match your organization's branding. You can edit these communications under Admin Tools > Communications > System Communications.

System Communications

![System Communications](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/system-communications-v14.png)

1 Title

This is the name of the system communication. This is only used internally and would not appear in the communication itself.

2 Subject

The subject line of the system communication is displayed here for reference. This can help you identify the system communication you're looking for.

3 Category

Every system communication must be associated with a category. If needed, you can add or remove categories from Admin Tools > System Settings > Category Manager. System communication categories use the _System Communication_ entity type.

4 From Address

If you have a _From Address_ configured in the system communication, it will be displayed here for reference.

5 Mediums

Here you'll see _SMS_ or _Push_ tags, indicating that the system communication is configured for those mediums.

6 Preview

Clicking the icon will show you a preview of the communication, as it would look if sent to a particular person at a specific time. See below for details.

7 Active

This simply shows whether the system communication is currently active.

8 Security

You can apply security to each system communication individually. This will restrict who can see the communication on the _History_ tab of the _Person Profile_ page and on the _Communication Detail_ block.

9 Delete

You can probably guess what this does. Only system communications that are not marked as _Is System_ can be deleted.

[](#systemcommunicationpreview)System Communication Preview
===========================================================

As noted in the screenshot above, you can click the icon to view a preview of the system communication. However, this is not the typical preview you might be used to seeing when editing the system communication. This is a special preview that's interactive, allowing you to choose a person and a date to populate merge fields. This helps you see what the communication will look like with certain merge fields filled in.

System Communication Preview

![System Communication Preview](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/system-communication-preview-v14.png)

1 Message Date

Here you can select a date, showing you what it would look like if the communication was sent on that date. In order for this to appear you need to have a merge field of `SendDateTime` somewhere in the communication template, and a _Send Day of the Week_ must be selected in the block settings.

2 Target Person

This defaults to the current person but can be changed to any person. Changing this will populate any Person merge fields in the communication, showing you what it would look like if it were sent to that person.

3 Desktop/Mobile

Here you can toggle between the Desktop and Mobile views of the communication.

4 Send Test

You can click this to send a quick test to an email address that you provide.

CSS Inlining
============

CSS Inlining of Email Templates is only available if the email Communication Transport supports it. You can allow CSS Inlining for all emails by updating the Communication Medium settings.

[](#integrations)Integrations
=============================

[](#emailmailgun)Email: Mailgun
===============================

We've already touched on just how great we think Mailgun is, but let's dig deeper into the benefits of their service.

Note:
=====

We are not in a business partnership with Mailgun, nor do we receive any form of compensation from them. We are just passing along helpful tips about some quality products and services we’ve discovered along the way. While Rock ships with the Mailgun transport, other integrations and plug-ins may be available in the Rock Shop.

Mailgun is an email delivery service that provides several advanced features. Mailgun is operated by the popular web hosting company Rackspace and is used by numerous online businesses like Stripe, GitHub, Lyft, Slack and many many more. We think you'll find that using a service like Mailgun is more than worth the small cost. The main benefits of Mailgun are:

*   Improved deliverability of your emails through advanced reputation features like SPF records, domain-keys and reputation monitoring. If all of this sounds Greek to you, don’t worry, they handle all of the technical details. You just need to know that they know what they're doing so you don't have to. Whew!
*   Email analytics that help you keep track of trends. Through Mailgun, Rock can show you how many of your emails made it to their destination and, even more importantly, how many were opened, and internal links clicked. All of this happens for you behind the scenes so you can just sit back and view the reports.
*   Not all email addresses work. Mailgun can notify you about incorrect email addresses so you can follow up. These bounced emails will be reported, and the person’s profile will be flagged to show the incorrect address.
*   Mailgun also offers to inline your emails for you as you send.

Costs
-----

As of this writing, Mailgun has a free starter package that generously gives you 5,000 emails a month for your first three months. After that you can pay by the number of emails you send or purchase a different plan. For full details and up-to-date pricing visit their [website](https://www.mailgun.com/pricing/). In our experience, Mailgun's pricing has been very competitive, and their features are among the best in their class.

While the starter package will save you money, keep in mind that you will be given a shared IP address with other organizations. In addition to sharing that IP address, you'll share their reputation, and in some cases, their blacklist. If you find that your emails are not always getting through, or if you want to be on the safe side, you might consider purchasing a plan with a dedicated IP address. And if you've already found yourself on a blacklist, Mailgun has provided [documentation](https://help.mailgun.com/hc/en-us/articles/115005365027-What-is-a-blacklist-) about blacklists and how to follow up with their support.

Setting Up Mailgun
------------------

Mailgun has spent time making their service easy to configure. Follow the steps below to enable and configure a new Mailgun account for Rock.

1.  Sign up for a new account on the [Mailgun website](http://mailgun.com/).
2.  Setup your domain. Mailgun will walk you through the DNS changes that need to be made to ensure the best delivery and spam protection.
3.  Once setup is complete, head to the main Dashboard page in your Mailgun account to start collecting what you’ll need to get Mailgun set up with Rock.
    1.  In the box near the bottom-right of the Dashboard page, click on the ‘API Keys’ link. Note the Private API Key, which can be made fully visible by clicking the eye-shaped icon. You’ll need this key in a later step.
    2.  Next, head back to the Dashboard and scroll to the bottom to see a list of your domains. Click the ‘Domain settings’ link for a domain. On the new page click the ‘SMTP Credentials’ tab.
    3.  Under the ‘SMTP credentials’ heading, note the Login and password. You might need to reset the password.
    4.  On the same page, below the Login information, note the value under ‘SMTP Settings’ (e.g., smtp.mailgun.org).
4.  Take a breather! You're almost done... The last step is to configure the webhooks in the Mailgun admin portal. To do this select 'Webhooks' from the navigation and put `https://[yourserver.com]/webhooks/Mailgun.ashx` into all the events under "Webhooks".  
      
    The Open and Click tracking options need to be turned on in the domain settings in the Mailgun site. It's located on the tracking section in the Domain Settings page. Once you turn these on, the data will be tracked.

Mailgun Webhooks

![Mailgun Webhooks](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/mailgun-webhooks-v10.png)

Here's what your webhooks screen should look like once you've got it configured in Mailgun.

_Long-time users of Rock and Mailgun may recall the "Legacy Webhooks" section. As of April 2023, Mailgun no longer supports the Legacy Webhooks configuration. If you only have Legacy Webhooks set up, you'll need to move the addresses to the "Webhooks" section as shown. It's likely that Mailgun has automatically done this for you, but you may want to check to be sure._

6.  Let's head back to your Rock server. First, let's enable the Mailgun Transport under  
    Admin Tools > Communications > Communication Transports > Mailgun HTTP.  
    Start by changing the _Active_ setting to "Yes". Next, provide the Mailgun private API key from above. Finally, add the domain that you want your email to come from (this must match the domain that was configured in Mailgun).
7.  Last step and we're done. Now that the email transport is configured, we need to tell Rock to use it for the email medium under  
    Admin Tools > Communications > Communication Mediums > Email.  
    Select "Mailgun HTTP" under _Transport Container_.

On Behalf Of
------------

Following the instructions on Mailgun’s site may lead to a scenario where your emails are sent “on behalf of” your domain. In short, this happens when the domain of the Sender field and the domain used in the From field are different. For instance, the Sender field would be something like `mg.rocksolidchurchdemo.com` while the From field would be `rocksolidchurchdemo.com`.

Email With On Behalf Of

![Email With On Behalf Of](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/example-on-behalf-of-email.png)

In order to resolve this, the domains should match. The domain that you're sending emails from needs to be added to your Mailgun account and verified. In the above example, the domain `rocksolidchurchdemo.com` would need to be configured in Mailgun, and your DNS records (all except MX) would need to be updated accordingly. When you're finished, your domain overview in Mailgun will look similar to the example pictured below.

Mailgun Domain Settings

![Mailgun Domain Settings](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/mailgun-domain-settings-for-on-behalf-of.png)

1 SPF Record

You probably already have an SPF Record; in which case you should just add `include: mailgun.org` to your existing record rather than creating a new one.

2 DKIM Record

You'll create a new TXT record in your existing domain that matches what Mailgun shows here.

3 MX Records

If you're using your actual email domain, you should **not** modify these records. Note that in this screenshot the MX records are unconfirmed, which is expected for this approach.

4 CNAME Record

Mailgun will use the CNAME record to inform Rock of opens and clicks. You'll need to create a new record like Mailgun shows.

Lastly, make sure the new domain is added to your Mailgun Communication Transport configuration under Admin Tools > Communications > Communication Transports > Mailgun HTTP per the instructions in the prior section above. With the new domain set up and ready to go, your emails will no longer have the "on behalf of" notation. If you had an old domain that you were using (like `mg.yourserver.com`) it's no longer needed in Mailgun.

Email Without On Behalf Of

![Email Without On Behalf Of](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/example-on-behalf-of-removed.png)

[](#smstwilio)SMS: Twilio
=========================

Twilio is the leading SMS provider. Period. They not only provide the best service, but they are also one of the least expensive options available. Again, we don’t have a relationship with this organization, but we do know a good thing when we see it! Below are instructions on setting up this service for Rock.

1.  From the Twilio website click the sign-up link, then provide your account information. You'll then need to verify that you have a pulse by typing in a verification code they text to you. Finally, select a phone number to tie to your account and proceed to your account information.
2.  On your account page note your _Account SID_ and _Auth Token_. You'll need this for Step 5 below.
3.  In order to receive replies from your SMS messages you'll need to provide a 'callback' (aka webhook) address for your SMS number. This tells Twilio how to tell Rock when this event occurs. You can set this by clicking 'Numbers' from the main menu, selecting the SMS number you wish to configure, then adding the URL format below to the 'Messaging Request URL'.
    
    _https://-yourserver-/Webhooks/Twilio.ashx_
    
    SMS Pipeline
    ============
    
    To set your number up for the SMS pipeline, use the 'Messaging Request URL'  
    _https://-YourServer-/Webhooks/TwilioSMS.ashx?SmsPipelineId=-YourPipelineId-_
    
    Configuring the Twilio Webhook
    
    ![Configuring the Twilio Webhook](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/twilio-webhook-setup.png)
    
    Make It Accessible
    ==================
    
    It's important that this address be accessible from the Internet so Twilio can access it.
    
4.  Before you can actually use Twilio for real communications, you'll need to upgrade from the free trial.
5.  From Rock navigate to  
    Admin Tools > Communications > Communication Transports > Twilio.  
    Enter in your _Account SID_ and _Auth Token_ and activate the transport. Click Save when done.
6.  Next set the Twilio transport as the default transport for the SMS medium under  
    Admin Tools > Communications > Communication Mediums > SMS.
7.  Finally, add your Twilio phone number under  
    Admin Tools > Communications > System Phone Numbers.  
    You can add as many Twilio numbers here as you wish. Be sure that the phone number is in the _Phone Number_ field and that it is in the format of “+15555555555” (or similar for international numbers). If you select an Assigned to Person, be sure the individual you select has a valid SMS phone number on their record.

Twilio Signature Validation
---------------------------

When you’re setting up your Twilio transport as described above (step 5), you’ll have an option to Enable Signature Validation. You’ll want to enable this if you're concerned that a system other than Twilio might try to send incoming SMS responses to your Rock server. Enabling this is a small step you can take to possibly avoid a lot of unwanted messages, and it helps keep your data secure.

In short, Signature Validation compares your _Public Application Root_ (this is a [Global Attribute](https://community.rockrms.com/documentation/bookcontent/9#globalattributes) in Rock) to the webhook that’s set in Twilio. If they match, the validation is successful, and the message will come through as usual. If they don’t match, then the message won’t reach Rock. There’s a bit more to it than that, and it gets a little technical, but we strongly recommend checking out the details on [Twilio’s site](https://www.twilio.com/docs/usage/webhooks/webhooks-security#validating-signatures-from-twilio) so you can get this set up.

* * *

That's it! Now you’re set to send SMS messages from the Rock communications features.

Twilio's Impact Access Project for Non-Profit Organizations
===========================================================

Twilio offers a $500 kickstart credit to non-profit organizations. To learn more, visit [www.twilio.org](https://www.twilio.org/).

Twilio, Short Codes and MMS Messages
====================================

If you're using a Twilio short code, keep in mind that it doesn't automatically support MMS messages. You can add MMS capabilities for a one-time fee of $500. This is different than regular "long codes" (phone numbers) where MMS is usually automatically supported.

If you're not sure whether your account supports MMS messaging, check your Twilio Console. If you only see "Capabilities: SMS" and MMS is not listed, then it's likely you haven't purchased MMS for your short code.

[](#emailgoogleapps)Email: Google Apps
======================================

Note
====

Gmail is not a commercial Email Delivery Service and has significant limitations on how many messages can be sent per day, how many identical messages can be sent to different addresses, etc. Using Gmail as your email delivery service is not a viable solution for most organizations and should only be used for testing. You will want to implement one of the other email transports discussed in this section for production use.

This technically isn't an integration as much as tips for configuring SMTP Relaying for Google Apps. The basic steps are covered in this link from Google [https://support.google.com/a/answer/2956491?hl=en](https://support.google.com/a/answer/2956491?hl=en). A couple of tips are below.

*   The link above notes you will find the relaying settings under the 'Apps' menu setting. That setting appears to have been moved. Instead search for 'SMTP Relay' in the admin search.
*   We've found success with the following Google Relay options.
    1.  Allowed Senders: Any Addresses
    2.  Authentication: Require SMTP Authentication
    3.  Encryption: Require TLS encryption
*   On the Rock side use the following SMTP settings.
    1.  Sever: smtp-relay.gmail.com
    2.  Port: 587
    3.  Username: The admin account username
    4.  Password: The admin account password
    5.  Use SSL: Yes

[](#emailsendgrid)Email: SendGrid
=================================

SendGrid is another supported Transport you can use in Rock. Like the other options described above, be sure to evaluate each service before deciding which is the best fit for your organization’s needs.

Most of the configuration you’ll need to do will be with SendGrid. You can learn more and get started for free by visiting [https://sendgrid.com/](https://sendgrid.com/). After you’re set up with SendGrid, you’ll need to provide the following in Rock:

*   **Base URL:** The default URL `https://api.sendgrid.com` should work in most cases. You can change this if needed based on your setup in SendGrid.
*   **API Key:** SendGrid will provide this when you’re set up with their service. This is required for Rock and SendGrid to communicate.

Like other Communication Transports, you can also choose whether SendGrid should track email opens, clicks and unsubscribes. Note that Rock only supports HTTP/S (and not SMTP) for SendGrid.

[](#settingupsendgrid)Setting up SendGrid
=========================================

The first step will be getting your API Key. Log in to your SendGrid account and navigate to Settings > API Keys. Click the button for Create API Key.

Create API Key

![Create API Key](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sendgrid-create-api-key-v11.png)

We recommend giving _Restricted Access_ permission. Also, make sure _Mail Send_ is assigned full access as pictured below.

API Key Configuration

![API Key Configuration](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sendgrid-api-key-configuration-v11.png)

Be sure to copy the API key when it is presented to you. SendGrid warns that you won’t see it again, and that's true. If you lose the key, you’ll have to create a new one.

Once you’ve got your API key, you’ll need to add it to Rock. Inside Rock, navigate to Admin Tools > Communications > Communication Transport > SendGrid HTTP and add the _Base URL_ and your _API Key_ as pictured below.

Communication Transport

![Communication Transport](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sendgrid-rock-communication-transport-v13.png)

Next, you’ll need to update the Communication Medium configuration in Rock. Navigate to Admin Tools > Communications > Communication Mediums and access the _Email_ entry. Change the _Transport Container_ to the _SendGrid HTTP_ transport configured in the prior step.

Communication Medium

![Communication Medium](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sendgrid-rock-communication-medium-v12.png)

With the above configuration in place, head back over to SendGrid to set up the _Event Webhook_. You can access this in SendGrid under Settings > Mail Settings > Event Settings. Click the pencil icon for the _Event Webhook_ row to access its settings.

Edit Event Webhook

![Edit Event Webhook](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sendgrid-edit-event-webhook-v11.png)

The _Event Webhook_ settings in SendGrid will look like those pictured below. The _HTTP Post URL_ will be formatted as shown, with your Rock URL followed by `Webhooks/TwilioSendGrid.ashx`. Twilio owns SendGrid, so don’t be concerned about the Twilio part of the webhook.

Event Webhook Configuration

![Event Webhook Configuration](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sendgrid-event-webhook-configuration-v11.png)

Note that _Processed_ and _Deferred_ currently have no functionality in Rock and can be left disabled. Be sure that the _Event Webhook Status_ is set to _Enabled_ before saving.

To track opens and clicks, you’ll want to enable those Tracking options in SendGrid. Under _Settings_ click on _Tracking_ to enable these options by clicking the pencil icon. The example below shows what the page will look like after open and click tracking have been enabled.

Tracking Settings

![Tracking Settings](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sendgrid-tracking-settings-v11.png)

Lastly, add your information to the _Sender Authentication_ settings. This helps with deliverability. An example of the setup is pictured below, but if you’re not sure what you need there’s a helpful link at the top of page.

Sender Authentication

![Sender Authentication](https://rockrms.blob.core.windows.net/documentation/Books/8/1.15.0/images/sendgrid-sender-authentication-v11.png)

Don’t be discouraged if your emails aren’t popping into inboxes right away. There are a variety of factors that can cause delays ranging from a few minutes to several hours. You can click on the _Activity_ menu item in SendGrid to search for emails you’ve sent and view details on what may be holding them up. Be patient, because sometimes there’s a delay between sending an email and seeing it in the _Activity_ list.

[](#emailspamreporting)Email Spam Reporting
===========================================

When you send an email, the recipient can report the email as spam. When this happens, Mailgun and SendGrid can report it back to Rock through their APIs. Rock will then find the person and inactivate their email address in the system and add a note to their record. The note indicates that the email address was deactivated due to a spam complaint and includes the date of the complaint.

In order for this to happen, in Mailgun you would need to set up a webhook of type _Spam Complaints_. In SendGrid you'll want to update the _Event Webhook_ to include "Spam Reports" under Engagement Data.