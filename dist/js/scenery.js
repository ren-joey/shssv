$(function () {
    $('#MAP').on('click', function (e) {
            e.stopPropagation();
        }).on('mouseenter', '.map-position', mapPopup)
        .on('mouseleave', '.map-position', mapPopup);

    $('#ML').isotope({
        itemSelector: '.map-list-each',
        layoutMode: 'fitRows'
    });
});

function filter(selector){
    $('#ML').isotope({
        filter: selector
    });

    if(typeof selector != typeof undefined){
        $('.map-position' + selector).removeClass('hide');
        $('.map-position').not(selector).addClass('hide');
    }else{
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

        if(targetID === 'MP05') popupLeftClass = ' popup-left'

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
                    【 創意料理 / 龍魚養殖 / 商務宴客 】<br>★ 主打各式海鮮、鱘龍魚創意料理及養生餐飲<br>鱘龍三寶、鱘龍刺身、岩燒鱘龍件、珍菇玉茸龍首鍋、椒鹽龍骨等多道人氣料理<br>★ 漁獲皆來自魚之鄉園區內自行養殖的優質鱘龍魚<br>除了確保健康無毒素，魚苗品質及來源更受到嚴格的把關唷！<br>★ 魚之鄉手工嚴選的海中珍寶「珍饌魚子醬」<br>其獨特的鮮味，絕對是您送禮自用皆宜的伴手禮好選擇！
                </p>
                <hr>
                <p class="f-grey f-sm">
                    聯絡電話 (04)2594-3349<br>
                    上午9:00 - 下午5:00<br>
                    地址 台中市和平區東關路一段松鶴一巷20-1號
                </p>
            </div>
            <div class="col-12"><img src="./images/map_list_05.jpg" alt=""></div>
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