export interface CategoryInput {
    name: string;
    en_name: string;
    description: string;
    icon: string;
    position: string;
    is_top: boolean;
    vertical_product_style: boolean;
}

export interface WriterInput {
    name: string;
    en_name: string;
    bio: string;
    image: string;
    level: string;
}

export interface PublisherInput {
    name: string;
    en_name: string;
    description: string;
    image: string;
}

export interface TeacherInput {
    name: string;
    en_name: string;
    description: string;
    image: string;
}

export interface InstitutionInput {
    name: string;
    en_name: string;
    description: string;
    image: string;
}

export interface PaperInput {
    name: string;
    en_name: string;
    description: string;
    image: string;
}

export interface KeywordInput {
    name: string;
    en_name: string;
    description: string;
}

export interface CouponInput {
    name: string;
    en_name: string;
    code: string;
    discount: string;
    discount_unit: string;
    minimum_purchase: string;
    start_on: Date | null;
    uses_limit: string;
    expires_on: Date | null;
}

export interface SalesInput {
    title: string;
    en_title: string;
    image: string;
    start_on: Date;
    expires_on: Date;
    discount: string;
    discount_unit: string;
}


export interface BannerInput {
    name: string;
    url: string;
}

export interface SectionInput {
    title: string;
    icon: string;
    type: string;
    category: string;
    writer: string;
    publisher: string;
    teacher: string;
    institution: string;
    paper: string;
    products: string[];
    position: string;
}

export interface AdminInput {
    name: string;
    phone: string;
    email: string;
    password: string;
    role: string;
}

export interface SiteInput {
    logo: string;
    icon: string;
    site_title: string;
    slogan: string;
    meta_title: string;
    meta_description: string;
    keywords: string[];
    og_title: string;
    og_description: string;
    og_image: string;
    facebook: string;
    instagram: string;
    youtube: string;
    twitter: string;
    footer_note: string;
}

export interface ProfileInput {
    name: string;
    email: string;
    avatar: string;
}

export interface TermsInput {
    terms_and_condition: string;
    privacy_policy: string;
}

export interface FeedbackInput {
    name: string;
    title: string;
    image: string;
    description: string;
    rating: number;
}