
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
  items: VocabItem[];
};

export const VOCAB_DATA: Category[] = [
  {
    id: "housekeeping",
    title: "Housekeeping",
    icon: "broom",
    color: "bg-blue-400",
    items: [
      {
        id: "hk-1",
        word: "Broom",
        phonetic: "/bruːm/",
        cn: "扫帚",
        image: "https://images.unsplash.com/photo-1585938389774-7f90371a3c79?w=800&q=80",
        exampleEn: "I use a broom to sweep the floor.",
        exampleCn: "我用扫帚扫地。",
        distractors: ["Mop", "Bucket", "Vacuum"]
      },
      {
        id: "hk-2",
        word: "Mop",
        phonetic: "/mɒp/",
        cn: "拖把",
        image: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?w=800&q=80",
        exampleEn: "Please mop the kitchen floor.",
        exampleCn: "请拖一下厨房的地板。",
        distractors: ["Brush", "Towel", "Soap"]
      },
      {
        id: "hk-3",
        word: "Vacuum Cleaner",
        phonetic: "/ˈvækjuːm ˈkliːnə/",
        cn: "吸尘器",
        image: "https://images.unsplash.com/photo-1558317374-a309d9354981?w=800&q=80",
        exampleEn: "The vacuum cleaner is very loud.",
        exampleCn: "这个吸尘器声音很大。",
        distractors: ["Iron", "Washer", "Dryer"]
      },
      {
        id: "hk-4",
        word: "Detergent",
        phonetic: "/dɪˈtɜːdʒənt/",
        cn: "清洁剂",
        image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&q=80",
        exampleEn: "Add some detergent to the water.",
        exampleCn: "往水里加点清洁剂。",
        distractors: ["Oil", "Sauce", "Salt"]
      },
      {
        id: "hk-5",
        word: "Bucket",
        phonetic: "/ˈbʌkɪt/",
        cn: "水桶",
        image: "https://images.unsplash.com/photo-1591101955416-58eb8d584347?w=800&q=80",
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
        image: "https://images.unsplash.com/photo-1518977676605-dc156152e1d3?w=800&q=80",
        exampleEn: "Baked potatoes are delicious.",
        exampleCn: "烤土豆很好吃。",
        distractors: ["Corn", "Peas", "Beans"]
      },
      {
        id: "veg-4",
        word: "Onion",
        phonetic: "/ˈʌnjən/",
        cn: "洋葱",
        image: "https://images.unsplash.com/photo-1504569251293-d03b53332454?w=800&q=80",
        exampleEn: "Cutting onions makes me cry.",
        exampleCn: "切洋葱让我流泪。",
        distractors: ["Garlic", "Ginger", "Chili"]
      },
      {
        id: "veg-5",
        word: "Cucumber",
        phonetic: "/ˈkjuːkʌmbə/",
        cn: "黄瓜",
        image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=800&q=80",
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
    items: [
      {
        id: "tr-1",
        word: "Passport",
        phonetic: "/ˈpɑːspɔːt/",
        cn: "护照",
        image: "https://images.unsplash.com/photo-1544207914-17db233e705b?w=800&q=80", // Alternative passport image
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
        image: "https://images.unsplash.com/photo-1565514020176-db936c464459?w=800&q=80", // Suitcases
        exampleEn: "My luggage is very heavy.",
        exampleCn: "我的行李很重。",
        distractors: ["Ticket", "Visa", "Seat"]
      },
      {
        id: "tr-4",
        word: "Ticket",
        phonetic: "/ˈtɪkɪt/",
        cn: "票",
        image: "https://images.unsplash.com/photo-1550742512-427c3f86b764?w=800&q=80", // Tickets
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
    items: [
      {
        id: "res-1",
        word: "Menu",
        phonetic: "/ˈmɛnjuː/",
        cn: "菜单",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
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
        image: "https://images.unsplash.com/photo-1557050543-4d5f4e641c5c?w=800&q=80",
        exampleEn: "Elephants are very big.",
        exampleCn: "大象非常大。",
        distractors: ["Lion", "Tiger", "Bear"]
      },
      {
        id: "ani-4",
        word: "Lion",
        phonetic: "/ˈlaɪən/",
        cn: "狮子",
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80",
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
    items: [
      {
        id: "col-1",
        word: "Red",
        phonetic: "/rɛd/",
        cn: "红色",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80", // Red flowers/texture
        exampleEn: "Apples are red.",
        exampleCn: "苹果是红色的。",
        distractors: ["Blue", "Green", "Yellow"]
      },
      {
        id: "col-2",
        word: "Blue",
        phonetic: "/bluː/",
        cn: "蓝色",
        image: "https://images.unsplash.com/photo-1615484477745-a43300d3eccc?w=800&q=80", // Blue texture
        exampleEn: "The sky is blue.",
        exampleCn: "天空是蓝色的。",
        distractors: ["Red", "Pink", "Black"]
      },
      {
        id: "col-3",
        word: "Green",
        phonetic: "/ɡriːn/",
        cn: "绿色",
        image: "https://images.unsplash.com/photo-1518531933037-9a8476317b16?w=800&q=80", // Green leaves
        exampleEn: "Grass is green.",
        exampleCn: "草是绿色的。",
        distractors: ["Red", "Blue", "White"]
      },
      {
        id: "col-4",
        word: "Yellow",
        phonetic: "/ˈjɛləʊ/",
        cn: "黄色",
        image: "https://images.unsplash.com/photo-1490750967868-58cb75069ed6?w=800&q=80", // Yellow flowers
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
    items: [
      {
        id: "feel-1",
        word: "Happy",
        phonetic: "/ˈhæpi/",
        cn: "开心",
        image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800&q=80",
        exampleEn: "Moving home makes me happy.",
        exampleCn: "搬家让我很开心。",
        distractors: ["Sad", "Angry", "Tired"]
      },
      {
        id: "feel-2",
        word: "Sad",
        phonetic: "/sæd/",
        cn: "悲伤",
        image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=800&q=80",
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
