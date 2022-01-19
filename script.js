require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
        const map = new Map({
          basemap: "streets-night-vector"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 6,
          center: [-90, 38] // longitude, latitude
        });
      });
