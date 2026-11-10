---
title: "Home"
layout: gridlay
sitemap: false
permalink: /
---

<main class="editorial-home" markdown="0">
  <section class="home-hero" aria-labelledby="home-title">
    <div class="home-hero__content">
      <h1 id="home-title">CIAO <span aria-hidden="true">&#128075;</span></h1>
      <p>We are the <strong>Professorship for Computational Interaction (CIAO)</strong>. We work at the intersection of machine learning, human-computer interaction and mobility. We develop computational models that simulate human interaction behavior. These models can be used to evaluate user interfaces, predict how users interact with them and allow designers and researcher to better understand not only the users but also their design. Our models are either data-driven (based on usage data collected in the real-world or in experimental studies) or based on computational rationality and reinforcement learning.</p>
      <a class="editorial-link" href="{{ '/research/' | relative_url }}">Explore our research <span aria-hidden="true">&rarr;</span></a>
    </div>

    <figure class="home-hero__group-photo">
      <img src="{{ '/images/home/ciao-discussion-1280.jpg' | relative_url }}" srcset="{{ '/images/home/ciao-discussion-640.jpg' | relative_url }} 640w, {{ '/images/home/ciao-discussion-1280.jpg' | relative_url }} 1280w" sizes="(max-width: 767px) 100vw, 44vw" width="1280" height="854" alt="Members of the CIAO group discussing their work outdoors" fetchpriority="high">
    </figure>
  </section>

  <section class="home-vision home-vision--stacked" aria-labelledby="home-vision-title">
    <div class="home-vision__content">
      <h2 id="home-vision-title">Our Vision</h2>
      <p>At <strong>CIAO</strong> our vision is to develop simulated users that accurately replicate human interactions with complex computing systems. These simulated users, which model cognition, perception, and motor control, can be used not only to evaluate interactive systems long before expensive experimental user testing, but also to build interactive systems that understand, predict, and adapt to human cognition and behavior. We aim to contribute to a better understanding of how humans interact with intelligent interfaces and transportation systems by developing new data-driven user models and evaluation methods <strong>(1)</strong> based on supervised machine learning and <strong>(2)</strong> based on the theory of computational rationality and reinforcement learning. Learn more about our research <a href="{{ '/research/' | relative_url }}">here</a>.</p>
    </div>
    <figure class="home-vision__diagram">
      <img src="{{ '/images/home/vision.svg' | relative_url }}" width="3332" height="1640" alt="CIAO vision: simulated users for efficient user-centered design and alignment with human goals" loading="lazy">
    </figure>
  </section>

  <section class="home-video" aria-labelledby="home-video-title">
    <header class="editorial-section-heading">
      <h2 id="home-video-title">In Conversation</h2>
    </header>
    <div class="home-video__frame">
      <iframe src="https://player.vimeo.com/video/912193151" title="Interview for the Digital Mobile Classroom project" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
    <p class="home-video__caption">Interview for a project called "Digital Mobile Classroom", which aims to promote computer science and AI for students in German schools.</p>
  </section>
</main>
