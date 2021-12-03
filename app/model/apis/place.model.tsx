import PlaceItem from '../../view/bodyLayout/placeItem'
import {shaInfomation ,subModelPlaceInfoIntroduction,subModelLocation,
  subModelAddress, submodelURL,subModelOpeningHour,subModeContact
} from './sub.model'

 
export interface PlaceSearchKeys {
  place_id: string, 
  keyword: string, 
  location: string,
  categorycodes: string,
  provinceName: string,
  radius: string,
  numberOfResult: string,
  pagenumber: string, 
  destination: string, 
  filterByUpdateDate: string, 
}  

export interface  PlaceItemModel {
  category_code: string,
  category_description: string,
  destination: string,
  distance: string,
  latitude: string,
  location: subModelLocation,
  longitude: string,
  place_id: string,
  place_name: string,
  sha: shaInfomation,
  tags: string,
  thumbnail_url: string,
  update_date: string,
}  
  

export interface GetPlaceDetailModel {
  contact: subModeContact,
  destination: string,
  facilities: string,
  hit_score: string,
  how_to_travel: string,
  latitude: string,
  location: subModelAddress,
  longitude: string,
  map_code: string,
  mobile_picture_urls: string[],
  opening_hours: subModelOpeningHour,
  payment_methods: string,
  place_id: string,
  place_information: subModelPlaceInfoIntroduction,
  place_name: string,
  services: string,
  sha: shaInfomation,
  tags: string,
  thumbnail_url: string,
  update_date: string,
  web_picture_urls: string[],
} 

 
export interface  GetPlaceSearchModel {
  result: PlaceItemModel[]
}


/*
{
  result: {
    contact: {
      emails: string, 
      fax: string, 
      mobiles: string, 
      phones: Array [
        0 5322 3065,
      ],
      urls: string, 
    },
    destination: string, 
    facilities: string, 
    hit_score: string, 
    how_to_travel: ,
    latitude: 18.805148,
    location: {
      address: ,
      district: เมืองเชียงใหม่,
      postcode: 50300,
      province: เชียงใหม่,
      sub_district: ช้างเผือก,
    },
    longitude: 98.901021,
    map_code: ,
    mobile_picture_urls: Array [
      https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/PictureMob/P03000001_1.jpeg,
      https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/PictureMob/P03000001_2.jpeg,
      https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/PictureMob/P03000001_3.jpeg,
    ],
    opening_hours: {
      open_now: false,
      periods: Array [
        {
          close: {
            day: 1,
            time: 1800,
          },
          open: {
            day: 1,
            time: 0800,
          },
        },
        {
          close: {
            day: 2,
            time: 1800,
          },
          open: {
            day: 2,
            time: 0800,
          },
        },
        {
          close: {
            day: 3,
            time: 1800,
          },
          open: {
            day: 3,
            time: 0800,
          },
        },
        {
          close: {
            day: 4,
            time: 1800,
          },
          open: {
            day: 4,
            time: 0800,
          },
        },
        {
          close: {
            day: 5,
            time: 1800,
          },
          open: {
            day: 5,
            time: 0800,
          },
        },
        {
          close: {
            day: 6,
            time: 1800,
          },
          open: {
            day: 6,
            time: 0800,
          },
        },
        {
          close: {
            day: 7,
            time: 1800,
          },
          open: {
            day: 7,
            time: 0800,
          },
        },
      ],
      special_close_text: ,
      weekday_text: {
        day1: {
          day: จันทร์,
          time: 08:00 - 18:00,
        },
        day2: {
          day: อังคาร,
          time: 08:00 - 18:00,
        },
        day3: {
          day: พุธ,
          time: 08:00 - 18:00,
        },
        day4: {
          day: พฤหัสบดี,
          time: 08:00 - 18:00,
        },
        day5: {
          day: ศุกร์,
          time: 08:00 - 18:00,
        },
        day6: {
          day: เสาร์,
          time: 08:00 - 18:00,
        },
        day7: {
          day: อาทิตย์,
          time: 08:00 - 18:00,
        },
      },
    },
    payment_methods: string, 
    place_id: P03000001,
    place_information: {
      activities: string, 
      attraction_types: Array [
        {
          code: 18,
          description: พระราชวัง,
        },
      ],
      detail: ชมความงามอันประณีตของพระตำหนักภูพิงคราชนิเวศน์ที่พระบาทสมเด็จพระเจ้าอยู่หัวทรง โปรดเกล้าฯ ให้สร้างขึ้นเมื่อ พ.ศ. 2504 เพื่อใช้เป็นที่ประทับในโอกาสที่เสด็จพระราชดำเนินแปรพระราชฐานมาประทับแรม ณ จังหวัดเชียงใหม่นี้ รวมทั้งยังใช้รับรองพระราชอาคันตุกะในวโรกาสต่าง ๆ บรรยากาศโดยรอบพระตำหนักรายล้อมด้วยภูมิประเทศที่สวยงาม มีอากาศเย็นสบายตลอดทั้งปี ส่วนภายในบริเวณประกอบไปด้วยพระตำหนักพฤกษาวิสุทธิคุณ เป็นอาคาร 2 ชั้น มีชั้นใต้ดินตั้งอยู่บนเนิน และพระตำหนักยูคาลิปตัส 1 ที่ใช้ไม้ยูคาลิปตัสมาก่อสร้างในรูปแบบ log cabin และยังมีเรือนรับรองเป็นอาคาร 2 ชั้นแบบไทยประยุกต์ ซึ่งใช้เป็นที่พำนักของพระราชอาคันตุกะ และข้าราชการชั้นผู้ใหญ่ที่ตามเสด็จ นอกจากนี้ในบริเวณพระตำหนักมีอ่างเก็บน้ำขนาดใหญ่ที่มีภูมิทัศน์สวยงามสดชื่น สวนเฟิร์นธรรมชาติ มีอาคารที่จัดแต่งเป็นสวนดอกไม้ละลานตา โดยเฉพาะดอกกุหลาบหลากสายพันธุ์ที่พากันอวดช่อดอกดูสดใส ทิปส์ท่องเที่ยว พระตำหนักภูพิงคราชนิเวศน์ มีกฎระเบียบสำหรับการเข้าชมในเรื่องของการแต่งกาย และจะงดให้บริการยืมคืนเสื้อผ้านักท่องเที่ยวที่แต่งกายไม่สุภาพ หรือไม่เรียบร้อย ตั้งแต่วันที่ 1 เมษายน 2560 เป็นต้นไป งดให้บริการรถไฟฟ้านำเที่ยวชั่วคราว เนื่องจากอยู่ในระหว่างปรับปรุงระบบ ที่ตั้ง : ตั้งอยู่บนดอยบวกห้า ตำบลสุเทพ อำเภอเมือง จังหวัดเชียงใหม่ เปิดทุกวัน เวลา 08.30-16.30 น. เวลาจำหน่ายบัตร 08.30-15.30 แต่ทั้งนี้จะงดการเข้าชมพระตำหนักฯ ระหว่างเสด็จแปรพระราชฐาน (ประมาณเดือนมกราคมถึงต้นเดือนมีนาคม) ค่าเข้าชม 20 บาท สำหรับผู้ใหญ่ เด็ก 10 บาท ชาวต่างชาติ 50 บาท สอบถามเพิ่มเติมได้ที่ โทร. 0 5322 3065 หรือ www.bhubingpalace.org,
      fee: {
        foreigner_adult: ,
        foreigner_child: ,
        thai_adult: ,
        thai_child: ,
      },
      introduction: เป็นพระตำหนักประทับแปรพระราชฐานในวโรกาสที่เสด็จมาทรงงาน หรือเยี่ยมเยียนราษฎรในจังหวัดเชียงใหม่หรือจังหวัดในเขตภาคเหนือ ภายในบริเวณพระตำหนัก มีสถานที่น่าชมต่าง ๆ เช่น พระตำหนักต่าง ๆ เรือนปีกไม้ หอพระ สวนกุหลาบ เป็นต้น,
      targets: string, 
    },
    place_name: พระตำหนักภูพิงคราชนิเวศน์,
    services: string, 
    sha: {
      sha_name: ,
      sha_type_code: ,
      sha_type_description: ,
    },
    tags: string, 
    thumbnail_url: https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Thumbnail/P03000001.jpeg,
    update_date: 2020-03-16T15:00:17.123,
    web_picture_urls: Array [
      https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000001_1.jpeg,
      https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000001_2.jpeg,
      https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03000001_3.jpeg,
    ],
  },
}*/