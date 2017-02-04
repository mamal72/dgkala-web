import { getIncredibleOffers as getIncredibleOffersApi } from './api';

// Actions

export const FETCH_INCREDIBLE_OFFERS = 'FETCH_INCREDIBLE_OFFERS';
export const FETCH_INCREDIBLE_OFFERS_SUCCEED = 'FETCH_INCREDIBLE_OFFERS_SUCCEED';
export const FETCH_INCREDIBLE_OFFERS_FAILED = 'FETCH_INCREDIBLE_OFFERS_FAILED';


// Reducer

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case FETCH_INCREDIBLE_OFFERS:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_INCREDIBLE_OFFERS_SUCCEED:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };

    case FETCH_INCREDIBLE_OFFERS_FAILED:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };

    default: return state;
  }
}


// Action Creators

export function fetchingIncredibleOffers() {
  return {
    type: FETCH_INCREDIBLE_OFFERS
  };
}

export function fetchIncredibleOffers() {
  return async (dispatch) => {
    try {
      dispatch(fetchingIncredibleOffers());
      const data2 = JSON.parse('{"Data":[{"Id":13090,"ProductId":151427,"Title":" لپ تاپ 14 اینچی ایسوس","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_151427/Original/Notebook-ASUS-K456UR-B.jpg","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_151427/70/Notebook-ASUS-K456UR-B.jpg","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_151427/110/Notebook-ASUS-K456UR-B.jpg","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_151427/180/Notebook-ASUS-K456UR-B.jpg","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_151427/220/Notebook-ASUS-K456UR-B.jpg"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":1,"ProductTitleFa":"لپ تاپ 14 اینچی ایسوس مدل K456UR - B","ProductTitleEn":"ASUS K456UR - B - 14 inch Laptop","Discount":560000,"Price":28550000,"OnlyForApplication":false,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":13115,"ProductId":153217,"Title":"Lenovo Ideapad Y700 ","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_153217/Original/Notebook-Lenovo-Ideapad-Y700-D.jpg","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_153217/70/Notebook-Lenovo-Ideapad-Y700-D.jpg","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_153217/110/Notebook-Lenovo-Ideapad-Y700-D.jpg","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_153217/180/Notebook-Lenovo-Ideapad-Y700-D.jpg","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_153217/220/Notebook-Lenovo-Ideapad-Y700-D.jpg"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":1,"ProductTitleFa":"لپ تاپ 15 اینچی لنوو مدل Ideapad Y700 - D","ProductTitleEn":"Lenovo Ideapad Y700 - D - 15 inch Laptop","Discount":1000000,"Price":47790000,"OnlyForApplication":true,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":13114,"ProductId":196698,"Title":"Headphones","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_196698/Original/Pisen-LH300-Headphones-0239db.jpg","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_196698/70/Pisen-LH300-Headphones-0239db.jpg","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_196698/110/Pisen-LH300-Headphones-0239db.jpg","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_196698/180/Pisen-LH300-Headphones-0239db.jpg","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_196698/220/Pisen-LH300-Headphones-0239db.jpg"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":1,"ProductTitleFa":"هدفون پایزن مدل LH300","ProductTitleEn":"Pisen LH300 Headphones","Discount":600000,"Price":2980000,"OnlyForApplication":true,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":13091,"ProductId":199780,"Title":" تلویزیون ایکس ویژن","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_199780/Original/X.Vision-49XT510-LED-TV-49-Inch-dfd010.jpg","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_199780/70/X.Vision-49XT510-LED-TV-49-Inch-dfd010.jpg","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_199780/110/X.Vision-49XT510-LED-TV-49-Inch-dfd010.jpg","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_199780/180/X.Vision-49XT510-LED-TV-49-Inch-dfd010.jpg","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_199780/220/X.Vision-49XT510-LED-TV-49-Inch-dfd010.jpg"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":2,"ProductTitleFa":"تلویزیون ایکس ویژن مدل 49XT510 سایز 49 اینچ","ProductTitleEn":"X.Vision 49XT510 LED TV 49 Inch","Discount":1000000,"Price":18990000,"OnlyForApplication":false,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":13093,"ProductId":41972,"Title":" تبلت لنوو","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_41972/Original/Tablet-Lenovo-TAB-S8-50LC-16GB896b5f.jpg","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_41972/70/Tablet-Lenovo-TAB-S8-50LC-16GB896b5f.jpg","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_41972/110/Tablet-Lenovo-TAB-S8-50LC-16GB896b5f.jpg","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_41972/180/Tablet-Lenovo-TAB-S8-50LC-16GB896b5f.jpg","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_41972/220/Tablet-Lenovo-TAB-S8-50LC-16GB896b5f.jpg"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":3,"ProductTitleFa":"تبلت لنوو مدل TAB S8-50LC ظرفیت 16 گیگابایت","ProductTitleEn":"Lenovo TAB S8-50LC 16GB Tablet","Discount":210000,"Price":6400000,"OnlyForApplication":false,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":13099,"ProductId":201579,"Title":"شارژر باتری پاناسونیک","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_201579/Original/Panasonic-Eneloop-BQ-CC51S-Battery-Charger-050ced.jpg","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_201579/70/Panasonic-Eneloop-BQ-CC51S-Battery-Charger-050ced.jpg","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_201579/110/Panasonic-Eneloop-BQ-CC51S-Battery-Charger-050ced.jpg","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_201579/180/Panasonic-Eneloop-BQ-CC51S-Battery-Charger-050ced.jpg","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_201579/220/Panasonic-Eneloop-BQ-CC51S-Battery-Charger-050ced.jpg"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":4,"ProductTitleFa":"شارژر باتری پاناسونیک مدل Eneloop BQ-CC51S","ProductTitleEn":"Panasonic Eneloop BQ-CC51S Battery Charger","Discount":500000,"Price":990000,"OnlyForApplication":false,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":13092,"ProductId":126814,"Title":" بخار شوی کرشر","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_126814/Original/Steam-Cleaner-Karcher-SC-3d518d1.jpg","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_126814/70/Steam-Cleaner-Karcher-SC-3d518d1.jpg","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_126814/110/Steam-Cleaner-Karcher-SC-3d518d1.jpg","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_126814/180/Steam-Cleaner-Karcher-SC-3d518d1.jpg","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_126814/220/Steam-Cleaner-Karcher-SC-3d518d1.jpg"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":5,"ProductTitleFa":"بخار شوی کرشر مدل SC 3","ProductTitleEn":"Karcher SC 3 Steam Cleaner","Discount":2800000,"Price":8890000,"OnlyForApplication":false,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":13094,"ProductId":190103,"Title":" بخور سرد","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_190103/Original/Full-Well-CFL-HMD29-Cool-Mist-Humidifier-1d8fb8.jpg","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_190103/70/Full-Well-CFL-HMD29-Cool-Mist-Humidifier-1d8fb8.jpg","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_190103/110/Full-Well-CFL-HMD29-Cool-Mist-Humidifier-1d8fb8.jpg","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_190103/180/Full-Well-CFL-HMD29-Cool-Mist-Humidifier-1d8fb8.jpg","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_190103/220/Full-Well-CFL-HMD29-Cool-Mist-Humidifier-1d8fb8.jpg"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":6,"ProductTitleFa":"بخور سرد فول ول مدل CFL-HMD29","ProductTitleEn":"Full Well CFL-HMD29 Cool Mist Humidifier","Discount":920000,"Price":2150000,"OnlyForApplication":false,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":9683,"ProductId":139135,"Title":"چراغ قوه ","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_139135/Original/Travel-Accessories-Flashlight-Pattern-1096341.JPG","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_139135/70/Travel-Accessories-Flashlight-Pattern-1096341.JPG","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_139135/110/Travel-Accessories-Flashlight-Pattern-1096341.JPG","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_139135/180/Travel-Accessories-Flashlight-Pattern-1096341.JPG","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_139135/220/Travel-Accessories-Flashlight-Pattern-1096341.JPG"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":7,"ProductTitleFa":"چراغ قوه کشویی","ProductTitleEn":"Sliding Flashlight ","Discount":145000,"Price":290000,"OnlyForApplication":true,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":12360,"ProductId":20401,"Title":" Philips AT890 Shaver ","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_20401/Original/Hair-Clipper-Philips-AT890/204ddf65.jpg","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_20401/70/Hair-Clipper-Philips-AT890/204ddf65.jpg","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_20401/110/Hair-Clipper-Philips-AT890/204ddf65.jpg","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_20401/180/Hair-Clipper-Philips-AT890/204ddf65.jpg","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_20401/220/Hair-Clipper-Philips-AT890/204ddf65.jpg"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":8,"ProductTitleFa":"ماشین اصلاح صورت فیلیپس مدل AT890 ","ProductTitleEn":"Philips AT890 Shaver","Discount":200000,"Price":2990000,"OnlyForApplication":true,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":12766,"ProductId":189507,"Title":"دمنوش ساز","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_189507/Original/Arshida-DH03-Creative-Glass-Filter-Bottle-646cc0.JPG","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_189507/70/Arshida-DH03-Creative-Glass-Filter-Bottle-646cc0.JPG","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_189507/110/Arshida-DH03-Creative-Glass-Filter-Bottle-646cc0.JPG","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_189507/180/Arshida-DH03-Creative-Glass-Filter-Bottle-646cc0.JPG","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_189507/220/Arshida-DH03-Creative-Glass-Filter-Bottle-646cc0.JPG"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":8,"ProductTitleFa":"دمنوش ساز همراه آرشیدا مدل DH03 ","ProductTitleEn":"Arshida DH03 Creative Glass Filter Bottle ","Discount":310000,"Price":600000,"OnlyForApplication":true,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":13001,"ProductId":123700,"Title":" لامپ ال ای دی","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_123700/Original/Noor-Frosted-13W-LED-Lamp-E27-4ede68.jpg","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_123700/70/Noor-Frosted-13W-LED-Lamp-E27-4ede68.jpg","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_123700/110/Noor-Frosted-13W-LED-Lamp-E27-4ede68.jpg","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_123700/180/Noor-Frosted-13W-LED-Lamp-E27-4ede68.jpg","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_123700/220/Noor-Frosted-13W-LED-Lamp-E27-4ede68.jpg"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":8,"ProductTitleFa":"لامپ ال ای دی 13 وات نور مدل مات پایه E27","ProductTitleEn":"Noor Frosted 13W LED Lamp E27","Discount":105000,"Price":190000,"OnlyForApplication":true,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":12812,"ProductId":127010,"Title":"شامپو مردانه نیوآ ","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_127010/Original/Hair-Shampoo-Nivea-Pure-Clean-For-Men-250mlb656d0.JPG","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_127010/70/Hair-Shampoo-Nivea-Pure-Clean-For-Men-250mlb656d0.JPG","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_127010/110/Hair-Shampoo-Nivea-Pure-Clean-For-Men-250mlb656d0.JPG","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_127010/180/Hair-Shampoo-Nivea-Pure-Clean-For-Men-250mlb656d0.JPG","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_127010/220/Hair-Shampoo-Nivea-Pure-Clean-For-Men-250mlb656d0.JPG"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":8,"ProductTitleFa":"شامپو مردانه نیوآ مدل Pure Clean حجم 250 میلی لیتر","ProductTitleEn":"Nivea Pure Clean Hair Shampoo For Men 250ml","Discount":45000,"Price":105000,"OnlyForApplication":true,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":13096,"ProductId":134362,"Title":"لامپ ال ای دی","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_134362/Original/Lamp-Burux-BRX006M16G5A2XX-CENC-6W-GU5.33e400c.jpg","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_134362/70/Lamp-Burux-BRX006M16G5A2XX-CENC-6W-GU5.33e400c.jpg","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_134362/110/Lamp-Burux-BRX006M16G5A2XX-CENC-6W-GU5.33e400c.jpg","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_134362/180/Lamp-Burux-BRX006M16G5A2XX-CENC-6W-GU5.33e400c.jpg","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_134362/220/Lamp-Burux-BRX006M16G5A2XX-CENC-6W-GU5.33e400c.jpg"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":8,"ProductTitleFa":"لامپ ال ای دی 6 وات بروکس مدل BRX006M16G5A2XX-CENC پایه GU5.3","ProductTitleEn":"Burux BRX006M16G5A2XX-CENC 6W GU5.3 Lamp","Discount":95000,"Price":160000,"OnlyForApplication":false,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":13097,"ProductId":190376,"Title":" سرویس قاشق و چنگال","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_190376/Original/Nab-Steel-Celia-Cutlery-Set-92-Pieces-6ea917.jpg","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_190376/70/Nab-Steel-Celia-Cutlery-Set-92-Pieces-6ea917.jpg","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_190376/110/Nab-Steel-Celia-Cutlery-Set-92-Pieces-6ea917.jpg","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_190376/180/Nab-Steel-Celia-Cutlery-Set-92-Pieces-6ea917.jpg","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_190376/220/Nab-Steel-Celia-Cutlery-Set-92-Pieces-6ea917.jpg"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":9,"ProductTitleFa":"سرویس قاشق و چنگال 92 پارچه ناب استیل مدل Celia","ProductTitleEn":"Nab Steel Celia Cutlery Set 92 Pieces","Discount":1500000,"Price":3900000,"OnlyForApplication":false,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":12138,"ProductId":154467,"Title":"Bosch Blender","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_154467/Original/Bosch-MMB21POR-Blender.JPG","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_154467/70/Bosch-MMB21POR-Blender.JPG","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_154467/110/Bosch-MMB21POR-Blender.JPG","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_154467/180/Bosch-MMB21POR-Blender.JPG","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_154467/220/Bosch-MMB21POR-Blender.JPG"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":9,"ProductTitleFa":"مخلوط کن بوش مدل MMB21P0R","ProductTitleEn":"Bosch MMB21P0R Blender","Discount":1110000,"Price":4100000,"OnlyForApplication":true,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":6972,"ProductId":37530,"Title":"کتاب 1984","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_37530/Original/Book-1984d1e8a0.jpg","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_37530/70/Book-1984d1e8a0.jpg","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_37530/110/Book-1984d1e8a0.jpg","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_37530/180/Book-1984d1e8a0.jpg","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_37530/220/Book-1984d1e8a0.jpg"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":10,"ProductTitleFa":"کتاب 1984 اثر جورج اورول","ProductTitleEn":" ","Discount":45000,"Price":175000,"OnlyForApplication":true,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":12689,"ProductId":183506,"Title":"کیت تمیز کننده","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_183506/Original/Emtec-ECCLSPRSCR-Screen-Cleaning-Kit-3379ac.jpg","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_183506/70/Emtec-ECCLSPRSCR-Screen-Cleaning-Kit-3379ac.jpg","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_183506/110/Emtec-ECCLSPRSCR-Screen-Cleaning-Kit-3379ac.jpg","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_183506/180/Emtec-ECCLSPRSCR-Screen-Cleaning-Kit-3379ac.jpg","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_183506/220/Emtec-ECCLSPRSCR-Screen-Cleaning-Kit-3379ac.jpg"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":19,"ProductTitleFa":"کیت تمیز کننده امتک مدل ECCLSPRSCR","ProductTitleEn":"Emtec ECCLSPRSCR Screen Cleaning Kit","Discount":431000,"Price":590000,"OnlyForApplication":true,"OnlyForMembers":false,"RemainingTime":0,"KeyFeatures":null},{"Id":13095,"ProductId":130422,"Title":" کلاه بافتنی","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_130422/Original/Sports-Wear-XCap-Head-Lamp-Grey94e429.jpg","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_130422/70/Sports-Wear-XCap-Head-Lamp-Grey94e429.jpg","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_130422/110/Sports-Wear-XCap-Head-Lamp-Grey94e429.jpg","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_130422/180/Sports-Wear-XCap-Head-Lamp-Grey94e429.jpg","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_130422/220/Sports-Wear-XCap-Head-Lamp-Grey94e429.jpg"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":7,"ProductTitleFa":"کلاه بافتنی ایکس کپ مدل Head Lamp","ProductTitleEn":"XCap Head Lamp Beanie","Discount":860000,"Price":1450000,"OnlyForApplication":false,"OnlyForMembers":true,"RemainingTime":0,"KeyFeatures":null},{"Id":13098,"ProductId":62055,"Title":" ادو تویلت مردانه","ImagePaths":{"Original":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_62055/Original/Korloff-Paris-Korloff-Men-Eau-De-Toilette-For-Men-88ml-9fc4a3.JPG","Size70":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_62055/70/Korloff-Paris-Korloff-Men-Eau-De-Toilette-For-Men-88ml-9fc4a3.JPG","Size110":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_62055/110/Korloff-Paris-Korloff-Men-Eau-De-Toilette-For-Men-88ml-9fc4a3.JPG","Size180":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_62055/180/Korloff-Paris-Korloff-Men-Eau-De-Toilette-For-Men-88ml-9fc4a3.JPG","Size220":"http://file.digikala.com/Digikala/Image/Webstore/Product/P_62055/220/Korloff-Paris-Korloff-Men-Eau-De-Toilette-For-Men-88ml-9fc4a3.JPG"},"BannerPath":"","BannerPathMobile":"","BannerPathTablet":"","Row":10,"ProductTitleFa":"ادو تویلت مردانه کارلوف مدل Korloff Men حجم 88 میلی لیتر","ProductTitleEn":"Korloff Korloff Men Eau De Toilette For Men 88ml","Discount":800000,"Price":1350000,"OnlyForApplication":false,"OnlyForMembers":true,"RemainingTime":0,"KeyFeatures":null}],"Status":"Success","Message":null}').Data;
      // setTimeout(() => {
      //   dispatch(fetchIncredibleOffersSucceed(data));
      // }, 0);
      const data = await getIncredibleOffersApi();
      dispatch(fetchIncredibleOffersSucceed(data));
    } catch (e) {
      dispatch(fetchIncredibleOffersFailed(e));
    }
  };
}

export function fetchIncredibleOffersSucceed(data) {
  return {
    type: FETCH_INCREDIBLE_OFFERS_SUCCEED,
    data
  };
}

export function fetchIncredibleOffersFailed(data) {
  return {
    type: FETCH_INCREDIBLE_OFFERS_FAILED,
    data
  };
}