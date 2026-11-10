---
title: "Research"
layout: gridlay
sitemap: false
permalink: /research/
---

<main class="editorial-research" markdown="0">
  <header class="research-intro" style="text-align: left;">
    <h1 style="text-align: left;">Research</h1>
    <p style="text-align: left;">Advances in AI are reshaping the interaction between humans and intelligent machines. As these systems become more complex, it is increasingly important to design them in alignment with human goals and intentions. However, the growing complexity and fast-paced development renders the traditional user-centered design approach unsustainable. Experimental user testing and qualitative studies are often overlooked due to their slow, resource-intensive nature. To address this, our research uses data-driven analytics and machine learning-based user modeling and simulation to make user-centered design more efficient and to better understand how humans interact with intelligent computing technology.</p>
  </header>

  <div class="research-area-list">
    <section class="research-area research-area--image-first" id="computational-rationality" data-research-section>
      <div class="research-area__content">
        <h2>Computational Rational User Modeling</h2>
        <p>Computational rational theories propose that users act to maximize expected utility within their constraints. In human–computer interaction, this means users seek optimal outcomes given their internal (e.g., cognitive or perceptual) and external (e.g., environmental or design-related) bounds. Users adapt their behavioral strategies accordingly, which can be approximated with reinforcement learning to generate testable predictions of interaction behavior. Although machine learning is used to learn behavioral policies and make predictions, the formulated bounds limit the space of computable interaction strategies of the agent so that they represent human-like behavior.</p>
      </div>
      <figure class="research-figure research-figure--contain research-figure--cr-model">
        <a class="research-figure__open" href="{{ '/images/respic/CompRationalCar.png' | relative_url }}" data-lightbox-image data-lightbox-alt="Computational rational model in a driving environment">
          <picture class="research-figure__picture">
            <source media="(min-width: 768px)" srcset="{{ '/images/home/computational-rationality-graph.png' | relative_url }}">
            <img src="{{ '/images/home/computational-rationality-preview.png' | relative_url }}" alt="Computational rational model in a driving environment" loading="eager">
          </picture>
        </a>
      </figure>
    </section>

    <section class="research-area" id="biomechanical-simulation" data-research-section>
      <div class="research-area__content">
        <h2>Biomechanical Forward Simulation</h2>
        <p>Movement is the only way humans can influence the world. With the exception of brain–computer interfaces, all human communication is ultimately mediated through muscle contractions. Simulated users that replicate human-like, dexterous interactions with technology offer great potential to make user-centered design more efficient, rigorous, and predictable. By using forward simulation, these models produce biomechanically realistic motion, allowing accurate predictions of user performance and muscle effort based on musculoskeletal dynamics. Our work focuses on building biomechanical models that simulate human–computer interaction to inform and improve user interface design.</p>
      </div>
      <figure class="research-figure research-video research-video--biomech research-video--hover" data-hover-video-container tabindex="0">
        <a class="research-video__open" href="{{ '/images/research-media/biomechanical-replay.mp4' | relative_url }}" data-lightbox-video data-lightbox-video-label="Biomechanical replay of touchscreen interaction">
          <video autoplay muted loop playsinline preload="auto" data-viewport-video data-hover-video aria-label="Biomechanical replay of touchscreen interaction">
            <source src="{{ '/images/research-media/biomechanical-replay.mp4' | relative_url }}" type="video/mp4">
          </video>
        </a>
      </figure>
    </section>

    <section class="research-area research-area--image-first" id="driver-modeling" data-research-section>
      <div class="research-area__content">
        <h2>Data-Driven Driver Modeling</h2>
        <p>The goal of CIAOs research is to better understand how drivers allocate their resources while engaging in secondary tasks. A deep understanding of human multitasking and how distraction affects driving behavior and vice versa facilitates the design of safe automotive HMIs. We combine large-scale user interaction data with driving data and glance behavior data to model driver's distraction, behavioral adaption, and sensitivity to the driving context. While we apply statistical modeling to evaluate new design artifacts, we also apply various machine learning approaches to predict human interaction behavior to not only better understand the interaction itself but also to evaluate new interfaces already before the first user study is run.</p>
      </div>
      <figure class="research-figure research-video research-video--cover research-video--hover" data-hover-video-container tabindex="0">
        <a class="research-video__open" href="{{ '/images/research-media/iceboat.mp4' | relative_url }}" data-lightbox-video data-lightbox-video-label="ICEBOAT interface analytics demonstration" data-playback-rate="3">
          <video autoplay muted loop playsinline preload="auto" poster="{{ '/images/research-media/iceboat-poster.jpg' | relative_url }}" data-viewport-video data-hover-video data-playback-rate="3" aria-label="ICEBOAT interface analytics demonstration">
            <source src="{{ '/images/research-media/iceboat.mp4' | relative_url }}" type="video/mp4">
          </video>
        </a>
      </figure>
    </section>

    <section class="research-area" id="driving-simulator" data-research-section>
      <div class="research-area__content">
        <h2>Mixed-Reality Driving Simulator</h2>
        <p>To evaluate the computational models with human participants we to aim mimic the real driving environment as closely as possible. Our mixed-reality driving simulator allows us to create an immersive driving and interaction experience. We exploit the immersiveness of virtual reality to simulate the driving environment but keep the vehicle interior real such that secondary task engagements (e.g., interactions with the center stack touchscreen) feel as real as possible. The simulator's code is open source, and we welcome anyone who wants to use it or collaborate with us: <a href="https://github.com/ciao-group/coupled-sim-ciao">GitHub Repository</a></p>
      </div>
      <figure class="research-figure research-figure--photo">
        <a class="research-figure__open" href="{{ '/images/respic/simulator.JPG' | relative_url }}" data-lightbox-image data-lightbox-alt="CIAO mixed-reality driving simulator">
          <img src="{{ '/images/home/mixed-reality-simulator.jpg' | relative_url }}" alt="CIAO mixed-reality driving simulator" loading="lazy">
        </a>
      </figure>
    </section>
  </div>

  <dialog class="research-lightbox" data-research-lightbox aria-label="Expanded research figure">
    <button class="research-lightbox__close" type="button" data-lightbox-close aria-label="Close expanded figure">&times;</button>
    <img alt="" data-lightbox-target-image>
    <video muted loop playsinline preload="metadata" data-lightbox-target-video hidden></video>
  </dialog>
</main>

<script src="{{ '/js/editorial-pages.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
