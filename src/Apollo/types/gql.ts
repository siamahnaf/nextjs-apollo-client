/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\nmutation signup($signupInput: SignupInput!) {\n  signup(signupInput: $signupInput) {\n    message\n  }\n}\n": types.SignupDocument,
    "\nmutation verifyPhone($verifyPhoneInput: VerifyPhoneInput!) {\n  verifyPhone(verifyPhoneInput: $verifyPhoneInput) {\n    message\n    token\n  }\n}\n": types.VerifyPhoneDocument,
    "\nmutation resendOtp($phone: String!) {\n  resendOtp(phone: $phone) {\n    message\n  }\n}\n": types.ResendOtpDocument,
    "\nquery getProfile {\n  getProfile {\n    id\n    name\n    phone\n    email\n    avatar\n    is_verified\n    role\n  }\n}\n": types.GetProfileDocument,
    "\nmutation updateProfile($updateUserInput: UpdateUserInput!) {\n  updateProfile(updateUserInput: $updateUserInput) {\n    message\n  }\n}\n": types.UpdateProfileDocument,
    "\nquery getAdminAnalytics {\n  getAdminAnalytics {\n    platformCharge\n    totalProducts\n    totalReviews\n    totalOrders\n    totalSeller\n    totalIncome\n    totalPaid\n    currentAmount\n    totalSale\n  }\n}\n": types.GetAdminAnalyticsDocument,
    "\nmutation addBanners($bannerDto: BannerDto!) {\n  addBanners(bannerDto: $bannerDto) {\n    message\n  }\n}\n": types.AddBannersDocument,
    "\nquery getBanners {\n  getBanners {\n    id\n    name\n    url\n  }\n}\n": types.GetBannersDocument,
    "\nmutation updateBanner($bannerDto: BannerDto!, $updateBannerId: Float!) {\n  updateBanner(bannerDto: $bannerDto, id: $updateBannerId) {\n    message\n  }\n}\n": types.UpdateBannerDocument,
    "\nmutation deleteBanner($deleteBannerId: Float!) {\n  deleteBanner(id: $deleteBannerId) {\n    message\n  }\n}\n": types.DeleteBannerDocument,
    "\nmutation addCategory($categoryDto: CategoryDto!) {\n  addCategory(categoryDto: $categoryDto) {\n    message\n  }\n}\n": types.AddCategoryDocument,
    "\nquery getCategories($searchDto: SearchDto!) {\n  getCategories(searchDto: $searchDto) {\n    results {\n      id\n      name\n      icon\n      slug\n      position\n      is_top\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetCategoriesDocument,
    "\nmutation deleteCategory($deleteCategoryId: Float!) {\n  deleteCategory(id: $deleteCategoryId) {\n    message\n  }\n}\n": types.DeleteCategoryDocument,
    "\nquery getCategory($slug: String!) {\n  getCategory(slug: $slug) {\n    id\n    name\n    en_name\n    description\n    icon\n    vertical_product_style\n    position\n    is_top\n  }\n}\n": types.GetCategoryDocument,
    "\nmutation updateCategory($categoryDto: CategoryDto!, $updateCategoryId: Float!) {\n  updateCategory(categoryDto: $categoryDto, id: $updateCategoryId) {\n    message\n  }\n}\n": types.UpdateCategoryDocument,
    "\nmutation addCoupon($couponDto: CouponDto!) {\n  addCoupon(couponDto: $couponDto) {\n    message\n  }\n}\n": types.AddCouponDocument,
    "\nquery getCoupons($searchDto: SearchDto!) {\n  getCoupons(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      code\n      discount\n      discount_unit\n      minimum_purchase\n      start_on\n      expires_on\n      uses_limit\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetCouponsDocument,
    "\nmutation deleteCoupon($deleteCouponId: Float!) {\n  deleteCoupon(id: $deleteCouponId) {\n    message\n  }\n}\n": types.DeleteCouponDocument,
    "\nquery getCoupon($slug: String!) {\n  getCoupon(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    code\n    discount\n    discount_unit\n    minimum_purchase\n    start_on\n    expires_on\n    uses_limit\n  }\n}\n": types.GetCouponDocument,
    "\nmutation updateCoupon($couponDto: CouponDto!, $updateCouponId: Float!) {\n  updateCoupon(couponDto: $couponDto, id: $updateCouponId) {\n    message\n  }\n}\n": types.UpdateCouponDocument,
    "\nmutation addFeedback($feedbackDto: FeedbackDto!) {\n  addFeedback(feedbackDto: $feedbackDto) {\n    message\n  }\n}\n": types.AddFeedbackDocument,
    "\nquery getFeedbacks($searchDto: SearchDto!) {\n  getFeedbacks(searchDto: $searchDto) {\n    results {\n      id\n      name\n      title\n      image\n      description\n      rating\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetFeedbacksDocument,
    "\nmutation deleteFeedback($deleteFeedbackId: Float!) {\n  deleteFeedback(id: $deleteFeedbackId) {\n    message\n  }\n}\n": types.DeleteFeedbackDocument,
    "\nquery getFeedback($getFeedbackId: Float!) {\n  getFeedback(id: $getFeedbackId) {\n    id\n    name\n    title\n    image\n    description\n    rating\n  }\n}\n": types.GetFeedbackDocument,
    "\nmutation updateFeedback($feedbackDto: FeedbackDto!, $updateFeedbackId: Float!) {\n  updateFeedback(feedbackDto: $feedbackDto, id: $updateFeedbackId) {\n    message\n  }\n}\n": types.UpdateFeedbackDocument,
    "\nmutation addInstitution($institutionDto: InstitutionDto!) {\n  addInstitution(institutionDto: $institutionDto) {\n    message\n  }\n}\n": types.AddInstitutionDocument,
    "\nquery getInstitutions($searchDto: SearchDto!) {\n  getInstitutions(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetInstitutionsDocument,
    "\nmutation deleteInstitution($deleteInstitutionId: Float!) {\n  deleteInstitution(id: $deleteInstitutionId) {\n    message\n  }\n}\n": types.DeleteInstitutionDocument,
    "\nquery getInstitution($slug: String!) {\n  getInstitution(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    description\n    image\n  }\n}\n": types.GetInstitutionDocument,
    "\nmutation updateInstitution($institutionDto: InstitutionDto!, $updateInstitutionId: Float!) {\n  updateInstitution(institutionDto: $institutionDto, id: $updateInstitutionId) {\n    message\n  }\n}\n": types.UpdateInstitutionDocument,
    "\nquery getOrders($searchDto: SearchDto!) {\n  getOrders(searchDto: $searchDto) {\n    results {\n      id\n      orderId\n      products {\n        id\n        name\n        category {\n          id\n          name\n        }\n        writer {\n          id\n          name\n        }\n        teacher {\n          id\n          name\n        }\n        seller {\n          id\n          shop_name\n        }\n        total_price\n        image\n      }\n      coupon_amount\n      download_limit\n      download_number {\n        id\n        download\n      }\n      applied_coupon\n      total_price\n      payment_id\n      user {\n        id\n        name\n        phone\n        email\n        avatar\n      }\n      status\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetOrdersDocument,
    "\nmutation increaseDownloadLimit($increaseDownloadLimitId: Float!, $limit: Float!) {\n  increaseDownloadLimit(id: $increaseDownloadLimitId, limit: $limit) {\n    message\n  }\n}\n": types.IncreaseDownloadLimitDocument,
    "\nmutation addPaper($paperDto: PaperDto!) {\n  addPaper(paperDto: $paperDto) {\n    message\n  }\n}\n": types.AddPaperDocument,
    "\nquery getPapers($searchDto: SearchDto!) {\n  getPapers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetPapersDocument,
    "\nmutation deletePaper($deletePaperId: Float!) {\n  deletePaper(id: $deletePaperId) {\n    message\n  }\n}\n": types.DeletePaperDocument,
    "\nquery getPaper($slug: String!) {\n  getPaper(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    description\n    image\n  }\n}\n": types.GetPaperDocument,
    "\nmutation updatePaper($paperDto: PaperDto!, $updatePaperId: Float!) {\n  updatePaper(paperDto: $paperDto, id: $updatePaperId) {\n    message\n  }\n}\n": types.UpdatePaperDocument,
    "\nquery getPlatform {\n  getPlatform {\n    charge\n  }\n}\n": types.GetPlatformDocument,
    "\nmutation addPlatform($platformDto: PlatformDto!) {\n  addPlatform(platformDto: $platformDto) {\n    message\n  }\n}\n": types.AddPlatformDocument,
    "\nquery getAdminProducts($searchDto: SearchDto!) {\n  getAdminProducts(searchDto: $searchDto) {\n    results {\n      id\n      name\n      en_name\n      seller {\n        id\n        shop_name\n        contact_number\n      }\n      category {\n        id\n        name\n      }\n      writer {\n        id\n        name\n      }\n      publisher {\n        id\n        name\n      }\n      teacher {\n        id\n        name\n      }\n      institution {\n        id\n        name\n      }\n      paper {\n        id\n        name\n      }\n      keywords\n      image\n      file\n      pages\n      edition\n      isbn\n      flash {\n        id\n        title\n      }\n      price\n      discount\n      discount_unit\n      description\n      is_approved\n      specification {\n        key\n        value\n      }\n      visibility\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetAdminProductsDocument,
    "\nmutation deleteProduct($deleteProductId: Float!) {\n  deleteProduct(id: $deleteProductId) {\n    message\n  }\n}\n": types.DeleteProductDocument,
    "\nmutation approvedProduct($approvedProductId: Float!, $approved: Boolean!) {\n  approvedProduct(id: $approvedProductId, approved: $approved) {\n    message\n  }\n}\n": types.ApprovedProductDocument,
    "\nquery getProducts($productSearchDto: ProductSearchDto!) {\n  getProducts(productSearchDto: $productSearchDto) {\n    results {\n      id\n      name\n      image\n      seller {\n        id\n        shop_name\n      }\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetProductsDocument,
    "\nmutation addPublisher($publisherDto: PublisherDto!) {\n  addPublisher(publisherDto: $publisherDto) {\n    message\n  }\n}\n": types.AddPublisherDocument,
    "\nquery getPublishers($searchDto: SearchDto!) {\n  getPublishers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetPublishersDocument,
    "\nmutation deletePublisher($deletePublisherId: Float!) {\n  deletePublisher(id: $deletePublisherId) {\n    message\n  }\n}\n": types.DeletePublisherDocument,
    "\nquery getPublisher($slug: String!) {\n  getPublisher(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    description\n    image\n  }\n}\n": types.GetPublisherDocument,
    "\nmutation updatePublisher($publisherDto: PublisherDto!, $updatePublisherId: Float!) {\n  updatePublisher(publisherDto: $publisherDto, id: $updatePublisherId) {\n    message\n  }\n}\n": types.UpdatePublisherDocument,
    "\nquery getRequests($searchDto: SearchDto!) {\n  getRequests(searchDto: $searchDto) {\n    results {\n      id\n      email\n      phone\n      status\n      message\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetRequestsDocument,
    "\nmutation deleteRequest($deleteRequestId: Float!) {\n  deleteRequest(id: $deleteRequestId) {\n    message\n  }\n}\n": types.DeleteRequestDocument,
    "\nmutation approveRequest($approvedRequestId: Float!) {\n  approvedRequest(id: $approvedRequestId) {\n    message\n  }\n}\n": types.ApproveRequestDocument,
    "\nquery getReviewByAdmin($searchDto: SearchDto!) {\n  getReviewByAdmin(searchDto: $searchDto) {\n    results {\n      id\n      user {\n        id\n        name\n        phone\n        email\n      }\n      product {\n        id\n        name\n        slug\n        category {\n          id\n          name\n        }\n        writer {\n          id\n          name\n        }\n        image\n        total_price\n        publisher {\n          id\n          name\n        }\n        teacher {\n          id\n          name\n        }\n        institution {\n          id\n          name\n        }\n        paper {\n          id\n          name\n        }\n      }\n      comment\n      reply\n      rating\n      publish\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetReviewByAdminDocument,
    "\nmutation changeReviewVisibility($reviewId: Float!) {\n  changeReviewVisibility(reviewId: $reviewId) {\n    message\n  }\n}\n": types.ChangeReviewVisibilityDocument,
    "\nmutation addSale($salesDto: SalesDto!) {\n  addSale(salesDto: $salesDto) {\n    message\n  }\n}\n": types.AddSaleDocument,
    "\nquery getSales($searchDto: SearchDto!) {\n  getSales(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      title\n      image\n      start_on\n      expires_on\n      discount\n      discount_unit\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetSalesDocument,
    "\nmutation deleteSale($deleteSaleId: Float!) {\n  deleteSale(id: $deleteSaleId) {\n    message\n  }\n}\n": types.DeleteSaleDocument,
    "\nquery getSale($slug: String!) {\n  getSale(slug: $slug) {\n    id\n    slug\n    title\n    en_title\n    image\n    start_on\n    expires_on\n    discount\n    discount_unit\n  }\n}\n": types.GetSaleDocument,
    "\nmutation updateSale($salesDto: SalesDto!, $updateSaleId: Float!) {\n  updateSale(salesDto: $salesDto, id: $updateSaleId) {\n    message\n  }\n}\n": types.UpdateSaleDocument,
    "\nmutation addSection($sectionDto: SectionDto!) {\n  addSection(sectionDto: $sectionDto) {\n    message\n  }\n}\n": types.AddSectionDocument,
    "\nquery getSections($searchDto: SearchDto!) {\n  getSections(searchDto: $searchDto) {\n    results {\n      id\n      title\n      icon\n      type\n      position\n      products {\n        id\n      }\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetSectionsDocument,
    "\nmutation deleteSection($deleteSectionId: Float!) {\n  deleteSection(id: $deleteSectionId) {\n    message\n  }\n}\n": types.DeleteSectionDocument,
    "\nquery getSection($getSectionId: Float!) {\n  getSection(id: $getSectionId) {\n    id\n    title\n    icon\n    type\n    position\n    category {\n      id\n      name\n    }\n    writer {\n      id\n      name\n    }\n    publisher {\n      id\n      name\n    }\n    teacher {\n      id\n      name\n    }\n    institution {\n      id\n      name\n    }\n    paper {\n      id\n      name\n    }\n    products {\n      id\n      name\n    }\n  }\n}\n": types.GetSectionDocument,
    "\nmutation updateSection($sectionDto: SectionDto!, $updateSectionId: Float!) {\n  updateSection(sectionDto: $sectionDto, id: $updateSectionId) {\n    message\n  }\n}\n": types.UpdateSectionDocument,
    "\nquery getSellers($searchDto: SearchDto!) {\n  getSellers(searchDto: $searchDto) {\n    results {\n      id\n      type\n      owner_name\n      contact_number\n      email\n      shop_name\n      slug\n      address\n      organization_name\n      trade_license\n      tin\n      logo\n      banner\n      is_verified\n      need_review\n      user {\n        id\n        name\n        phone\n        email\n        avatar\n      }\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetSellersDocument,
    "\nmutation deleteSeller($deleteSellerId: Float!) {\n  deleteSeller(id: $deleteSellerId) {\n    message\n  }\n}\n": types.DeleteSellerDocument,
    "\nmutation acceptSeller($acceptSellerId: Float!) {\n  acceptSeller(id: $acceptSellerId) {\n    message\n  }\n}\n": types.AcceptSellerDocument,
    "\nmutation reviewSellerAccept($reviewSellerAcceptId: Float!) {\n  reviewSellerAccept(id: $reviewSellerAcceptId) {\n    message\n  }\n}\n": types.ReviewSellerAcceptDocument,
    "\nmutation addSiteSetting($siteDto: SettingsDto!) {\n  addSettings(siteDto: $siteDto) {\n    message\n  }\n}\n": types.AddSiteSettingDocument,
    "\nquery getSiteSetting {\n  getSiteSetting {\n    id\n    logo\n    icon\n    site_title\n    slogan\n    meta_title\n    meta_description\n    keywords\n    og_title\n    og_description\n    og_image\n    facebook\n    instagram\n    youtube\n    twitter\n    footer_note\n  }\n}\n": types.GetSiteSettingDocument,
    "\nmutation addTeacher($teacherDto: TeacherDto!) {\n  addTeacher(teacherDto: $teacherDto) {\n    message\n  }\n}\n": types.AddTeacherDocument,
    "\nquery getTeachers($searchDto: SearchDto!) {\n  getTeachers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      en_name\n      description\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetTeachersDocument,
    "\nmutation deleteTeacher($deleteTeacherId: Float!) {\n  deleteTeacher(id: $deleteTeacherId) {\n    message\n  }\n}\n": types.DeleteTeacherDocument,
    "\nquery getTeacher($slug: String!) {\n  getTeacher(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    description\n    image\n  }\n}\n": types.GetTeacherDocument,
    "\nmutation updateTeacher($teacherDto: TeacherDto!, $updateTeacherId: Float!) {\n  updateTeacher(teacherDto: $teacherDto, id: $updateTeacherId) {\n    message\n  }\n}\n": types.UpdateTeacherDocument,
    "\nmutation addSiteTerms($termsDto: TermsDto!) {\n  addSiteTerms(termsDto: $termsDto) {\n    message\n  }\n}\n": types.AddSiteTermsDocument,
    "\nquery getSiteTerms {\n  getSiteTerms {\n    id\n    terms_and_condition\n    privacy_policy\n  }\n}\n": types.GetSiteTermsDocument,
    "\nquery getUsers($searchInput: SearchDto!) {\n  getUsers(searchInput: $searchInput) {\n    results {\n      id\n      name\n      phone\n      email\n      avatar\n      provider {\n        name\n      }\n      is_banned\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetUsersDocument,
    "\nmutation banOrUnbannedUser($banOrUnbannedUserId: Float!) {\n  banOrUnbannedUser(id: $banOrUnbannedUserId) {\n    message\n  }\n}\n": types.BanOrUnbannedUserDocument,
    "\nmutation addAdmins($adminInput: AdminInput!) {\n  addAdmins(adminInput: $adminInput) {\n    message\n  }\n}\n": types.AddAdminsDocument,
    "\nquery getAdmins($searchInput: SearchDto!) {\n  getAdmins(searchInput: $searchInput) {\n    results {\n      id\n      name\n      phone\n      email\n      avatar\n      role\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetAdminsDocument,
    "\nmutation removeAdmin($removeAdminId: String!) {\n  removeAdmin(id: $removeAdminId) {\n    message\n  }\n}\n": types.RemoveAdminDocument,
    "\nquery getWithdrawByAdmin($searchDto: SearchDto!) {\n  getWithdrawByAdmin(searchDto: $searchDto) {\n    results {\n      id\n      seller {\n        id\n        owner_name\n        contact_number\n        email\n        shop_name\n        address\n        method {\n          id\n          bank_name\n          acc_number\n          routing\n          branch\n          acc_holder_name\n          bkash\n          nagad\n          upay\n          rocket\n          updated_at\n          created_at\n        }\n      }\n      amount\n      released_by {\n        id\n        name\n      }\n      method\n      status\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetWithdrawByAdminDocument,
    "\nmutation releasePayment($releasePaymentId: Float!, $status: String!) {\n  releasePayment(id: $releasePaymentId, status: $status) {\n    message\n  }\n}\n": types.ReleasePaymentDocument,
    "\nquery getSellerAnalyticsForAdmin($getSellerAnalyticsForAdminId: Float!) {\n  getSellerAnalyticsForAdmin(id: $getSellerAnalyticsForAdminId) {\n    totalDue\n    totalIncome\n    totalIncomeWithoutCharge\n    totalWithdraw\n  }\n}\n": types.GetSellerAnalyticsForAdminDocument,
    "\nmutation addWriter($writerDto: WriterDto!) {\n  addWriter(writerDto: $writerDto) {\n    message\n  }\n}\n": types.AddWriterDocument,
    "\nquery getWriters($searchDto: SearchDto!) {\n  getWriters(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n      level\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetWritersDocument,
    "\nmutation deleteWriter($deleteWriterId: Float!) {\n  deleteWriter(id: $deleteWriterId) {\n    message\n  }\n}\n": types.DeleteWriterDocument,
    "\nquery getWriter($slug: String!) {\n  getWriter(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    bio\n    image\n    level\n  }\n}\n": types.GetWriterDocument,
    "\nmutation updateWriter($writerDto: WriterDto!, $updateWriterId: Float!) {\n  updateWriter(writerDto: $writerDto, id: $updateWriterId) {\n    message\n  }\n}\n": types.UpdateWriterDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation signup($signupInput: SignupInput!) {\n  signup(signupInput: $signupInput) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation signup($signupInput: SignupInput!) {\n  signup(signupInput: $signupInput) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation verifyPhone($verifyPhoneInput: VerifyPhoneInput!) {\n  verifyPhone(verifyPhoneInput: $verifyPhoneInput) {\n    message\n    token\n  }\n}\n"): (typeof documents)["\nmutation verifyPhone($verifyPhoneInput: VerifyPhoneInput!) {\n  verifyPhone(verifyPhoneInput: $verifyPhoneInput) {\n    message\n    token\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation resendOtp($phone: String!) {\n  resendOtp(phone: $phone) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation resendOtp($phone: String!) {\n  resendOtp(phone: $phone) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getProfile {\n  getProfile {\n    id\n    name\n    phone\n    email\n    avatar\n    is_verified\n    role\n  }\n}\n"): (typeof documents)["\nquery getProfile {\n  getProfile {\n    id\n    name\n    phone\n    email\n    avatar\n    is_verified\n    role\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateProfile($updateUserInput: UpdateUserInput!) {\n  updateProfile(updateUserInput: $updateUserInput) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation updateProfile($updateUserInput: UpdateUserInput!) {\n  updateProfile(updateUserInput: $updateUserInput) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getAdminAnalytics {\n  getAdminAnalytics {\n    platformCharge\n    totalProducts\n    totalReviews\n    totalOrders\n    totalSeller\n    totalIncome\n    totalPaid\n    currentAmount\n    totalSale\n  }\n}\n"): (typeof documents)["\nquery getAdminAnalytics {\n  getAdminAnalytics {\n    platformCharge\n    totalProducts\n    totalReviews\n    totalOrders\n    totalSeller\n    totalIncome\n    totalPaid\n    currentAmount\n    totalSale\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addBanners($bannerDto: BannerDto!) {\n  addBanners(bannerDto: $bannerDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addBanners($bannerDto: BannerDto!) {\n  addBanners(bannerDto: $bannerDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getBanners {\n  getBanners {\n    id\n    name\n    url\n  }\n}\n"): (typeof documents)["\nquery getBanners {\n  getBanners {\n    id\n    name\n    url\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateBanner($bannerDto: BannerDto!, $updateBannerId: Float!) {\n  updateBanner(bannerDto: $bannerDto, id: $updateBannerId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation updateBanner($bannerDto: BannerDto!, $updateBannerId: Float!) {\n  updateBanner(bannerDto: $bannerDto, id: $updateBannerId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteBanner($deleteBannerId: Float!) {\n  deleteBanner(id: $deleteBannerId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deleteBanner($deleteBannerId: Float!) {\n  deleteBanner(id: $deleteBannerId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addCategory($categoryDto: CategoryDto!) {\n  addCategory(categoryDto: $categoryDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addCategory($categoryDto: CategoryDto!) {\n  addCategory(categoryDto: $categoryDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getCategories($searchDto: SearchDto!) {\n  getCategories(searchDto: $searchDto) {\n    results {\n      id\n      name\n      icon\n      slug\n      position\n      is_top\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getCategories($searchDto: SearchDto!) {\n  getCategories(searchDto: $searchDto) {\n    results {\n      id\n      name\n      icon\n      slug\n      position\n      is_top\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteCategory($deleteCategoryId: Float!) {\n  deleteCategory(id: $deleteCategoryId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deleteCategory($deleteCategoryId: Float!) {\n  deleteCategory(id: $deleteCategoryId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getCategory($slug: String!) {\n  getCategory(slug: $slug) {\n    id\n    name\n    en_name\n    description\n    icon\n    vertical_product_style\n    position\n    is_top\n  }\n}\n"): (typeof documents)["\nquery getCategory($slug: String!) {\n  getCategory(slug: $slug) {\n    id\n    name\n    en_name\n    description\n    icon\n    vertical_product_style\n    position\n    is_top\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateCategory($categoryDto: CategoryDto!, $updateCategoryId: Float!) {\n  updateCategory(categoryDto: $categoryDto, id: $updateCategoryId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation updateCategory($categoryDto: CategoryDto!, $updateCategoryId: Float!) {\n  updateCategory(categoryDto: $categoryDto, id: $updateCategoryId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addCoupon($couponDto: CouponDto!) {\n  addCoupon(couponDto: $couponDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addCoupon($couponDto: CouponDto!) {\n  addCoupon(couponDto: $couponDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getCoupons($searchDto: SearchDto!) {\n  getCoupons(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      code\n      discount\n      discount_unit\n      minimum_purchase\n      start_on\n      expires_on\n      uses_limit\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getCoupons($searchDto: SearchDto!) {\n  getCoupons(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      code\n      discount\n      discount_unit\n      minimum_purchase\n      start_on\n      expires_on\n      uses_limit\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteCoupon($deleteCouponId: Float!) {\n  deleteCoupon(id: $deleteCouponId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deleteCoupon($deleteCouponId: Float!) {\n  deleteCoupon(id: $deleteCouponId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getCoupon($slug: String!) {\n  getCoupon(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    code\n    discount\n    discount_unit\n    minimum_purchase\n    start_on\n    expires_on\n    uses_limit\n  }\n}\n"): (typeof documents)["\nquery getCoupon($slug: String!) {\n  getCoupon(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    code\n    discount\n    discount_unit\n    minimum_purchase\n    start_on\n    expires_on\n    uses_limit\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateCoupon($couponDto: CouponDto!, $updateCouponId: Float!) {\n  updateCoupon(couponDto: $couponDto, id: $updateCouponId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation updateCoupon($couponDto: CouponDto!, $updateCouponId: Float!) {\n  updateCoupon(couponDto: $couponDto, id: $updateCouponId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addFeedback($feedbackDto: FeedbackDto!) {\n  addFeedback(feedbackDto: $feedbackDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addFeedback($feedbackDto: FeedbackDto!) {\n  addFeedback(feedbackDto: $feedbackDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getFeedbacks($searchDto: SearchDto!) {\n  getFeedbacks(searchDto: $searchDto) {\n    results {\n      id\n      name\n      title\n      image\n      description\n      rating\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getFeedbacks($searchDto: SearchDto!) {\n  getFeedbacks(searchDto: $searchDto) {\n    results {\n      id\n      name\n      title\n      image\n      description\n      rating\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteFeedback($deleteFeedbackId: Float!) {\n  deleteFeedback(id: $deleteFeedbackId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deleteFeedback($deleteFeedbackId: Float!) {\n  deleteFeedback(id: $deleteFeedbackId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getFeedback($getFeedbackId: Float!) {\n  getFeedback(id: $getFeedbackId) {\n    id\n    name\n    title\n    image\n    description\n    rating\n  }\n}\n"): (typeof documents)["\nquery getFeedback($getFeedbackId: Float!) {\n  getFeedback(id: $getFeedbackId) {\n    id\n    name\n    title\n    image\n    description\n    rating\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateFeedback($feedbackDto: FeedbackDto!, $updateFeedbackId: Float!) {\n  updateFeedback(feedbackDto: $feedbackDto, id: $updateFeedbackId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation updateFeedback($feedbackDto: FeedbackDto!, $updateFeedbackId: Float!) {\n  updateFeedback(feedbackDto: $feedbackDto, id: $updateFeedbackId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addInstitution($institutionDto: InstitutionDto!) {\n  addInstitution(institutionDto: $institutionDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addInstitution($institutionDto: InstitutionDto!) {\n  addInstitution(institutionDto: $institutionDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getInstitutions($searchDto: SearchDto!) {\n  getInstitutions(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getInstitutions($searchDto: SearchDto!) {\n  getInstitutions(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteInstitution($deleteInstitutionId: Float!) {\n  deleteInstitution(id: $deleteInstitutionId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deleteInstitution($deleteInstitutionId: Float!) {\n  deleteInstitution(id: $deleteInstitutionId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getInstitution($slug: String!) {\n  getInstitution(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    description\n    image\n  }\n}\n"): (typeof documents)["\nquery getInstitution($slug: String!) {\n  getInstitution(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    description\n    image\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateInstitution($institutionDto: InstitutionDto!, $updateInstitutionId: Float!) {\n  updateInstitution(institutionDto: $institutionDto, id: $updateInstitutionId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation updateInstitution($institutionDto: InstitutionDto!, $updateInstitutionId: Float!) {\n  updateInstitution(institutionDto: $institutionDto, id: $updateInstitutionId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getOrders($searchDto: SearchDto!) {\n  getOrders(searchDto: $searchDto) {\n    results {\n      id\n      orderId\n      products {\n        id\n        name\n        category {\n          id\n          name\n        }\n        writer {\n          id\n          name\n        }\n        teacher {\n          id\n          name\n        }\n        seller {\n          id\n          shop_name\n        }\n        total_price\n        image\n      }\n      coupon_amount\n      download_limit\n      download_number {\n        id\n        download\n      }\n      applied_coupon\n      total_price\n      payment_id\n      user {\n        id\n        name\n        phone\n        email\n        avatar\n      }\n      status\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getOrders($searchDto: SearchDto!) {\n  getOrders(searchDto: $searchDto) {\n    results {\n      id\n      orderId\n      products {\n        id\n        name\n        category {\n          id\n          name\n        }\n        writer {\n          id\n          name\n        }\n        teacher {\n          id\n          name\n        }\n        seller {\n          id\n          shop_name\n        }\n        total_price\n        image\n      }\n      coupon_amount\n      download_limit\n      download_number {\n        id\n        download\n      }\n      applied_coupon\n      total_price\n      payment_id\n      user {\n        id\n        name\n        phone\n        email\n        avatar\n      }\n      status\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation increaseDownloadLimit($increaseDownloadLimitId: Float!, $limit: Float!) {\n  increaseDownloadLimit(id: $increaseDownloadLimitId, limit: $limit) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation increaseDownloadLimit($increaseDownloadLimitId: Float!, $limit: Float!) {\n  increaseDownloadLimit(id: $increaseDownloadLimitId, limit: $limit) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addPaper($paperDto: PaperDto!) {\n  addPaper(paperDto: $paperDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addPaper($paperDto: PaperDto!) {\n  addPaper(paperDto: $paperDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getPapers($searchDto: SearchDto!) {\n  getPapers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getPapers($searchDto: SearchDto!) {\n  getPapers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deletePaper($deletePaperId: Float!) {\n  deletePaper(id: $deletePaperId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deletePaper($deletePaperId: Float!) {\n  deletePaper(id: $deletePaperId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getPaper($slug: String!) {\n  getPaper(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    description\n    image\n  }\n}\n"): (typeof documents)["\nquery getPaper($slug: String!) {\n  getPaper(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    description\n    image\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updatePaper($paperDto: PaperDto!, $updatePaperId: Float!) {\n  updatePaper(paperDto: $paperDto, id: $updatePaperId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation updatePaper($paperDto: PaperDto!, $updatePaperId: Float!) {\n  updatePaper(paperDto: $paperDto, id: $updatePaperId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getPlatform {\n  getPlatform {\n    charge\n  }\n}\n"): (typeof documents)["\nquery getPlatform {\n  getPlatform {\n    charge\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addPlatform($platformDto: PlatformDto!) {\n  addPlatform(platformDto: $platformDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addPlatform($platformDto: PlatformDto!) {\n  addPlatform(platformDto: $platformDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getAdminProducts($searchDto: SearchDto!) {\n  getAdminProducts(searchDto: $searchDto) {\n    results {\n      id\n      name\n      en_name\n      seller {\n        id\n        shop_name\n        contact_number\n      }\n      category {\n        id\n        name\n      }\n      writer {\n        id\n        name\n      }\n      publisher {\n        id\n        name\n      }\n      teacher {\n        id\n        name\n      }\n      institution {\n        id\n        name\n      }\n      paper {\n        id\n        name\n      }\n      keywords\n      image\n      file\n      pages\n      edition\n      isbn\n      flash {\n        id\n        title\n      }\n      price\n      discount\n      discount_unit\n      description\n      is_approved\n      specification {\n        key\n        value\n      }\n      visibility\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getAdminProducts($searchDto: SearchDto!) {\n  getAdminProducts(searchDto: $searchDto) {\n    results {\n      id\n      name\n      en_name\n      seller {\n        id\n        shop_name\n        contact_number\n      }\n      category {\n        id\n        name\n      }\n      writer {\n        id\n        name\n      }\n      publisher {\n        id\n        name\n      }\n      teacher {\n        id\n        name\n      }\n      institution {\n        id\n        name\n      }\n      paper {\n        id\n        name\n      }\n      keywords\n      image\n      file\n      pages\n      edition\n      isbn\n      flash {\n        id\n        title\n      }\n      price\n      discount\n      discount_unit\n      description\n      is_approved\n      specification {\n        key\n        value\n      }\n      visibility\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteProduct($deleteProductId: Float!) {\n  deleteProduct(id: $deleteProductId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deleteProduct($deleteProductId: Float!) {\n  deleteProduct(id: $deleteProductId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation approvedProduct($approvedProductId: Float!, $approved: Boolean!) {\n  approvedProduct(id: $approvedProductId, approved: $approved) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation approvedProduct($approvedProductId: Float!, $approved: Boolean!) {\n  approvedProduct(id: $approvedProductId, approved: $approved) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getProducts($productSearchDto: ProductSearchDto!) {\n  getProducts(productSearchDto: $productSearchDto) {\n    results {\n      id\n      name\n      image\n      seller {\n        id\n        shop_name\n      }\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getProducts($productSearchDto: ProductSearchDto!) {\n  getProducts(productSearchDto: $productSearchDto) {\n    results {\n      id\n      name\n      image\n      seller {\n        id\n        shop_name\n      }\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addPublisher($publisherDto: PublisherDto!) {\n  addPublisher(publisherDto: $publisherDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addPublisher($publisherDto: PublisherDto!) {\n  addPublisher(publisherDto: $publisherDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getPublishers($searchDto: SearchDto!) {\n  getPublishers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getPublishers($searchDto: SearchDto!) {\n  getPublishers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deletePublisher($deletePublisherId: Float!) {\n  deletePublisher(id: $deletePublisherId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deletePublisher($deletePublisherId: Float!) {\n  deletePublisher(id: $deletePublisherId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getPublisher($slug: String!) {\n  getPublisher(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    description\n    image\n  }\n}\n"): (typeof documents)["\nquery getPublisher($slug: String!) {\n  getPublisher(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    description\n    image\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updatePublisher($publisherDto: PublisherDto!, $updatePublisherId: Float!) {\n  updatePublisher(publisherDto: $publisherDto, id: $updatePublisherId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation updatePublisher($publisherDto: PublisherDto!, $updatePublisherId: Float!) {\n  updatePublisher(publisherDto: $publisherDto, id: $updatePublisherId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getRequests($searchDto: SearchDto!) {\n  getRequests(searchDto: $searchDto) {\n    results {\n      id\n      email\n      phone\n      status\n      message\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getRequests($searchDto: SearchDto!) {\n  getRequests(searchDto: $searchDto) {\n    results {\n      id\n      email\n      phone\n      status\n      message\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteRequest($deleteRequestId: Float!) {\n  deleteRequest(id: $deleteRequestId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deleteRequest($deleteRequestId: Float!) {\n  deleteRequest(id: $deleteRequestId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation approveRequest($approvedRequestId: Float!) {\n  approvedRequest(id: $approvedRequestId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation approveRequest($approvedRequestId: Float!) {\n  approvedRequest(id: $approvedRequestId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getReviewByAdmin($searchDto: SearchDto!) {\n  getReviewByAdmin(searchDto: $searchDto) {\n    results {\n      id\n      user {\n        id\n        name\n        phone\n        email\n      }\n      product {\n        id\n        name\n        slug\n        category {\n          id\n          name\n        }\n        writer {\n          id\n          name\n        }\n        image\n        total_price\n        publisher {\n          id\n          name\n        }\n        teacher {\n          id\n          name\n        }\n        institution {\n          id\n          name\n        }\n        paper {\n          id\n          name\n        }\n      }\n      comment\n      reply\n      rating\n      publish\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getReviewByAdmin($searchDto: SearchDto!) {\n  getReviewByAdmin(searchDto: $searchDto) {\n    results {\n      id\n      user {\n        id\n        name\n        phone\n        email\n      }\n      product {\n        id\n        name\n        slug\n        category {\n          id\n          name\n        }\n        writer {\n          id\n          name\n        }\n        image\n        total_price\n        publisher {\n          id\n          name\n        }\n        teacher {\n          id\n          name\n        }\n        institution {\n          id\n          name\n        }\n        paper {\n          id\n          name\n        }\n      }\n      comment\n      reply\n      rating\n      publish\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation changeReviewVisibility($reviewId: Float!) {\n  changeReviewVisibility(reviewId: $reviewId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation changeReviewVisibility($reviewId: Float!) {\n  changeReviewVisibility(reviewId: $reviewId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addSale($salesDto: SalesDto!) {\n  addSale(salesDto: $salesDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addSale($salesDto: SalesDto!) {\n  addSale(salesDto: $salesDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getSales($searchDto: SearchDto!) {\n  getSales(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      title\n      image\n      start_on\n      expires_on\n      discount\n      discount_unit\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getSales($searchDto: SearchDto!) {\n  getSales(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      title\n      image\n      start_on\n      expires_on\n      discount\n      discount_unit\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteSale($deleteSaleId: Float!) {\n  deleteSale(id: $deleteSaleId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deleteSale($deleteSaleId: Float!) {\n  deleteSale(id: $deleteSaleId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getSale($slug: String!) {\n  getSale(slug: $slug) {\n    id\n    slug\n    title\n    en_title\n    image\n    start_on\n    expires_on\n    discount\n    discount_unit\n  }\n}\n"): (typeof documents)["\nquery getSale($slug: String!) {\n  getSale(slug: $slug) {\n    id\n    slug\n    title\n    en_title\n    image\n    start_on\n    expires_on\n    discount\n    discount_unit\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateSale($salesDto: SalesDto!, $updateSaleId: Float!) {\n  updateSale(salesDto: $salesDto, id: $updateSaleId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation updateSale($salesDto: SalesDto!, $updateSaleId: Float!) {\n  updateSale(salesDto: $salesDto, id: $updateSaleId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addSection($sectionDto: SectionDto!) {\n  addSection(sectionDto: $sectionDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addSection($sectionDto: SectionDto!) {\n  addSection(sectionDto: $sectionDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getSections($searchDto: SearchDto!) {\n  getSections(searchDto: $searchDto) {\n    results {\n      id\n      title\n      icon\n      type\n      position\n      products {\n        id\n      }\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getSections($searchDto: SearchDto!) {\n  getSections(searchDto: $searchDto) {\n    results {\n      id\n      title\n      icon\n      type\n      position\n      products {\n        id\n      }\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteSection($deleteSectionId: Float!) {\n  deleteSection(id: $deleteSectionId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deleteSection($deleteSectionId: Float!) {\n  deleteSection(id: $deleteSectionId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getSection($getSectionId: Float!) {\n  getSection(id: $getSectionId) {\n    id\n    title\n    icon\n    type\n    position\n    category {\n      id\n      name\n    }\n    writer {\n      id\n      name\n    }\n    publisher {\n      id\n      name\n    }\n    teacher {\n      id\n      name\n    }\n    institution {\n      id\n      name\n    }\n    paper {\n      id\n      name\n    }\n    products {\n      id\n      name\n    }\n  }\n}\n"): (typeof documents)["\nquery getSection($getSectionId: Float!) {\n  getSection(id: $getSectionId) {\n    id\n    title\n    icon\n    type\n    position\n    category {\n      id\n      name\n    }\n    writer {\n      id\n      name\n    }\n    publisher {\n      id\n      name\n    }\n    teacher {\n      id\n      name\n    }\n    institution {\n      id\n      name\n    }\n    paper {\n      id\n      name\n    }\n    products {\n      id\n      name\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateSection($sectionDto: SectionDto!, $updateSectionId: Float!) {\n  updateSection(sectionDto: $sectionDto, id: $updateSectionId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation updateSection($sectionDto: SectionDto!, $updateSectionId: Float!) {\n  updateSection(sectionDto: $sectionDto, id: $updateSectionId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getSellers($searchDto: SearchDto!) {\n  getSellers(searchDto: $searchDto) {\n    results {\n      id\n      type\n      owner_name\n      contact_number\n      email\n      shop_name\n      slug\n      address\n      organization_name\n      trade_license\n      tin\n      logo\n      banner\n      is_verified\n      need_review\n      user {\n        id\n        name\n        phone\n        email\n        avatar\n      }\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getSellers($searchDto: SearchDto!) {\n  getSellers(searchDto: $searchDto) {\n    results {\n      id\n      type\n      owner_name\n      contact_number\n      email\n      shop_name\n      slug\n      address\n      organization_name\n      trade_license\n      tin\n      logo\n      banner\n      is_verified\n      need_review\n      user {\n        id\n        name\n        phone\n        email\n        avatar\n      }\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteSeller($deleteSellerId: Float!) {\n  deleteSeller(id: $deleteSellerId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deleteSeller($deleteSellerId: Float!) {\n  deleteSeller(id: $deleteSellerId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation acceptSeller($acceptSellerId: Float!) {\n  acceptSeller(id: $acceptSellerId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation acceptSeller($acceptSellerId: Float!) {\n  acceptSeller(id: $acceptSellerId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation reviewSellerAccept($reviewSellerAcceptId: Float!) {\n  reviewSellerAccept(id: $reviewSellerAcceptId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation reviewSellerAccept($reviewSellerAcceptId: Float!) {\n  reviewSellerAccept(id: $reviewSellerAcceptId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addSiteSetting($siteDto: SettingsDto!) {\n  addSettings(siteDto: $siteDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addSiteSetting($siteDto: SettingsDto!) {\n  addSettings(siteDto: $siteDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getSiteSetting {\n  getSiteSetting {\n    id\n    logo\n    icon\n    site_title\n    slogan\n    meta_title\n    meta_description\n    keywords\n    og_title\n    og_description\n    og_image\n    facebook\n    instagram\n    youtube\n    twitter\n    footer_note\n  }\n}\n"): (typeof documents)["\nquery getSiteSetting {\n  getSiteSetting {\n    id\n    logo\n    icon\n    site_title\n    slogan\n    meta_title\n    meta_description\n    keywords\n    og_title\n    og_description\n    og_image\n    facebook\n    instagram\n    youtube\n    twitter\n    footer_note\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addTeacher($teacherDto: TeacherDto!) {\n  addTeacher(teacherDto: $teacherDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addTeacher($teacherDto: TeacherDto!) {\n  addTeacher(teacherDto: $teacherDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getTeachers($searchDto: SearchDto!) {\n  getTeachers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      en_name\n      description\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getTeachers($searchDto: SearchDto!) {\n  getTeachers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      en_name\n      description\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteTeacher($deleteTeacherId: Float!) {\n  deleteTeacher(id: $deleteTeacherId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deleteTeacher($deleteTeacherId: Float!) {\n  deleteTeacher(id: $deleteTeacherId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getTeacher($slug: String!) {\n  getTeacher(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    description\n    image\n  }\n}\n"): (typeof documents)["\nquery getTeacher($slug: String!) {\n  getTeacher(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    description\n    image\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateTeacher($teacherDto: TeacherDto!, $updateTeacherId: Float!) {\n  updateTeacher(teacherDto: $teacherDto, id: $updateTeacherId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation updateTeacher($teacherDto: TeacherDto!, $updateTeacherId: Float!) {\n  updateTeacher(teacherDto: $teacherDto, id: $updateTeacherId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addSiteTerms($termsDto: TermsDto!) {\n  addSiteTerms(termsDto: $termsDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addSiteTerms($termsDto: TermsDto!) {\n  addSiteTerms(termsDto: $termsDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getSiteTerms {\n  getSiteTerms {\n    id\n    terms_and_condition\n    privacy_policy\n  }\n}\n"): (typeof documents)["\nquery getSiteTerms {\n  getSiteTerms {\n    id\n    terms_and_condition\n    privacy_policy\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getUsers($searchInput: SearchDto!) {\n  getUsers(searchInput: $searchInput) {\n    results {\n      id\n      name\n      phone\n      email\n      avatar\n      provider {\n        name\n      }\n      is_banned\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getUsers($searchInput: SearchDto!) {\n  getUsers(searchInput: $searchInput) {\n    results {\n      id\n      name\n      phone\n      email\n      avatar\n      provider {\n        name\n      }\n      is_banned\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation banOrUnbannedUser($banOrUnbannedUserId: Float!) {\n  banOrUnbannedUser(id: $banOrUnbannedUserId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation banOrUnbannedUser($banOrUnbannedUserId: Float!) {\n  banOrUnbannedUser(id: $banOrUnbannedUserId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addAdmins($adminInput: AdminInput!) {\n  addAdmins(adminInput: $adminInput) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addAdmins($adminInput: AdminInput!) {\n  addAdmins(adminInput: $adminInput) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getAdmins($searchInput: SearchDto!) {\n  getAdmins(searchInput: $searchInput) {\n    results {\n      id\n      name\n      phone\n      email\n      avatar\n      role\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getAdmins($searchInput: SearchDto!) {\n  getAdmins(searchInput: $searchInput) {\n    results {\n      id\n      name\n      phone\n      email\n      avatar\n      role\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation removeAdmin($removeAdminId: String!) {\n  removeAdmin(id: $removeAdminId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation removeAdmin($removeAdminId: String!) {\n  removeAdmin(id: $removeAdminId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getWithdrawByAdmin($searchDto: SearchDto!) {\n  getWithdrawByAdmin(searchDto: $searchDto) {\n    results {\n      id\n      seller {\n        id\n        owner_name\n        contact_number\n        email\n        shop_name\n        address\n        method {\n          id\n          bank_name\n          acc_number\n          routing\n          branch\n          acc_holder_name\n          bkash\n          nagad\n          upay\n          rocket\n          updated_at\n          created_at\n        }\n      }\n      amount\n      released_by {\n        id\n        name\n      }\n      method\n      status\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getWithdrawByAdmin($searchDto: SearchDto!) {\n  getWithdrawByAdmin(searchDto: $searchDto) {\n    results {\n      id\n      seller {\n        id\n        owner_name\n        contact_number\n        email\n        shop_name\n        address\n        method {\n          id\n          bank_name\n          acc_number\n          routing\n          branch\n          acc_holder_name\n          bkash\n          nagad\n          upay\n          rocket\n          updated_at\n          created_at\n        }\n      }\n      amount\n      released_by {\n        id\n        name\n      }\n      method\n      status\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation releasePayment($releasePaymentId: Float!, $status: String!) {\n  releasePayment(id: $releasePaymentId, status: $status) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation releasePayment($releasePaymentId: Float!, $status: String!) {\n  releasePayment(id: $releasePaymentId, status: $status) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getSellerAnalyticsForAdmin($getSellerAnalyticsForAdminId: Float!) {\n  getSellerAnalyticsForAdmin(id: $getSellerAnalyticsForAdminId) {\n    totalDue\n    totalIncome\n    totalIncomeWithoutCharge\n    totalWithdraw\n  }\n}\n"): (typeof documents)["\nquery getSellerAnalyticsForAdmin($getSellerAnalyticsForAdminId: Float!) {\n  getSellerAnalyticsForAdmin(id: $getSellerAnalyticsForAdminId) {\n    totalDue\n    totalIncome\n    totalIncomeWithoutCharge\n    totalWithdraw\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addWriter($writerDto: WriterDto!) {\n  addWriter(writerDto: $writerDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addWriter($writerDto: WriterDto!) {\n  addWriter(writerDto: $writerDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getWriters($searchDto: SearchDto!) {\n  getWriters(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n      level\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getWriters($searchDto: SearchDto!) {\n  getWriters(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n      level\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteWriter($deleteWriterId: Float!) {\n  deleteWriter(id: $deleteWriterId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deleteWriter($deleteWriterId: Float!) {\n  deleteWriter(id: $deleteWriterId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getWriter($slug: String!) {\n  getWriter(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    bio\n    image\n    level\n  }\n}\n"): (typeof documents)["\nquery getWriter($slug: String!) {\n  getWriter(slug: $slug) {\n    id\n    slug\n    name\n    en_name\n    bio\n    image\n    level\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateWriter($writerDto: WriterDto!, $updateWriterId: Float!) {\n  updateWriter(writerDto: $writerDto, id: $updateWriterId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation updateWriter($writerDto: WriterDto!, $updateWriterId: Float!) {\n  updateWriter(writerDto: $writerDto, id: $updateWriterId) {\n    message\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;