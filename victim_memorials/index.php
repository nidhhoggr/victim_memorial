<?php
require(dirname(__FILE__) . '/../../constants.php');
require(dirname(__FILE__) . '/../../vendors/htmldom/html_dom.php');

    if(empty($_GET['id']))
    echo file_get_html($SITE_PATH . '/own/victim_memorials/json');
    else
    echo file_get_html($SITE_PATH . '/own/victim_memorials/json/'.$_GET['id']);
