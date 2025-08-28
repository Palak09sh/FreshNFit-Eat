import React from "react" 
import ReactDOM from "react-dom/client"
// PROJECT STRUCTURE
/**
 * Header
 * -logo
 * -Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 * - ResturantCard
 *  -Img
 * -name of res, starRating, delieveryTime 
 * Footer
 * -Copyright
 * -Links
 * -Address
 * - Contact
 */
const Header =() => {
  return(
  <div className="header">
    <div className="Logo-container">
      <img src="\assets\HealthyNfitfood-logo.png" alt="Healthy Food" className="Logo" />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  )

}
const ReasaurantCard =(props) =>{
  const{resData} = props;
   const {
   cloudinaryImageId,
     name,
     cuisines,
     avgRating,
     costForTwo,
     deliveryTime,} = resData?.info
    // Destructuring of Props
  
  return(
    <div className="res-card">
    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}minutes</h4>
    </div>
  )
}
const resList = [{
                  info:{
                      "id": "518645",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/fd59e7bb-4e0e-492a-abfe-c6815c2e8613_518645.jpg",
                      "locality": "Gurumoorthy Garden Street",
                      "areaName": "Perambur",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.3,
                      "parentId": "166",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "21K+",
                      "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 5.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "5.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-29 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "1.5K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/burger-king-gurumoorthy-garden-street-perambur-rest518645",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    info: {
                      "id": "37067",
                      "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/ba753e6a-9137-47ec-8525-d6c3ff8f6c48_37067.jpg",
                      "locality": "Kilpauk",
                      "areaName": "Kilpauk",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "sandwich",
                        "Salads",
                        "wrap",
                        "Healthy Food"
                      ],
                      "avgRating": 4.2,
                      "parentId": "2",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "36K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-29 05:59:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "817"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/subway-kilpauk-rest37067",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "16543",
                      "name": "A2B - Adyar Ananda Bhavan",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/18/80ad1717-e8b5-43ec-a636-80e8e0f95e36_16543.JPG",
                      "locality": "Purasavakkam",
                      "areaName": "Purasaiwakkam",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "Sweets",
                        "Chinese"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "22",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "45K+",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-28 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹349",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "3.8K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/a2b-adyar-ananda-bhavan-purasavakkam-purasaiwakkam-rest16543",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "37629",
                      "name": "Shree Mithai",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/24/8dd1f626-41ab-46a6-bbcb-15068ea2cb1a_37629.jpg",
                      "locality": "Chetpet",
                      "areaName": "Nungambakkam",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Desserts",
                        "Street Food",
                        "Chaat"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "6988",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "95K+",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-28 21:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.5",
                          "ratingCount": "10K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/shree-mithai-chetpet-nungambakkam-rest37629",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "49823",
                      "name": "Hot Breads",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/25/0f47ee14-2d3b-4642-be5e-09dc7dc2fddb_49823.jpg",
                      "locality": "Kilpauk",
                      "areaName": "Kilpauk",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "470",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "6.7K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-28 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "277"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/hot-breads-kilpauk-rest49823",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "12615",
                      "name": "Ratna Cafe (Estd.1948)",
                      "cloudinaryImageId": "zyyduavcmpinwpyontgb",
                      "locality": "Triplicane",
                      "areaName": "Royapettah",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "Sweets"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "167537",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "45K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-28 22:30:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/ratna-cafe-estd-1948-triplicane-royapettah-rest12615",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "647001",
                      "name": "The Brownie Studio",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/21/a0ca0590-0f19-4b1d-ad76-b4fbd8014825_647001.jpg",
                      "locality": "Prakasam Salai",
                      "areaName": "Georgetown",
                      "costForTwo": "₹800 for two",
                      "cuisines": [
                        "Bakery",
                        "Cakes",
                        "Desserts",
                        "Ice Cream",
                        "Sweets"
                      ],
                      "avgRating": 4.4,
                      "parentId": "5976",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1.3K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-29 00:15:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/the-brownie-studio-prakasam-salai-georgetown-rest647001",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "726146",
                      "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/181571b0-fe99-4af5-88dc-276ba41bcc3b_726146.JPG",
                      "locality": "Purasawalkam High Road",
                      "areaName": "Kellys",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "parentId": "1040",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "3.4K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 3.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-28 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹290"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/theobroma-purasawalkam-high-road-kellys-rest726146",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "141364",
                      "name": "Starbucks Coffee",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/3630daf7-ceec-4e36-bda9-fdcb8ff639f9_141364.JPG",
                      "locality": "Thousand Lights",
                      "areaName": "Nungambakkam",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Bakery",
                        "Ice Cream"
                      ],
                      "avgRating": 4.6,
                      "parentId": "195515",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "4.6K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-28 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "1.8K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/starbucks-coffee-thousand-lights-nungambakkam-rest141364",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "14096",
                      "name": "Sangeetha Veg Restaurant",
                      "cloudinaryImageId": "oodghmivnc6bxnbrvzzw",
                      "locality": "Egmore",
                      "areaName": "Gandhi Irwin",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Chinese",
                        "South Indian"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "1260",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "61K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-28 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.7",
                          "ratingCount": "1.8K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/sangeetha-veg-restaurant-egmore-gandhi-irwin-rest14096",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "241941",
                      "name": "Perambur Sri Srinivasa Sweets & Snacks",
                      "cloudinaryImageId": "xatodvkjreyd7cxnfj4u",
                      "locality": "Aminjikarai",
                      "areaName": "Annanagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Sweets"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "230942",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "1.8K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 5.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "5.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-28 22:30:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/perambur-sri-srinivasa-sweets-and-snacks-aminjikarai-annanagar-rest241941",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "9092",
                      "name": "Fruit Shop On Greams Road",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/25/36b57375-186f-40e4-904e-f5221135eca7_9092.jpg",
                      "locality": "Greams Road, Mount road",
                      "areaName": "Thousand Lights",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Juices",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "401",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "14K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 4.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "4.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-29 00:30:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/fruit-shop-on-greams-road-greams-road-mount-road-thousand-lights-rest9092",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "430194",
                      "name": "SMOOR",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/12/8efcd4bd-9ba9-4591-abc7-eb21cd5c98a0_430194.JPG",
                      "locality": "Chennai Corp. Ward - 111",
                      "areaName": "Royapettah",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Desserts",
                        "Bakery"
                      ],
                      "avgRating": 4.7,
                      "parentId": "3506",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "975",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 4.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-28 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹649",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "147"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/smoor-corp-ward-111-royapettah-rest430194",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "14834",
                      "name": "Hotel Saravana Bhavan",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/19/a3a2457b-09b9-41a1-a84a-3c008560d3f2_14834.jpg",
                      "locality": "Egmore",
                      "areaName": "Egmore",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "Meal",
                        "North Indian",
                        "Chinese",
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "Juices",
                        "Snacks"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "101987",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "17K+",
                      "sla": {
                        "deliveryTime": 44,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-50 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-28 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.5",
                          "ratingCount": "4.6K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/hotel-saravana-bhavan-egmore-rest14834",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "60888",
                      "name": "Eating Circles",
                      "cloudinaryImageId": "ji1dtwtd368vir8t0pik",
                      "locality": "Alwarpet",
                      "areaName": "Mylapore",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "South Indian"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "6910",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "81K+",
                      "sla": {
                        "deliveryTime": 53,
                        "lastMileTravel": 10.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-60 mins",
                        "lastMileTravelString": "10.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-28 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹349",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "6.0K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/eating-circles-alwarpet-mylapore-rest60888",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "55045",
                      "name": "Murugan Idli Shop",
                      "cloudinaryImageId": "dlkj9tdzjf6r72ovkuhh",
                      "locality": "George Town",
                      "areaName": "Poongavanapuram",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "South Indian"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "1248",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "8.8K+",
                      "sla": {
                        "deliveryTime": 17,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-28 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/murugan-idli-shop-george-town-poongavanapuram-rest55045",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "18998",
                      "name": "Chai Kings",
                      "cloudinaryImageId": "ntvnffyvoinl2cqkishv",
                      "locality": "Poonamallee High Road",
                      "areaName": "Purasawalkam",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Beverages",
                        "Snacks",
                        "Bakery",
                        "Chinese",
                        "Bubble Tea",
                        "Cafe",
                        "sandwich"
                      ],
                      "avgRating": 4.5,
                      "parentId": "2627",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "17K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-28 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹79"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/chai-kings-poonamallee-high-road-purasawalkam-rest18998",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "16617",
                      "name": "Ganga Sweets",
                      "cloudinaryImageId": "zjifcm3pckhqx907crfv",
                      "locality": "Purasavakkam",
                      "areaName": "Purasaiwakkam",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "South Indian",
                        "Sweets"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "405",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "8.1K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-28 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "88"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/ganga-sweets-purasavakkam-purasaiwakkam-rest16617",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "57277",
                      "name": "Keventers - Milkshakes & Desserts",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/b68c9044-2120-4879-87bb-8c57478ae82f_57277.JPG",
                      "locality": "Kilpauk",
                      "areaName": "Kilpauk",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Beverages",
                        "Ice Cream",
                        "Desserts",
                        "Healthy Food"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "268997",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "5.8K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-29 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹79"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "183"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/keventers-milkshakes-and-desserts-kilpauk-rest57277",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "786351",
                      "name": "Dou",
                      "cloudinaryImageId": "78d7262a2d94c82e458c4726c88c7aa9",
                      "locality": "Nungambakkam",
                      "areaName": "Nungambakkam",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Bakery",
                        "Cafe"
                      ],
                      "avgRating": 4.6,
                      "parentId": "575759",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "973",
                      "sla": {
                        "deliveryTime": 46,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-55 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-28 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.6",
                          "ratingCount": "390"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-7329a8f0-1509-4022-8a15-c63602273ddd"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chennai/dou-nungambakkam-rest786351",
                      "type": "WEBLINK"
                    }
                  }
                ]
const Body = () =>{
  return(
  <div className="body">
    <div className="search">
      <div className="res-container">
      {/* <ReasaurantCard resData = {resList[0]}/>
      <ReasaurantCard resData = {resList[1]}/>
      <ReasaurantCard resData = {resList[2]}/>
      <ReasaurantCard resData = {resList[3]}/>
      <ReasaurantCard resData = {resList[4]}/>
      <ReasaurantCard resData = {resList[5]}/>
      <ReasaurantCard resData = {resList[6]}/>
      <ReasaurantCard resData = {resList[7]}/>
      <ReasaurantCard resData = {resList[8]}/>
      <ReasaurantCard resData = {resList[9]}/>
      <ReasaurantCard resData = {resList[10]}/> */}
      {
        resList.map((resturant) => (
         <ReasaurantCard    key={resturant.info.id} resData = {resturant}/>
        ))
      }
      
       
      </div>
    </div>
  </div>
  )
}
export default function AppLayout() {
  return (
    <>  
  <Header/>
  <Body/>
  
  </> 
  )
}

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<AppLayout/>)

