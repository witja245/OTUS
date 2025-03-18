<?php
declare(strict_types=1);
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
function division(float $a, float $b): int
{
    return $a / $b;
}

division(2,2);
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php');