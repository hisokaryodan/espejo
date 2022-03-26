import { reorderDetail } from "./redorderDetail";

test("reorderDetail Test", () => {
  reorderDetail(detailMock, descriptionMock);
});

const detailMock = {
  id: "MLA1114511972",
  site_id: "MLA",
  title: "Apple iPhone 11 (64 Gb) - Blanco",
  subtitle: null,
  seller_id: 278897053,
  category_id: "MLA1055",
  official_store_id: null,
  price: 177100,
  base_price: 177100,
  original_price: null,
  currency_id: "ARS",
  initial_quantity: 2,
  available_quantity: 1,
  sold_quantity: 1,
  sale_terms: [
    {
      id: "WARRANTY_TYPE",
      name: "Tipo de garantía",
      value_id: "2230279",
      value_name: "Garantía de fábrica",
      value_struct: null,
      values: [
        {
          id: "2230279",
          name: "Garantía de fábrica",
          struct: null,
        },
      ],
    },
    {
      id: "INVOICE",
      name: "Facturación",
      value_id: "6891885",
      value_name: "Factura A",
      value_struct: null,
      values: [
        {
          id: "6891885",
          name: "Factura A",
          struct: null,
        },
      ],
    },
    {
      id: "WARRANTY_TIME",
      name: "Tiempo de garantía",
      value_id: null,
      value_name: "6 meses",
      value_struct: {
        number: 6,
        unit: "meses",
      },
      values: [
        {
          id: null,
          name: "6 meses",
          struct: {
            number: 6,
            unit: "meses",
          },
        },
      ],
    },
  ],
  buying_mode: "buy_it_now",
  listing_type_id: "gold_special",
  start_time: "2021-12-02T13:38:00.000Z",
  stop_time: "2041-11-27T04:00:00.000Z",
  condition: "new",
  permalink:
    "https://articulo.mercadolibre.com.ar/MLA-1114511972-apple-iphone-11-64-gb-blanco-_JM",
  thumbnail_id: "809326-MLA46115014340_052021",
  thumbnail: "http://http2.mlstatic.com/D_809326-MLA46115014340_052021-I.jpg",
  secure_thumbnail:
    "https://http2.mlstatic.com/D_809326-MLA46115014340_052021-I.jpg",
  pictures: [
    {
      id: "809326-MLA46115014340_052021",
      url: "http://http2.mlstatic.com/D_809326-MLA46115014340_052021-O.jpg",
      secure_url:
        "https://http2.mlstatic.com/D_809326-MLA46115014340_052021-O.jpg",
      size: "368x500",
      max_size: "885x1200",
      quality: "",
    },
    {
      id: "644690-MLA46114829761_052021",
      url: "http://http2.mlstatic.com/D_644690-MLA46114829761_052021-O.jpg",
      secure_url:
        "https://http2.mlstatic.com/D_644690-MLA46114829761_052021-O.jpg",
      size: "244x500",
      max_size: "586x1200",
      quality: "",
    },
    {
      id: "933939-MLA46114829763_052021",
      url: "http://http2.mlstatic.com/D_933939-MLA46114829763_052021-O.jpg",
      secure_url:
        "https://http2.mlstatic.com/D_933939-MLA46114829763_052021-O.jpg",
      size: "483x500",
      max_size: "1160x1200",
      quality: "",
    },
    {
      id: "881336-MLA46115014345_052021",
      url: "http://http2.mlstatic.com/D_881336-MLA46115014345_052021-O.jpg",
      secure_url:
        "https://http2.mlstatic.com/D_881336-MLA46115014345_052021-O.jpg",
      size: "435x500",
      max_size: "1046x1200",
      quality: "",
    },
    {
      id: "760723-MLA46115014347_052021",
      url: "http://http2.mlstatic.com/D_760723-MLA46115014347_052021-O.jpg",
      secure_url:
        "https://http2.mlstatic.com/D_760723-MLA46115014347_052021-O.jpg",
      size: "500x500",
      max_size: "1200x1200",
      quality: "",
    },
    {
      id: "821116-MLA46115014348_052021",
      url: "http://http2.mlstatic.com/D_821116-MLA46115014348_052021-O.jpg",
      secure_url:
        "https://http2.mlstatic.com/D_821116-MLA46115014348_052021-O.jpg",
      size: "500x371",
      max_size: "1200x891",
      quality: "",
    },
    {
      id: "651733-MLA46114990408_052021",
      url: "http://http2.mlstatic.com/D_651733-MLA46114990408_052021-O.jpg",
      secure_url:
        "https://http2.mlstatic.com/D_651733-MLA46114990408_052021-O.jpg",
      size: "500x500",
      max_size: "1200x1200",
      quality: "",
    },
  ],
  video_id: null,
  descriptions: [],
  accepts_mercadopago: true,
  non_mercado_pago_payment_methods: [],
  shipping: {
    mode: "me2",
    free_methods: [
      {
        id: 73328,
        rule: {
          default: true,
          free_mode: "country",
          free_shipping_flag: true,
          value: null,
        },
      },
    ],
    tags: ["mandatory_free_shipping"],
    dimensions: null,
    local_pick_up: true,
    free_shipping: true,
    logistic_type: "xd_drop_off",
    store_pick_up: false,
  },
  international_delivery_mode: "none",
  seller_address: {
    city: {
      id: "TUxBQ1JPUzg1Yjg3",
      name: "Rosario",
    },
    state: {
      id: "AR-S",
      name: "Santa Fe",
    },
    country: {
      id: "AR",
      name: "Argentina",
    },
    search_location: {
      city: {
        id: "TUxBQ1JPUzg1Yjg3",
        name: "Rosario",
      },
      state: {
        id: "TUxBUFNBTmU5Nzk2",
        name: "Santa Fe",
      },
    },
    id: 330219923,
  },
  seller_contact: null,
  location: {},
  coverage_areas: [],
  attributes: [
    {
      id: "BATTERY_CAPACITY",
      name: "Capacidad de la batería",
      value_id: "8836317",
      value_name: "3110 mAh",
      value_struct: {
        number: 3110,
        unit: "mAh",
      },
      values: [
        {
          id: "8836317",
          name: "3110 mAh",
          struct: {
            number: 3110,
            unit: "mAh",
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "BATTERY_TYPE",
      name: "Tipo de batería",
      value_id: "95013",
      value_name: "Ion de litio",
      value_struct: null,
      values: [
        {
          id: "95013",
          name: "Ion de litio",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "BRAND",
      name: "Marca",
      value_id: "9344",
      value_name: "Apple",
      value_struct: null,
      values: [
        {
          id: "9344",
          name: "Apple",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "CAMERAS_MAIN_FEATURES",
      name: "Características principales de las cámaras",
      value_id: null,
      value_name:
        "Brighter Tru,Contour,Fiveelement lens (Ultra Wide),High-Key Mono),Optical image stabilization (Wide),Portrait Lighting with six effects (Natural,Portrait mode with advanced bokeh and Depth Control,Sixelement lens (Wide),Stage,Stage Mono,Studio",
      value_struct: null,
      values: [
        {
          id: null,
          name: "Brighter Tru",
          struct: null,
        },
        {
          id: null,
          name: "Contour",
          struct: null,
        },
        {
          id: null,
          name: "Fiveelement lens (Ultra Wide)",
          struct: null,
        },
        {
          id: null,
          name: "High-Key Mono)",
          struct: null,
        },
        {
          id: null,
          name: "Optical image stabilization (Wide)",
          struct: null,
        },
        {
          id: null,
          name: "Portrait Lighting with six effects (Natural",
          struct: null,
        },
        {
          id: null,
          name: "Portrait mode with advanced bokeh and Depth Control",
          struct: null,
        },
        {
          id: null,
          name: "Sixelement lens (Wide)",
          struct: null,
        },
        {
          id: null,
          name: "Stage",
          struct: null,
        },
        {
          id: null,
          name: "Stage Mono",
          struct: null,
        },
        {
          id: null,
          name: "Studio",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "CARRIER",
      name: "Compañía telefónica",
      value_id: "298335",
      value_name: "Liberado",
      value_struct: null,
      values: [
        {
          id: "298335",
          name: "Liberado",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "CHARGE_CONNECTOR_TYPE",
      name: "Tipo de conector de carga",
      value_id: "8275368",
      value_name: "Lightning",
      value_struct: null,
      values: [
        {
          id: "8275368",
          name: "Lightning",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "COLOR",
      name: "Color",
      value_id: "52055",
      value_name: "Blanco",
      value_struct: null,
      values: [
        {
          id: "52055",
          name: "Blanco",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "COMPATIBLE_SIM_CARD_SIZES",
      name: "Tamaños de tarjeta SIM compatibles",
      value_id: "80453",
      value_name: "Nano-SIM",
      value_struct: null,
      values: [
        {
          id: "80453",
          name: "Nano-SIM",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "CPU_MODELS",
      name: "Modelos de CPU",
      value_id: null,
      value_name: "2x2.65 GHz Lightning,4x1.8 GHz Thunder",
      value_struct: null,
      values: [
        {
          id: null,
          name: "2x2.65 GHz Lightning",
          struct: null,
        },
        {
          id: null,
          name: "4x1.8 GHz Thunder",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "DEPTH",
      name: "Profundidad",
      value_id: "6892145",
      value_name: "8.3 mm",
      value_struct: {
        number: 8.3,
        unit: "mm",
      },
      values: [
        {
          id: "6892145",
          name: "8.3 mm",
          struct: {
            number: 8.3,
            unit: "mm",
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "DIGITAL_ZOOM",
      name: "Zoom digital",
      value_id: "7199631",
      value_name: "5x",
      value_struct: {
        number: 5,
        unit: "x",
      },
      values: [
        {
          id: "7199631",
          name: "5x",
          struct: {
            number: 5,
            unit: "x",
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "DISPLAY_ASPECT_RATIO",
      name: "Relación de aspecto de la pantalla",
      value_id: "11331351",
      value_name: "19.5:9",
      value_struct: null,
      values: [
        {
          id: "11331351",
          name: "19.5:9",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "DISPLAY_MAX_BRIGHTNESS",
      name: "Brillo máximo de la pantalla",
      value_id: "6877637",
      value_name: "625 cd/m²",
      value_struct: {
        number: 625,
        unit: "cd/m²",
      },
      values: [
        {
          id: "6877637",
          name: "625 cd/m²",
          struct: {
            number: 625,
            unit: "cd/m²",
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "DISPLAY_PIXELS_PER_INCH",
      name: "Píxeles por pulgada de la pantalla",
      value_id: "7058235",
      value_name: "326 ppi",
      value_struct: {
        number: 326,
        unit: "ppi",
      },
      values: [
        {
          id: "7058235",
          name: "326 ppi",
          struct: {
            number: 326,
            unit: "ppi",
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "DISPLAY_REFRESH_RATE",
      name: "Frecuencia de actualización de la pantalla",
      value_id: "7873264",
      value_name: "60 Hz",
      value_struct: {
        number: 60,
        unit: "Hz",
      },
      values: [
        {
          id: "7873264",
          name: "60 Hz",
          struct: {
            number: 60,
            unit: "Hz",
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "DISPLAY_RESOLUTION",
      name: "Resolución de la pantalla",
      value_id: "7236343",
      value_name: "828 px x 1792 px",
      value_struct: null,
      values: [
        {
          id: "7236343",
          name: "828 px x 1792 px",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "DISPLAY_RESOLUTION_TYPE",
      name: "Tipo de resolución de la pantalla ",
      value_id: "9613319",
      value_name: "HD",
      value_struct: null,
      values: [
        {
          id: "9613319",
          name: "HD",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "DISPLAY_SIZE",
      name: "Tamaño de la pantalla",
      value_id: "6892143",
      value_name: '6.1 "',
      value_struct: {
        number: 6.1,
        unit: '"',
      },
      values: [
        {
          id: "6892143",
          name: '6.1 "',
          struct: {
            number: 6.1,
            unit: '"',
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "DISPLAY_TECHNOLOGY",
      name: "Tecnología de la pantalla",
      value_id: "80490",
      value_name: "IPS",
      value_struct: null,
      values: [
        {
          id: "80490",
          name: "IPS",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "DISPLAY_TYPE",
      name: "Tipo de pantalla",
      value_id: "9792226",
      value_name: "Liquid Retina",
      value_struct: null,
      values: [
        {
          id: "9792226",
          name: "Liquid Retina",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "ESIMS_NUMBER",
      name: "Cantidad de eSIMs",
      value_id: "8278380",
      value_name: "1",
      value_struct: null,
      values: [
        {
          id: "8278380",
          name: "1",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "FRONT_CAMERAS_NUMBER",
      name: "Cantidad de cámaras frontales",
      value_id: "7477216",
      value_name: "1",
      value_struct: null,
      values: [
        {
          id: "7477216",
          name: "1",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "FRONT_CAMERA_APERTURE",
      name: "Apertura del diafragma de la cámara frontal",
      value_id: "7408595",
      value_name: "f 2.2",
      value_struct: null,
      values: [
        {
          id: "7408595",
          name: "f 2.2",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "FRONT_CAMERA_RECORDING_RESOLUTION",
      name: "Resolución de video de la cámara frontal",
      value_id: "7207112",
      value_name: "3840 px x 2160 px",
      value_struct: null,
      values: [
        {
          id: "7207112",
          name: "3840 px x 2160 px",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "GPU_MODEL",
      name: "Modelo de GPU",
      value_id: "7740544",
      value_name: "Apple GPU MP4",
      value_struct: null,
      values: [
        {
          id: "7740544",
          name: "Apple GPU MP4",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "HEIGHT",
      name: "Altura",
      value_id: "6892149",
      value_name: "150.9 mm",
      value_struct: {
        number: 150.9,
        unit: "mm",
      },
      values: [
        {
          id: "6892149",
          name: "150.9 mm",
          struct: {
            number: 150.9,
            unit: "mm",
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "INTERNAL_MEMORY",
      name: "Memoria interna",
      value_id: "59726",
      value_name: "64 GB",
      value_struct: {
        number: 64,
        unit: "GB",
      },
      values: [
        {
          id: "59726",
          name: "64 GB",
          struct: {
            number: 64,
            unit: "GB",
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "IP_RATING",
      name: "Clasificación IP",
      value_id: "8275373",
      value_name: "IP68",
      value_struct: null,
      values: [
        {
          id: "8275373",
          name: "IP68",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "IS_DUAL_SIM",
      name: "Es Dual SIM",
      value_id: "242084",
      value_name: "No",
      value_struct: null,
      values: [
        {
          id: "242084",
          name: "No",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "IS_DUST_RESISTANT",
      name: "Es resistente al polvo",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "IS_SPLASH_RESISTANT",
      name: "Es resistente a salpicaduras",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "IS_WATERPROOF",
      name: "Es a prueba de agua",
      value_id: "242084",
      value_name: "No",
      value_struct: null,
      values: [
        {
          id: "242084",
          name: "No",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "IS_WATER_RESISTANT",
      name: "Es resistente al agua",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "ITEM_CONDITION",
      name: "Condición del ítem",
      value_id: "2230284",
      value_name: "Nuevo",
      value_struct: null,
      values: [
        {
          id: "2230284",
          name: "Nuevo",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "LINE",
      name: "Línea",
      value_id: "58993",
      value_name: "iPhone",
      value_struct: null,
      values: [
        {
          id: "58993",
          name: "iPhone",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "MAIN_COLOR",
      name: "Color principal",
      value_id: "2450308",
      value_name: "Blanco",
      value_struct: null,
      values: [
        {
          id: "2450308",
          name: "Blanco",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "MAIN_FRONT_CAMERA_RESOLUTION",
      name: "Resolución de la cámara frontal principal",
      value_id: "7207109",
      value_name: "12 Mpx",
      value_struct: {
        number: 12,
        unit: "Mpx",
      },
      values: [
        {
          id: "7207109",
          name: "12 Mpx",
          struct: {
            number: 12,
            unit: "Mpx",
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "MAIN_REAR_CAMERA_RESOLUTION",
      name: "Resolución de la cámara trasera principal",
      value_id: "7199628",
      value_name: "12 Mpx",
      value_struct: {
        number: 12,
        unit: "Mpx",
      },
      values: [
        {
          id: "7199628",
          name: "12 Mpx",
          struct: {
            number: 12,
            unit: "Mpx",
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "MOBILE_NETWORK",
      name: "Red",
      value_id: "367876",
      value_name: "4G/LTE",
      value_struct: null,
      values: [
        {
          id: "367876",
          name: "4G/LTE",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "MODEL",
      name: "Modelo",
      value_id: "7739079",
      value_name: "iPhone 11",
      value_struct: null,
      values: [
        {
          id: "7739079",
          name: "iPhone 11",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "MPN",
      name: "MPN",
      value_id: null,
      value_name: "MWLU2BZ/A,MHDC3BZ/A,MHDC3LZ/A",
      value_struct: null,
      values: [
        {
          id: null,
          name: "MWLU2BZ/A",
          struct: null,
        },
        {
          id: null,
          name: "MHDC3BZ/A",
          struct: null,
        },
        {
          id: null,
          name: "MHDC3LZ/A",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "OPERATING_SYSTEM_NAME",
      name: "Nombre del sistema operativo",
      value_id: "7404961",
      value_name: "iOS",
      value_struct: null,
      values: [
        {
          id: "7404961",
          name: "iOS",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "OPTICAL_ZOOM",
      name: "Zoom óptico",
      value_id: "1344",
      value_name: "2x",
      value_struct: {
        number: 2,
        unit: "x",
      },
      values: [
        {
          id: "1344",
          name: "2x",
          struct: {
            number: 2,
            unit: "x",
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "OS_LAST_COMPATIBLE_VERSION",
      name: "Última versión compatible del sistema operativo",
      value_id: "11104001",
      value_name: "15",
      value_struct: null,
      values: [
        {
          id: "11104001",
          name: "15",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "OS_ORIGINAL_VERSION",
      name: "Versión original del sistema operativo",
      value_id: "7740538",
      value_name: "13",
      value_struct: null,
      values: [
        {
          id: "7740538",
          name: "13",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "PROCESSOR_CORES_NUMBER",
      name: "Cantidad de núcleos del procesador",
      value_id: "7199636",
      value_name: "6",
      value_struct: null,
      values: [
        {
          id: "7199636",
          name: "6",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "PROCESSOR_MODEL",
      name: "Modelo del procesador",
      value_id: "7740540",
      value_name: "Apple A13 Bionic",
      value_struct: null,
      values: [
        {
          id: "7740540",
          name: "Apple A13 Bionic",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "PROCESSOR_SPEED",
      name: "Velocidad del procesador",
      value_id: "7740543",
      value_name: "2.65 GHz",
      value_struct: {
        number: 2.65,
        unit: "GHz",
      },
      values: [
        {
          id: "7740543",
          name: "2.65 GHz",
          struct: {
            number: 2.65,
            unit: "GHz",
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "RAM",
      name: "Memoria RAM",
      value_id: "98852",
      value_name: "4 GB",
      value_struct: {
        number: 4,
        unit: "GB",
      },
      values: [
        {
          id: "98852",
          name: "4 GB",
          struct: {
            number: 4,
            unit: "GB",
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "REAR_CAMERAS_NUMBER",
      name: "Cantidad de cámaras traseras",
      value_id: "7477262",
      value_name: "2",
      value_struct: null,
      values: [
        {
          id: "7477262",
          name: "2",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "REAR_CAMERAS_RESOLUTION",
      name: "Resolución de las cámaras traseras",
      value_id: "7405025",
      value_name: "12 Mpx/12 Mpx",
      value_struct: null,
      values: [
        {
          id: "7405025",
          name: "12 Mpx/12 Mpx",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "REAR_CAMERA_APERTURE",
      name: "Apertura del diafragma de la cámara trasera",
      value_id: "7505957",
      value_name: "f 1.8/f 2.4",
      value_struct: null,
      values: [
        {
          id: "7505957",
          name: "f 1.8/f 2.4",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "REAR_CAMERA_RECORDING_RESOLUTION",
      name: "Resolución de video de la cámara trasera",
      value_id: "7199630",
      value_name: "3840 px x 2160 px",
      value_struct: null,
      values: [
        {
          id: "7199630",
          name: "3840 px x 2160 px",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "RELEASE_MONTH",
      name: "Mes de lanzamiento",
      value_id: "8275348",
      value_name: "Septiembre",
      value_struct: null,
      values: [
        {
          id: "8275348",
          name: "Septiembre",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "RELEASE_YEAR",
      name: "Año de lanzamiento",
      value_id: "5057727",
      value_name: "2019",
      value_struct: null,
      values: [
        {
          id: "5057727",
          name: "2019",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "SIM_CARD_SLOTS_NUMBER",
      name: "Cantidad de ranuras para tarjeta SIM",
      value_id: "2087812",
      value_name: "1",
      value_struct: null,
      values: [
        {
          id: "2087812",
          name: "1",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WEIGHT",
      name: "Peso",
      value_id: "2583040",
      value_name: "194 g",
      value_struct: {
        number: 194,
        unit: "g",
      },
      values: [
        {
          id: "2583040",
          name: "194 g",
          struct: {
            number: 194,
            unit: "g",
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WIDTH",
      name: "Ancho",
      value_id: "6892148",
      value_name: "75.7 mm",
      value_struct: {
        number: 75.7,
        unit: "mm",
      },
      values: [
        {
          id: "6892148",
          name: "75.7 mm",
          struct: {
            number: 75.7,
            unit: "mm",
          },
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_3_5_JACK",
      name: "Con jack 3.5",
      value_id: "242084",
      value_name: "No",
      value_struct: null,
      values: [
        {
          id: "242084",
          name: "No",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_ACCELEROMETER",
      name: "Con acelerómetro",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_BAROMETER",
      name: "Con barómetro",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_BLUETOOTH",
      name: "Con Bluetooth",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_CAMERA",
      name: "Con cámara",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_COMPASS",
      name: "Con brújula",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_ESIM",
      name: "Con eSIM",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_FACIAL_RECOGNITION",
      name: "Con reconocimiento facial",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_FAST_CHARGING",
      name: "Con carga rápida",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_FINGERPRINT_READER",
      name: "Con lector de huella digital",
      value_id: "242084",
      value_name: "No",
      value_struct: null,
      values: [
        {
          id: "242084",
          name: "No",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_FRONT_CAMERA_FLASH",
      name: "Con flash en la cámara frontal",
      value_id: "242084",
      value_name: "No",
      value_struct: null,
      values: [
        {
          id: "242084",
          name: "No",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_GPS",
      name: "Con GPS",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_GYROSCOPE",
      name: "Con giroscopio",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_HEART_RATE_SENSOR",
      name: "Con sensor de ritmo cardíaco",
      value_id: "242084",
      value_name: "No",
      value_struct: null,
      values: [
        {
          id: "242084",
          name: "No",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_IMEI",
      name: "Con IMEI",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_IRIS_RECOGNITION",
      name: "Con reconocimiento de iris",
      value_id: "242084",
      value_name: "No",
      value_struct: null,
      values: [
        {
          id: "242084",
          name: "No",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_MEMORY_CARD_SLOT",
      name: "Con ranura para tarjeta de memoria",
      value_id: "242084",
      value_name: "No",
      value_struct: null,
      values: [
        {
          id: "242084",
          name: "No",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_MINI_HDMI",
      name: "Con mini HDMI",
      value_id: "242084",
      value_name: "No",
      value_struct: null,
      values: [
        {
          id: "242084",
          name: "No",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_NFC",
      name: "Con NFC",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_PHYSICAL_QWERTY_KEYBOARD",
      name: "Con teclado QWERTY físico",
      value_id: "242084",
      value_name: "No",
      value_struct: null,
      values: [
        {
          id: "242084",
          name: "No",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_PROXIMITY_SENSOR",
      name: "Con sensor de proximidad",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_RADIO",
      name: "Con radio",
      value_id: "242084",
      value_name: "No",
      value_struct: null,
      values: [
        {
          id: "242084",
          name: "No",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_REMOVABLE_BATTERY",
      name: "Con batería removible",
      value_id: "242084",
      value_name: "No",
      value_struct: null,
      values: [
        {
          id: "242084",
          name: "No",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_TOUCHSCREEN_DISPLAY",
      name: "Con pantalla táctil",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_TV_TUNER",
      name: "Con sintonizador de TV",
      value_id: "242084",
      value_name: "No",
      value_struct: null,
      values: [
        {
          id: "242084",
          name: "No",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_USB_CONNECTOR",
      name: "Con conector USB",
      value_id: "242084",
      value_name: "No",
      value_struct: null,
      values: [
        {
          id: "242084",
          name: "No",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_WIFI",
      name: "Con Wi-Fi",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
    {
      id: "WITH_WIRELESS_CHARGING",
      name: "Con carga inalámbrica",
      value_id: "242085",
      value_name: "Sí",
      value_struct: null,
      values: [
        {
          id: "242085",
          name: "Sí",
          struct: null,
        },
      ],
      attribute_group_id: "OTHERS",
      attribute_group_name: "Otros",
    },
  ],
  warnings: [],
  listing_source: "",
  variations: [],
  status: "active",
  sub_status: [],
  tags: [
    "extended_warranty_eligible",
    "good_quality_picture",
    "good_quality_thumbnail",
    "immediate_payment",
    "cart_eligible",
  ],
  warranty: "Garantía de fábrica: 6 meses",
  catalog_product_id: "MLA15149562",
  domain_id: "MLA-CELLPHONES",
  parent_item_id: null,
  differential_pricing: null,
  deal_ids: [],
  automatic_relist: false,
  date_created: "2021-12-02T13:38:00.000Z",
  last_updated: "2022-03-25T04:59:32.618Z",
  health: null,
  catalog_listing: true,
  channels: ["marketplace"],
};

const descriptionMock = {
  text: "",
  plain_text:
    "Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas (3). Aprovecha un rendimiento sin precedentes en los juegos, la realidad aumentada y la fotografía con el chip A13 Bionic. Haz mucho más sin necesidad de volver a cargar el teléfono gracias a su batería de larga duración (2). Y no te preocupes si se moja, el iPhone 11 tiene una resistencia al agua de hasta 30 minutos a una profundidad máxima de 2 metros (1).\n\n\nAvisos Legales\n(1) El iPhone 11 es resistente a las salpicaduras, al agua y al polvo, y fue probado en condiciones de laboratorio controladas, con una clasificación IP68 según la norma IEC 60529 (hasta 30 minutos a una profundidad máxima de 2 metros). La resistencia a las salpicaduras, al agua y al polvo no es una condición permanente, y podría disminuir como consecuencia del uso normal. No intentes cargar un iPhone mojado; consulta el manual del usuario para ver las instrucciones de limpieza y secado. La garantía no cubre daños producidos por líquidos.\n(2) La duración de la batería varía según el uso y la configuración.\n(3) La pantalla tiene las esquinas redondeadas. Si se mide en forma de rectángulo, la pantalla del iPhone 11 tiene 6.06 pulgadas en diagonal. El área real de visualización es menor.\n(4) Los cargadores inalámbricos Qi se venden por separado.",
  last_updated: "2021-12-02T13:38:08.000Z",
  date_created: "2021-12-02T13:38:08.000Z",
  snapshot: {
    url: "http://descriptions.mlstatic.com/D-MLA1114511972.jpg?hash=8520c3b8559cb08aa7e782b8f5334ffe_0x0",
    width: 0,
    height: 0,
    status: "",
  },
};
