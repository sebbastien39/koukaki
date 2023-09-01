<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner" class="animation-video">
            <div class="container-video">          
                <video autoplay loop muted playsinline preload="none"
                    src=<?php echo get_stylesheet_directory_uri(). '/assets/videos/Studio+Koukaki-vidéo+header+sans+son+(1).mp4'; ?> 
                    poster=<?php echo get_template_directory_uri() . '/assets/images/banner.png'; ?>  alt="logo Fleurs d'oranger & chats errants">
                </video>
            </div>
            <img class="banner-logo" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
        </section>
        <section id="story" class="story">            
            <h2><span>L'</span><span>hist</span><span>oire</span></h2>
            <article class="story__article">
                <p ><?php echo get_theme_mod('story'); ?></p>
            </article>

            <?php echo get_template_part("templates/personnages"); ?>
            <article id="place">
                <div>
                    <h3>Le Lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>                    
                    <img class="petit-nuage animation-nuages" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/little_cloud.png'; ?> " alt="image petit nuage">
                    <img class="grand-nuage animation-nuages" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/big_cloud.png'; ?> " alt="image grand nuage">
                </div>
            </article>
        </section>


        <section id="studio">
            <h2><span>Studio</span> <span>Koukaki</span></h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>
    </main><!-- #main -->

<?php
get_footer();
