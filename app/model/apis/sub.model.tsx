export interface  shaInfomation {
  sha_name: string, //string,
  sha_type_code: string, //string,
  sha_type_description: string, //string,
  }

export interface subModelLocation{
  address: string, //string,
  sub_district: string, //string,
  district: string, //string,
  province: string, //string,
  postcode: string, //string,
} 
 
export interface subModelAttractionTypes {
  code: string, //18
  description: string, //พระราชวัง
}

export interface subModelFee {
  thai_child: string, //
    thai_adult: string, //
    foreigner_child: string, //
    foreigner_adult: string, //
}

export interface subModelPlaceInfoIntroduction {
  introduction: string, //เป็น...
  detail: string, //ชมความงามอันป...
  attraction_types: subModelAttractionTypes[]
  activities: string, //NULL
  fee: subModelFee
  targets: string, //NULL
}

export interface subModelAddress{
  address: string, //
  sub_district: string, //ช้างเผือก
  district: string, //เมืองเชียงใหม่
  province: string, //เชียงใหม่
  postcode: string, //50300
}

export interface submodelPhone {
  phone: string, 
}

export interface subModeContact{
  phones: submodelPhone[],
  mobiles:string, //
  fax:string, //
  emails:string, //
  urls:string, // 
}
 

export interface submodelURL {
  url: string,
}

export interface submodelPeriodOfTime { 
  open:submodelDayOpening
  close:submodelDayOpening
}

export interface submodelDayOpening { 
  day: string,
  time: string,
}

export interface subModelOpeningHour{
  open_now: boolean,
  periods: submodelPeriodOfTime,
  weekday_text:{
  day1:submodelDayOpening,
  day2:submodelDayOpening,
  day3:submodelDayOpening,
  day4:submodelDayOpening,
  day5:submodelDayOpening,
  day6:submodelDayOpening,
  day7:submodelDayOpening,
  }
  special_close_text: string,
}
