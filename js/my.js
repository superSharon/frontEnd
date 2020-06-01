var map = new BaiduMap({
    id: "container3",
    level: 16, //  选填--地图级别--(默认15)
    zoom: true, // 选填--是否启用鼠标滚轮缩放功能--(默认false)
    type: ["地图", "卫星", "三维"], // 选填--显示地图类型--(默认不显示)
    width: 320, // 选填--信息窗口width--(默认自动调整)
    height: 70, // 选填--信息窗口height--(默认自动调整)
    titleClass: "title",
    contentClass: "content",
    showPanorama: true, // 是否显示全景控件(默认false)
    showMarkPanorama: true, // 是否显示标注点全景图(默认false)
    showLabel: false, // 是否显示文本标注(默认false)
    mapStyle: "normal", // 默认normal,可选dark,light
    icon: { // 选填--自定义icon图标
        url: "img/marker2.png",
        width: 34,
        height: 94
    },
    centerPoint: { // 中心点经纬度
        lng: 118.106586,
        lat: 24.467207
    },
    index: 3, // 开启对应的信息窗口，默认-1不开启
    animate: true, // 是否开启坠落动画，默认false
    points: points, // 标注点--id(唯一标识)
    callback: function(id) { // 点击标注点回调
        $(".list").find("li").eq(id - 1).addClass("active").siblings().removeClass("active");
    }
});