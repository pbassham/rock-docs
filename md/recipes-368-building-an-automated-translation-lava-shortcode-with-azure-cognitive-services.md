# 
from:recipes-368-building-an-automated-translation-lava-shortcode-with-azure-cognitive-services.html

![Photo of Bill Deitrick](/GetAvatar.ashx?PhotoId=52324&AgeClassification=Adult&Gender=Male&RecordTypeId=1&Text=BD&w=100&h=100)

[5](/login?returnurl=/community/recipes/368/building-an-automated-translation-lava-shortcode-with-azure-cognitive-services "Login to like a recipe")

Building an Automated Translation Lava Shortcode with Azure Cognitive Services
==============================================================================

*   Shared by **[Bill Deitrick](/profile/e04ac108-e8c0-4c03-b228-1a6283e9a999)**, [BEMA Software Services](https://community.rockrms.com/organizations/223f0496-a9a1-4a04-8f3e-e4c548ae813f)
*   3 months ago

12.0 Communications, Web Advanced

The Challenge
=============

Translating Rock websites into the user's language has long been possible using third-party services. However, the traditional approach doesn't fit every scenario, such as inside Rock mobile apps and email or SMS communications sent from Rock. This approach to automated translation can help fill some of those gaps.

The Solution
============

Using a combination of Azure Cognitive Services, a Lava shortcode, and a custom caching table in the database, it is possible to build a Lava shortcode to automate text translation anywhere Lava can be run. The Cognitive Services API supports the translation of both HTML and text, so you can translate plain text or whole sections of formatted content (HTML translation keeps images, formatting, etc. intact).  

Cognitive Services Translator
-----------------------------

[Azure Cognitive Services Translator](https://azure.microsoft.com/en-us/products/cognitive-services/translator) is Microsoft's automated translation API offered as part of the Cognitive Services family of tools. Translation on the Pay-as-you-Go tier is relatively inexpensive, at $10 per million characters translated per month. A free tier offers up to 2 million translated characters per month, though a paid tier is best for production use to make sure your translation service doesn't stop working unexpectedly.  

Microsoft provides instructions for deploying a Translator resource on the [Microsoft Learn site](https://learn.microsoft.com/en-us/azure/cognitive-services/Translator/create-translator-resource).

There are many other translation API products, but the Azure product is relatively simple to use and, if applicable, can be covered by your church's Azure Sponsorship credits.

Setting it Up
=============

Global Attributes
-----------------

To set up the shortcode, you'll first need to create global attributes to point to your Translator resource deployed in Azure. 

Create a global attribute called "Cognitive Services Translator Key" to store the API key for your translator resource. Ensure the key matches the value in the screenshot below.  
![Snag_34f7528.png](/Content/RockExternal/Users/billdeitrick-bema/Snag_34f7528.png)

Next, create a global attribute called "Cognitive Services Translator Region", again matching the key shown in the image below:  
![Snag_3523fd1.png](/Content/RockExternal/Users/billdeitrick-bema/Snag_3523fd1.png)

Populate these attributes with your Translator API Key and region. You can find these values in the Azure portal, as described in [Microsoft's Quickstart article](https://learn.microsoft.com/en-us/azure/cognitive-services/translator/quickstart-translator?tabs=csharp).

Caching Table
-------------

The shortcode we will create caches the translated text while it is actively being referenced. This reduces cost since we pay for translation by the character and improves performance.

IMPORTANT: Database modifications are not recommended if you do not have experience with SQL. Always back up your database, especially when making schema changes.

The following SQL will create the caching table in your database:  

```
CREATE TABLE \[\_com\_bemaservices\_TranslationCache\]
(
    \[ContentHash\]    VARBINARY(32) NOT NULL,
    \[TranslatorCode\] NVARCHAR(2)    NOT NULL,
    \[LastDisplayed\]  DATE           NOT NULL,
    \[Translation\]    NVARCHAR(MAX)
)

CREATE UNIQUE INDEX \[UX\_com\_bemaservices\_TranslationCache\]
    ON \[\_com\_bemaservices\_TranslationCache\] (\[ContentHash\], \[TranslatorCode\])

```

Shortcode
---------

The shortcode does most of the heavy lifting, translating the supplied text if it is not stored in the cache or retrieving it from the cache (and updating the time it was last accessed) if it is cached.  
  
Determining the output language is an interesting consideration. Following the logic below, we accept the "to" argument as the destination language (by default we assume we're translating from English, unless a "from" argument indicating otherwise is provided. If a "to" argument is not provided, we attempt to determine the best person object to reference (Person is useful in communication and CurrentPerson in most other contexts). We then pull from a defined type attribute set on the person profile; on that defined type attribute, we specify a "TranslatorCode" attribute that specifies the language code in the format we need to use for the translation API. You could set up various ways to collect and set such an attribute on person profiles, or you might use different logic to determine the appropriate destination language.  

Note that Microsoft makes the list of languages for Translator available via a GET request to this endpoint: https://api.cognitive.microsofttranslator.com/languages?api-version=3.0&scope=translation  

Create your shortcode using the settings shown below; description, documentation, and shortcode markup are provided below the screenshot.  
![Snag_832d3fc.png](/Content/RockExternal/Users/billdeitrick-bema/Snag_832d3fc.png)

Description
-----------

```
A shortcode that, given a block of text, will translate it from English to the desired language. This looks at the language preference on the person's profile in Rock or can optionally have a specific language provided.
```

Documentation
-------------

```
This is a block shortcode, so call it like this:  
{\[ translate \]}Hello World{\[ endtranslate \]}  
  
The shortcode can also handle properly-formed HTML, which will be returned with the HTML intact:  
{\[ translate \]}<h1>Chapter 2</h1><p>"A wizard is never late, Frodo Baggins. Nor is he early. He always arrives precisely when he means to."</p>{\[ endtranslate \]}  
  
There are two optional parameters. A "from" parameter specifies the source language (this defaults to English). A "to" parameter specifies the destination language. If they are identical, no translation will be performed. If no "to" language is specified, the Language Preference from the Current Person's profile will be used (defaulting to English if none set). The language can be found by making a GET request to: https://api.cognitive.microsofttranslator.com/languages?api-version=3.0&scope=translation  
  
The Language Preference has a "Translator Code" field that allows entering the corresponding value from the cognitive services translation API's language list.
```

Shortcode Markup
----------------

```
{%- if to == null or to == empty -%}
    {%- if Person -%}
       {%- assign person = Person -%}
    {%- else -%}
       {% assign person = CurrentPerson %}
    {%- endif -%}
    {%- assign to = person | Attribute:'Language','Object' | Attribute:'TranslatorCode' | Default:'en' -%}
{%- endif -%}

{%- if from == to -%}
    {{- blockContent -}}
{%- else -%}
    {%- comment %}Lava webrequest doesn't handle the single quote character in the payload. We cheat by replacing it with a right single quote character that the translation service is happy with.{% endcomment -%}
    {%- capture payload -%}
    \[
        {
            "Text": {{ blockContent | Replace:"'",'’' | ToJSON }}
        }
    \]
    {%- endcapture -%}

    {%- sql return:'cachedResult' -%}
        DECLARE @Hash VARBINARY(32) = HASHBYTES('SHA2\_256', '{{ payload | SanitizeSql }}')
        DECLARE @TranslatorCode NVARCHAR(2) = '{{ to }}'
        
        SELECT
            \*
        FROM \[\_com\_bemaservices\_TranslationCache\] tc
        WHERE
            tc.\[ContentHash\] = @Hash
            AND tc.\[TranslatorCode\] = @TranslatorCode
    {%- endsql -%}
    
    {%- assign cacheDate = cachedResult | First | Property:'LastDisplayed' | AsDateTime -%}
    {%- assign today = 'Now' | Date:'MM/dd/yyyy 00:00' | AsDateTime -%}

    {%- if cachedResult == null or cachedResult == empty -%}
        {%- webrequest url:'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from={{ from }}&to={{ to }}&textType=html' headers:'Ocp-Apim-Subscription-Key^{{ 'Global' | Attribute:'CognitiveServicesTranslatorKey' }}|Ocp-Apim-Subscription-Region^{{ 'Global' | Attribute:'CognitiveServicesTranslatorRegion' }}' method:'POST' body:'{{ payload }}' requestcontenttype:'application/json' -%}
        {%- capture output -%}{{ results | First | Property:'translations' | First | Property:'text' }}{%- endcapture -%}
        {%- endwebrequest -%}
    {%- else -%}
        {%- capture output -%}{{ cachedResult | First | Property:'Translation' }}{%- endcapture -%}
    {%- endif -%}

    {%- if cacheDate != today -%}
        {%- sql -%}
            DECLARE @Hash VARBINARY(32) = HASHBYTES('SHA2\_256', '{{ payload | SanitizeSql }}')
            DECLARE @TranslatorCode NVARCHAR(2) = '{{ to }}'
            DECLARE @LastDisplayed DATE = TRY\_CAST('{{ today | Date:'yyyy-MM-dd' }}' AS DATE)
            DECLARE @Translation NVARCHAR(MAX) = N'{{ output | SanitizeSql }}'
            
            MERGE \[\_com\_bemaservices\_TranslationCache\] AS \[TARGET\]
            USING (
                SELECT
                      \[ContentHash\]    = @Hash
                    , \[TranslatorCode\] = @TranslatorCode
                    , \[LastDisplayed\]  = @LastDisplayed
                    , \[Translation\]    = @Translation
                ) AS \[SOURCE\]
            ON \[TARGET\].\[ContentHash\] = \[SOURCE\].\[ContentHash\] AND \[TARGET\].\[TranslatorCode\] = \[SOURCE\].\[TranslatorCode\]
            WHEN NOT MATCHED THEN
                INSERT ( \[ContentHash\], \[TranslatorCode\], \[LastDisplayed\], \[Translation\] )
                VALUES
                    ( \[SOURCE\].\[ContentHash\], \[SOURCE\].\[TranslatorCode\], \[SOURCE\].\[LastDisplayed\], \[SOURCE\].\[Translation\] )
            WHEN MATCHED THEN
                UPDATE
                SET
                    \[TARGET\].\[LastDisplayed\] = \[SOURCE\].\[LastDisplayed\]
                ;
            SELECT 1
        {%- endsql -%}
    {%- endif -%}
    {{- output -}}
{%- endif -%}
```

Cleanup Job
===========

We could keep all translated text in the database, but this is wasted space if the translated text is no longer being used. Because the shortcode will update a timestamp in the cache table to the last day a particular chunk of text was translated, we can use a simple SQL job that runs periodically to clean up stale translations. The below SQL will clear out any translation records from the cache table that have not been accessed in 60 days.

```
DECLARE @CacheLifetimeInDays INT = 60  
DECLARE @Now DATETIME = CAST(SYSDATETIMEOFFSET() AT TIME ZONE 'Eastern Standard Time' AS DATETIME)  
  
DELETE  
FROM  
    \[\_com\_bemaservices\_TranslationCache\]  
WHERE  
    DATEDIFF(DAY, \[LastDisplayed\], @Now) > @CacheLifetimeInDays
```

If translated text you've cleared from the cache needs to be translated again, this is no problem--the shortcode simply sends the text off to the translation API and caches it again.  

Wrapping Things Up  

=====================

This article should get you started on the path to building your own translation shortcode using Azure Cognitive Services, and you could certainly use similar techniques with another service of your choosing. This approach works well for automated translation of communications and can also be used in Rock mobile apps anywhere you can render server-side Lava. 

You might also find a clever way to combine this with some of the techniques described in Jon Corey's excellent [Bilingual Workflow Forms](https://community.rockrms.com/recipes/359/bilingual-workflow-forms) recipe.

Special thanks to Braden Cohen and Ben Murphy Rocket Chat's #mobile channel for bouncing around ideas that lead to this recipe, and to Joanna Burress at Grace Church!

The Azure Cognitive Services logo is the property of Microsoft.

Example Output
==============

This screenshot shows example output using the shortcode.  
![Snag_87640e9.png](/Content/RockExternal/Users/billdeitrick-bema/Snag_87640e9.png)  

[![](https://rockrms.imgix.net/https%3a%2f%2fwww.rockrms.com%3a443%2fGetImage.ashx%3fid%3d53268?auto=format&fit=crop&max-w=1000&max-h=1200&s=2f574ff73fd41246403262c2161b7ead)](https://rockrms.imgix.net/https%3a%2f%2fwww.rockrms.com%3a443%2fGetImage.ashx%3fid%3d53268?&s=bcb5fb31938375c2e4d0d45724aff9ea)