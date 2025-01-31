---
title: "API"
slug: "engine/api"
lastModified: "2024-12-24"
tags: ["api", "engine"]
group: "engine"
---

# Engine API

These are the standard API bindings that every user can use aand host needs to implement:

## Core

| Method | Description | Parameters | Returns |
| ------ | ----------- | ---------- | ------- |
| engine.version() | Get the version of the current host engine | none | string |
| engine.platform() | Get the platform that the engine is running on | none | string |
| engine.vendor() | Get the host engine's vendor name | none | string |

## Lifecycle

| Method | Description | Parameters | Returns |
| ------ | ----------- | ---------- | ------- |
| engine.cycle() | Runs a lua function everytime a certain amount of seconds passed | seconds (number), callable (function) | boolean |
| engine.after() | Runs a lua function after a certain amount of seconds | seconds (number), callable (function) | boolean |
| engine.after_next() | Runs a lua function in the execution cycle of the next script | callable (function) | boolean |

## Resource management

| Method | Description | Parameters | Returns |
| ------ | ----------- | ---------- | ------- |
| engine.resource.all() | Retrieve all resources currently loaded in the session | none | string[] |
| engine.resource.load() | Loads a resource into the session context | path (string) | string |
| engine.resource.unload() | Un-load a resource from the session context | id (string) | boolean |
| engine.resource.get() | Retrieve a field from a given resource | id (string), field (string) | primitive |
| engine.resource.update() | Updates a field in a resource | id (string), field (string), value (primitive) | boolean |

## Data management

| Method | Description | Parameters | Returns |
| ------ | ----------- | ---------- | ------- |
| engine.store.add() | Add a value to the data store | key (string), value (primitive) | boolean |
| engine.store.get() | Retrieve a value from the data store | key (string) | primitive |
| engine.store.update() | Update a value in a store | key (string), value (primitve) | boolean |
| engine.store.delete() | Delete a value from the data store | key (string) | boolean |

## Player

| Method | Description | Parameters | Returns |
| ------ | ----------- | ---------- | ------- |
| engine.players.all() | Retrieve all player id's from the current session | none | string[] |
| engine.players.get() | Get a player from the session, defaults to the current player | id (string) | {string: primitive} |
| engine.players.update() | Update a value in the current player | field (string), value (primitive) | boolean |
