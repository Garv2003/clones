export type ProfileType = {
    id: number;
    title: string;
    list: {
        id: number;
        name: string;
        icon: string;
        path: string;
    }[];
}

const Profile: ProfileType[] = [
    {
        id: 1,
        title: "Account",
        list: [
            {
                id: 1,
                name: "Manage your plan",
                icon: "FaSpotify",
                path: "/manage-plan"
            },
            {
                id: 2,
                name: "Edit profile",
                icon: "MdOutlineEdit",
                path: "/edit-profile"
            },
            {
                id: 3,
                name: "Recover playlists",
                icon: "FiRotateCw",
                path: "/recover-playlists"
            }
            , {
                id: 4,
                name: " Address",
                icon: "FaSpotify",
                path: "/address"
            }
        ]
    },
    {
        id: 2,
        title: "Payment",
        list: [
            {
                id: 1,
                name: "Order history",
                icon: "FaHistory",
                path: "/order-history"
            },
            {
                id: 2,
                name: "Saved payment cards",
                icon: "CiCreditCard1",
                path: "/saved-payment-cards"
            },
            {
                id: 3,
                name: "Redeem",
                icon: "AiOutlineTag",
                path: "/redeem"
            }
        ]
    },
    {
        id: 3,
        title: "Security and privacy",
        list: [
            {
                id: 1,
                name: "Change password",
                icon: "IoLockClosedOutline",
                path: "/change-password"
            },
            {
                id: 2,
                name: "Manage apps",
                icon: "MdOutlineGridView",
                path: "/manage-apps"
            },
            {
                id: 3,
                name: "Notification settings",
                icon: "HiOutlineBell",
                path: "/notification-settings"
            },
            {
                id: 4,
                name: "Privacy settings",
                icon: "MdOutlineRemoveRedEye",
                path: "/privacy-settings"
            },
            {
                id: 5,
                name: "Edit login methods",
                icon: "RxHamburgerMenu",
                path: "/edit-login-methods"
            },
            {
                id: 6,
                name: "Sign out everywhere",
                icon: "IoArrowForwardOutline",
                path: "/sign-out-everywhere"
            }
        ]
    },
    {
        id: 4,
        title: "Help",
        list: [
            {
                id: 1,
                name: "Spotify support",
                icon: "RiQuestionLine",
                path: "/spotify-support"
            }
        ]
    }
]

export { Profile }