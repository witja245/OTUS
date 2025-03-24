<?php
if (filectime($_SERVER["DOCUMENT_ROOT"]."/local/php_interface/vendor/autoload.php")){
    require_once($_SERVER["DOCUMENT_ROOT"]."/local/php_interface/vendor/autoload.php");
}
if (filectime($_SERVER["DOCUMENT_ROOT"]."/local/php_interface/src/autoload.php")){
    require_once($_SERVER["DOCUMENT_ROOT"]."/local/php_interface/src/autoload.php");
}