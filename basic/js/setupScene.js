window.addEventListener("DOMContentLoaded", function() {
  // Create Babylon Canvas
  var canvas = document.getElementById("renderCanvas");
  var engine = new BABYLON.Engine(canvas, true);

  var createScene = function() {
    // create a basic BJS Scene object
    var scene = new BABYLON.Scene(engine);

    //setup camera
    scene.createDefaultCameraOrLight(true);
    const camera = scene.activeCamera;
    camera.attachControl(canvas, false);
    camera.alpha += Math.PI;
    camera.setPosition(new BABYLON.Vector3(-12, 1.32, 6));
    camera.lowerBetaLimit = 0.1;
    camera.upperBetaLimit = (Math.PI / 2) * 0.9;
    camera.panningDistanceLimit = 1;
    camera.useAutoRotationBehavior = true;

    //setup background scene
    scene.clearColor = BABYLON.Color3.White();
    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
    scene.fogDensity = 0.01;

    //scene.debugLayer.show();

    //setup highlighter
    window.hl = new BABYLON.HighlightLayer("hl1", scene);

    BABYLON.SceneLoader.LoadAssetContainer(
      "./model/",
      "daydream.glb",
      scene,
      function(container) {
        container.addAllToScene();
      }
    );

    return scene;
  };

  // call the createScene function
  window.scene = createScene();

  engine.runRenderLoop(function() {
    scene.render();
  });
  window.addEventListener("resize", function() {
    engine.resize();
  });
});
