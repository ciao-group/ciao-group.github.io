(function () {
  "use strict";

  function playVideo(video) {
    var result = video.play();
    if (result && typeof result.catch === "function") result.catch(function () {});
  }

  var viewportVideos = Array.prototype.slice.call(document.querySelectorAll("[data-viewport-video]"));
  viewportVideos.forEach(function (video) {
    video.muted = true;

    var playbackRate = parseFloat(video.getAttribute("data-playback-rate"));
    if (isFinite(playbackRate) && playbackRate > 0) {
      video.defaultPlaybackRate = playbackRate;
      video.playbackRate = playbackRate;
      video.addEventListener("loadedmetadata", function () {
        video.defaultPlaybackRate = playbackRate;
        video.playbackRate = playbackRate;
      });
    }

    playVideo(video);
  });

  document.querySelectorAll("[data-hover-video]").forEach(function (video) {
    var container = video.closest("[data-hover-video-container]");
    if (!container) return;

    video.muted = true;

    function startVideo() {
      video.muted = true;
      playVideo(video);
    }

    container.addEventListener("mouseenter", startVideo);
    container.addEventListener("pointerenter", startVideo);
    container.addEventListener("focusin", startVideo);

    video.addEventListener("canplay", function () {
      if (container.matches(":hover") || container.contains(document.activeElement)) startVideo();
    });
  });

  if (viewportVideos.length && "IntersectionObserver" in window) {
    var videoObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) playVideo(entry.target);
        else entry.target.pause();
      });
    }, { threshold: 0.2 });

    viewportVideos.forEach(function (video) {
      videoObserver.observe(video);
    });
  }

  var dialog = document.querySelector("[data-research-lightbox]");
  var dialogImage = dialog && dialog.querySelector("[data-lightbox-target-image]");
  var dialogVideo = dialog && dialog.querySelector("[data-lightbox-target-video]");
  var closeButton = dialog && dialog.querySelector("[data-lightbox-close]");

  if (dialog && dialogImage && dialogVideo && typeof dialog.showModal === "function") {
    document.querySelectorAll("[data-lightbox-image]").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        dialogVideo.pause();
        dialogVideo.hidden = true;
        dialogVideo.removeAttribute("src");
        dialogImage.hidden = false;
        dialogImage.src = link.getAttribute("href");
        dialogImage.alt = link.getAttribute("data-lightbox-alt") || "Expanded research figure";
        dialog.showModal();
      });
    });

    document.querySelectorAll("[data-lightbox-video]").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        dialogImage.hidden = true;
        dialogImage.removeAttribute("src");
        dialogVideo.hidden = false;
        dialogVideo.src = link.href;
        dialogVideo.setAttribute("aria-label", link.getAttribute("data-lightbox-video-label") || "Expanded research video");
        dialogVideo.muted = true;

        var playbackRate = parseFloat(link.getAttribute("data-playback-rate")) || 1;
        dialogVideo.defaultPlaybackRate = playbackRate;
        dialogVideo.playbackRate = playbackRate;
        dialog.showModal();
        playVideo(dialogVideo);
      });
    });

    closeButton.addEventListener("click", function () {
      dialog.close();
    });

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("close", function () {
      dialogImage.removeAttribute("src");
      dialogVideo.pause();
      dialogVideo.removeAttribute("src");
      dialogVideo.load();
    });
  }
})();
