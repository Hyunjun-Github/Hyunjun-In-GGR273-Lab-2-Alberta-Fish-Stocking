var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AlbertaBoundary_1 = new ol.format.GeoJSON();
var features_AlbertaBoundary_1 = format_AlbertaBoundary_1.readFeatures(json_AlbertaBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbertaBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaBoundary_1.addFeatures(features_AlbertaBoundary_1);
var lyr_AlbertaBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaBoundary_1, 
                style: style_AlbertaBoundary_1,
                popuplayertitle: "AlbertaBoundary",
                interactive: false,
                title: '<img src="styles/legend/AlbertaBoundary_1.png" /> AlbertaBoundary'
            });
var format_AlbertaWaterBodies_2 = new ol.format.GeoJSON();
var features_AlbertaWaterBodies_2 = format_AlbertaWaterBodies_2.readFeatures(json_AlbertaWaterBodies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbertaWaterBodies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaWaterBodies_2.addFeatures(features_AlbertaWaterBodies_2);
var lyr_AlbertaWaterBodies_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaWaterBodies_2, 
                style: style_AlbertaWaterBodies_2,
                popuplayertitle: "Alberta Water Bodies",
                interactive: false,
                title: '<img src="styles/legend/AlbertaWaterBodies_2.png" /> Alberta Water Bodies'
            });
var format_FishStockingPoints_reprojected_3 = new ol.format.GeoJSON();
var features_FishStockingPoints_reprojected_3 = format_FishStockingPoints_reprojected_3.readFeatures(json_FishStockingPoints_reprojected_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FishStockingPoints_reprojected_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStockingPoints_reprojected_3.addFeatures(features_FishStockingPoints_reprojected_3);
var lyr_FishStockingPoints_reprojected_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStockingPoints_reprojected_3, 
                style: style_FishStockingPoints_reprojected_3,
                popuplayertitle: "Fish Stocking Points_reprojected",
                interactive: true,
    title: 'Fish Stocking Points_reprojected<br />\
    <img src="styles/legend/FishStockingPoints_reprojected_3_0.png" /> 15 - 5600<br />\
    <img src="styles/legend/FishStockingPoints_reprojected_3_1.png" /> 5600 - 20000<br />\
    <img src="styles/legend/FishStockingPoints_reprojected_3_2.png" /> 20000 - 40000<br />\
    <img src="styles/legend/FishStockingPoints_reprojected_3_3.png" /> 40000 - 110000<br />\
    <img src="styles/legend/FishStockingPoints_reprojected_3_4.png" /> 110000 - 1613075<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_AlbertaBoundary_1.setVisible(true);lyr_AlbertaWaterBodies_2.setVisible(true);lyr_FishStockingPoints_reprojected_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AlbertaBoundary_1,lyr_AlbertaWaterBodies_2,lyr_FishStockingPoints_reprojected_3];
lyr_AlbertaBoundary_1.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_AlbertaWaterBodies_2.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', 'PRUID_2': 'PRUID_2', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_FishStockingPoints_reprojected_3.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Map Author': 'Map Author', 'StockingN2': 'StockingN2', });
lyr_AlbertaBoundary_1.set('fieldImages', {'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_AlbertaWaterBodies_2.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', 'PRUID_2': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_FishStockingPoints_reprojected_3.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Map Author': 'TextEdit', 'StockingN2': 'Range', });
lyr_AlbertaBoundary_1.set('fieldLabels', {'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_AlbertaWaterBodies_2.set('fieldLabels', {'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', 'PRUID_2': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_FishStockingPoints_reprojected_3.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'inline label - visible with data', 'Map Author': 'header label - visible with data', 'StockingN2': 'inline label - visible with data', });
lyr_FishStockingPoints_reprojected_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});