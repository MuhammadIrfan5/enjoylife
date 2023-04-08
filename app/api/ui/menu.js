module.exports = [
  {
    key: "user",
    name: "User",
    icon: "ion-ios-person-outline",
    child: [
      // {
      //   key: 'addUser',
      //   name: 'Add User',
      //   link: '/app/user/add-user',
      // },

      {
        key: "listUser",
        name: "List User",
        link: "/dashboard/user/list-user",
      },
      {
        key: "createSubAdmin",
        name: "Create Sub-Admin",
        link: "/dashboard/user/create-sub-admin",
      },
      {
        key: "listSubAdmin",
        name: "List Sub-Admin",
        link: "/dashboard/user/list-sub-admin",
      },
      // {
      //   key: 'userSettings',
      //   name: 'User Settings',
      //   link: '/app/user/user-settings',
      // },
    ],
  },

  {
    key: "Sub-admin Family",
    name: "family",
    icon: "ion-ios-ionitron-outline",
    child: [
      {
        key: "createAdmin",
        name: "Sub-Admin Family",
        link: "/dashboard/user/create-sub-admin-family",
      },
      {
        key: "listFamily",
        name: "List Family",
        link: "/dashboard/family/list-family",
      },
    ],
  },
  {
    key: "gifts",
    name: "Gifts",
    icon: "ion-ios-ionitron-outline",
    child: [
      {
        key: "addGifts",
        name: "Add Gifts",
        link: "/dashboard/gifts/add-gifts",
      },
      {
        key: "listGift",
        name: "List Gifts",
        link: "/dashboard/gifts/list-gift",
      },
    ],
  },
  {
    key: "banner",
    name: "Banner",
    icon: "ion-ios-card",
    child: [
      {
        key: "addBanner",
        name: "Add Banner",
        link: "/dashboard/banner/add-banner",
      },
      {
        key: "listBanner",
        name: "List Banner",
        link: "/dashboard/banner/list-banner",
      },
    ],
  },
  {
    key: "promotions",
    name: "Promotions",
    icon: "ion-ios-paper-plane",
    child: [
      {
        key: "addPromotions",
        name: "Add Promotions",
        link: "/dashboard/promotion/add-promotions",
      },
      {
        key: "listPromotions",
        name: "List Promotions",
        link: "/dashboard/promotion/list-promotions",
      },
    ],
  },
  {
    key: "broadcasts",
    name: "Broadcasts",
    icon: "ion-ios-videocam",
    child: [
      {
        key: "listBroadcasts",
        name: "List Broadcasts",
        link: "/dashboard/broadcasts/list-broadcast",
      },
    ],
  },
  {
    key: "notifications",
    name: "Notifications",
    icon: "ion-ios-ionitron-outline",
    child: [
      {
        key: "addNotifications",
        name: "Add Notifications",
        link: "/dashboard/notifications/add-notifications",
      },
    ],
  },
  {
    key: "privacypolicy",
    name: "PrivacyPolicy",
    icon: "ion-ios-paper-plane",
    child: [
      {
        key: "addPrivacyPolicy",
        name: "Add Privacy Policy",
        link: "/dashboard/privacypolicy/add-privacypolicy",
      },
    ],
  },
];
