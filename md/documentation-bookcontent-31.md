# 
from:documentation-bookcontent-31.html

#### Updates for McKinley 10.0

No updates made.

#### Updates for McKinley 6.0

No updates made.

#### Updates for McKinley 8.0

No updates made.

#### Updates for McKinley 9.0

No updates made.

[](#introduction)Introduction
=============================

The big factors in deciding where to host are cost and quality. Microsoft brings the best of both worlds to non-profits by offering a generous $3,500 annual Azure hosting credit. That's right, you can get premium hosting services with an industry-leading cloud provider at a significantly reduced rate. Depending on your organization's size and needs, your hosting costs might even be completely covered by the credit. We've got all the details to get you started in the [Hosting Credit for Non-Profits](#hosting-credit-for-non-profits) chapter below.

But remember that cost isn't the only factor. There are hosting services available at a fraction of the cost of Azure, but they vary widely in overall quality when it comes to running Rock. This is where Azure stands out. As a part of Microsoft, they are true experts in the foundational technologies (Windows, .NET, SQL Server) upon which Rock itself is built. We're not saying you can't or shouldn't host elsewhere, but this is certainly an advantage of hosting with Azure.

Feeling overwhelmed?
====================

Unless you have a background in technology, all this talk about servers and hosting can be intimidating. Don't worry, that's perfectly understandable and not a problem at all. We have partners who can help get this all up and running for you, so you can focus on other aspects of your ministry. Visit [rockrms.com/partners](https://rockrms.com/partners) for details.

The rest of this guide will help you through the steps needed to get Rock up and running with Azure. As you'll see in the next chapter, there are different Azure hosting options available depending on the size and needs of your organization. Be sure to consider these factors before deciding on a service. If you haven't already, it's also a good idea to check out our [Planning for Rock](https://community.rockrms.com/documentation/bookcontent/2/) guide to make sure you're ready to get started.

[](#sizingandserviceoptions)Sizing and Service Options
======================================================

How much power and space will you need for your Rock instance? It’s difficult to predict the perfect configuration. Fortunately, we have some suggestions based on our experience and the experiences shared with us by the Rock community. We've provided recommendations based on average attendance.

It's important to note that while average attendance is a good starting point, it's often too simplistic of a measure to be applied in every use case. For instance, a medium-sized church might run their website on Rock and heavily use most of Rock’s features in a significant way. They may need more resources than an extra-large church that is only getting started with Rock. Keep this in mind as you consider the recommendations below.

Azure Hosted Services Sizing
|  | Small | Medium | Large | Extra-Large | Above |
| --- | --- | --- | --- | --- | --- |
| Max Weekend Attendance | 500 | 2,000 | 5,000 | 10,000 | Custom |
| Web VM | B2S | B2MS | B4MS | B8MS |
| Azure SQL | S1 | S2 | S3 | S4 |
| Est. Cost / Month | $48 | $108 | $218 | $436 |

Price Updates
=============

The prices discussed in this guide are estimated costs only, as of the time of writing. These prices tend to change frequently.

If you need more resources than the recommended "Extra-Large" configuration, pricing will vary. As the size of the church increases by orders of magnitude above the sizes we've listed, the price is likely to increase at a faster rate than the table would imply. For instance, a church three times the size of an "Extra-Large" church might expect to pay much more than $1,300 per month.

Running Your Website on Rock?
=============================

If you're running your website on Rock, we recommend that you move one tier to the right on the chart above. This will help ensure you have the resources needed for a smooth and performant web experience.

Demystifying Terms
------------------

Microsoft offers _Infrastructure as a Service_ (IaaS) and _Platform as a Service_ (PaaS) hosting options.

*   **IaaS:** With IaaS you're responsible for setting up and managing SQL Server and the Windows Server operating system. This gives you a higher level of control and flexibility, but also requires that you have staff with the appropriate skills.
*   **PaaS:** PaaS is a comparatively more hands-off option because more services are managed for you. The only drawback is that you have less control over your platform and infrastructure.

Our current recommendation is that you run your Rock Web/Application server on a Windows VM (IaaS) and Azure SQL (PaaS).

[](#hostingcreditfornonprofits)Hosting Credit for Non-Profits
=============================================================

So you've heard about Microsoft Azure's $3,500 annual hosting credit for non-profits, and you'd like to give it a try? Good news; those who have gone before you have marked the path to success. First, though, let's go over a few things we need to know up front.

How Do I Receive My Credit?
===========================

The $3,500 credit allows you to "spend" up to $291 per month with approved Azure products, and you'll be able to track your usage and the remaining balance in regular statements. Although the program expires one year after you set it up, Azure for Nonprofits has stated that they plan to do an "annualized refresh," turning this into a perpetual donation. Thanks, Microsoft!

[](#prerequisites)Prerequisites
===============================

Yes, prerequisites. While Azure's hosting credit is an exciting prospect and a good fit for many organizations, it may not work for all. Take a look at this short list to see if it will work for you.

*   Organizations must be nonprofit or non-governmental organizations with 501(c)(3) status under the United States Internal Revenue Code.
*   Religious organizations are allowed.

What does that mean? It essentially means that you must be licensed as a 501(c)(3) or NGO and you must be a US-based organization.

To sign up for the 501(c)(3) grant for $3,500 annually you will need to register your organization with Microsoft using the steps below.

[](#registerwithmicrosoftfortheazurecredit)Register with Microsoft for the Azure credit
=======================================================================================

1.  Go to Microsoft's [Getting Started page](https://nonprofit.microsoft.com/en-us/getting-started) for nonprofits.
2.  Begin the registration process by clicking _Register Now_.
3.  Follow the on-screen prompts for providing your information and creating an account.
4.  (Optional) For a little extra help, set up a free online meeting with Microsoft Support to get your Azure account set up.
5.  (Optional) If you already have an Azure account, it is important that you submit a support request to have them merge your Azure accounts (so you can use the credit with your current setup).

[](#nextsteps)Next Steps
========================

Whether or not you qualify for Microsoft's non-profit credit, your next steps will be about the same. Azure hosting includes Windows Server and Azure SQL Server, so you don’t need to worry about obtaining separate licenses. Once your account is set up with Azure, you're ready to start provisioning.

[](#provisionyourservices)Provision Your Services
=================================================

First, create the _resource group_ that you'll use to group all of your Rock services. A resource group is a logical container that holds related resources, like having the files on your computer organized into a folder within a directory. If you need more details, Microsoft has some recommendations on setting up [resource groups](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview#resource-groups). You can name the resource group anything you like, but we recommend something like "rock-rg-production" to ensure it's clear and easy to identify.

Next, through your Azure portal, you'll create your Web VM (virtual machine). We'd like to provide detailed instructions for this, but the steps and screens change often. Choose the resource group created above when prompted. Like the resource group, what you name the Web VM is up to you but we suggest "rock-vm-web-production" or similar. This server is your new Web Host, where you'll configure IIS.

Lastly, you'll follow similar steps to create the Azure SQL server and database. They should be in the same resource group as your Web VM. Again, the specific steps and screens change frequently, which is why we don't document them. We suggest a clear naming convention such as:

*   **Azure SQL Server:** rock-sql-production
*   **Azure SQL Database:** rock-sqldb-production

Existing Licenses
=================

If you already have licenses that you'd like to use, see Azure’s [hybrid use plans](https://azure.microsoft.com/en-us/pricing/hybrid-benefit/). However, keep in mind that we still recommend Azure SQL over a VM running SQL Server.

With the above in place, you're ready to head over to our [Rock Solid Internal Hosting Guide](http://community.rockrms.com/documentation/bookcontent/1/) for instructions on installing Rock.

Need Some Help?
===============

Without certain technical knowledge these processes can be a bit confusing, so it's normal if you're feeling intimidated by all of this. Luckily, we have partners who can help get this all up and running for you. Visit [rockrms.com/partners](https://rockrms.com/partners) for details.

Before you go, don't forget to review the other [Rock guides and manuals](http://community.rockrms.com/documentation/) to ensure you get the most out of your Rock experience.