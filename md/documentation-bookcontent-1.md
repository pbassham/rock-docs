# 
from:documentation-bookcontent-1.html

[](#introduction)Introduction
=============================

Looking for information on how to host Rock internally? Well look no further. In this step-by-step guide we'll walk through the process of getting Rock up and running. Before we jump in, let's cover a few things to make sure we get started off on the right foot.

[](#preparingforrock)Preparing for Rock
=======================================

In this chapter we will cover what you need for Rock to perform at its best.

[](#systemrequirements)System Requirements
==========================================

Rock was developed on Microsoft's ASP.Net platform so it requires a Windows Server environment to run. Below are specific requirements of the hosting platform:

Small Installs
--------------

1,000-5,000 records  
One server with the following specs:  

Server requirements for Small Installs
| Server |
| --- |
| 
*   CPU: 2Ghz dual core or higher
*   Memory: 2GB or higher
*   Storage: 1TB
*   Operating System: Windows Server 2016 or newer
*   Software: SQL Server Express 2014 (free) or SQL Server 2014 Standard or higher
  
*   Note that the server versions above are the minimum. We would of course recommend using the latest versions if you can. Starting with Rock v15, SQL Server 2016 will be required at a minimum.

 |

Keep in Mind PCI Compliance
===========================

While a single server configuration will do a lot quite well for small churches, you should be aware that it does not meet PCI requirements (which state you need to have your database and your web host in separate environments). So if you plan to take payments through your Rock site, or store financial information in Rock, you'll probably need to use the Medium Installs configuration instead (or use an external host).

Medium Installs
---------------

5,000-15,000 records  
Two servers with the following specs:  

Server requirements for Medium Installs
| Web Server | Database Server |
| --- | --- |
| 
*   CPU: 2Ghz quad core
*   Memory: 8GB or higher
*   Storage: 1TB
*   Operating System: Windows Server 2016 or newer

 | 

*   CPU: 2Ghz quad core
*   Memory: 8GB or higher
*   Storage: 1TB
*   Operating System: Windows Server 2016 or newer
*   Software: SQL Server 2014 Standard (Starting with Rock v15, SQL Server 2016 will be required at a minimum)

 |

Large Installs
--------------

15,000+ records  
Two servers with the following specs:  

Server requirements for Large Installs
| Web Server | Database Server |
| --- | --- |
| 
*   CPU: 2.5Ghz quad core
*   Memory: 16GB or higher
*   Storage: 1TB
*   Operating System: Windows Server 2016 or newer

 | 

*   CPU: 2.5Ghz quad core
*   Memory: 16GB or higher
*   Storage: 1TB
*   Operating System: Windows Server 2016 or newer
*   Software: SQL Server 2014 Standard (Starting with Rock v15, SQL Server 2016 will be required at a minimum)

 |

SQL Server 2014
===============

Note that we are ending support for SQL Server 2014 as of Rock version 15.0. We generally recommend using the [latest versions](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) if you can.

Note:
=====

The storage estimates above do not include room for backups. If you are considering local backups, please adjust the volumes appropriately.

More Info:
==========

If you plan to install Rock on a two server configuration, be sure to check out the [_Two-Server Configuration_](#two-server-configuration) chapter for some helpful tips.

[](#thingsyoullneedduringinstallation)Things You'll Need During Installation
============================================================================

Here is a short list of settings that you'll need to complete the Rock installation.

*   Internal and external web addresses for your organization
*   An email address to send exception messages to

[](#otherconsiderations)Other Considerations
============================================

**Windows Updates**  
Rock's foundation is built upon Microsoft's .NET technology. Since .NET is an ever-evolving technology, we recommend that you install all the latest updates for your Windows Server.  
  
**Server Version**  
The instructions and pictures in this guide are written for Windows Server 2012. If you plan to install Rock on a newer version, there are a few differences in the installation you will need to watch out for.  
  
**Certificates**  
As you configure Rock, make sure you purchase and configure an SSL certificate before making it available at a publicly accessible domain. Prices range from $9–$100+ per year, and while the setup may seem daunting, there are plenty of helpful tutorials that walk you through the setup process. Also, you can check with your current domain registrar to see if they offer SSL Certificates. If you're new to SSL, Google provides a [detailed list of best practices](https://support.google.com/webmasters/answer/6073543?utm_source=wmx_blog%3Camp%20/%3Eamp;utm_medium=referral%3Camp%20/%3Eamp;utm_campaign=tls_en_post). Check out the [Configuring IIS](#configuringinternetinformationservicesiis) chapter below for additional details.

Free SSL Plugin Available
=========================

Thanks to the Rock Community, there is an easier option available for configuring SSL. Check out the [Acme Certificate](https://www.rockrms.com/Plugin/74) plugin in the Rock Shop. This will walk you through getting and installing a free Lets Encrypt certificate - a much easier route for anyone who has never set up website encryption before.

Encryption Best Practice
========================

You might be wondering where and when you should add your encryption for your website. Every secure website will have an HTTPS address on every page. The simplest way of doing this for each site within Rock is by encrypting at the Site Level. This is done by checking the box for every site at: Admin Tools > CMS Configuration > Sites > Edit Site > Require Encryption. The two Rock sites for which you should enable SSL are the internal RockRMS Site, and the external facing website. Even if you don’t plan to use Rock for your main website, it’s important to protect the information flowing between your server and those who are giving you their information. Users typing http:// addresses in their browsers to visit your pages will be redirected automatically to the secure https:// site when “Require Encryption” is checked.

Now that we have these things covered, let’s begin!

[](#installingserverrolesfeatures)Installing Server Roles & Features
====================================================================

In this chapter, we'll install the required server roles and features needed for Rock.

Let’s open up Start > Server Manager. Once opened, the first thing we need to do is to install the Web Server role. That can be done by clicking on Manage and then Add Roles and Features.

Server Manager Dashboard

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/server-1.png)

Click Next.

Add Roles and Features Wizard

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/server-2.png)

On the next screen, select Role-based or feature-based installation.

Select Installation Type

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/server-3.png)

Choose Select a server from the server pool and then highlight your server from the list below. Click Next.

Select Destination Server

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/server-4.png)

On the next screen, check the box for Web Server (IIS).

Select Server Roles

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/server-5.png)

HTTP Redirection
================

By default HTTP Redirection is not installed/activated. If it is installed, you'll typically want to redirect to nothing (_Redirect requests to this destination_ will not be checked).

You will be prompted to add some required features for IIS. Click on Add Features. Then click Next.

Required Features Prompt

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/server-6.png)

On the _Select Features_ screen, add .NET Framework 3.5 Features and click Next.

Select Features

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/server-7.png)

You will be presented with some information about the IIS feature. Click Next.

Web Server Role (IIS)

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/server-8.png)

On the _Select Role Services_ screen, scroll down to _Application Development_ and check the boxes for _ASP.NET 4.7_ and _Websocket Protocol_.

Select Role Services

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/server-9-v14.png)

Version information
===================

Server 2012 has ASP.NET 4.5, and Server 2016 has ASP.NET 4.6, instead of ASP.NET 4.7. Don't worry about that difference; just check the box next to the correct version and it'll work the same.

You will be prompted to add some required features for ASP.NET. Click on Add Features.

Required Features Prompt

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/server-10.png)

Next, check the box labeled _Application Initialization_. Then click Next.

Install ASP.NET and Application Initialization

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/server-10a.png)

On the final screen, select Restart the destination server automatically if required and click Install.

Warning:
========

If this is a production server, you might not want to have the server automatically reboot.

Confirming Installation Settings

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/server-11.png)

Alternate Sources
=================

If the installation gives you an error about sources not being available (as in the screenshot above), you can click Specify an alternate source path before beginning installation. Make sure that your installation disc (or image) is available, then type in the path to it's the "sources\\sxs" directory. For instance, if the Windows Server installation DVD is inserted in your D:\\ drive on the server, type d:\\sources\\sxs in the alternate source path dialogue and click OK.

Installation will begin.

Installation Progress

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/server-12.png)

Congratulations! The web server is now installed. Let's move on to configuring Internet Information Services.

[](#configuringinternetinformationservicesiis)Configuring Internet Information Services (IIS)
=============================================================================================

Now we will configure Internet Information Services for Rock.

[](#configuringiis)Configuring IIS
==================================

Open up the Internet Information Services Manager by clicking Start > Administrative Tools > Internet Information Services (IIS) Manager. Expand your server's node in the treeview on the left side, then click on _Application Pools_. Right click on DefaultAppPool and click on Advanced Settings.

Application Pools

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/iis-1.png)

Change the _Application Pools_.NET Framework Version to v4.0 (if it's not already) and change the Start Mode to _Always Running_. Then change _Identity_ setting to LocalSystem and change _Idle Time-out (minutes)_ to _0_. Then click OK.

Advanced Settings

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/iis-2.png)

Now right-click on _DefaultAppPool_ and click on _Recycling_. Un-check Regular Time Intervals and instead provide a convenient time for Rock to restart each day (such as 4:00am) in the _Specific Time(s)_ option. Click next and then click Finish.

Recycling

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/iis-3.png)

Finally, expand _Sites_ (below Application Pools on the left side) and right-click _Default Web Site_. Choose _Manage Website -> Advanced Settings_. Change _Preload Enabled_ to True and click OK.

Turn on preload

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/iis-4.png)

Generally the bindings will be configured for you automatically. However, if they're changed and you need to reset them, in most cases you'll use the configuration pictured below. Note that in some cases you must provide a Host Name; You can use an asterisk (\*) in place of a host name.

Port 80

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/iis-port-80.png)

Port 443

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/iis-port-443.png)

Click on the SSL Settings padlock icon to view your SSL settings.

SSL Configuration

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/iis-ssl-configuration.png)

That was easy! Now let's move on and set up our database.

[](#installingconfiguringsqlserver)Installing & Configuring SQL Server
======================================================================

In this chapter we will walk through installing SQL Server. If your organization doesn't have a SQL Server license, no worries. Rock works great with Microsoft's free version of SQL, SQL Server Express. Please note that SQL Server Express will work best with fewer than 20,000 records. If you are working with more than 20,000 records, your best option would be SQL Server Web or Standard edition.

Installing SQL Server 2016
==========================

The installation steps for SQL Server 2016 are an almost exact match to those pictured below for 2012. Note that we are [ending support for SQL Server 2012](https://community.rockrms.com/connect/ending-support-for-sql-server-2012) in Rock version 11.0.

[](#gettingsqlserverexpress)Getting SQL Server Express
======================================================

To download SQL Server Express, [Click Here](https://www.microsoft.com/en-us/sql-server/sql-server-downloads).

Some versions of SQL Server Express come in different editions. The version we recommend is the 64-bit version of SQL Server Express. Once you have SQL Server downloaded, let's move on to the next section.

[](#installingsqlserver)Installing SQL Server
=============================================

In this section, we will be installing SQL Server onto our Rock server. Let's begin.  
  
Start the SQL Server installer and on the first screen click on New SQL Server stand-alone installation or add features to an existing installation.

SQL Setup

![SQL Setup](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-1.png)

On the next screen, agree to the license agreement and then click Next.

License Agreement

![License Agreement](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-2.png)

Keep the _Include SQL Server Product Updates_ checkbox checked and click Next.

Product Updates

![Product Updates](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-3.png)

Next, the SQL installer will prepare to set up.

Installing Setup Files

![Installing Setup Files](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-4.png)

On the _Feature Selection_ screen, we recommend using the settings shown in Figure 4.8. These are the minimum required settings needed for Rock. Click Next to continue.

Feature Selection

![Feature Selection](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-5.png)

On the _Instance Configuration_ screen, click on the Default Instance button. Click Next.

Warning
=======

Be sure to use _Default Instance_ if you are unfamiliar with SQL Server. This will simplify our Rock setup. We only recommend using _Named Instances_ if you are familiar with them.

Instance Configuration

![Instance Configuration](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-6.png)

Leave the default settings on the _Server Configuration_ screen and click Next.

Server Configuration

![Server Configuration](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-7.png)

On the _Database Engine Configuration_ screen, set the _Authentication Mode_ to Mixed Mode and set a password for SQL Server. Click Next.

Note:
=====

Keep this password handy since it will be needed later to set up the Rock RMS database. But remember to keep this password secure, and only share it with those who truly need it.

Database Engine Configuration

![Database Engine Configuration](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-8.png)

Skip past the _Error Reporting_ unless you would like to send Microsoft error reports. Click Next.

Error Reporting

![Error Reporting](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-9.png)

Installation will begin, so hold tight.

SQL Server Installing

![SQL Server Installing](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-10.png)

Once it's complete with the installation, you can close the installer.

Installation Complete

![Installation Complete](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-11.png)

Now, the _SQL Server Installation Center_ (the first screen of the installer) should still be open on your desktop. Whereas you clicked the first option last time, now we need to click _Install SQL Server Management Tools_. This will launch the web browser, pointed to the [SSMS Download page](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms). You need to download _SQL Server Management Studio_, not just the upgrade package. Download and then run this package. (You can close the Installation Center window now). There aren't many options in the installation of this package- just accept the license and let the installer run.

[](#configuringsqlserver)Configuring SQL Server
===============================================

In this section, we will be setting up a user account for Rock to use to access the SQL Server. To begin, let's open the SQL Server Management Studio. Change the Windows Authentication option to SQL Server Authentication and log in using the password we created during the SQL Server installation.

Note:
=====

By default, the admin username for SQL is “sa”. Use that username when logging in for the first time.

On the Object Explorer, expand the _Security_ folder and right click on Logins and click on New Login.

Object Explorer

![Object Explorer](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-12.png)

Create a user called RockUser (or another username if you prefer), set the Authentication Type to SQL Server authentication, and create a password. Be sure to keep this password secured and only share it with those who truly need it. Also, uncheck the _Enforce password policy setting_ for this account.

New User Window

![New User Window](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-13.png)

Next, click on _Server Roles_. Check the dbcreator role. Then click OK.

Login Properties

![Login Properties](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-14.png)

Now let's open up _SQL Server Configuration Manager_. Expand the _SQL Server Network Configuration_ item and click on _Protocols for MSSQLSERVER_. Right click on _TCP/IP_ and click on Enable.

Opening the SQL Manager
=======================

You can run the _SQL Server Configuration Manager_ by navigating to Start > Microsoft SQL Server yyyy > SQL Server yyyy Configuration Manager, or by navigating to Start > Run. Refer to the [SQL Server Configuration](https://docs.microsoft.com/en-us/sql/relational-databases/sql-server-configuration-manager?view=sql-server-2017) for instructions for your file name depending on your version of SQL Server.

Enabling TCP/IP

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-15.png)

Next, click on _SQL Server Services_ and then right click on SQL Server Agent (MSSQLSERVER) and click on Properties.

SQL Server Services

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-16.png)

Set the start mode to _Automatic_ and click on Apply. Now, since our earlier changes warned us that we'd need to restart the service to take effect, you should right-click the SQL Server service and choose "Restart".

SQL Server Agent Properties

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-17.png)

Next, let's open up _Firewall with Advanced Security_. Right click on Inbound Rules and click New Rule.

Creating a New Rule

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-18.png)

Click on Port and click Next.

Define By Port

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-19.png)

Choose TCP and type in the specified local port, "1433."

Specify Port 1433

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-20.png)

Click on Allow the connection and click Next.

Allow The Connection

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-21.png)

Choose which profiles this rule is applied to and click Next.

Firewall Profiles

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-22.png)

Give the rule a name and click Finish.

Firewall Rule Name

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/sql-23.png)

If you're installing Rock and SQL Server on the same server (see warning below) then you'll probably want to lock down port 1433 so that your database is not exposed to the internet. In that case, open the firewall rule you created above. Under the _Scope_ tab add `127.0.0.1` to both the Local IP address and to the Remote IP address sections. `127.0.0.1` is the local host where SQL Server is installed. This prevents anyone from outside that server from accessing your database. This does not apply to an Azure setup.

PCI Compliance
==============

If you're planning on processing credit cards within Rock, it’s not PCI compliant to have the web server and database on the same server. Regardless of the size of your organization, it's not allowed.

That's it! Let's move on to the next chapter.

[](#installingrock)Installing Rock
==================================

Now that our foundation is set, we can begin the best part - installing Rock!

The first thing we need to do is to download the Rock installer, which you can find at [rockrms.com/Rock/GetStarted](http://www.rockrms.com/Rock/GetStarted). Place the _Start.aspx_ and _web.config_ files from the installer package in the root of the web folder. By default, the web root folder will be located here: C:\\inetpub\\wwwroot.

Tip: make a fresh start!
========================

If you're installing in the default wwwroot folder, you'll see that Windows has already placed some content here. Be sure to delete that before starting your installation; only Start.aspx and web.config should be in that directory.

Open up a web browser and go to [http://localhost/Start.aspx](http://localhost/Start.aspx) to begin the installation process.

Rock Installer

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/rock-1.png)

Now we will enter in the SQL server information. If the SQL server is installed on this server, you can type in "localhost" in the _Database Server_ box. If you are using another server for SQL, you can enter the server name instead.  
  
Next, enter in a name for the Rock Database (e.g. "Rock") and enter in the username and password we created earlier in the SQL Chapter. Click Next.

Database Configuration

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/rock-2.png)

Now the Rock installer will run some checks to make sure the environment is ready for use. If everything checks out, you will see the _Pass!_ screen. Click Next.

Environment Checks

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/rock-3.png)

The next screen will allow us to create an admin username and password for Rock. This will be the default admin account for Rock. Be sure to use a good password, and limit who has access to it. Click Next.

Note:
=====

We recommend using a general or organization account, not a personal one. You can create your own login after the install.

Admin Account Setup

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/rock-4.png)

Now you'll need to enter in your organization URLs.

*   **Internal URL:** The web address you'll use to connect to Rock internally. (Example: http://admin.rocksolidchurchdemo.com)
*   **Public URL:** The public facing website for your organization. (Example: http://www.rocksolidchurchdemo.com)

Note:
=====

Don't worry if these addresses aren't configured to point to your new server yet. These addresses are intended to be the ones you'll use once you're ready to go live.

Hosting Configuration

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/rock-5.png)

Now let's enter in your Organization Information.

*   **Organization Name:** The name of your organization
*   **Organization Default Email Address:** The default email sending address for Rock
*   **Organization Phone Number:** The main phone number of your organization
*   **Organization Website:** The website of your organization

Note:
=====

Don't worry, these settings can be changed later under Admin Tools > General Settings > Global Attributes

Organization Information

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/rock-6.png)

Now that you have all of your organization's information entered into Rock, click Next to begin the Rock installation.

Installation Progress

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/rock-8.png)

Rock will begin downloading the needed files onto the webserver and configuring the database. You can observe this process by clicking on the Show Console button.

Installation Console

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/rock-9.png)

When complete, click on the Flip the Switch button. Keep in mind, this loading screen will take the longest to load since Rock is starting up for the first time.

Installation Complete!

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/rock-10.png)

Note
====

If you arrive at the external site instead of the internal login page it could be that the domain name is set to be used as the external site. When Rock isn't provided with a specific page to load in the URL it looks at the domain and finds a site in the database that matches. If this happens to you, you can get to the internal site by this URL: http://{yourserver}/page/12

Now that Rock is installed, you can begin by logging in. Log in with the Rock admin account you created during the installation.

Logon Screen

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/rock-11.png)

Once logged in, you'll be taken to the Rock homepage. You will see the _Administrator Checklist_, which is a list of the recommended first steps to maximize the potential of Rock at your organization. Don't worry about completing the list today. You can get to it as you become more familiar with Rock. The list will disappear once you mark off all the items. It may reappear after updates, if special configurations are needed. Think of it as a friend that only shows up in your time of need.

Rock Home Page

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/rock-12.png)

Snapshot Isolation Settings
---------------------------

We recommend enabling snapshot isolation for your Rock database. This keeps database reads from being locked by database writes. Below are the settings we recommend (found by right-clicking on the database name in SQL Server Management Studio and selecting Properties.)

Snapshot Isolation Settings

![](https://rockrms.blob.core.windows.net/documentation/Books/1/1.14.0/images/snapshot-isolation.png)

Default Settings May Vary
=========================

Depending on your SQL Server edition and version this may already be the default.

[](#twoserverconfiguration)Two-Server Configuration
===================================================

If you were looking at the system requirements in this guide's introduction, you might have noticed that there is a two-server configuration for larger installations. Even for smaller installations, we recommend two servers for the following reasons:

*   **Performance:** Having your Rock Database and Web Environment on separate servers means they won't be sharing resources and will be able to perform at a higher capacity.
  
*   **Security:** If you plan to use a public website with Rock, you can put the web server in a DMZ for added network security. Setting up a DMZ is outside the scope of this guide, but if this is something you plan on pursuing, reach out to the Rock community.
  
*   **PCI Compliance:** PCI Requirements in the U.S. require that if you are taking or storing financial information through your website, your database must be separate from your web host.

[](#itsallinthedetails)It's All in the Details
==============================================

The process for setting up a two-server environment is not that much different from the single-server setup described in this guide. Here is a high-level task list for each server:

  
  
**Database Server**

*   Install & Configure SQL Server

**Web Server**

*   Install the required Server Roles and Features
*   Configure Internet Information Services (IIS)
*   Point Rock at the database server during installation

Be sure to check out the rest of the Rock guides and manuals to help you get started.

[](#selfinstallingrock)Self-Installing Rock
===========================================

If you're installing Rock and SQL Server on separate VMs or servers yourself, in your own network (not in Azure), then port 1433 should only be open to the Rock server. This is so Rock itself can talk to the SQL db. In this setup your self-hosted SQL server should not be NATed (exposed via a public IP) to the Internet at all. It should be internal to your network with only Rock (and perhaps a dev machine) allowed to talk to it.

To do this, open the firewall rule you created in the [Installing & Configuring SQL Server](#installingconfiguringsqlserver) chapter above. Under the _Scope_ tab, add the IP address of your Rock web server to the Local IP address if it's on your internal network, or to the Remote IP address section if it is external to your network. No other ports need to be open if the database is external to the network (i.e., on another external server).