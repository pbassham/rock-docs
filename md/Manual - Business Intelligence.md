# Business Intelligence
[View Original Source](https://community.rockrms.com/documentation/bookcontent/35)

[](#businessintelligence)Business Intelligence
==============================================

Business Intelligence is a buzz word for tools that allow you to quickly analyze data and present actionable information to leaders. In large organizations, these tools usually are separate from the normal day-to-day systems, but in Rock we’ve simplified the process and built the tools right in.

[](#whyyouneedrocksbitools)Why You Need Rock's BI Tools
=======================================================

With all of the reporting tools in Rock, why do I even need the BI capabilities? That’s a great question! It really comes down to speed and simplicity. Think about your kitchen. It’s nice and neat with everything having its place (even if yours isn’t, pretend it is). For your normal meals, this is great and organized, nothing is ever lost. That’s Rock’s normal mode (we’d say “transactional mode”).

Now let’s consider a Thanksgiving feast for thirty people. To speed up the cooking you’re probably going to pull everything you need out of the cupboards and line it up in the order you’ll need it. As you start wanting to run large reports and find insights into your data, Rock needs to do the same thing to stay efficient. It needs to arrange the data in a different fashion that’s optimized for speed.

Most systems don’t do both the daily cooking and the large meal. They require you to manually design the process for large analytics tasks. Rock’s BI tools simplify this process and automate much of it. You still need to provide it with a little guidance on what you’d like to see, but it’s much easier than traditional systems.

As a part of this process, Rock will create a set of new tables (aka, models) that contain a simplified version of your data that is very fast to process. These tables will need to be updated on a routine basis. We’ll discuss how you set that up a little later. It’s important for you to know, however, that the BI Analytics models are not updated in real-time. They represent a snapshot of the data from the last time the analytics jobs ran (typically nightly).

[](#howthebitoolsareused)How The BI Tools Are Used
==================================================

Once the BI tools are configured and running, they’re ready for you to use them for reporting. There are a couple of areas where you can apply these tools.

1.  External BI Tools – There are a host of external BI tools that you can use to create rich reporting and dashboard environments. Two of the most popular are Microsoft’s PowerBI and Tableau. If you don’t already have a tool, we highly recommend Microsoft’s PowerBI for its power and cost. You can use the desktop tool for free and PowerBI Pro is only $3.00 per month per user for non-profits. While these tools will feel a bit overwhelming at first, once you learn the basics, you’ll be making incredible interactive dashboards at the drop of a hat.
  
3.  Rock Reporting Enhancements – Many of Rock’s internal reporting tools can also optionally use the BI tables to increase the speed at which they run. (Note, though, that these tables are a snapshot of when they last ran, so they don’t show real-time data). For instance, the _Total Giving_ report select can be optionally configured to use the Analytics tables.

[](#typesofanalyticstables)Types of Analytics Tables
====================================================

If you’re used to a traditional transaction data model you may find the model for BI a bit confusing. Things like normalization fly out the window in exchange for raw speed. If you have no idea what we’re talking about, no problem; you’re actually at an advantage as you’re unencumbered by the rigid thinking of traditional systems.

There are two different types of analytics tables: Facts and Dimensions. What’s the difference?

[](#factsdimensions)Facts & Dimensions
======================================

Facts are the things you’re going to report on, such as Attendance or Financial Transactions. Dimensions (often referred to simply as Dim) are characteristics of the Facts. For instance, Dimensions of Attendance would be the Location, Date or Person of an attendance record. Dimensions of a Financial Transaction would be the Batch, Transaction Type or Account.

Another way to think of this is Facts are what you’re measuring while Dimensions are what you’ll filter by.

The tables that you will be importing into your BI tool are all SQL Server Views and start with the prefix "Analytics". For example, the fact model for financial transaction would be (AnalyticsFactFinancialTransaction). The dimension model for the account would be (AnalyticsDimFinancialAccount), the transaction type would be (AnalyticsDimFinacialTransactionType), and the date would be (AnalyticsDimFinancialTransactionDate), to name a few.

When displaying these models as a diagram the fact model usually goes in the center with the dimension models around it. This arrangement creates what is known as a Star Topology. Diagrams for Rock’s financial and attendance models can be found below.

Business Intelligence Entity Relationship

![BI ER](https://rockrms.blob.core.windows.net/documentation/Books/35/1.15.0/images/bi-er.gif)

*   Tables in red are fact tables.
*   Tables in blue are dimension tables.
*   Tables with the calendar icon are date dimension. They contain several columns to act as filters (aka, slicers).

SQL Server Tables & Analytics Source Tables
===========================================

If you’re super observant you may have noticed some analytics SQL Server Tables, or Analytics Source Tables. Don’t worry about these. They contain some of the source data for the views above. They are not a complete representation of data and should not be used directly.

Renaming Metrics Tables
=======================

Renaming a Metric will not update the metric's table/view name in the context of BI. For instance, `AnalyticsFactMyTableName` will not be updated to `AnalyticsFactMyNewTableName` if the name of the metric is changed in Rock.

[](#usinganalyticssourcedate)Using Analytics Source Date
========================================================

Working with the calendar in reporting can be difficult. Different months have different numbers of days, there are leap years to account for and individual weeks can cross months or years. Getting year-over-year or quarter-over-quarter calculations is especially challenging given these factors. That's where the _Analytics Source Date_ table can help.

[](#analyticssourcedatetable)Analytics Source Date Table
========================================================

The Analytics Source Date table ships with Rock and contains a row for every date from about 100 years ago through to about 100 years from now. So whatever date you're looking for, there should be a row in the table for it. Using the different properties of the Analytics Source Date table provides ways to approach dates and date-related data that would be much more complicated, and less performant, if you had to do all these calculations yourself. It's a powerful tool that you'll find yourself using more as you get more familiar with it.

Many properties for each date are listed in the table. One that you'll want to be aware of is the _DateKey_ property, which can be used to link the Analytics Source Date table to a variety of other tables throughout Rock. For instance, the MetricValue table has a property called _MetricValueDateKey_ which provides the date associated with a metric value in a format that can be used to join to the Analytics Source Date table's DateKey property.

Besides MetricValue, other tables that have a Date Key property you can use to link to Analytics Source Date include:

*   Analytics Tables
*   AttendanceOccurrence
*   BenevolenceRequest
*   Communication
*   ConnectionRequest
*   FinancialPledge
*   FinancialTransaction
*   Interaction
*   Registration
*   Step

Aside from DateKey, you'll find many other useful properties in the AnalyticsSourceDate table. For instance, you can get different formats of the date. You can also see the day of the week that the date is (e.g., '0' for Sunday, '1' for Monday). For each date you can also get the associated Sunday Date, which month the date is in for giving, as well as a variety of Calendar and Fiscal Year data showing things like which quarter or week the date falls in. There are also indicators telling you if the date is a holiday, or if the date falls within the week of a holiday.

The last property of the Analytics Source Date table is called _Count_. Every date in the table has the same value of '1' for this property. This lets you easily do counts against the dates. For instance, if you have two different dates then you could get all the records between those two dates and simply sum up the Count property to give you the number of days between the two dates.

For additional information on the Analytics Source Date table and its properties, check out [this video](https://www.triumph.tech/videos/date-keys).

[](#usingweekofyear)Using Week Of Year
======================================

Providing year over year comparisons of metrics can be very helpful. Unfortunately, it can also be difficult and taxing on the server to implement. To help ease the creation of these metrics and reduce the processing load on the server you can use the _WeekOfYear_ column on the AnalyticsSourceDate model. This field represents the week number of the day within the year for a Monday to Sunday week (just like the name suggests).

Since dates are incredibly difficult to standardize, there are a few points you should understand about how this field is calculated.

1.  Date processing is very difficult due to the non-standard nature of time units (7 days in a week and 365.25 days in a year). While there are several 'standardized' (e.g., ISO 8601) ways of calculating the week number, none of them are <cough> standards. Each has strengths and weaknesses. The calculation described below seeks to provide a standard that works well for churches. While it's not perfect for all use-cases, we feel that it's very helpful when comparing weekly metrics, especially across years (comparing this week to the 'same' week last year).
2.  For the sake of comparison, we wanted to ensure that every week number represents a full week.
3.  The week of the year is calculated for the Sunday Date and then applied to every day in the week. Keep in mind that Sunday is typically the last day of the week (this can be adjusted in Rock). That means that days at the end of the year could apply to week one of the next year if their Sunday is in the new year.
4.  There will be some years with 53 weeks in them. This happens roughly every 5.64 years (when the first of the year is a Sunday or Saturday on a leap year). This week won't have a previous year’s week to compare to. It's up to you how this is addressed in your dashboard. You can choose to show it as an outlier or filter it out.
5.  Because of the fact that a week of the year can span two different years, it's important that your date filtering not use the Date property, but instead the SundayDate property. To help with this, use the SundayDateYear property to filter by year. Note that if for some reason you really don't want to include the data from previous years you could use CalendarYear. This will mean, though, that the first month/week of the year might not be a full seven days.

There is also a property called _WeekCounter_ that is the week number for all time (at least since 1/1/1870 the first date in the table). This field is helpful to key off of if you want to compare this week to the last x weeks using SQL windowing functions. 

[](#historicalvscurrent)Historical vs Current
=============================================

You may notice that several entities have a Current and Historical table (e.g., Person and Family). These entities track changes to certain key properties and attributes over time. Let’s dive in a little deeper to understand these tables and how they can be used.

[](#historicaltables)Historical Tables
======================================

As noted, these tables track an entity over time. To do that, a single entity (like a person) may have several records in the historical table, one for each change that was made. A couple of key fields, listed below, help to keep track of these records.

*   EffectiveDate – This is the date that the record started. If it’s the first and only record for a person this date will be the date the analytics tables were first loaded. If the record is a subsequent change, it will be the date of the change.
*   ExpireDate – This is the date when the record was no longer the current (latest) change. If this record is the current record the date will be 1/1/9999 (which helps you with SQL compares).
*   CurrentRowIndicator – This column notes the latest row for the entity.

[](#currenttables)Current Tables
================================

The records in these tables represent the most recent record in the Historical tables. The implementation of this is a simple view that looks for records where the CurrentRowIndicator = 1. Elegant, right?

[](#customizingthedatamodel)Customizing the Data Model
======================================================

There are several ways that you can extend the BI models. Below is a discussion of each.

[](#personattributes)Person Attributes
======================================

You can determine which person attributes you would like to have added to the BI models. You can also determine which are marked to track history. Tracking history allows you to see the changes to attributes over time.

Person Attribute Analytics

![Person Attribute Analytics](https://rockrms.blob.core.windows.net/documentation/Books/35/1.15.0/images/person-attributes-enable-analytics-v13.png)

[](#familyattributes)Family Attributes
======================================

Like Person attributes, you can also mark specific family attributes to track their changes.

[](#calendars)Calendars
=======================

Part of what makes the BI models so fast is how they handle dates. Each day has a row in a large date table. Along with the actual date is stored the year, month, quarter, etc. This allows the data to be filtered, or sliced, very quickly. Because some of the date information centers around fiscal years, which can be different for each organization, Rock allows you to customize the calendar dimension settings. You can configure this under Admin Tools > System Settings > Calendar Dimension Settings.

[](#tipsforpowerbi)Tips for Power BI
====================================

While a full overview of PowerBI is outside of the scope of this document, we have outlined a few important nuggets you may be interested in.

Learn More
==========

You should also check out the Power BI videos available at [https://community.rockrms.com/rocku](https://community.rockrms.com/rocku/business-intelligence-bi). They're a great way to learn how Power BI integrates with Rock and what it can do to supercharge your reporting.

[](#bijob)BI Job
================

Rock’s _Process BI Analytics_ job keeps the data that the BI tool uses up to date. The job is located in the _Jobs Administration_ screen (Admin Tools > System Settings > Jobs Administration). While the job ships with Rock, you need to schedule it and run it at least once for the data to be available. (If you open your BI tools and don’t see any data, this is why.)

Let’s take a look at the BI job settings and what each does.

The BI job runs a number of processes, including:

*   **Process Person BI Analytics** – Keeps person tables up to date and processes historical data.
*   **Process Family BI Analytics** – Keeps family tables up to date and processes historical data.
*   **Process Campus BI Analytics** – Keeps campus information in sync.
*   **Process Financial Transaction BI Analytics** – Processes financial transactions and adds any new transactions.
*   **Process Attendance BI Analytics** – Updates attendance data.
*   **Refresh Power BI Account Tokens** – Keeps account tokens from expiring.
*   **Process Giving Unit BI Analytics** - Updates giving unit data.

Account tokens must be refreshed every two weeks, otherwise they expire. If you view a report, the tokens are automatically refreshed. If you go more than two weeks without viewing a report, though, the BI job will refresh the tokens for you to keep them from expiring.

Now let's look at how you can customize the BI job by enabling and disabling these settings.

[](#enablinganddisablingbijobsettings)Enabling and Disabling BI Job Settings
============================================================================

You may wonder why you’d want to disable the BI job settings since they keep your data up to date. There are some valid reasons for disabling certain settings, though, such as if you decide not to use Power BI.

Keep in mind that the BI tables are only updated when the job runs; so, the tables aren’t 100% up-to-date every minute. You may want to update some data more often than others, running the analytics, say, four times a day as opposed to only once a day. For example, if you want to process person analytics more often than the others, you could disable the Process Person BI Analytics setting and create a separate Process BI Analytics job that runs the person analytics more often, separately from other analytics.

So, you can create multiple versions of the job to run different schedules. This gives you a lot of flexibility when it comes to processing data in a way that’s most useful to your organization.

[](#onpremisesdatagateway)On-Premises Data Gateway
==================================================

As you use PowerBI in the cloud you’ll want to ensure that your data is always up to date. While you can do that manually using the PowerBI Desktop application, you can automate the process using the PowerBI On-Premises gateway. This is a free tool that will keep your data in Rock in sync with the PowerBI cloud. Below are steps for getting this tool configured. If you prefer a video tutorial, this YouTube video from Microsoft covers the steps in detail: [https://www.youtube.com/watch?v=GwuRQhm241c](https://www.youtube.com/watch?v=GwuRQhm241c).

1.  Download the ‘On-premises data gateway installer’ to your Rock server from your PowerBI account (located under the Download link).
2.  Run the installer and select the ‘On-premise data gateway’.
3.  After the install, you’ll be asked to enter an email address that is assigned to your account. This will allow you to link the gateway to your account.
4.  Once your gateway is linked, you’re ready to define a source to your Rock SQL Server. To do this follow these steps:
    1.  Select the Settings option on the PowerBI web portal (the gear icon), then select ‘Manage Gateways’. You should see the gateway you just named and registered listed.
    2.  Place your cursor over the gateway. This should display an ellipsis. Click the ellipsis and select ‘Add a datasource’.
    3.  Give your new datasource a name and enter the configuration info needed for a SQL Server Data Source Type. (Tip: you might consider using the same database username and password that is defined in your website’s connection string).
5.  Finally, create a new PowerBI project using the desktop application. Connect to the same SQL Server and select the Rock BI models. (Hint, they’re the tables and views that start with the word “Analytics”).

Considerations for Embedded Reports
-----------------------------------

Rock includes the awesome ability to embed Power BI reports right onto a page, which provides a great user experience without end users having to learn or use a special reporting client. However, this power comes at a cost. We have compiled the various options for utilizing Power BI reports in Rock and what Microsoft charges for these features below.

| Product | Price | Notes |
| --- | --- | --- |
| Power BI Desktop (Windows app) | Free | This application can be pointed at your Rock database to run BI reports at zero cost. Reports are not shareable and exist only in the local instance of the Power BI desktop app. Any number of users in your organization can run this app for free, but each would need their own local report templates to run (meaning, sharing of reports is difficult.) |
| Power BI Professional | $3/user/month (non-profit) | This is an Office365 subscription that is necessary to publish any Power BI report from the Desktop app to the cloud, which is necessary for sharing any report. You will need at least ONE license of Power BI Pro in order to publish to the cloud, and any additional users that want to see those shared reports would also need a license (unless you embed the report per below). You purchase these subscriptions within your Office 365 Admin portal. |
| Power BI Embedded | $1.0081/hour ($3500/yr non-profit Azure credit can be applied to this) | This is where you might get sticker shock. While embedding a BI report into Rock is pretty amazing (and easy), this feature does not come without cost. While Microsoft lets you get an "embed token" for free, these are ONLY intended to be used for dev/testing purposes. For "production" use, you're supposed to purchase a Power BI Embedded Node via Azure. This concept is explained in the [Power BI FAQ](https://docs.microsoft.com/en-us/power-bi/developer/embedded-faq#how-many-embed-tokens-can-i-create) and the pricing for these nodes can be found [here](https://azure.microsoft.com/en-us/pricing/details/power-bi-embedded/).  
  
As you can see, the cheapest option is A1, which costs just over $1/hr, which comes to a whopping $735/mo if you let the node run 24x7. This puts embedded Power BI reports well out of reach for most churches. The node _can_ be paused any time you don't need to use it, and thankfully you only get charged for the actual time you have the node running, but this obviously makes consuming the embedded reports in Rock much less useful, because you'd need to manually start/stop the node every time you wanted to see a report. Unless a way can be found to automate the pausing/starting of the node whenever a report is requested via Rock, this is the current reality for embedded Power BI reports in Rock. |
| Power BI Premium | $1998.00/mo (non-profit) | This option is so far out of reach that we're only mentioning it for the sake of completeness. Power BI premium also allows embedding reports (and gets around the need to purchase an Embedded Node), but the cheapest P1 version is almost $2k/mo so is a complete non-starter. If for some reason you want this version, you can purchase it via your Office365 Admin portal. |

_Prices are as of this writing and subject to change._