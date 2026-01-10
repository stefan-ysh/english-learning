
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
      }
    ]
  }
];
