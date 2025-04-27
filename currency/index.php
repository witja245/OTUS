<?php
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php');
$APPLICATION->SetTitle("");

?><?$APPLICATION->IncludeComponent(
	"otus:currency.views", 
	"list", 
	array(
		"CURRENCY" => "BYN",
		"COMPONENT_TEMPLATE" => "list"
	),
	false
);?>