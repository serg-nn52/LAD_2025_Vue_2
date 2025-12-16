//union
let id: string | number = 1;
id = '2';


// type TPrice = Exclude<unknown, string>;

type AllTypes = string | number | boolean | null | undefined | object | symbol | bigint | any[];
// type TPrice = Exclude<AllTypes, null>;
type TPrice = number | string | null;
export let price: TPrice = null;
let discountPrice: NonNullable<TPrice> = 55;
price = '30'; 

// literal

type TTheme = 'light' | 'dark' | 'green';
let theme: TTheme  = 'light';

theme = "green"