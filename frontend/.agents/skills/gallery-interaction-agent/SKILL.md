---
name: gallery-interaction-agent
description: Handles full-screen Photo Tour and Lightbox gallery interactions, animations, and keyboard navigation.
---

# Gallery Interaction Agent Skill

This skill standardizes photo gallery implementations:

1. Manage state (`isPhotoTourOpen`, `isLightboxOpen`, `activePhotoIndex`).
2. Provide seamless transitions between Listing Page -> Photo Tour -> Lightbox.
3. Lock background scroll (`document.body.style.overflow = 'hidden'`) when modals are active.
4. Support keyboard navigation: `ArrowLeft`, `ArrowRight`, `Escape`.
