import platform from "./platform";

const IMAGE_BG_PAGE = { 
  landing: 'https://a.loveholidays.com/media/filer_public/79/0d/790d0e0f-219e-4df5-a04c-de3de97f473d/thailand.jpg',
  searchIndex:  'https://raw.githubusercontent.com/waleerat/GitHub-Photos-Shared/main/TAT/img_search1.jpg',
  shoppingIndex: 'https://raw.githubusercontent.com/waleerat/GitHub-Photos-Shared/main/TAT/img_shopping.jpg',
  accountIndex: 'https://raw.githubusercontent.com/waleerat/GitHub-Photos-Shared/main/TAT/img_account.jpg',
  
};

const LANDING_PAGE = {
  gridColumn :  1.95,
  gridHeight: 150,
  gridIconSize: "40px",
  gridBorderRadius: "full",
  gridDarkMode: "warmGray.50",
  gridFontSize: platform.isIOS ? 20 : 22,
  gridTextTransform: "uppercase"
} 
 
const API_URLS = {
  apiKey: 'GA5koDndjlPCwf6ib(qEYC59isitwqIqV9iG3ILU(YtO60qz4fTBXm2kjq1SmpIJ02TiYh7KQYn((NC)T5B71jG=====2',
  GetPlaceSearch : {
    url : 'https://tatapi.tourismthailand.org/tatapi/v5/places/search',
  }, 
  GetAttractionDetail : {
    url : 'https://tatapi.tourismthailand.org/tatapi/v5/attraction/'
  }

}

export default {
  LANDING_PAGE,
  IMAGE_BG_PAGE,
  API_URLS,
}
 