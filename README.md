# Modular Button Screen

A customizable and modern React Native screen using `expo-router`. This screen features a full-screen background image, a title, and a set of rounded navigation buttons styled with vibrant colors and shadows.

## Features

- Easy-to-edit configuration for the title, background image, and buttons
- Stylish, rounded buttons with shadow and color customization
- Seamless navigation using `router.push()` from `expo-router`
- Clean and centered layout suitable for landing or menu screens
- Modular design for quickly linking to pages with unique functionality

## Usage

1. Modify the `title`, `bgImagePath`, and `buttons` array at the top of the file.
2. Each button object should include:
   - `title`: Button label
   - `path`: Route to navigate using `router.push(path)`
   - `backgroundColor`: Button background color
   - `color`: Text color
3. Place your background image in the `assets/images` folder and ensure the path is correct.
4. Use this screen as a home, dashboard, or navigation hub for your app.

## Requirements

- React Native with Expo
- `expo-router`
- Image asset for background

This layout is modular — just update the config values at the top to change content without modifying the layout logic. Perfect for prototyping or multi-page app dashboards.
