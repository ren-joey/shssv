$(function () {
    $(window).on('scroll', function (e) {
        if($(window).scrollTop() > 300){
            $('#back-to-top').fadeIn(500);
            $('#show-map').fadeIn(500);
        }else{
            $('#back-to-top').fadeOut(500);
            $('#show-map').fadeOut(500);
        }
    });

    $('#MAP').on('click', function (e) {
            e.stopPropagation();
        }).on('mouseenter', '.map-position', mapPopup)
        .on('mouseleave', '.map-position', mapPopup)
        .on('click', '.map-position', mapScrollTo);

    $('#ML').isotope({
        itemSelector: '.map-list-each',
        layoutMode: 'fitRows'
    });
});

function backToTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
}

function mapScrollTo(e) {
    let targetInformationIndex = (+$(this).attr('id').replace(/\D/g, '')) - 1;
    if (targetInformationIndex === -1) return;
    if (targetInformationIndex >= 13) targetInformationIndex = targetInformationIndex - 13;
    let informationList = $('#ML').children();

    console.log(targetInformationIndex);
    console.log(informationList);

    let targetInformation = informationList[targetInformationIndex];
    $('html, body').animate({
        scrollTop: (+$(targetInformation).css('top').replace(/[a-z]/g, '')) + ( $(window).height() * .6)
    }, 500);
}

function filter(selector) {
    console.log(selector);
    $('#ML').isotope({
        filter: selector
    });

    if (typeof selector != typeof undefined) {
        $('.map-position' + selector).removeClass('hide');
        $('.map-position').not(selector).addClass('hide');
    } else {
        $('.map-position').removeClass('hide');
    }
}

function mapPopup(e) {
    let mp = $('#MP');
    if (mp.length > 0) {
        $(this).css('z-index', '2');
        mp.remove();
    } else {
        let targetID = $(this).attr('id');
        let template = '';
        let content = '';
        let popupLeftClass = '';

        if (targetID === 'MP05' || targetID === 'MP25') popupLeftClass = ' popup-left'

        switch (targetID) {
            case 'MP00':
                content = `
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">松鶴山水本館</div>
                    </div>
                </div>
                `;
                break;
            case 'MP01':
                content = `
                <div class="px-3 map-list-title f-md f-grey shadow">
                    <div class="w-50px mr-2"><img src="./images/svg_02_travel_entertainment.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">德芙蘭農場</div>
                        <p class="f-grey f-sm">
                            四周都是群山環繞，極佳的景觀，讓你遠離都市的紛擾，享受大自然的芬多精，擁有乾溼分離的衛浴，即使在尖峰時間洗澡熱水穩定水壓很夠、小孩最愛的沙坑、溜滑梯、戲水池，使用的是乾淨的山泉水，綠草如茵的草皮，草皮排水性佳，以及很大活動空間，大人小孩可以恣意的奔跑遊玩
                        </p>
                        <hr>
                        <p class="f-grey f-sm">連絡電話 0955-497-898</p>
                    </div>
                    <div class="col-12"><img src="./images/map_list_01.jpg" alt=""></div>
                </div>`;
                break;
            case 'MP02':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                <div class="w-50px mr-2"><img src="./images/svg_02_travel_entertainment.svg" alt=""></div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="text-nowrap text-dark f-sm">泰好玩獵人體驗營</div>
                    <p class="f-grey f-sm">
                        泰好玩獵人體驗營，從吃到玩任君挑選，體驗活動有狩獵體驗、傳統射箭、山林夜間探索、原藝品DIY等多項豐富體驗活動。吃的部分有竹筒飯、搗小米、烤山豬肉、烤香腸等保證讓您胃口全開。如須了解更多資訊，歡迎各位大小朋友臉書搜尋泰好玩獵人體驗營！
                    </p>
                    <hr>
                    <p class="f-grey f-sm">聯絡電話 0918-770-439</p>
                </div>
                <div class="col-12"><img src="./images/map_list_02.jpg" alt=""></div>
            </div>`;
                break;
            case 'MP03':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
            <div class="w-50px mr-2"><img src="./images/svg_05_scene.svg" alt=""></div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-nowrap text-dark f-sm">德芙蘭生態步道</div>
                <p class="f-grey f-sm">
                    德芙蘭步道位於博愛村松鶴德芙蘭部落後山附近，步道大部分路段為台電保線道路，沿著東卯山東南面大崩壁裙裾修建，東臨大甲溪；沿途可見陡峭的大岩壁及散落的大、小落岩塊，步道上偶有大石堆疊，得手腳並用攀爬而上；而就地取材的石階，古意盎然。步道沿途可見大葉楠、櫸木及茄苳巨木，還有粗壯的爬藤植物，是步道最大的特色。
                </p>
                <ol class="f-grey f-sm">
                    <li>步道全長3公里</li>
                    <li>步行約2至3小時</li>
                </ol>
                <hr>
                <p class="f-grey f-sm">位置：台中市和平區</p>
            </div>
            <div class="col-12"><img src="./images/map_list_03.jpg" alt=""></div>
        </div>`;
                break;
            case 'MP04':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
            <div class="w-50px mr-2"><img src="./images/svg_03_present.svg" alt=""></div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-nowrap text-dark f-sm">阿嬌姨的店</div>
                <p class="f-grey f-sm">
                    阿嬌姨人很開郎、不買東西、他還是很熱心介紹部落的一切、非常好的媽媽，商店販售/寄賣在地山產及食品，紅藜饅頭、黑木耳露、五葉松汁、季節水果與蔬菜，及生活雜貨。
                </p>
                <hr>
                <p class="f-grey f-sm">
                    聯絡電話 (04)2594-3439
                    <br>
                    營業時間 上午6:00 - 下午9:00
                    <br>
                    地址 台中市和平區東關路一段松鶴二巷
                </p>
            </div>
            <div class="col-12"><img src="./images/map_list_04.jpg" alt=""></div>
        </div>`;
                break;
            case 'MP05':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
            <div class="w-50px mr-2"><img src="./images/svg_04_food.svg" alt=""></div>
        </div>
        <div class="row">
            <div class="col-12">
                <p class="f-grey f-sm">
                    <div class="text-nowrap text-dark f-sm">魚之鄉鱘龍魚</div>
                    <p class="f-grey f-sm">
                    【 創意料理 / 龍魚養殖 / 商務宴客 】<br>★ 主打各式海鮮、鱘龍魚創意料理及養生餐飲<br>鱘龍三寶、鱘龍刺身、岩燒鱘龍件、珍菇玉茸龍首鍋、椒鹽龍骨等多道人氣料理<br>★ 漁獲皆來自魚之鄉園區內自行養殖的優質鱘龍魚<br>除了確保健康無毒素，魚苗品質及來源更受到嚴格的把關唷！<br>★ 魚之鄉手工嚴選的海中珍寶「珍饌魚子醬」<br>其獨特的鮮味，絕對是您送禮自用皆宜的伴手禮好選擇！
                    </p>
                </p>
                <hr>
                <p class="f-grey f-sm">
                    聯絡電話 (04)2594-3349<br>
                    上午9:00 - 下午5:00<br>
                    地址 台中市和平區東關路一段松鶴一巷20-1號
                </p>
            </div>
            <div class="col-12">
            <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="img-4-3"><img src="./images/f-002.png" alt=""></div>
                </div>
                <div class="swiper-slide">
                    <div class="img-4-3"><img src="http://www.livefish.com.tw/images/981023-08.jpg" alt=""></div>
                </div>
                <div class="swiper-slide">
                    <div class="img-4-3"><img src="./images/f-001.png" alt=""></div>
                </div>
                <div class="swiper-slide">
                    <div class="img-4-3"><img src="./images/f-003.png" alt=""></div>
                </div>
            </div>
            </div>
            </div>
        </div>`;
                break;
            case 'MP06':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
            <div class="w-50px mr-2"><img src="./images/svg_02_travel_entertainment.svg" alt=""></div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-nowrap text-dark f-sm">達娜萊露營區</div>
                <p class="f-grey f-xs">達娜萊，泰雅話意指「驚訝」的意思。<br>露營區內寬敞舒適，備有兒童浴池，不定時舉辦民歌歡唱及互動活動等。</p>
                <hr>
                <p class="f-grey f-sm">聯絡電話 0979-334-213</p>
            </div>
            <div class="col-12"><img src="./images/map_list_06.jpg" alt=""></div>
        </div>`;
                break;
            case 'MP07':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
            <div class="w-50px mr-2"><img src="./images/svg_04_food.svg" alt=""></div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-nowrap text-dark f-sm">古拉斯風味餐</div>
                <p class="f-grey f-xs">格妮婩原汁原味溫暖手作紅藜饅頭、黑木耳露、小米酒、五葉松汁、純天然手工食品<br>現場DIY製作(限假日)</p>
                <hr>
                <p class="f-grey f-sm">聯絡電話 0958-007-335</p>
            </div>
            <div class="col-12"><img src="./images/map_list_07.jpg" alt=""></div>
        </div>`;
                break;
            case 'MP08':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
            <div class="w-50px mr-2"><img src="./images/svg_02_travel_entertainment.svg" alt=""></div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-nowrap text-dark f-sm">松滋露營區</div>
                <p class="f-grey f-xs">風景優美、場地遼闊<br>環境舒適整潔<br>適合全家大小一起同歡</p>
                <hr>
                <p class="f-grey f-sm">聯絡電話 0955-779-235</p>
            </div>
            <div class="col-12"><img src="./images/map_list_08.jpg" alt=""></div>
        </div>`;
                break;
            case 'MP09':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
            <div class="w-50px mr-2"><img src="./images/svg_05_scene.svg" alt=""></div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-nowrap text-dark f-sm">唐麻丹山步道</div>
                <p class="f-grey f-xs">唐麻丹山是「谷關七雄」之一，海拔1305公尺，步道連接「蝴蝶谷瀑布」，造福了喜愛登山與遊山玩水的遊客</p>
            </div>
            <div class="col-12"><img src="./images/map_list_09.jpg" alt=""></div>
        </div>`;
                break;
            case 'MP10':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
            <div class="w-50px mr-2"><img src="./images/svg_04_food.svg" alt=""></div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-nowrap text-dark f-sm">東昌養鱒場</div>
                <p class="f-grey f-xs">餐廳只有禮拜天及國定假日的中午才有提供虹鱒或鱘龍魚的料理</p>
                <hr>
                <p class="f-grey f-sm">聯絡電話 0937-238-893</p>
            </div>
            <div class="col-12"><img src="./images/map_list_10.jpg" alt=""></div>
        </div>`;
                break;
            case 'MP11':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
            <div class="w-50px mr-2"><img src="./images/svg_05_scene.svg" alt=""></div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-nowrap text-dark f-sm">久良栖林場巷</div>
                <p class="f-grey f-xs">「久良梄」是松鶴部落在日治時代的舊地名<br>巷內有日據時代榮民古厝及百年歷史古厝 - 檜木板屋等歷史建築</p>
            </div>
            <div class="col-12"><img src="./images/map_list_11.jpg" alt=""></div>
        </div>`;
                break;
            case 'MP12':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
            <div class="w-50px mr-2"><img src="./images/svg_04_food.svg" alt=""></div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-nowrap text-dark f-sm">谷關山景餐廳</div>
                <p class="f-grey f-xs">鱘龍魚新鮮味美、雞肉Q彈，恍如置身山雲間用餐</p>
                <p class="text-danger f-xs">★例假日與連續假日用餐需提前「一天以上」預約</p>
                <hr>
                <p class="f-grey f-sm">聯絡電話 (04)2594-3788</p>
            </div>
            <div class="col-12"><img src="./images/map_list_12.jpg" alt=""></div>
        </div>`;
                break;
            case 'MP13':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
            <div class="w-50px mr-2"><img src="./images/svg_03_present.svg" alt=""></div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-nowrap text-dark f-sm">神農谷段木香菇</div>
                <p class="f-grey f-xs">GAP全球優良農業<br>通過有機無毒認證<br>產品包含：<br>神農谷段木香菇(乾)<br>神農谷段木香菇(濕)</p>
                <p class="text-danger f-xs">★產季為10月至隔年2月</p>
                <hr>
                <p class="f-grey f-sm">聯絡電話 0913-311-580</p>
            </div>
            <div class="col-12"><img src="./images/map_list_13.jpg" alt=""></div>
        </div>`;
                break;
            case 'MP14':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                <div class="w-50px mr-2"><img src="./images/svg_04_food.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">英英餐廳</div>
                        <p class="f-grey f-sm">30年在地老店，有鱒魚、土雞、山產、溪產及各式快炒</p>
                        <hr>
                        <p class="f-grey f-sm">連絡電話 04-2595-1351</p>
                    </div>
                    <div class="col-12"><img src="./images/map_list_14.jpg" alt=""></div>
                </div>`;
                break;
            case 'MP15':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                <div class="w-50px mr-2"><img src="./images/svg_05_scene.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">橫貫公路牌樓</div>
                        <p class="f-grey f-sm">為東西橫貫公路谷關風景特區地標，牌樓所在處於台8線約34公里處。</p>
                        <hr>
                        <p class="f-grey f-sm">聯絡電話 06-2331-2678</p>
                    </div>
                    <div class="col-12"><img src="./images/map_list_15.jpg" alt=""></div>
                </div>`;
                break;
            case 'MP16':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                <div class="w-50px mr-2"><img src="./images/svg_03_present.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">谷關商店街</div>
                        <p class="f-grey f-sm">商店街全長約墾丁大街的 1/3， 少了喧嘩， 多了寧靜， 是為泡溫泉之前享受谷關美食的絕佳去處。</p>
                        <!-- <hr> -->
                        <!-- <p class="f-grey f-sm"> </p> -->
                    </div>
                    <div class="col-12"><img src="./images/map_list_16.jpg" alt=""></div>
                </div>`;
                break;
            case 'MP17':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                <div class="w-50px mr-2"><img src="./images/svg_04_food.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">谷關美食街</div>
                        <p class="f-grey f-sm">谷關美食街有許多的餐廳，有適合團體遊客吃的合菜(人少可吃三菜一湯)，大多都有鱘龍魚料理。另外也有越南小吃、牛肉麵、水餃、石板烤肉…等。</p>
                        <!-- <hr> -->
                        <!-- <p class="f-grey f-sm"></p> -->
                    </div>
                    <div class="col-12"><img src="./images/map_list_17.jpg" alt=""></div>
                </div>`;
                break;
            case 'MP18':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                <div class="w-50px mr-2"><img src="./images/svg_02_travel_entertainment.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">谷關溫泉廣場</div>
                        <p class="f-grey f-sm">泉質:碳酸氫鹽泉。酸鹼質:PH7.0~8.0</p>
                        <hr>
                        <p class="f-grey f-sm">『泡腳池』供應熱溫泉時間</p>
                        <p class="f-grey f-sm">(平日) 9:00-16:00</p>
                        <p class="f-grey f-sm">(假日) 9:00-18:00</p>
                    </div>
                    <div class="col-12"><img src="./images/map_list_18.jpg" alt=""></div>
                </div>`;
                break;
            case 'MP19':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                <div class="w-50px mr-2"><img src="./images/svg_05_scene.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">捎來吊橋</div>
                        <p class="f-grey f-sm">相傳臺中市和平區南勢里及自由里一帶，泰雅族的原住民的祖先，原住於捎來溪河谷旁，該部落的頭目名音為「捎來」，後續因陸續建了吊橋而命名為捎來吊橋！</p>
                        <!-- <hr> -->
                        <!-- <p class="f-grey f-sm"></p> -->
                    </div>
                    <div class="col-12"><img src="./images/map_list_19.jpg" alt=""></div>
                </div>`;
                break;
            case 'MP20':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                <div class="w-50px mr-2"><img src="./images/svg_05_scene.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">捎來步道</div>
                        <p class="f-grey f-sm">步道取自當地部落頭目之名(音「捎來」)，沿山勢開闢而成，部分路段陡峭，踩踏階梯而上，沿途林蔭繁茂，綠意盎然，登臨觀景亭，則谷關風貌盡收眼底；每當春天櫻花盛開、秋楓轉紅，景色更是美不勝收。</p>
                        <hr>
                        <p class="f-grey f-sm">步道全長1.5公里</p>
                        <p class="f-grey f-sm">步行約1小時30分鐘</p>
                    </div>
                    <div class="col-12"><img src="./images/map_list_20.jpg" alt=""></div>
                </div>`;
                break;
            case 'MP21':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                <div class="w-50px mr-2"><img src="./images/svg_02_travel_entertainment.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">谷關遊客中心(溫泉文化館)</div>
                        <p class="f-grey f-sm">溫泉文化館為全國第一座以溫泉為主題的展示館，設有互動遊戲區、原住民服飾體驗區、溫泉銘、溫泉沐浴軼史、臺灣常見溫泉種類、溫泉知識電子書、泡湯禮儀與須知、臺灣常見溫泉簡介、世界溫泉簡介、互動益智、影片放映等服務。</p>
                        <hr>
                        <p class="f-grey f-sm">電話 04-2595-1496</p>
                    </div>
                    <div class="col-12"><img src="./images/map_list_21.jpg" alt=""></div>
                </div>`;
                break;
            case 'MP22':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                <div class="w-50px mr-2"><img src="./images/svg_05_scene.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">桂花溫泉巷</div>
                        <p class="f-grey f-sm">短短數十公尺的小巷，旁邊飄著淡淡的桂花香，十分適合泡湯午後來此由走一回</p>
                        <hr>
                        <p class="f-grey f-sm">開放時間 24小時</p>
                    </div>
                    <div class="col-12"><img src="./images/map_list_22.jpg" alt=""></div>
                </div>`;
                break;
            case 'MP23':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                <div class="w-50px mr-2"><img src="./images/svg_05_scene.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">谷關吊橋</div>
                        <p class="f-grey f-sm">谷關風景區是台中山區知名的遊憩區，在九二一地震之前還是中橫公路最熱鬧的中繼點，如今雖然榮景不再，但專程來溫泉的泡湯客也不在少數，也有攀登谷關七雄和八仙山的登山客會順道前往，谷關吊橋便是當地最知名的景點，也是聯絡兩岸溫泉旅館的重要橋樑。</p>
                        <hr>
                        <p class="f-grey f-sm">開放時間 24小時</p>
                    </div>
                    <div class="col-12"><img src="./images/map_list_23.jpg" alt=""></div>
                </div>`;
                break;
            case 'MP24':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                <div class="w-50px mr-2"><img src="./images/svg_02_travel_entertainment.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">四季溫泉會館</div>
                        <p class="f-grey f-sm">四季溫泉會館巴里島式的建築外觀，全館呈現出十足的南洋休閒風情；</p>
                        <hr>
                        <p class="f-grey f-sm">電話 04-2595-1235</p>
                    </div>
                    <div class="col-12"><img src="./images/map_list_24.jpg" alt=""></div>
                </div>`;
                break;
            case 'MP25':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                <div class="w-50px mr-2"><img src="./images/svg_05_scene.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">古靈寺</div>
                        <p class="f-grey f-sm">古靈寺是谷關地區唯一的寺廟，也是當地居民的信仰重心。</p>
                        <hr>
                        <p class="f-grey f-sm">地址 424台中市和平區東關路一段溫泉巷8號</p>
                    </div>
                    <div class="col-12"><img src="./images/map_list_25.jpg" alt=""></div>
                </div>`;
                break;
            case 'MP26':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                <div class="w-50px mr-2"><img src="./images/svg_02_travel_entertainment.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">伊豆溫泉</div>
                        <p class="f-grey f-sm">單純、雅靜，整座伊豆溫泉依著山勢，蜿蜒成一個天然的湯泉園區，風停；雨靜；鳥語；流泉；同大地脈動，隨風石呼吸。</p>
                        <hr>
                        <p class="f-grey f-sm">電話 04-2595-0315</p>
                    </div>
                    <div class="col-12"><img src="./images/map_list_26.jpg" alt=""></div>
                </div>`;
                break;
            case 'MP27':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                <div class="w-50px mr-2"><img src="./images/svg_02_travel_entertainment.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">明治溫泉</div>
                        <p class="f-grey f-sm">位於台中縣谷關溫泉區內的明治溫泉飯店，是谷關溫泉巷內第一家飯店，以石板及灰色的琉璃屋瓦建造的日式建築，充滿日本風格的恬靜與優雅是明治溫泉飯店的特色，飯店溫泉取自谷關山麓泉水，為往來中橫公路旅客歇腳，泡湯的好地方！</p>
                        <hr>
                        <p class="f-grey f-sm">電話 04-2595-1111</p>
                    </div>
                    <div class="col-12"><img src="./images/map_list_27.jpg" alt=""></div>
                </div>`;
                break;
            case 'MP28':
                    content = `<div class="px-3 map-list-title f-md f-grey shadow">
                    <div class="w-50px mr-2"><img src="./images/svg_05_scene.svg" alt=""></div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="text-nowrap text-dark f-sm">明治溫泉小徑</div>
                        </div>
                        <div class="col-12"><img src="./images/map_list_28.jpg" alt=""></div>
                    </div>`;
                    break;
        }

        template = `
        <div class="map-popup${popupLeftClass}" id="MP">
            <div class="rounded border grey-border p-4 mb-5 d-relative bg-white shadow">
                ${content}
            </div>
        </div>
        `;

        $(this).css('z-index', '3').find('.d-relative').append(template);
    }
}