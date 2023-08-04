# Color Filters
[View Original Source](https://community.rockrms.com/lava/filters/color-filters)

Color Filters
=============

These filters allow you to dynamically edit colors. This allows you to make well designed pages or sections of pages with just a single base color. The color you provide can be in several different formats. These include:

*   'red' - HTML color name
*   '#ee7625' - Hexadecimal format
*   'rgba( 238, 118, 37, 0.8 )' - RGBA format

 [](#adjusthue)

AdjustHue
=========

Show Details

Server: v8.5 Mobile: v1.0

Adjusts the hue by the specified percentage (10%) or degrees (10deg).

**Additional Details**

**Example:**

```
"Item": {
   ...
   "Attributes":{ 
      BackgroundColor: '#ee7625',
    }
}
```

```
{{ Item | Attribute:'BackgroundColor' | AdjustHue:'20%' }}
```

```
#74ed25
```

 [](#darken)

Darken
======

Show Details

Server: v8.5 Mobile: v1.0

Lightens the color by a provided percentage.

**Additional Details**

**Example:**

```
"Item": {
   ...
   "Attributes":{ 
      BackgroundColor: '#ee7625',
    }
}
```

```
{{ Item | Attribute:'BackgroundColor' | Darken:'20%' }}
```

```
#a0480c
```

 [](#desaturate)

Desaturate
==========

Show Details

Server: v8.5 Mobile: v1.0

Desaturates (mutes) the color by a provided percentage.

**Additional Details**

**Example:**

```
"Item": {
   ...
   "Attributes":{ 
      BackgroundColor: '#ee7625',
    }
}
```

```
{{ Item | Attribute:'BackgroundColor' | Desaturate:'20%' }}
```

```
#d67a3c
```

 [](#fadein)

FadeIn
======

Show Details

Server: v8.5 Mobile: v1.0

Decreases the opacity level by the given percentage. This makes the color less transparent (opaque).

**Additional Details**

**Example:**

```
"Item": {
   ...
   "Attributes":{ 
      BackgroundColor: 'rgba( 238, 118, 37, 0.8 )',
    }
}
```

```
{{ Item | Attribute:'BackgroundColor' | FadeIn:'20%' }}
```

```
rgba( 238, 118, 37, 1 )
```

 [](#fadeout)

FadeOut
=======

Show Details

Server: v8.5 Mobile: v1.0

Increases the opacity level by the given percentage. This makes the color more transparent.

**Additional Details**

**Example:**

```
"Item": {
   ...
   "Attributes":{ 
      BackgroundColor: '#ee7625',
    }
}
```

```
{{ Item | Attribute:'BackgroundColor' | FadeOut:'20%' }}
```

```
rgba( 238, 118, 37, 0.8 )
```

 [](#grayscale)

Grayscale
=========

Show Details

Server: v8.5 Mobile: v1.0

Returns the color in greyscale.

**Additional Details**

**Example:**

```
"Item": {
   ...
   "Attributes":{ 
      BackgroundColor: '#ee7625',
    }
}
```

```
{{ Item | Attribute:'BackgroundColor' | Grayscale }}
```

```
#898989
```

 [](#lighten)

Lighten
=======

Show Details

Server: v8.5 Mobile: v1.0

Lightens the color by a provided percentage.

**Additional Details**

**Example:**

```
"Item": {
   ...
   "Attributes":{ 
      BackgroundColor: '#ee7625',
    }
}
```

```
{{ Item | Attribute:'BackgroundColor' | Lighten:'20%' }}
```

```
#f5b183
```

 [](#mix)

Mix
===

Show Details

Server: v8.5 Mobile: v1.0

Mixes the specified color with the input color with the given amount.

**Additional Details**

**Example:**

```
"Item": {
   ...
   "Attributes":{ 
      BackgroundColor: '#ee7625',
    }
}
```

```
{{ Item | Attribute:'BackgroundColor' | Mix:'#4286f4','20%' }}
```

```
#cc794e
```

 [](#saturate)

Saturate
========

Show Details

Server: v8.5 Mobile: v1.0

Saturates (makes the color richer) the color by a provided percentage.

**Additional Details**

**Example:**

```
"Item": {
   ...
   "Attributes":{ 
      BackgroundColor: '#ee7625',
    }
}
```

```
{{ Item | Attribute:'BackgroundColor' | Saturate:'20%' }}
```

```
#fe7214
```

 [](#shade)

Shade
=====

Show Details

Server: v8.5 Mobile: v1.0

Shades (adds black) the specified color by the specified amount.

**Additional Details**

**Example:**

```
"Item": {
   ...
   "Attributes":{ 
      BackgroundColor: '#ee7625',
    }
}
```

```
{{ Item | Attribute:'BackgroundColor' | Shade:'20%' }}
```

```
#be5e1e
```

 [](#tint)

Tint
====

Show Details

Server: v8.5 Mobile: v1.0

Tints (adds white) the specified color by the specified amount.

**Additional Details**

**Example:**

```
"Item": {
   ...
   "Attributes":{ 
      BackgroundColor: '#ee7625',
    }
}
```

```
{{ Item | Attribute:'BackgroundColor' | Tint:'20%' }}
```

```
#f19151
```