# ciao-group.github.io

# Website Content Management Guide

This guide is intended to assist team members in updating and managing content on our website. Please follow these instructions carefully.

## Updating Various Sections

- To update information about **news, team members, funders, grants**, and **conference talks**, navigate to the `_data` folder.
- Inside this folder, look for `.yml` files and edit them to update or correct information as needed.

## Adding New Publications

- For new publications, go to the `_data` folder and add details to `publish.yml`.
- Follow the existing template, which includes:
  - `title`: Title of the publication.
  - `url`: Name of the PDF file (omit `.pdf` extension).
  - `image`: Image file name (add image to `pubpic` folder).
  - `display`: Boolean value for display control.
  - `year`: Publication year.
  - `arxiv`: arXiv ID, if applicable.
  - `abstract`: Abstract of the publication for a foldable section.

## Editing Pages

- To edit existing pages, navigate to the `_pages` folder.
- to add images, link to image in the according page.md from the according image folder
- Modify the `.md` (Markdown) files to update page content.

## Adding Pages to Navigation Bar

- To add more pages to the navigation bar, update `_config.yml`.
- Under `nav_pages`, add a new entry in the `- name: ...` format.

## Managing Images

- Organize and add images to respective folders:
  - `pubpic`: Publication images.
  - `respic`: Research-related images.
  - `slider`: Homepage images.
  - `teampic`: Team member pictures.

## Adjusting Site Variables

- For changes to site-wide variables like fonts or sizes, edit `variables.scss`.
- This file controls stylistic elements across the website.
