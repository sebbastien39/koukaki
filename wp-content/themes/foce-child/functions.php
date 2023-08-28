<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    // Chargement feuille de style du thème enfant "foce-child"
    wp_enqueue_style('swiper-style', "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" , array());
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/assets/css/theme.scss', array(), filemtime(get_stylesheet_directory() . '/assets/css/theme.scss'));
    wp_enqueue_script('swiper-js', "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" , array(), null, true);
    wp_enqueue_script('theme-js', get_stylesheet_directory_uri() . '/assets/js/script.js', array(),time(), true);
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}