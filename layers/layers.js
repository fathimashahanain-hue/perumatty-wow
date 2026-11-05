var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_peru_fix_1 = new ol.format.GeoJSON();
var features_peru_fix_1 = format_peru_fix_1.readFeatures(json_peru_fix_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_peru_fix_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_peru_fix_1.addFeatures(features_peru_fix_1);
var lyr_peru_fix_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_peru_fix_1, 
                style: style_peru_fix_1,
                popuplayertitle: 'peru_fix',
                interactive: true,
    title: 'peru_fix<br />\
    <img src="styles/legend/peru_fix_1_0.png" /> ALAYAR<br />\
    <img src="styles/legend/peru_fix_1_1.png" /> ATHIMANI<br />\
    <img src="styles/legend/peru_fix_1_2.png" /> KALYANAPETTA<br />\
    <img src="styles/legend/peru_fix_1_3.png" /> KAMBALATHARA<br />\
    <img src="styles/legend/peru_fix_1_4.png" /> MADAPPALAM<br />\
    <img src="styles/legend/peru_fix_1_5.png" /> MARUTHAMPARA<br />\
    <img src="styles/legend/peru_fix_1_6.png" /> MEENAKSHIPURAM<br />\
    <img src="styles/legend/peru_fix_1_7.png" /> MOOLATHARA<br />\
    <img src="styles/legend/peru_fix_1_8.png" /> NAMBOORICHALLA<br />\
    <img src="styles/legend/peru_fix_1_9.png" /> NARANI<br />\
    <img src="styles/legend/peru_fix_1_10.png" /> NELLIMEDU<br />\
    <img src="styles/legend/peru_fix_1_11.png" /> PARAKKALAM<br />\
    <img src="styles/legend/peru_fix_1_12.png" /> PATTIKULAM<br />\
    <img src="styles/legend/peru_fix_1_13.png" /> PERUMATTY<br />\
    <img src="styles/legend/peru_fix_1_14.png" /> PLACHIMADA<br />\
    <img src="styles/legend/peru_fix_1_15.png" /> RAMAR PANNAI<br />\
    <img src="styles/legend/peru_fix_1_16.png" /> SRAMBI<br />\
    <img src="styles/legend/peru_fix_1_17.png" /> VANDITHAVALAM<br />\
    <img src="styles/legend/peru_fix_1_18.png" /> VEMBRA<br />\
    <img src="styles/legend/peru_fix_1_19.png" /> VILAYODI<br />\
    <img src="styles/legend/peru_fix_1_20.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_peru_fix_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_peru_fix_1];
lyr_peru_fix_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_peru_fix_1.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_peru_fix_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_peru_fix_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});