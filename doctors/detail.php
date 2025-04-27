<?php require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php'); ?>
<?php
global $APPLICATION;
$APPLICATION->setTitle("Врач " . $_GET['name']);

use Bitrix\Main\UI\Extension;
use Models\lists\DoctorsPropertyValuesTable as DoctorsTable;
Extension::load('ui.bootstrap4');
$codeName = $_GET['name']; // идентификатор доктора из инфоблока Доктора


$doctors = DoctorsTable::query()
    ->setSelect([
        '*',
        'NAME' => 'ELEMENT.NAME',
        'PROCEDURES_NAME' => 'PROCEDURES.ELEMENT.NAME',
        'DESCRIPTION' => 'PROCEDURES.DESCRIPTION',
    ])
    ->setFilter([
        'NAME' => $codeName,
    ])
    ->setOrder(['NAME' => 'desc'])
    ->registerRuntimeField(
        null,
        new \Bitrix\Main\Entity\ReferenceField(
            'PROCEDURES',
            \Models\lists\ProceduresPropertyValuesTable::getEntity(),
            ['=this.PROC_IDS' => 'ref.IBLOCK_ELEMENT_ID']
        )
    )
    ->fetchAll();

?>
    <div class="container ">
        <div class="row">
            <div class="col">
                <h1 class="text-center">Врачи</h1>
            </div>
        </div>
        <?php foreach ($doctors as $doctor): ?>
            <div class="row">
                <div class="col">
                    <a href="/doctors/edit/?name=<?= $doctor['NAME'] ?>" class="btn btn-primary">Изменить данные
                        врача</a>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col">
                    <h3><?= $doctor['LAST_NAME'] ?> <?= $doctor['FIRST_NAME'] ?> <?= $doctor['MIDDLE_NAME'] ?></h3>
                </div>
            </div>
            <div class="row ">
                <div class="col mt-3">
                    <ol class="list-unstyled">
                        <li><h5>Процедуры:</h5>
                            <ul>
                                <li><?= $doctor['PROCEDURES_NAME'] ?></li>
                                <li><?= $doctor['DESCRIPTION'] ?></li>

                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
<?php require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/footer.php'); ?>