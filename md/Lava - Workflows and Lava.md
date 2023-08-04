# Workflows and Lava
[View Original Source](https://community.rockrms.com/lava/workflows)

Workflows & Lava
================

Workflows and Lava goes together like peas and carrots.

Attribute Values
----------------

There may be a time when you'd like to retrieve the data identifier for an attribute. This would be helpful in creating links to pages that would need to know which person, group, etc. you are interested in. You can retrieve the unformatted attribute value by appending a RawValue to the attribute syntax. For example, using a merge field of `{{ Workflow | Attribute:'Person','RawValue' }}` would return a person alias GUID since that is how the Person type attribute stores its value.

It's important that you understand the internal types of many of the fields you'll be using. Below is an overview of the internal type for each field provided in Rock.

Field Types[](#fieldtypes)
--------------------------

Below is a listing of each field type available in your workflow, and how it's stored internally.

The last column indicates whether an attribute of a given type can be used to query for properties and attributes. For instance, you can use `{{ Workflow | Attribute:'PersonAttribute','FirstName' }}` since that attribute type represents a full entity. But you can't do something like  
`{{ Workflow | Attribute:'ContentChannelTypesAttribute','Id' }}` since that attribute type only contains a list of GUIDs, and no full entities.

| Field Type | Stored Value | Full Entity? |
| --- | --- | --- |
| Achievement Type | The GUID of the Achievement Type | Yes |
| Address | The GUID of the location associated with the address | Yes |
| Assessment Types | A comma-delimited list of assessment type GUIDs | Yes |
| Asset | A string containing the properties of an asset | No |
| Asset Storage Provider | An asset storage provider's GUID | No |
| Attendance | An attendance record's GUID | Yes |
| Attribute | An attribute's GUID | No |
| Audio File | The audio file's GUID | Yes |
| Audio URL | The URL of the audio file | No |
| Background Check | This is the RecordKey value for Checkr (preceded by an identifier and comma), or the GUID of the file for the Protect My Ministry document | No |
| Badges | A comma-delimited list of badge GUIDs | No |
| Benevolence Request | A benevolence request's GUID | Yes |
| Benevolence Type | A benevolence type's GUID | Yes |
| Binary File | A binary file's GUID | Yes |
| Binary File Type | A binary file type's GUID | Yes |
| Binary File Types | A comma-delimited list of binary file type GUIDs | No |
| Block Template | If the default template is being used then the stored value is the block template's GUID followed by a bar. If a custom template is being used then the stored value is a placeholder GUID followed by a bar, with the content of the block (XAML/Lava) after the bar. | No |
| Boolean | 'True' or 'False' | No |
| Campus | A campus's GUID | Yes |
| Campuses | A comma-delimited list of campus GUIDs | No |
| Captcha | 'True' or 'False' depending on whether or not the person is verified | No |
| Categories | A comma-delimited list of category GUIDs | No |
| Categorized Defined Value | The Id of the selected Defined Value | No |
| Category | A category's GUID | Yes |
| Check List | The GUID for each selected item in the list | No |
| Checkin Configuration Type | The GUID of the Group Type for the selected Checkin Configuration Type | No |
| Code Editor | The text of the code editor | No |
| Color | The rgb string for the color, or the name of the named color | No |
| Color Selector | The hex string for the color (e.g. "#EE7725"). If multiple selection is allowed in the future, a pipe-delimited list of hex colors will be stored (e.g. "#EE7725|#F3F3F3"). | No |
| Communication Preference | The value of the communication preference (e.g. "1" for email, "2" for SMS) | No |
| Communication Template | A communication template's GUID | Yes |
| Comparison | '1' for Equal To, '2' for Not Equal To, '4' for Starts With, '8' for Contains, '16' for Does Not Contain, '32' for Is Blank, '64' for Is Not Blank, '128' for Greater Than, '256' for Greater Than or Equal To, '512' for Less Than, '1024' for Less Than Or Equal To, '2048' for Ends With, '4096' for Between, or '8192' for Regular Expression | No |
| Component | The GUID of the Entity Type for the selected component | Yes |
| Components | A pipe-delimited list of Entity Type GUIDs for the selected components | No |
| Conditional Scale | The value of the provided number | No |
| Connection Activity Type | A connection activity type's GUID | Yes |
| Connection Opportunity | A connection opportunity's GUID | Yes |
| Connection Request | A connection request's GUID | Yes |
| Connection Request Activity | A connection request activity's GUID | Yes |
| Connection State | '0' for Active, '1' for Inactive, '2' for Future Follow Up, or '3' for Connected | No |
| Connection Status | A connection status's GUID | Yes |
| Connection Type | A connection type's GUID | Yes |
| Connection Types | A comma-delimited list of connection type GUIDs | No |
| Content Channel | A content channel's GUID | Yes |
| Content Channel Item | A content channel item's GUID | No |
| Content Channel Type | A content channel type's GUID | Yes |
| Content Channel Types | A comma-delimited list of content channel type GUIDs | No |
| Content Channels | A comma-delimited list of content channel GUIDs | No |
| Currency | A decimal value | No |
| Data Entry Requirement Level | '1' for Optional, '2' for Required, or '3' for Hidden | No |
| Data View | A data view's GUID | Yes |
| Data Views | A comma-delimited list of GUIDs for each selected data view | No |
| Date | The selected date formatted as 'YYYY-MM-DDTHH:MM:SS' or 'CURRENT:#' where # represents a day offset from the current day. To set this using Lava you can use the following: `{{ 'Now' | Date:'yyyy-MM-ddTHH:mm:ss' }}` . | No |
| Date Range | Two comma-delimited dates where first date is lower value, and second date is upper value formatted as 'YYYY-MM-DDTHH:MM:SS,YYYY-MM-DDTHH:MM:SS' To set this using Lava you can use the following: `{{ 'Now' | Date:'yyyy-MM-ddTHH:mm:ss' }}` | No |
| Date Time | The selected date formatted as 'YYYY-MM-DDTHH:MM:SS' or 'CURRENT:#' where # represents a minute offset from the current time. To set this using Lava you can use the following: `{{ 'Now' | Date:'yyyy-MM-ddTHH:mm:ss' }}` | No |
| Day of Week | 0' for Sunday, '1' for Monday, '2' for Tuesday, '3' for Wednesday, '4' for Thursday, '5' for Friday, or '6' for Saturday | No |
| Days of Week | A comma-delimited list of Day of Week numbers (see previous) | No |
| Decimal | A decimal value | No |
| Decimal Range | Two comma-delimited decimal values where first number is lower value, and second number is upper value | No |
| Defined Type | A defined type's GUID | Yes |
| Defined Value | A comma-delimited list of defined value GUIDs (if attribute is not configured for multiple values, there should only be one GUID) | No |
| Defined Value Range | Two comma-delimited GUID values where first GUID is the lower defined value GUID, and second GUID is the upper defined value GUID | No |
| Document Type | The document type's Id. If multiple document types are selected, a comma-delimted list of document type Ids. | No |
| Email | An email address | No |
| Email Template | The value of the textbox | No |
| Encrypted Text | The text value encrypted using Rock's Encryption.EncryptString() static helper method | No |
| Entity | A pipe-delimited GUID and integer, where the GUID is an entity type's GUID, and the integer is the Id of the selected entity | Yes |
| Entity Type | An entity type's GUID | Yes |
| Event Calendar | An event calendar's GUID | Yes |
| Event Item | An event item's GUID | Yes |
| File | The file's GUID | Yes |
| Filter Date | The value of the textbox. This field type is intended to only be used for report filters when specifying date comparisons. | No |
| Financial Account | A financial account's GUID | Yes |
| Financial Accounts | A comma-delimited list of financial account GUIDs | No |
| Financial Gateway | A financial gateway's GUID | Yes |
| Financial Statement Template | A financial statement template's GUID | Yes |
| Gender | The value of a gender (e.g. Male returns "1") | No |
| Group | A group's GUID | Yes |
| Group And Role | Three pipe-delimited GUID values where first GUID is a group type's GUID, second GUID is a group's GUID, and third GUID is a group type role's GUID | No |
| Group Location Type | One of the configured group type's location type defined value's GUID | No |
| Group Member | A GroupMember Record's GUID | Yes |
| Group Member Requirement | A GroupMemberRequirement Record's GUID | Yes |
| Group Role | A group type role's GUID | Yes |
| Group Type | A group type's GUID | Yes |
| Group Type Group | Two pipe-delimited GUID values where first GUID is a group type's GUID, and second GUID is a group's GUID | No |
| Group Types | A comma-delimited list of group type GUIDs | No |
| HTML | The full HTML markup for the HTML provided | No |
| Image | The GUID of the image file | Yes |
| Integer | An integer value | No |
| Integer Range | The provided start and end values for the range, separated by a comma | No |
| Interaction Channel | An interaction channel's GUID | Yes |
| Interaction Channel Interaction Component | The GUID of the Interaction Channel and the GUID of the Interaction Component, separated by a pipe | No |
| Interaction Channels | A comma-delimited list of interaction channel GUIDs | No |
| Key Value List | A pipe-delimited list of two caret-delimited values where first is the selected key, and second is the selected value (ex: 'key1^value1|key2^value2|key3^value3'). If attribute is configured to use a defined type, the values should be the Ids of the selected defined values | No |
| Label | The label's GUID | Yes |
| Lava | The output/result of the provided Lava | No |
| Lava Commands | A comma-delimited list of the names of the selected Lava commands | No |
| Location | A location's GUID | Yes |
| LocationList | A location's GUID | Yes |
| Markdown | The markdown text | No |
| Matrix | A matrix's GUID | No |
| Media Element | A media element's GUID | Yes |
| Media Watch | A number representing the percentage of the Media Element that has been watched | No |
| Memo | The value of the textbox | No |
| Merge Template | A merge template's GUID | No |
| Metric | The metric's GUID | Yes |
| Metric Categories | A comma-delimited list of two pipe-delimited GUIDs where the first GUID is a metric's GUID, and the second is a category's GUID (ex: MetricGUID1|CategoryGUID1,MetricGUID2|CategoryGUID2) | No |
| Metric Entity | Five pipe-delimited values where first is the metric's GUID, second is the entity's Id, third is a 'True' or 'False' indicating if metric should be gotten from page context, fourth is a 'True' or 'False' indicating if multiple values should be combined, and final value is a metric category's GUID (ex: 'MetricGuid|EntityId|False|False|CategoryGuid') | No |
| Metrics | A comma-delimited list of metric GUIDs | No |
| Mobile Navigation Action | The action Type, the Pop Count and the Page Guid. Note that this field type is not meant to be used directly in places like workflows or person attributes, and is intended for use as a block setting. | No |
| Month Day | The selected month and day, formatted as: M/d | No |
| Multi-Select | A comma-delimited list of the values (e.g. 1,2,3) of the selected items | No |
| Note Type | A note type's GUID | Yes |
| Note Types | A comma-delimited list of GUIDs for each selected type of note | No |
| Page Reference | Value is in format 'Page.Guid,PageRoute.Guid' but only 'Page.Guid' is required. | No |
| Persisted Dataset | The persisted dataset's GUID | No |
| Person | A person alias GUID | Yes |
| Person Badges | A comma-delimited list of person badge GUIDs | No |
| Phone Number | A formatted phone number | No |
| Range Slider | The integer value of the selected number | No |
| Rating | The integer value of the selected rating (e.g. four stars is stored as "4") | No |
| Registration Instance | The registration instance's GUID | No |
| Registration Template | A registration template's GUID | No |
| Registration Templates | A comma-delimited list of registration template GUIDs | No |
| Registry Entry | The values for the volume, page and line of the registry entry, separated by commas (e.g. "2,39,7") | No |
| Reminder Type | The GUID of the Reminder Type | Yes |
| Reminder Types | A comma-delimited list of the GUIDs of the Reminder Types | No |
| Remote Auths | A pipe-delimited list of entity type GUIDs (entity types should only be active authentication components that require remote authentication) | No |
| Report | A report's GUID | Yes |
| Schedule | A schedule's GUID | Yes |
| Schedules | A comma-delimited list of schedule GUIDs | No |
| Security Role | A security role (group) GUID | Yes |
| Sequence | The value of the textbox | No |
| Signature Document Template | A signature document template's GUID | Yes |
| Single-Select | The value (e.g. "1") of the selected item | No |
| Site | A site's Id | Yes |
| Sliding Date Range | Five pipe-delimited values where first value is the mode ('All', 'Last', 'Current', 'DateRange', 'Previous', 'Next', or 'Upcoming'), second value is number of time units (may be blank depending on mode), third value is the time units ('Hour', 'Day', 'Week', 'Month', or 'Year'), fourth value is start date if mode is Date Range, fifth value is end data if mode is Date Range (ex: 'DateRange|||5/22/2016 12:00:00 AM|5/24/2016 12:00:00 AM' or 'Previous|3|Week||' ) | No |
| Social Media Account | The URL or text string provided for the social media account | No |
| SSN | A string representing the encrypted value of a social security number | No |
| Step | A step's GUID | Yes |
| Step Program | A step program's GUID | Yes |
| Step Program Step Status | A step program's GUID and a step status GUID, pipe-delimited | No |
| Step Program Step Type | A step program's GUID and a step type's GUID, pipe-delimited | No |
| Streak Type | A streak type's GUID | Yes |
| Structure Content Editor | Code representing the contents of the editor | No |
| System Communication | A system communication's GUID | No |
| System Email | A system email's GUID | Yes |
| Text | The value of the textbox | No |
| Time | A timespan value formatted as 'd.hh:mm:ss.fff' | No |
| Time Zone | The worded description of a time zone (e.g. "US Mountain Standard Time") | No |
| Url Link | The text of the Url | No |
| Value Filter | A string representing the expression type and filter conditions | No |
| Value List[](#valuelist) | A pipe-delimited list of values (ex: 'value1|value2|value3'). If attribute is configured to use a defined type, the values should be the ID of the selected defined values | No |
| Video File | A video file's GUID | Yes |
| Video Url | A video file's URL, or a text string provided | No |
| Workflow | A workflow's GUID | Yes |
| Workflow Activity | A workflow activity type's GUID | Yes |
| Workflow Attribute | The key of the selected attribute | Yes |
| Workflow Text Or Attribute | The contents of Text field or the GUID of selected attribute | No |
| Workflow Type | A workflow type's GUID | Yes |
| Workflow Types | A comma-delimited list of workflow type GUIDs | No |