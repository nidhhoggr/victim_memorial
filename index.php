<?php
require_once(dirname(__FILE__) . './../classes/Template.class.php');

$extra['includes'] = <<<EOF
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/styles.css" />
    <link rel="stylesheet" href="css/caroufredsel.css" />
    <link rel="stylesheet" href="js/libs/prettyPhoto/css/prettyPhoto.css" />
    <script data-main="js/config" src="js/libs/require.min.js"></script>
EOF;

$extra['nomenu'] = true;

$content = <<<EOF
    <div id="victim_memorial">
        <div id="content">
        </div>
    </div>
EOF;

Template::display($content, $extra);
