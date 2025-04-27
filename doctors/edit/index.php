<?php require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php'); ?>
<?php
global $APPLICATION;
$APPLICATION->setTitle("Врач " . $_GET['name']);

use Bitrix\Main\UI\Extension;

use Models\lists\DoctorsPropertyValuesTable as DoctorsTable;
use Models\lists\ProceduresPropertyValuesTable as ProceduresTable;
Extension::load('ui.bootstrap4');
$codeName = $_GET['name']; // идентификатор доктора из инфоблока Доктора

if (!empty($_REQUEST['ID'])){

    $el = new \CIBlockElement;
    $PROP = array();
    $PROP[66] = $_REQUEST['FIRST_NAME'];  // свойству с кодом 12 присваиваем значение "Белый"
    $PROP[67] = $_REQUEST['LAST_NAME'];        // свойству с кодом 3 присваиваем значение 38
    $PROP[68] = $_REQUEST['MIDDLE_NAME'];        // свойству с кодом 3 присваиваем значение 38
    $PROP[64] = $_REQUEST['PROC_IDS'];        // свойству с кодом 3 присваиваем значение 38
    $arLoadProductArray = Array(
        "IBLOCK_SECTION" => false,          // элемент лежит в корне раздела
        "PROPERTY_VALUES"=> $PROP,
        "NAME"           =>  $_REQUEST['NAME'],
    );
    $PRODUCT_ID = intval($_REQUEST['ID']);  // изменяем элемент с кодом (ID) 2
    $result = $el->Update($PRODUCT_ID, $arLoadProductArray);

}

$doctors = DoctorsTable::query()
    ->setSelect([
        '*',
        'ID' => 'ELEMENT.ID',
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

$procedures = ProceduresTable::query()
    ->setSelect([
        '*',
        'NAME' => 'ELEMENT.NAME',
        'ID' => 'ELEMENT.ID',

    ])
    ->fetchAll();


?>



<div class="container">
    <div class="row">
        <div class="col">
            <h1 class="text-center">Врачи</h1>
        </div>
    </div>

    <div class="row mt-5">
        <div class="col">
            <h1 class="text-center">Данные врача</h1>
            <div class="col-md-6 offset-md-3 mt-3">
                <?php if ($result == true): ?>
                    <div class="alert alert-success text-center" role="alert">
                        Вы успешно обновили врача
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-md-6 offset-md-3">
            <form class="row g-3 needs-validation" novalidate>
                <input type="hidden" name="ID" value="<?=$doctors['0']['ID']?>">
                <div class="col-12">
                    <input type="text" name="LAST_NAME" class="form-control" id="lastName" value="<?=$doctors['0']['LAST_NAME']?>" required>
                    <div class="valid-feedback">
                        Все хорошо!
                    </div>
                </div>
                <div class="col-12">
                    <input type="text" name="FIRST_NAME" class="form-control" id="firstName" value="<?=$doctors['0']['FIRST_NAME']?>" required>
                    <div class="valid-feedback">
                        Все хорошо!
                    </div>
                </div>
                <div class="col-12">
                    <input type="text" name="MIDDLE_NAME" class="form-control" id="middleName" value="<?=$doctors['0']['MIDDLE_NAME']?>" required>
                    <div class="valid-feedback">
                        Все хорошо!
                    </div>
                </div>
                <div class="col-12">
                    <select class="form-select" name="PROC_IDS" multiple aria-label="пример множественного выбора">
                        <option selected>Откройте это меню выбора</option>
                        <?php foreach ($procedures as $procedure): ?>
                            <option value="<?=$procedure['ID']?>" <?php if($doctors['0']['PROC_IDS'] == $procedure['ID']){ echo 'selected'; } ?>><?=$procedure['NAME']?></option>
                        <?php endforeach; ?>

                    </select>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Сохранить</button>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()
</script>

<?php require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/footer.php'); ?>
