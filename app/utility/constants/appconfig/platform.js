import { Platform, Dimensions, PixelRatio } from "react-native"; 

const screenWidth =  Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const screen = {
  width :  screenWidth,
  height: screenHeight
}

const device = Platform.OS;

const isIOS =  device === "ios"

const isIphoneX =
device === "ios" && (screenHeight === 812 || screenWidth === 812 || screenHeight === 896 || screenWidth === 896);

const style = "material"; 

export default {
  device,
  isIOS,
  screen,
  style
}
 