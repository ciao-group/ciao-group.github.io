---
title: "Team"
layout: gridlay
sitemap: false
permalink: /team/
---


<!--- Jump to [staff](#staff), [master and bachelor students](#master-and-bachelor-students), [alumni](#alumni), [administrative support](#administrative-support), [lab visitors](#lab-visitors). -->

<!--- **You want to work with us? See our [open positions]({{ site.url }}{{ site.baseurl }}/vacancies).**-->



<!--- ## Team Lead

{% for member in site.data.team_members %}
  {% if member.position == "lead" %}
  
  <div class="row">
    <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="18%" style="float: left" />
    <h4>{{ member.name }}</h4>
    <i>{{ member.info }}</i><br>
    <p style="white-space: nowrap; display: flex; align-items: center; justify-content: flex-start; gap: 3px ">
    {% if member.website %}<a href="{{ member.website }}" target="_blank"><i class="fa fa-home fa-2x"></i></a> {% endif %}
    {% if member.email %}<a href="mailto:{{ member.email }}" target="_blank"><i class="fa fa-envelope-square fa-2x"></i></a> {% endif %}
    {% if member.scholar %}<a href="{{ member.scholar }}" target="_blank"><i class="ai ai-google-scholar-square ai-2x"></i></a> {% endif %}
    {% if member.cv %}<a href="{{ member.cv }}" target="_blank"><i class="ai ai-cv-square ai-2x"></i></a> {% endif %}
    {% if member.github %}<a href="{{ member.github }}" target="_blank"><i class="fa fa-github-square fa-2x"></i></a> {% endif %}
    {% if member.researchgate %}<a href="{{ member.researchgate }}" target="_blank"><i class="ai ai-researchgate-square ai-2x"></i></a> {% endif %}
    </p>

   <i> Research Interests: </i>
  <ul style="overflow: hidden">
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  </ul>
</div>
{% endif %}
{% endfor %}
-->

## The Team

<div class="photo-pair" markdown="0">
<figure class="feature-photo home-team-photo">
  <img src="{{ '/images/home/ciao-team-1600.jpg' | relative_url }}" srcset="{{ '/images/home/ciao-team-800.jpg' | relative_url }} 800w, {{ '/images/home/ciao-team-1600.jpg' | relative_url }} 1600w" sizes="(max-width: 767px) calc(100vw - 62px), (max-width: 1000px) calc((100vw - 82px) / 2), 459px" width="1600" height="1067" alt="The CIAO team outdoors on the HPI campus" fetchpriority="high" decoding="async">
</figure>
<figure class="feature-photo home-discussion-photo">
  <img src="{{ '/images/home/ciao-campus-discussion-1600.jpg' | relative_url }}" srcset="{{ '/images/home/ciao-campus-discussion-800.jpg' | relative_url }} 800w, {{ '/images/home/ciao-campus-discussion-1600.jpg' | relative_url }} 1600w" sizes="(max-width: 767px) calc(100vw - 62px), (max-width: 1000px) calc((100vw - 82px) / 2), 459px" width="1600" height="1067" alt="CIAO team members meeting outdoors on the HPI campus" decoding="async">
</figure>
</div>

<div class="team-grid" markdown="0">
{% for member in site.data.team_members %}
{% if member.position != "lead" %}
<article class="team-member-card">
  <img class="team-member-card__photo" src="{{ '/images/teampic/' | append: member.photo | relative_url }}" alt="{{ member.name | escape }}" width="240" height="240" loading="lazy" decoding="async">
  <div class="team-member-card__content">
    <h4>{{ member.name }}</h4>
    <p class="team-member-card__role"><i>{{ member.info }}</i></p>
    <div class="team-member-card__links" aria-label="Links for {{ member.name | escape }}">
      {% if member.website %}<a href="{{ member.website }}" target="_blank" rel="noopener" aria-label="{{ member.name | escape }} website"><i class="fa fa-home fa-2x" aria-hidden="true"></i></a>{% endif %}
      {% if member.email %}<a href="mailto:{{ member.email }}" aria-label="Email {{ member.name | escape }}"><i class="fa fa-envelope-square fa-2x" aria-hidden="true"></i></a>{% endif %}
      {% if member.scholar %}<a href="{{ member.scholar }}" target="_blank" rel="noopener" aria-label="{{ member.name | escape }} on Google Scholar"><i class="ai ai-google-scholar-square ai-2x" aria-hidden="true"></i></a>{% endif %}
      {% if member.cv %}<a href="{{ member.cv }}" target="_blank" rel="noopener" aria-label="{{ member.name | escape }} curriculum vitae"><i class="ai ai-cv-square ai-2x" aria-hidden="true"></i></a>{% endif %}
      {% if member.github %}<a href="{{ member.github }}" target="_blank" rel="noopener" aria-label="{{ member.name | escape }} on GitHub"><i class="fa fa-github-square fa-2x" aria-hidden="true"></i></a>{% endif %}
      {% if member.researchgate %}<a href="{{ member.researchgate }}" target="_blank" rel="noopener" aria-label="{{ member.name | escape }} on ResearchGate"><i class="ai ai-researchgate-square ai-2x" aria-hidden="true"></i></a>{% endif %}
    </div>
    <p class="team-member-card__label"><i>Research Interests:</i></p>
    <ul class="team-member-card__interests">
      {% for interest_number in (1..member.number_educ) %}
      {% assign interest_key = 'education' | append: interest_number %}
      <li>{{ member[interest_key] }}</li>
      {% endfor %}
    </ul>
  </div>
</article>
{% endif %}
{% endfor %}
</div>


## Guest Researchers

<div class="team-grid guest-researchers-grid" markdown="0">
{% for member in site.data.guest_researchers %}
<article class="team-member-card">
  <img class="team-member-card__photo" src="{{ '/images/teampic/' | append: member.photo | relative_url }}" alt="{{ member.name | escape }}" width="240" height="240" loading="lazy" decoding="async"{% if member.photo_position %} style="object-position: {{ member.photo_position }};"{% endif %}>
  <div class="team-member-card__content">
    <h4>{{ member.name }}</h4>
    <p class="team-member-card__role"><i>{{ member.info }}</i></p>
    <div class="team-member-card__links" aria-label="Links for {{ member.name | escape }}">
      {% if member.website %}<a href="{{ member.website }}" target="_blank" rel="noopener" aria-label="{{ member.name | escape }} website"><i class="fa fa-home fa-2x" aria-hidden="true"></i></a>{% endif %}
      {% if member.email %}<a href="mailto:{{ member.email }}" aria-label="Email {{ member.name | escape }}"><i class="fa fa-envelope-square fa-2x" aria-hidden="true"></i></a>{% endif %}
      {% if member.scholar %}<a href="{{ member.scholar }}" target="_blank" rel="noopener" aria-label="{{ member.name | escape }} on Google Scholar"><i class="ai ai-google-scholar-square ai-2x" aria-hidden="true"></i></a>{% endif %}
      {% if member.cv %}<a href="{{ member.cv }}" target="_blank" rel="noopener" aria-label="{{ member.name | escape }} curriculum vitae"><i class="ai ai-cv-square ai-2x" aria-hidden="true"></i></a>{% endif %}
      {% if member.github %}<a href="{{ member.github }}" target="_blank" rel="noopener" aria-label="{{ member.name | escape }} on GitHub"><i class="fa fa-github-square fa-2x" aria-hidden="true"></i></a>{% endif %}
      {% if member.researchgate %}<a href="{{ member.researchgate }}" target="_blank" rel="noopener" aria-label="{{ member.name | escape }} on ResearchGate"><i class="ai ai-researchgate-square ai-2x" aria-hidden="true"></i></a>{% endif %}
    </div>
    <p class="team-member-card__label"><i>Research Interests:</i></p>
    <ul class="team-member-card__interests">
      {% for interest_number in (1..member.number_educ) %}
      {% assign interest_key = 'education' | append: interest_number %}
      <li>{{ member[interest_key] }}</li>
      {% endfor %}
    </ul>
  </div>
</article>
{% endfor %}
</div>


## Alumni

<ul class="alumni-grid" markdown="0">
{% for member in site.data.alumni_members %}
{% if member.position != "lead" %}
  <li class="alumni-member">
    <img src="{{ '/images/teampic/' | append: member.photo | relative_url }}" alt="{{ member.name | escape }}" width="56" height="56" loading="lazy" decoding="async">
    <h4>{{ member.name }}</h4>
  </li>
{% endif %}
{% endfor %}
</ul>

[//]: # ({% if site.data.alumni_visitors %})

[//]: # (## Former M.S./B.S Students, Visitors)

[//]: # ()
[//]: # (<div class="row">)

[//]: # ()
[//]: # (<div class="col-sm-6 clearfix">)

[//]: # ()
[//]: # ({% for member in site.data.alumni_visitors %})

[//]: # ()
[//]: # ({{ member.name }})

[//]: # ()
[//]: # ({% endfor %})

[//]: # ()
[//]: # (</div>)

[//]: # ()
[//]: # (</div>)

[//]: # ()
[//]: # ({% endif %})

[//]: # ()
[//]: # (## Alumni)

[//]: # (- Juliette-Michelle Burkhardt &#40;Student Assistant, 2024&#41;)

## Bachelor and Master Students

- Jonas Tag: _User Centered Development of a Scientific Data Visualization Library in Python_ (Bachelor Thesis, 2026)
- Celine Conzen: _Effects of Optional Natural-Language Explanations on Trust Calibration in Automated Vehicles_ (Master Thesis, 2026)
- Anton Gasse: _Modeling Visual Sampling Processes via Computational Rationality_ (Bachelor Thesis)
- Hannah Bussmann: _Simulating Human-Like Touch Interactions Through RL-based Biomechanical Modeling_ (Master Thesis, 2025)
- Simon Lämmer: _GTA: Generative Traffic Agents for Simulating Realistic Traffic Behavior_ (Master Thesis, 2025)
- Niko Konzack: _A Computationally Rational Model of Human Visual Sampling for Atari Games_ (Master Thesis, 2025)
- Georg Schneeberger:  _End-to-End Reinforcement Learning Training of a Convolutional Neural Network for Autonmous
  Driving_ (Master Thesis, 2024)
- Moritz Wörmann: _Generating Aesthetic UI Alternatives under Constraints_ (Bachelor Thesis, 2024)
