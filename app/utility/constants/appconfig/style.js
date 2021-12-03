import platform from "./platform"
 
const iosStyle = {}
const androidStyle = {}

export default {
  container: {
    backgroundColor: "rose.600",
    withNavBar: (platform.screen.height - 85) + 'px',
    paddingBottom: platform.screen.height - (platform.screen.height - 75),
    height: (platform.screen.height - 85) ,
    //Footer :  75 : menu height  10 : menu Spacer  
  },
  common: {
    shadow: 3,
    gridBackground: 'rose.600',
    gridForeground: 'rose.600',
    fontSize: {
      header: 20,
      title: 18,
      description: 16,
      remark: 12,
    },
    fontColor: {
      primary : "#FFFFFF",
      regular: 'coolGray.600',
      hilight: 'orange.600',
      warning: 'amber.600', 
    }
  },
  fontColor : {
    primary : "#FFFFFF",
    hilight : "#FBFF00"
  },
  icon: {
    commonSize: "25px",
    activeIcon: 'coolGray.600',
    inActiveIcon: 'rose.600',
    bgActiveIcon: 'rose.600',
    bgInActiveIcon: 'coolGray.600',
    backIconForeground: 'rose.600',
    backIconBackground: 'blue.50',

  },
  header : {
    toolbarBtnColor: "#fff",
    toolbarDefaultBg: "#3F51B5",
    toolbarHeight: 100,
    foreground: 'orange.600',
    paddingTopIOS: "0px", 
    paddingTopAndroid: "0px",


    /*
    toolbarSearchIconSize: 23,
    toolbarInputColor: "#fff",
    searchBarHeight: platform.isIOS ? 30 : 40,
    searchBarInputHeight: platform.isIOS ? 40 : 50,
    toolbarBtnTextColor: "#fff",
    toolbarDefaultBorder: "#3F51B5",
    iosStatusbar: "light-content",*/
  },
  footer : {
    heightIOS: "75px", 
    heightAndroid: "60px",
    defaultBg: "blue.600",
    tabBarTextColor: "blue.50",
    tabBarActiveTextColor: "#fff",
    tabBarTextSize: 11,
  },
  placeItem : {
    height: "130px",
  }

}


/*
,
  button : {
    primary: "#3F51B5",
    info: "#62B1F6",
    success: "#5cb85c",
    danger: "#d9534f",
    warning: "#f0ad4e",
    dark: "#000",
    light: "#f4f4f4",
  },
  list : {
    bg: "transparent",
    borderColor: "#c9c9c9",
    dividerBg: "#f4f4f4",
    btnUnderlayColor: "#DDD",
    itemPadding: 12,
    noteColor: "#808080",
    noteSize: 13,
    itemSelected: "#3F51B5", 
  },
  input : {
    fontSize: 17,
    borderColor: "#D9D5DC",
    successBorderColor: "#2b8339",
    errorBorderColor: "#ed2f2f",
    heightBase: 50,
  },
  icon : {
    family: "Ionicons",
    fontSize: 28,
    headerSize: 24,
  },
  checkbox : {
    CheckboxRadius: platform.isIOS ? 13 : 0,
    CheckboxBorderWidth: platform.isIOS ? 1 : 2,
    CheckboxPaddingLeft: platform.isIOS ? 4 : 2,
    CheckboxPaddingBottom: platform.isIOS ? 0 : 5,
    CheckboxIconSize: platform.isIOS ? 21 : 16,
    CheckboxIconMarginTop: platform.isIOS ? undefined : 1,
    CheckboxFontSize: platform.isIOS ? 23 / 0.9 : 17,
    checkboxBgColor: "#039BE5",
    checkboxSize: 20,
    checkboxTickColor: "#fff",
  },
  card : {
    defaultBg: "#fff",
    borderColor: "#ccc",
    borderRadius: 2,
    itemPadding: platform.isIOS ? 10 : 12,
  },
  progressBar : {
    defaultColor: "#E4202D",
    inverseColor: "#1A191B", 
  },
  radio : {
    btnSize: 23,
    selectedColorAndroid: "#3F51B5",
    btnLineHeight: 24, 
  },
  segment : {
    backgroundColor: "#3F51B5",
    activeBackgroundColor: "#fff",
    textColor: "#fff",
    activeTextColor: "#3F51B5",
    borderColor: "#fff",
    borderColorMain: "#3F51B5",
  },
  spiner : {
    defaultColor: "#45D56E",
    inverseColor: "#1A191B", 
  }, 
  tab : {
    defaultBg: "#3F51B5",
    tabBarTextColor: "#b3c7f9",
    tabBarActiveTextColor: "#fff",
    tabBarBorderColor: "#fff",
    tabBarActiveBorderColor: "#fff", 
    // Tabs
    bgColor: "#F8F8F8",
    fontSize: 15, 
  }

*/