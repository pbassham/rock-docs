# Calendar Events
[View Original Source](https://community.rockrms.com/lava/commands/calendar-events)

Calendar Events

v12.0


========================

Working with calendars can be tricky as recurring events are defined as iCal patterns. While these patterns are very powerful it is difficult to query for upcoming events in a performant way using SQL/Entity Commands.

A cousin of the 'Entity' commands, this Lava command will provide a summary list of `EventScheduledInstances` from the provided calendar.

The Basics
----------

```
{% calendarevents calendarid:'1' audienceids:'151,152' %}
    {% for item in EventScheduledInstances %}
        {{ item.Name }} 
        on {{ item.Date }}
        at {{ item.Time }}
        for {{ item.AudienceNames | Join:', ' }}   
        Contact: {{ item.EventItemOccurrence.ContactEmail }}
    {% endfor %}
{% endcalendarevents %}
```

By specifying the calendar ID, as well as a few other optional values, you can get an array of summary `EventScheduledInstances` items. Each could contain:

*   EventItemOccurrence - the typical model (as seen in the model map)
*   Name
*   DateTime
*   Date
*   Time
*   EndDate
*   EndTime
*   Campus
*   Location
*   LocationDescription
*   Description
*   Summary
*   OccurrenceNote
*   DetailPage
*   CalendarNames
*   AudienceNames

Parameters
----------

*   [calendarid](#calendarid)
*   [maxoccurrences](#maxoccurrences)
*   [daterange](#daterange)
*   [audienceids](#audienceids)
*   [campusids](#campusids)

Calendar ID 
------------

_Required:_ The id of event to get the occurrences for.

Max Occurrences
---------------

_Optional:_ Default 100. The maximum number of event occurrences that should be returned.

Date Range
----------

_Optional:_ Leaving this blank will result in today and all future items being returned (up to the max occurrences). The date range that should be considered. The pattern should be 'Xd' where X is the number of units followed by the unit identifier: `d` = days, `w` = weeks, `m` = months.

```
daterange:'4w'
```

Audience IDs
------------

_Optional:_ Default none. A comma separated list of defined value audience IDs (from the _Audience Type_ defined type) to filter on.

Campus IDs

v13.0


-------------------

_Optional:_ Default none. A comma separated list of Campus IDs to filter on. Items that are marked 'All Campus' will be included.