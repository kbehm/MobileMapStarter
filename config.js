/*
 * config.js contains basic configuration variables:
 * Starting lat, lng, zoom
 * Max/Min zoom levels
 * Basemap configurations
 */

var DEFAULT_LAT = 44.02;
var DEFAULT_LNG = -73.17;
var DEFAULT_ZOOM = 15;

var MIN_ZOOM = 10;
var MAX_ZOOM = 18;

var BING_API_KEY = "AnH69gg_XFoWEzjuqhZCcM3Zpa8Fo-iehnaWUMWZBGVa_AXJk3sjumaVAMMox7YO";

var BASEMAPS = {};
BASEMAPS['terrain']    = new L.TileLayer("http://{s}.tiles.mapbox.com/v3/greeninfo.map-fdff5ykx/{z}/{x}/{y}.jpg", { subdomains:['a','b','c','d'] });
BASEMAPS['plain']      = new L.TileLayer("http://{s}.tiles.mapbox.com/v3/greeninfo.map-8ljrd2bt/{z}/{x}/{y}.jpg", { subdomains:['a','b','c','d'] });
BASEMAPS['bingaerial'] = new L.BingLayer(BING_API_KEY, { type:'AerialWithLabels' });
