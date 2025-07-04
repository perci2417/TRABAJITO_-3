ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([-1210741.758652, 7913994.812928, 2198471.735011, 10046506.957113]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Departamento_1 = new ol.format.GeoJSON();
var features_Departamento_1 = format_Departamento_1.readFeatures(json_Departamento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Departamento_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_1.addFeatures(features_Departamento_1);
var lyr_Departamento_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamento_1, 
                style: style_Departamento_1,
                popuplayertitle: 'Departamento',
                interactive: true,
                title: '<img src="styles/legend/Departamento_1.png" /> Departamento'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Departamento_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Departamento_1];
lyr_Departamento_1.set('fieldAliases', {'NOMBDEP': 'NOMBRE DEL DEPARTAMENTO', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTAREAS DEL DEPARTAMENTO', 'fotito_p': 'IMAGEN DEL DEPARTAMENTO', 'enlaces_p': 'ENLACE DEL DEPARTAMENTO', 'videitos_p': 'VIDEO REFERENCIA DEL DEPARTAMENTO', });
lyr_Departamento_1.set('fieldImages', {'NOMBDEP': 'TextEdit', 'COUNT': 'Hidden', 'FIRST_IDDP': 'Hidden', 'HECTARES': 'TextEdit', 'fotito_p': 'ExternalResource', 'enlaces_p': 'TextEdit', 'videitos_p': 'TextEdit', });
lyr_Departamento_1.set('fieldLabels', {'NOMBDEP': 'header label - always visible', 'HECTARES': 'no label', 'fotito_p': 'header label - always visible', 'enlaces_p': 'header label - always visible', 'videitos_p': 'header label - always visible', });
lyr_Departamento_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});