<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
		<div id="navigation-menu" class="">
            <div class="title"><?php bloginfo('name'); ?></div>
            <button class="menu-btn"></button>
        </div>
        <div class="fullscreen-menu">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                <img src="<?php echo get_template_directory_uri(). '/assets/images/logo.png'; ?>" alt="logo">
            </a>
            <ul>
                <li><a href="#story">Histoire</a></li>
                <li><a href="#characters">Personnages</a></li>
                <li><a href="#place">Lieu</a></li>
                <li><a href="#studio">Studio Koukaki</a></li>
            </ul>
            <img src="<?php echo get_template_directory_uri(). '/assets/images/Sunflower.png'; ?>" alt="Sunflower image" id="menu-image-sunflower">
            <img src="<?php echo get_template_directory_uri(). '/assets/images/orchid.png'; ?>" alt="orchid image" id="menu-image-orchid">
            <img src="<?php echo get_template_directory_uri(). '/assets/images/hibiscus_footer.png'; ?>" alt="hibiscus image" id="menu-image-hibiscus">
            <img src="<?php echo get_template_directory_uri(). '/assets/images/random_flower.png'; ?>" alt="random_flower image" id="menu-image-random-flower">
            <img src="<?php echo get_template_directory_uri(). '/assets/images/flower.png'; ?>" alt="flower image" id="menu-image-flower">
            <img src="<?php echo get_stylesheet_directory_uri(). '/assets/images/cat_gris.png'; ?>" alt="cat gris image" id="menu-image-cat-grey">
            <img src="<?php echo get_stylesheet_directory_uri(). '/assets/images/cat_bleu.png'; ?>" alt="cat bleu image" id="menu-image-cat-blue">
            <img src="<?php echo get_stylesheet_directory_uri(). '/assets/images/cat_jaune.png'; ?>" alt="cat jaune image" id="menu-image-cat-yellow">
            <p>STUDIO KOUKAKI</p>
        </div>

	</header><!-- #masthead -->
