
export type VocabItem = {
  id: string;
  word: string;       // Apple
  phonetic: string;   // /'æpl/
  cn: string;         // 苹果
  image: string;      // /images/apple.png
  audio?: string;     // Optional, default using Web Speech API
  exampleEn?: string; // I eat an apple.
  exampleCn?: string; // 我吃一个苹果。
  distractors?: string[];
};

export type Category = {
  id: string;
  title: string;      // 厨房篇
  icon: string;
  color: string;      // bg-rose-400
  cover: string;
  items: VocabItem[];
};

export const VOCAB_DATA: Category[] = [
  {
    id: "housekeeping",
    title: "Housekeeping",
    icon: "broom",
    color: "bg-blue-400",
    cover: "https://plus.unsplash.com/premium_photo-1679920025550-75324e59680f?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      {
        id: "hk-1",
        word: "Broom",
        phonetic: "/bruːm/",
        cn: "扫帚",
        image: "https://images.unsplash.com/photo-1684705419854-9c2fc7c56770?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I use a broom to sweep the floor.",
        exampleCn: "我用扫帚扫地。",
        distractors: ["Mop", "Bucket", "Vacuum"]
      },
      {
        id: "hk-2",
        word: "Mop",
        phonetic: "/mɒp/",
        cn: "拖把",
        image: "https://images.unsplash.com/photo-1664008760004-182420e58e7c?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Please mop the kitchen floor.",
        exampleCn: "请拖一下厨房的地板。",
        distractors: ["Brush", "Towel", "Soap"]
      },
      {
        id: "hk-3",
        word: "Vacuum Cleaner",
        phonetic: "/ˈvækjuːm ˈkliːnə/",
        cn: "吸尘器",
        image: "https://images.unsplash.com/photo-1701651545983-c3b357a8387f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The vacuum cleaner is very loud.",
        exampleCn: "这个吸尘器声音很大。",
        distractors: ["Iron", "Washer", "Dryer"]
      },
      {
        id: "hk-4",
        word: "Detergent",
        phonetic: "/dɪˈtɜːdʒənt/",
        cn: "清洁剂",
        image: "https://images.unsplash.com/photo-1642505172378-a6f5e5b15580?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Add some detergent to the water.",
        exampleCn: "往水里加点清洁剂。",
        distractors: ["Oil", "Sauce", "Salt"]
      },
      {
        id: "hk-5",
        word: "Bucket",
        phonetic: "/ˈbʌkɪt/",
        cn: "水桶",
        image: "https://plus.unsplash.com/premium_photo-1678304224487-0c1087aaaefd?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Fill the bucket with warm water.",
        exampleCn: "把水桶装满温水。",
        distractors: ["Plate", "Cup", "Bowl"]
      },
      {
        id: "hk-6",
        word: "Sponge",
        phonetic: "/spʌndʒ/",
        cn: "海绵",
        image: "https://images.unsplash.com/photo-1564540583246-934409427776?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Use a sponge to clean the sink.",
        exampleCn: "用海绵清洁水槽。",
        distractors: ["Brush", "Towel", "Glove"]
      },
      {
        id: "hk-7",
        word: "Gloves",
        phonetic: "/ɡlʌvz/",
        cn: "手套",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Wear gloves to protect your hands.",
        exampleCn: "戴手套保护双手。",
        distractors: ["Hat", "Socks", "Scarf"]
      },
      {
        id: "hk-8",
        word: "Trash Bin",
        phonetic: "/træʃ bɪn/",
        cn: "垃圾桶",
        image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Please empty the trash bin.",
        exampleCn: "请把垃圾桶倒掉。",
        distractors: ["Basket", "Box", "Bag"]
      },
      {
        id: "hk-9",
        word: "Iron",
        phonetic: "/ˈaɪən/",
        cn: "熨斗",
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I need to iron my shirt.",
        exampleCn: "我需要熨衬衫。",
        distractors: ["Dryer", "Washer", "Brush"]
      }
    ]
  },
  {
    id: "vegetables",
    title: "Vegetables",
    icon: "carrot",
    color: "bg-green-400",
    cover: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=80",
    items: [
      {
        id: "veg-1",
        word: "Carrot",
        phonetic: "/ˈkærət/",
        cn: "胡萝卜",
        image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=80",
        exampleEn: "Rabbits love to eat carrots.",
        exampleCn: "兔子喜欢吃胡萝卜。",
        distractors: ["Potato", "Tomato", "Onion"]
      },
      {
        id: "veg-2",
        word: "Tomato",
        phonetic: "/təˈmɑːtəʊ/",
        cn: "西红柿",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=80",
        exampleEn: "I want to make tomato soup.",
        exampleCn: "我想做西红柿汤。",
        distractors: ["Pepper", "Cucumber", "Cabbage"]
      },
      {
        id: "veg-3",
        word: "Potato",
        phonetic: "/pəˈteɪtəʊ/",
        cn: "土豆",
        image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Baked potatoes are delicious.",
        exampleCn: "烤土豆很好吃。",
        distractors: ["Corn", "Peas", "Beans"]
      },
      {
        id: "veg-4",
        word: "Onion",
        phonetic: "/ˈʌnjən/",
        cn: "洋葱",
        image: "https://images.unsplash.com/photo-1585849834908-3481231155e8?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Cutting onions makes me cry.",
        exampleCn: "切洋葱让我流泪。",
        distractors: ["Garlic", "Ginger", "Chili"]
      },
      {
        id: "veg-5",
        word: "Cucumber",
        phonetic: "/ˈkjuːkʌmbə/",
        cn: "黄瓜",
        image: "https://images.unsplash.com/photo-1589621316382-008455b857cd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Slice the cucumber for the salad.",
        exampleCn: "把黄瓜切片做沙拉。",
        distractors: ["Zucchini", "Melon", "Pumpkin"]
      },
      {
        id: "veg-6",
        word: "Broccoli",
        phonetic: "/ˈbrɒkəli/",
        cn: "西兰花",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Broccoli is rich in vitamins.",
        exampleCn: "西兰花富含维生素。",
        distractors: ["Cabbage", "Spinach", "Pea"]
      },
      {
        id: "veg-7",
        word: "Lettuce",
        phonetic: "/ˈlɛtɪs/",
        cn: "生菜",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I like lettuce in my sandwich.",
        exampleCn: "我喜欢在三明治里加生菜。",
        distractors: ["Celery", "Cabbage", "Onion"]
      },
      {
        id: "veg-8",
        word: "Garlic",
        phonetic: "/ˈɡɑːlɪk/",
        cn: "大蒜",
        image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Add garlic for more flavor.",
        exampleCn: "加点大蒜更有味道。",
        distractors: ["Ginger", "Onion", "Pepper"]
      },
      {
        id: "veg-9",
        word: "Cabbage",
        phonetic: "/ˈkæbɪdʒ/",
        cn: "卷心菜",
        image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Cabbage is common in soup.",
        exampleCn: "卷心菜常用于汤里。",
        distractors: ["Lettuce", "Spinach", "Broccoli"]
      }
    ]
  },
  {
    id: "travel",
    title: "Travel",
    icon: "default",
    color: "bg-indigo-400",
    cover: "https://images.unsplash.com/photo-1504598318550-17eba1008a68?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      {
        id: "tr-1",
        word: "Passport",
        phonetic: "/ˈpɑːspɔːt/",
        cn: "护照",
        image: "https://images.unsplash.com/photo-1655722724447-2d2a3071e7f8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Alternative passport image
        exampleEn: "Don't forget your passport!",
        exampleCn: "别忘了你的护照！",
        distractors: ["Ticket", "Map", "Bag"]
      },
      {
        id: "tr-2",
        word: "Airport",
        phonetic: "/ˈeəpɔːt/",
        cn: "机场",
        image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80",
        exampleEn: "The airport is far away.",
        exampleCn: "机场很远。",
        distractors: ["Station", "Port", "Stop"]
      },
      {
        id: "tr-3",
        word: "Luggage",
        phonetic: "/ˈlʌɡɪdʒ/",
        cn: "行李",
        image: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Suitcases
        exampleEn: "My luggage is very heavy.",
        exampleCn: "我的行李很重。",
        distractors: ["Ticket", "Visa", "Seat"]
      },
      {
        id: "tr-4",
        word: "Ticket",
        phonetic: "/ˈtɪkɪt/",
        cn: "票",
        image: "https://images.unsplash.com/photo-1600134637836-9d015f520941?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Tickets
        exampleEn: "Here is my plane ticket.",
        exampleCn: "这是我的机票。",
        distractors: ["Money", "Card", "Bag"]
      },
      {
        id: "tr-5",
        word: "Hotel",
        phonetic: "/həʊˈtɛl/",
        cn: "酒店",
        image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2106f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "We booked a hotel near the beach.",
        exampleCn: "我们订了海边的酒店。",
        distractors: ["Museum", "Station", "Market"]
      },
      {
        id: "tr-6",
        word: "Map",
        phonetic: "/mæp/",
        cn: "地图",
        image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Use a map to find the station.",
        exampleCn: "用地图找到车站。",
        distractors: ["Ticket", "Passport", "Guide"]
      },
      {
        id: "tr-7",
        word: "Visa",
        phonetic: "/ˈviːzə/",
        cn: "签证",
        image: "https://images.unsplash.com/photo-1504598318550-17eba1008a68?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Do you need a visa?",
        exampleCn: "你需要签证吗？",
        distractors: ["Ticket", "Passport", "Map"]
      },
      {
        id: "tr-8",
        word: "Itinerary",
        phonetic: "/aɪˈtɪnərəri/",
        cn: "行程单",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Here is my travel itinerary.",
        exampleCn: "这是我的旅行行程单。",
        distractors: ["Receipt", "Map", "Ticket"]
      }
    ]
  },
  {
    id: "restaurant",
    title: "Restaurant",
    icon: "utensils",
    color: "bg-orange-400",
    cover: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    items: [
      {
        id: "res-1",
        word: "Menu",
        phonetic: "/ˈmɛnjuː/",
        cn: "菜单",
        image: "https://images.unsplash.com/photo-1579042877201-21342f2083a5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Can I have the menu please?",
        exampleCn: "请给我菜单。",
        distractors: ["Plate", "Fork", "Bill"]
      },
      {
        id: "res-2",
        word: "Water",
        phonetic: "/ˈwɔːtə/",
        cn: "水",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
        exampleEn: "I would like some water.",
        exampleCn: "我想要一点水。",
        distractors: ["Wine", "Beer", "Juice"]
      },
      {
        id: "res-3",
        word: "Bill",
        phonetic: "/bɪl/",
        cn: "账单",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
        exampleEn: "Check please! The bill.",
        exampleCn: "买单！账单。",
        distractors: ["Tip", "Cash", "Card"]
      },
      {
        id: "res-4",
        word: "Delicious",
        phonetic: "/dɪˈlɪʃəs/",
        cn: "美味",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
        exampleEn: "This food is delicious.",
        exampleCn: "这食物很美味。",
        distractors: ["Bad", "Cold", "Hot"]
      },
      {
        id: "res-5",
        word: "Waiter",
        phonetic: "/ˈweɪtə/",
        cn: "服务员",
        image: "https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The waiter brought the menu.",
        exampleCn: "服务员拿来了菜单。",
        distractors: ["Chef", "Guest", "Driver"]
      },
      {
        id: "res-6",
        word: "Reservation",
        phonetic: "/ˌrɛzəˈveɪʃən/",
        cn: "预订",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I made a reservation for two.",
        exampleCn: "我订了两个人的位子。",
        distractors: ["Menu", "Order", "Bill"]
      },
      {
        id: "res-7",
        word: "Fork",
        phonetic: "/fɔːk/",
        cn: "叉子",
        image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Could I have a fork?",
        exampleCn: "可以给我一把叉子吗？",
        distractors: ["Spoon", "Knife", "Plate"]
      },
      {
        id: "res-8",
        word: "Tip",
        phonetic: "/tɪp/",
        cn: "小费",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The tip is included.",
        exampleCn: "小费已包含。",
        distractors: ["Bill", "Menu", "Order"]
      }
    ]
  },
  {
    id: "animals",
    title: "Animals",
    icon: "default",
    color: "bg-yellow-400",
    cover: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80",
    items: [
      {
        id: "ani-1",
        word: "Cat",
        phonetic: "/kæt/",
        cn: "猫",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80",
        exampleEn: "The cat is sleeping.",
        exampleCn: "猫正在睡觉。",
        distractors: ["Dog", "Bird", "Mouse"]
      },
      {
        id: "ani-2",
        word: "Dog",
        phonetic: "/dɒɡ/",
        cn: "狗",
        image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80",
        exampleEn: "I have a pet dog.",
        exampleCn: "我有一只宠物狗。",
        distractors: ["Cat", "Wolf", "Fox"]
      },
      {
        id: "ani-3",
        word: "Elephant",
        phonetic: "/ˈɛlɪfənt/",
        cn: "大象",
        image: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Elephants are very big.",
        exampleCn: "大象非常大。",
        distractors: ["Lion", "Tiger", "Bear"]
      },
      {
        id: "ani-4",
        word: "Lion",
        phonetic: "/ˈlaɪən/",
        cn: "狮子",
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2659&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The lion is the king of the jungle.",
        exampleCn: "狮子是丛林之王。",
        distractors: ["Tiger", "Cat", "Dog"]
      },
      {
        id: "ani-5",
        word: "Bird",
        phonetic: "/bɜːd/",
        cn: "鸟",
        image: "https://images.unsplash.com/photo-1501706362039-c6b2a7b17610?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "A bird is singing in the tree.",
        exampleCn: "树上有只鸟在唱歌。",
        distractors: ["Fish", "Cat", "Dog"]
      },
      {
        id: "ani-6",
        word: "Rabbit",
        phonetic: "/ˈræbɪt/",
        cn: "兔子",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The rabbit is very fast.",
        exampleCn: "兔子跑得很快。",
        distractors: ["Mouse", "Cat", "Dog"]
      },
      {
        id: "ani-7",
        word: "Fish",
        phonetic: "/fɪʃ/",
        cn: "鱼",
        image: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The fish is swimming.",
        exampleCn: "鱼在游泳。",
        distractors: ["Bird", "Cat", "Dog"]
      },
      {
        id: "ani-8",
        word: "Horse",
        phonetic: "/hɔːs/",
        cn: "马",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "A horse runs fast.",
        exampleCn: "马跑得很快。",
        distractors: ["Cow", "Sheep", "Dog"]
      }
    ]
  },
  {
    id: "colors",
    title: "Colors",
    icon: "default",
    color: "bg-purple-400",
    cover: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      {
        id: "col-1",
        word: "Red",
        phonetic: "/rɛd/",
        cn: "红色",
        image: "https://images.unsplash.com/photo-1507471509451-1d04d60f896d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Red flowers/texture
        exampleEn: "Apples are red.",
        exampleCn: "苹果是红色的。",
        distractors: ["Blue", "Green", "Yellow"]
      },
      {
        id: "col-2",
        word: "Blue",
        phonetic: "/bluː/",
        cn: "蓝色",
        image: "https://images.unsplash.com/photo-1508311603478-ce574376c3cf?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Blue texture
        exampleEn: "The sky is blue.",
        exampleCn: "天空是蓝色的。",
        distractors: ["Red", "Pink", "Black"]
      },
      {
        id: "col-3",
        word: "Green",
        phonetic: "/ɡriːn/",
        cn: "绿色",
        image: "https://images.unsplash.com/photo-1553307236-8783cc0a3b9e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Green leaves
        exampleEn: "Grass is green.",
        exampleCn: "草是绿色的。",
        distractors: ["Red", "Blue", "White"]
      },
      {
        id: "col-4",
        word: "Yellow",
        phonetic: "/ˈjɛləʊ/",
        cn: "黄色",
        image: "https://images.unsplash.com/photo-1615457938971-3ab61c1c0d57?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Yellow flowers
        exampleEn: "Sunflowers are yellow.",
        exampleCn: "向日葵是黄色的。",
        distractors: ["Purple", "Orange", "Red"]
      },
      {
        id: "col-5",
        word: "Black",
        phonetic: "/blæk/",
        cn: "黑色",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The night sky is black.",
        exampleCn: "夜空是黑色的。",
        distractors: ["White", "Blue", "Gray"]
      },
      {
        id: "col-6",
        word: "White",
        phonetic: "/waɪt/",
        cn: "白色",
        image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Snow is white.",
        exampleCn: "雪是白色的。",
        distractors: ["Black", "Red", "Blue"]
      },
      {
        id: "col-7",
        word: "Orange",
        phonetic: "/ˈɒrɪndʒ/",
        cn: "橙色",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The sunset is orange.",
        exampleCn: "日落是橙色的。",
        distractors: ["Red", "Yellow", "Brown"]
      },
      {
        id: "col-8",
        word: "Purple",
        phonetic: "/ˈpɜːpəl/",
        cn: "紫色",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "She likes purple flowers.",
        exampleCn: "她喜欢紫色的花。",
        distractors: ["Blue", "Pink", "Red"]
      }
    ]
  },
  {
    id: "feelings",
    title: "Feelings",
    icon: "smile",
    color: "bg-pink-400",
    cover: "https://images.unsplash.com/photo-1524293568345-75d62c3664f7?q=80&w=1311&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      {
        id: "feel-1",
        word: "Happy",
        phonetic: "/ˈhæpi/",
        cn: "开心",
        image: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Moving home makes me happy.",
        exampleCn: "搬家让我很开心。",
        distractors: ["Sad", "Angry", "Tired"]
      },
      {
        id: "feel-2",
        word: "Sad",
        phonetic: "/sæd/",
        cn: "悲伤",
        image: "https://images.unsplash.com/photo-1564396797585-82f726d7d39a?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The ending of the movie was very sad.",
        exampleCn: "电影的结局非常悲伤。",
        distractors: ["Happy", "Excited", "Angry"]
      },
      {
        id: "feel-3",
        word: "Angry",
        phonetic: "/ˈæŋɡri/",
        cn: "愤怒",
        image: "https://images.unsplash.com/photo-1503525537183-c84679c9147f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&q=80",
        exampleEn: "Please don't be angry with me.",
        exampleCn: "请不要对我生气。",
        distractors: ["Calm", "Happy", "Tired"]
      },
      {
        id: "feel-4",
        word: "Tired",
        phonetic: "/ˈtaɪəd/",
        cn: "疲倦",
        image: "https://plus.unsplash.com/premium_photo-1678980766534-c8be07e3c92a?q=80&w=1311&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&q=80",
        exampleEn: "I am feeling very tired today.",
        exampleCn: "我今天觉得非常疲倦。",
        distractors: ["Energetic", "Happy", "Sad"]
      },
      {
        id: "feel-5",
        word: "Excited",
        phonetic: "/ɪkˈsaɪtɪd/",
        cn: "兴奋",
        image: "https://plus.unsplash.com/premium_photo-1681505422038-96ca1b828fbe?q=80&w=2283&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "She is excited about the trip.",
        exampleCn: "她对这次旅行感到很兴奋。",
        distractors: ["Bored", "Sad", "Tired"]
      },
      {
        id: "feel-6",
        word: "Nervous",
        phonetic: "/ˈnɜːvəs/",
        cn: "紧张",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I feel nervous before the exam.",
        exampleCn: "考试前我感到紧张。",
        distractors: ["Relaxed", "Happy", "Tired"]
      },
      {
        id: "feel-7",
        word: "Bored",
        phonetic: "/bɔːd/",
        cn: "无聊",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The lecture was boring.",
        exampleCn: "那节课很无聊。",
        distractors: ["Excited", "Happy", "Busy"]
      },
      {
        id: "feel-8",
        word: "Relaxed",
        phonetic: "/rɪˈlækst/",
        cn: "放松",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I feel relaxed on weekends.",
        exampleCn: "周末我感到放松。",
        distractors: ["Nervous", "Angry", "Sad"]
      },
      {
        id: "feel-9",
        word: "Proud",
        phonetic: "/praʊd/",
        cn: "自豪",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I'm proud of you.",
        exampleCn: "我为你感到自豪。",
        distractors: ["Shy", "Angry", "Bored"]
      }
    ]
  },
  {
    id: "daily_life",
    title: "Daily Life",
    icon: "home",
    color: "bg-emerald-400",
    cover: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      {
        id: "dl-1",
        word: "Laundry",
        phonetic: "/ˈlɔːndri/",
        cn: "洗衣",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I do the laundry on Sundays.",
        exampleCn: "我周日洗衣服。",
        distractors: ["Cooking", "Cleaning", "Shopping"]
      },
      {
        id: "dl-2",
        word: "Groceries",
        phonetic: "/ˈɡrəʊsəriz/",
        cn: "杂货",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I need to buy groceries.",
        exampleCn: "我需要买杂货。",
        distractors: ["Tickets", "Tools", "Clothes"]
      },
      {
        id: "dl-3",
        word: "Dishwasher",
        phonetic: "/ˈdɪʃˌwɒʃə/",
        cn: "洗碗机",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The dishwasher is full.",
        exampleCn: "洗碗机满了。",
        distractors: ["Oven", "Fridge", "Microwave"]
      },
      {
        id: "dl-4",
        word: "Cook",
        phonetic: "/kʊk/",
        cn: "做饭",
        image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I like to cook dinner.",
        exampleCn: "我喜欢做晚饭。",
        distractors: ["Sleep", "Drive", "Read"]
      },
      {
        id: "dl-5",
        word: "Vacuum",
        phonetic: "/ˈvækjuːm/",
        cn: "吸尘",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I need to vacuum the floor.",
        exampleCn: "我需要吸地板。",
        distractors: ["Mop", "Wash", "Dry"]
      },
      {
        id: "dl-6",
        word: "Schedule",
        phonetic: "/ˈskedʒuːl/",
        cn: "日程",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "My schedule is busy today.",
        exampleCn: "我今天日程很满。",
        distractors: ["Map", "Ticket", "List"]
      },
      {
        id: "dl-7",
        word: "Curtains",
        phonetic: "/ˈkɜːtənz/",
        cn: "窗帘",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Please close the curtains.",
        exampleCn: "请把窗帘拉上。",
        distractors: ["Windows", "Doors", "Lights"]
      },
      {
        id: "dl-8",
        word: "Electricity Bill",
        phonetic: "/ɪˌlɛkˈtrɪsəti bɪl/",
        cn: "电费单",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I paid the electricity bill.",
        exampleCn: "我交了电费。",
        distractors: ["Rent", "Ticket", "Receipt"]
      },
      {
        id: "dl-9",
        word: "Rent",
        phonetic: "/rɛnt/",
        cn: "房租",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The rent is due tomorrow.",
        exampleCn: "房租明天到期。",
        distractors: ["Bill", "Loan", "Deposit"]
      },
      {
        id: "dl-10",
        word: "Repair",
        phonetic: "/rɪˈpɛə/",
        cn: "维修",
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The sink needs repair.",
        exampleCn: "水槽需要维修。",
        distractors: ["Clean", "Move", "Decorate"]
      }
    ]
  },
  {
    id: "school",
    title: "School & Classroom",
    icon: "school",
    color: "bg-sky-400",
    cover: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      {
        id: "sch-1",
        word: "Classroom",
        phonetic: "/ˈklɑːsruːm/",
        cn: "教室",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The classroom is bright.",
        exampleCn: "教室很明亮。",
        distractors: ["Library", "Office", "Lab"]
      },
      {
        id: "sch-2",
        word: "Homework",
        phonetic: "/ˈhəʊmwɜːk/",
        cn: "作业",
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I finished my homework.",
        exampleCn: "我完成了作业。",
        distractors: ["Exam", "Project", "Lesson"]
      },
      {
        id: "sch-3",
        word: "Notebook",
        phonetic: "/ˈnəʊtbʊk/",
        cn: "笔记本",
        image: "https://images.unsplash.com/photo-1491841651911-c44c30c34548?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Take notes in your notebook.",
        exampleCn: "在笔记本里记笔记。",
        distractors: ["Folder", "Ruler", "Bag"]
      },
      {
        id: "sch-4",
        word: "Teacher",
        phonetic: "/ˈtiːtʃə/",
        cn: "老师",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The teacher is kind.",
        exampleCn: "老师很友善。",
        distractors: ["Student", "Parent", "Coach"]
      },
      {
        id: "sch-5",
        word: "Exam",
        phonetic: "/ɪɡˈzæm/",
        cn: "考试",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The exam is on Friday.",
        exampleCn: "考试在周五。",
        distractors: ["Lesson", "Break", "Game"]
      },
      {
        id: "sch-6",
        word: "Library",
        phonetic: "/ˈlaɪbrəri/",
        cn: "图书馆",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I study in the library.",
        exampleCn: "我在图书馆学习。",
        distractors: ["Cafeteria", "Gym", "Office"]
      },
      {
        id: "sch-7",
        word: "Lecture",
        phonetic: "/ˈlɛktʃə/",
        cn: "讲座",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The lecture starts at 9.",
        exampleCn: "讲座九点开始。",
        distractors: ["Meeting", "Break", "Exam"]
      },
      {
        id: "sch-8",
        word: "Assignment",
        phonetic: "/əˈsaɪnmənt/",
        cn: "作业任务",
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "This assignment is due tomorrow.",
        exampleCn: "这份作业明天截止。",
        distractors: ["Lesson", "Exam", "Note"]
      },
      {
        id: "sch-9",
        word: "Grade",
        phonetic: "/ɡreɪd/",
        cn: "成绩",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I got a good grade.",
        exampleCn: "我拿到了好成绩。",
        distractors: ["Score", "Class", "Course"]
      },
      {
        id: "sch-10",
        word: "Tutor",
        phonetic: "/ˈtjuːtə/",
        cn: "家教",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "She has a math tutor.",
        exampleCn: "她有一个数学家教。",
        distractors: ["Teacher", "Student", "Coach"]
      }
    ]
  },
  {
    id: "work",
    title: "Work & Business",
    icon: "briefcase",
    color: "bg-slate-400",
    cover: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      {
        id: "work-1",
        word: "Meeting",
        phonetic: "/ˈmiːtɪŋ/",
        cn: "会议",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "We have a meeting at 10.",
        exampleCn: "我们十点开会。",
        distractors: ["Break", "Lunch", "Trip"]
      },
      {
        id: "work-2",
        word: "Deadline",
        phonetic: "/ˈdɛdlaɪn/",
        cn: "截止日期",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The deadline is tomorrow.",
        exampleCn: "截止日期是明天。",
        distractors: ["Budget", "Agenda", "Salary"]
      },
      {
        id: "work-3",
        word: "Project",
        phonetic: "/ˈprɒdʒɛkt/",
        cn: "项目",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "This project is important.",
        exampleCn: "这个项目很重要。",
        distractors: ["Report", "Note", "Task"]
      },
      {
        id: "work-4",
        word: "Client",
        phonetic: "/ˈklaɪənt/",
        cn: "客户",
        image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The client is satisfied.",
        exampleCn: "客户很满意。",
        distractors: ["Teacher", "Doctor", "Driver"]
      },
      {
        id: "work-5",
        word: "Invoice",
        phonetic: "/ˈɪnvɔɪs/",
        cn: "发票",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Please send the invoice.",
        exampleCn: "请发送发票。",
        distractors: ["Receipt", "Contract", "Plan"]
      },
      {
        id: "work-6",
        word: "Resume",
        phonetic: "/rɪˈzjuːm/",
        cn: "简历",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Update your resume.",
        exampleCn: "更新你的简历。",
        distractors: ["Agenda", "Form", "Email"]
      },
      {
        id: "work-7",
        word: "Contract",
        phonetic: "/ˈkɒntrækt/",
        cn: "合同",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Please sign the contract.",
        exampleCn: "请签合同。",
        distractors: ["Invoice", "Report", "Plan"]
      },
      {
        id: "work-8",
        word: "Presentation",
        phonetic: "/ˌprɛzənˈteɪʃən/",
        cn: "汇报",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The presentation was clear.",
        exampleCn: "汇报很清晰。",
        distractors: ["Meeting", "Deadline", "Email"]
      },
      {
        id: "work-9",
        word: "Budget",
        phonetic: "/ˈbʌdʒɪt/",
        cn: "预算",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "We need to cut the budget.",
        exampleCn: "我们需要削减预算。",
        distractors: ["Agenda", "Contract", "Invoice"]
      },
      {
        id: "work-10",
        word: "Email",
        phonetic: "/ˈiːmeɪl/",
        cn: "邮件",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I'll send you an email.",
        exampleCn: "我会给你发邮件。",
        distractors: ["Message", "Report", "Memo"]
      }
    ]
  },
  {
    id: "medical",
    title: "Medical",
    icon: "medical",
    color: "bg-red-400",
    cover: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      {
        id: "med-1",
        word: "Fever",
        phonetic: "/ˈfiːvə/",
        cn: "发烧",
        image: "https://images.unsplash.com/photo-1688224821110-e0e45cb718d0?q=10&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I have a fever.",
        exampleCn: "我发烧了。",
        distractors: ["Cough", "Pain", "Allergy"]
      },
      {
        id: "med-2",
        word: "Cough",
        phonetic: "/kɒf/",
        cn: "咳嗽",
        image: "https://images.unsplash.com/photo-1634128221567-3220e071d1ea?q=40&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The cough won't stop.",
        exampleCn: "咳嗽不停。",
        distractors: ["Fever", "Cold", "Pain"]
      },
      {
        id: "med-3",
        word: "Medicine",
        phonetic: "/ˈmɛdɪsɪn/",
        cn: "药",
        image: "https://images.unsplash.com/photo-1581159186721-b68b78da4ec9?q=10&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Take the medicine after meals.",
        exampleCn: "饭后服药。",
        distractors: ["Vaccine", "Syrup", "Bandage"]
      },
      {
        id: "med-4",
        word: "Appointment",
        phonetic: "/əˈpɔɪntmənt/",
        cn: "预约",
        image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I have a doctor's appointment.",
        exampleCn: "我有医生预约。",
        distractors: ["Meeting", "Order", "Ticket"]
      },
      {
        id: "med-5",
        word: "Pharmacy",
        phonetic: "/ˈfɑːməsi/",
        cn: "药店",
        image: "https://images.unsplash.com/photo-1603706580932-6befcf7d8521?q=10&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The pharmacy is open 24 hours.",
        exampleCn: "药店24小时营业。",
        distractors: ["Hospital", "Clinic", "Hotel"]
      },
      {
        id: "med-6",
        word: "Allergy",
        phonetic: "/ˈælədʒi/",
        cn: "过敏",
        image: "https://images.unsplash.com/photo-1536618517835-f6eb0c1e710f?q=10&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I have a pollen allergy.",
        exampleCn: "我对花粉过敏。",
        distractors: ["Fever", "Cold", "Cough"]
      },
      {
        id: "med-7",
        word: "Symptom",
        phonetic: "/ˈsɪmptəm/",
        cn: "症状",
        image: "https://images.unsplash.com/photo-1628088061640-9924940abb99?q=20&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "What are your symptoms?",
        exampleCn: "你的症状是什么？",
        distractors: ["Medicine", "Clinic", "Allergy"]
      },
      {
        id: "med-8",
        word: "Prescription",
        phonetic: "/prɪˈskrɪpʃən/",
        cn: "处方",
        image: "https://images.unsplash.com/photo-1576091358783-a212ec293ff3?q=20&w=2225&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The doctor gave me a prescription.",
        exampleCn: "医生给了我处方。",
        distractors: ["Receipt", "Invoice", "Contract"]
      },
      {
        id: "med-9",
        word: "Clinic",
        phonetic: "/ˈklɪnɪk/",
        cn: "诊所",
        image: "https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?q=20&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The clinic is nearby.",
        exampleCn: "诊所就在附近。",
        distractors: ["Hospital", "Hotel", "Office"]
      },
      {
        id: "med-10",
        word: "X-ray",
        phonetic: "/ˈɛksreɪ/",
        cn: "X光",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=20&w=1090&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I need an X-ray.",
        exampleCn: "我需要拍X光。",
        distractors: ["Test", "Checkup", "Medicine"]
      }
    ]
  },
  {
    id: "technology",
    title: "Technology",
    icon: "cpu",
    color: "bg-cyan-500",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      {
        id: "tech-1",
        word: "Laptop",
        phonetic: "/ˈlæptɒp/",
        cn: "笔记本电脑",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "My laptop is new.",
        exampleCn: "我的笔记本电脑是新的。",
        distractors: ["Tablet", "Phone", "Camera"]
      },
      {
        id: "tech-2",
        word: "Password",
        phonetic: "/ˈpɑːswɜːd/",
        cn: "密码",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Please reset your password.",
        exampleCn: "请重置你的密码。",
        distractors: ["Email", "Number", "Account"]
      },
      {
        id: "tech-3",
        word: "Update",
        phonetic: "/ˈʌpdeɪt/",
        cn: "更新",
        image: "https://images.unsplash.com/photo-1662468353771-b177773cc281?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The app needs an update.",
        exampleCn: "这个应用需要更新。",
        distractors: ["Install", "Delete", "Save"]
      },
      {
        id: "tech-4",
        word: "Wi-Fi",
        phonetic: "/ˈwaɪ faɪ/",
        cn: "无线网络",
        image: "https://images.unsplash.com/photo-1645725677294-ed0843b97d5c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Is there free Wi-Fi here?",
        exampleCn: "这里有免费 Wi-Fi 吗？",
        distractors: ["Signal", "Battery", "Screen"]
      },
      {
        id: "tech-5",
        word: "Battery",
        phonetic: "/ˈbætəri/",
        cn: "电池",
        image: "https://images.unsplash.com/photo-1608224873587-81ee37394b4e?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "My battery is low.",
        exampleCn: "我的电量很低。",
        distractors: ["Speaker", "Camera", "Mouse"]
      },
      {
        id: "tech-6",
        word: "File",
        phonetic: "/faɪl/",
        cn: "文件",
        image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Send me the file, please.",
        exampleCn: "请把文件发给我。",
        distractors: ["Folder", "Table", "Screen"]
      },
      {
        id: "tech-7",
        word: "Cloud",
        phonetic: "/klaʊd/",
        cn: "云，云端",
        image: "https://images.unsplash.com/photo-1601370552761-d129028bd833?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Save it to the cloud.",
        exampleCn: "把它保存到云端。",
        distractors: ["Drive", "Disk", "Cable"]
      },
      {
        id: "tech-8",
        word: "Screen",
        phonetic: "/skriːn/",
        cn: "屏幕",
        image: "https://images.unsplash.com/photo-1547658718-1cdaa0852790?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The screen is too bright.",
        exampleCn: "屏幕太亮了。",
        distractors: ["Keyboard", "Mouse", "Speaker"]
      }
    ]
  },
  {
    id: "travel_advanced",
    title: "Travel Advanced",
    icon: "plane",
    color: "bg-indigo-500",
    cover: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      {
        id: "trav-1",
        word: "Customs",
        phonetic: "/ˈkʌstəmz/",
        cn: "海关",
        image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "We went through customs.",
        exampleCn: "我们通过了海关。",
        distractors: ["Lobby", "Gate", "Terminal"]
      },
      {
        id: "trav-2",
        word: "Immigration",
        phonetic: "/ˌɪmɪˈɡreɪʃən/",
        cn: "入境处",
        image: "https://images.unsplash.com/photo-1504598318550-17eba1008a68?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Show your passport at immigration.",
        exampleCn: "在入境处出示护照。",
        distractors: ["Customs", "Hotel", "Station"]
      },
      {
        id: "trav-3",
        word: "Boarding Pass",
        phonetic: "/ˈbɔːdɪŋ pɑːs/",
        cn: "登机牌",
        image: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I can't find my boarding pass.",
        exampleCn: "我找不到登机牌。",
        distractors: ["Ticket", "Visa", "Map"]
      },
      {
        id: "trav-4",
        word: "Delay",
        phonetic: "/dɪˈleɪ/",
        cn: "延误",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "The flight is delayed.",
        exampleCn: "航班延误了。",
        distractors: ["Arrival", "Gate", "Luggage"]
      },
      {
        id: "trav-5",
        word: "Transit",
        phonetic: "/ˈtrænsɪt/",
        cn: "转机",
        image: "https://images.unsplash.com/photo-1504598318550-17eba1008a68?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "We have a long transit.",
        exampleCn: "我们有很长的转机时间。",
        distractors: ["Customs", "Boarding", "Landing"]
      },
      {
        id: "trav-6",
        word: "Exchange",
        phonetic: "/ɪksˈtʃeɪndʒ/",
        cn: "兑换",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I need to exchange currency.",
        exampleCn: "我需要换钱。",
        distractors: ["Pay", "Send", "Count"]
      },
      {
        id: "trav-7",
        word: "Baggage Claim",
        phonetic: "/ˈbæɡɪdʒ kleɪm/",
        cn: "行李领取处",
        image: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "My bag is at baggage claim.",
        exampleCn: "我的行李在行李领取处。",
        distractors: ["Gate", "Customs", "Lobby"]
      },
      {
        id: "trav-8",
        word: "Embassy",
        phonetic: "/ˈɛmbəsi/",
        cn: "大使馆",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "Contact the embassy for help.",
        exampleCn: "联系大使馆寻求帮助。",
        distractors: ["Hospital", "Hotel", "Station"]
      },
      {
        id: "trav-9",
        word: "Refund",
        phonetic: "/ˈriːfʌnd/",
        cn: "退款",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "I need a refund for this ticket.",
        exampleCn: "我需要退这张票。",
        distractors: ["Exchange", "Receipt", "Invoice"]
      },
      {
        id: "trav-10",
        word: "Layover",
        phonetic: "/ˈleɪˌəʊvə/",
        cn: "中转停留",
        image: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exampleEn: "We have a long layover.",
        exampleCn: "我们有很长的中转时间。",
        distractors: ["Delay", "Transit", "Arrival"]
      }
    ]
  }
];
