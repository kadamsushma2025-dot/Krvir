var wms_layers = [];

var format_building_0 = new ol.format.GeoJSON();
var features_building_0 = format_building_0.readFeatures(json_building_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_0.addFeatures(features_building_0);
var lyr_building_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_0, 
                style: style_building_0,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_0.png" /> building'
            });
var format_contour_1 = new ol.format.GeoJSON();
var features_contour_1 = format_contour_1.readFeatures(json_contour_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contour_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contour_1.addFeatures(features_contour_1);
var lyr_contour_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_contour_1, 
                style: style_contour_1,
                popuplayertitle: 'contour',
                interactive: true,
                title: '<img src="styles/legend/contour_1.png" /> contour'
            });
var format_landuse_2 = new ol.format.GeoJSON();
var features_landuse_2 = format_landuse_2.readFeatures(json_landuse_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_2.addFeatures(features_landuse_2);
var lyr_landuse_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuse_2, 
                style: style_landuse_2,
                popuplayertitle: 'landuse',
                interactive: true,
                title: '<img src="styles/legend/landuse_2.png" /> landuse'
            });
var format_Railway_3 = new ol.format.GeoJSON();
var features_Railway_3 = format_Railway_3.readFeatures(json_Railway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_3.addFeatures(features_Railway_3);
var lyr_Railway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_3, 
                style: style_Railway_3,
                popuplayertitle: 'Railway',
                interactive: true,
                title: '<img src="styles/legend/Railway_3.png" /> Railway'
            });
var format_roads_4 = new ol.format.GeoJSON();
var features_roads_4 = format_roads_4.readFeatures(json_roads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_4.addFeatures(features_roads_4);
var lyr_roads_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_4, 
                style: style_roads_4,
                popuplayertitle: 'roads',
                interactive: true,
                title: '<img src="styles/legend/roads_4.png" /> roads'
            });
var format_water_5 = new ol.format.GeoJSON();
var features_water_5 = format_water_5.readFeatures(json_water_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_5.addFeatures(features_water_5);
var lyr_water_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_5, 
                style: style_water_5,
                popuplayertitle: 'water',
                interactive: true,
                title: '<img src="styles/legend/water_5.png" /> water'
            });

lyr_building_0.setVisible(true);lyr_contour_1.setVisible(true);lyr_landuse_2.setVisible(true);lyr_Railway_3.setVisible(true);lyr_roads_4.setVisible(true);lyr_water_5.setVisible(true);
var layersList = [lyr_building_0,lyr_contour_1,lyr_landuse_2,lyr_Railway_3,lyr_roads_4,lyr_water_5];
lyr_building_0.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_contour_1.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_landuse_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Railway_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_roads_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_water_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_building_0.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', });
lyr_contour_1.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_landuse_2.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_Railway_3.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_roads_4.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_water_5.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_building_0.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_contour_1.set('fieldLabels', {'ID': 'no label', 'ELEV': 'no label', });
lyr_landuse_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_Railway_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_roads_4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_water_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_water_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});