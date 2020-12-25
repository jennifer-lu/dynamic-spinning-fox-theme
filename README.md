# Dynamic Spinning Fox Theme

A dynamic theme with an animated spinning fox that changes color according to the time. Created for Firefox add-ons.

## Demo

![theme-demo](https://github.com/jennifer-lu/Dynamic-Spinning-Fox-Theme/blob/master/demo.gif)


## Installation

Install the add-on at Firefox's add-ons website (https://addons.mozilla.org/en-CA/firefox/addon/dynamic-spinning-fox-theme/?src=search). Then, enable the add-on in your Firefox preferences.

### Troubleshooting

If the theme does not show, or is removed upon restarting Firefox, ensure that all themes and theme related add-ons (e.g. Firefox Color) are disabled.


## Development

To customize the source code:
* Download the manifest.json, background.js, and image files.
* Edit the code in the background.js file and change the image files.
  * For a syntax guide regarding theme development, see Mozilla's add-ons website (https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme).
  * For more information regarding themes in general, including dynamic themes, see Mozilla's add-ons website (https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Themes/Theme_concepts).
  * APNG images were mades using GIMP and ffmpeg
* Be sure to link the edited background.js file properly in the manifest.json file.
* Compress the edited manifest.json and background.js files.
* Sign the edited add-on on Mozilla's add-ons developers website (https://addons.mozilla.org/en-CA/developers/).
* Install the edited add-on from the website after it has been signed.
* Enable the edited add-on in your Firefox preferences.


## Author

Jennifer Lu
