export const PRODUCT_BASE_URL =
    'https://my-json-server.typicode.com/namcoi99/Vue-assignments/products';
// Layouts
export const VIEW_CARD_TYPE = 'card';
export const VIEW_DETAIL_TYPE = 'detail';
/** Grid View:
 * index 0: span of the whole product card
 * index 1,2,3: span of img, card body, specs table
 **/
export const VIEW_DETAIL_OPTION = [24, 7, 8, 9];
export const VIEW_CARD_OPTION = [8, 24, 24, 24];

// Sort Option
export const POSITION_SORT_OPTION = 'Position';
export const PRICE_ASC_SORT_OPTION = 'PriceASC';
export const PRICE_DSC_SORT_OPTION = 'PriceDSC';
export const NAME_SORT_OPTION = 'Name';

// Page option
export const DEFAULT_CURRENT_PAGE = 1;
export const DEFAULT_PAGE_LIMIT = 1;
export const FIVE_PER_PAGE_OPTION = 2;
export const TEN_PER_PAGE_OPTION = 3;
export const TWENTY_PER_PAGE_OPTION = 4;
export const THIRTYFIVE_PER_PAGE_OPTION = 5;

// Filter category, price, color...
export const CATEGORY_FILTER = 'filterCategories';
export const PRICE_FILTER = 'filterPrices';
export const COLOR_FILTER = 'filterColors';

export const TAX_RATE = 10;
export const GST_RATE = 5;
export const SHIPPING_PRICE = 20;

export const COUNTRIES = [
    {
        value: 'AUS',
        label: 'Australia',
    },
    {
        value: 'US',
        label: 'America',
    },
    {
        value: 'CN',
        label: 'China',
    },
    {
        value: 'LAOS',
        label: 'Laos',
    },
    {
        value: 'VN',
        label: 'Vietnam',
    },
];
