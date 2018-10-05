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

        switch (targetID) {
            case 'MP01':
                content = `<div class="px-3 map-list-title f-md f-grey shadow">
                    <div class="w-50px mr-2"><img src="./images/svg_02_travel_entertainment.svg" alt=""></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="text-nowrap text-dark f-sm">德芙蘭農場</div>
                        <ol class="f-grey f-xs">
                            <li>露營區</li>
                            <li>1.兒童遊戲沙坑</li>
                            <li>2.兒童戲水池</li>
                            <li>3.溜滑梯</li>
                            <li>4.森林步道</li>
                        </ol>
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
                    <div class="text-nowrap text-dark f-sm">德芙蘭農場</div>
                    <p class="f-grey f-xs">狩獵戰場模擬射擊傳統射箭、泰雅手工藝DIY、生態導覽、原住民風味餐、漁獵戰場、捕魚體驗、山林夜間探索<br>集合點：沐樂居民宿</p>
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
                <p class="f-grey f-xs">被譽為「谷關最優美的步道」，全程3公里的環狀步道，路段多為緩坡適合全家大小健走</p>
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
                <p class="f-grey f-xs">販售/寄賣在地山產及食品<br>紅藜饅頭、黑木耳露、五葉松汁、季節水果與蔬菜</p>
                <hr>
                <p class="f-grey f-sm">聯絡電話 (04)2594-3439</p>
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
                <div class="text-nowrap text-dark f-sm">魚之鄉鱘龍魚</div>
                <p class="f-grey f-xs">餐飲/養殖/休閒<br>以食材去搭配食材,讓食物的味道更有層次<br>鱘龍魚 + 新亞洲無國界料理<br>讓您一再回味的動人料理</p>
                <hr>
                <p class="f-grey f-sm">聯絡電話 (04)2594-3349</p>
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
    <div class="map-popup" id="MP">
        <div class="rounded border grey-border p-4 mb-5 d-relative bg-white shadow">
            ${content}
        </div>
    </div>`;

        $(this).css('z-index', '3').find('.d-relative').append(template);
    }
}