# v13 - ASP.NET 4.7.2 Instructions
[View Original Source](https://community.rockrms.com/developer/changelog/rockv13aspnet472)

    

**Error**

Special Instructions / Cheatsheet for Switching between a v4.7.2 and a v4.5.2 Branch
------------------------------------------------------------------------------------

There are a few extra steps that developers will need to do when switching between a 4.7.2 branch and 4.5.2 branch.

1.  Close Solution
2.  Delete Packages folder
3.  Delete \\Bin folder
4.  Restore Source-Controlled /Bin (.refresh, etc) files that got deleted in step 3
    
    Note: If you are switching _to_ 4.7.2 and have old/incorrect DLLs from other projects in source control that are in conflict with 4.7.2, you need to resolve that before you re-add the old/incorrect items back from source control.
    
5.  Open Solution
6.  Restore NuGet Packages (if your Visual Studio settings don't do it automatically)
7.  Rebuild Solution

Plugin Solution v4.7.2 Update
-----------------------------

For compatiblity with Rock v13 and ASP.NET 4.7.2, you should perform the following steps to convert your solution's projects:

1.  Change each solution project's **Target framework:**to ".NET Framework 4.7.2"
2.  Save, close and quit Visual Studio
3.  Then perform the "Special Instructions" steps from the previous section.
4.  Lastly, perform a clean build and run in order to test all your plugins are working properly.

AppVeyor (new; July 2021)
-------------------------

If you use AppVeyor for any kind of automated build/deploy, you may want to look at these changes we made for the v13 changes for asp.net 4.7.2. We have simplified the "Init Script" (`Cmd`) under the **Environment** tab of the project settings to have only:

```
git config --global core.autocrlf true

```

And, on the "Build" tab, instead of selecting the "MsBuild" option, we are now using the "Script" option with the following commands _(but adjust the path to the rock.sln file according to your AppVeyor project name)_:

```
nuget restore

"C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Community\\Common7\\IDE\\devenv" 
  "c:\\projects\\rock\\rock.sln" /build Release

```
![AppVeyorBuildScriptJuly2021.png](/Content/Developer/AppVeyorBuildScriptJuly2021.png)  

AppVeyor (old; Pre July 2021)
-----------------------------

If you use AppVeyor for any kind of automated build/deploy, you may want to look at these changes we made for the v13 changes for asp.net 4.7.2. These changes were added to the "Init Script" (`Cmd`) under the **Environment** tab of the project settings:

```
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Collections.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Diagnostics.Debug.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Globalization.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Linq.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Reflection.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Reflection.Extensions.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Resources.ResourceManager.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Runtime.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Runtime.Extensions.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Text.RegularExpressions.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Threading.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.IO.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Linq.Expressions.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.ComponentModel.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Threading.Tasks.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Collections.Concurrent.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"


COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Diagnostics.Tools.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Diagnostics.StackTrace.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Runtime.InteropServices.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.IO.FileSystem.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Text.Encoding.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.IO.FileSystem.Primitives.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Reflection.Primitives.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Runtime.Numerics.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Runtime.Serialization.Json.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Xml.ReaderWriter.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Xml.XDocument.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Dynamic.Runtime.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Text.Encoding.Extensions.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.AppContext.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.Threading.Tasks.Parallel.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"
COPY "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2\\Facades\\System.ValueTuple.dll" "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v4.7.2"    

```