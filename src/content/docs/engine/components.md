---
title: "Components"
slug: "engine/components"
lastModified: "2024-12-24"
tags: ["introduction"]
group: "engine"
---

# Components

Here are the components that make up Tangent:

## Scripts

Scripts form the game logic layer and must follow these conventions:

- Scripts must be valid Lua code
- Can only access host functionality through defined bindings

## Host engine (bindings)

The host engine provides the runtime environment and platform-specific implementations:

- Manages the Lua VM instance
- Provides bindings for platform capabilities
- Handles resource management
- Handles & controls script lifecycle
- Implements security policies
