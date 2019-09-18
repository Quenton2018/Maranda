const goodsData = {
	wordList: [
		{ ch: '回答', en: 'answer', id: 1001 },
		{ ch: '协会', en: 'association', id: 1002 },
		{ ch: '是', en: 'yew', id: 1003 },
		{ ch: '苹果', en: 'apple', id: 1004 },
		{ ch: '奶酪，干酪，茄子（照相说的）', en: 'cheese', id: 1005 },
		{ ch: '盒，箱', en: 'box', id: 1006 },
		{ ch: '买', en: 'buy', id: 1007 },
		{ ch: '加拿大的', en: 'Canadian', id: 1008 },
		{ ch: '汽车', en: 'car', id: 1009 },
		{ ch: '地毯', en: 'carpet', id: 1010 },
		{ ch: '携带，拿', en: 'carry', id: 1011 },
		{ ch: '便宜的', en: 'cheap', id: 1012 },
		{ ch: '城市', en: 'city', id: 1013 },
		{ ch: '外套', en: 'coat', id: 1014 },
		{ ch: '衣服', en: 'dress', id: 1015 },
		{ ch: '东方', en: 'wast', id: 1016 },
		{ ch: '八', en: 'eight', id: 1017 },
		{ ch: '英语', en: 'English', id: 1018 },
		{ ch: '足够', en: 'enough', id: 1019 },
		{ ch: '一切，任何事物', en: 'everything', id: 1020 },
		{ ch: '考试', en: 'exam', id: 1021 },
		{ ch: '借口，理由', en: 'excuse', id: 1022 },
		{ ch: '十五', en: 'fifteen', id: 1023 },
		{ ch: '结束', en: 'finish', id: 1024 },
		{ ch: '五', en: 'five', id: 1025 },
		{ ch: '四', en: 'four', id: 1026 },
		{ ch: '礼拜五', en: 'Friday', id: 1027 },
		{ ch: '起床', en: 'get up', id: 1028 },
		{ ch: '五', en: 'five', id: 1029 },
		{ ch: '理发，发型', en: 'haircut', id: 1030 },
		{ ch: '他自己', en: 'herself', id: 1031 },
		{ ch: '丘陵', en: 'hill', id: 1032 },
		{ ch: '假期', en: 'holiday', id: 1033 },
		{ ch: '房子', en: 'house', id: 1034 },
		{ ch: '这，它', en: 'it', id: 1035 },
		{ ch: '跳', en: 'jump', id: 1036 },
		{ ch: '只是，就', en: 'just', id: 1037 },
		{ ch: '离开', en: 'leave', id: 1038 },
		{ ch: '少，较少', en: 'less', id: 1039 },
		{ ch: '光，亮的', en: 'light', id: 1040 },
		{ ch: '听，倾听', en: 'listen', id: 1041 },
		{ ch: '看，寻找', en: 'look', id: 1042 },
		{ ch: '我', en: 'me', id: 1043 },
		{ ch: '中午', en: 'midday', id: 1044 },
		{ ch: '我自己', en: 'myself', id: 1045 },
		{ ch: '九', en: 'nine', id: 1046 },
		{ ch: '九十', en: 'ninety', id: 1047 },
		{ ch: '一个，一', en: 'one', id: 1048 },
		{ ch: '桔子，橙色', en: 'orange', id: 1049 },
		{ ch: '对，一对', en: 'pair', id: 1050 },
		{ ch: '原谅，赦免', en: 'pardon', id: 1051 },
		{ ch: '钢笔', en: 'pen', id: 1052 },
		{ ch: '铅笔', en: 'pencil', id: 1053 },
		{ ch: '分，便士', en: 'penny', id: 1054 },
		{ ch: '擦亮，磨光', en: 'polish', id: 1055 },
		{ ch: '目前的', en: 'present', id: 1056 },
		{ ch: '红色', en: 'red', id: 1057 },
		{ ch: '其他，其余', en: 'rest', id: 1058 },
		{ ch: '富有的', en: 'rich', id: 1059 },
		{ ch: '俄罗斯的', en: 'Russian', id: 1060 },
		{ ch: '看', en: 'see', id: 1061 },
		{ ch: '七', en: 'seven', id: 1062 },
		{ ch: '衬衫', en: 'shirt', id: 1063 },
		{ ch: '六', en: 'six', id: 1064 },
		{ ch: '裙子', en: 'skirt', id: 1065 },
		{ ch: '软的', en: 'soft', id: 1066 },
		{ ch: '酸的', en: 'sour', id: 1067 },
		{ ch: '站起来，起立', en: 'stand up', id: 1068 },
		{ ch: '欠考虑，笨的', en: 'stupid', id: 1069 },
		{ ch: '礼拜日', en: 'Sunday', id: 1070 },
		{ ch: '甜的', en: 'sweet', id: 1071 },
		{ ch: '桌子，表', en: 'table', id: 1072 },
		{ ch: '第三，三分之一', en: 'third', id: 1073 },
		{ ch: '这个', en: 'this', id: 1074 },
		{ ch: '三', en: 'three', id: 1075 },
		{ ch: '也，很，非常', en: 'too', id: 1076 },
		{ ch: '十二日', en: 'twelfth', id: 1077 },
		{ ch: '二', en: 'two', id: 1078 },
		{ ch: '雨伞', en: 'umbrella', id: 1079 },
		{ ch: '村庄', en: 'village', id: 1080 },
		{ ch: '旅游者，游客', en: 'visitor', id: 1081 },
		{ ch: '温暖', en: 'warm', id: 1082 },
		{ ch: '看，电视', en: 'watch', id: 1083 },
		{ ch: '原因，为什么', en: 'why', id: 1084 },
		{ ch: '你的', en: 'your', id: 1085 },
		{ ch: '年轻，青春，小伙子', en: 'youth', id: 1086 },
		{ ch: '面包', en: 'baker', id: 1087 },
		{ ch: '奇妙的，好奇的', en: 'curiously', id: 1088 },
		{ ch: '兴奋的，激动的', en: 'excited', id: 1089 },
		{ ch: '荷兰', en: 'Holland', id: 1090 },
		{ ch: '不锋利的', en: 'blunt', id: 1091 },
		{ ch: '不锋利的，坦言的', en: 'blunt', id: 1092 },
		{ ch: '书架', en: 'bookcase', id: 1093 },
		{ ch: '小手提包', en: 'handbag', id: 1094 },
		{ ch: '是', en: 'is', id: 1095 },
		{ ch: '谢谢你', en: 'thank you', id: 1096 },
		{ ch: '十分，非常', en: 'very much', id: 1097 },
		{ ch: '推销员', en: 'sales reps', id: 1098 },
		{ ch: '朝鲜，韩国', en: 'Korea', id: 1099 },
		{ ch: '腮腺炎', en: 'mumps', id: 1100 },
		{ ch: '公共汽车停靠站', en: 'bus stop', id: 1101 },
		{ ch: '昨晚，最后一夜', en: 'last night', id: 1102 },
		{ ch: '应声开门', en: 'answer the door', id: 1103 },
		{ ch: '在晚上', en: 'in the eveing', id: 1104 },
		{ ch: '我独立的', en: 'by myself', id: 1105 },
		{ ch: '我', en: 'I', id: 1106 },
		{ ch: '土耳其的', en: 'Turkish', id: 1107 },
		{ ch: '柏林', en: 'Berlin', id: 1108 },
		{ ch: '黑暗的', en: 'dark', id: 1109 },
		{ ch: '长的', en: 'long', id: 1110 },
		{ ch: '老的', en: 'old', id: 1111 },
		{ ch: '看一看', en: 'have a look', id: 1112 },
		{ ch: '非常讨厌的', en: 'terrible', id: 1113 },
		{ ch: '上床睡觉', en: 'go to bed', id: 1114 },
		{ ch: '在行走', en: 'on the march', id: 1115 },
		{ ch: '挪威', en: 'Norwegian', id: 1116 },
		{ ch: '终于', en: 'in the end', id: 1117 },
		{ ch: '很，相当', en: 'pretty', id: 1118 },
		{ ch: '十六分之一，第十六', en: 'sixteenty', id: 1119 },
		{ ch: '大于，超过', en: 'overtake', id: 1120 },
		{ ch: '波浪，波动', en: 'wave', id: 1121 },
		{ ch: '工程师，技师', en: 'engineer', id: 1122 },
		{ ch: '食品杂货店', en: 'grocer', id: 1123 },
		{ ch: '国籍', en: 'nationnality', id: 1124 },
		{ ch: '洗', en: 'wash', id: 1125 },
		{ ch: '烹饪', en: 'cook', id: 1126 },
		{ ch: '第十一', en: 'eleventh', id: 1127 },
		{ ch: '好几百', en: 'hundreds of', id: 1128 },
		{ ch: '亲子，我们自己', en: 'ourselves', id: 1129 },
		{ ch: '在...前面', en: 'in front of', id: 1130 },
		{ ch: '酒，瓶子', en: 'bottle', id: 1131 },
		{ ch: '或许，可能', en: 'perhaps', id: 1132 },
		{ ch: '也许，可能', en: 'thirteenth', id: 1133 },
		{ ch: '渴望，口渴', en: 'thirsty', id: 1134 },
		{ ch: '突然，忽然', en: 'suddenly', id: 1135 },
		{ ch: '晚，迟到', en: 'late', id: 1136 },
		{ ch: '切，割', en: 'cut', id: 1137 },
		{ ch: '小的，比较小的', en: 'little', id: 1138 },
		{ ch: '忙绿的', en: 'busy', id: 1139 },
		{ ch: '煮沸，烧开', en: 'boil', id: 1140 },
		{ ch: '教堂', en: 'church', id: 1141 },
		{ ch: '达到，出现', en: 'arrive', id: 1142 },
		{ ch: '告诉', en: 'tell', id: 1143 },
		{ ch: '你自己', en: 'yourself', id: 1144 },
		{ ch: '计算，数数', en: 'count', id: 1145 },
		{ ch: '懒惰的', en: 'lazy', id: 1146 },
		{ ch: '中断，破坏', en: 'break', id: 1147 },
		{ ch: '男孩，小子', en: 'boy', id: 1148 },
		{ ch: '蛋，卵细胞', en: 'egg', id: 1149 },
		{ ch: '电影院', en: 'cinema', id: 1150 },
		{ ch: '一点', en: 'a little', id: 1151 },
		{ ch: '在早晨', en: 'in the morning', id: 1152 },
		{ ch: '问题', en: 'question', id: 1153 },
		{ ch: '芬兰语', en: 'Finnish', id: 1154 },
		{ ch: '中年的', en: 'middle-aged', id: 1155 },
		{ ch: '红茶', en: 'black tea', id: 1156 },
		{ ch: '伦敦', en: 'London', id: 1157 },
		{ ch: '鼓舞，振作一点', en: 'cheer up', id: 1158 },
		{ ch: '聪明的，光鲜的', en: 'smart', id: 1159 },
		{ ch: '轻身的，安静的', en: 'quiet', id: 1160 },
		{ ch: '播放，演奏，游戏', en: 'play', id: 1161 },
		{ ch: '草，草地', en: 'grass', id: 1162 },
		{ ch: '荒废，生锈的', en: 'rusty', id: 1163 },
		{ ch: '害羞的，拮据的，经济困难的', en: 'embarrassed', id: 1164 },
		{ ch: '温和的，和善的', en: 'mild', id: 1165 },
		{ ch: '吵闹，轰动一时', en: 'make a noise', id: 1166 },
		{ ch: '香皂，肥皂', en: 'soap', id: 1167 },
		{ ch: '皮肤', en: 'skin', id: 1168 },
		{ ch: '七月', en: 'July', id: 1169 },
		{ ch: '着手工作', en: 'go to work', id: 1170 },
		{ ch: '试图，想要，努力', en: 'try', id: 1171 },
		{ ch: '移动，搬家，提议，使感动', en: 'move', id: 1172 },
		{ ch: '型，模范', en: 'model', id: 1173 },
		{ ch: '苏格兰', en: 'Scotland', id: 1174 },
		{ ch: '穿过，由于', en: 'through', id: 1175 },
		{ ch: '水', en: 'water', id: 1176 },
		{ ch: '奥地利', en: 'Austria', id: 1177 },
		{ ch: '绿色', en: 'green', id: 1178 },
		{ ch: '两者都不', en: 'neither', id: 1179 },
		{ ch: '溜，下降，滑落', en: 'slip', id: 1180 },
		{ ch: '木材，木头', en: 'wood', id: 1181 },
		{ ch: '莫斯科', en: 'Moscow', id: 1182 },
		{ ch: '蓝，筐', en: 'basket', id: 1183 },
		{ ch: '最坏的，最差的', en: 'worst', id: 1184 },
		{ ch: '儿子，子孙', en: 'son', id: 1185 },
		{ ch: '流感', en: 'flu', id: 1186 },
		{ ch: '须，络腮胡子', en: 'beard', id: 1187 },
		{ ch: '西方', en: 'west', id: 1188 },
		{ ch: '印度人', en: 'Indian', id: 1189 },
		{ ch: '足球，橄榄球', en: 'football', id: 1190 },
		{ ch: '方式，方法，途径，路', en: 'way', id: 1191 },
		{ ch: '供应，奉献，主动提出，自愿给出', en: 'offer', id: 1192 },
		{ ch: '中国，瓷器', en: 'china', id: 1193 },
		{ ch: '十九', en: 'nineteen', id: 1194 },
		{ ch: '巧克力', en: 'chocolate', id: 1195 },
		{ ch: '东京', en: 'Tokyo', id: 1196 },
		{ ch: '支持，在...后面', en: 'behind', id: 1197 },
		{ ch: '橱柜，密室', en: 'cupboard', id: 1198 },
		{ ch: '等待，期待', en: 'wait', id: 1199 },
		{ ch: '成熟的', en: 'ricp', id: 1200 },
		{ ch: '短语集', en: 'phrasebook', id: 1201 },
		{ ch: '油漆', en: 'paint', id: 1202 },
		{ ch: '可能', en: 'may', id: 1203 },
		{ ch: '盘子，车牌，板', en: 'plate', id: 1204 },
		{ ch: '飞行员', en: 'pilot', id: 1205 },
		{ ch: '记者，通讯员', en: 'reporter', id: 1206 },
		{ ch: '短语，词组，成语', en: 'phrase', id: 1207 },
		{ ch: '生病', en: 'fell ill', id: 1208 },
		{ ch: '二十几', en: 'twenty', id: 1209 },
		{ ch: '拿，需要，接受，吃', en: 'take', id: 1210 },
		{ ch: '母亲', en: 'mother', id: 1211 },
		{ ch: '中间，中心', en: 'middle', id: 1212 },
		{ ch: '进入，进去，加入，进来', en: 'enter', id: 1213 },
		{ ch: '忘记，遗忘', en: 'forget', id: 1214 },
		{ ch: '年，年度，年纪，年龄', en: 'year', id: 1215 },
		{ ch: '周二', en: 'Tuesday', id: 1216 },
		{ ch: '他的', en: 'his', id: 1217 },
		{ ch: '拐弯抹角', en: 'mince words', id: 1218 },
		{ ch: '上菜', en: 'dish up', id: 1219 },
		{ ch: '任命，委派，约会，预约', en: 'appointment', id: 1220 },
		{ ch: '装轮胎', en: 'tyre', id: 1221 },
		{ ch: '令人愉快的，宜人的', en: 'pleasant', id: 1222 },
		{ ch: '十月', en: 'October', id: 1223 },
		{ ch: '气候，风气', en: 'climate', id: 1224 },
		{ ch: '建议，意见', en: 'advice', id: 1225 },
		{ ch: '灯杆', en: 'lamp-post', id: 1226 },
		{ ch: '累的，疲劳的', en: 'tired', id: 1227 },
		{ ch: '吃一片阿司匹林', en: 'take an aspirin', id: 1228 },
		{ ch: '（我）是', en: 'am', id: 1229 },
		{ ch: '十四', en: 'fourteen', id: 1230 },
		{ ch: '根据，小于，不足，在..下面', en: 'under', id: 1231 },
		{ ch: '计算器，柜台，操作台，反对', en: 'counter', id: 1232 },
		{ ch: '违反，背道而驰', en: 'run counter to', id: 1233 },
		{ ch: '要，希望，想要', en: 'want', id: 1234 },
		{ ch: '国家，乡村', en: 'country', id: 1235 },
		{ ch: '票，券', en: 'ticket', id: 1236 },
		{ ch: '时间', en: 'time', id: 1237 },
		{ ch: '哪个', en: 'which', id: 1238 },
		{ ch: '竞赛，婚姻，满足，火柴，', en: 'match', id: 1239 },
		{ ch: '茶壶', en: 'teapot', id: 1240 },
		{ ch: '存款，押金，堆积物', en: 'deposit', id: 1241 },
		{ ch: '小偷，贼', en: 'thief', id: 1242 },
		{ ch: '相信，认定', en: 'believe', id: 1243 },
		{ ch: '我十分相信', en: 'I quite believe', id: 1244 },
		{ ch: '人种，种族，赛跑，竞争', en: 'race', id: 1245 },
		{ ch: '黄种人', en: 'yellow race', id: 1246 },
		{ ch: '苏格兰威士忌酒', en: 'Scotch whisky', id: 1247 },
		{ ch: '怜悯，同情，遗憾', en: 'pity', id: 1248 },
		{ ch: '受伤，感到疼痛，使不快', en: 'hurt', id: 1249 },
		{ ch: '发生于', en: 'happen to', id: 1250 },
		{ ch: '希腊', en: 'Greece', id: 1251 },
		{ ch: '打包，收拾行李', en: 'pack', id: 1252 },
		{ ch: '茶', en: 'tea', id: 1253 },
		{ ch: '享受，欣赏', en: 'enjoy', id: 1254 },
		{ ch: '希腊', en: 'Greece', id: 1255 },
		{ ch: '关掉', en: 'turn off', id: 1256 },
		{ ch: '严格的，精确地', en: 'exact', id: 1257 },
		{ ch: '第二十二', en: 'twenty-second', id: 1258 },
		{ ch: '几乎，差不多', en: 'nearly', id: 1259 },
		{ ch: '泡茶', en: 'make the tea', id: 1260 },
		{ ch: '男警察', en: 'policeman', id: 1261 },
		{ ch: '如，喜欢', en: 'like', id: 1262 },
		{ ch: '公司，陪伴', en: 'company', id: 1263 },
		{ ch: '大多数', en: 'most', id: 1264 },
		{ ch: '十七', en: 'seveteen', id: 1265 },
		{ ch: '扶手椅', en: 'armchair', id: 1266 },
		{ ch: '饼干', en: 'biscuit', id: 1267 },
		{ ch: '地方，位置', en: 'place', id: 1268 },
		{ ch: '土耳其，火鸡', en: 'turkey', id: 1269 },
		{ ch: '黄油', en: 'butter', id: 1270 },
		{ ch: '技工，机修工', en: 'mechanic', id: 1271 },
		{ ch: '柠檬饮料', en: 'lemonade', id: 1272 },
		{ ch: '在哪里', en: 'where', id: 1273 },
		{ ch: '第十七', en: 'seventeenth', id: 1274 },
		{ ch: '失去，丢失', en: 'lose', id: 1275 },
		{ ch: '地板，地面，楼层，底价', en: 'floor', id: 1276 },
		{ ch: '邮差员', en: 'postman', id: 1277 },
		{ ch: '晚上', en: 'night', id: 1278 },
		{ ch: '担心的', en: 'worried', id: 1279 },
		{ ch: '顶部', en: 'top', id: 1280 },
		{ ch: '春天', en: 'spring', id: 1281 },
		{ ch: '四月', en: 'April', id: 1282 },
		{ ch: '举起', en: 'lift', id: 1283 },
		{ ch: '能载我一程吗', en: 'can you give me a lift', id: 1284 },
		{ ch: '第一', en: 'first', id: 1285 },
		{ ch: '噪声', en: 'noise', id: 1286 },
		{ ch: '错误，失策', en: 'mistake', id: 1287 },
		{ ch: '书桌，办公桌', en: 'desk', id: 1288 },
		{ ch: '词典，字典', en: 'dictionary', id: 1289 },
		{ ch: '护士，保姆，培养', en: 'nurse', id: 1290 },
		{ ch: '水壶', en: 'kettle', id: 1291 },
		{ ch: '血管', en: 'vas', id: 1292 },
		{ ch: '花瓶', en: 'vase', id: 1293 },
		{ ch: '广阔的', en: 'vast', id: 1294 },
		{ ch: '豆，豆科植物', en: 'bean', id: 1295 },
		{ ch: '商店', en: 'shop', id: 1296 },
		{ ch: '丑陋的', en: 'ugly', id: 1297 },
		{ ch: '返回', en: 'back', id: 1298 },
		{ ch: '有时', en: 'sometimes', id: 1299 },
		{ ch: '任何人', en: 'anyone', id: 1300 },
		{ ch: '希望', en: 'hope', id: 1301 },
		{ ch: '打电话', en: 'call', id: 1302 },
		{ ch: '厨房', en: 'kitchen', id: 1303 },
		{ ch: '挪威', en: 'Norway', id: 1304 },
		{ ch: '第七，七分之一', en: 'seventh', id: 1305 },
		{ ch: '猫', en: 'cat', id: 1306 },
		{ ch: '攀岩，爬', en: 'climb', id: 1307 },
		{ ch: '最好', en: 'had better', id: 1308 },
		{ ch: '口袋', en: 'pocket', id: 1309 },
		{ ch: '百万富翁', en: 'millionaire', id: 1310 },
		{ ch: '不久', en: 'soon', id: 1311 },
		{ ch: '护照，凭证', en: 'passport', id: 1312 },
		{ ch: '日内瓦', en: 'Geneva', id: 1313 },
		{ ch: '碰巧，发现', en: 'run across', id: 1314 },
		{ ch: '碰巧，发现', en: 'Come across', id: 1315 },
		{ ch: '他碰巧见到张三', en: 'she happened to run across Zhang San', id: 1316 },
		{ ch: '莴苣', en: 'lettuce', id: 1317 },
		{ ch: '十二月', en: 'December', id: 1318 },
		{ ch: '纽约', en: 'New York', id: 1319 },
		{ ch: '夏天', en: 'summer', id: 1320 },
		{ ch: '瑞典', en: 'Sweden', id: 1321 },
		{ ch: '微小的', en: 'mini', id: 1322 },
		{ ch: '第六', en: 'sixth', id: 1323 },
		{ ch: '一起', en: 'together', id: 1324 },
		{ ch: '东西，事物', en: 'thing', id: 1325 },
		{ ch: '憎恨，讨厌', en: 'hate', id: 1326 },
		{ ch: '肮脏的', en: 'dirty', id: 1327 },
		{ ch: '军官，主任', en: 'officer', id: 1328 },
		{ ch: '哎呦', en: 'ow', id: 1329 },
		{ ch: '操作员', en: 'operator', id: 1330 },
		{ ch: '便士', en: 'pence', id: 1331 },
		{ ch: '豌豆', en: 'pea', id: 1332 },
		{ ch: '面包，钱', en: 'bread', id: 1333 },
		{ ch: '泰国', en: 'Thai', id: 1334 },
		{ ch: '店员', en: 'shop assistant', id: 1335 },
		{ ch: '经常的，有规律的', en: 'regularly', id: 1336 },
		{ ch: '肥胖的', en: 'fat', id: 1337 },
		{ ch: '聪明的，熟练的', en: 'clever', id: 1338 },
		{ ch: '笔记', en: 'note', id: 1339 },
		{ ch: '同一的', en: 'same', id: 1340 },
		{ ch: '压制', en: 'sit on', id: 1341 },
		{ ch: '在...期间', en: 'during', id: 1342 },
		{ ch: '沃尔沃', en: 'volvo', id: 1343 },
		{ ch: '泰国', en: 'Thailand', id: 1344 },
		{ ch: '最好的', en: 'best', id: 1345 },
		{ ch: '容易的', en: 'easy', id: 1346 },
		{ ch: '办公室', en: 'office', id: 1347 },
		{ ch: '任一的', en: 'any', id: 1348 },
		{ ch: '回信', en: 'answer the letter', id: 1349 },
		{ ch: '蓝色', en: 'blue', id: 1350 },
		{ ch: '列车', en: 'train', id: 1351 },
		{ ch: '六十', en: 'sixty', id: 1352 },
		{ ch: '桃子', en: 'peach', id: 1353 },
		{ ch: '粉笔', en: 'chalk', id: 1354 },
		{ ch: '套装，诉求', en: 'suit', id: 1355 },
		{ ch: '超速', en: 'speed limit', id: 1356 },
		{ ch: '火炬，手电筒', en: 'torch', id: 1357 },
		{ ch: '睡，入睡', en: 'sleep', id: 1358 },
		{ ch: '浓咖啡', en: 'black coffee', id: 1359 },
		{ ch: '再一次', en: 'again', id: 1360 },
		{ ch: '飞', en: 'fly', id: 1361 },
		{ ch: '妻子', en: 'wife', id: 1362 },
		{ ch: '进入', en: 'go into', id: 1363 },
		{ ch: '没有什么', en: 'nothing', id: 1364 },
		{ ch: '保持', en: 'keep', id: 1365 },
		{ ch: '在中午', en: 'at noon', id: 1366 },
		{ ch: '六月', en: 'June', id: 1367 },
		{ ch: '把..收起来，储存', en: 'put away', id: 1368 },
		{ ch: '穿，佩戴，损耗', en: 'wear', id: 1369 },
		{ ch: '身体探出', en: 'lean out of', id: 1370 },
		{ ch: '前天', en: 'the day before yesterday', id: 1371 },
		{ ch: '颜色', en: 'colour', id: 1372 },
		{ ch: '餐', en: 'meal', id: 1373 },
		{ ch: '一茶匙的量', en: 'teaspoonful', id: 1374 },
		{ ch: '医学', en: 'medicine', id: 1375 },
		{ ch: '花园', en: 'garden', id: 1376 },
		{ ch: '不包括，除了', en: 'except', id: 1377 },
		{ ch: '购物', en: 'shopping', id: 1378 },
		{ ch: '二十二', en: 'twenty-two', id: 1379 },
		{ ch: '水龙头，轻触', en: 'tap', id: 1340 },
		{ ch: '十九号的', en: 'nineteenth', id: 1341 },
		{ ch: '学生', en: 'student', id: 1342 },
		{ ch: '水龙头，轻触', en: 'tap', id: 1343 },
		{ ch: '不新鲜的，不礼貌', en: 'off', id: 1344 },
		{ ch: '谢谢', en: 'thanks', id: 1345 },
		{ ch: '急迫的', en: 'urgent', id: 1346 },
		{ ch: '锋利的', en: 'sharp', id: 1347 },
		{ ch: '瞬间', en: 'moment', id: 1348 },
		{ ch: '尼日利亚', en: 'Nigeria', id: 1349 },
		{ ch: '他们自己', en: 'themselves', id: 1350 },
		{ ch: '穿上，戴上', en: 'put on', id: 1351 },
		{ ch: '剩余，逗留', en: 'remain', id: 1352 },
		{ ch: '镇，市镇', en: 'town', id: 1353 },
		{ ch: '不新鲜的', en: 'stale', id: 1354 },
		{ ch: '顺楼梯而下', en: 'downstairs', id: 1355 },
		{ ch: '英里', en: 'mile', id: 1356 },
		{ ch: '女演员', en: 'actress', id: 1357 },
		{ ch: '小的', en: 'small', id: 1358 },
		{ ch: '坐下', en: 'sit down', id: 1359 },
		{ ch: '赢', en: 'win', id: 1360 },
		{ ch: '时尚', en: 'fashion', id: 1361 },
		{ ch: '请', en: 'please', id: 1362 },
		{ ch: '手', en: 'hand', id: 1363 },
		{ ch: '变化', en: 'change', id: 1364 },
		{ ch: '线', en: 'line', id: 1365 },
		{ ch: '做家务', en: 'homework', id: 1366 },
		{ ch: '有趣的，滑稽的', en: 'funny', id: 1367 },
		{ ch: '其余人', en: 'The rest', id: 1368 },
		{ ch: '手提箱', en: 'suitcase', id: 1369 },
		{ ch: '车站', en: 'station', id: 1370 },
		{ ch: '英格兰', en: 'England', id: 1371 },
		{ ch: '一月', en: 'January', id: 1372 },
		{ ch: '听见', en: 'hear', id: 1373 },
		{ ch: '电影', en: 'film', id: 1374 },
		{ ch: '骨头，鱼刺', en: 'bone', id: 1375 },
		{ ch: '整洁的', en: 'tidy', id: 1376 },
		{ ch: '贫穷的', en: 'poor', id: 1377 },
		{ ch: '电视', en: 'television', id: 1378 }
	]
}

export default goodsData