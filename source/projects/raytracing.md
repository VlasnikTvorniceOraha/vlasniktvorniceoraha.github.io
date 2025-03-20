---
title: Raytracing in Unity
layout: project.njk
id: raytracing
tags: project
shortDesc: Raytracing in Unity with Compute shaders
description: A simple implementation of Phong shading, Blinn-Phong shading, simple shadows and reflection and refraction with raytracing done with Compute shaders in Unity. The user can disable and enable different parts of shading in the Unity editor. The shader traces rays based on the objects in the scene and determines their colour depending on what parts of the shader are on and the number of bounces/refractions.
role: This was a project that was ment to modernize an existing laboratory exercise at FER. The idea was to rewrite most of the old .NET/Java code and port it into Unity and most importantly, improve rendering performance. This was done by using compute shaders which run lots of parallel threads strictly on the GPU and therefore improve pixel by pixel calculations.
techsUsed: This project was made in Unity 3D with Compute shaders. The shader calculates and overlays the camera image with the one it renders. Calculations are made for each pixel on the screen. The user has free movement but should not move objects around. The materials for the objects are all adjustable and all information is sent to the GPU using relevant streams. The project uses direct HLSL code and not Shadergraph (I didn't know how to use it at the time).
status: Completed
for: College
learned: HLSL, Shaders, Compute shaders
problems: To this day I'm not sure if ray refraction works properly but it looks good so it's fine
opinion: Looks pretty cool, I like it
git: https://github.com/VlasnikTvorniceOraha/RayTracingUnity
private: false
priority: 2
technologies:
  - icon: unity
    name: Unity
  - icon: 3d
    name: 3D
  - icon: csharp
    name: C#
  - icon: hlsl
    name: HLSL

usesVideo: false
galleryImages:
  - url: /projectMedia/raytracing/ambient2.png
  - url: /projectMedia/raytracing/difuse.png
  - url: /projectMedia/raytracing/sjene.png
  - url: /projectMedia/raytracing/refraction.jpg
  - url: /projectMedia/raytracing/blinnphong.png
  - url: /projectMedia/raytracing/reflekcija.png
video: /projectMedia/raytracing/sve.jpg
---
# Raytracing project page
