function moveToPostionAndChange(position, callbackChange) {
    const camera = scene.activeCamera;
    var animationcamera = new BABYLON.Animation(
      "moveToPostionAndChange",
      "position",
      30,
      BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    var keys = [];
    keys.push({
      frame: 0,
      value: camera.position.clone()
    });
    keys.push({
      frame: 30,
      value: position
    });
    animationcamera.setKeys(keys);
    camera.animations = [];
    camera.animations.push(animationcamera);
    const animation = scene.beginAnimation(camera, 0, 100, false, 1);
    animation.onAnimationEnd = () => {
      callbackChange();
    };
  }

  function meshIdChangeColor(meshId, color) {
    scene.getMeshByID(meshId).material.diffuseColor = color;
    scene.getMeshByID(meshId).material.albedoColor = color;
  }

  window.changeColorCover = color => {
    meshIdChangeColor("main_headset", color);
  };
  window.changeColorStraps = color => {
    meshIdChangeColor("straps", color);
  };

  window.colorsDefault = () => {
    changeColorCover(BABYLON.Color3.White());
    changeColorStraps(BABYLON.Color3.White());
  };

  window.coverGreen = () => {
    changeColorCover(BABYLON.Color3.Green());
  };

  window.coverRed = () => {
    changeColorCover(BABYLON.Color3.Red());
  };

  window.coverPurple = () => {
    changeColorCover(BABYLON.Color3.Purple());
  };

  window.resetView = () => {
    moveToPostionAndChange(new BABYLON.Vector3(-12, 1.32, 6), () => {});
  };

  window.triggerLogoGoogle = () => {
    moveToPostionAndChange(new BABYLON.Vector3(-6, 0.8, 1), function() {
      const isEnabled = scene.getMeshByID("google_logo")._isEnabled;
      scene.getMeshByID("google_logo").setEnabled(!isEnabled);
    });
  };