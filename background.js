/**
 * A dynamic theme with an animated spinning fox outline that changes color according to the time.
 *
 * @file   Controls the theme and animation.
 * @author Jennifer Lu
 * @since  0.9
 * @see    {@link https://github.com/jennifer-lu/Dynamic-Spinning-Fox-Theme}
 */

/**
 * The themes: morning, afternoon, evening, night
 * @const {theme}
 */
const themes =
{
  "morning":
  {
    "images":
    {
      "additional_backgrounds": ["morning.png"]
    },
    "properties":
    {
      "additional_backgrounds_alignment": ["right center"],
      "additional_backgrounds_tiling": ["no-repeat"]
    },
    "colors":
    {
      "bookmark_text": "rgb(255, 255, 255)",

      "button_background_active": "rgba(37, 205, 207, 0.5)",
      "button_background_hover": "rgba(255, 255, 255, 0.2)",

      "icons": "rgba(255, 255, 255, 0.8)",
      "icons_attention": "rgba(37, 205, 207, 1)",

      "frame": "rgb(0, 0, 0)",
      "frame_inactive": "rgb(0, 0, 0)",

      "ntp_background": "rgb(0, 0, 0)",
      "ntp_text": "rgba(255, 255, 255, 0.8)",

      "popup": "rgba(0, 0, 0, 0.5)",
      "popup_border": "rgba(255, 255, 255, 0)",
      "popup_highlight": "rgba(37, 205, 207, 0.7)",
      "popup_highlight_text": "rgb(0, 0, 0)",
      "popup_text": "rgb(255, 255, 255)",

      "sidebar": "rgba(0, 0, 0, 0.5)",
      "sidebar_border": "rgba(255, 255, 255, 0)",
      "sidebar_highlight": "rgba(37, 205, 207, 0.7)",
      "sidebar_highlight_text": "rgb(0, 0, 0)",
      "sidebar_text": "rgb(255, 255, 255)",

      "tab_background_separator": "rgba(255, 255, 255, 0)",
      "tab_background_text": "rgba(255, 255, 255, 0.8)",
      "tab_line": "rgba(37, 205, 207, 0.8)",
      "tab_loading": "rgba(37, 205, 207, 0.8)",
      "tab_selected": "rgba(0, 0, 0, 0)",
      "tab_text": "rgb(255, 255, 255)",

      "toolbar": "rgba(0, 0, 0, 0)",
      "toolbar_bottom_separator": "rgba(255, 255, 255, 0)",
      "toolbar_field": "rgba(0, 0, 0, 0.3)",
      "toolbar_field_border": "rgba(255, 255, 255, 0)",
      "toolbar_field_border_focus": "rgba(255, 255, 255, 0)",
      "toolbar_field_focus": "rgba(0, 0, 0, 0.3)",
      "toolbar_field_highlight": "rgba(37, 205, 207, 0.7)",
      "toolbar_field_highlight_text": "rgba(0, 0, 0, 1)",
      "toolbar_field_separator": "rgba(255, 255, 255, 0)",
      "toolbar_field_text": "rgb(255, 255, 255)",
      "toolbar_field_text_focus": "rgb(255, 255, 255)",
      "toolbar_text": "rgb(255, 255, 255)",
      "toolbar_top_separator": "rgba(255, 255, 255, 0)",
      "toolbar_vertical_separator": "rgba(255, 255, 255, 0)"
    }
  },
  "afternoon":
  {
    "images":
    {
      "additional_backgrounds": ["afternoon.png"]
    },
    "properties":
    {
      "additional_backgrounds_alignment": ["right center"],
      "additional_backgrounds_tiling": ["no-repeat"]
    },
    "colors":
    {
      "bookmark_text": "rgb(255, 255, 255)",

      "button_background_active": "rgba(37, 184, 255, 0.5)",
      "button_background_hover": "rgba(255, 255, 255, 0.2)",

      "icons": "rgba(255, 255, 255, 0.8)",
      "icons_attention": "rgba(37, 184, 255, 1)",

      "frame": "rgb(0, 0, 0)",
      "frame_inactive": "rgb(0, 0, 0)",

      "ntp_background": "rgb(0, 0, 0)",
      "ntp_text": "rgba(255, 255, 255, 0.8)",

      "popup": "rgba(0, 0, 0, 0.5)",
      "popup_border": "rgba(255, 255, 255, 0)",
      "popup_highlight": "rgba(37, 184, 255, 0.7)",
      "popup_highlight_text": "rgb(0, 0, 0)",
      "popup_text": "rgb(255, 255, 255)",

      "sidebar": "rgba(0, 0, 0, 0.5)",
      "sidebar_border": "rgba(255, 255, 255, 0)",
      "sidebar_highlight": "rgba(37, 184, 255, 0.7)",
      "sidebar_highlight_text": "rgb(0, 0, 0)",
      "sidebar_text": "rgb(255, 255, 255)",

      "tab_background_separator": "rgba(255, 255, 255, 0)",
      "tab_background_text": "rgba(255, 255, 255, 0.8)",
      "tab_line": "rgba(37, 184, 255, 0.8)",
      "tab_loading": "rgba(37, 184, 255, 0.8)",
      "tab_selected": "rgba(0, 0, 0, 0)",
      "tab_text": "rgb(255, 255, 255)",

      "toolbar": "rgba(0, 0, 0, 0)",
      "toolbar_bottom_separator": "rgba(255, 255, 255, 0)",
      "toolbar_field": "rgba(0, 0, 0, 0.3)",
      "toolbar_field_border": "rgba(255, 255, 255, 0)",
      "toolbar_field_border_focus": "rgba(255, 255, 255, 0)",
      "toolbar_field_focus": "rgba(0, 0, 0, 0.3)",
      "toolbar_field_highlight": "rgba(37, 184, 255, 0.7)",
      "toolbar_field_highlight_text": "rgba(0, 0, 0, 1)",
      "toolbar_field_separator": "rgba(255, 255, 255, 0)",
      "toolbar_field_text": "rgb(255, 255, 255)",
      "toolbar_field_text_focus": "rgb(255, 255, 255)",
      "toolbar_text": "rgb(255, 255, 255)",
      "toolbar_top_separator": "rgba(255, 255, 255, 0)",
      "toolbar_vertical_separator": "rgba(255, 255, 255, 0)"
    }
  },
  "evening":
  {
    "images":
    {
      "additional_backgrounds": ["evening.png"]
    },
    "properties":
    {
      "additional_backgrounds_alignment": ["right center"],
      "additional_backgrounds_tiling": ["no-repeat"]
    },
    "colors":
    {
      "bookmark_text": "rgb(255, 255, 255)",

      "button_background_active": "rgba(199, 53, 222, 0.5)",
      "button_background_hover": "rgba(255, 255, 255, 0.2)",

      "icons": "rgba(255, 255, 255, 0.8)",
      "icons_attention": "rgba(199, 53, 222, 1)",

      "frame": "rgb(0, 0, 0)",
      "frame_inactive": "rgb(0, 0, 0)",

      "ntp_background": "rgb(0, 0, 0)",
      "ntp_text": "rgba(255, 255, 255, 0.8)",

      "popup": "rgba(0, 0, 0, 0.5)",
      "popup_border": "rgba(255, 255, 255, 0)",
      "popup_highlight": "rgba(199, 53, 222, 0.7)",
      "popup_highlight_text": "rgb(0, 0, 0)",
      "popup_text": "rgb(255, 255, 255)",

      "sidebar": "rgba(0, 0, 0, 0.5)",
      "sidebar_border": "rgba(255, 255, 255, 0)",
      "sidebar_highlight": "rgba(199, 53, 222, 0.7)",
      "sidebar_highlight_text": "rgb(0, 0, 0)",
      "sidebar_text": "rgb(255, 255, 255)",

      "tab_background_separator": "rgba(255, 255, 255, 0)",
      "tab_background_text": "rgba(255, 255, 255, 0.8)",
      "tab_line": "rgba(199, 53, 222, 0.8)",
      "tab_loading": "rgba(199, 53, 222, 0.8)",
      "tab_selected": "rgba(0, 0, 0, 0)",
      "tab_text": "rgb(255, 255, 255)",

      "toolbar": "rgba(0, 0, 0, 0)",
      "toolbar_bottom_separator": "rgba(255, 255, 255, 0)",
      "toolbar_field": "rgba(0, 0, 0, 0.3)",
      "toolbar_field_border": "rgba(255, 255, 255, 0)",
      "toolbar_field_border_focus": "rgba(255, 255, 255, 0)",
      "toolbar_field_focus": "rgba(0, 0, 0, 0.3)",
      "toolbar_field_highlight": "rgba(199, 53, 222, 0.7)",
      "toolbar_field_highlight_text": "rgba(0, 0, 0, 1)",
      "toolbar_field_separator": "rgba(255, 255, 255, 0)",
      "toolbar_field_text": "rgb(255, 255, 255)",
      "toolbar_field_text_focus": "rgb(255, 255, 255)",
      "toolbar_text": "rgb(255, 255, 255)",
      "toolbar_top_separator": "rgba(255, 255, 255, 0)",
      "toolbar_vertical_separator": "rgba(255, 255, 255, 0)"
    }
  },
  "night":
  {
    "images":
    {
      "additional_backgrounds": ["night.png"]
    },
    "properties":
    {
      "additional_backgrounds_alignment": ["right center"],
      "additional_backgrounds_tiling": ["no-repeat"]
    },
    "colors":
    {
      "bookmark_text": "rgb(255, 255, 255)",

      "button_background_active": "rgba(142, 52, 227, 0.5)",
      "button_background_hover": "rgba(255, 255, 255, 0.2)",

      "icons": "rgba(255, 255, 255, 0.8)",
      "icons_attention": "rgba(142, 52, 227, 1)",

      "frame": "rgb(0, 0, 0)",
      "frame_inactive": "rgb(0, 0, 0)",

      "ntp_background": "rgb(0, 0, 0)",
      "ntp_text": "rgba(255, 255, 255, 0.8)",

      "popup": "rgba(0, 0, 0, 0.5)",
      "popup_border": "rgba(255, 255, 255, 0)",
      "popup_highlight": "rgba(142, 52, 227, 0.7)",
      "popup_highlight_text": "rgb(0, 0, 0)",
      "popup_text": "rgb(255, 255, 255)",

      "sidebar": "rgba(0, 0, 0, 0.5)",
      "sidebar_border": "rgba(255, 255, 255, 0)",
      "sidebar_highlight": "rgba(142, 52, 227, 0.7)",
      "sidebar_highlight_text": "rgb(0, 0, 0)",
      "sidebar_text": "rgb(255, 255, 255)",

      "tab_background_separator": "rgba(255, 255, 255, 0)",
      "tab_background_text": "rgba(255, 255, 255, 0.8)",
      "tab_line": "rgba(142, 52, 227, 0.8)",
      "tab_loading": "rgba(142, 52, 227, 0.8)",
      "tab_selected": "rgba(0, 0, 0, 0)",
      "tab_text": "rgb(255, 255, 255)",

      "toolbar": "rgba(0, 0, 0, 0)",
      "toolbar_bottom_separator": "rgba(255, 255, 255, 0)",
      "toolbar_field": "rgba(0, 0, 0, 0.3)",
      "toolbar_field_border": "rgba(255, 255, 255, 0)",
      "toolbar_field_border_focus": "rgba(255, 255, 255, 0)",
      "toolbar_field_focus": "rgba(0, 0, 0, 0.3)",
      "toolbar_field_highlight": "rgba(142, 52, 227, 0.7)",
      "toolbar_field_highlight_text": "rgba(0, 0, 0, 1)",
      "toolbar_field_separator": "rgba(255, 255, 255, 0)",
      "toolbar_field_text": "rgb(255, 255, 255)",
      "toolbar_field_text_focus": "rgb(255, 255, 255)",
      "toolbar_text": "rgb(255, 255, 255)",
      "toolbar_top_separator": "rgba(255, 255, 255, 0)",
      "toolbar_vertical_separator": "rgba(255, 255, 255, 0)"
    }
  }
};

/**
 * The active theme
 * @type {string}
 */
var activeTheme = "";

// Add theme on startup
updateTheme();

// Update theme every 5 minutes
var interval = setInterval(updateTheme, 300000);

/**
 * Updates the browser window
 * @param {theme} theme The theme
 */
function setActiveTheme(theme)
{
  if (activeTheme !== theme)
  {
    activeTheme = theme;
    browser.theme.update(themes[activeTheme]);
  }
}

/**
 * Updates the active theme based on the time
 */
function updateTheme()
{
  let day = new Date();
  let hour = day.getHours();

  // Set different theme based on the hour
  if (hour >= 7 && hour < 11)
  {
    setActiveTheme("morning");
  }
  else if (hour >= 11 && hour < 18)
  {
    setActiveTheme("afternoon");
  }
  else if (hour >= 18 && hour < 22)
  {
    setActiveTheme("evening");
  }
  else
  {
    setActiveTheme("night");
  }
}
