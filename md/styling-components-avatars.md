# 
from:styling-components-avatars.html

Avatars
-------

Rock's avatar feature provides the ability to create unique avatar images for each person record within the system.

Rock's avatar feature provides the ability to create unique avatar images for each person record within the system. This feature allows churches to easily identify members and visitors by providing a visual representation of each person, making it easier to connect with them and personalize interactions. The avatar images generated by Rock RMS are dynamic and customizable, allowing churches to choose from a range of styles and settings to best fit their needs. Enough talk though, let's look at how it works.

**Note:** The avatar feature requires Rock v15 or later.

### Types of Avatars

There are two primary types of avatars: icons and initials. Each of these types are described below with details of each of their options.

![](/GetAvatar.ashx?Style=initials&Text=TD)  
**Initials Avatar**

![](/GetAvatar.ashx?Style=icon)  
**Icon Avatar**

#### Common Settings

All avatars share several settings. These settings are outlined below.

![](/GetAvatar.ashx?Style=initials&Text=TD)  
![](/GetAvatar.ashx?Style=icon)

**Style** The style of the icon to use.
```
_Samples_ 
    <img src="/GetAvatar.ashx?Style=initials&Text=TD" />
    <img src="/GetAvatar.ashx?Style=icon" />
```

![](/GetAvatar.ashx?Style=initials&Text=TD)

**Size** The size parameter determines how large the resulting image file will be. The default value is 128px. It's best not to change this unless you need a larger avatar as the results are cached. Keep in mind that you'll want your results file to be 2x the size of the image to support high DPI displays.
```
_Sample_ <img src="/GetAvatar.ashx?Style=initials&Text=TD&Size=40" />
```

![](/GetAvatar.ashx?PhotoId=52453)

**PhotoId** In most cases you'll want to display the individual's photo when one exists. To be able to do that we'll need to pass in the PhotoId of the individual.
```
_Sample_ <img src="/GetAvatar.ashx?PhotoId=52453" />
```

![](/GetAvatar.ashx?BackgroundColor=ee7625&Text=TD)

**BackgroundColor** The background color to use when there is no profile photo. If you only provide the background color without the foreground color a matching foreground color will be calculated for you. _Be sure to not include the # symbol in the color._
```
_Sample_ <img src="/GetAvatar.ashx?BackgroundColor=ee7625&Text=TD" />
```

![](/GetAvatar.ashx?ForegroundColor=ee7625&Text=TD)

**ForegroundColor** The foreground color to use when there is no profile photo. If you only provide the foreground color without the background color a matching background color will be calculated for you. _Be sure to not include the # symbol in the color._
```
_Sample_ <img src="/GetAvatar.ashx?ForegroundColor=ee7625&Text=TD" />
```

![](/GetAvatar.ashx?Radius=8&Text=TD&Size=40)  
![](/GetAvatar.ashx?Radius=circle&Text=TD&Size=40)

**Radius** The border radius to use for rounding the corners. Use the value of 'circle' to make this a perfect circle. In most cases you'll want to do this with CSS, but in certain use cases like HTML email this is a handy option.
```
_Samples_ 
    <img src="/GetAvatar.ashx?Radius=8&Text=TD&Size=40" />
    <img src="/GetAvatar.ashx?Radius=circle&Text=TD&Size=40" />
```

![](/GetAvatar.ashx?PhotoId=52453)

**PersonId** If you pass in a person Id to the avatar it will provide all of the needed configuration for you (gender, photo id and age classification). This is a slower way of loading the avatar as it does need to query the database on each load (caching is only considered after the database load to ensure newer profile images are respected).
```
_Sample_ <img src="/GetAvatar.ashx?PersonId=5" />
```

![](/GetAvatar.ashx?PhotoId=52453)

**PersonGuid** If you pass in a person Guid to the avatar it will provide all of the needed configuration for you (gender, photo id and age classification). This is a slower way of loading the avatar as it does need to query the database on each load (caching is only considered after the database load to ensure newer profile images are respected).
```
_Sample_ <img src="/GetAvatar.ashx?PersonGuid=8e0de326-4d3f-41e8-841a-c69750ec14aa" />
```

![](/GetAvatar.ashx?Text=TD)

**RefreshItemCache** Set this value to true to clear the server cache for the specific avatar configuration. This requires that the current person is in either the \[RSR- Rock Administrators\] or \[RSR - Web Administrators\] roles.
```
_Sample_ <img src="/GetAvatar.ashx?Style=initials&Text=TD&RefreshItemCache=true" />
```

![](/GetAvatar.ashx?Text=TD)

**RefreshCache** Set this value to true to clear the entire avatar server cache. This requires that the current person is in either the \[RSR- Rock Administrators\] or \[RSR - Web Administrators\] roles.
```
_Sample_ <img src="/GetAvatar.ashx?Style=initials&Text=TD&RefreshCache=true" />
```

#### Initials Avatar Settings

Below are settings for avatars using initials.

![](/GetAvatar.ashx?Text=SM)

**Text** This is the text to use for the initials. Only the first two characters will be use..
```
_Sample_ <img src="/GetAvatar.ashx?Text=SM" />
```

#### Icon Avatar Settings

Below are settings for avatars using the icon style.

![](/GetAvatar.ashx?Style=icon&Gender=0)  
![](/GetAvatar.ashx?Style=icon&Gender=1)  
![](/GetAvatar.ashx?Style=icon&Gender=2)

**Gender** This determines what gender icon to show.
```
_Samples_ 
    <img src="/GetAvatar.ashx?Style=icon&Gender=0" /> 
    _Unknown_
    <img src="/GetAvatar.ashx?Style=icon&Gender=1" /> 
    _Male_
    <img src="/GetAvatar.ashx?Style=icon&Gender=2" /> 
    _Female_
```

![](/GetAvatar.ashx?Style=icon&Gender=1&AgeClassification=0)  
![](/GetAvatar.ashx?Style=icon&Gender=1&AgeClassification=1)  
![](/GetAvatar.ashx?Style=icon&Gender=1&AgeClassification=2)

**Age Classification** This determines what age classification the icon should be.
```
_Samples_ 
    <img src="/GetAvatar.ashx?Style=icon&Gender=1&AgeClassification=0" /> 
    _Unknown_
    <img src="/GetAvatar.ashx?Style=icon&Gender=1&AgeClassification=1" /> 
    _Adult_
    <img src="/GetAvatar.ashx?Style=icon&Gender=1&AgeClassification=2" /> 
    _Child_
```

![](/GetAvatar.ashx?Style=icon&RecordTypeId=1)  
![](/GetAvatar.ashx?Style=icon&RecordTypeId=2)

**RecordTypeId** This displays a different icon for people and businesses. You only need to provide this if you think you will have businesses in your data. _Note the your values for RecordTypeId will be different from server to server._
```
_Samples_ 
    <img src="/GetAvatar.ashx?Style=icon&RecordTypeId=1" /> _Person_
    <img src="/GetAvatar.ashx?Style=icon&RecordTypeId=2" /> _Business_
```

#### Tips

Below are some tips to keep in mind as you work with avatars.

1.  For simplicity the Person model's PhotoUrl provides you the proper URL for an individual. You can customize this URL by appending additional parameters to it.
2.  If no color (background or foreground) is provided a random color will be used. This will mean that each avatar will have a different color.
3.  The images will be set to cache for 7 days on the client.
4.  Keep in mind that the avatars are cached on the server based on the parameters you provide in the query string. Limit the numnber of unique configurations to reduce the number of stored files. For example it's best not to provide a large number of different sizes of avatars. For the most part use the default 128px size.