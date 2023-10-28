export default [
    {
        path: "/school/my-page",
        name: "Admin.MyPage",
        component: () => import ("../views/admin/MyPage"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/children-info/experience-childcare",
        name: "ChildrenInfo.ExperienceChildcare",
        component: () => import ("../views/admin/childrenInformation/ExperienceChildcare"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/children-info/completion-report",
        name: "ChildrenInfo.CompletionReport",
        component: () => import ("../views/admin/childrenInformation/CompletionReport"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/children-info/experience-childcare-completion-report",
        name: "ChildrenInfo.ExperienceCompletionReport",
        component: () => import ("../views/admin/childrenInformation/ExperienceCompletionReport"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/children-info/monthly-childcare-first-month",
        name: "ChildrenInfo.MonthlyChildcareFirstMonth",
        component: () => import ("../views/admin/childrenInformation/MonthlyChildcareFirstMonth"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/children-info/monthly-childcare-second-month",
        name: "ChildrenInfo.MonthlyChildcareSecondMonth",
        component: () => import ("../views/admin/childrenInformation/MonthlyChildcareSecondMonth"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/children-info/experience-childcare-2",
        name: "ChildrenInfo.ExperienceChildcare2",
        component: () => import ("../views/admin/childrenInformation/ExperienceChildcare2"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/children-info/physical-measurement-Weight",
        name: "ChildrenInfo.PhysicalMeasurementWeight",
        component: () => import ("../views/admin/childrenInformation/PhysicalMeasurementWeight"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/garden-basic-information",
        name: "Admin.GardenBasicInformation",
        component: () => import ("../views/admin/settings/basic/Index"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/plan-page",
        name: "Plan.page",
        component: () => import ("../views/admin/PlanPage"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/physical-measurement",
        name: "Admin.PhysicalMeasurement",
        component: () => import ("../views/admin/PhysicalMeasurement"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/childcare-information",
        name: "Admin.ChildcareInformation",
        component: () => import ("../views/admin/ChildcareInformation/ChildcareInformation"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/child-measurement-information",
        name: "Admin.ChildMeasurementInformation",
        component: () => import ("../views/admin/ChildcareInformation/ChildMeasurementInformation"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/nursery-school-experience-based-childcare",
        name: "Admin.NurserySchoolExperienceBasedChildcare",
        component: () => import ("../views/admin/ChildcareInformation/NurserySchoolExperienceBasedChildcare"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/overall-plan",
        name: "Plan.page2",
        component: () => import ("../views/admin/PlanPageRecord2.vue"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/annual-guidance-plan",
        name: "Plan.page3",
        component: () => import ("../views/admin/PlanPageRecord3.vue"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/fixed-phrase-setting",
        name: "Admin.FixedPhraseSetting",
        component: () => import ("../views/admin/FixedPhraseSetting"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/nursery-school-my-page-settings",
        name: "Admin.NurserySchoolMyPageSettings",
        component: () => import ("../views/admin/NurserySchoolMyPageSettings"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/nursery-school-my-page-setting-edit",
        name: "Admin.NurserySchoolMyPageSettingsEdit",
        component: () => import ("../views/admin/NurserySchoolMyPageSettingsEdit"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/nursery-school-my-page-reservation-list",
        name: "Admin.NurserySchoolMyPageReservationList",
        component: () => import ("../views/admin/NurserySchoolMyPageReservationList"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/my-page-notice",
        name: "Admin.MyPageNotice",
        component: () => import ("../views/admin/MyPageNotice"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/my-page-chat",
        name: "Admin.MyPageChat",
        component: () => import ("../views/admin/MyPageChat"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/price-plan-list",
        name: "Admin.MyPagePricePlanList",
        component: () => import ("../views/admin/MyPagePricePlanList"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/my-page-sales-management",
        name: "Admin.MyPageSalesManagement",
        component: () => import ("../views/admin/MyPageSalesManagement"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/my-page-availability-setting",
        name: "Admin.MyPageAvailabilitySetting",
        component: () => import ("../views/admin/MyPageAvailabilitySetting"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/my-page-availability-setting/create",
        name: "Admin.MyPageAvailabilitySetting.Create",
        component: () => import ("../views/admin/MyPageAvailabilitySettingCreate"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/my-page-childcare-report",
        name: "Admin.MyPageChildcareReport",
        component: () => import ("../views/admin/MyPageChildcareReport"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/my-page-review-list",
        name: "Admin.MyPageReviewList",
        component: () => import ("../views/admin/MyPageReviewList"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/childcare-column/create",
        name: "Admin.MyPageChildcareCreateColumn",
        component: () => import ("../views/admin/MyPageChildcareCreateColumn"),
        meta: { requiresAuthSchool: true }
    },
    {
        path: "/school/childcare-column/update/:id",
        name: "Admin.MyPageChildcareColumnUpdate",
        component: () => import ("../views/admin/MyPageChildcareColumnUpdate"),
        meta: { requiresAuthSchool: true }
    },
]
