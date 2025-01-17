import { cn } from "./utils";

// NAVBAR
export const NavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Categories",
    href: "/category/All",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

export const plants = [
  {
    id: 1,
    name: "Gymnocalycium",
    image: "Gymnocalycium-Cactus",
    rate: "4.9",
    reviews: "(14)",
    salePrice: 24,
    price: 34,
    quantity: 6,
    tag: ["New", "All", "Cactus"],
    slug: "gymnocalycium-cactus",
    description:
      "A striking cactus known for its unique, rounded shape and delicate, colorful flowers. Gymnocalycium is low-maintenance and perfect for both beginners and experienced plant lovers.",
  },
  {
    id: 2,
    name: "Lily Pad",
    image: "Lily-Pad-Succulent",
    rate: "5.0",
    reviews: "(16)",
    salePrice: 26,
    price: 36,
    quantity: 8,
    tag: ["New", "All", "Succulent"],
    slug: "lily-pad-succulent",
    description:
      "A beautiful succulent with thick, round leaves that resemble lily pads. It's easy to care for and brings a touch of greenery to any indoor space.",
  },
  {
    id: 3,
    name: "Rebutia",
    image: "Rebutia-Cactus",
    rate: "4.9",
    reviews: "(15)",
    salePrice: 23,
    price: 33,
    quantity: 9,
    tag: ["New", "All", "Cactus"],
    slug: "rebutia-cactus",
    description:
      "This small, round cactus produces vibrant flowers, adding a pop of color to your collection. Rebutia is resilient and thrives in various conditions.",
  },
  {
    id: 4,
    name: "Prickly Pear",
    image: "Prickly-Pear-Cactus",
    rate: "5.0",
    reviews: "(16)",
    salePrice: null,
    price: 18,
    quantity: 9,
    tag: ["Best", "All", "Cactus"],
    slug: "prickly-pear-cactus",
    description:
      "Known for its flat, paddle-shaped segments and edible fruit, the Prickly Pear cactus is a hardy and attractive plant that thrives with minimal care.",
  },
  {
    id: 5,
    name: "Echeveria",
    image: "Echeveria-Succulent",
    rate: "5.0",
    reviews: "(16)",
    salePrice: null,
    price: 14,
    quantity: 12,
    tag: ["Best", "All", "Succulent"],
    slug: "echeveria-succulent",
    description:
      "A popular rosette-shaped succulent, Echeveria has stunningly colored leaves and requires minimal watering, making it ideal for beginners.",
  },
  {
    id: 6,
    name: "Moon",
    image: "Moon-Cactus",
    rate: "5.0",
    reviews: "(16)",
    salePrice: null,
    price: 16,
    quantity: 11,
    tag: ["Best", "All", "Cactus"],
    slug: "moon-cactus",
    description:
      "Moon Cactus is loved for its bright, grafted tops that add color to any space. It's compact and easy to care for.",
  },
  {
    id: 7,
    name: "Jade Plant",
    image: "Jade-Plant-Succulent",
    rate: "5.0",
    reviews: "(16)",
    salePrice: null,
    price: 13,
    quantity: 8,
    tag: ["Normal", "All", "Succulent"],
    slug: "jade-plant-succulent",
    description:
      "Known as the 'money plant,' Jade Plant is a symbol of prosperity and is low-maintenance with lush, green leaves.",
  },
  {
    id: 8,
    name: "Bishop's Cap",
    image: "Bishop's-Cap-Cactus",
    rate: "5.0",
    reviews: "(16)",
    salePrice: null,
    price: 20,
    quantity: 4,
    tag: ["Normal", "All", "Cactus"],
    slug: "bishops-cap-cactus",
    description:
      "A unique cactus with a star-shaped body and white speckled pattern. Its unusual form adds a touch of elegance to any collection.",
  },
  {
    id: 9,
    name: "Zebra Cactus",
    image: "Prickly-Pear-Cactus",
    rate: "4.7",
    reviews: "(16)",
    salePrice: null,
    price: 17,
    quantity: 9,
    tag: ["Normal", "All", "Cactus"],
    slug: "zebra-cactus",
    description:
      "Distinctive with its white-striped leaves, the Zebra Cactus is a small, easy-care plant perfect for adding texture to your decor.",
  },
  {
    id: 10,
    name: "Succulent Joy",
    image: "Jade-Plant-Succulent",
    rate: "4.8",
    reviews: "(12)",
    salePrice: null,
    price: 22,
    quantity: 10,
    tag: ["Normal", "All", "Succulent"],
    slug: "succulent-joy",
    description:
      "This cheerful succulent adds life to any room with its vibrant leaves and easy-to-care-for nature.",
  },
  {
    id: 11,
    name: "Desert Rose",
    image: "Echeveria-Succulent",
    rate: "4.5",
    reviews: "(10)",
    salePrice: null,
    price: 19,
    quantity: 11,
    tag: ["Normal", "All", "Succulent"],
    slug: "desert-rose",
    description:
      "A succulent that flowers with stunning pink blossoms, the Desert Rose is a resilient beauty that thrives in sunny spots.",
  },
  {
    id: 12,
    name: "Golden Barrel",
    image: "Prickly-Pear-Cactus",
    rate: "4.6",
    reviews: "(14)",
    salePrice: null,
    price: 25,
    quantity: 13,
    tag: ["Normal", "All", "Cactus"],
    slug: "golden-barrel",
    description:
      "Round and covered in golden spines, the Golden Barrel cactus makes a bold statement with its spherical shape.",
  },
  {
    id: 13,
    name: "Star Cactus",
    image: "Bishop's-Cap-Cactus",
    rate: "4.9",
    reviews: "(15)",
    salePrice: null,
    price: 29,
    quantity: 9,
    tag: ["Normal", "All", "Cactus"],
    slug: "star-cactus",
    description:
      "With a unique star-like shape, the Star Cactus is a true showpiece that brings elegance to any plant display.",
  },
  {
    id: 14,
    name: "Peacock Succulent",
    image: "Lily-Pad-Succulent",
    rate: "4.8",
    reviews: "(13)",
    salePrice: null,
    price: 21,
    quantity: 7,
    tag: ["Normal", "All", "Succulent"],
    slug: "peacock-succulent",
    description:
      "Colorful and resilient, the Peacock Succulent showcases vibrant hues and makes an ideal centerpiece.",
  },
  {
    id: 15,
    name: "Moonstone",
    image: "Gymnocalycium-Cactus",
    rate: "5.0",
    reviews: "(16)",
    salePrice: null,
    price: 30,
    quantity: 8,
    tag: ["Normal", "All", "Succulent"],
    slug: "moonstone",
    description:
      "Moonstone succulent has plump, round leaves with a pastel sheen, perfect for adding subtle color to any arrangement.",
  },
  {
    id: 16,
    name: "Spiky Cactus",
    image: "Rebutia-Cactus",
    rate: "4.7",
    reviews: "(11)",
    salePrice: null,
    price: 24,
    quantity: 5,
    tag: ["Normal", "All", "Cactus"],
    slug: "spiky-cactus",
    description:
      "Known for its sharp spines, the Spiky Cactus is an eye-catching addition for cactus lovers looking for a hardy plant.",
  },
  {
    id: 17,
    name: "Fuzzy Succulent",
    image: "Echeveria-Succulent",
    rate: "4.8",
    reviews: "(10)",
    salePrice: null,
    price: 23,
    quantity: 14,
    tag: ["Normal", "All", "Succulent"],
    slug: "fuzzy-succulent",
    description:
      "This soft-textured succulent adds warmth and charm to any plant display, making it a lovely choice for cozy spaces.",
  },
  {
    id: 18,
    name: "Cactus Blossom",
    image: "Prickly-Pear-Cactus",
    rate: "4.9",
    reviews: "(14)",
    salePrice: null,
    price: 28,
    quantity: 13,
    tag: ["Normal", "All", "Cactus"],
    slug: "cactus-blossom",
    description:
      "A delightful cactus that blooms with vibrant flowers, Cactus Blossom brings a touch of desert beauty indoors.",
  },
  {
    id: 19,
    name: "Aloe Vera",
    image: "Moon-Cactus",
    rate: "5.0",
    reviews: "(15)",
    salePrice: null,
    price: 18,
    quantity: 12,
    tag: ["Normal", "All", "Succulent"],
    slug: "aloe-vera",
    description:
      "Aloe Vera is known for its healing properties and easy care, making it both a practical and attractive houseplant.",
  },
  {
    id: 20,
    name: "Coral Cactus",
    image: "Gymnocalycium-Cactus",
    rate: "4.8",
    reviews: "(12)",
    salePrice: null,
    price: 27,
    quantity: 11,
    tag: ["Normal", "All", "Cactus"],
    slug: "coral-cactus",
    description:
      "With its unique coral-like structure, Coral Cactus is a fascinating hybrid that stands out in any collection.",
  },
  {
    id: 21,
    name: "Sedum",
    image: "Lily-Pad-Succulent",
    rate: "4.6",
    reviews: "(14)",
    salePrice: null,
    price: 20,
    quantity: 10,
    tag: ["Normal", "All", "Succulent"],
    slug: "sedum",
    description:
      "Sedum is a hardy, low-growing succulent with tiny, round leaves that form beautiful clusters over time.",
  },
  {
    id: 22,
    name: "Needle Cactus",
    image: "Bishop's-Cap-Cactus",
    rate: "4.5",
    reviews: "(13)",
    salePrice: null,
    price: 22,
    quantity: 7,
    tag: ["Normal", "All", "Cactus"],
    slug: "needle-cactus",
    description:
      "Named for its needle-like spines, this cactus is a striking addition that commands attention with its bold appearance.",
  },
  {
    id: 23,
    name: "Crassula",
    image: "Gymnocalycium-Cactus",
    rate: "4.9",
    reviews: "(15)",
    salePrice: null,
    price: 24,
    quantity: 10,
    tag: ["Normal", "All", "Succulent"],
    slug: "crassula",
    description:
      "Crassula is a compact, easy-care succulent with small, clustered leaves, perfect for adding greenery to tight spaces.",
  },
  {
    id: 24,
    name: "Echinopsis",
    image: "Rebutia-Cactus",
    rate: "4.8",
    reviews: "(11)",
    salePrice: null,
    price: 26,
    quantity: 6,
    tag: ["Normal", "All", "Cactus"],
    slug: "echinopsis",
    description:
      "Echinopsis is a cactus that delights with stunning, large flowers and thrives in bright sunlight.",
  },
  {
    id: 25,
    name: "Haworthia",
    image: "Lily-Pad-Succulent",
    rate: "5.0",
    reviews: "(16)",
    salePrice: null,
    price: 29,
    quantity: 9,
    tag: ["Normal", "All", "Succulent"],
    slug: "haworthia",
    description:
      "Haworthia is a hardy, attractive succulent with striking striped leaves, perfect for indoor displays.",
  },
  {
    id: 26,
    name: "Cactus Flower",
    image: "Prickly-Pear-Cactus",
    rate: "4.7",
    reviews: "(10)",
    salePrice: null,
    price: 23,
    quantity: 3,
    tag: ["Normal", "All", "Cactus"],
    slug: "cactus-flower",
    description:
      "A flowering cactus that adds vibrant colors to any collection with its periodic blooms.",
  },
  {
    id: 27,
    name: "Jade Cactus",
    image: "Echeveria-Succulent",
    rate: "4.9",
    reviews: "(15)",
    salePrice: null,
    price: 25,
    quantity: 5,
    tag: ["Normal", "All", "Cactus"],
    slug: "jade-cactus",
    description:
      "A resilient cactus that pairs beautifully with other succulents and is known for its longevity and distinctive form.",
  },
  {
    id: 28,
    name: "Powder",
    image: "Moon-Cactus",
    rate: "4.8",
    reviews: "(12)",
    salePrice: null,
    price: 22,
    quantity: 9,
    tag: ["Normal", "All", "Succulent"],
    slug: "powder-succulent",
    description:
      "An ornamental succulent with delicate, intricate leaves, adding a touch of elegance to any indoor space.",
  },
  {
    id: 29,
    name: "Cactus Pear",
    image: "Prickly-Pear-Cactus",
    rate: "4.6",
    reviews: "(13)",
    salePrice: null,
    price: 21,
    quantity: 18,
    tag: ["Normal", "All", "Cactus"],
    slug: "cactus-pear",
    description:
      "This cactus produces small, edible fruits and has flat, paddle-shaped segments covered in spines.",
  },
  {
    id: 30,
    name: "Succulent Delight",
    image: "Jade-Plant-Succulent",
    rate: "4.8",
    reviews: "(14)",
    salePrice: null,
    price: 19,
    quantity: 15,
    tag: ["Normal", "All", "Succulent"],
    slug: "succulent-delight",
    description:
      "An easy-to-care-for succulent with beautiful, fleshy leaves. Ideal for adding a green touch to any indoor space.",
  },
];

// PLANT CARE
export const plantCare = [
  {
    number: "1.",
    tips: "In cold times, add water once a month and during the summer do it when the soil is very dry.",
  },
  {
    number: "2.",
    tips: "Have good drainage so that the cactus does not accumulate water.",
  },
  {
    number: "3.",
    tips: "Place your cactus or succulent in a location with indirect light.",
  },
  {
    number: "4.",
    tips: "Do not water more than necessary, as it can accumulate too much water and the plant will rot.",
  },
  {
    number: "5.",
    tips: "Do not expose to high temperatures, as succulent plants are not fans of extremes.",
  },
];

// FAQs
export const FAQs = [
  {
    id: 1,
    question: "How do I place an order?",
    answer:
      "Simply browse our collection, add items to your cart, and proceed to checkout. You'll enter your shipping information and select a payment method.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay.",
  },
  {
    id: 3,
    question: "How long will it take to receive my order?",
    answer:
      "Orders are processed in 1-2 business days, and delivery typically takes 3-7 business days, depending on your location.",
  },
  {
    id: 4,
    question: "Do you ship internationally?",
    answer:
      "Yes, we offer international shipping to select countries. Rates and times are calculated at checkout.",
  },
  {
    id: 5,
    question: "What should I do if my plant arrives damaged?",
    answer:
      "If your plant arrives damaged, contact us within 48 hours with a photo, and we'll arrange a replacement or refund.",
  },
  {
    id: 6,
    question: "Can I return a plant if I'm not satisfied?",
    answer:
      "Due to the nature of plants, we don't accept returns. However, if there's an issue, contact us and we'll work to resolve it.",
  },
  {
    id: 7,
    question: "Do you offer discounts for bulk orders?",
    answer:
      "Yes, we provide bulk order discounts. Contact us for details if you're purchasing for a business or event.",
  },
  {
    id: 8,
    question: "How can I track my order?",
    answer:
      "After shipping, you'll receive an email with a tracking number to follow your order's delivery.",
  },
];

export const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook opacity-[.87]"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" />
  </svg>
);

export const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="icon icon-tabler icons-tabler-filled icon-tabler-brand-twitter opacity-[.87]"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" />
  </svg>
);

export const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-[.87]"
  >
    <path
      d="M7.5 6C7.5 6.29667 7.41203 6.58668 7.2472 6.83336C7.08238 7.08003 6.84811 7.27229 6.57402 7.38582C6.29994 7.49935 5.99834 7.52906 5.70736 7.47118C5.41639 7.4133 5.14912 7.27044 4.93934 7.06066C4.72956 6.85088 4.5867 6.58361 4.52882 6.29264C4.47094 6.00166 4.50065 5.70006 4.61418 5.42597C4.72771 5.15189 4.91997 4.91762 5.16664 4.7528C5.41332 4.58797 5.70333 4.5 6 4.5C6.39769 4.50045 6.77895 4.65864 7.06016 4.93984C7.34136 5.22105 7.49955 5.60231 7.5 6ZM10.6875 3.9375V8.0625C10.6867 8.75845 10.4099 9.42567 9.91778 9.91778C9.42567 10.4099 8.75845 10.6867 8.0625 10.6875H3.9375C3.24155 10.6867 2.57433 10.4099 2.08222 9.91778C1.5901 9.42567 1.31329 8.75845 1.3125 8.0625V3.9375C1.31329 3.24155 1.5901 2.57433 2.08222 2.08222C2.57433 1.5901 3.24155 1.31329 3.9375 1.3125H8.0625C8.75845 1.31329 9.42567 1.5901 9.91778 2.08222C10.4099 2.57433 10.6867 3.24155 10.6875 3.9375ZM8.25 6C8.25 5.55499 8.11804 5.11998 7.87081 4.74997C7.62357 4.37996 7.27217 4.09157 6.86104 3.92127C6.4499 3.75097 5.9975 3.70642 5.56105 3.79323C5.12459 3.88005 4.72368 4.09434 4.40901 4.40901C4.09434 4.72368 3.88005 5.12459 3.79323 5.56105C3.70642 5.9975 3.75097 6.4499 3.92127 6.86104C4.09157 7.27217 4.37996 7.62357 4.74997 7.87081C5.11998 8.11804 5.55499 8.25 6 8.25C6.59653 8.24933 7.16843 8.01206 7.59025 7.59025C8.01206 7.16843 8.24933 6.59653 8.25 6ZM9 3.5625C9 3.45125 8.96701 3.34249 8.9052 3.24999C8.84339 3.15749 8.75554 3.08539 8.65276 3.04282C8.54998 3.00024 8.43688 2.9891 8.32776 3.01081C8.21865 3.03251 8.11842 3.08609 8.03975 3.16475C7.96109 3.24342 7.90751 3.34365 7.88581 3.45276C7.8641 3.56188 7.87524 3.67498 7.91782 3.77776C7.96039 3.88054 8.03249 3.96839 8.12499 4.0302C8.21749 4.09201 8.32625 4.125 8.4375 4.125C8.58015 4.125 8.7179 4.06585 8.81495 3.9688C8.91201 3.87175 8.97115 3.734 8.97115 3.5625H9Z"
      fill="currentColor"
    />
  </svg>
);

export const MenuOpen = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-menu"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 8l16 0" />
    <path d="M4 16l16 0" />
  </svg>
);

export const MenuClose = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-x"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);

export const ArrowIcon = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={(cn("size-5"), className)}
  >
    <g clipPath="url(#clip0_1297_525)">
      <path
        d="M10 3.125C10 3.58875 10.4581 4.28125 10.9219 4.8625C11.5181 5.6125 12.2306 6.26688 13.0475 6.76625C13.66 7.14063 14.4025 7.5 15 7.5M15 7.5C14.4025 7.5 13.6594 7.85938 13.0475 8.23375C12.2306 8.73375 11.5181 9.38813 10.9219 10.1369C10.4581 10.7188 10 11.4125 10 11.875M15 7.5L7.02832e-07 7.5"
        stroke="white"
        strokeWidth="2"
      />
    </g>
    <defs>
      <clipPath id="clip0_1297_525">
        <rect
          width="15"
          height="15"
          fill="white"
          transform="translate(15) rotate(90)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const StarRating = [
  {
    star: 5,
    number: 25,
  },
  {
    star: 4,
    number: 8,
  },
  {
    star: 3,
    number: 4,
  },
  {
    star: 2,
    number: 2,
  },
  {
    star: 1,
    number: 1,
  },
];
