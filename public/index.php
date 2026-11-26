<?php
/**
 * Main Template File for F7 Medical Equipment Theme
 *
 * @package F7_Medical_Equipment
 */
$theme_uri = get_template_directory_uri();
?>
<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />
    <meta name="google-site-verification" content="9u-TvCB1PjXX0yRpNYhFE243Bu1YScDvGvmFmgIyKDI" />
    <title>F7 Medical Equipment – Sales &amp; Rental Across 7 Locations in India</title>
    <meta name="description" content="Reliable medical equipment sales and rental across Hyderabad, Delhi, Vijayawada, Visakhapatnam, Chennai, Bangalore, and Pune. Indicative prices, fast quotations &amp; WhatsApp support." />
    <link rel="canonical" href="https://f7medicalequipments.com/" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="<?php echo esc_url($theme_uri . '/assets/index-8ynmEtu6.css'); ?>">
    <link rel="stylesheet" href="<?php echo esc_url($theme_uri . '/style.css'); ?>">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class('bg-slate-50 text-slate-900 font-sans antialiased selection:bg-teal-600 selection:text-white'); ?>>
    <div id="root"></div>
    <script type="module" src="<?php echo esc_url($theme_uri . '/assets/index-BDoBd6o0.js'); ?>"></script>
    <?php wp_footer(); ?>
  </body>
</html>
