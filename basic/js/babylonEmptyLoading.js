BABYLON.DefaultLoadingScreen.prototype.displayLoadingUI = function() {
  if (document.getElementById("customLoadingScreenDiv")) {
    document.getElementById("customLoadingScreenDiv").style.display = "initial";
    return;
  }
  this._loadingDiv = document.createElement("div");
  this._loadingDiv.id = "customLoadingScreenDiv";
  var customLoadingScreenCss = document.createElement("style");
  customLoadingScreenCss.type = "text/css";
  customLoadingScreenCss.innerHTML = `
        #customLoadingScreenDiv{
            background-color: #fffff;
        }
        `;
  document.getElementsByTagName("head")[0].appendChild(customLoadingScreenCss);
  this._resizeLoadingUI();
  window.addEventListener("resize", this._resizeLoadingUI);
  document.body.appendChild(this._loadingDiv);
};

BABYLON.DefaultLoadingScreen.prototype.hideLoadingUI = function() {
  document.getElementById("customLoadingScreenDiv").style.display = "none";
};
