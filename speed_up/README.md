# Speed Up (Chrome Extension)

A lightweight Chrome Extension that allows you to control the playback speed of audio and video on any webpage. Supports discrete speed values from **0.25x** up to **3x**, with the option to reset to **1x** at any time. The chosen speed setting is remembered even if you close the popup.

## Features

- Discrete speed increments: 0.25x, 0.5x, 0.75x, 1x, 1.25x, 1.5x, 1.75x, 2x, 2.25x, 2.5x, 2.75x, and 3x.  
- Reset button to instantly return to **1x**.  
- Remembers your last chosen speed.  
- No custom intervals – prevents accidentally picking something like **1.18x**.

## Installation

1. **Clone or download** this repository.  
2. **Open Chrome** and navigate to `chrome://extensions`.  
3. **Enable** Developer mode (toggle in the top-right corner).  
4. Click **Load unpacked** and select the folder containing the four files:  
   - `manifest.json`  
   - `popup.html`  
   - `popup.js`  
   - `content.js`  
5. The extension will appear in your toolbar. If not, pin it from the extensions menu.

## Usage

1. Open the **Speed Up** extension from your toolbar.  
2. Select your desired speed with the slider. The page’s video(s) and audio(s) will play at that rate.  
3. Click **Reset** to restore **1x** (normal) speed.  
4. Close the popup and navigate elsewhere; when you next open the popup, your chosen speed will remain the same.

## License

You’re free to use, modify, and distribute this code as you wish – no specific license is provided. If you find it helpful, a star on GitHub is always appreciated!